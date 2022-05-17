on("onClientMapStart", () => {
  emitNet("jsrp:onClientMapStart");
});

on("playerSpawned", async (spawn) => {
  emitNet("jsrp:playerSpawned", spawn);
});
