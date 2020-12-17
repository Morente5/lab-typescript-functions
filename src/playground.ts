import { head } from './1-array/head.js';
import { tail } from './1-array/tail.js';
import { init } from './1-array/init.js';
import { last } from './1-array/last.js';
import { concat } from './2-concat/concat.js';
import { concat as concatMultiple } from './2-concat/concat-multiple.js';
import { clone } from './3-clone-merge/clone.js';
import { merge } from './3-clone-merge/merge.js';

export const fn = () => {
  // 1. Array operations
  console.log({
    head: head([1, 'Hello', true]),
    tail: tail([1, 'Hello', true]),
    init: init([1, 'Hello', true]),
    last: last([1, 'Hello', true]),
  });
  // 2. Concat
  console.log({
    concat: concat([1, 'a'], [true, 'b']),
    concatMultiple: concatMultiple([1, 'a'], [true, 'b'], [{ name: 'Alex' }]),
  });
  // 3. Clone Merge
  const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
  const b = { name: "Luisa", age: 31, married: true };
  console.log({
    clone: clone(a),
    merge: merge(a, b),
  });
}
fn();