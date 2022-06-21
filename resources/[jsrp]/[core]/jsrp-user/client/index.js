/// <reference types="@citizenfx/client" />
const resource = GetCurrentResourceName();
const jsRP = exports["jsrp"].jsRP;
const { request } = jsRP();

onNet("jsrp-user:onLoad", (data) => {
  // console.log("jsrp-user:onLoad");
  // console.log(data);
});

/*
  init
*/
// console.log("jsrp-user:init client");
let player = GetPlayerServerId(PlayerId());
request(resource, "init", player).then((data) => {
  // console.log("jsrp-user:init response");
  // console.log(data);
});
