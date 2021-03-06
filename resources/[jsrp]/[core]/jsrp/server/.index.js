/// <reference types="@citizenfx/server" />
const CFG = {
  get(key) {
    return this[key];
  },
  players: {},
  resource: GetCurrentResourceName(),
  core: {}, // core functions
  modules: {},
  commands: {},
};

const prettylog = (data) => {
  try {
    exports["jsrp-ws"].prettylog("s", CFG.get("resource"), data);
  } catch (error) {
    console.log(data);
  }
};
/*
  Assign to a module a new property by name
*/
const setModule = (module, name, fn) => {
  console.log("Setting module " + module + " a new function " + name);
  // check if module is empty
  if (CFG.modules[module] == undefined) CFG.modules[module] = {};
  CFG.modules[module][name] = fn;
};
CFG.core.setModule = setModule;
/*
  Assign to a module a new object
*/
const setObjectModule = (module, obj) => {
  Object.keys(obj).map((name) => {
    setModule(module, name, obj[name]);
  });
};
CFG.core.setObjectModule = setObjectModule;
/*
  Get separated module by name
*/
const getModule = (name) => {
  return CFG.modules[name];
};
CFG.core.getModule = getModule;
/*
  Get jsRP interface with core functions and all modules embed
*/
const jsRP = (module = false) => {
  if (module) return getModule(module);
  else {
    let jsrp = {
      ...CFG.core,
      ...CFG.modules,
    };
    return jsrp;
  }
};
exports("jsRP", jsRP);
exports("self", jsRP);
