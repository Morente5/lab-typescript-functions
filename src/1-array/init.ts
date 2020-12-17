// V2 Advanced tuples typing (TypeScript 4)
export const init = <T extends unknown[]>(arr: [...T, unknown]): T => arr.slice(0, arr.length - 1) as T;
// Type of `init([1, 'Hello', true])` => [number, string] 👍
