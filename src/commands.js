import {
  fsEvents,
  hashEvents,
  navigationEvents,
  osEvents,
  zipEvents,
} from "./Events/index.js";

const makeCommandObject = (name, event) => {
  return {
    name,
    event,
  };
};

const createCommandByEvent = (event) =>
  event.eventNames().map((ev) => makeCommandObject(ev, event));

const fsCommands = createCommandByEvent(fsEvents);
const hashCommands = createCommandByEvent(hashEvents);
const naviCommands = createCommandByEvent(navigationEvents);
const osCommands = createCommandByEvent(osEvents);
const zipCommands = createCommandByEvent(zipEvents);

export const commands = [
  ...fsCommands,
  ...hashCommands,
  ...naviCommands,
  ...osCommands,
  ...zipCommands,
];
