import { EventEmitter } from "events";
import { goUpper, goToFolder, showListOfFiles } from "../handlers/navigation.js";

const naviEventEmitter = new EventEmitter();
naviEventEmitter
  .on("up", goUpper)
  .on("cd", goToFolder)
  .on("ls", showListOfFiles);

export default naviEventEmitter;
