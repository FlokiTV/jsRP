/// <reference types="@citizenfx/server" />
const jsRP = exports.jsrp.self;
const resourse = GetCurrentResourceName();

const hookers = [
  {
    id: 1,
    VoiceName: "HOOKER_LEAVES_ANGRY",
    modelHash: "s_f_y_hooker_01",
    init: false,
    x: 128.65,
    y: -1055.36,
    z: 29.19,
    heading: 156.4,
    ped: false, //sv ped id
    nId: false, // network ped id
  },
];

setInterval(() => {
  hookers.forEach((hooker) => {
    if (!hooker.nId) {
      let ped = CreatePed(2, hooker.modelHash, hooker.x, hooker.y, hooker.z, hooker.heading, true, false);
      hooker.ped = ped;
      hooker.nId = NetworkGetNetworkIdFromEntity(ped);
      console.log("create");
    } else {
      let ent = NetworkGetEntityFromNetworkId(hooker.nId);
      if (GetEntityHealth(ent) == 0) {
        DeleteEntity(ent);
        hooker.nId = false;
      }
    }
  });
  GlobalState.set("hookers", hookers, true); //update entity array
}, 1000);

jsRP().addCommand("add", (source, args) => {
  let hk = { ...hookers[0] };
  hk.id = 2;
  hookers.push(hk);
});

jsRP().onRequest(resourse, "combat", (player) => {
  let ped = NetworkGetEntityFromNetworkId(player);
  let [x, y, z] = GetEntityCoords(ped);
  let veh = GetVehiclePedIsIn(ped, false);
  TaskCombatPed(hookers[0].ped, ped, 0, 16);
  //   TaskEnterVehicle(hookers[0].ped, veh, -1, 0, 1.0, 1, 0);
  //   TaskHandsUp(hookers[0].ped, -1, ped, true);
  //   TaskGoStraightToCoord(hookers[0].ped, x, y, z, 3, -1, GetEntityHeading(ped), 0);
  //   TaskGoToCoordAnyMeans(hookers[0].ped, x, y, z, 30, 0, 0);
  return;
});
