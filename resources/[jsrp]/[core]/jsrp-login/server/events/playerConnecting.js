on("playerConnecting", async (name, setKickReason, deferrals) => {
  deferrals.defer();
  const player = global.source;
  deferrals.update(`Olá, ${name}. Estamos verificando nosso banco de dados.`);
  const ids = jsRP().parseIdentifiers(player);
  console.log("Lisence for " + player + ": " + ids.license);
  if (!ids.license || !ids.ip) {
    prettylog("Erro ao obter licença do FiveM.");
    deferrals.done("Erro ao obter licença do FiveM.");
  }
  /*
    Check user on Database
  */
  let userId = await jsRP("id").getIdByLicense(ids.license);
  if (!userId) {
    prettylog(`Creating a new user ${name}`);
    let userId = await jsRP("user").create(name, ids);
    prettylog(userId);
    Webhook("register", "jsrp:playerConnecting", `Register a new Player ${name} [${userId.id}]`);
  } else {
    prettylog("[GetUserIdByLicense] " + userId);
    Webhook("spawn", "jsrp:playerConnecting", `Logger Player [${userId}] [${player}] ${GetPlayerName(player)}`);
    prettylog("Logged " + GetPlayerName(player) + " " + userId);
    // whitelist
    // banned
  }
  emit("playerConnected", userId);
  //end queue
  deferrals.done();
});
