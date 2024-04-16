**Functional Programming vs Object Oriented Programming**

```
<!-- Functional Programming: -->
- use of functions where each function performs a specific task.
- The data in the functions are immutable(cannot be changed after creation)
- Importance is not given to data but to functions
- It uses recursion for iteration

<!-- Object Oriented Programming -->
- This programming paradigm is based on object oriented concept. Classes are used where instance of objects are created
- Fundamental elements used are objects and methods and the data used here are mutable data.
- Importance is given to data rather than procedures.
- Has three access specifiers namely, Public, Private and Protected.
- Provides data hiding. Hence, secured programs are possible.
```

**Is JavaScript Object-Oriented or Functional Language**

```
JavaScript is both a functional and object-oriented programming language.
JavaScript is object-oriented because it allows you to create objects and use them to model real-world entities. For example, you could create a Car object with properties such as make, model, and year. You could then use methods on the Car object to perform actions such as drive() and park().

JavaScript is also functional because it allows you to create functions and pass them as arguments to other functions. This makes it easy to write code that is reusable and modular. For example, you could create a map() function that takes an array and a function as arguments and returns a new array with the results of applying the function to each element of the original array.
```

**What is a Pure Function**

```
A pure function is a function that always returns the same output for the same input and has no side effects. It does not modify any data outside of the function and does not rely on any external state or data change during a program's execution. Instead, it only depends on the values passed as arguments and returns a new value.

Predictability: Given a specific input, it will always return the same output.
Immutability: Pure functions do not modify any data outside of the function.
Deterministic: Pure functions always return the same output for the same input, regardless of the order in which they are called.

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

```

**What is Referential Transparency**

```
Referential transparency is a property of expressions or functions that allows them to be replaced with their equivalent output without altering the program's behavior. This means that if you call a function twice with the same arguments, you'll always get the same result.

// Mathematical expressions
2 + 2 // 4
"hello" + "world" // "helloworld"

// Function calls
Math.sqrt(4) // 2
Math.max(1, 2, 3) // 3

// Variable references
const x = 10;
x + 5 // 15
```

**Which of the types are mutable and immutable in JavaScript**

```
<!-- Immutable -->
Primitive values: Numbers, strings, booleans, null, and undefined. These values cannot be changed once they are created.
Frozen objects: Objects that have been frozen using the Object.freeze() method. Frozen objects cannot be modified in any way.

// Immutable
const number = 10; // Number
const string = "Hello world!"; // String
const boolean = true; // Boolean
const nullValue = null; // Null
const undefinedValue = undefined; // Undefined

// Changing the value of an immutable value will result in an error.
number = 20; // Error

<!-- Mutable -->
Objects: Objects are mutable by default. This means that their properties can be changed after they are created.
Arrays: Arrays are also mutable by default. This means that their elements can be changed after they are created.
Functions: Functions are mutable in JavaScript. This means that their code can be changed after they are created. However, this is not recommended as it can lead to unexpected behavior.

// Mutable
const object = {}; // Object
const array = []; // Array
const function = () => {}; // Function

// Changing the value of a mutable value will not result in an error.
object.name = "John Doe"; // No error
```

**how to make object immutable in javascript**

```
Using the const keyword.
Using the Object.freeze() method
Using the Object.seal() method.

// Using the `const` keyword
const obj = {
  name: "John Doe",
  age: 30
};

// Using the `Object.freeze()` method
const frozenObj = Object.freeze(obj);

// Using the `Object.seal()` method
const sealedObj = Object.seal(obj);

// Attempting to modify the object will result in an error
frozenObj.name = "Jane Doe"; // TypeError: Cannot assign to read only property 'name' of object '#<Object>'
sealedObj.name = "Jane Doe"; // TypeError: Cannot assign to read only property 'name' of object '#<Object>'

// Attempting to add a new property to the object will result in an error
sealedObj.occupation = "Software Engineer"; // TypeError: Cannot add property occupation, object is not extensible
```

**What is a higher-order function**

```
A higher-order function in JavaScript is a function that takes one or more functions as arguments (or returns a function). Higher-order functions allow you to abstract away common functionality and make your code more reusable and concise.

Higher-order functions are a powerful tool that can help you write more concise and reusable code.

<!-- Characteristics of Higher-Order Functions -->
Function as an Argument: Higher-order functions can accept other functions as arguments, often referred to as callback functions. Callbacks are used for tasks like data processing, filtering, or handling events.

Function as a Return Value: Higher-order functions can return another function, allowing for the creation of specialized functions tailored to specific tasks.

Abstraction: Higher-order functions abstract common patterns and operations, promoting code reusability and modularity.

Composition: Multiple higher-order functions can be combined to create complex data transformations or processing pipelines.
```

**What is a First-Class function**

```
First-class functions, also known as first-class citizens or first-class objects, are a fundamental concept in programming languages. They refer to functions that can be treated in the same way as any other data type, such as numbers, strings, or objects

Assigned to variables: Functions can be stored in variables, making them easily accessible and re-usable.
Passed as arguments: Functions can be passed as arguments to other functions, enabling powerful patterns like callback functions.
Returned from functions: Functions can be the result of another function, allowing for the creation of higher-order functions.

<!-- Characteristics of First-Class Functions -->
Functions as Values: Functions are treated as values, which means they can be assigned to variables just like any other data type.

Function Expressions: Functions can be defined as expressions and assigned to variables. This includes anonymous functions and arrow functions.

Passing Functions as Arguments: Functions can be passed as arguments to other functions. This is a fundamental concept for callback functions and event handling.

Functions as Return Values: Functions can be returned as the result of another function. This is essential for creating higher-order functions.
```

**What type of inheritance does JavaScript supports**

```
Mainly there are three types of inheritance in JavaScript. They are, prototypal, pseudo classical, and functional.

<!-- Prototypal Inheritance -->
JavaScript supports prototypal inheritance. Prototypal inheritance is a type of inheritance that allows objects to inherit properties and methods from other objects.

Here is an example of prototypal inheritance in JavaScript:
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
};

const teacher = new Person('John Doe');

teacher.greet(); // Hello, my name is John Doe

<!-- Pseudo-classical Inheritance -->
 In Pseudo-classical inheritance, we try to create a class with a method that is intended to be called using the new keyword.

In pseudoclassical inheritance, you use a constructor function to create objects. The constructor function is a regular function that you give a prototype property. This property is inherited by all instances of the constructor function.

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
};

const person = new Person('John Doe');

<!-- Functional Inheritance -->
Functional Inheritance uses an augmenting function to the instance of the object in order to inherit the features of that object.

Functional inheritance is a powerful technique that can be used to create reusable and modular code. It is a great way to avoid code duplication and to create complex objects with a variety of features.

// Parent function
function Person(name) {
  this.name = name;
}

// Child function
function Employee(name, salary) {
  Person.call(this, name);
  this.salary = salary;
}

// Create a new employee
const employee = new Employee('John Doe', 100000);

// Log the employee's name and salary
console.log(employee.name); // John Doe
console.log(employee.salary); // 100000
```

**Difference b/w statement and expressions JavaScript**

```
Statements are used to control the flow of a program, such as if statements, for loops, and while loops. They can also be used to declare variables and assign values to them.

Expressions are used to calculate values, such as arithmetic expressions, logical expressions, and function calls. They can also be used to access properties of objects.

// Statements
var x = 10; // Variable declaration
if (x > 5) { // If statement
  console.log("x is greater than 5");
}
for (var i = 0; i < 10; i++) { // For loop
  console.log(i);
}

// Expressions
x + 5; // Arithmetic expression
x > 5; // Logical expression
console.log(x); // Function call
obj.name; // Property access
```

**Difference between null and undefined in javascript**

```
In JavaScript, null and undefined are both primitive values that represent the absence of a value.

<!-- Null -->
is an intentional absence of a value. It is used to indicate that a variable has been declared but has not yet been assigned a value, or that a variable has been cleared.

<!-- Undefined -->
is an unintentional absence of a value. It is used to indicate that a variable has not been declared, or that a variable has been deleted.

Undefined: is not a valid value that can be assigned to a variable. Trying to assign undefined to a variable will result in a TypeError.

console.log(typeof undefined); // undefined
console.log(typeof null); // object
```

**what is temporal dead zone in javascript**

```
The temporal dead zone (TDZ) is a specific period in the execution of JavaScript code where variables declared with let and const exist but cannot be accessed or assigned any value. During this phase, accessing or using the variable will result in a ReferenceError.

console.log(x); //ReferenceError
let x = 10;

let x = 10;
console.log(x); //10
```

**program that prints all the keys and values of an object**

```
const obj = {
  name: "John Doe",
  age: 30,
  occupation: "Software Engineer",
  level: "Senior"
};

const keysVals = Object.entries(obj);
for(let [key, val] of keysVals) {
    console.log(key, val);
}
```

**DOM and BOM**

```
<!-- DOM -->
The DOM is a tree-structured representation of an HTML document. Each node in the tree represents an element of the document, such as a paragraph, heading, or image. The DOM also includes nodes for text, comments, and processing instructions.
JavaScript can use the DOM to access and manipulate the content of an HTML document. For example, JavaScript can be used to change the text of a paragraph, add a new image to the document, or hide a section of the document.

<!-- BOM -->
The BOM is a collection of objects that represent the browser window. These objects include the history, location, and screen size. JavaScript can use the BOM to access and manipulate these features of the browser.
For example, JavaScript can be used to open a new window, navigate to a new URL, or change the size of the browser window.

<!-- DOM vs BOM -->
The main difference between the DOM and BOM is that the DOM represents the HTML document, while the BOM represents the browser window. The DOM allows JavaScript to access and manipulate the content of the document, while the BOM allows JavaScript to access and manipulate the features of the browser.
```

**closure with IIFE in JavaScript**

```
In this example, the outerFunction returns a function that has access to the greetCount variable. This is because the inner function is defined inside the outer function, and the inner function has access to the outer function's scope.
When we call the outerFunction, it creates a new function and returns it. The new function is assigned to the friendlyFunction variable.

// Create a function that returns a function
function outerFunction() {
  let greetCount = 0;
  return function () {
    console.log(`Hello ${greetCount}x`);
    return greetCount++;
  };
}

// Create a new function by calling the outer function
const friendlyFunction = outerFunction();

// Call the new function
friendlyFunction(); // Hello 0x
friendlyFunction(); // Hello 1x
friendlyFunction(); // Hello 2x

-------------------------------------------

function fixed() {
  for ( var i = 0; i < 5; i++ ) {
    console.log(“Delay: “, i*100);
    (function(safe_i) {
      setTimeout(function() {
        console.log(“i:”, safe_i)
      }, i * 100 );
    }) (i);
  }
}
```

**async/await using the generator function**

```
// Define a generator function
function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) {
    // Yield the current value
    yield i;
  }
}

// Create an async function that uses the generator function
async function asyncGenerateSequence(start, end) {
  // Iterate over the generator function, yielding each value
  for await (const value of generateSequence(start, end)) {
    // Do something with the value
    console.log(value);
  }
}

// Call the async function
asyncGenerateSequence(1, 5);
This code will print the numbers from 1 to 5 to the console.

The generateSequence() function is a generator function. This means that it can be used to create an iterator that will yield values one at a time.
The asyncGenerateSequence() function is an async function. This means that it can be used to perform asynchronous operations.
The for await loop is used to iterate over the generator function, yielding each value to the asyncGenerateSequence() function.
The asyncGenerateSequence() function then does something with the value, in this case, printing it to the console.

```

**how does message passing works in generator function in javascript**

```
Message passing in generator functions in JavaScript works through the use of the yield keyword. When a generator function is called, it does not execute its code immediately. Instead, it returns a special type of iterator, called a Generator. When a value is consumed by calling the generator's next() method, the Generator function executes until it encounters the yield keyword.
At that point, the Generator function pauses its execution and returns the value that was yielded. The calling code can then send a message back to the generator function by calling the next() method again and passing in a value. The generator function will then resume its execution from where it left off, and will continue executing until it encounters another yield keyword or reaches the end of the function.
This process of yielding values and receiving messages allows generator functions to implement two-way communication with the calling code. This can be useful for a variety of tasks, such as implementing iterators, creating asynchronous functions, and implementing coroutines.

function* messagePasser() {
  const message = yield;
  console.log(`Received message: ${message}`);
}

const generator = messagePasser();

// Send a message to the generator function
generator.next('Hello, world!');

// Receive a message from the generator function
const response = generator.next();

console.log(`Response from generator: ${response.value}`);
```

**how will you do parallel calls with async/await in javascript**

```
To run multiple async/await calls in parallel in JavaScript, we can use the Promise.all() method. Promise.all() takes an array of promises as an argument and returns a promise that resolves when all of the promises in the array have resolved.

Here is an example of how to use Promise.all() to run two async/await calls in parallel:
const asyncFunction1 = async () => {
  // Do something asynchronous
  return 'result1';
};

const asyncFunction2 = async () => {
  // Do something asynchronous
  return 'result2';
};

const results = await Promise.all([asyncFunction1(), asyncFunction2()]);

console.log(results); // ['result1', 'result2']

In this example, we first define two async functions, asyncFunction1() and asyncFunction2(). Then, we create an array of promises, promises, containing the two async functions. Finally, we call Promise.all() with the promises array as an argument.
Promise.all() will wait for both asyncFunction1() and asyncFunction2() to resolve before it resolves. Once both async functions have resolved, Promise.all() will resolve with an array containing the results of the two async functions.
```

**Promise.all with async/await in javascript**

```
async function promiseAll(promises) {
  const results = [];
  for (const promise of promises) {
    results.push(await promise);
  }
  return results;
}

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(2), 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(3), 3000);
});

const results = await promiseAll([promise1, promise2, promise3]);

console.log(results); // [1, 2, 3]

In this example, we create an async function called promiseAll that takes an iterable of promises as its argument. The function then iterates over the promises and awaits each one. Once all of the promises have resolved, the function returns an array of the resolved values.
```

**What is an Iterator? How is it different from Array in javascript**

```
In JavaScript, an iterator is an object that enables accessing collection one by one. Iterators are employed for looping or iterating over various data structures, including arrays, strings, maps, sets, and more. The iterator() method is used to get an iterator for an object.

Iterators are different from arrays in a few ways. First, iterators are lazy, meaning that they do not generate all of the values in the collection at once. Instead, they generate the values one at a time, as needed. This can be more efficient for large collections, as it avoids having to store all of the values in memory at once.

const arrayIterator = (array) => {
 let index = 0;
 return {
   next: () => {
     if (index < array.length) {
       return {
         value: array[index++],
         done: false
       };
     } else {
       return { done: true };
     }
   }
 };
};

const arr = [1, 2, 3, 4, 5];

const iterator = arrayIterator(arr);

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { done: true }

<!-- or -->

for (const element of iterator) {
  console.log(element);
}

```

**observable in javascript**

```
Observables are a concept in the ReactiveX (RxJS) library for JavaScript. They are a way of representing a stream of data that can be observed and reacted to. Observables are lazy, meaning that they do not start producing data until they are subscribed to. Once subscribed, an Observable will push data to its observers as it becomes available.
Observables are often used to represent asynchronous data streams, such as data from a network request or a user input event. They can also be used to represent synchronous data streams, such as a sequence of values generated by a function.
Here is an example of an Observable in JavaScript:
import { Observable } from 'rxjs';

const observable = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
});

observable.subscribe(value => {
  console.log(value);
});

This code will create an Observable that emits the values 1, 2, and 3. When the Observable is subscribed to, it will start emitting the values to the subscriber. The subscriber will then log the values to the console.
Observables are a powerful tool for asynchronous programming in JavaScript. They allow you to easily handle multiple data streams and react to changes in data as they occur.
```

**An event stream is coming, how will you react to it. Filling of an array, showing them on the screen in javascript**
```
// Create an EventSource object to listen for events from the server.
const eventSource = new EventSource('/events');

// Create an empty array to store the data.
const data = [];

// Listen for the "message" event.
eventSource.addEventListener('message', (event) => {
  // Add the data from the event to the array.
  data.push(event.data);

  // Update the display to show the new data.
  updateDisplay(data);
});

// Function to update the display.
function updateDisplay(data) {
  // Clear the existing display.
  document.getElementById('display').innerHTML = '';

  // Loop through the data and add it to the display.
  for (const item of data) {
    document.getElementById('display').innerHTML += item + '<br>';
  }
}

This code will create an EventSource object to listen for events from the server. When an event is received, the code will add the data from the event to the array. The code will then call the updateDisplay() function to update the display with the new data.
The updateDisplay() function will clear the existing display and then loop through the data and add it to the display. Each item in the data will be added to the display on a new line.
```

