RegisterCommand("disc", (source, args) => {
  let embeds = [
    {
      title: "jsRP:CAR",
      color: 5662719,
      footer: {
        text: `📅 jsRP:FiveM`,
      },
      fields: [
        {
          name: `${GetPlayerName(source)} tsex`,
          value: "open painel",
        },
      ],
    },
  ];
  exports["jsrp-discord"].discord_send_embeds(
    "https://discord.com/api/webhooks/973973888298004520/p37d4IbU7N0yqBZNk6M7eswGWpEBYlbYFw1LrxQPGX0RuPaxnvnOxsa5Un7bFgh9Avqo",
    embeds
  );
});
