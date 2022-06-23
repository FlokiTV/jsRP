const response = async (resource, action, args = []) => {
  let event = `${resource}:${action}:response`;
  /*
    TO-DO:
      - emit event only for request player
  */
  emitNet(event, -1, args);
};
CFG.core.response = response;
// exports("response", response);

const onRequest = (name, action, cb) => {
  let event = `${name}:${action}`;
  onNet(event, (args) => {
    let res = cb(args);
    if (res != null) response(name, action, res);
  });
};
CFG.core.onRequest = onRequest;
// exports("onRequest", onRequest);

const onClient = (client, module, fn, args) => {
  emitNet("jsrp:onClient", client, {
    module,
    fn,
    args,
  });
  return new Promise((resolve) => {
    onNet(`jsrp:onClient:response`, (res) => {
      resolve(res);
    });
  });
};

CFG.core.onClient = onClient;
