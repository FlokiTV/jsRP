RegisterCommand("custom", (source, arguments, raw) => {
  exports["fivem-appearance"].startPlayerCustomization(
    (appearance) => {
      if (appearance) {
        console.log("Customization saved");
        emitNet("genericSaveAppearanceDataServerEvent", JSON.stringify(appearance));
      } else {
        console.log("Customization canceled");
      }
    },
    {
      ped: false,
      headBlend: true,
      faceFeatures: true,
      headOverlays: true,
      components: false,
      props: false,
      tattoos: true,
    }
  );
});

// on("playerSpawned", async (spawn) => {
//   let model = "mp_m_freemode_01";
//   if (IsModelInCdimage(model) && IsModelValid(model)) {
//     RequestModel(model);
//     let load = setInterval(() => {
//       if (HasModelLoaded(model)) {
//         SetPlayerModel(PlayerId(), model);
//         SetModelAsNoLongerNeeded(model);
//         clearInterval(load);
//       }
//     }, 200);
//   }
// });
