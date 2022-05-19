import chalk from "chalk";
import io from "socket.io-client";
const socket = io.connect("http://localhost:30130", { reconnect: true });

const getFromColor = (from) => {
  if (from == "c") return chalk.blueBright(`[${from}]`);
  if (from == "n") return chalk.magentaBright(`[${from}]`);
  return chalk.yellow(`[${from}]`);
};

socket.on("connect", () => {
  console.log("");
  console.log("    o8o          ooooooooo.   ooooooooo.   ");
  console.log("    `            `888   `Y88. `888   `Y88. ");
  console.log("   oooo  .oooo.o  888   .d88   888   .d88  ");
  console.log('   `888 d88(  "8  888ooo88P    888ooo88P   ');
  console.log('    888 `"Y88b.   888`88b.     888         ');
  console.log("    888 o.  )88b  888  `88b.   888         ");
  console.log('    888 8""888P  o888o  o888o o888o        ');
  console.log("    888");
  console.log(".o. 88P");
  console.log("`Y888P");
  console.log("");
  console.log(chalk.green("Connected! ") + socket.id);
});

socket.onAny((eventName, ...args) => {
  // console.log(eventName);
  // console.log(args);
});

socket.on("log", (log) => {
  console.log(log);
});

socket.on("prettylog", (from, modl, log) => {
  let fr = getFromColor(from);
  try {
    console.log(`${fr} [${modl}]`, JSON.parse(log));
  } catch (error) {
    console.log(`${fr} [${modl}]`, log);
  }
});
