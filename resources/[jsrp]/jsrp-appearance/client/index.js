/// <reference types="@citizenfx/client" />

const resource = GetCurrentResourceName();
const AP = exports["fivem-appearance"];
const SPAWN = exports.spawnmanager;
const jsRP = exports["jsrp"].jsRP;
const { request } = jsRP();
const CFG = {
  firstSpawn: true,
};

const PED = {};

const APConfig = {
  ped: true,
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
    h: 160,
  },
};

const setDefaultPed = (onPedLoad) => {
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

PED.setDefaultPed = setDefaultPed;
jsRP().setObjectModule("ped", PED);
