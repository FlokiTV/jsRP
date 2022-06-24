/// <reference types="@citizenfx/server" />

onRequest(resource, "defaultAppearance", (sex = "m") => {
  return defaultAppearance[sex];
});

onRequest(resource, "getAppearance", async (player) => {
  const nId = await jsRP("id").nId(player);
  console.log("------- getAppearance [" + player + ":" + nId + "] ---------");
  let ap = await jsRP("user-data").get(nId, "appearance");
  if (ap) {
    return JSON.parse(ap.value);
  } else return false;
});

onRequest(resource, "saveAppearance", async (args) => {
  const [player, ap] = args;
  const nId = await jsRP("id").nId(player);
  console.log("------- saveAppearance [" + nId + "] ---------");
  let save = await jsRP("user-data").set(nId, "appearance", JSON.stringify(ap));
  return save;
});
