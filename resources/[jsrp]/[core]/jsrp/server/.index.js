/// <reference types="@citizenfx/server" />
const CFG = {
  get(key) {
    return this[key];
  },
  resource: GetCurrentResourceName(),
  modules: {},
};

const prettylog = (data) => {
  try {
    exports["jsrp-ws"].prettylog("s", CFG.get("resource"), data);
  } catch (error) {
    console.log(data);
  }
};

prettylog("resource init");

const setModule = (module, name, fn) => {
  console.log("Setting module " + module + " a new function" + name);
  // check if module is empty
  if (CFG.modules[module] == undefined) CFG.modules[module] = {};
  CFG.modules[module][name] = fn;
};
exports("setModule", setModule);

const getModule = (name) => {
  return CFG.modules[name];
};
exports("getModule", getModule);
// (async () => {
//   prettylog("init db:jsrp-test");
//   await DB.define("jsrp-test", {
//     name: {
//       type: "string",
//       teste: true,
//     },
//     age: {
//       type: "integer",
//     },
//   });
//   let data = await DB.create("jsrp-test", { name: "Floki", age: 10 });
//   prettylog(data);
// })();
