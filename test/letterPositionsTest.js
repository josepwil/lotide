const chai = require('chai');
const assert = chai.assert;
const letterPositions = require('../letterPositions');


describe('#letterPositions', () => {
  it('should return the correct object of letter index positions', () => {
    assert.deepEqual(letterPositions("lighthouse in the house"), { l: [ 0 ],
      i: [ 1, 11 ],
      g: [ 2 ],
      h: [ 3, 5, 15, 18 ],
      t: [ 4, 14 ],
      o: [ 6, 19 ],
      u: [ 7, 20 ],
      s: [ 8, 21 ],
      e: [ 9, 16, 22 ],
      n: [ 12 ] })
  });
  it('should return [1] when checking for e after passing in "hello"', () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  })
  
})

// assertArraysEqual(letterPositions("hello").e, [1]);