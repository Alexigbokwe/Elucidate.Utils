import path from "path";
export const projectDirectory = path.dirname(process.argv[1]).split("/node_modules")[0];
