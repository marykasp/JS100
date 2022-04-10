// What happens when you run the following code

const NAME = 'Victor';
// constant variable is declared and then used in console.log() function which will run
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

// this line will throw a TypeError since you cannot reassign a value to a constant variable after defining it
NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Morning, ' + NAME);
console.log('Good Morning, ' + NAME);
