const Request = (resource, action, args = []) => {
  console.log("jsrp:Request init");
  return new Promise((resolve) => {
    let event = `${resource}:${action}`;
    emitNet(event, args);
    onNet(`${resource}:${action}:response`, (res) => {
      console.log("jsrp:Request done");
      resolve(res);
    });
  });
};
exports("Request", Request);
