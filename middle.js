const middle = function(array) {
  const middleElement = [];
  const length = array.length
  const midLength = array.length / 2

  if (length % 2 === 0) {
    middleElement.push(array[midLength - 1], array[midLength]);
  } else {
    middleElement.push(array[midLength - 0.5])
  }
  return middleElement;
}

module.exports = middle;