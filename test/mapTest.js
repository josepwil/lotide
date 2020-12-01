const chai = require('chai');
const assert = chai.assert;
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];

const firstChar = map(words, word => word[0]);
const toUpper = map(words, word => word.toUpperCase());
const includesT = map(words, word => word.includes('t'));

describe('#map', () => {
  it('should return an array of the first character of each word', () => {
    assert.deepEqual(firstChar, ["g", "c", "t", "m", "t"]);
  })
  it('should return the array with all letters in uppercase', () => {
    assert.deepEqual(toUpper, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);
  });
  it('should return an array of truth/false values', () => {
    assert.deepEqual(includesT, [ false, true, true, false, true ]);
  })
})


