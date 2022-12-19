import { createBrotliCompress, createBrotliDecompress } from "zlib";
import { createWriteStream, createReadStream } from "fs";
import { basename, join } from "path";

import { getCurrentDir, getArchivePath } from "../../helpers.js";

export const compressFile = async ([pathToFile, pathToDestination]) => {
  pathToDestination = getArchivePath(pathToFile, pathToDestination);
  const brotli = createBrotliCompress();
  const readableStream = createReadStream(pathToFile);
  const writableStream = createWriteStream(pathToDestination);
  try {
    await readableStream.pipe(brotli).pipe(writableStream);
    getCurrentDir("");
  } catch (error) {
    console.error("Operation failed");
  }
};

export const decompressFile = async ([pathToFile, pathToDestination]) => {
//   pathToFile = getFilePath(pathToFile, pathToDestination);
//   const brotli = createBrotliDecompress();
//   const readableStream = createReadStream(pathToFile);
//   const writableStream = createWriteStream(pathToDestination);
//   try {
//     await readableStream.pipe(brotli).pipe(writableStream);
//     getCurrentDir("");
//   } catch (error) {
//     console.error("Operation failed");
//   }
};
