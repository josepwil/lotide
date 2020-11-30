const middle = require('../middle');
const chai = require('chai');
const assert = chai.assert;

describe('#middle', () => {

  it("should return [2] for [1, 2, 3])", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  })

  it("should return [3] for 1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  })

  it("should return [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  })

  it("should return [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
  })

});