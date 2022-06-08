// setTick(() => {
//   let h = GetClockHours();
//   let m = GetClockMinutes();
//   let s = GetClockSeconds();
//   SendNUIMessage({
//     time: [h, m, s],
//   });
// });
let loginNui = false;
let tempAppearance = {};

const UI_SET = (open) => {
  if (open) {
    SetNuiFocus(true, true);
    SendNUIMessage({
      show: true,
    });
  } else {
    SetNuiFocus(false);
    SendNUIMessage({
      show: false,
    });
  }
};

const UI_GOTO = (path) => {
  SendNUIMessage({
    goto: path,
  });
};

RegisterCommand("jsrp-login:goto", (source, args) => {
  const [path] = args;
  nuilog("[gotoNui] " + path);
  UI_GOTO(path);
});

onNet("jsrp-register:goto", (path) => {
  nuilog("[gotoNui]");
  nuilog(path);
  UI_GOTO(path);
});

onNet("jsrp-register:closeNui", (source) => {
  nuilog("[closeNui]");
  loginNui = !loginNui;
  UI_SET(loginNui);
});

RegisterCommand("jsrp-login", (source, args) => {
  nuilog("[nui] " + source);
  loginNui = !loginNui;
  UI_SET(loginNui);
});

const fn = {
  //goto route done calback
  done: (data, cb) => {
    nuilog("done " + data.done);
    loginNui = true;
    UI_SET(loginNui);
  },
  close: (data, cb) => {
    nuilog("nui close" + data);
    loginNui = false;
    cb({ nui: loginNui });
    UI_SET(loginNui);
  },
  sex: (data, cb) => {
    nuilog("sex " + data.sex);
    cb({ status: "OK" });
    emitNet("jsrp-register:getDefaultAppearance", data.sex);
  },
  next: (data, cb) => {
    cb({ status: "OK" });
    loginNui = false;
    UI_SET(loginNui);
    AP.startPlayerCustomization((appearance) => {
      if (appearance) {
        nuilog("next");
        tempAppearance = appearance;
        UI_GOTO("/confirm");
      } else {
        UI_GOTO("/register");
        nuilog("next cancel");
      }
    }, APConfig);
  },
  confirm: (data, cb) => {
    cb({ status: "OK" });
    nuilog("confirm");
    nuilog(data);
    emitNet("jsrp-register:CreateUserRegister", {
      ...data,
      appearance: JSON.stringify(tempAppearance),
    });

    /*
      To-do: create a new welcome page
    */
    // UI_GOTO("/welcome");
    SetEntityVisible(PlayerPedId(), true);
    USER.SpawnToLocation(spawnLocations.safe);
    // SetEntityCoords(GetPlayerPed(-1), spawnLocations.safe.x, spawnLocations.safe.y, spawnLocations.safe.z);
    loginNui = false;
    UI_SET(loginNui);
  },
  spawn: (data, cb) => {
    nuilog("spawn");
    cb({ status: "OK" });
    nuilog(spawnLocations);
    SetEntityVisible(PlayerPedId(), true);
    SetEntityCoords(GetPlayerPed(-1), spawnLocations[data].x, spawnLocations[data].y, spawnLocations[data].z);
    loginNui = false;
    UI_SET(loginNui);
  },
};

Object.keys(fn).forEach((type) => {
  RegisterNuiCallbackType(type);
  on("__cfx_nui:" + type, fn[type]);
});
