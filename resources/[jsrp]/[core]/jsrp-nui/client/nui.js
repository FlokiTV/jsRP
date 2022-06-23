let SHOW_NUI = true;

const UI_TOGGLE = () => {
  SHOW_NUI = !SHOW_NUI;
  if (SHOW_NUI) {
    SendNUIMessage({
      show: true,
    });
  } else {
    SendNUIMessage({
      show: false,
    });
  }
};

const UI_SET = (open) => {
  SHOW_NUI = open;
  if (SHOW_NUI) {
    SendNUIMessage({
      show: true,
    });
  } else {
    SendNUIMessage({
      show: false,
    });
  }
};

RegisterCommand("hud", (source, args) => {
  console.log("[hud] " + source);
  UI_TOGGLE();
  SetNuiFocus(false);
});

const fn = {
  close: (data, cb) => {
    console.log("[hud] close " + data);
    cb({ nui: NUI });
    UI_SET(NUI);
  },
  ready: async (data, cb) => {
    let ready = await request(resource, "setReady", true);
    cb({ ready: true });
  },
  emit: async (data, cb) => {
    console.log("NUI emit");
    console.log(data);
    /*
      todo: get source
    */
    try {
      CB[data.to][data.path](data);
    } catch (error) {
      console.log("Error on " + data.to + " " + data.path);
    }
    cb(1);
  },
};

Object.keys(fn).forEach((type) => {
  RegisterNuiCallbackType(type);
  on("__cfx_nui:" + type, fn[type]);
});
