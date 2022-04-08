// use map and filter to first determine the lengths of all elements in an arry of string values, then discard the even values (keep odd values)

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

/*function oddLengths(arr) {
  let lengths = arr.map((letters) => letters.length);
  let oddLengths = lengths.filter((number) => number % 2 !== 0 );
  return oddLengths;
} */

function oddLengths(array) {
  let stringLengths = array.map(function(string) {
    return string.length
  });

  let oddLengths = stringLengths.filter(function(number) {
    return number % 2 !== 0;
  });

  return oddLengths;
}


console.log(oddLengths(arr)); // => [1, 5, 3]



