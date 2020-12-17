export const last = <T extends unknown[], U>(arr: [...T, U]): U => arr[arr.length - 1] as U;
// Type of `last([1, 'Hello', true])` => boolean 👍
