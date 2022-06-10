/// <reference types="@citizenfx/client" />
const { request } = exports.jsrp;
const resource = GetCurrentResourceName();

on("playerSpawned", () => {
  request(resource, "VerifyPlayerMoney", GetPlayerFromServerId(global.source)).then((response) => {
    console.log(response);
  });
});
