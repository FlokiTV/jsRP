let NUI = false;

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

const UI_TOGGLE = () => {
  NUI = !NUI;
  UI_SET(NUI);
};

const UI_GOTO = (path) => {
  SendNUIMessage({
    goto: path,
  });
};
