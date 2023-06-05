import _ from "lodash";

export const addDebounce = (
  func: (args?: any) => any,
  debounceDelay: number = 500
) => {
  return _.debounce(func, debounceDelay);
};
