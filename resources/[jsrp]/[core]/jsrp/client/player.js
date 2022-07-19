sId = () => {
  return GetPlayerServerId(PlayerId());
};
CFG.core.sId = sId;

nId = () => {
  return NetworkGetNetworkIdFromEntity(PlayerPedId());
};
CFG.core.nId = nId;
