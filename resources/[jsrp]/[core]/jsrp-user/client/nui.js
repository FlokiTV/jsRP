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
