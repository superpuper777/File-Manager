import { homedir } from "os";
import process, { stdin as input, stdout as output } from "process";
import * as readline from "readline/promises";
import {
  fsEvents,
  hashEvents,
  navigationEvents,
  osEvents,
  zipEvents,
} from "./Events/index.js";
import { getCurrentDir, getNameFromArgs, greeting } from "../helpers.mjs";

const username = getNameFromArgs(process.argv[2]);
const rl = readline.createInterface({ input, output });

if (username) {
  console.log(greeting(username));
  getCurrentDir(homedir());
}

rl.on("line", (input) => {
  if (input === ".exit") {
    rl.close();
  }
  console.log("input", input);
})
  .on("SIGINT", () => {
    rl.close();
  })
  .on("close", () => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
    process.exit(0);
  });
