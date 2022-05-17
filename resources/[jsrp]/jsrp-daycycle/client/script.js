console.log("[jsrp:daycicle] init");

setTick(() => {
  let h = GetClockHours();
  if (h >= 7 && h < 20) {
    console.log("[jsrp:daycicle] updating");
    NetworkOverrideClockTime(20, 0, 0);
  }
});
