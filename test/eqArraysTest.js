const chai = require('chai');
const assert = chai.assert;
const eqArrays = require('../eqArrays');


describe('#eqArrays', () => {

  it('should equal true as arrays are the same', () => {
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });
  it('should equal false as arrays are not the same', () => {
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  });
  it('should equal false as arrays are not same', () => {
    assert.deepEqual(eqArrays([1, 2, [3]], [1, 2, 3]), false); 
  });
  it('should equal true as arrays are the same', () => {
    assert.deepEqual(eqArrays([[1, 2, [[3], 4]], 5, []], [[1, 2, [[3], 4]], 5, []]), true);
  });
  it('should equal false as arrays are not the same', () => {
    assert.deepEqual(eqArrays([[1, 2, [[3], 4]], 5, [7]], [[1, 2, [[3], 4]], 5, [6]]), false) 
  });
  it('should equal true as arrays are the same', () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
  });
  it('should equal true as arrays are the same', () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); 
  });
  it('should equal false as arrays are not the same', () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); 
  });
})