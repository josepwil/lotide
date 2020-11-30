// trim spaces in a string using regex + replace method
const trimString = function(string) {
  return string.replace(/ /g, '');
};

// if key exists in object increment it otherwise initialize it to 1
const initOrIncrementKey = function(key, object) {
  if (object[key]) {
    object[key]++;
  } else {
    object[key] = 1;
  }
};
// count letters in given string and output object with number of letters in string
const countLetters = function(sentence) {
  if (!sentence) {
    return undefined;
  }
  const letterCount = {};
  sentence = trimString(sentence);
  for (let c of sentence) {
    initOrIncrementKey(c, letterCount);
  }
  return letterCount;
};

module.exports = countLetters;
