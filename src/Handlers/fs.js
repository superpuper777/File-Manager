import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream/promises";
import { writeFile, rename, rm } from "fs/promises";
import { basename, join } from "path";
import { stdout } from "process";

import { getCurrentDir } from "../../helpers.js";

export const readFile = async ([pathToFile]) => {
  try {
    const readableStream = createReadStream(pathToFile, { encoding: "utf8" });
    await readableStream.pipe(stdout);
    getCurrentDir("");
  } catch (error) {
    console.error("Operation failed");
  }
};

export const createFile = async ([filePath]) => {
  try {
    await writeFile(filePath, "", { flag: "wx" });
    getCurrentDir("");
  } catch (error) {
    console.error("Operation failed");
  }
};

export const renameFile = async ([oldFileName, newFileName]) => {
  const currentDirectory = process.cwd();
  const pathToOldFile = `${currentDirectory}\\${oldFileName}`;
  const pathToNewFile = `${currentDirectory}\\${newFileName}`;
  try {
    await rename(pathToOldFile, pathToNewFile);
    getCurrentDir("");
  } catch (error) {
    console.error(error);
  }
};

export const copyFile = async ([pathToFile, pathToNewDirectory]) => {
  try {
    const fileName = basename(pathToFile);
    const readableStream = createReadStream(pathToFile);
    const writableStream = createWriteStream(
      join(pathToNewDirectory, fileName)
    );
    await pipeline(readableStream, writableStream);
    getCurrentDir("");
  } catch {
    console.error("Operation failed");
  }
};

export const moveFile = async ([pathToFile, pathToNewDirectory]) => {
  try {
    const fileName = basename(pathToFile);
    const readableStream = createReadStream(pathToFile);
    const writableStream = createWriteStream(
      join(pathToNewDirectory, fileName)
    );
    await pipeline(readableStream, writableStream);
    await rm(pathToFile);
    getCurrentDir("");
  } catch {
    console.error("Operation failed");
  }
};

export const deleteFile = async ([filePath]) => {
  try {
    await rm(filePath);
    getCurrentDir("");
  } catch (error) {
    console.error("Operation failed");
  }
};
