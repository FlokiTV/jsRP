const axios = require("axios");
console.log("[jsrp] [Exporting Module] Discord");

exports("discord_send_embeds", (webhook, embeds) => {
  console.log("[send_embeds]");
  let data = JSON.stringify({ embeds });
  let config = {
    method: "POST",
    url: webhook,
    headers: { "Content-Type": "application/json" },
    data: data,
  };
  axios(config)
    .then((response) => {
      console.log("Webhook delivered successfully");
      return response;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
});
