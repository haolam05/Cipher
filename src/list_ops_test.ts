import * as assert from 'assert';
import { explode } from './char_list';
import { last, prefix, suffix } from './list_ops';
import { cons, nil } from './list';

describe('list_ops', function() {

  it('last', function() {
    assert.throws(() => last(nil), Error);

    assert.deepEqual(last(explode("a")), "a".charCodeAt(0));
    assert.deepEqual(last(explode("_")), "_".charCodeAt(0));

    assert.deepEqual(last(explode("stray")), "y".charCodeAt(0));
    assert.deepEqual(last(explode("shrug")), "g".charCodeAt(0));
    assert.deepEqual(last(explode("hub")), "b".charCodeAt(0));
    assert.deepEqual(last(explode("hm")), "m".charCodeAt(0));
  });

  it('prefix', function() {
    assert.throws(() => prefix(-1, cons(1, cons(2, nil))), Error);                              // 1st valid input test   (n < 0)
    assert.throws(() => prefix(-2, cons(1, cons(2, nil))), Error);                              // 2nd valid input test   (n < 0)
    assert.throws(() => prefix(12, cons(1, cons(2, nil))), Error);                              // 1st valid input test   (len(L) < n)
    assert.throws(() => prefix(33, cons(1, cons(2, nil))), Error);                              // 2nd valid input test   (len(L) < n)
    assert.deepStrictEqual(prefix(0, cons(1, nil)), nil);                                       // 0-1-many heuristic, 1st base case
    assert.deepStrictEqual(prefix(0, cons(1, cons(2, nil))), nil);                              // 0-1-many heuristic, 2nd base case
    assert.deepStrictEqual(prefix(1, cons(1, nil)), cons(1, nil));                              // 0-1-many heuristic, 1st 1 case, single recursive call
    assert.deepStrictEqual(prefix(1, cons(1, cons(2, nil))), cons(1, nil));                     // 0-1-many heuristic, 2nd 1 case, single recursive call
    assert.deepStrictEqual(prefix(2, cons(1, cons(2, nil))), cons(1, cons(2, nil)));            // 0-1-many heuristic, 1st many case, >1 recursive call
    assert.deepStrictEqual(prefix(2, cons(3, cons(2, cons(1, nil)))), cons(3, cons(2, nil)));   // 0-1-many heuristic, 1st many case, >1 recursive call
  });

  it('suffix', function() {
    assert.throws(() => suffix(-1, cons(1, cons(2, nil))), Error);                              // 1st valid input test   (n < 0)
    assert.throws(() => suffix(-2, cons(1, cons(2, nil))), Error);                              // 2nd valid input test   (n < 0)
    assert.throws(() => suffix(12, cons(1, cons(2, nil))), Error);                              // 1st valid input test   (len(L) < n)
    assert.throws(() => suffix(33, cons(1, cons(2, nil))), Error);                              // 2nd valid input test   (len(L) < n)
    assert.deepStrictEqual(suffix(0, cons(1, nil)), cons(1, nil));                              // 0-1-many heuristic, 1st base case
    assert.deepStrictEqual(suffix(0, cons(1, cons(2, nil))), cons(1, cons(2, nil)));            // 0-1-many heuristic, 2nd base case
    assert.deepStrictEqual(suffix(1, cons(1, nil)), nil);                                       // 0-1-many heuristic, 1st 1 case, single recursive call
    assert.deepStrictEqual(suffix(1, cons(1, cons(2, nil))), cons(2, nil));                     // 0-1-many heuristic, 2nd 1 case, single recursive call
    assert.deepStrictEqual(suffix(2, cons(1, cons(2, nil))), nil);                              // 0-1-many heuristic, 1st many case, >1 recursive call
    assert.deepStrictEqual(suffix(2, cons(3, cons(2, cons(1, nil)))), cons(1, nil));            // 0-1-many heuristic, 1st many case, >1 recursive call
  });

});
