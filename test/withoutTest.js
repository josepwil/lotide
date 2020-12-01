const chai = require('chai');
const assert = chai.assert;
const without = require('../without');

const words = ["hello", "world", "lighthouse"];

describe('#without', () => {
  it('should return array without "lighthouse"', () => {
    assert.deepEqual(without(words, ["lighthouse"]), ["hello", "world"]);
  });
  it('should return ["1", "2"]', () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
})