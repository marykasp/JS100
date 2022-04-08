// log all of the even values

let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

// forEach to console.log() each even value
myArray.forEach(function(num) {
  if (num % 2 === 0) {
    console.log(num)
  }
})

// for loop to iterate over each element
for(let i = 0; i < myArray.length; i++) {
  if (myArray[i] % 2 === 0) {
    console.log(myArray[i])
  }
}
