const request = (resource, action, args = []) => {
  let event = `${resource}:${action}`;
  console.log(`[jsrp:request] ${event} init`);
  return new Promise((resolve) => {
    emitNet(event, args);
    onNet(`${event}:response`, (res) => {
      // console.log(`[jsrp:request] ${event} done`);
      resolve(res);
    });
  });
};
CFG.core.request = request;
