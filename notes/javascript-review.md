

# JavaScript Basics

## History JS

JavaScript first debuted in 1995 and was built for the *Netscape Navigator* browswer. It first started out as a single browser tool but has expanded to become one of the most popular programming languages. 

Vanilla JS is code without libraries or frameworks like [React](https://reactjs.org) or [Vue](https://vuejs.org). 

- **Create interactive web pages**: JS is the perfect language for adding behavior to web pages. Can give the user a dynamic web experience that responds to their actions and inputs. Information displayed on change when a user clicks on a button or hovers over an image. 
- **Add sparkle to web pages**: To add a hint of surprise to your web pages you can use JS in subtle ways - like animated menus, image galleries, and page transitions
- **Build programs**: Can also build standalone programs - calculate, estimate times or changes based new information

## Variables

**Variable** - a container that stores data - holds a pointer that points towards where data is stored in memory. Gives a label to data and can be used to retrieve data in program. The associated value can be of any data type and change. Variables are declared using the `let` or `var` keyword.

- first declare a variable using the `let` or `var` keyword
- use `=` assignment operator to add a value to a variable
- a semicolon `;` is placed after the value to show that the statement is complete

**Statement** - a single instruction to the program. 

```javascript
let cerealTypes = 16;
console.log("We love JS!");
```

**Values** - data/information stored in a variable. A value is a sequence of bits that is interpreted according so some *data type* 

**Data Type** - type of value a variable points to - numbers, strings, booleans, undefined, null, arrays, objects (complex data structures)

- **String** - sequence of characters, like numbers, letters, and symbols wrapped in quotes. Represents text. 

  ```js
  var vacationSpot = "beach"
  ```

- **Integer** - a whole number
- **Floating point number** - number with a decimal

**CamelCase** - standard naming convention for variables in JS. The first words are all lowercase, while each preceeding word begins with an upperccase letter. `bankDeposit`, `ageLimit` 

**Assignment Operator** ``=` - an operator that assigns a value to a variable, initializing the variable. 

**Console** - an environment on your computer and in your browser where you can execute or run JS code.. The console lets you see the output of your code and troubleshoot any errors.

`console.log` - a method to log out a message to the console

```js
console.log("Party time!");
let dogs = 2;
console.log("I have " + dogs + " dogs.")
```

**+ operator** - an operator that uses the `+` is used to combine strings and variables, and used for addition with numbers

```js
let name = "Mary";
console.log("Her name is " + name)
```

**Concantenating** - the process of joining strings together using the `+ ` operator 

## Data Types

**Template literals** - output string using placeholders and backticks. Compared to outputting strings with double or single quotes, template literals make it easier to output multi line strins and combine variables/expressions with strings. The expressions inside the placeholder `${}` will be evaluated the the return value will be inserted inside the string. 

```js
let jewelry = "watch";
let event = "dinner";
console.log(`They wore a ${jewelry} to ${event}`);
```

**Expressions** - code that is evaluated to a value - can return a number, string, or logical value

```js
console.log(9 - 5)
```

**Primitive data types** - values with a single value: number, string, booleans, undefined, and null

**Undefined** - represents no value. When a variable is declared but not initialized it is assigned to `undefined` 

```js
vaer happiness; // undefined
console.log(happiness)
```

**Null** - data type that represents an intentionally empty, or non-existent value. Implicit emptiness

```js
var ideas = null;
```

**Type Conversion** - changing one value to a different value to complete an operator. Change strings into numbers to perform calculations.

`Number()` - convert a string to a number, used when gathering input from a user - changes user's entered string value into a number

```js
var tvShows = Number("23");
var movies = 12
console.log(tvShows + movies)
```

`prompt()` - Displays a filed to gather information from the user. 

```js
var favoriteGenre = prompt("What's your favorite music genre?")
```

`toFixed()` - convert a number data type into a string and then round to a specified number of decimal places. Takes an integer as an argument which equates to the number of decimal places to round to.

```js
var taxAmount = 7.2345
console.log(taxAmound.toFixed(2))
```

## Comparisons

**Conditional statement** - code that will only run if a condition is `true`

**Boolean** - represents `true` or `false`

**Comparison Operators** - compares two or more values (operands) - `>, <, ===` 

`if` keyword - Used in a conditional statement to test a condition. If the condition evaluates to true, then the program runs the the code inside the `if` clause

```js
var hotWeather = true;
if(hotWeather) {
  console.log("Wear shorts!")
}
```

`else` keyword - Keyword to use in a statement to perform another action if the previous condition evaluates to false.

```js
var hotWeather = false; if (hotWeather === true) { 
  console.log("Wear shorts and a tank top today!"); 
} else { 
  console.log("Grab a sweater, it might be chilly."); 
} // Grab a sweater, it might be chilly.
```



`else if` keyword - Keyword to use in a statement to test a new condition, and then perform an action if the previous condition evaluates to false. As soon as a condition evaluates to true, the code block that the condition is associated with runs and the conditional block is exited, regardless if there are subsequent conditions that would also evaluate to true.

```js
var hotWeather = false; 
var snowyWeather = true; 
var windyWeather = true;

if (hotWeather === true) { 
  console.log("Wear shorts and a tank top today!"); 
} else if (snowyWeather === true) { 
  console.log("Put on a heavy jacket and boots!"); }
else if (windyWeather === true) { 
  console.log("Time to slip on your windbreaker."); 
} else { 
  console.log("Grab a sweater, it might be chilly."); 
} 
// Put on a heavy jacket and boots!
```

`alert()` - Displays a pop-up message for users to see. The prompt includes an OK button for users to click and close the pop-up.

```js
alert("Hello, welcome to my site!");
```

`Date()` - A method to retrieve the current date.

```js 
var weekday = new Date().toLocaleString("en-US", { weekday: "long" });
```

`getHours()` - A method to retrieve the current time. The time will reﬂect the 24-hour clock, AKA military time.

```js
var time = new Date().getHours();
```

## DOM

defer attribute - Instructs the browser to load the script after the page has loaded. The attribute creates a faster loading experience for the user because all the HTML renders ﬁrst, even if the JavaScript hasn't run yet. It also makes sure the HTML elements are loaded so the JavaScript can modify them. You'll add the <script> tag and defer attributes in the head section of the HTML page.

```html
<html> <head>

<script src="js/script.js" defer></script>

</head>
```

**DOM** - Short for **Document Object Model**, the DOM represents the structure and content of a web page. The document is the web page. The objects include HTML elements, text, and attributes.

**DOM tree** - A graphical representation of the DOM which shows relationships between objects. The DOM tree is useful for determining how to access diﬀerent objects on the document.

**Methods** - JavaScript actions performed on objects. Examples of methods include console.log(), prompt(), alert(), , and querySelector(). 

`querySelector(`) - A method to access the ﬁrst element that matches a speciﬁed selector. To select multiple items, `querySelectorAll()`

```js
var available = document.querySelector("h3"); '
var mainTitle = document.querySelector(".main-title"); 
var firstItem = document.querySelector("ul li"); 
var intro = document.querySelector(".intro p");

console.log(available, mainTitle, firstItem, intro);
```

**style property** - A property that allows you to change the style of an element. If the property name is two words, like background-color, change it to one word using camelCase (backgroundColor).

```js
var intro = document.querySelector(".intro p");

intro.style.color = "purple"; 
intro.style.fontSize = "3em"; 
intro.style.fontStyle = "italic";

console.log(intro); // <p style="color: purple; font-size: 3em; font-style: italic;">Available today</p>
```



**innerText property** - A property that accesses the text within an element. This property is useful when you want to change or retrieve the text inside an element.

```js
var firstCaption = document.querySelector("figcaption"); 
firstCaption.innerText = "The Lulu.";

console.log(firstCaption); // <figcaption>The Lulu.</figcaption>
```

**innerHTML property** - A property that changes the HTML of an element on the page. This property is useful for updating or adding elements to a page.

```js
firstCaption.innerHTML = "The <strong>Lulu</strong>";

console.log(firstCaption);
var intro = document.querySelector(".intro p")
intro.innerHTML = 'Available <span>today</span>'
```

## Events & Event Listeners

**DOM events** - Actions that happen in the document (web page). Events can be triggered by the browser or by the user. In this class, you'll use mouse, change, keydown, and input events. See Mozilla's Event Reference page for a complete list of events.

**Mouse events** - An event that happens when a pointing device, like a mouse, joysticks, keyboard, or adaptive switch interacts with the document. Common mouse events are "click", "mouseover", and "select".

**Event listener** - A method that "listens" for events to happen and then takes action. Use the method `addEventListener()` to listen for events in the DOM.

```js
var title = document.querySelector("h1"); 
title.addEventListener("mouseover");

```

**Event handler** - A function that runs code when an event occurs. Callback function of the `addEventListener()` method on an element of the DOM.

```js
title.addEventListener("mouseover", function () { title.style.color = "maroon"; });
```

**Function** - A block of code that can be called or invoked to run as many times as needed without repeating code. Functions are vital to writing streamlined JavaScript. 

**Function body** - The part of the function that contains the statements that specify what the function does. Curly braces surround the function body.

`classlist.add()` - A method to add a new class.

`classlist.remove()` - A method to remove a new class.

```js
var darkModeButton = document.querySelector(".dark-mode"); 
var body = document.querySelector("body"); 

darkModeButton.addEventListener("click", function () { 
  body.classList.add("dark-palette"); 
});
```



## Functions

**Parameters** - Placeholders for values you want to pass to the function. If there's more than one parameter, separate the parameters with a comma.

```js
var welcome = function (name) { 
  console.log(`Welcome, ${name}. Have a great day!`); 
}
```

**Arguments** - Values passed to the function when it's called. If there's more than one argument, separate the arguments with a comma.

```js
var addTogether = function (num1, num2) { 
  console.log(num1 + num2); 
};

addTogether(13, 72); // 85 addTogether(36, -2.88); // 33.12
```

**return keyword** - A keyword to return the value of a function to the caller and end its execution. Use the return keyword to make the result of a function available to other parts of your code. Unlike console.log() which only outputs a message to the console, the return keyword allows a value to be used by other parts of the code, including console.log().

```js
var addTogether = function (num1, num2) { 
  return num1 + num2;

};

alert(addTogether(36, -2.88)); 
console.log(addTogether(13, 72)); // 85

var lunchForTwo = addTogether(24.56, 18.99);

console.log(lunchForTwo); // 43.55
```

There are 6 ways functions can be declared in JS. All functions are composed and influenced by these components:

- Code that forms the function body
- list of **parameters** - act as placeholders for data that is passed in as arguments when the function is called
- variables accessible from the function scope - lexical scope
- returned value
- context `this` when the function is invoked - where does `this` point to
- Named or an anonymous function
- variable that holds the function object
- **arguments** object

**Function Declarations** - `function` keyword followed by a function name, list of parameters

```js
function isEven(num) {
  return num % 2 === 0;
}
```

- function declaration creates a **variable** in the current scope with the identifier equal to the funciton name
- The function variable is **hoisted** up to the top of the current scope, which means that the function can be invoked before its declared
- The created function is **named** which means the `name` property of the function objects holds its name

**Function Expression** - do not have a name, function object saved to a variable

- assigned to a variable as an object: `const count = function() {}`
- create a method on an object `sum: function() {}`
- use the function as a callback `.reduce(function(...) {})`

A function is anonymous when it does not have a `name` property. Sometimes the function name can be inferred when it is assigned to a variable **named function expression** 

```js
const myFunctionVar = function(variable) {
  return typeof variable
}

myFunctionVar.name // myFunctionVar
```

**Arrow Function** 

- does not creates its execution content, but takes it lexically 
  - function expressions and function declarations create own `this` depending on invocation
- Anonymous - but name can be inferred from variable holding the arrow function
- **arguments** object is not available in the array function 

## KeyDown and KeyChange Events

**Callback function** - A function that's passed to another function as an argument. For example, an event handler is a callback function.

```js
button.addEventListener("click", function () { 
  cat.classList.add("show"); 
});
```

**Keydown event** - An event that occurs when a key is pressed on a keyboard, like a letter, number, or Enter key. Inside the callback function for a keydown event, **you'll pass a parameter that will hold the event object**. Most coders use e as the parameter to represent "event."

```js
var body = document.querySelector("body");

document.addEventListener("keydown" , function (e) {
	if (e.key === "l") {
		body.classList.add("light");
  } 
});
```



**Nested if statement** - An if statement testing the condition of another if, else if, or else statement.

In this example, the second if statement `(if (body.classList.contains("light")))` is the nested if statement.



```js
var body = document.querySelector("body");

document.addEventListener("keydown", function (e) {
		if (e.key === "l") {
			body.classList.add("light");
	} else if (e.key === "d") {
			if (body.classList.contains("light")) {
        ody.classList.remove("light");
      }
		}

});
```

**Change event** - An event that occurs when the user changes a drop-down list (i.e., the <select> element) or input areas like the <input> or <textarea> elements. Inside the callback function for a change event, you'll pass a parameter that will represent the change event. Most coders use e as the parameter to represent "event."

`toUpperCase()` - A method for converting a string value into all uppercase letters.

`Math.ﬂoor()` - A method for rounding a number down to the next whole number.

```js
var louder = "Speak up, please!" 
console.log(louder.toUpperCase()); // SPEAK UP, PLEASE!

var seatingCapacity = 1256.3; 
console.log(Math.floor(seatingCapacity)); //1256
```

`Math.random()` - A method for producing a random number between 0 and 1. Multiply it by another number to output a larger random number. Pair it with Math.floor() to round

```js
console.log(Math.random()); // 0.15884857919099582

console.log(Math.random() * 36); // 18.873096475917126

console.log(Math.floor(Math.random() * 12)); // 10
```

## Arrays & Loops

**Arrays** - complex data structure: list of ordered items. Can contain one or more objects that can be any data type. The items that make up an array are called **elements**

```js
var timeOfDay = [6, 12, "morning"]
// array that contains both number and string objects

// array literal
var medicine = [];
```

**Elements** - the values stored in an array. Elements can be any data type

**Index** - the position of an element in an array. The first element starts at index position 0. 

```js
var nums = ["thirty", 16, 38]
nums[0] // thirty
```

**Loop**- statement that allows you to repeat code multiple times, can iterate over a collection

**Iterating** - each time a loop runs through a block of code. Each pass of the loop is called on **iteration**

`for` loop - loop that iterates through a block of code a designated number of times. `for..of` and `for..in` loop. One iterates over an array and the other iterates of the key:value pairs of an object.

`for...of loop` - type of loop that iterates ovar the values of an array. The loop has access to the elements of an array, not the index. 

```js
var timeOfDay = [6, 'noon', 8, "monring"];
for (var time of timeOfDay) {
  console.log(time)
}
```

**Loop body** - the loop section where the statements you want to execute on each loop iteration

`forEach()` - method that is called on an array object, iterates though the elements in the array and is passed a callback function as its argument. `forEach` **passes each element to the function as an argument and runs the function once for each given element.** 

```js
var timeOfDay = [6, "noon", 8, "morning", "evening", 12];

// is passed a callback function as its argument
timeOfDay.forEach(function (time, index) { 
  console.log(`The ${time} element is at position ${index}.`); 
});
```

**Modulus operator** - An operator to return the remainder of two numbers divided. The modulus operator uses the percent sign `(%)`. The modulus operator is also called the "**modulo" operator.**

```js
var candy = 14; 
var kids = 4; 

console.log(`There are ${candy % kids} pieces of candy remaining.`);
```

## Scope

**Scope** - context where varialbes are visible to certain parts of the program. Depends on where variables are declared determines where they can be accessed.

**Context** - refers to the place the code is evaluated and executed - like inside a function or loop

**Global Scope** - context for the whole program. Variables that are global scoped are not located inside a function or another block of code. These variables are available to any part of your program

​	`var` - function scoped, not blocked scope. Will return `undefined` if used before its initialized. All `var` variables that are declared but not initialized are set to `undefined`

`let` - block scoped, cannot access any variables defined inside a block outside that block. Returns a `ReferenceError` if try to access variable before it is intialized

`const` - block scoped and error will be thrown if variable is reassigned

```js
var numOfDrinks = 5; // global scoped

var drinks = function() {
  var tea = 6 + numOfDrinks; // can access global variable
  console.log(tea)
}

drinks() // 11
conosle.log(tea) // Reference Error - not defined since variable is function scoped

if(numOfDrinks === 5) {
  var soda = "lemon-lime"; // block scope
}

// with var variables can access them outside the block
soda = "cherry"
```

**Function Scope** - context inside of a funciton. Variables defined within a function are scoped to that function only

- Ruby method definitions are self contained - create their own inner scope. Cannot access variables outside their scope. But the values/objects of outer scoped variables can be passed in as arguments to the methods - a copy of the reference to the object is passed in as an argument to the method call

**Block Scope** - context inside a block of code, like an `if` statement or loops.

- `var` defined variables can be accessed and modified outside the block even if they were initialized inside the block
- `let` and `const` variables are **block scoped** - cannot be accessed outside the block where it was initialized
- `const` - constrain a variable to block scope and **prevent the value from being reassigned**
  - common to assign arrays and objects to `const` variables - so can't reassign the variable to a new collection but still able to modify the elements that make up the collection
  - Element Reference - `Array#[]` method can access elements at the specified position - point to where the object is stored in memory, can modify the object, which will mutate the collection as a whole, but the `const` variable is still pointing to the same collection
  - A collection contains references to the objects that make up the collection - can change the objects in a collection which will mutate the collection as a whole. 

```js
if(numOfDrinks === 5) {
  let soda = "lemon-lime"
};

console.log(soda) // Reference error
// let declared variables are block scoped
```

## Objects & Methods

**Objects** - A data type used to group multiple properties and their corresponding values into a single, unordered entity. Like an object in real life, a JavaScript object represents a thing with characteristics (properties), like a person, animal, instrument, or house. **An object is a collection of key-value pairs.**

**Properties** - Diﬀerent values of an object. A property represents the diﬀerent characteristics of your object. Properties can be any data type, like a number, string, array, boolean, or function.

**Keys** - An object's unique elements which are used to access its values. Keys are also known as "identiﬁers" or "names." An object's keys must be unique and cannot be duplicated in the same object.

```js
const cat = {};

cat.name = "Fred"; 
cat.nickname = "Flooficus"; 
cat.age = 5; cat.isSleeping = true; 
cat.favoriteToys = ["spring", "ping pong balls", "bird stuffy"] 
cat.pet = function () { 
  return "purrrrrrrr"; 
}
```

**Method (object property)** - A function that's a property in an object. Use the return keyword to return the value of the method and make the result available to other parts of your code. Call the function on the object: `object.method()` 

Methods can be added to an object following its creation:

```js
const cat = {}; 
cat.pet = function () { 
  return "purrrrrrrr"; 
}

const cat = {
	pet: function () {
		return "purrrrrrrr";
} };
```

**Dot notation** - A syntax to assign or access the property of an object using a period between the object name and property. `object.key` 

**Square Bracket Notation** - syntax to assign or access the property of an object using `[]` between the object name and the key, key needs to be wrapped in quotes. `object["key"]` 

![image-20220409183736229](https://tva1.sinaimg.cn/large/e6c9d24egy1h14a4n72avj20ky06474g.jpg)

![image-20220409183836695](https://tva1.sinaimg.cn/large/e6c9d24egy1h14a5mcwj4j20q204sweq.jpg)

**Object literal** - A collection of key-value pairs inside the object’s curly braces, separated by a comma. The key and value are separated by a colon (:). You can add or change existing properties of an object literal by using either dot or bracket notation and the = assignment operator.

`this` **keyword** - In a method, the `this` keyword allows you to reference another property from the same object. If the method is called on an object, using a function expression, the `this` keyword will point/reference the object it is called on. Therefore can access properties of the object inside the function by using `this.keyName` 

An example of the `this` keyword used with a method that's outside the object declaration:

```js
const house = { windows: 20 };

// Adding a method to the object outside the object declaration/literal
house.windowWash = function () { 
  if (this.windows > 15) { 
    return `That's a lot of windows to wash!`; 
  } 
};

console.log(house.windowWash());

// Method that is declared on the object literal
const house = { 
  windows: 20, 
  windowWash: function () { 
    if (this.windows > 15) { 
      return `That's a lot of windows to wash!`; 
    } 
  };
```



**Factory functions** - Patterns to create multiple objects. Factory functions let you quickly build several objects that share the same characteristics, AKA properties. Act as a blueprint to make similar objects. You must return your object at the bottom of your factory function. You'll use factory functions when you want to create and manage multiple objects that have the same characteristics (e.g., color) that are expressed diﬀerently (e.g., blue, green, yellow).

```js
const createContact = function () { 
  const contact = { 
    name: "Noelle Silva", 
    phoneNum: "555-555-1234", 
    isNew: true, 
    message: function () { 
      this.isNew = true; 
      console.log("You've added a new contact!"); 
    } 
  }; 
  return contact;  // returnn object from function
};

// pass factory function parameters, then can create objects with different values 
// based onn the arguments passed in when the function is invoked
const createContact = function (name, phone) { 
  const contact = { 
    name: name,
		phoneNum: phone, 
    isNew: true, 
    message: function () { 
      this.isNew = true; 
      console.log("You've added a new contact!"); 
    } 
  }; 
  return contact; 
};

// create two new objects with different values
const contact1 = createContact("Noelle Silva", "555-555-1234"); 
const contact2 = createContact("Yami Sukehiro", "555-321-5555");
```

You can provide **parameters** to your factory function in order to make your object more ﬂexible and easy to reuse:

`for...in loop` A type of for loop that will allow you to loop over an object's key-value pairs. When looping over objects, you may want to access just the keys, just the values, or both the keys and the values.

```js
for(let key in contact1) {
  console.log(key, contact1[key])
}

// name 'Noella Silva'
// phoneNum 555-555-1234
// isNew true 
// message f message() {}
```

To loop through multiple objects, add the objects to an array and then loop through the array using the `for...of loop `(Lesson 8). After the for...of loop, nest the for...in loop to access the object's key, value, or keys and values.

```js
const contact1 = createContact("Noelle Silva", "555-555-1234"); 
const contact2 = createContact("Yami Sukehiro", "555-321-5555");

// add each object to a new array
const contactsArray = [contact1, contact2];

// iterate over each object in the contactsArray
for (let contact of contactsArray) { 
  // iterate over the properties of each object
  for (let key in contact) {
    // log the key and the value to the console
		console.log(key, contact[key]); 
  }
}
```

## APIs

**Application programming interface (API)** - way for two applications, program and external source to talk to each other and share information. There are a few protocols, rules, when follow for working with APIs. As long as you follow the protocols you can access and use daata from the APIs.

- grab data from other sources to populate your app

**RESTful API** - use HTTP protocol - (hyper text transfer protocol) requests like those used in browser to access a websites - used to get data from an external source to be displayed in your program

- each API has instructions of how to talk to the API to get the data from that API
- need to read each API documentation

**Asynchronous** - means code can run independently of main program flow

- **Async Functions** - allow you to `fetch` data from an API, wait for the completed response, and then work with the data. use `async` keyword
- `await` tells the program to wait on that line of code until the data is retrieved
- `fetch` method allows you to get data over a network. like the data you retrieve from the API
  - API creator determines the URL you pass in as an argument to the `fetch` method
  - **endpoint** - part of the **API URL** that specifies the type of information you want
- **JSON file** - type of file used for exchanging data on the web: JavaScript Object Notation
  - the response will be similar to a JS object - having properties and key:value pairs
  - need to convert from JSON to JS object so you can manipulate the data in your code - `json()` is called on a JSON variable and converts it to JS object
  - all the data will now be objects

```js
const getShows = async function() {
  const showRequest = await fetch("https://api.tvmaze.com/schedule/web");
  const data = await showRequest.json();
  console.log(showRequest);
};

getShows(); // call async function
```

### JSON Files

Data you pull from an API will be written in JSON. **JSON files** are a type of text file used for exchanging data, which most programming languages can interpret. Files end in a `.json` file extension.

JSON files look a lot like objects - they have properties and key-value pairs. 

### REST APIs

For your program to work with an API it needs to follow specific protocol which enable communication between the API and your program. There are different types of protocols, but the most common is called the REST API procol. They make use of HTTP requests

**API Documentation**

To find out the API protocols, you need to dive ino the REST APIs documenation. You will find:

- What web address is the API available at? What address can your program call to request data from the API
- Are there parameters available to be used in the request? 
- Is there any specific info that your program needs to send in with your request?
- Is there a need for your program to authenticate itself before acccessing the data? If required how do you authenticate? - REST APIs don't require authentication 

### Endpoints & Parameters

To access specific data from an API you need to review the documentation fo find which endpoints you need to add to the web address to request the data. And need to know if the endpoints accepts parameters

**Endpoint** - end of the API address that determines the type of info available

`https://quote-garden.herokuapp.com/api/v3`

To pull all the quotes data you'll add an endpoint to the url

`https://quote-garden.herokuapp.com/api/v3/quotes`

To get a single random quote you will add another endpoint

`https://quote-garden.herokuapp.com/api/v3/quotes/random`

**Parameters**

Pulling data from an endpoint can pull a lot of data. Maybe you need specific information. **API parameters** are placeholders for data. After the endpoint, you will add the parameters.

Add a `?` after the endpoint, then include the parameters. The documentation will let you know what data type you need to enter for each parameter - ex. string. 

`https://quote-garden.herokuapp.com/api/v3/quotes?author=beyonce`

If the parameter has more than one word add characters `%20` to fill the space between words

Can also chain parameters together by separating them with an ampersand `&` 

`https://quote-garden.herokuapp.com/api/v3/quotes?author=maya%20angelou&limit=1`



This will retrieve specific data from an API using endpoints and parameters. 

### Fetch Method

`fetch()` method allows you to get resources over a network - retrieve data from an API

**async keyword** enables asynchronous communication between your program and the API. Use the keyword to create an `async function` to get data from an API and then wait for the completed response. Once the response is complete then you can modify the data.

```js
const getData = async function() {
  // variable to hold response from the API
  // pass the fetch method the API URL including endpoints and paraemters
  const res = await fetch("https://quote-garden.herokuapp.com/api/v3/quotes?author=beyonce");
  const data = await res.json();
}
```

- When fetching the data the program needs to wait for the function to finish before assigning the value to the `res` variable, so add `await` keyword before `fetch()` . Tells the program to wait on that line until the API data is received 
- `res` variable contains the API call response - contains all sorts of data including methods that allow your program to parse and use the body of data
- `.json()` method transforms the JSON data into a JS object - also a asynchronous action so need to use the `await` keyword
