const chai = require('chai');
const assert = chai.assert;
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


describe('#findKeyByValue', () => {
  it('should return drama for "The Wire', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  })
  it('should return undefined for "That 70s Show"', () => {
    assert.isUndefined(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));

  })
})