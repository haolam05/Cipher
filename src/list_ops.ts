import { List, cons, len, nil } from './list';


/** Returns the last element in the given list. */
export function last(L: List<number>): number {
    if (L === nil) {
        throw new Error("empty list has no last element");
    } else if (L.tl === nil) {
        return L.hd;
    } else {
        return last(L.tl);
    }
}


/** Returns the prefix consting of the first n elements of L. */
export function prefix<A>(n: number, L: List<A>): List<A> {
  // n must be greater or equal to zero and list must have at least n elements.
  if (n < 0 || len(L) < n) {
    throw new Error("undefined");
  } else if (n === 0 || L === nil) {  // from prompt, it's gurantee that input L : List has at least n elements;
    return nil;                       // we check "L === nil" here because we can't use L.hd or L.tl w/o this conditional check in typescript
  } else {
    return cons(L.hd, prefix(n-1, L.tl));
  }
}


/** Returns the suffix consting of the elements of L after the first n. */
export function suffix<A>(n: number, L: List<A>): List<A> {
  // n must be greater or equal to zero and list must have at least n elements.
  if (n < 0 || len(L) < n) {
    throw new Error("undefined");
  } else if (n === 0 || L === nil) {  // from prompt, it's gurantee that input L : List has at least n elements;
    return L;                         // we check "L === nil" here because we can't use L.hd or L.tl w/o this conditional check in typescript
  } else {
    return suffix(n-1, L.tl);
  }
}