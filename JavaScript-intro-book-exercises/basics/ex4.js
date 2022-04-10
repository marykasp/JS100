// explain why this code logs '510' instead of 15

console.log('5' + 10)

/*
** every + expression that has a string operand produces a string result
** implicit type conversion
** JS will convert a number to a string value when one of the values is a string with the + operator, allows for string concatenation
*/
