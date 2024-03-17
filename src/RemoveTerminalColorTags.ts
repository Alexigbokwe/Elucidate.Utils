export const RemoveTerminalColorTags = (input: string): string => {
  const colorRegex = /\x1B\[[0-9;]*[mGK]\s*/g;
  return input.replace(colorRegex, "");
};
