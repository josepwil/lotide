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



const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅ Assertion Passed ✅: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑 Assertion Failed 🛑: ${arrayOne} !== ${arrayTwo}`);
  }
};

// trim spaces in a string using regex + replace method
const trimString = function(string) {
  return string.replace(/ /g, '');
};

// if key exists in object increment it otherwise initialize it to 1
const initOrAddToArrayInObj = function(key, object, i) {
  if (object[key]) {
    object[key].push(i);
  } else {
    object[key] = [i];
  }
};


const letterPositions = function(sentence) {
  // sentence = trimString(sentence);
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      initOrAddToArrayInObj(sentence[i], results, i);
    }
  }
  return results;
};



console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions;