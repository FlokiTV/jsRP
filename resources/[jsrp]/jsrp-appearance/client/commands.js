RegisterCommand("cus", async (source, arguments, raw) => {
  const [sex] = arguments;
  let defalt = await request(resource, "defaultAppearance", sex);
  AP.setPlayerAppearance(defalt);
});
