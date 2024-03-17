import { projectDirectory } from "./RootDirectory";

export const Path = (location: string) => {
  return `${projectDirectory}/${location}`;
};
