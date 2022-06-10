/// <reference types="@citizenfx/server" />
const resource = GetCurrentResourceName();
const jsRP = exports["jsrp"];
const { onRequest, parseIdentifiers } = jsRP;
const DB = jsRP.getModule("DB");

const log = (data) => {
  // exports["jsrp-ws"].prettylog("s", GetCurrentResourceName(), data);
  console.log(data);
};

onRequest(resource, "VerifyPlayerMoney", (playerId) => {
  log(`Check if player [${playerId}] has bank account`);
  return playerId;
});

on("playerConnected", (userId) => {
  log("User connected " + userId);
});

log("--------- init example ---------");
// const userId = await DB.GetUserIdByLicense(ids.license);
//   const register = await DB.GetUserRegister(userId);
