/// <reference types="@citizenfx/client" />

const AP = exports["fivem-appearance"];
const { setPlayerLastPosition } = exports["jsrp-login"];

const APConfig = {
  ped: false,
  headBlend: true,
  faceFeatures: true,
  headOverlays: true,
  components: true,
  props: false,
  tattoos: true,
};

const SetDefaultPed = (onPedLoad) => {
  let model = GetHashKey("mp_f_freemode_01");
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

RegisterCommand("custom", (source, arguments, raw) => {
  AP.startPlayerCustomization((appearance) => {
    if (appearance) {
      console.log("Customization saved");
      emitNet("jsrp:log", JSON.stringify(appearance));
    } else {
      console.log("Customization canceled");
    }
  }, APConfig);
});

RegisterCommand("cus", (source, arguments, raw) => {
  const [sex] = arguments;
  emitNet("jsrp-register:getAppearance", sex);
});

onNet("jsrp-register:getAppearanceResponse", (appearance) => {
  console.log("jsrp-register:getAppearanceResponse");
  AP.setPlayerAppearance(appearance);
});

on("jsrp:playerSpawned", async (spawn) => {
  const player = global.source;
  console.log("jsrp-register:playerSpawned");
  SetDefaultPed(() => {
    console.log("jsrp-register:SetDefaultPed");
    setPlayerLastPosition(player);
  });
});
