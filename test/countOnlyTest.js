const chai = require('chai');
const assert = chai.assert;
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);

describe('#countOnly', () => {
  it('result1["Jason"] should equal 1', () => {
    assert.strictEqual(result1["Jason"], 1);
  });
  it('result1["Karima"] should equal undefined', () => {
    assert.isUndefined(result1["Karima"]);
  });
  it('result1["Fang"] should equal 2', () => {
    assert.strictEqual(result1["Fang"], 2);
  });
  it('result1["Agouhanna"] should equal undefined', () => {
    assert.isUndefined(result1["Agouhanna"]);
  });
})