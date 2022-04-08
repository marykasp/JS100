// create a function that creates and returns a copy of an object
// takes an object to copy and an array of the keys that you want to coppy

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(object, keys) {
  let destinationObject = {}

  if (keys) {
    keys.forEach(function(key) {
      destinationObject[key] = object[key]
    });

    return destinationObject;
  } else {
    return Object.assign(destinationObject, object)
  }
};

let newObj = copyObj(objToCopy);
console.log(newObj);

let newObj2 = copyObj(objToCopy, ['foo', 'qux']);
console.log(newObj2);
