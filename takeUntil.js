const takeUntil = function(array, callback) {
  const outputArray = [];
  for (let item of array) {
    if (!callback(item)) {
      outputArray.push(item);
    } else {
      return outputArray;
    }
  }
  return outputArray;
};

  // could also implement using while/forEach()
  // while (!callback(item)) {
  //   array.forEach((item) => {
  //     outputArray.push(item);
  //   })
  // }
  // return outputArray;


module.exports = takeUntil;