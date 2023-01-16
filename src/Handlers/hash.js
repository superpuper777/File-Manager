import { createReadStream } from "fs";
import { createHash } from "node:crypto";

import { getCurrentDir } from "../../helpers.js";

export const calculateHash = async ([pathToFile]) => {
  try {
    const hash = createHash("sha256");
    const readableStream = createReadStream(pathToFile);
    readableStream
      .on("readable", () => {
        const data = readableStream.read();
        if (data) hash.update(data);
        else {
          console.log(`${hash.digest("hex")}`);
          getCurrentDir("");
        }
      })
      .on("error", (error) => {
        console.error("File error ==> " + error);
      });
  } catch (error) {
    console.error("Operation failed");
  }
};
