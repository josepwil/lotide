const chai = require('chai');
const assert = chai.assert;
const countLetters = require('../countLetters');

describe('#countLetters', () => {

  it('should return an object with the correct letter counts', () => {
    assert.deepEqual(countLetters('hello i am a string'), { h: 1, e: 1, l: 2, o: 1, i: 2, a: 2, m: 1, s: 1, t: 1, r: 1, n: 1, g: 1 });
  });

  it('should return undefined if an empty string is passed in', () => {
    assert.isUndefined(countLetters(''));
  });

  it('should return undefined if no value is entered', () => {
    assert.isUndefined(countLetters());
  });

})