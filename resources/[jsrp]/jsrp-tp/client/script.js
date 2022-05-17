const log = (from, text, color = [255, 255, 255]) => {
  TriggerEvent("chat:addMessage", {
    color: color,
    multiline: true,
    args: [from, text],
  });
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

RegisterCommand("coords", (source, arguments, raw) => {
  let playerIdx = GetPlayerFromServerId(source);
  let ped = GetPlayerPed(playerIdx);
  let coords = GetEntityCoords(ped);
  log("[coords] x", coords[0], [255, 0, 0]);
  log("[coords] y", coords[1], [0, 255, 0]);
  log("[coords] z", coords[2], [0, 0, 255]);
});