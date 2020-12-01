const without = function(sourceArray, itemsToRemove) {
  let editedArray = [];
  for (let item of sourceArray) {
    if (!itemsToRemove.includes(item)) {
      editedArray.push(item);
    }
  }
  return editedArray;
};

module.exports = without;