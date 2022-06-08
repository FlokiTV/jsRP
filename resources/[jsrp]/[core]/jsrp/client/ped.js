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
