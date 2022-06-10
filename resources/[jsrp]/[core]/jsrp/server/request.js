const response = async (resource, action, args = []) => {
  // console.log("jsrp:server:response");
  let event = `${resource}:${action}:response`;
  // console.log(`${event}`);
  emitNet(event, -1, args);
};
exports("response", response);

const onRequest = (name, action, cb) => {
  let event = `${name}:${action}`;
  onNet(event, (args) => {
    // console.log(`jsrp:server:onRequest ${event}`);
    // console.log(args);
    let res = cb(args);
    if (res != null) response(name, action, res);
  });
};
exports("onRequest", onRequest);
