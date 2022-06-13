import { c as create_ssr_component, e as escape } from "../../chunks/index-5f038599.js";
const Dead = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let time;
  return `<div class="${"h-screen bg-black bg-opacity-70 flex flex-col justify-center items-center space-y-2"}"><h1 class="${"uppercase font-bold text-5xl"}">Desacordado</h1>
  <h2>${escape(time)}</h2></div>`;
});
export { Dead as default };
