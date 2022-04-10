// which are valid keys for an object?

'1', 'hello world', 'true', 1, true, undefined

// all are valid keys, JS will coerce the non-string keys to strings

let myObj = {}
myObj[true] = 'hello'
myObj['true'] = 'world'
myObj['1'] = 'number'

myObj[true] // returns 'world'\

console.log(myObj)


