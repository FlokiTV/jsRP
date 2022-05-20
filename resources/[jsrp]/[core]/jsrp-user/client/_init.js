const SPAWN = exports.spawnmanager;

const CFG = {
  visible: true,
  visibleLocal: true,
  deadTime: 1000 * 10,
  diedAt: 0,
  spawn: [162.63803100585938, -987.2031860351562, 30.091930389404297, 160],
};

const prettylog = (data) => {
  emitNet("jsrp:ws:prettylog", "c", GetCurrentResourceName(), JSON.stringify(data));
};

const msToTime = (duration) => {
  var milliseconds = Math.floor((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
};

setImmediate(() => {
  prettylog("resource loaded");
  SPAWN.addSpawnPoint({});
});

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
        SPAWN.spawnPlayer();
      }
    }
  } else {
    if (CFG.diedAt > 0) prettylog("reseting diedAt");
    CFG.diedAt = 0;
  }
});
