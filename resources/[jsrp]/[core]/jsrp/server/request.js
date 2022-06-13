const response = async (resource, action, args = []) => {
  let event = `${resource}:${action}:response`;
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
