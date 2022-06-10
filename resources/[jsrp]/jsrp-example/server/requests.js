onRequest(resource, "VerifyPlayerMoney", (playerId) => {
  VerifyPlayerMoney(playerId);
  return playerId;
});
