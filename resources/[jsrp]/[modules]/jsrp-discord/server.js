const axios = require("axios");

const log = (data) => {
  try {
    exports["jsrp-ws"].prettylog("s", GetCurrentResourceName(), data);
  } catch (error) {
    console.log(data);
  }
};

log("[Exporting Module] Discord");

exports("send", (webhook, embeds) => {
  log("send");
  let data = JSON.stringify({ embeds });
  let config = {
    method: "POST",
    url: webhook,
    headers: { "Content-Type": "application/json" },
    data: data,
  };
  axios(config)
    .then((response) => {
      log("Webhook delivered successfully");
      return response;
    })
    .catch((error) => {
      log(error);
      return error;
    });
});
