/// <reference types="@citizenfx/client" />
const { request } = exports.jsrp;
const resource = GetCurrentResourceName();

on("playerSpawned", () => {
  let player = GetPlayerIndex(-1);
  request(resource, "VerifyPlayerMoney", player).then((response) => {
    console.log(response);
  });
});
