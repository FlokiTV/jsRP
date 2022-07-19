/// <reference types="@citizenfx/client" />
const jsRP = exports.jsrp.self;
const resourse = GetCurrentResourceName();

// setInterval(() => {
//   if (GlobalState.hookers != "undefined" && GlobalState.hookers.length) {
//     let hk = GlobalState.hookers[0];
//     if (hk.nId) {
//       let ped = NetToEnt(hk.nId);
//       let entity = Entity(ped);
//       if (!entity.state.init) {
//         entity.state.init = true;
//         TaskSetBlockingOfNonTemporaryEvents(ped, true);
//         TaskStartScenarioInPlace(ped, "WORLD_HUMAN_SMOKING", 0, false);
//         console.log("init entity on client");
//       }
//     }
//   }
// }, 500);

AddStateBagChangeHandler("hookers", null, (bagName, key, value, _unused, replicated) => {
  console.log(GlobalState.hookers); //last state
  console.log(bagName); // global
  console.log(key); // hookers
  console.log(value); //actual state
  console.log(replicated); //boolean
  let hooker = value;
  hooker.forEach((hk) => {
    let ped = NetToEnt(hk.nId);
    let entity = Entity(ped);
  });
});

RegisterCommand("init", () => {
  let nId = jsRP().nId();
  console.log(nId);
  if (GlobalState.hookers != "undefined" && GlobalState.hookers.length) {
    let hk = GlobalState.hookers[0];
    if (hk.nId) {
      let ped = NetToEnt(hk.nId);
      let entity = Entity(ped);
      console.log(entity.state.init);
      if (!entity.state.init) {
        entity.state.init = true;
        TaskSetBlockingOfNonTemporaryEvents(ped, true);
        TaskStartScenarioInPlace(ped, "WORLD_HUMAN_SMOKING", 0, false);
        console.log("init entity on client");
      }
    }
  }
});

RegisterCommand("cb", () => {
  let nId = jsRP().nId();
  // jsRP().request(resourse, "combat", nId);
  console.log(GlobalState.hookers);
});
