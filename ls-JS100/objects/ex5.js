// create an object named myObj that uses myProtoObj as its prototype

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj['qux'] = 3;
console.log(myObj);
console.log(myObj.foo)
