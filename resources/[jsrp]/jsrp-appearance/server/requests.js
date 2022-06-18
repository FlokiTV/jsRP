/// <reference types="@citizenfx/server" />

onRequest(resource, "defaultAppearance", (sex = "m") => {
  return defaultAppearance[sex];
  // return defaultAppearance[sex];
});

onRequest(resource, "getAppearance", (player) => {
  console.log(player);
  console.log(jsRP().parseIdentifiers(player));
  return false;
});
