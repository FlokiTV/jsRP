/// <reference types="@citizenfx/server" />

const { Sequelize, DataTypes } = require("sequelize");

const CFG = {
  // Connection
  host: GetConvar("jsrp-db:host", "localhost"),
  databse: GetConvar("jsrp-db:database", "jsRP"),
  username: GetConvar("jsrp-db:username", "root"),
  password: GetConvar("jsrp-db:password", ""),
  ready: false,
  scriptTables: [],
  modules: {},
};
const modules = {};

const log = (data) => {
  console.log(`[${GetCurrentResourceName()}] ${JSON.stringify(data)}`);
};

const prettylog = (data) => {
  exports["jsrp-ws"].prettylog("s", GetCurrentResourceName(), data);
};

const sequelize = new Sequelize(CFG.databse, CFG.username, CFG.password, {
  host: CFG.host,
  dialect: "mysql",
  logging: false,
});

prettylog("init database");

const getDataType = (type) => {
  return DataTypes[type.toUpperCase()];
};

const init = async (cb) => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  await sequelize.sync({ force: false });
  console.log("All models were synchronized successfully.");
  prettylog("All models were synchronized successfully.");
  cb(sequelize);
};

init((sequelize) => {
  prettylog("Database done");
});
