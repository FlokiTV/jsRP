/// <reference types="@citizenfx/client" />
const { request } = exports.jsrp;
const resource = GetCurrentResourceName();

const req = request(resource, "getConfig");
req.then((config) => {
  setTick(() => {
    /*
      Vehicles
    */
    SetVehicleDensityMultiplierThisFrame(config.vehicles.density); // set traffic density to 0
    SetRandomVehicleDensityMultiplierThisFrame(config.vehicles.random); // set random vehicles (car scenarios / cars driving off from a parking spot etc.) to 0
    SetParkedVehicleDensityMultiplierThisFrame(config.vehicles.parked); // set random parked vehicles (parked car scenarios) to 0
    /*
      Peds
    */
    SetPedDensityMultiplierThisFrame(config.peds.density); // set npc/ai peds density to 0
    SetScenarioPedDensityMultiplierThisFrame(config.peds.random[0], config.peds.random[1]); // set random npc/ai peds or scenario peds to 0
    /*
      Boats and Trucks
    */
    SetGarbageTrucks(config.trucks); // Stop garbage trucks from randomly spawning
    SetRandomBoats(config.boats); // Stop random boats from spawning in the water.
    /*
      Coops
    */
    SetCreateRandomCops(config.coops.create_random); // disable random cops walking/driving around.
    SetCreateRandomCopsNotOnScenarios(config.coops.create_on_scenario); // stop random cops (not in a scenario) from spawning.
    SetCreateRandomCopsOnScenarios(config.coops.create_out_scenario); // stop random cops (in a scenario) from spawning.
    /*
      Wanted Level
    */
    if (config.no_wanted) {
      ClearPlayerWantedLevel(PlayerPedId());
      SetPlayerWantedLevel(PlayerId(), 0, false);
      SetPlayerWantedLevelNow(PlayerId(), false);
    }

    // let [x, y, z] = GetEntityCoords(PlayerPedId());
    // ClearAreaOfVehicles(x, y, z, 1000, false, false, false, false, false);
    // RemoveVehiclesFromGeneratorsInArea(x - 5000.0, y - 5000.0, z - 5000.0, x + 5000.0, y + 5000.0, z + 5000.0);
  });
});
