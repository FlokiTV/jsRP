console.log("---------- tsEx NUI ----------");
let tsexNUI = false;

setTick(() => {
  let h = GetClockHours();
  let m = GetClockMinutes();
  let s = GetClockSeconds();
  SendNUIMessage({
    time: [h, m, s],
  });
});

const UI_TOGGLE = (open) => {
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

RegisterCommand("tsex", (source, args) => {
  console.log("[nui] " + source);
  tsexNUI = !tsexNUI;
  UI_TOGGLE(tsexNUI);
});

const fn = {
  close: (data, cb) => {
    console.log("nui close" + data);
    tsexNUI = !tsexNUI;
    cb({ nui: tsexNUI });
    UI_TOGGLE(tsexNUI);
  },
};

Object.keys(fn).forEach((type) => {
  RegisterNuiCallbackType(type);
  on("__cfx_nui:" + type, fn[type]);
});
