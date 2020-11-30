const tail = require('../tail');
const { assert } = require('chai');

describe('#tail', () => {

  it("should return ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("should return ['Hi', 'There'] for ['Brian', 'Hi', 'There']", () => {
    assert.deepEqual(tail(['Brian', 'Hi', 'There']), ['Hi', 'There']);
  });
  it("should return ['a', 'test'] for ['its', 'a', 'test']", () => {
    assert.deepEqual(tail(['its', 'a', 'test']), ['a', 'test']);
  });

});

