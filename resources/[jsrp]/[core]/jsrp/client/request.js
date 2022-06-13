const request = (resource, action, args = []) => {
  console.log("jsrp:request init");
  return new Promise((resolve) => {
    let event = `${resource}:${action}`;
    emitNet(event, args);
    onNet(`${resource}:${action}:response`, (res) => {
      console.log("jsrp:request done");
      resolve(res);
    });
  });
};
CFG.core.request = request;
exports("request", request);
