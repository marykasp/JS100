// what does the following function do?

function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

// the string passed into the function is first split into an array, each word as an element in the array, then the array is reversed, and then the array map method is called on the reversed array, iterates through each element(word) and passes it as an argument to the callback function that determines the length of that word, that integer length number is then added to a new array, the new array is then returned from the function

console.log(doSomething('Hello how are you?')); // function will return a new array

