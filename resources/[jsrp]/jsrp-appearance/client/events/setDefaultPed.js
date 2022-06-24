let visibleTick = false;

const setDefaultPed = async (sex = "m") => {
  let defalt = await request(resource, "defaultAppearance", sex);
  AP.setPlayerAppearance(defalt);
};

const startCustomization = () => {
  AP.startPlayerCustomization((appearance) => {
    if (appearance) {
      console.log("[startPlayerCustomization] saved appearance");
      doneCustomization(appearance);
    } else {
      console.log("[jsrp:startPlayerCustomization] customization canceled");
      setTimeout(() => {
        initRegister();
      }, 200);
    }
  }, APConfig);
};

const doneCustomization = async (appearance = false) => {
  let sId = jsRP().sId();
  if (appearance) {
    console.log("saveAppearance " + sId);
    let save = await request(resource, "saveAppearance", [sId, appearance]); //save on database
  }
  spawnPed();
};

const spawnPed = () => {
  let ped = PlayerPedId();
  clearInterval(visibleTick);
  SetEntityVisible(ped, true);
  SetEntityCoords(ped, spawnLocations["safe"].x, spawnLocations["safe"].y, spawnLocations["safe"].z);
  let coords = GetEntityCoords(PlayerPedId(), true);
  NetworkResurrectLocalPlayer(coords, true, true, false);
  SetPlayerInvincible(PlayerPedId(), false);
  ClearPedBloodDamage(PlayerPedId());
};

const initRegister = () => {
  /*
    NUI for select sex
    todo: emit age and name to save
  */
  let html = `
<div class="absolute top-1/2 right-20 flex w-52 flex-col bg-black bg-opacity-75 p-2 text-white">
  <p>Nome</p>
  <input class="border bg-transparent p-1 text-xs" type="text" />
  <p class="mt-1">Idade</p>
  <div class="flex">
    <button class="w-8 hover:bg-gray-600 active:bg-gray-400" onclick="this.parentElement.querySelector('input').value -= 1">-</button>
    <input class="w-full border bg-transparent p-1 text-center text-xs" value="18" type="number" min="18" max="99" />
    <button class="w-8 hover:bg-gray-600 active:bg-gray-400" onclick="this.parentElement.querySelector('input').value -= -1">+</button>
  </div>
  <p class="mt-1">Gênero</p>
  <div class="flex justify-around py-2">
    <button class="border px-2 hover:bg-gray-600 active:bg-gray-400" onclick="emit('${resource}', 'sex', {sex:'m'})">Homem</button>
    <button class="border px-2 hover:bg-gray-600 active:bg-gray-400" onclick="emit('${resource}', 'sex', {sex:'f'})">Mulher</button>
  </div>
  <button class="mt-1 border p-1 text-xs uppercase hover:bg-gray-600 active:bg-gray-400" onclick="rmHTML('${resource}'); emit('nui','focusout'); emit('${resource}', 'close')">fechar</button>
</div>
 `;
  jsRP("nui").addHTML(resource, html);
  jsRP("nui").focus(true, true);
};

onNet("setDefaultPed", async () => {
  let player = jsRP().sId();
  let ped = PlayerPedId();
  console.log("ped loaded " + player);
  /*
    Trigger only on first spawn
  */
  if (CFG.firstSpawn) {
    CFG.firstSpawn = false;
    SPAWN.setAutoSpawn(false);
    // visibleTick = setInterval(() => {
    //   SetEntityVisible(ped, false);
    //   //set visible only to player
    //   SetEntityLocallyVisible(ped);
    // }, 50);
    //check if player already have appearance
    console.log("------ request getAppearance ---------");
    let ap = await request(resource, "getAppearance", player);
    if (ap) {
      AP.setPlayerAppearance(ap); // from db
      spawnPed();
    } else {
      initRegister();
    }
  }
});

/*
  Prepare NUI function to run on init
*/
const initNUI = () => {
  /*
    Inject Client HTML
  */
  // request(resource, "init", GetPlayerServerId(PlayerId()));
  /*
    Register NUI's Callbacks
  */
  jsRP("nui").on(resource, "sex", async (data) => {
    setDefaultPed(data.sex);
  });
  jsRP("nui").on(resource, "close", async (data) => {
    startCustomization();
  });
};

// Initializa NUI on jsrp-nui is ready
onNet("jsrp-nui:ready", initNUI);
// OR when onClientResourceStart is triggered
initNUI();
