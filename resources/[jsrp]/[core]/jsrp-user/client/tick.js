setTick(() => {
  let playerPed = PlayerPedId();
  if (IsEntityDead(playerPed)) {
    //trigger dead
    if (!CFG.diedAt) {
      CFG.diedAt = GetGameTimer();
      UI_GOTO("/dead");
      SetNuiFocus(true, false);
    } else {
      let deadTime = GetGameTimer() - CFG.diedAt;
      setImmediate(() => {
        SendNUIMessage({
          updateDead: msToTime(CFG.deadTime - deadTime),
        });
      });
      if (deadTime >= CFG.deadTime) {
        prettylog("trigger DeadRespawn");
        SpawnToLocation(CFG.spawn);
        UI_GOTO("/");
        SetNuiFocus(false, false);
      }
    }
  } else {
    if (CFG.diedAt > 0) prettylog("reseting diedAt");
    CFG.diedAt = 0;
  }
});
