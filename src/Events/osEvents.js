import { EventEmitter } from "events";

const getOsInfo = () => {};

const osEventEmitter = new EventEmitter();
osEventEmitter.on("os", getOsInfo);

export default osEventEmitter;