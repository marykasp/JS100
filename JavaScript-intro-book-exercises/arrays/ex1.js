// what are the final length values

let array1 = [1, 2, undefined, 4]; // 4
console.log(array1.length)

let array2 = [1];  // 5
array2.length = 5;
console.log(array2.length)

let array3 = [];
array3[-1] = [1];
console.log(array3.length);  // 0

let array4 = [1, 2, 3, 4, 5];
array4.length = 3; // 3
console.log(array4.length)

let array5 = [];
array5[100] = 3;  // 101
console.log(array5.length)
