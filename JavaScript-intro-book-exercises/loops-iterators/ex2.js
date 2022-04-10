// function that returns the factorial of a number, use for loop

function factorial(num) {
  let result = 1;
  for (let counter = num; counter > 0; counter -= 1) {
    result *= counter;
  }

  return result
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(8));
