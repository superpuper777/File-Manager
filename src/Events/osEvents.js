import { EventEmitter } from "events";

const getOsInfo = () => {
    console.log('its getOsInfo!');
};

const osEventEmitter = new EventEmitter();
osEventEmitter.on("os", getOsInfo);

export default osEventEmitter;