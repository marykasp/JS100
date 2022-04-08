// what does this code log to the console?

let array1 = [1, 2, 3];
let array2 = array1;
array[1] = 4;

console.log(array2); // [1, 4, 3]

// array2 is a new variable that points to the same memory location as array1 where the actually array [1, 2, 3] is stored. so both variables have the same pointer value therefore if the array is modified then the changes will also be seen in array2

// ** an assignment of an array to another array doesn't create a new array, copies the reference to the array's memory location from the original array
