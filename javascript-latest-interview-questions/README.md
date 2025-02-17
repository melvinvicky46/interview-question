**Closures in JavaScript**

```
A closure is a function that remembers its lexical environment, even when it's executed outside of its original scope. This means the function can access variables from its outer scope even after the outer function has finished executing.

function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
  };
}

const newFunction = outerFunction("I am from outer function");
newFunction("I am from inner function");

// Output:
// Outer: I am from outer function, Inner: I am from inner function

- innerFunction is a closure because it remembers outerVariable from outerFunction, even after outerFunction has completed.
- The lexical environment (the scope in which the function was declared) is preserved.

Real-World Use Case: Data Privacy (Encapsulation)
function createCounter() {
  let count = 0; // Private variable

  return {
    increment: function () {
      count++;
      console.log(count);
    },
    decrement: function () {
      count--;
      console.log(count);
    },
    getCount: function () {
      return count;
    }
  };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
console.log(counter.getCount()); // 1

```

**Advantages of Closures**

```
Data Privacy & Encapsulation:
Variables inside closures are hidden from the outside world, making data secure.

Stateful Functions:
Functions can "remember" data even after execution (great for counters, caching, etc.).

Higher-Order Functions:
Enable powerful patterns like currying, function factories, and partial application.
```

**Disadvantages of Closures**

```
Memory Consumption:
Variables inside closures are not garbage collected if references are held, leading to potential memory leaks.

Complex Debugging:
Debugging can be tricky since variables are "hidden" in closures.

Overhead in Large-Scale Apps:
Overusing closures unnecessarily can cause performance issues.
```

**When to Use Closures**

```
Data Hiding: When you want to create private variables (like modules or class-like structures).

Callbacks: In asynchronous code (like event listeners, timers, or promises).

Currying & Function Factories: When you need to generate functions dynamically with preset configurations.
Memoization/Caching: Storing previously computed results for performance optimization.
```

**Quick Closure Interview Example**

```
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
// Output: 3, 3, 3 (not 0, 1, 2)

Fix using Closure:
for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, 1000);
  })(i);
}
// Output: 0, 1, 2
The IIFE (function(j){}) creates a closure, capturing the current value of i in j.

```

**Advanced Closure Use Cases: Currying & Memoization**
**1.Currying with Closures**

```
Currying is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument.

function curryMultiply(a) {
  return function(b) {
    return a * b; // Closure captures 'a'
  };
}

const double = curryMultiply(2); // Pre-sets 'a' to 2
console.log(double(5));          // 10 (2 * 5)
console.log(double(10));         // 20 (2 * 10)

```

**2. Memoization with Closures**

```
Memoization is an optimization technique to cache the results of expensive function calls, improving performance when the same inputs occur multiple times.

function memoizedFactorial() {
  const cache = {}; // Private cache using closure

  return function factorial(n) {
    if (n in cache) {
      console.log(`Fetching from cache for ${n}`);
      return cache[n];
    }
    console.log(`Calculating factorial for ${n}`);
    if (n === 0) return 1;

    cache[n] = n * factorial(n - 1);
    return cache[n];
  };
}

const factorial = memoizedFactorial();
console.log(factorial(5)); // Calculates and stores in cache
console.log(factorial(5)); // Fetches from cache (super fast!)
console.log(factorial(6)); // Reuses cached 5! to compute 6!
```

**When to Use Currying & Memoization**

```
Currying: When you need to create highly reusable, composable functions (e.g., event handlers, configuration presets).
Memoization: For performance optimization, caching expensive computations (e.g., API responses, recursive calculations).
```

**⚡ Common JavaScript Polyfills**

```
A polyfill is a piece of code (usually JavaScript) that adds support for modern functionality in older environments (like older browsers) where that functionality doesn’t exist natively.
```

**Polyfill for bind()**

```
Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("Bind can only be called on functions");
  }

  const fn = this; // Reference to the original function

  return function (...newArgs) {
    return fn.apply(context, [...args, ...newArgs]); // Apply the original function with the bound context and arguments
  };
};

// Test Case
function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: "Melvin" };
const boundGreet = greet.myBind(person, "Hello");
boundGreet("!"); // Output: Hello, Melvin!

```

**Polyfill for call()**

```
Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("myCall can only be used on functions");
  }

  context = context || globalThis; // Fallback for null or undefined
  const uniqueID = Symbol("fn");   // Create a unique property to avoid overwriting existing ones

  context[uniqueID] = this;        // Temporarily assign the function to the context
  const result = context[uniqueID](...args); // Invoke the function with provided arguments

  delete context[uniqueID];        // Clean up after execution
  return result;                   // Return the result
};


// Test Case
function showDetails(age, country) {
  console.log(`${this.name}, Age: ${age}, Country: ${country}`);
}

const user = { name: "Richard" };
showDetails.myCall(user, 30, "India"); // Output: Richard, Age: 30, Country: India

```

**Polyfill for apply()**

```
Function.prototype.myApply = function (context, args) {
  if (typeof this !== "function") {
    throw new TypeError("myApply can only be used on functions");
  }

  context = context || globalThis;
  const uniqueID = Symbol("fn");

  context[uniqueID] = this;

  let result;
  if (Array.isArray(args)) {
    result = context[uniqueID](...args); // Spread the array of arguments
  } else {
    result = context[uniqueID](); // If no arguments provided
  }

  delete context[uniqueID];
  return result;
};


// Test Case
function introduce(city, country) {
  console.log(`${this.name} lives in ${city}, ${country}`);
}

const user1 = { name: "Alex" };
introduce.myApply(user1, ["Bangalore", "India"]); // Output: Alex lives in Bangalore, India
```

**Polyfill for Array.prototype.map()**

```
Array.prototype.myMap = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError("Callback must be a function");
  }

  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty(i)) {
      result.push(callback.call(thisArg, this[i], i, this)); // Call callback with optional thisArg
    }
  }
  return result;
};

// Test Case
const numbers = [1, 2, 3, 4];
const squared = numbers.myMap(num => num * num);
console.log(squared); // Output: [1, 4, 9, 16]
```

**Polyfill for Array.prototype.filter()**

```
Array.prototype.myFilter = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError("Callback must be a function");
  }

  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty(i)) {
      if (callback.call(thisArg, this[i], i, this)) {
        result.push(this[i]);
      }
    }
  }
  return result;
};

// Test Case
const data = [10, 25, 30, 45];
const filtered = data.myFilter(num => num > 20);
console.log(filtered); // Output: [25, 30, 45]

```

**Polyfill for Promise.all()**

```
Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("Argument must be an array"));
    }

    const results = [];
    let completed = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          results[index] = value;
          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
};

// Test Case
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.myAll([p1, p2, p3]).then(console.log); // Output: [1, 2, 3]

Key Point: Resolves when all promises are fulfilled, or rejects immediately if any promise fails
```

**Polyfill for debounce()**

```
function myDebounce(func, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId); // Clear previous timeout
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Test Case
window.addEventListener("resize", myDebounce(() => {
  console.log("Resized:", new Date().toLocaleTimeString());
}, 1000));

Key Point: Ensures the function is called only after a certain delay has passed since the last invocation (great for resizing, scrolling, etc.).
```

**Polyfill for throttle()**

```
function myThrottle(func, limit) {
  let inThrottle;

  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;

      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

// Test Case
window.addEventListener("scroll", myThrottle(() => {
  console.log("Scrolled:", new Date().toLocaleTimeString());
}, 1000));
Key Point: Ensures the function is called at most once every specified interval, regardless of how many times the event is triggered.
```

**JavaScript Event Loop - Tricky Interview Questions**

```
The Event Loop is a key concept for understanding how JavaScript handles asynchronous operations.
```

**Understanding Microtasks vs Macrotasks**

```
What will be the output of the following code?
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

//Answer
Start
End
Promise
Timeout

```

**Chaining Promises with setTimeout**

```
setTimeout(() => console.log("1"), 0);

Promise.resolve().then(() => {
  console.log("2");
  setTimeout(() => console.log("3"), 0);
});

console.log("4");

4
2
1
3

Explanation:
console.log("4") runs first because it’s synchronous.
The microtask Promise.then logs 2.
The first macrotask (setTimeout) logs 1.
Another setTimeout inside the promise runs last, logging 3.
```

**setTimeout Inside a Promise**

```
Promise.resolve().then(() => {
  console.log("A");
  setTimeout(() => console.log("B"), 0);
});

setTimeout(() => console.log("C"), 0);

console.log("D");

D
A
C
B

Explanation:
Synchronous code: "D" runs first.
Microtask queue: Promise logs "A".
Macrotask queue: Both timeouts are scheduled, but the setTimeout outside the promise ("C") runs before "B" because it was queued earlier.
```

**Async/Await with Event Loop**

```
async function foo() {
  console.log("1");
  await Promise.resolve();
  console.log("2");
}

console.log("3");
foo();
console.log("4");

3
1
4
2

Explanation:
"3" runs first (synchronous).
foo() starts, logging "1".
The await pauses execution, pushing the rest of foo() to the microtask queue.
"4" runs (synchronous).
After the synchronous code, "2" runs from the microtask queue.

```

**Nested Promises and setTimeout**

```
console.log("start");

setTimeout(() => {
  console.log("setTimeout 1");

  Promise.resolve().then(() => {
    console.log("promise inside setTimeout");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("promise 1");
}).then(() => {
  console.log("promise 2");
});

console.log("end");


start
end
promise 1
promise 2
setTimeout 1
promise inside setTimeout

Explanation:
"start" and "end" are synchronous.
Microtasks: promise 1 and promise 2 run next.
Macrotask: setTimeout logs "setTimeout 1".
Inside setTimeout, another microtask (promise inside setTimeout) is queued and runs immediately after.
```

**Infinite Microtask Queue?**

```
Promise.resolve().then(function recursive() {
  console.log("Hello");
  return Promise.resolve().then(recursive);
});


Answer: ❌ No, this will cause an infinite loop!

Explanation:
Each .then() queues another microtask without yielding to the event loop.
Since microtasks run before any macrotasks, the browser gets stuck in an infinite microtask loop, freezing the page.
```

**Mixing async/await with setTimeout**

```
async function asyncFunc() {
  console.log("async 1");
  await new Promise(resolve => setTimeout(resolve, 0));
  console.log("async 2");
}

console.log("start");
asyncFunc();
console.log("end");

start
async 1
end
async 2

Explanation:
"start" runs (synchronous).
asyncFunc() starts and logs "async 1".
The await with setTimeout defers "async 2" to a macrotask.
"end" runs before "async 2" because it’s synchronous.
```

**setTimeout Inside setTimeout**

```
setTimeout(() => {
  console.log("1");
  setTimeout(() => console.log("2"), 0);
}, 0);

setTimeout(() => console.log("3"), 0);

1
3
2

Explanation:
The first setTimeout logs "1" and schedules another setTimeout for "2".
Meanwhile, the second setTimeout (for "3") was already in the queue and runs next.
Finally, "2" runs because it was scheduled after "3".

Understand Task Queues:
Microtasks: Promise, async/await, queueMicrotask
Macrotasks: setTimeout, setInterval, setImmediate (Node.js)

Execution Order:
Synchronous code → Microtasks → Macrotasks
```

**Throttling**

```
What is Throttling?
Throttling ensures that a function is called at most once in a specified time interval, even if triggered multiple times. It’s perfect for controlling the rate of events like scrolls, window resizing, or API calls.

📦 Use Case:
Limiting the number of API requests per second
Optimizing scroll or resize event handlers

function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Test Case
window.addEventListener(
  "resize",
  throttle(() => {
    console.log("Resized at", new Date().toISOString());
  }, 2000)
);

Explanation:
The function runs immediately and then waits 2 seconds before it can run again, no matter how many resize events are triggered.
```

**Debouncing**

```
What is Debouncing?
Debouncing ensures that a function is executed only after a specified delay has passed since the last time it was invoked. This is great for reducing unnecessary executions.

📦 Use Case:
Search input fields (triggering API calls only after the user stops typing)
Form validation while typing

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    const context = this;
    clearTimeout(timeoutId); // Clear the previous timer
    timeoutId = setTimeout(() => func.apply(context, args), delay);
  };
}

// Test Case
const searchInput = document.getElementById("search");
searchInput.addEventListener(
  "input",
  debounce((event) => {
    console.log("Searching for:", event.target.value);
  }, 500)
);

Explanation:
The API/search call will trigger only after 500ms of inactivity, reducing unnecessary requests during continuous typing.
```

**Worker Threads (Web Workers)**

```
What Are Worker Threads?
Web Workers allow JavaScript to run code in background threads. They don’t block the main thread, making them great for CPU-intensive tasks like data processing.

📦 Use Case:
Image processing
Data compression
Handling large JSON operations

Simple Web Worker Example:
Main File (index.js):
const worker = new Worker("worker.js");

worker.postMessage("Start processing");

worker.onmessage = (event) => {
  console.log("Result from worker:", event.data);
};

Worker File (worker.js):
self.onmessage = (event) => {
  console.log("Worker received:", event.data);
  let sum = 0;
  for (let i = 0; i < 1e8; i++) {
    sum += i;
  }
  self.postMessage(sum); // Send the result back
};

Explanation:
The CPU-heavy loop runs without freezing the UI because it’s in a worker thread.
postMessage is used to communicate between the main thread and the worker.
```

**Async Concurrency Control (with Promise.all, Promise.race)**

```
How do you manage multiple asynchronous operations efficiently?

const fetchData = (url) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(`Data from ${url}`), Math.random() * 2000)
  );

async function fetchAllData() {
  try {
    const results = await Promise.all([
      fetchData("https://api1.com"),
      fetchData("https://api2.com"),
      fetchData("https://api3.com"),
    ]);
    console.log("All data:", results);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchAllData();

Explanation:
Promise.all waits for all promises to resolve. If any promise rejects, the entire operation fails.
Use Promise.race if you want to proceed with the first resolved/rejected promise.
```

**Limiting Concurrent API Requests (Semaphore Pattern)**

```
Scenario:
What if you need to process 10,000 API requests, but you want to limit the concurrency to 5 at a time?

async function limitConcurrency(tasks, limit) {
  const results = [];
  const executing = [];

  for (const task of tasks) {
    const promise = task();
    results.push(promise);

    if (limit <= tasks.length) {
      const e = promise.then(() => executing.splice(executing.indexOf(e), 1));
      executing.push(e);
      if (executing.length >= limit) {
        await Promise.race(executing);
      }
    }
  }

  return Promise.all(results);
}

// Simulate API requests
const tasks = Array.from({ length: 10 }, (_, i) => () =>
  new Promise((resolve) =>
    setTimeout(() => {
      console.log(`Task ${i + 1} done`);
      resolve(i + 1);
    }, Math.random() * 2000)
  )
);

limitConcurrency(tasks, 3);

Explanation:
At most 3 requests will run in parallel.
When one finishes, the next starts. This is efficient for rate-limited APIs.
```

**Event Loop Starvation**

```
Can microtasks block macrotasks forever?

function blockMicrotasks() {
  Promise.resolve().then(function repeat() {
    console.log("Blocking...");
    Promise.resolve().then(repeat);
  });
}

blockMicrotasks();

setTimeout(() => console.log("This will NEVER run!"), 1000);

Explanation:
Infinite microtask recursion prevents the event loop from ever reaching the macrotask (setTimeout).
This is called event loop starvation.
```

**Tricky Interview Questions on Throttling in JavaScript**

```
What will be the output of the following code?
function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

let count = 0;
const throttledFn = throttle(() => console.log(++count), 1000);

throttledFn();
throttledFn();
throttledFn();

setTimeout(throttledFn, 1500);

1
2

Explanation:
The first call executes immediately (since inThrottle is false).
The next two calls are ignored because they happen within the 1-second throttle window.
After 1.5 seconds, the last call executes, logging 2.
```

**Promise-related interview questions**

```
console.log("Start");

const promise = new Promise((resolve, reject) => {
  console.log("Inside Promise");
  resolve("Resolved");
});

promise.then((data) => console.log(data));

console.log("End");

Start
Inside Promise
End
Resolved

Explanation:
console.log("Inside Promise") runs immediately because the executor function runs synchronously.
then() is asynchronous and goes to the microtask queue, so it runs after synchronous code.
```

```
Promise Chaining
Promise.resolve(1)
  .then((value) => {
    console.log(value);
    return value + 1;
  })
  .then((value) => {
    console.log(value);
    throw new Error("Something went wrong!");
  })
  .catch((error) => {
    console.log(error.message);
    return 3;
  })
  .then((value) => {
    console.log(value);
  });

1
2
Something went wrong!
3

Explanation:
Error is caught in catch(), and the chain continues with the next then()
```

```
Async/Await with Promises
async function test() {
  return 1;
}

console.log(test());

Promise {<fulfilled>: 1}

Explanation:
An async function always returns a Promise, even if it returns a simple value.
```

```
setTimeout with Promises
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");

A
D
C
B

Explanation:
Microtasks (Promise.then) run before macrotasks (setTimeout).
```

```
Promise Inside a Loop
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

3
3
3

Explanation:
var is function-scoped, so all callbacks reference the same i, which is 3 after the loop ends.

Fix with let:
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

0
1
2

```

```
Error Propagation in Promises
Promise.reject("Error!")
  .catch((err) => {
    console.log("Caught:", err);
    throw new Error("Another Error!");
  })
  .catch((err) => {
    console.log("Caught Again:", err.message);
  });

Caught: Error!
Caught Again: Another Error!

Explanation:
Errors thrown inside catch() will propagate to the next catch() in the chain.
```

```
Race Condition
Promise.race([
  new Promise((resolve) => setTimeout(() => resolve("First"), 100)),
  new Promise((resolve) => setTimeout(() => resolve("Second"), 50)),
]).then(console.log);

Second

Explanation:
Promise.race() resolves with the first settled promise, which is "Second" after 50ms.
```

```
Combining async/await with then()
async function example() {
  return "Hello";
}

example().then(console.log);

(async () => {
  console.log(await example());
})();

Hello
Hello

Explanation:
Both then() and await handle the resolved value of the example() function.
```