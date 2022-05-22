RegisterCommand("rr", (source, arguments) => {
  let [resource] = arguments;
  ExecuteCommand("restart " + resource);
});

RegisterCommand("jsrp-user", (source, arguments) => {
  SendNUIMessage({
    show: false,
  });
});
