/// <reference types="@citizenfx/client" />
const AP = exports["fivem-appearance"];
const jsRP = exports["jsrp-user"];
const SPAWN = exports.spawnmanager;
const CFG = {
  firstSpawn: true,
};
// const log = (data) => {
//   emitNet("jsrp:ws:log", `[${GetCurrentResourceName()}] ${JSON.stringify(data)}`);
// };

const prettylog = (data) => {
  emitNet("jsrp:ws:prettylog", "c", GetCurrentResourceName(), JSON.stringify(data));
};

const nuilog = (data) => {
  emitNet("jsrp:ws:prettylog", "n", GetCurrentResourceName(), JSON.stringify(data));
};

const APConfig = {
  ped: false,
  headBlend: true,
  faceFeatures: true,
  headOverlays: true,
  components: false,
  props: false,
  tattoos: true,
};

const spawnLocations = {
  safe: {
    x: 156,
    y: -985,
    z: 30,
  },
};

const SetDefaultPed = (onPedLoad) => {
  let model = GetHashKey("mp_m_freemode_01");
  RequestModel(model);
  let load = setInterval(() => {
    if (HasModelLoaded(model)) {
      SetPlayerModel(PlayerId(), model);
      SetPedDefaultComponentVariation(PlayerPedId());
      SetModelAsNoLongerNeeded(model);
      clearInterval(load);
      onPedLoad();
    }
  }, 50);
};

setTick(() => {
  SetEntityLocallyVisible(PlayerPedId());
});
