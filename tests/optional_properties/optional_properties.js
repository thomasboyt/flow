/* @flow */

type FooType = {
  a: string;
  ?b: string;
};

var hasBoth: FooType = {
  a: 'foo',
  b: 'bar'
};

var hasA: FooType = {
  a: 'foo'
};

var nullB: FooType = {
  a: 'foo',
  b: null
};
