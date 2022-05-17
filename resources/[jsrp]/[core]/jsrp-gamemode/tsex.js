console.log(" -------- GAME MODE START --------");
AddEventHandler("onClientMapStart", (source) => {
  console.log(" -------- onClientMapStart --------");
  // let player = GetPlayerIdentifiers(-1);
  console.log(source);
  // DB.get("user", async (User) => {
  //   let users = await User.findAll({ where: { id: userId } });
  //   console.log("user findAll", users);
  //   let tp = users[0] || false;
  //   let ped = GetPlayerPed(player);
  //   if (tp) SetEntityCoords(ped, tp.x, tp.y, tp.z);
  // });
});
