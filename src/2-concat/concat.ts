// 2 arrays
// V2 Advanced typing (TypeScript 4)
export const concat = <T extends unknown[], U extends unknown[]>(a: [...T], b: [...U]): [...T, ...U] => [...a, ...b];
// Type of `concat([1, 'a'], [true, 'b'])` => [number, string, boolean, string] 👍
