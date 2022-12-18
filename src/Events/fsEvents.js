import { EventEmitter } from "events";
import {
  readFile,
  createFile,
  renameFile,
  copyFile,
  moveFile,
  deleteFile,
} from "../handlers/fs.js";

const fsEventEmitter = new EventEmitter();
fsEventEmitter
  .on("cat", readFile)
  .on("add", createFile)
  .on("rn", renameFile)
  .on("cp", copyFile)
  .on("mv", moveFile)
  .on("rm", deleteFile);

export default fsEventEmitter;
