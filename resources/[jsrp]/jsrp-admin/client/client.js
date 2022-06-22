/// <reference types="@citizenfx/client" />
const resource = GetCurrentResourceName();
const jsRP = exports["jsrp"].jsRP;
const { request } = jsRP();

/*
  Send RAW HTML with tailwindcss
*/
onNet("jsrp-admin:cds", (source, args) => {
  let [x, y, z] = GetEntityCoords(PlayerPedId());
  let html = `
  <div class="w-full h-full flex justify-center items-center">
    <div class="bg-black text-white p-2">
      ${x.toFixed(2)}, ${y.toFixed(2)}, ${z.toFixed(2)}
      <div 
        class="border text-center mt-2 cursor-pointer" 
        onclick="rmNUI('jsrp-admin-cds'); emit('nui','focusout')"
      >
        close
      </div>
    </div>
  </div>
`;
  jsRP("nui").addHTML("jsrp-admin-cds", html);
});

/*
  Prepare NUI function to run on init
*/
const initNUI = () => {
  /*
    Inject Client HTML
  */
  request(resource, "init", GetPlayerServerId(PlayerId()));
  /*
    Register NUI's Callbacks
  */
  jsRP("nui").on(resource, "screenshot", async (img) => {
    console.log("screenshot");
    let send = await request(resource, "send-ss", "teste");
  });
};

// Initializa NUI on jsrp-nui is ready
onNet("jsrp-nui:ready", initNUI);
// OR when onClientResourceStart is triggered
on("onClientResourceStart", (resourceName) => {
  if (resource == resourceName) initNUI();
});
