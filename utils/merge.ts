import { deepmerge } from "@mui/utils";

function merge(acc: any, item: any) {
  if (!item) {
    return acc;
  }

  return deepmerge(acc, item, {
    clone: false, // No need to clone deep, it's way faster.
  });
}

export default merge;
