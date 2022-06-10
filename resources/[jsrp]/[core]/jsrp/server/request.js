const response = async (resource, action, args = []) => {
  console.log("jsrp:server:response");
  let event = `${resource}:${action}:response`;
  console.log(`${event}`);
  emitNet(event, -1, args);
};
exports("response", response);

const onRequest = (resource, action, cb) => {
  let event = `${resource}:${action}`;
  onNet(event, (args) => {
    console.log(`jsrp:server:onRequest ${event}`);
    console.log(args);
    let response = cb(args);
    if (response != null) Response(resource, action, response);
  });
};
exports("onRequest", onRequest);
