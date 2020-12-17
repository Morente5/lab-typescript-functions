// 2 arrays
export const concat = <T, U>(a: T[], b: U[]) => [...a, ...b];
// Type of `concat([1, 'Hello'], [1, true])` => (string | number | boolean)[]