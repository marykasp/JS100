// write a findIntegers function that takes an array as an argument and returns an array that contains only the integers fromm the input array, filter method

function findIntegers(array) {
  return array.filter(function(value) {
    return Number.isInteger(value);
  })
}

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers); //


