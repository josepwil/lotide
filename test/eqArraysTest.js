const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
assertEqual(eqArrays([1, 2, [3]], [1, 2, 3]), false); 
assertEqual(eqArrays([[1, 2, [[3], 4]], 5, []], [[1, 2, [[3], 4]], 5, []]), true) 
assertEqual(eqArrays([[1, 2, [[3], 4]], 5, [7]], [[1, 2, [[3], 4]], 5, [6]]), false) 
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); 
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); 