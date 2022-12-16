import { EventEmitter } from "events";

const readFile = () => {};
const createFile = () => {};
const renameFile = () => {};
const copyFile = () => {};
const moveFile = () => {};
const deleteFile = () => {};

const fsEventEmitter = new EventEmitter();
fsEventEmitter
  .on("cat", readFile)
  .on("add", createFile)
  .on("rn", renameFile)
  .on("cp", copyFile)
  .on("mv", moveFile)
  .on("rm", deleteFile);

export default fsEventEmitter;


