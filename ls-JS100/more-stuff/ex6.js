// write a function that searches an array of strings for every element that matches the regular expression given by its argument

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
]

function allMatches(words, pattern) {
  return words.filter((word) => pattern.test(word))
}

console.log(allMatches(words, /lab/));

// can also use for loop to iterate through the array and push the matches to a new array

function newMatches(words, pattern) {
  let matches = [];
  for (let i = 0; i < words.length; i += 1) {
    if (pattern.test(words[i])) {
      matches.push(words[i])
    }
  }

  return matches
}

console.log(newMatches(words, /lab/));
