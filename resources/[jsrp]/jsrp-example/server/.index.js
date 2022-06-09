/// <reference types="@citizenfx/server" />
console.log("index");
const { onRequest, ParseIdentifiers } = exports.jsrp;
const Resource = GetCurrentResourceName();

onRequest(Resource, "VerifyPlayerMoney", (playerId) => {
  prettylog(`Check if player [${playerId}] has bank account`);
  return playerId;
});

on("playerConnected", (userId) => {
  console.log("User connected " + userId);
});
// const userId = await DB.GetUserIdByLicense(ids.license);
//   const register = await DB.GetUserRegister(userId);
