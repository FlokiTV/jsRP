/// <reference types="@citizenfx/client" />
const resource = GetCurrentResourceName();
const jsRP = exports["jsrp"].jsRP;
const { request } = jsRP();
// 194.27, -990.81, 32
const getCamDirection = () => {
  let heading = GetGameplayCamRelativeHeading() + GetEntityHeading(PlayerPedId());
  let pitch = GetGameplayCamRelativePitch();
  let x = -Math.sin((heading * Math.PI) / 180.0);
  let y = Math.cos((heading * Math.PI) / 180.0);
  let z = Math.sin((pitch * Math.PI) / 180.0);
  let len = Math.sqrt(x * x + y * y + z * z);
  if (len !== 0) {
    x = x / len;
    y = y / len;
    z = z / len;
  }
  return [x, y, z];
};

/*
  DEBUG
*/
let tickDebug = false;

onNet("jsrp-admin:debug", (source) => {
  let player = PlayerId();
  let ped = PlayerPedId();
  if (tickDebug) {
    clearInterval(tickDebug);
    tickDebug = false;
  } else {
    tickDebug = setInterval(() => {
      let coords = GetEntityCoords(ped);
      let head = GetEntityHeading(ped);
      head = (((head % 360) - 360) % 360) * -1;
      let cam = getCamDirection();
      let h = GetGameplayCamRelativeHeading();
      let rotation = (((h % 360) - 360) % 360) * -1;
      rotation = (((rotation + head) % 360) + 360) % 360;

      const data = {};
      data["debug-player"] = {
        source,
        player,
        ped,
        coords,
        head: jsRP().getPedRotation(),
        cam,
        rotation: jsRP().getCamRotation(1),
      };
      jsRP("nui").emit(data);
    }, 200);
  }
});
