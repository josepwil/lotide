const tail = require('../tail');
const assertEqual = require('../assertEqual');

const words = ["Yo Yo", "Lighthouse", "Labs"];

assertEqual(tail(words).length, 2);
assertEqual(tail(words)[0], "Lighthouse");  
assertEqual(tail([]).length, 0);
