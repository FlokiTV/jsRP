/// <reference types="@citizenfx/client" />
const resource = GetCurrentResourceName();
const jsRP = exports["jsrp"].jsRP;
const { request, setObjectModule } = jsRP();
const NUI = {};

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
setObjectModule("nui", NUI);
