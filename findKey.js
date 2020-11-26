const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed ✅: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed 🛑: ${actual} !== ${expected}`);
  }
};


const findKey = function (object, callback) {
  for (key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return 'not found';
}

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

assertEqual(result1, 'noma');
assertEqual(result2, 'Blue Hill');
assertEqual(result3, 'Akaleri');

