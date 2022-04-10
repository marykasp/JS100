// use reduce to computer the sum of the squares of all the numbers in an array


let array = [3, 5, 7];

function sumOfSquares(array) {
  let squares = array.reduce((accumulator, element) => {
    return accumulator + element * element;
  }, 0)

  return squares;
}

console.log(sumOfSquares(array));

// if accumulator initial value was not provided the first element in the array would be used
// 3 + 9 + 25 + 49 => 86
