------------------------- LEETCODE -----------------------------------------
https://medium.com/@robertsevan/list/leetcode-30-days-of-javascript-731b4453d72a
**Power of 2 in javascript**

```
function powerOfTwo(n) {
  if (n < 0) {
    return 0;
  }

  var result = 1;
  while (n > 0) {
    result *= 2;
    n--;
  }

  return result;
}

console.log(powerOfTwo(3)); // 8
console.log(powerOfTwo(5)); // 32
```

**Array Prototype Last in javascript**

```
Array.prototype.last = function() {
  return this[this.length - 1];
};

const arr = [1, 2, 3, 4, 5];
const lastElement = arr.last();
console.log(lastElement); // 5
```

**Counter function in JavaScript**

```
function counter() {
  // Create a variable to store the current count.
  let count = 0;

  // Return a function that increments the count and returns the new value.
  return function() {
    count++;
    return count;
  };
}

// Create a new counter instance.
const myCounter = counter();

// Increment the counter and log the result to the console.
console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3
```

**Transform an array of objects into a single object**

```
const objects = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Carol', age: 35 },
];

const names = objects.reduce((accumulator, currentValue) => {
  accumulator[currentValue.name] = currentValue.age;
  return accumulator;
}, {});

console.log(names); // { Alice: 25, Bob: 30, Carol: 35 }
```

**Function composition**

```
Function composition is a powerful technique in functional programming that allows you to combine multiple functions into a single function. This can be useful for creating more complex and expressive functions, as well as for making your code more modular and reusable.

In JavaScript, function composition can be achieved using a variety of methods. One common approach is to use the reduce() function. The reduce() function takes an array of values and a function as arguments, and returns a single value that is the result of applying the function to each value in the array.

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

const compose = (fn1, fn2) => (args) => fn1(fn2(...args));

const composedFunction = compose(add, multiply);

const result = composedFunction([1, 2, 3]);

console.log(result); // 12
```

**Promise Time Limit**

```
var timeLimit = function(fn, t) {

 return async function(...args) {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                reject("Time Limit Exceeded")
            }, t)

            fn(...args)
                .then((result) => {
                    clearTimeout(timer)
                    resolve(result)
                })
                .catch((err) => {
                    clearTimeout(timer)
                    reject(err)
                })
        })
    }
};

async function(...args) { ... }: This line defines an asynchronous function that takes any number of arguments and returns a Promise.

return new Promise((resolve, reject) => { ... }: This line creates a new Promise that takes two arguments, resolve and reject, which are used to fulfill or reject the promise based on the outcome of the asynchronous operation.

const timer = setTimeout(() => { reject("Time Limit Exceeded") }, t): This line sets up a timer using setTimeout that rejects the Promise with the message "Time Limit Exceeded" after the specified time t if the asynchronous operation has not completed.

fn(...args): This line invokes the provided function fn with the specified arguments args.

.then((result) => { ... }): This line handles the successful fulfillment of the Promise returned by the provided function fn.

clearTimeout(timer): This line clears the timer set by setTimeout to prevent it from triggering a rejection.

resolve(result): This line resolves the outer Promise with the result from the asynchronous operation.

.catch((err) => { ... }): This line handles any errors that occur during the execution of the provided function fn.

clearTimeout(timer): This line clears the timer set by setTimeout to prevent it from triggering a rejection.

reject(err): This line rejects the outer Promise with the error that occurred during the asynchronous operation.

The function returns a new function that wraps the original function fn with a time limit. This wrapper function returns a Promise that either resolves with the result of the operation or rejects with an error message if the operation takes longer than the specified time limit.
```

**Execute Asynchronous Functions in Parallel**

```
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        let results = []
        let counter = 0

        if (functions.length === 0) {
            resolve(results)
        }

        for (let i = 0; i < functions.length; i++) {
            functions[i]()
                .then(result => {
                    results[i] = result
                    counter++

                    if (counter === functions.length) {
                        resolve(results)
                    }
                })
                .catch(reason => {
                    reject(reason)
                })
        }
    })
};

return new Promise((resolve, reject) => { ... }): This line creates and returns a new Promise.

let results = [] and let counter = 0: These lines initialize an empty array results to store the results and a counter to keep track of the number of resolved functions.

if (functions.length === 0) { resolve(results) }: This part checks if the input array functions is empty. If it is, the function immediately resolves the Promise with an empty array.

The for loop iterates over each function in the functions array.

Inside the loop, each function is called with functions[i](). If a function resolves, the result is stored at the corresponding index in the results array. The counter is incremented, and if the counter becomes equal to the total number of functions, the Promise is resolved with the results array.

If any of the functions are rejected, the catch block is executed, and the Promise is rejected with the corresponding reason.
```

**Is Object Empty**

```
var isEmpty = function(obj) {
    for (const _ in obj) return false;
    return true;
};

The for...in loop is used to iterate over the properties of the object. If the loop encounters at least one property, false is returned to indicate that the object is not empty.
```

**Chunk an array**

```
function chunkArray(array, chunkSize) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chunks = chunkArray(numbers, 3);

console.log(chunks); // [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]
```

**Cache with a time limit**

```
class CacheWithTimeLimit {
  constructor(duration) {
    this.cache = new Map();
    this.duration = duration;
  }

  set(key, value) {
    this.cache.set(key, {
      value,
      timestamp: Date.now(),
    });
  }

  get(key) {
    const entry = this.cache.get(key);
    if (!entry) {
      return null;
    }

    if (Date.now() - entry.timestamp > this.duration) {
      this.cache.delete(key);
      return null;
    }

    return entry.value;
  }
}

const cache = new CacheWithTimeLimit(1000); // 1 second

cache.set('foo', 'bar');

console.log(cache.get('foo')); // 'bar'

setTimeout(() => {
  console.log(cache.get('foo')); // null
}, 1500);

This cache will store key-value pairs for up to 1 second. After that, the data will be expired and removed from the cache.
To use the cache, simply call the set() and get() methods. The set() method takes two parameters: the key and the value. The get() method takes one parameter: the key. It will return the value associated with the key, or null if the key is not in the cache or the data has expired.
```

**Allow One Function Call**

```
var once = function(fn) {
  let hasBeenCalled = false;
  let result;

  return function() {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      result = fn.apply(this, arguments);
      return result;
    } else {
      return undefined;
    }
  };
};

let hasBeenCalled = false;: This line initializes a boolean variable hasBeenCalled to false. This variable keeps track of whether the function fn has been called before.

let result;: This line declares a variable result that will store the result of the function fn.
The function returns another anonymous function that serves as a wrapper for the original function fn.

This returned function checks whether fn has been called before. If not, it calls fn with the provided arguments, sets hasBeenCalled to true, and returns the result. If fn has been called before, it returns undefined.
```

**Counter**

```
var createCounter = function(init) {
    let currentValue = init

    return {
        increment:function(){
            return currentValue += 1
        },

        decrement:function(){
            return currentValue -= 1
        },

        reset:function(){
            return currentValue = init
        }
    }

};

const counter = createCounter(0);
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset(); // 0
counter.reset(); // 0

Output: [1,2,1,0,0]
```

**To Be Or Not To Be**

```
var expect = function(val) {
    function toBe(val2) {
       if (val === val2) {
           return true
       } else {
           throw new Error('Not Equal')
       }
    }

    function notToBe(val2){
        if (val !== val2) {
            return true
        } else {
            throw new Error('Equal')
        }
    }

    return {
        toBe,
        notToBe
    }
};

Input: func = () => expect(5).toBe(null)
Output: {"error": "Not Equal"}

Input: func = () => expect(5).notToBe(null)
Output: {"value": true}
```

**Two Sum Problem**

```
function twoSum(nums, target) {
  const numMap = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.hasOwn(complement)) {
      return [numMap[complement], i];
    }
    numMap[nums[i]] = i;
  }
}

Input: nums = [2,7,11,15], target = 9
Output: [0,1]

<!-- OR -->
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

```

**CombinationSum**

```
var combinationSum = function(candidates, target) {
    // Create an array dp to store combinations for each target sum
    const dp = new Array(target + 1).fill().map(() => []);
    dp[0] = [[]];
    // Iterate through the candidates
    for (const candidate of candidates) {
        // For each candidate, iterate through the dp array to build combinations
        for (let i = candidate; i <= target; i++) {
            for (const combination of dp[i - candidate]) {
                dp[i].push([...combination, candidate]);
            }
        }
    }
    return dp[target];
};

Input: candidates = [2, 3, 6, 7], target = 7 Output: [[2, 2, 3], [7]]
```

-------------------- Interview Questions ------------------------------

**Given an integer array nums and an integer val, remove all occurrences of val in nums in-place**

```
var removeElement = function(nums, val) {
    let k = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val){
            nums[k] = nums[i]
            k++
        }
    }
    return k
};
Input: nums = [3,2,2,3], val = 3
removeElement(nums, val)

Output: 2
```

**Merge Sorted Array**

```
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m, n, ...nums2)
    nums1.sort((a,b) => a - b)
};

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
merge(nums1, m, nums2, n)

Output: [1,2,2,3,5,6]
```
