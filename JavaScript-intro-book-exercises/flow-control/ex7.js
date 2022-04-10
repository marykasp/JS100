// write a functio that takes a string as an argument and returns an all caps version when string is longer than 10 characters

// primitive values - strings are immutable

function stringUpperCase(word) {
  if (word.length > 10) {
    return word.toUpperCase();
  } else {
    return word;
  }
}

function capsLong(string) {
  // using a ternary operator instead of if statment
  return ((string.length > 10) ? string.toUpperCase() : string);
}

console.log(stringUpperCase('hello world'));
console.log(stringUpperCase('Mary Kasparian'));
console.log(stringUpperCase('Joe Thomas'));
