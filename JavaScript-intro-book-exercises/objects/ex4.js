// create an array from the keys of the object below with all the keys converted to uppercase

let obj = {
  b: 2,
  a: 1,
  c: 3,
}

let keyArray = Object.keys(obj);

let upperCaseKeys = keyArray.map((key) => key.toUpperCase())

console.log(upperCaseKeys);
// original object was not mutated
console.log(obj);
