const spawnToLocation = (spawn = false) => {
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
CFG.core.spawnToLocation = spawnToLocation;

const getPedRotation = (id = false) => {
  let ped = id || PlayerPedId();
  let head = GetEntityHeading(ped);
  head = (((head % 360) - 360) % 360) * -1;
  return head;
};
CFG.core.getPedRotation = getPedRotation;

const getCamRotation = (anticlock_wise = false) => {
  let head = getPedRotation();
  let cam = GetGameplayCamRelativeHeading();
  let rotation = ((cam % 360) - 360) % 360;
  if (anticlock_wise) return (((rotation + head) % 360) - 360) % 360;
  else return ((((rotation + head) % 360) + 360) % 360) * -1;
};
CFG.core.getCamRotation = getCamRotation;
