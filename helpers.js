import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { stat, access } from "fs/promises";

export const getFilePath = (meta, ...args) => {
  const __filename = fileURLToPath(meta);
  const __dirname = dirname(__filename);
  const filePath = join(__dirname, ...args);
  return filePath;
};

const validArgs = (args) =>
  args.split("=").includes("--username") && args.split("=")[1].length > 1;

export const getNameFromArgs = (args) => {
  try {
    const name = args.split("=")[1];
    if (validArgs(args)) {
      return name.charAt(0).toUpperCase() + name.slice(1);
    } else
      throw new Error(
        "Operation failed! Wrong arguments, enter --username=your_name, please!"
      );
  } catch (error) {
    console.error(error.message);
  }
};

export const greeting = (name) => `Welcome to the File Manager, ${name}!\n`;

export const getCurrentDir = (destination) => {
  if (destination !== "") {
    process.chdir(destination);
  }
  console.log(`You are currently in ${process.cwd()}`);
};

export const isFile = async (path) => {
  try {
    const stats = await stat(path);
    return stats.isFile();
  } catch (err) {
    console.log(err);
  }
};

export const isExists = async (path) => {
  try {
    await access(path);
    return true;
  } catch (error) {
    return false;
  }
};

export const getArchivePath = (pathToFile, pathToDestination) => {
  const extensionFileRegex = /\.[0-9a-z]+$/i;
  const fileName = basename(pathToFile);
  const archiveFileName = fileName.replace(extensionFileRegex, ".br");
  return (pathToDestination = join(pathToDestination, archiveFileName));
};
