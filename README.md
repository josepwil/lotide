# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @josepwil/lotide`

**Require it:**

`const _ = require('@josepwil/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertArraysEqual)`: asserts if arrays are equal
* `function2(assertEqual)`: asserts if two values are equal
* `function3(assertObjectsEqual)`: asserts if two objects are equal
* `function4(countLetters)`: counts number of invidual letters in a string and returns totals for each letter
* `function5(countOnly)`: receives an array and items to search and tallies each occurance of items to search in the array
* `function6(eqArrays)`: determines if two array are equal
* `function7(eqObjects)`: determines if two objects are equal
* `function8(findKey)`: receives object/callback, searches through object and returns key where callback evaluates to truthy
* `function9(findKeyByValue)`: receives object/value, searches through object and returns key that has matching value
* `function10(flatten)`: flattens nested arrays into one array
* `function11(head)`: returns first element of an array
* `function12(letterPositions)`: receives sentence, returns where index values of where each letter existd in sentence
* `function13(map)`: receives array/callback, manipulates data in array by applying callback to each element and maps manipulated data into new array
* `function14(middle)`: returns middle element in an array
* `function15(tail)`: returns all but first element of an array
* `function16(takeUntil)`: receives array/callback, loops through array until callback is truthy and returns values in array up to that point
* `function17(without)`: receives sourceArray and items to remove, returns array with items removed
