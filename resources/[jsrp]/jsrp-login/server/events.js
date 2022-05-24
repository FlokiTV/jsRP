/// <reference types="@citizenfx/server" />
const defaultAppearance = require(`${root}/appearance.json`);

/*
  Register
*/

onNet("jsrp:playerSpawned", async (spawn) => {
  const player = global.source;
  const ids = parseIds(player);
  const userId = await DB.GetUserIdByLicense(ids.license);
  prettylog(`Check if player [${userId}] has register`);
  const register = await DB.GetUserRegister(userId);
  if (!register) {
    emitNet("jsrp-register:goto", player, "/register");
    prettylog(`jsrp-register:goto register`);
    prettylog(`jsrp-register:SetAppearance`);
    emitNet("jsrp-register:SetAppearance", player, defaultAppearance.m);
  } else {
    prettylog(`jsrp-register:goto welcome`);
    emitNet("jsrp-register:SetAppearance", player, JSON.parse(register.appearance));
    emitNet("jsrp-register:goto", player, "/welcome");
  }
  setPlayerLastPosition(player);
});

/*
  Login
*/

on("playerConnecting", (name, setKickReason, deferrals) => {
  deferrals.defer();
  const player = global.source;
  setTimeout(async () => {
    deferrals.update(`Olá, ${name}. Estamos verificando nosso banco de dados.`);
    const ids = parseIds(player);
    prettylog("New connection: " + GetPlayerName(player));
    prettylog("Lisence: " + ids.license);
    // log(ids);
    if (!ids.license || !ids.ip) {
      prettylog("Erro ao obter licença do FiveM.");
      deferrals.done("Erro ao obter licença do FiveM.");
    }
    /*
      Check user on Database
    */
    const userId = await DB.GetUserIdByLicense(ids.license);
    if (!userId) {
      prettylog(`Creating a new user ${name}`);
      Webhook("spawn", "jsrp:playerConnecting", `Creating a new Player ${name}`);
      const nId = await DB.CreateUser(name, ids);
      prettylog(nId);
    } else {
      prettylog("[GetUserIdByLicense] " + userId);
      Webhook("spawn", "jsrp:playerConnecting", `Logger Player [${userId}] ${GetPlayerName(player)}`);
      prettylog("Logged " + GetPlayerName(player) + " " + userId);
    }
    deferrals.done();
    // pretend to be a wait
    // setTimeout(() => {
    //   if (steamIdentifier === null) {
    //     deferrals.done("You are not connected to Steam.");
    //   } else {
    //     deferrals.done();
    //   }
    // }, 0);
  }, 0);
});

/*
  Disconnect
*/

on("playerDropped", async (reason) => {
  const player = global.source;
  const ids = parseIds(player);
  const ped = GetPlayerPed(global.source);
  const [playerX, playerY, playerZ] = GetEntityCoords(ped);
  const heading = GetEntityHeading(ped);
  prettylog(`Player ${GetPlayerName(global.source)} dropped (Reason: ${reason}).`);
  const userId = await DB.GetUserIdByLicense(ids.license);
  prettylog("GetUserIdByLicense " + userId);
  if (userId) {
    prettylog("UpdateUserPosition " + userId);
    let pos = await DB.UpdateUserPosition(userId, {
      x: playerX,
      y: playerY,
      z: playerZ + 0.5,
      h: heading,
    });
    prettylog(pos);
  }
});

/*
  Update Last Position on Client
*/
on("jsrp:register:GetPlayerLastPosition", (player) => {
  prettylog("GetPlayerLastPosition " + player);
  setPlayerLastPosition(player);
});

onNet("jsrp-register:CreateUserRegister", async (register) => {
  const player = global.source;
  const ids = parseIds(player);
  const userId = await DB.GetUserIdByLicense(ids.license);
  prettylog("CreateUserRegister for userID " + userId);
  const result = await DB.CreateUserRegister(userId, register);
  prettylog("CreateUserRegister");
  // prettylog(result);
});

onNet("jsrp-register:getDefaultAppearance", async (sex) => {
  const player = global.source;
  // parseIds
  // console.log("jsrp-register:getAppearance", parseIds(player));
  emitNet("jsrp-register:SetAppearance", player, defaultAppearance[sex]);
});
