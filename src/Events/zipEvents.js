import { EventEmitter } from "events";

const compressFile = () => {};
const decompressFile = () => {};

export const zipEventEmitter = new EventEmitter();
zipEventEmitter.on("compress", compressFile).on("decompress", decompressFile);

export default zipEventEmitter;