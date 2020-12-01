// loop over elements in array
// if not an array add to flattened array
// if an array loop over that array
// if not an array add to flattend array

const flatten = function(enteredArray) {
  let flattendArray = [];

  const flattenLite = function(enteredArray) {
    for (let item of enteredArray) {
      if (Array.isArray(item)) {
        flattenLite(item);
      } else {
        flattendArray.push(item);
      }
    }
  };
  flattenLite(enteredArray);
  return flattendArray;
};

module.exports = flatten;
