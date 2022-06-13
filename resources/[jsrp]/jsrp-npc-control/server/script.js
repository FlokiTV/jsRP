/// <reference types="@citizenfx/server" />
const resource = GetCurrentResourceName();
const jsRP = exports.jsrp.jsRP();
const { onRequest } = jsRP;

const config = require("./config");
onRequest(resource, "getConfig", (args) => {
  return config;
});
