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

var b: string = hasA.b || 'foo';
var c: number = hasA.b || 0;
