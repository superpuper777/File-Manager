import process, { stdin as input, stdout as output } from "process";
import readline from "readline/promises";
import { homedir } from "os";

import { commands } from "./commands.js";
import { getCurrentDir, getNameFromArgs, greeting } from "../helpers.js";

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
  console.log(input);
  try {
    const isValidCommand = commands.map((com) => {
      const inputWithArgs = input.trim().split(" ");
      if (com.name.startsWith(inputWithArgs[0])) {
        return com.event.emit(com.name, inputWithArgs.slice(1));
      }
    });
    isValidCommand.includes(true)
      ? isValidCommand
      : (function () {
          throw new Error("Operation failed!");
        })();
  } catch (error) {
    console.error(error.message);
    rl.prompt();
  }
})
  .on("SIGINT", () => {
    rl.close();
  })
  .on("close", () => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
    process.exit(0);
  });
