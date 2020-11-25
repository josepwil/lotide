const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed ✅: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed 🛑: ${actual} !== ${expected}`);
  }
};

// take in array, compare each value if not equal return false
const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

// compares length of two items 
const checkLength = function(item1, item2) {
  if (item1.length === item2.length) {
    return true;
  } else {
    return false;
  }
}

const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1) 
  const object2Keys = Object.keys(object2)

  if (!checkLength(object1Keys, object2Keys)) {
    return false;
  }

  for (let key of object1Keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    } 
    else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};



const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed ✅: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑 Assertion Failed 🛑: ${actual} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({h: 'i'}, {h: 'i'});