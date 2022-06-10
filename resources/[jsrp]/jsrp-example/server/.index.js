/// <reference types="@citizenfx/server" />
const resource = GetCurrentResourceName();
const jsRP = exports["jsrp"];
const { onRequest, parseIdentifiers } = jsRP;
const DB = jsRP.getModule("DB");

const log = (data) => {
  // exports["jsrp-ws"].prettylog("s", GetCurrentResourceName(), data);
  console.log(data);
};

on("playerConnected", (userId) => {
  log("User connected " + userId);
});

// const userId = await DB.GetUserIdByLicense(ids.license);
//   const register = await DB.GetUserRegister(userId);
