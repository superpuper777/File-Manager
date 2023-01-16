import { EventEmitter } from "events";

import {calculateHash} from '../handlers/hash.js';

const hashEventEmitter = new EventEmitter();
hashEventEmitter.on("hash", calculateHash);

export default hashEventEmitter;