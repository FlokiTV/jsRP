/// <reference types="@citizenfx/client" />
let seatbeltOn = false;

const checkSeatbelt = (ped, veh, beltSpeed) => {
  let speed = GetEntitySpeed(veh) * 3.6;
  if (seatbeltOn) return speed;
  if (beltSpeed - speed >= 30 && !seatbeltOn) {
    let entCoords = GetOffsetFromEntityInWorldCoords(veh, 0.0, 7.0, 0.0);
    SetEntityHealth(ped, GetEntityHealth(ped) - 50);
    TaskLeaveVehicle(ped, veh, 4160);
    SetPedToRagdoll(ped, 5000, 5000, 0, 0, 0, 0);
    beltSpeed = speed;
  }
};

RegisterCommand("veh", () => {
  let ped = GetPlayerPed(-1);
  let veh = GetVehiclePedIsIn(ped, false);
  // SetPedToRagdoll(ped, 5000, 5000, 0, 0, 0, 0);
  // TaskLeaveVehicle(ped, veh, 4160);
  let set = SetFlyThroughWindscreenParams(35, 40, 17.0, 2000.0);
});
setTick(() => {
  setImmediate(() => {
    let set = SetFlyThroughWindscreenParams(60 / 2.236936, 70 / 2.236936, 17.0, 2000.0);
  });
});
