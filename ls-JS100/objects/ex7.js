// add qux property with value 3 to myObj

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

// todo: do these two code snippets produce the same output?

let objKeys = Object.keys(myObj); // returns an array of the objects own keys

objKeys.forEach(function(key) {
  console.log(key)
}); // will log nothing to the screen since object does not have any properties of its own

// for/in iterates over the keys of an object including the prototypes keys
for (let key in myObj) {
  console.log(key)
}
