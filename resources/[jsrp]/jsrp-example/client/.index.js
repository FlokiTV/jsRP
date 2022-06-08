/// <reference types="@citizenfx/client" />
console.log("teste-index");
const { Request } = exports.jsrp;
const Resource = GetCurrentResourceName();

on("playerSpawned", () => {
  Request(Resource, "VerifyPlayerMoney", GetPlayerFromServerId(global.source)).then((response) => {
    console.log(response);
  });
});
