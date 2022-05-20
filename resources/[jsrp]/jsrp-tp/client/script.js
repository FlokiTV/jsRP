const log = (from, text, color = [255, 255, 255]) => {
  TriggerEvent("chat:addMessage", {
    color: color,
    multiline: true,
    args: [from, text],
  });
};

const prettylog = (data) => {
  emitNet("jsrp:ws:prettylog", "c", GetCurrentResourceName(), JSON.stringify(data));
};

onNet("jsex:addMessage", (opts) => {
  console.log("jsex:addMessage");
  TriggerEvent("chat:addMessage", opts);
});

const TPS = {
  praca: {
    name: "Praçinha",
    x: 156,
    y: -985,
    z: 30,
  },
  lanchonete_ney: {
    name: "Lanchonete do ney",
    x: 308,
    y: -908,
    z: 29,
  },
};

RegisterCommand("tp", (source, arguments, raw) => {
  let playerIdx = GetPlayerFromServerId(source);
  let ped = GetPlayerPed(playerIdx);
  let [location] = arguments;

  if (!location) {
    let txt = "Localizações:\n";
    Object.keys(TPS).forEach((name) => {
      txt += `${TPS[name].name}: ${name} \n`;
    });
    log("[tp]", txt, [100, 255, 0]);
  } else {
    let tp = TPS[location];
    if (!tp) log("[tp]", "Localização não existe", [100, 255, 0]);
    else {
      SetEntityCoords(ped, tp.x, tp.y, tp.z);
    }
  }
});

RegisterCommand("tpto", (source, arguments, raw) => {
  let playerIdx = GetPlayerFromServerId(source);
  let ped = GetPlayerPed(playerIdx);
  let [x, y, z] = arguments;
  log("[tp]", `${x}, ${y}, ${z}`);
  SetEntityCoords(ped, parseFloat(x), parseFloat(y), parseFloat(z));
});

RegisterCommand("coords", (source, arguments, raw) => {
  let playerIdx = GetPlayerFromServerId(source);
  let ped = GetPlayerPed(playerIdx);
  let coords = GetEntityCoords(ped);
  prettylog("coords");
  prettylog(coords);
  prettylog(GetEntityHeading(ped));
});
