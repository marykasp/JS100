const NAME = 'Victor'; // declare a constant variable
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe'; // TypeError - can't reassign a constant variable
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

// It encounters an error on line 6, which prevents the rest of the code from running. You can't reassign a constant after defining it which it was defined on line 1
