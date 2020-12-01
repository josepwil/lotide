const chai = require('chai');
const assert = chai.assert;
const flatten = require('../flatten');

describe('#flatten', () => {
  it('should return [1, 2, 3, 4, 5, 6] when passed [1, 2, [3, 4], 5, [6]]', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it('should return [1, 2, 3, 4, 5, 6, 7, 8] when passed [1, 2, [3, 4, [5, 6]], 7, [8]]', () => {
    assert.deepEqual(flatten([1, 2, [3, 4, [5, 6]], 7, [8]]), [1, 2, 3, 4, 5, 6, 7, 8]);
  });
  it('should return [1, 2, 3, 4, 5, 6] when passed  [1, 2, [3, [4]]], 5, [6]]', () => {
    assert.deepEqual(flatten([1, 2, [3, [4]], 5, [6]]), [1, 2, 3, 4, 5, 6])
  })
})
