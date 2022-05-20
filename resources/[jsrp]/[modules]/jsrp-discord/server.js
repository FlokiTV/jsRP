const axios = require("axios");

const log = (data) => {
  try {
    exports["jsrp-ws"].prettylog("s", GetCurrentResourceName(), data);
  } catch (error) {
    console.log(data);
  }
};

const config = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
};

const SEND = (cfg) => {
  axios(cfg)
    .then((response) => {
      log("Webhook delivered successfully");
      return response;
    })
    .catch((error) => {
      log(error);
      return error;
    });
};

log("[Exporting Module] Discord");

exports("send", (webhook, data) => {
  log("send");
  let cfg = {
    ...config,
    url: webhook,
    data: JSON.stringify(data),
  };
  SEND(cfg);
});

exports("log", async (webhook, title, description, from, color) => {
  log("log");
  let c;
  switch (color) {
    case "error":
      c = 15074822;
      break;
    case "success":
      c = 2811398;
      break;
    case "info":
      c = 15127558;
      break;
    default:
      c = 426982;
      break;
  }
  let data = {
    content: null,
    embeds: [
      {
        title,
        description,
        color: c,
        footer: {
          text: from,
        },
        timestamp: new Date().toISOString(),
      },
    ],
  };
  let cfg = {
    ...config,
    url: webhook,
    data: JSON.stringify(data),
  };
  SEND(cfg);
});
