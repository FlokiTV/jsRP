RegisterCommand("custom", (source, arguments, raw) => {
  AP.startPlayerCustomization((appearance) => {
    if (appearance) {
      console.log("Customization saved");
    } else {
      console.log("Customization canceled");
    }
  }, APConfig);
});

RegisterCommand("cus", (source, arguments, raw) => {
  const [sex] = arguments;
  emitNet("jsrp-register:getAppearance", sex);
});
