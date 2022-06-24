/// <reference types="@citizenfx/server" />
const resource = GetCurrentResourceName();
const jsRP = exports["jsrp"].jsRP;
const { onRequest, response } = jsRP();
const defaultAppearance = require("./default");
