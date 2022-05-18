on("onClientMapStart", () => {
  console.log("jsrp:onClientMapStart");
  emitNet("jsrp:onClientMapStart");
  emit("jsrp:onClientMapStart");
});

on("playerSpawned", async (spawn) => {
  console.log("jsrp:playerSpawned", spawn);
  emitNet("jsrp:playerSpawned", spawn);
  emit("jsrp:playerSpawned", spawn);
});

on("playerDropped", async () => {
  const ped = GetPlayerPed(source);
  console.log("playerDropped", ped);
});
