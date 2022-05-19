const { Sequelize, DataTypes } = require("sequelize");

const HOST = GetConvar("jsrp-db:host", "localhost");
const DATABASE = GetConvar("jsrp-db:database", "jsRP");
const USERNAME = GetConvar("jsrp-db:username", "root");
const PASSWORD = GetConvar("jsrp-db:password", "");

const log = (data) => {
  console.log(`[${GetCurrentResourceName()}] ${JSON.stringify(data)}`);
};

const prettylog = (data) => {
  exports["jsrp-ws"].prettylog("s", GetCurrentResourceName(), data);
};

const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
  host: HOST,
  dialect: "mysql",
  logging: false,
});

prettylog("init database");

const modules = {};
