_on("notify", (text) => {
  addNotification(text, "botRight");
});

_on("html", (name, html, eval = false) => {
  // console.log(name, html, eval);
  addHTML(name, html, eval);
});

_on("send", (data) => {
  SendNUIMessage(data);
});

_on("emit", (data) => {
  SendNUIMessage(data);
});

_on("focus", (hasFocus, hasCursor) => {
  SetNuiFocus(hasFocus, hasCursor);
});

_on("focusoff", () => {
  SetNuiFocus(false, false);
});
