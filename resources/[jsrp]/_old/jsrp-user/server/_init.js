const DB = exports["jsrp-db"];

const prettylog = (data) => {
  try {
    exports["jsrp-ws"].prettylog("s", GetCurrentResourceName(), data);
  } catch (error) {
    console.log(data);
  }
};

const ParseIdentifiers = (player) => {
  const ids = {};
  for (let i = 0; i < GetNumPlayerIdentifiers(player); i++) {
    const identifier = GetPlayerIdentifier(player, i).split(":");
    ids[identifier[0]] = identifier[1];
  }
  return ids;
};
exports("ParseIdentifiers", ParseIdentifiers);

onNet("IsEntityDead", async () => {
  let life = GetEntityHealth(GetPlayerPed(source));
  let ids = ParseIdentifiers(source);
  let player = await DB.GetUserIdByLicense(ids.lisence);
  // console.log(ids);
});

onNet("SetEntityDead", async (source, dead) => {
  // let life = GetEntityHealth(GetPlayerPed(source));
  // let ids = ParseIdentifiers(source);
  // let player = await DB.GetUserIdByLicense(ids.lisence);
  prettylog("SetEntityDead");
  prettylog(source);
  prettylog(dead);
});

// let user = DB.SetUserDead();
// DB.SetUserDie();
