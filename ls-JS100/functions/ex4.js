// what does the code log to the console?

function scream(words) {
  words = words + '!!!!';
  return;
  // this line will not be executed since the return statement causes function to stop running and exits out of the scope
  console.log(words);
}

scream('Yipeee'); // will not log anything to the console
