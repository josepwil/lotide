// if key exists in object increment it otherwise initialize it to 1
const initOrAddToArrayInObj = function(key, object, i) {
  if (object[key]) {
    object[key].push(i);
  } else {
    object[key] = [i];
  }
};


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      initOrAddToArrayInObj(sentence[i], results, i);
    }
  }
  return results;
};


module.exports = letterPositions;