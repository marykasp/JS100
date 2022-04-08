// use object literal syntax to create an object that behaves as an array in a for statement

let myArray = {
  0: "mary",
  1: 32,
  2: 'hello world',
  length: 3
};

for (let i =0; i < myArray.length; i+= 1) {
  console.log(myArray[i])
}
