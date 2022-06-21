_on("notify", (text) => {
  addNotification(text, "botRight");
});

_on("html", (name, html) => {
  // console.log(name, html);
  addHTML(name, html);
});

_on("send", (data) => {
  SendNUIMessage(data);
});

_on("focus", (hasFocus, hasCursor) => {
  SetNuiFocus(hasFocus, hasCursor);
});

_on("focusoff", () => {
  SetNuiFocus(false, false);
});
