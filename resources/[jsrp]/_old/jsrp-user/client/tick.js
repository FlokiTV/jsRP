/// <reference types="@citizenfx/client" />

setTick(() => {
  let ped = GetPlayerPed(-1);
  CFG.visible = IsEntityVisible(ped) ? true : false;
  // send on next game tick
  // setImmediate(async () => {
  if (CFG.spawned)
    if (IsEntityDead(ped)) {
      //trigger dead
      if (!CFG.diedAt) {
        CFG.diedAt = GetGameTimer();
        UI_GOTO("/dead");
        SetNuiFocus(true, false);
        emit("jsrp-user:SetEntityDead");
      } else {
        let deadTime = GetGameTimer() - CFG.diedAt;
        let resTime = msToTime(CFG.deadTime - deadTime);
        SendNUIMessage({
          updateDead: resTime,
        });
        if (deadTime >= CFG.deadTime) {
          prettylog("trigger DeadRespawn");
          jsRP.SpawnToLocation(CFG.spawn);
          UI_GOTO("/");
          SetNuiFocus(false, false);
        }
      }
    } else {
      // trigger dead time
      if (CFG.diedAt > 0) {
        prettylog("reseting diedAt");
        CFG.diedAt = 0;
      }
    }
  // });
});

// on("gameEventTriggered", (name, args) => {
//   console.log(`Game event ${name} ${args.join(", ")}`);
//   let victim = args[0];
//   let attacker = args[1];
//   // const isFatal = !!args[i++];
//   // const weaponHash = args[i++];
//   // i += 5; // skip 5 unknown values
//   // const isMelee = !!args[i++];
//   // const vehicleDamageTypeFlag = args[i++];
//   if (IsEntityAPed(victim)) {
//     let vPed = NetworkGetNetworkIdFromEntity(victim);
//     console.log(GetPlayerServerId(vPed));
//   }
//   console.log("Victim " + GetEntityMaxHealth(victim) + " " + GetEntityHealth(victim));
//   // console.log(GetEntityHealth(attacker));
//   console.log("---------");
// });
