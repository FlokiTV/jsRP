on("onClientMapStart", () => {
  prettylog("[jsrp:onClientMapStart] event trigger");
  emitNet("jsrp:onClientMapStart");
  emit("jsrp:onClientMapStart");
});

on("playerSpawned", async (spawn) => {
  prettylog("[jsrp:playerSpawned] event trigger");
  emitNet("jsrp:playerSpawned", spawn);
  emit("jsrp:playerSpawned", spawn);
  SetEntityVisible(PlayerPedId(), false);
});

on("playerDropped", async () => {
  const ped = GetPlayerPed(source);
  prettylog("[jsrp:playerDropped] event trigger");
});

on("jsrp:playerSpawned", async (spawn) => {
  const player = global.source;
  /*
    Trigger only first spawn
  */
  if (CFG.firstSpawn) {
    CFG.firstSpawn = false;
    SPAWN.setAutoSpawn(false);
    SetNuiFocus(true, true);
  }

  // SetDefaultPed(() => {
  //   log("jsrp-register:SetDefaultPed");
  //   emit("jsrp:login:setPlayerLastPosition", player);
  // });
  // prettylog("[jsrp:playerSpawned] set default appearance");
  // emitNet("jsrp-register:getDefaultAppearance", "f");
  /*
    Set NUI
  */
});

onNet("jsrp-register:SetLastPosition", (location) => {
  prettylog("[jsrp-register:SetLastPosition]");
  let [x, y, z] = location;
  spawnLocations.last = {
    x,
    y,
    z,
  };
  prettylog(spawnLocations.last);
});

onNet("jsrp-register:SetAppearance", (appearance) => {
  prettylog("[jsrp-register:SetAppearance] set appearance");
  AP.setPlayerAppearance(appearance);
});

onNet("jsrp-register:startPlayerCustomization", () => {
  prettylog("jsrp-register:startPlayerCustomization");
  AP.startPlayerCustomization((appearance) => {
    if (appearance) {
      prettylog("[jsrp:startPlayerCustomization] saved appearance");
      prettylog(appearance);
    } else {
      prettylog("[jsrp:startPlayerCustomization] customization canceled");
    }
  }, APConfig);
});
