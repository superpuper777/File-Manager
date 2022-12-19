import process from "process";
import { readdir } from "fs/promises";

import {createTableByFile} from './utils.js';
import { getCurrentDir } from "../../helpers.js";

export const goUpper = async () => {
  try {
    getCurrentDir("..");
  } catch (error) {
    console.error("Operation failed");
  }
};

export const goToFolder = async ([pathToDirectory]) => {
  try {
    getCurrentDir(pathToDirectory);
  } catch (error) {
    console.error("Operation failed");
  }
};


export const showListOfFiles = async () => {
  try {
    const currentDirectory = process.cwd();
    const files = await readdir(currentDirectory);
    const structureTable = createTableByFile(files);
    console.table(structureTable);
  } catch (error) {
    console.error("Operation failed");
  }
};
