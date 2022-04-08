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



