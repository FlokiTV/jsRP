/// <reference types="@citizenfx/server" />
const resource = GetCurrentResourceName();
const { onRequest } = exports.jsrp;

const config = require("./config");
onRequest(resource, "getConfig", (args) => {
  return config;
});
