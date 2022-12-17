import { fileURLToPath } from "url";
import { dirname, join } from "path";

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
  process.chdir(destination)
  console.log(`You are currently in ${process.cwd()}`);
}