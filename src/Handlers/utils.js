import { isFile } from "../../helpers.js";

const makeTableObject = (name, type) => {
  return {
    name,
    type,
  };
};

export const createTableByFile = (files) =>
  files.map((file) =>
    makeTableObject(file, 'type')
  );

// {
// files.map(async (file) =>
//   makeTableObject(
//     file,
//     await isFile(file).then(function (result) {
//       return result;
//     })
//   )
//     ? "file"
//     : "directory"
// );
//
