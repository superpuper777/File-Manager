import { EventEmitter } from "events";

const calculateHash = () => {};

const hashEventEmitter = new EventEmitter();
hashEventEmitter.on("hash", calculateHash);

export default hashEventEmitter;