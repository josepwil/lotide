const chai = require('chai');
const assert = chai.assert;
const findKey = require('../findKey');

const stars = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const result1 = findKey(stars, x => x.stars === 2) 
const result2 = findKey(stars, x => x.stars === 1) 
const result3 = findKey(stars, x => x.stars === 3) 
const result4 = findKey(stars, x => x.stars === 7) 

describe('#findKey', () => {
  it('result 1 should equal noma', () => {
    assert.strictEqual(result1, 'noma');
  })
  it('result 2 should equal Blue Hill', () => {
    assert.strictEqual(result2, 'Blue Hill');
  })
  it('result 3 should equal Akaleri', () => {
    assert.strictEqual(result3, 'Akaleri');
  })
  it('result 4 should equal not found', () => {
    assert.strictEqual(result4, 'not found');
  })

})
