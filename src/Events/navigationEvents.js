import { EventEmitter } from "events";

const goUpper = () => {};
const goToFolder = () => {};
const showListOfFiles = () => {};

const naviEventEmitter = new EventEmitter();
naviEventEmitter
  .on("up", goUpper)
  .on("cd", goToFolder)
  .on("ls", showListOfFiles);

export default naviEventEmitter;
