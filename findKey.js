const findKey = function (object, callback) {
  for (key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return 'not found';
}

module.exports = findKey;

