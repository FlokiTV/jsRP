RegisterCommand("nc", function (source, args, rawCommand) {
  console.log("nc");
  emitNet("nc", source);
});
