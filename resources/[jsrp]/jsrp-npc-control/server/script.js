/// <reference types="@citizenfx/server" />
const Resource = GetCurrentResourceName();
const { onRequest } = exports.jsrp;

const config = require("./config");
onRequest(Resource, "getConfig", () => {
  return config;
});
