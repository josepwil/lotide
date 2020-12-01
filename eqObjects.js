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
    // if they are objects
    if (typeof(object1[key]) === "object" && typeof(object2[key]) === "object") {
      // if they are arrays
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        return eqArrays(object1[key], object2[key]);
      } else {
        // if they are not arrays and therefore true objects 
        return eqObjects(object1[key], object2[key]);
      }
    }
    else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;

