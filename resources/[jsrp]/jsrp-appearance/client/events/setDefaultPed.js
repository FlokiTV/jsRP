let visibleTick = false;

onNet("setDefaultPed", async () => {
  let player = GetPlayerServerId(PlayerId());
  let ped = PlayerPedId();
  console.log("ped loaded " + player);
  // SetEntityVisible(ped, true);
  /*
    Trigger only on first spawn
  */
  if (CFG.firstSpawn) {
    CFG.firstSpawn = false;
    SPAWN.setAutoSpawn(false);
    SetEntityVisible(ped, false);
    visibleTick = setInterval(() => {
      //set visible only to player
      SetEntityLocallyVisible(ped);
    }, 50);
    // SetNuiFocus(true, true); //nui to select sex
    //check if player already have appearance
    let ap = await request(resource, "getAppearance", player);
    if (ap) {
      console.log(ap);
      AP.setPlayerAppearance(ap); // from db
    } else {
      let defalt = await request(resource, "defaultAppearance", "m");
      AP.setPlayerAppearance(defalt);
      startCustomization();
    }
  }
});

const startCustomization = () => {
  AP.startPlayerCustomization((appearance) => {
    if (appearance) {
      console.log("[startPlayerCustomization] saved appearance");
      doneCustomization(appearance);
    } else {
      console.log("[jsrp:startPlayerCustomization] customization canceled");
      setTimeout(() => {
        startCustomization();
      }, 1000);
    }
  }, APConfig);
};

const doneCustomization = (appearance = false) => {
  let ped = PlayerPedId();
  if (appearance) {
    console.log(appearance); //save on database
  }
  clearInterval(visibleTick);
  SetEntityVisible(ped, true);
  SetEntityCoords(ped, spawnLocations["safe"].x, spawnLocations["safe"].y, spawnLocations["safe"].z);
};
