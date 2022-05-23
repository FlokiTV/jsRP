/// <reference types="@citizenfx/client" />
const SPAWN = exports.spawnmanager;

const CFG = {
  visible: true,
  visibleLocal: true,
  deadTime: 1000 * 60 * 1, //1 minute
  diedAt: 0,
  spawn: {
    x: 162,
    y: -987,
    z: 30,
    h: 160,
  },
};

const prettylog = (data) => {
  emitNet("jsrp:ws:prettylog", "c", GetCurrentResourceName(), JSON.stringify(data));
};

const msToTime = (duration) => {
  let milliseconds = Math.floor((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds; // + "." + milliseconds;
};
exports("MsToTime", msToTime);

const SetDefaultPed = (onPedLoad) => {
  let model = GetHashKey("mp_m_freemode_01");
  RequestModel(model);
  let load = setInterval(() => {
    if (HasModelLoaded(model)) {
      SetPlayerModel(PlayerId(), model);
      SetPedDefaultComponentVariation(PlayerPedId());
      SetModelAsNoLongerNeeded(model);
      clearInterval(load);
      onPedLoad();
    }
  }, 50);
};
exports("SetDefaultPed", SetDefaultPed);

const SpawnToLocation = (spawn = false) => {
  let coords = GetEntityCoords(PlayerPedId(), true);
  let ped = PlayerPedId();
  NetworkResurrectLocalPlayer(coords, true, true, false);
  SetPlayerInvincible(PlayerPedId(), false);
  ClearPedBloodDamage(PlayerPedId());
  SetEntityCoords(PlayerPedId(), spawn.x, spawn.y, spawn.z);
  ClearPedTasksImmediately(ped);
  if (spawn.h) SetEntityHeading(PlayerPedId(), spawn.h);
  // SetEntityHealth(ped, 300);
  RemoveAllPedWeapons(ped);
  // SetFollowPedCamViewMode(4);
  // CamRestoreJumpcut(GetGameCam());
  ClearPlayerWantedLevel(PlayerId());
};
exports("SpawnToLocation", SpawnToLocation);

setImmediate(() => {
  prettylog("resource loaded");
});
