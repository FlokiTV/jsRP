AddEventHandler("onClientMapStart", () => {
  exports.spawnmanager.setAutoSpawn(true);
  exports.spawnmanager.forceRespawn();
});
