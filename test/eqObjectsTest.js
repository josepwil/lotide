const chai = require('chai');
const assert = chai.assert;
const eqObjects = require('../eqObjects');



const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };


describe('#eqObjects', () => {
  it('should return true as objects are the same', () => {
    assert.deepEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });
  it('should return false as objects are not the same', () => {
    assert.deepEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });
  it('should return false as objects are not the same', () => {
    assert.deepEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);

  });
  it('should return true as objects are the same', () => {
    assert.deepEqual(eqObjects(cd, dc), true);
  });
  it('should return false as objects are not the same', () => {
    assert.deepEqual(eqObjects(cd, cd2), false);
  });
})