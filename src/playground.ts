import { head } from './1-array/head.js';
import { tail } from './1-array/tail.js';
import { init } from './1-array/init.js';
import { last } from './1-array/last.js';
import { concat } from './2-concat/concat-multiple.js';

export const fn = () => {
  console.log({
    head: head([1, 'Hello', true]),
    tail: tail([1, 'Hello', true]),
    init: init([1, 'Hello', true]),
    last: last([1, 'Hello', true]),
    concat: concat([1, 'a'], [true, 'b'], [{ name: 'Alex' }]),
  });
}
fn();