console.log("[jsrp:utils:delay] Exporting");
const Delay = (ms) => new Promise((res) => setTimeout(res, ms));
exports("delay", Delay);
