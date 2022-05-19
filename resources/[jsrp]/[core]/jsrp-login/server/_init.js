/// <reference types="@citizenfx/server" />
const DB = exports["jsrp-db"];
const LOG = exports["jsrp-ws"].log;
const root = GetResourcePath(GetCurrentResourceName());

const log = (data) => {
  LOG(`[${GetCurrentResourceName()}] ${JSON.stringify(data)}`);
};

const prettylog = (data) => {
  exports["jsrp-ws"].prettylog("s", GetCurrentResourceName(), data);
};

const parseIds = (player) => {
  const ids = {};
  for (let i = 0; i < GetNumPlayerIdentifiers(player); i++) {
    const identifier = GetPlayerIdentifier(player, i).split(":");
    ids[identifier[0]] = identifier[1];
  }
  return ids;
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
