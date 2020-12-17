// V2 Advanced tuples typing (TypeScript 4)
export const tail = <T extends unknown[]>([, ...tail]: [unknown, ...T]) => tail;
// Type of `tail([1, 'Hello', true])` => [string, boolean] 👍
