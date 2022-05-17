const DB = exports["jsrp-db"];

const parseIds = (player) => {
  const ids = {};
  for (let i = 0; i < GetNumPlayerIdentifiers(player); i++) {
    const identifier = GetPlayerIdentifier(player, i).split(":");
    ids[identifier[0]] = identifier[1];
  }
  return ids;
};

// onNet("jsrp:onClientMapStart", async () => {
//   const player = global.source;
//   let ped = GetPlayerPed(player);
//   const ids = parseIds(player);
//   const userId = await DB.getUserByLicense(ids.license);
//   console.log("jsrp:onClientMapStart", GetPlayerName(player));
//   let user = await DB.getUser(userId);
//   console.log(ped);
//   if (user) SetEntityCoords(ped, user.x, user.y, user.z);
// });

onNet("jsrp:playerSpawned", async (spawn) => {
  const player = global.source;
  let ped = GetPlayerPed(player);
  const ids = parseIds(player);
  const userId = await DB.getUserByLicense(ids.license);
  console.log("jsrp:playerSpawned", GetPlayerName(player));
  let user = await DB.getUser(userId);
  console.log(ped);
  if (user) SetEntityCoords(ped, user.x, user.y, user.z);
});

on("playerConnecting", (name, setKickReason, deferrals) => {
  deferrals.defer();
  const player = global.source;
  setTimeout(async () => {
    deferrals.update(`Olá, ${name}. Estamos verificando nosso banco de dados.`);
    const ids = parseIds(player);
    console.log(GetPlayerName(player));
    console.log(ids);
    const userId = await DB.getUserByLicense(ids.license);
    console.log("getUserByLicense", userId);
    if (!userId) {
      const nId = await DB.createUser(name, ids);
      console.log("createUser", nId.id);
    } else {
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

on("playerDropped", async (reason) => {
  const player = global.source;
  const ids = parseIds(player);
  const ped = GetPlayerPed(global.source);
  const [playerX, playerY, playerZ] = GetEntityCoords(ped);
  console.log(`Player ${GetPlayerName(global.source)} dropped (Reason: ${reason}).`);
  console.log(ids);
  const userId = await DB.getUserByLicense(ids.license);
  console.log("getUserByLicense", userId);
  if (userId) {
    console.log("updateUserPos", userId);
    let pos = await DB.updateUserPos(userId, {
      x: playerX,
      y: playerY,
      z: playerZ + 2,
    });
    console.log("updateUserPos");
    console.log(pos);
  }
});
