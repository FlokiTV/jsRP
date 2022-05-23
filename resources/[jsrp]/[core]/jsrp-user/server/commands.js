RegisterCommand("rr", (source, arguments) => {
  let [resource] = arguments;
  ExecuteCommand("restart " + resource);
});
