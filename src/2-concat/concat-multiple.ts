import { concat as concatTwo } from "../2-concat/concat.js";

// Multiple arrays
export const concat0 = <T extends unknown[]>(...arrays: [...[...T]]) => arrays.flat();  // Is this cheating? 😂

// Using previous concat function
export const concat1 = (...arrays) => arrays.reduce((acc, arr) => {
  return concatTwo(acc, arr)
});

export const concat = (...arrays) => arrays.reduce((acc, arr) => {
  acc.push(...arr);
  return acc;
});
