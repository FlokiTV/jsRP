let noclip = false;

onNet("nc", async () => {
  noclip = !noclip;
  FreezeEntityPosition(PlayerPedId(), noclip);
  SetEntityVisible(PlayerPedId(), !noclip);
  SetPlayerCanUseCover(PlayerId(), !noclip);

  let TreadNC = setInterval(() => {
    let ped = PlayerPedId();
    let [x, y, z] = GetEntityCoords(ped);
    let speed = 1.0;

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
    const [dx, dy, dz] = getCamDirection();
    SetEntityVelocity(ped, 0.0001, 0.0001, 0.0001);
    if (IsControlPressed(0, 21)) {
      speed = 5.0;
    }
    if (IsControlPressed(0, 32)) {
      x = x + speed * dx;
      y = y + speed * dy;
      z = z + speed * dz;
    }
    if (IsControlPressed(0, 269)) {
      x = x - speed * dx;
      y = y - speed * dy;
      z = z - speed * dz;
    }
    SetEntityCoordsNoOffset(ped, x, y, z, true, true, true);
    if (!noclip) {
      clearInterval(TreadNC);
    }
  }, 0);
});
