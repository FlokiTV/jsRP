console.log("[jsrp:utils:commands] Exporting");

RegisterCommand("jsrp:time", (source, args, rawCommand) => {
  let h = parseInt(args[0]);
  let m = parseInt(args[1]);
  let player = GetPlayerName(-1);
  console.warn(`${player} set time: ${h}:${m}`);
  NetworkOverrideClockTime(h, m, 0);
});
