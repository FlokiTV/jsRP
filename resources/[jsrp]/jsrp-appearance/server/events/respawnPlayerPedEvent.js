on("respawnPlayerPedEvent", (player, data) => {
  console.log(player);
  emitNet("setDefaultPed", player);
});
