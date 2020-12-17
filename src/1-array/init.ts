export const init = <T>(arr: T[]): T[] => arr.slice(0, arr.length - 1);
// Type of `init([1, 'Hello', true])` => (string | number | boolean)[]
