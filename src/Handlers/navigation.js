import { getCurrentDir } from "../../helpers.mjs";

export const goUpper = async () => {
  try {
    getCurrentDir("..");
  } catch (error) {
    console.error("Operation failed");
  }
};

export const goToFolder = async (pathToDirectory) => {
  try {
    getCurrentDir(pathToDirectory);
  } catch (error) {
    console.error("Operation failed");
  }
};

export const showListOfFiles = () => {};
