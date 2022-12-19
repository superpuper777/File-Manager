import { EventEmitter } from "events";

import {compressFile,decompressFile } from '../handlers/zip.js';

export const zipEventEmitter = new EventEmitter();
zipEventEmitter.on("compress", compressFile).on("decompress", decompressFile);

export default zipEventEmitter;