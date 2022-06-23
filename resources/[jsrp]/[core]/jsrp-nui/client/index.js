/// <reference types="@citizenfx/client" />
const resource = GetCurrentResourceName();
const jsRP = exports["jsrp"].jsRP;
const { request, setObjectModule } = jsRP();
const NUI = {};
const CB = {};

CB.nui = {};
CB.nui.focusout = (data, cb) => {
  console.log(data);
  SetNuiFocus(false, false);
};

const _on = (event, cb) => {
  onNet(`${resource}:${event}`, typeof cb == "function" ? cb : cb());
};

const addNotification = (txt, pos, time = 10000) => {
  SendNUIMessage({
    notification: {
      txt,
      position: pos ? pos : "topRight",
      time,
    },
  });
};
NUI.addNotification = addNotification;

const addCSS = (css) => {
  SendNUIMessage({
    addcss: css,
  });
};
NUI.addCSS = addCSS;

const addHTML = (name, html, eval = true) => {
  SendNUIMessage({
    addHTML: {
      name,
      html,
      eval,
    },
  });
  return "add html " + name + " eval scripts " + eval;
};
NUI.addHTML = addHTML;

const focus = (hasFocus = false, hasCursor = false) => {
  SetNuiFocus(hasFocus, hasCursor);
};
NUI.focus = focus;

/*
  Callback
*/
NUI.on = (module, fn, cb) => {
  console.log("register response " + module);
  // console.log(fn);
  if (!CB[module]) CB[module] = {};
  CB[module][fn] = cb;
};

NUI.emit = (data) => {
  SendNUIMessage(data);
};

setObjectModule("nui", NUI);
