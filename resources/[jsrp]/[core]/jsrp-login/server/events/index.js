/*
  Register
*/

// onNet("jsrp:playerSpawned", async (spawn) => {
//   const player = global.source;
//   const ids = parseIds(player);
//   const userId = await DB.GetUserIdByLicense(ids.license);
//   prettylog(`Check if player [${userId}] has register`);
//   const register = await DB.GetUserRegister(userId);
//   if (!register) {
//     emitNet("jsrp-register:goto", player, "/register");
//     prettylog(`jsrp-register:goto register`);
//     prettylog(`jsrp-register:SetAppearance`);
//     emitNet("jsrp-register:SetAppearance", player, defaultAppearance.m);
//   } else {
//     prettylog(`jsrp-register:goto welcome`);
//     emitNet("jsrp-register:SetAppearance", player, JSON.parse(register.appearance));
//     emitNet("jsrp-register:goto", player, "/welcome");
//   }
//   setPlayerLastPosition(player);
// });

/*
  Update Last Position on Client
*/
// on("jsrp:register:GetPlayerLastPosition", (player) => {
//   prettylog("GetPlayerLastPosition " + player);
//   setPlayerLastPosition(player);
// });

// onNet("jsrp-register:CreateUserRegister", async (register) => {
//   const player = global.source;
//   const ids = parseIds(player);
//   const userId = await DB.GetUserIdByLicense(ids.license);
//   prettylog("CreateUserRegister for userID " + userId);
//   const result = await DB.CreateUserRegister(userId, register);
//   prettylog("CreateUserRegister");
//   // prettylog(result);
// });

// onNet("jsrp-register:getDefaultAppearance", async (sex) => {
//   const player = global.source;
//   // parseIds
//   // console.log("jsrp-register:getAppearance", parseIds(player));
//   emitNet("jsrp-register:SetAppearance", player, defaultAppearance[sex]);
// });
