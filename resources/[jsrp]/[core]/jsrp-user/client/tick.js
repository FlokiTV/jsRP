setTick(() => {
  let playerPed = PlayerPedId();
  let spawned = IsEntityVisible(playerPed); // check if player is already on the world

  // setImmediate(() => {
  //   emitNet("IsEntityDead");
  // });

  // send on next game tick
  if (!spawned)
    setImmediate(() => {
      if (IsEntityDead(playerPed)) {
        //trigger dead
        if (!CFG.diedAt) {
          CFG.diedAt = GetGameTimer();
          UI_GOTO("/dead");
          SetNuiFocus(true, false);
        } else {
          let deadTime = GetGameTimer() - CFG.diedAt;
          let resTime = msToTime(CFG.deadTime - deadTime);
          SendNUIMessage({
            updateDead: resTime,
          });
          if (deadTime >= CFG.deadTime) {
            prettylog("trigger DeadRespawn");
            SpawnToLocation(CFG.spawn);
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
    });
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
