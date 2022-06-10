/// <reference types="@citizenfx/server" />

const { Sequelize, DataTypes } = require("sequelize");
const jsRP = exports.jsrp;

const CFG = {
  // Connection
  host: GetConvar("jsrp-db:host", "localhost"),
  databse: GetConvar("jsrp-db:database", "jsRP"),
  username: GetConvar("jsrp-db:username", "root"),
  password: GetConvar("jsrp-db:password", ""),
  sequelize: {},
  schemas: {},
  ready: false,
};

const log = (data) => {
  // exports["jsrp-ws"].prettylog("s", GetCurrentResourceName(), data);
  console.log(data);
};

const getDataType = (type) => {
  return DataTypes[type.toUpperCase()];
};

const init = async (cb) => {
  const sequelize = new Sequelize(CFG.databse, CFG.username, CFG.password, {
    host: CFG.host,
    dialect: "mysql",
    logging: false,
  });
  CFG.sequelize = sequelize;
  log("init database");
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  await sequelize.sync({ force: false });
  console.log("All models were synchronized successfully.");
  log("All models were synchronized successfully.");
  cb(sequelize);
};

init((sequelize) => {
  log("Database done");
  CFG.ready = true;
});
