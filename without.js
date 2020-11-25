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


const without = function(sourceArray, itemsToRemove) {
  let editedArray = [];
  for (let item of sourceArray) {
    if (!itemsToRemove.includes(item)) {
      editedArray.push(item);
    }
  }
  return editedArray;
};


const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
console.log(without(["1", "2", "3"], [1, 2, "3"]));