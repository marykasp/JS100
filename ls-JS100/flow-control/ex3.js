// add a validation check to ensure argument is an integer

function evenOrOdd(num) {
  if (Number.isInteger(num)) {
    if (num % 2 === 0) {
      console.log('even')
    } else {
      console.log('odd')
    }
  } else {
    console.log('Please enter a valid number')
  }

}

evenOrOdd(10);
evenOrOdd(33);
evenOrOdd('7');
