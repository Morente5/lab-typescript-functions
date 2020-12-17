// V2 Advanced tuples typing (TypeScript 4)
export const head = <T extends unknown[]>([head]: [...T]): T[0] => head;
// Type of `head([1, 'Hello', true])` => number 👍
