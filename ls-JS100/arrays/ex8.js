//** Challenging problem */

// todo: write a function that is similar to oddLengths try to use the reduce method instead

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
  return array.reduce((accumulator, value) => {
    if (value.length % 2 !== 0) {
      accumulator.push(value.length)
    }

    return accumulator;
  }, [])
}


console.log(oddLengths(arr)); // => [1, 5, 3]
