export const tail = <T>([, ...tail]: T[]): T[] => tail;
// Type of `tail([1, 'Hello', true])` => (string | number | boolean)[]
