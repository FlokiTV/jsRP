/// <reference types="@citizenfx/server" />
const jsRP = exports["jsrp"].jsRP;
const webhook = require("./webhook");

const Webhook = (to, title, description, color = null) => {
  if (webhook[to]) jsRP("discord").log(webhook[to], title, description, GetCurrentResourceName(), color);
};

const prettylog = (data) => {
  console.log(data);
};

const setPlayerLastPosition = async (player) => {
  const ped = GetPlayerPed(player);
  const ids = parseIds(player);
  const userId = await DB.GetUserIdByLicense(ids.license);
  const user = await DB.GetUserById(userId);
  prettylog("jsrp-register:SetLastPosition " + GetPlayerName(player));
  let check = user.x != 0 && user.y != 0 && user.z != 0; //prevent empty location
  if ((user, check)) emitNet("jsrp-register:SetLastPosition", player, [user.x, user.y, user.z]); //SetEntityCoords(ped, user.x, user.y, user.z);
};
exports("setPlayerLastPosition", setPlayerLastPosition);
