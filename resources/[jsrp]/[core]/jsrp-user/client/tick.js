setTick(() => {
  let playerPed = PlayerPedId();
  if (IsEntityDead(playerPed)) {
    if (!CFG.diedAt) {
      CFG.diedAt = GetGameTimer();
    } else {
      let deadTime = GetGameTimer() - CFG.diedAt;
      setImmediate(() => {
        prettylog(msToTime(deadTime) + " " + msToTime(CFG.deadTime));
      });
      if (deadTime >= CFG.deadTime) {
        prettylog("trigger DeadRespawn");
        SpawnToLocation(CFG.spawn);
      }
    }
  } else {
    if (CFG.diedAt > 0) prettylog("reseting diedAt");
    CFG.diedAt = 0;
  }
});
