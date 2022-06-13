on("playerDropped", async (reason) => {
  const player = global.source;
  Webhook("disconnect", "jsrp:playerConnecting", `Disconnected player ${GetPlayerName(player)}`);
  // const ids = parseIds(player);
  // const ped = GetPlayerPed(global.source);
  // const [playerX, playerY, playerZ] = GetEntityCoords(ped);
  // const heading = GetEntityHeading(ped);
  // prettylog(`Player ${GetPlayerName(global.source)} dropped (Reason: ${reason}).`);
  // const userId = await DB.GetUserIdByLicense(ids.license);
  // prettylog("GetUserIdByLicense " + userId);
  // if (userId) {
  //   prettylog("UpdateUserPosition " + userId);
  //   let pos = await DB.UpdateUserPosition(userId, {
  //     x: playerX,
  //     y: playerY,
  //     z: playerZ + 0.5,
  //     h: heading,
  //   });
  //   prettylog(pos);
  // }
});
