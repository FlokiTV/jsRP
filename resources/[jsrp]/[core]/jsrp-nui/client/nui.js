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
};

Object.keys(fn).forEach((type) => {
  RegisterNuiCallbackType(type);
  on("__cfx_nui:" + type, fn[type]);
});
