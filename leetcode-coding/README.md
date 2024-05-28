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

-------------------

function combinationSum(candidates, target) {
    const result = [];

    // Define recursive function to find combinations
    function backtrack(startIndex, currentCombination, currentSum) {
        // Base case: If current sum equals target, add current combination to result
        if (currentSum === target) {
            result.push([...currentCombination]);
            return;
        }
        
        // If current sum exceeds target or we have processed all candidates, stop
        if (currentSum > target || startIndex === candidates.length) {
            return;
        }

        // Try all candidates starting from startIndex
        for (let i = startIndex; i < candidates.length; i++) {
            // Add current candidate to current combination
            currentCombination.push(candidates[i]);
            // Recursively call backtrack function with updated combination and sum
            backtrack(i, currentCombination, currentSum + candidates[i]);
            // Remove current candidate from current combination to backtrack
            currentCombination.pop();
        }
    }

    // Start backtracking with an empty combination and sum 0
    backtrack(0, [], 0);

    return result;
}

// Example usage:
const candidates = [2, 3, 6, 7];
const target = 7;
const result = combinationSum(candidates, target);
console.log(result); // Output: [[2, 2, 3], [7]]

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

The problem you're referring to is indeed a Leetcode problem titled "Sum of All Subset XOR Totals." Here's the problem statement:

**Problem:**

You are given an integer array `nums`. The XOR total of a subset of `nums` is the XOR of all the elements in that subset.

Return the sum of all XOR totals for every subset of `nums`.

Note: Subsets with the same elements should be counted multiple times.

An array `a` is a subset of an array `b` if `a` can be obtained from `b` by deleting some (possibly zero) elements of `b`.

**Example 1:**

Input: `nums = [1,3]`
Output: `6`
Explanation: The XOR total of all subsets is 1 XOR 3 = 2 + 1 XOR 3 = 6.

**Example 2:**

Input: `nums = [5,1,6]`
Output: `28`
Explanation: The XOR total of all subsets is 5 XOR 1 XOR 6 XOR 5 XOR 1 XOR 6 XOR 1 XOR 5 XOR 1 XOR 6 = 28.

**Solution in JavaScript:**

```javascript
function subsetXORSum(nums) {
    let result = 0;
    const n = nums.length;

    const dfs = (index, xorSum) => {
        if (index === n) {
            result += xorSum;
            return;
        }

        // Exclude current element
        dfs(index + 1, xorSum);
        // Include current element
        dfs(index + 1, xorSum ^ nums[index]);
    };

    dfs(0, 0);
    return result;
}

// Example usage
const nums1 = [1, 3];
console.log(subsetXORSum(nums1)); // Output: 6

const nums2 = [5, 1, 6];
console.log(subsetXORSum(nums2)); // Output: 28
```

This solution utilizes a Depth First Search (DFS) approach to generate all possible subsets of the given array `nums` and calculates the XOR total of each subset. The result is the sum of all these XOR totals. The time complexity of this solution is O(2^n), where n is the number of elements in the array `nums`.

---------------------------------------------------------------

Certainly! Another approach to solving the "Container With Most Water" problem is by using a brute-force method, which involves checking every possible pair of lines and calculating the area formed by them. Here's how you can implement it in JavaScript:

```javascript
function maxArea(height) {
    let maxArea = 0;

    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            const minHeight = Math.min(height[i], height[j]);
            const currentArea = minHeight * (j - i);
            maxArea = Math.max(maxArea, currentArea);
        }
    }

    return maxArea;
}

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height)); // Output: 49

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
```

In this code, the `maxArea` function iterates over every pair of lines (represented by the indices `i` and `j`) and calculates the area formed by them. It then updates the `maxArea` variable with the maximum area found so far. This approach has a time complexity of O(n^2), where n is the number of elements in the array `height`. Although this approach is less efficient compared to the two-pointer approach, it still provides the correct solution.

You can solve this problem efficiently using the Kadane's algorithm. Here's how you can implement it in JavaScript:

```javascript
function maxSubArray(nums) {
    let maxSum = nums[0]; // Initialize maxSum with the first element of the array
    let currentSum = nums[0]; // Initialize currentSum with the first element of the array
    
    for (let i = 1; i < nums.length; i++) {
        // Update currentSum by either extending the subarray or starting a new subarray
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        
        // Update maxSum if the currentSum is greater
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}

// Example usage:
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums)); // Output: 6 (The subarray [4, -1, 2, 1] has the largest sum)
```

This `maxSubArray` function iterates through the array `nums` and maintains two variables: `currentSum` and `maxSum`. 

- `currentSum` keeps track of the sum of the current subarray ending at the current index.
- `maxSum` keeps track of the maximum sum found so far.

At each index `i`, we update `currentSum` by either extending the previous subarray (by adding `nums[i]` to `currentSum`) or starting a new subarray (by taking `nums[i]` itself). We then update `maxSum` to the maximum of `maxSum` and `currentSum` at each step.

By doing this, the algorithm finds the maximum sum subarray efficiently with a time complexity of O(n), where n is the length of the input array `nums`.


Generating permutations in JavaScript is by using a recursive algorithm that swaps elements in the array to generate different permutations. Here's how you can implement it:

```javascript
function permute(nums) {
    const result = [];

    function swap(arr, i, j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    function generatePermutations(n, arr) {
        if (n === 1) {
            result.push([...arr]);
            return;
        }

        for (let i = 0; i < n; i++) {
            generatePermutations(n - 1, arr);
            if (n % 2 === 0) {
                swap(arr, i, n - 1);
            } else {
                swap(arr, 0, n - 1);
            }
        }
    }

    generatePermutations(nums.length, nums);
    return result;
}

// Example usage:
const nums = [1, 2, 3];
console.log(permute(nums));

--------------------------------------------------------------------

function permute(nums) {
    const result = [];

    function backtrack(start) {
        if (start === nums.length - 1) {
            result.push([...nums]); // Add a copy of the current permutation
            return;
        }

        for (let i = start; i < nums.length; i++) {
            // Swap elements to create a new permutation
            [nums[start], nums[i]] = [nums[i], nums[start]];
            
            // Generate permutations for the rest of the array
            backtrack(start + 1);

            // Undo the swap to backtrack
            [nums[start], nums[i]] = [nums[i], nums[start]];
        }
    }

    backtrack(0); // Start permutation generation from index 0
    return result;
}

// Example usage:
const nums = [1, 2, 3];
console.log(permute(nums));

```

In this implementation, the `generatePermutations` function recursively generates permutations by swapping elements in the array. The `swap` function is used to swap elements at two indices in the array. This algorithm generates all possible permutations without duplicates.


To merge overlapping intervals efficiently, you can follow these steps:

1. Sort the intervals based on their start points.
2. Iterate through the sorted intervals, merging overlapping intervals as you go.

Here's how you can implement this in JavaScript:

```javascript
function merge(intervals) {
    if (intervals.length === 0) return [];

    // Sort intervals based on their start points
    intervals.sort((a, b) => a[0] - b[0]);

    const mergedIntervals = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const currentInterval = intervals[i];
        const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];

        // If the current interval overlaps with the last merged interval, merge them
        if (currentInterval[0] <= lastMergedInterval[1]) {
            lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
        } else {
            // If there's no overlap, add the current interval to the merged intervals list
            mergedIntervals.push(currentInterval);
        }
    }

    return mergedIntervals;
}

// Example usage:
const intervals = [[1,3],[2,6],[8,10],[15,18]];
console.log(merge(intervals)); // Output: [[1,6],[8,10],[15,18]]
```

In this implementation:

- We first sort the intervals based on their start points.
- We initialize an array `mergedIntervals` to store the merged intervals. We start with the first interval.
- We then iterate through the sorted intervals starting from the second interval.
- For each interval, if it overlaps with the last merged interval, we merge them by updating the end point of the last merged interval to the maximum of the two end points.
- If there's no overlap, we add the current interval to the merged intervals list.
- Finally, we return the merged intervals.


You can solve this problem using the Dutch National Flag algorithm, which is a three-way partitioning algorithm. It allows you to partition the array into three parts: elements less than a certain value, elements equal to that value, and elements greater than that value. Here's how you can implement it in JavaScript to solve the problem without using the library's sort function:

```javascript
function sortColors(nums) {
    let low = 0; // Pointer for elements less than 1 (red)
    let high = nums.length - 1; // Pointer for elements greater than 1 (blue)
    let i = 0; // Pointer for iterating through the array

    while (i <= high) {
        if (nums[i] === 0) {
            // If current element is 0 (red), swap it with the element at index low
            [nums[i], nums[low]] = [nums[low], nums[i]];
            low++;
            i++; // Move to the next element
        } else if (nums[i] === 2) {
            // If current element is 2 (blue), swap it with the element at index high
            [nums[i], nums[high]] = [nums[high], nums[i]];
            high--; // Decrement high pointer to move towards the beginning of the array
        } else {
            // If current element is 1 (white), just move to the next element
            i++;
        }
    }
}

// Example usage:
const nums = [2,0,2,1,1,0];
sortColors(nums);
console.log(nums); // Output: [0,0,1,1,2,2]
```

In this implementation:

- We initialize three pointers: `low`, `high`, and `i`.
- `low` points to the next position where we can place a 0 (red).
- `high` points to the next position where we can place a 2 (blue).
- `i` is used to iterate through the array.
- We traverse the array from left to right using the `i` pointer.
- If the current element is 0, we swap it with the element at `low` and increment both `i` and `low`.
- If the current element is 2, we swap it with the element at `high` and decrement `high`.
- If the current element is 1, we just move to the next element.
- Eventually, all 0s will be moved to the beginning, and all 2s will be moved to the end, leaving the 1s in between.


You can solve this problem using dynamic programming. Here's how you can implement it in JavaScript:

```javascript
function wordBreak(s, wordDict) {
    const n = s.length;
    const wordSet = new Set(wordDict);

    // Create a dp array to store whether s[i...j] can be segmented
    const dp = new Array(n + 1).fill(false);
    dp[0] = true; // An empty string is always segmented
    
    // Iterate through each character in the string
    for (let i = 1; i <= n; i++) {
        // Check if s[0...k] and s[k+1...i] are both segmented
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[n]; // Return whether the entire string is segmented
}

// Example usage:
const s = "leetcode";
const wordDict = ["leet", "code"];
console.log(wordBreak(s, wordDict)); // Output: true
```

In this implementation:

- We use dynamic programming to build up a boolean array `dp`, where `dp[i]` indicates whether the substring `s[0...i]` can be segmented into dictionary words.
- We initialize `dp[0]` to `true`, indicating that an empty string is always segmented.
- We iterate through each character in the string `s`. For each character `s[i]`, we check if any prefix `s[0...k]` (where `0 <= k < i`) is segmented and the suffix `s[k+1...i]` is a word in the dictionary. If both conditions are met, we set `dp[i]` to `true`.
- After iterating through all characters in the string, `dp[n]` will indicate whether the entire string can be segmented into dictionary words.
- Finally, we return `dp[n]` as the result.


To arrange the numbers to form the largest possible number, you need to customize the comparison function used in sorting. Here's how you can implement it in JavaScript:

```javascript
function largestNumber(nums) {
    // Custom comparison function for sorting
    const compare = (a, b) => {
        const order1 = a.toString() + b.toString();
        const order2 = b.toString() + a.toString();
        return order2.localeCompare(order1);
    };
    
    // Sort the numbers using the custom comparison function
    nums.sort(compare);
    
    // If the largest number is 0, the result should be "0"
    if (nums[0] === 0) {
        return "0";
    }
    
    // Concatenate the sorted numbers to form the largest number
    return nums.join('');
}

// Example usage:
const nums = [3, 30, 34, 5, 9];
console.log(largestNumber(nums)); // Output: "9534330"
```

In this implementation:

- We define a custom comparison function `compare` which takes two numbers `a` and `b`. This function concatenates `a` and `b` both ways and compares them to determine their order. The comparison is based on string comparison since we need to compare the concatenated strings.
- We use the custom comparison function to sort the numbers in descending order.
- If the largest number after sorting is 0, we return "0" immediately.
- Otherwise, we concatenate the sorted numbers to form the largest number and return it as a string.


Another approach is to use a recursive function with memoization. Here's how you can implement it in JavaScript:

```javascript
function coinChange(coins, amount) {
    // Create a memoization object to store already calculated results
    const memo = {};

    function minCoins(amount) {
        // If the amount is 0, no coins are needed
        if (amount === 0) return 0;

        // If the amount is negative, it cannot be made up by any combination of coins
        if (amount < 0) return -1;

        // If the result is already calculated, return it from the memoization object
        if (amount in memo) return memo[amount];

        let min = Infinity;

        // Try each coin denomination
        for (const coin of coins) {
            const res = minCoins(amount - coin);
            // If the result is valid and less than the current minimum, update the minimum
            if (res >= 0 && res < min) {
                min = res + 1;
            }
        }

        // If no valid combination is found, set memo[amount] to -1
        memo[amount] = min === Infinity ? -1 : min;
        return memo[amount];
    }

    // Call the recursive function to find the fewest number of coins needed
    return minCoins(amount);
}

// Example usage:
const coins = [1, 2, 5];
const amount = 11;
console.log(coinChange(coins, amount)); // Output: 3 (using 5 + 5 + 1)
```

In this implementation:

- We define a recursive function `minCoins(amount)` that calculates the fewest number of coins needed to make up the given `amount`.
- We use memoization to store the results of already calculated amounts to avoid redundant calculations.
- Inside the `minCoins` function, we check the base cases: if the amount is `0`, no coins are needed; if the amount is negative, it cannot be made up by any combination of coins.
- We iterate through each coin denomination, recursively call `minCoins` for the remaining amount after using the current coin, and update the minimum number of coins needed.
- Finally, we return the result of `minCoins(amount)` as the fewest number of coins needed to make up the given amount.

You can solve this problem using a similar approach to the three sum problem, but with some modifications to keep track of the closest sum to the target. Here's how you can implement it in JavaScript:

```javascript
function threeSumClosest(nums, target) {
    // Sort the array to use two pointers approach
    nums.sort((a, b) => a - b);
    let closestSum = Infinity;

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            // Update the closest sum if the current sum is closer to the target
            if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
                closestSum = sum;
            }

            // If the sum is greater than the target, move the right pointer to the left
            if (sum > target) {
                right--;
            } 
            // If the sum is less than the target, move the left pointer to the right
            else {
                left++;
            }
        }
    }

    return closestSum;
}

// Example usage:
const nums = [-1, 2, 1, -4];
const target = 1;
console.log(threeSumClosest(nums, target)); // Output: 2 (closest sum is -1 + 2 + 1 = 2)
```

In this implementation:

- We sort the array to use the two pointers approach, where one pointer starts from the beginning of the array (`i`), and the other pointer starts from the end of the array (`left` and `right`).
- We iterate through the array using `i` as the starting point.
- Inside the loop, we use two pointers (`left` and `right`) to find two numbers that, when combined with `nums[i]`, result in a sum closest to the target.
- We update the `closestSum` variable whenever we find a sum that is closer to the target than the current closest sum.
- Finally, we return the `closestSum` as the result.

To group anagrams together, you can use a hashmap where the keys are sorted versions of each word, and the values are arrays of words that are anagrams of each other. Here's how you can implement it in JavaScript:

```javascript
function groupAnagrams(strs) {
    const anagramsMap = new Map();

    // Iterate through each word in the array
    for (const str of strs) {
        // Sort the characters of the word to create a key for the hashmap
        const sortedStr = str.split('').sort().join('');

        // If the key exists in the hashmap, add the word to the corresponding array
        if (anagramsMap.has(sortedStr)) {
            anagramsMap.get(sortedStr).push(str);
        } 
        // If the key doesn't exist, create a new array with the word as the first element
        else {
            anagramsMap.set(sortedStr, [str]);
        }
    }

    // Convert the values of the hashmap to an array and return
    return Array.from(anagramsMap.values());
}

// Example usage:
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
```

In this implementation:

- We create a hashmap `anagramsMap` to store the groups of anagrams.
- We iterate through each word in the input array `strs`.
- For each word, we sort its characters to create a key for the hashmap. Words with the same sorted characters will have the same key.
- If the key already exists in the hashmap, we add the word to the corresponding array. Otherwise, we create a new array with the word as the first element and set it as the value for the key in the hashmap.
- Finally, we convert the values of the hashmap to an array and return it. Each array represents a group of anagrams.

To group anagrams together, you can use a hashmap where the keys are sorted versions of each word, and the values are arrays of words that are anagrams of each other. Here's how you can implement it in JavaScript:

```javascript
function groupAnagrams(strs) {
    const anagramsMap = new Map();

    // Iterate through each word in the array
    for (const str of strs) {
        // Sort the characters of the word to create a key for the hashmap
        const sortedStr = str.split('').sort().join('');

        // If the key exists in the hashmap, add the word to the corresponding array
        if (anagramsMap.has(sortedStr)) {
            anagramsMap.get(sortedStr).push(str);
        } 
        // If the key doesn't exist, create a new array with the word as the first element
        else {
            anagramsMap.set(sortedStr, [str]);
        }
    }

    // Convert the values of the hashmap to an array and return
    return Array.from(anagramsMap.values());
}

// Example usage:
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
```

In this implementation:

- We create a hashmap `anagramsMap` to store the groups of anagrams.
- We iterate through each word in the input array `strs`.
- For each word, we sort its characters to create a key for the hashmap. Words with the same sorted characters will have the same key.
- If the key already exists in the hashmap, we add the word to the corresponding array. Otherwise, we create a new array with the word as the first element and set it as the value for the key in the hashmap.
- Finally, we convert the values of the hashmap to an array and return it. Each array represents a group of anagrams.

You can achieve this by first sorting the array and then finding the maximum difference between two successive elements. Here's how you can implement it in JavaScript:

```javascript
function maximumGap(nums) {
    const n = nums.length;
    
    // If the array contains less than two elements, return 0
    if (n < 2) {
        return 0;
    }
    
    // Sort the array
    nums.sort((a, b) => a - b);
    
    let maxDifference = 0;
    
    // Find the maximum difference between two successive elements
    for (let i = 1; i < n; i++) {
        const diff = nums[i] - nums[i - 1];
        maxDifference = Math.max(maxDifference, diff);
    }
    
    return maxDifference;
}

// Example usage:
const nums = [3, 6, 9, 1];
console.log(maximumGap(nums)); // Output: 3 (the maximum difference is between 6 and 9)
```

In this implementation:

- We first check if the array contains less than two elements. If so, we return 0 because there are no successive elements to compare.
- We sort the array in ascending order.
- We iterate through the sorted array and calculate the difference between each pair of successive elements. We update the `maxDifference` variable to store the maximum difference found so far.
- Finally, we return the `maxDifference`, which represents the maximum difference between two successive elements in the sorted array.


You can solve this problem using the sliding window technique. Here's how you can implement it in JavaScript:

```javascript
function lengthOfLongestSubstring(s) {
    const n = s.length;
    const charIndexMap = new Map(); // Map to store the index of each character
    let maxLength = 0;
    let left = 0; // Left pointer of the sliding window

    // Iterate through each character in the string
    for (let right = 0; right < n; right++) {
        const char = s[right];

        // If the character is already seen and its index is greater than or equal to the left pointer,
        // move the left pointer to the right of the previous occurrence of the character
        if (charIndexMap.has(char) && charIndexMap.get(char) >= left) {
            left = charIndexMap.get(char) + 1;
        }

        // Update the index of the current character in the map
        charIndexMap.set(char, right);

        // Update the maximum length of the substring
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Example usage:
const s = "abcabcbb";
console.log(lengthOfLongestSubstring(s)); // Output: 3 (the longest substring without repeating characters is "abc")
```

In this implementation:

- We use a sliding window approach where we maintain a window `[left, right]` that contains a substring without repeating characters.
- We use a hashmap `charIndexMap` to store the index of each character encountered in the string.
- We iterate through the string using the right pointer of the sliding window.
- If we encounter a character that is already seen and its index is within the current window, we move the left pointer of the window to the right of the previous occurrence of the character.
- We update the index of the current character in the map.
- We update the maximum length of the substring (`maxLength`) based on the size of the current window.
- Finally, we return `maxLength`, which represents the length of the longest substring without repeating characters.

Another solution to find the longest palindromic substring is to use the expand around center approach. Here's how you can implement it in JavaScript:

```javascript
function longestPalindrome(s) {
    if (!s || s.length === 0) return "";

    let start = 0;
    let end = 0;

    // Function to expand around a center and find the longest palindrome
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    }

    // Iterate through each character in the string as potential center
    for (let i = 0; i < s.length; i++) {
        const len1 = expandAroundCenter(i, i); // Center is a single character
        const len2 = expandAroundCenter(i, i + 1); // Center is between two characters
        const len = Math.max(len1, len2);
        
        // Update start and end indices if a longer palindrome is found
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return s.substring(start, end + 1);
}

// Example usage:
const s = "babad";
console.log(longestPalindrome(s)); // Output: "bab" or "aba"
```

In this implementation:

- We define a function `expandAroundCenter` that takes two indices `left` and `right` as input and expands around the center to find the longest palindrome.
- We iterate through each character in the string `s`.
- For each character, we call `expandAroundCenter` twice: once with the center being the character itself (`len1`), and once with the center being between the current character and the next one (`len2`).
- We update the start and end indices of the longest palindrome found so far if a longer palindrome is discovered.
- Finally, we return the longest palindromic substring found using the start and end indices.

You can solve this problem using the naive string matching algorithm, also known as the "brute force" approach. Here's how you can implement it in JavaScript:

```javascript
function strStr(haystack, needle) {
    const n = haystack.length;
    const m = needle.length;

    if (m === 0) return 0; // Edge case: empty needle

    for (let i = 0; i <= n - m; i++) {
        let j;
        for (j = 0; j < m; j++) {
            if (haystack[i + j] !== needle[j]) {
                break;
            }
        }
        if (j === m) {
            return i; // Found needle at index i in haystack
        }
    }

    return -1; // Needle not found
}

// Example usage:
const haystack = "hello";
const needle = "ll";
console.log(strStr(haystack, needle)); // Output: 2 (needle "ll" found at index 2 in haystack "hello")
```

In this implementation:

- We iterate through each character in the `haystack` string using a loop.
- For each character position `i`, we check if the substring of length `needle.length` starting from position `i` matches the `needle` string character by character.
- If we find a match, we return the index `i`.
- If we reach the end of the loop without finding a match, we return `-1` indicating that the `needle` is not part of the `haystack`.