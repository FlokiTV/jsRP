console.log("[jsrp:utils:NuiCallback] Exporting");

exports("nuiCallback", (fn) => {
  console.log("[jsrp:utils:nuiCallback] start");
  Object.keys(fn).forEach((type) => {
    RegisterNuiCallbackType(type);
    on("__cfx_nui:" + type, fn[type]);
  });
});
