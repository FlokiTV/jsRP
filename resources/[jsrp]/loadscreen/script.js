var count = 0;
var thisCount = 0;

const emoji = {
  INIT_BEFORE_MAP_LOADED: ["🤖"],
  INIT_AFTER_MAP_LOADED: ["🚕", "🔫"],
  INIT_SESSION: ["🍁", "🛵", "🛸"],
};

const handlers = {
  startInitFunctionOrder(data) {
    count = data.count;
    document.querySelector(".emoji").innerHTML += emoji[data.type][data.order - 1] || "";
  },

  initFunctionInvoking(data) {
    document.querySelector(".load").style.left = "0%";
    document.querySelector(".load").style.width = (data.idx / count) * 100 + "%";
  },

  startDataFileEntries(data) {
    count = data.count;
    document.querySelector(".emoji").innerHTML += "\u{1f358}";
  },

  performMapLoadFunction(data) {
    ++thisCount;

    document.querySelector(".load").style.left = "0%";
    document.querySelector(".load").style.width = (thisCount / count) * 100 + "%";
  },

  onLogLine(data) {
    document.querySelector("p").innerHTML = data.message + "..!";
  },
};

window.addEventListener("message", function (e) {
  (handlers[e.data.eventName] || function () {})(e.data);
});

document.querySelector("body").addEventListener("mousemove", (e) => {
  x = e.clientX;
  y = e.clientY;
  document.querySelector("#cursor").style.left = x + "px";
  document.querySelector("#cursor").style.top = y + "px";
});
