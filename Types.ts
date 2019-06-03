// https://stackoverflow.com/a/49928360/3406963 without generic branch types
export type IsAny<T> = 0 extends (1 & T) ? true : false;

export type Or<A, B, C = false> = A extends true
  ? true
  : B extends true
  ? true
  : C extends true
  ? true
  : false;
export type And<A, B, C = true> = A extends true
  ? B extends true
    ? C extends true
      ? true
      : false
    : false
  : false;

/**
 * @internal
 *
 * check if a type is `{}`
 *
 * 1. false if the given type has any members
 * 2. false if the type is `object` which is the only other type with no members
 *  {} is a top type so e.g. `string extends {}` but not `string extends object`
 * 3. false if the given type is `unknown`
 */
export type IsEmptyInterface<T> = And<
  keyof T extends never ? true : false,
  string extends T ? true : false,
  unknown extends T ? false : true
>;

