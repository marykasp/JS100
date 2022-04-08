// what does the code output?

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('empty')
  }
}

isArrayEmpty([]);

// the output is 'Not Empty' since while it is an empty array passed as argument to the function it isn't falsy, so JS will execute the if clause
