/// <reference types="@citizenfx/server" />
const resource = GetCurrentResourceName();
const jsRP = exports["jsrp"].jsRP();
const { onRequest, parseIdentifiers, DB } = jsRP;

const log = (data) => {
  console.log(data);
};

on("playerConnected", (userId) => {
  log("User connected " + userId);
});

// const userId = await DB.GetUserIdByLicense(ids.license);
//   const register = await DB.GetUserRegister(userId);
