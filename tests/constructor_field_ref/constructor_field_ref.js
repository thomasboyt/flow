/* @flow */

class C {
  x: number;
  y: number;
}

class D extends C {
  constructor() {
    this.x = 1;
    this.y = 'string';
  }
}

module.exports = D;
