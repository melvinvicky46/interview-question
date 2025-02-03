# JavaScript Interview Questions & Answers

1. **Array built in methods**

```
[1, 2, 3, 4, 5].at(1) //2

[1, 2, 3, 4, 5].fill(1) //[1, 1, 1, 1]

[1, 2, 3, 4, 5].join('-') //'1-2-3-4-5'

[1, 2, 3, 4, 5].toString() //'12345'

[1, 2, 3, 4, 5].reverse() //[5, 4, 3, 2, 1]

[1, 2, 3, 4, 5].includes(1) //true

[1, 2, 3, 4, 5].some((item) => item < 2) //true

[1, 2, 3, 4, 5].find((item) => item > 2) //3

[1, 2, 3, 4, 5].findIndex((item) => item > 2) //2(index)

[1, 2, 3, 4, 5].every((item) => item > 2) //false

[1, 2, 3, 4, 5].map((item) => item + 2) //[3, 4, 5, 6, 7]

[1, 2, 3, 4, 5].filter((item) => item > 2) //[3, 4, 5]

[1, 2, 3, 4, 5].reduce((acc, cur) => acc + cur, 10) //25

[1, 2, 3, 4, 5].findLast((item) => item > 2); //5

[1, 2, 5, 3, 4].findLastIndex((item) => item > 2); //2

[1, 2, 5, 3, 4].indexOf(3); //3

Array.from([1, 2, 3], (x) => x + x); // [2, 4, 6]

Array.of('foo', 2, 'bar', true) //["foo", 2, "bar", true]

['March', 'Jan', 'Feb', 'Dec'].sort() //["Dec", "Feb", "Jan", "March"]

[1, 30, 4, 21, 100000].sort() //[1, 100000, 21, 30, 4]

[1, 2, 3, 4, 5].with(2, 6) //[1, 2, 6, 4, 5]

```

2. **Object built in methods**

```
// Object assign
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
Object.assign(target, source); //{ a: 1, b: 4, c: 5 }

// Object entries
for (const [key, value] of Object.entries(target)) {
  console.log(`${key}: ${value}`); //"a: 1" "b: 2"
}

// Object.freeze() A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed
Object.freeze(target);

// Object.fromEntries()
const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42]
]);
const obj = Object.fromEntries(entries); //{ foo: "bar", baz: 42 }

// Object.hasOwn()
const target = { a: 1, b: 2 };
Object.hasOwn(target, 'a'); //true

// Object.is() determines whether two values are the same value.
console.log(Object.is(1, 1)); //true
console.log(Object.is({ a: 1, b: 2 }, { a: 1, b: 2 })); //false

// Object.keys()
Object.keys(target) //["a", "b"]

// Object.seal()
const object1 = {
  property1: 42
};
Object.seal(object1);
object1.property1 = 33;
console.log(object1.property1);
// output: 33

// Object.values()
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};
console.log(Object.values(object1));
// Expected output: Array ["somestring", 42, false]
```

3. **Find the indexes of all Occurrences of Element in JS Array**

```
// Using forEach()
const arr = ["a", "b", "a", "c", "a"];
const indexes = [];

arr.forEach((element, index) => {
  if (element === "a") {
    indexes.push(index);
  }
});
console.log(indexes); // 👉️ [ 0, 2, 4 ]

// Using reduce()
const indexes = arr.reduce((accumulator, current, index) => {
  if (current === "a") {
    accumulator.push(index);
  }

  return accumulator;
}, []);
console.log(indexes); // 👉️ [ 0, 2, 4 ]
```

4. **Sort the Keys and values of an Object in JavaScript**

```
// Using reduce()
const obj = {z: 'three', a: 'one', b: 'two'};
const sorted = Object.keys(obj)
  .sort()
  .reduce((accumulator, key) => {
    accumulator[key] = obj[key];

    return accumulator;
  }, {});
console.log(sorted); // 👉️ {a: 'one', b: 'two', z: 'three'}

// OR

// Using forEach()
const obj = {z: 'three', a: 'one', b: 'two'};
const tempObj = {};
Object.keys(obj).sort().forEach(key => {
    tempObj[key] = obj[key];
});
console.log(tempObj); // 👉️ {a: 'one', b: 'two', z: 'three'}

// OR
const obj = {z: 'three', a: 'one', b: 'two'};
const tempObj = Object.entries(obj).sort(); // [['a', 'one'], ['b', 'two'], ['z', 'three,]]
console.log(Object.fromEntries(tempObj)); // {a: 'one', b: 'two', z: 'three'}
```

5. **Sort an Array of strings ignoring the Case without mutation**

```
const arr = ['Z', 'f', 'a', 'C'];
// 👇️ create shallow copy before calling sort
const sorted = [...arr].sort((a, b) => {
  return a.localeCompare(b, undefined, {sensitivity: 'base'});
});

console.log(sorted); // 👉️ ['a', 'C', 'f', 'Z']
```

6. **How this context works**

```
var fullName = "John";
var obj = {
  fullName: "Drake",
  props: {
    fullName: "Richard",
    getName: function() {
      return this.fullName
    }
  }
}

console.log(obj.props.getName()) // Richard
let objFName = obj.props.getName
objFName() // John

objFName.call(obj) // Drake
```

7. **Rest operator**

```
function getUserId(...args) {
  return typeof args
}
getUserId(10); // [10] --> Object
```

8. **Flatten an nested array**

```
const arr = [1, 2, [3, 4, [5, 6, [8, 9]]]];

function flatten(arr) {
  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      return acc.concat(flatten(item));
    } else {
      return acc.concat(item);
    }
  }, []);
}

// Flatten the array to any depth
const flattened = flatten(arr);

// Log the flattened array
console.log(flattened);

------------------------------------------

const nestedArray = [1, [2, [3, 4], 5], 6, [7, 8]];

function flattenArray(arr) {
  const flattened = [];

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (Array.isArray(current)) {
      // If current element is an array, flatten it recursively
      for (let j = 0; j < current.length; j++) {
        arr.push(current[j]);
      }
    } else {
      // If current element is not an array, push it to flattened array
      flattened.push(current);
    }
  }

  return flattened;
}

const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

----------------

const arr = [1, 2, [3, 4, [5, 6, [8, 9]]]];

const flatten = (arr) => {
  const flattened = [];

  while (arr.length) {
    const next = arr.pop();
    if (Array.isArray(next)) {
      arr.push(...next);
    } else {
      flattened.unshift(next);
    }
  }
  return flattened;
};

console.log(flatten(arr));


```

9. **Find the number of Occurrences of elements in an array**

```
function countOccurrences(arr) {
  const occurrences = {};

  // Iterate through the array
  arr.forEach(function (element) {
    // Increment the count of the current element
    occurrences[element] = (occurrences[element] || 0) + 1;
  });

  console.log(occurrences);
}

var arr = [1, 2, 3, 4, 1, 2, 3, 4, 5, 1];
var result = countOccurrences(arr);
console.log(result); //{1: 3, 2: 2, 3: 2, 4: 2, 5: 1}

---------------------

const array = [1, 2, 2, 3, 4, 1, 5, 2, 4, 4];

function countOccurrences(arr) {
  const occurrences = {};

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (occurrences[element]) {
      occurrences[element] += 1;
    } else {
      occurrences[element] = 1;
    }
  }

  return occurrences;
}

const result = countOccurrences(array);
console.log(result);

```

10. **Add all the zero to end of the array**

```
const array = [1, 2, 0, 3, 0, 4, 0, 5];

function pushZeroToLast(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count++] = arr[i];
    }
  }

  while (count < arr.length) {
    arr[count++] = 0;
  }
  return arr;
}
console.log(pushZeroToLast(array)); // [1, 2, 3, 4, 5, 0, 0, 0]
```

11. **Segregate even and odd number in an array**

```
const array = [2, 3, 4, 5, 6, 7, 8, 9];
const newArr = [];
let index = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    newArr[index++] = array[i]
  }
}

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 !== 0) {
    newArr[index++] = array[i]
  }
}
console.log(newArr); // [2, 4, 6, 8, 3, 5, 7, 9]

// OR

const array = [2, 3, 4, 5, 6, 7, 8, 9];
const newArr = array.filter(num => num % 2 === 0).concat(array.filter(num => num % 2 !== 0));
console.log(newArr); // [2, 4, 6, 8, 3, 5, 7, 9]

//OR
function segregateEvenOdd(arr) {
    let left = 0; // Pointer for the leftmost even number
    let right = arr.length - 1; // Pointer for the rightmost odd number

    while (left < right) {
        // Find the next even number from the left
        if (arr[left] % 2 === 0 && left < right) {
            left++;
        }

        // Find the next odd number from the right
        if (arr[right] % 2 !== 0 && left < right) {
            right--;
        }

        // Swap the even and odd numbers
        if (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
}

// Example usage:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
segregateEvenOdd(arr);
console.log(arr); // Output: [2, 4, 6, 8, 5, 3, 7, 1, 9]
```

12. **Rearrange Array such that Even Index elements are Smaller and Odd Index Elements are Greater**

```
const array = [2, 3, 4, 5, 6, 7, 8, 9];
let temp;
function rearrangeOrder(array, len) {
  for (let i = 0; i < len-1; i++) {
    if (i % 2 === 0 && array[i] >= array[i + 1]) {
      temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
    }
    if (i % 2 !== 0 && array[i] <= array[i + 1]) {
      temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
    }
  }
  console.log(array) //[2, 4, 3, 6, 5, 8, 7, 9]
}
rearrangeOrder(array, array.length)
```

13. **Difference Between typeof and instanceof in JavaScript**

```
const a = "string";
const b = new String("string");

typeof a // "string"
typeof b // "object"

a instanceof String // false
b instanceof String // true
```

14. **Check For Pair In An Array With a Given Sum and return they indexes**

```
const sumOfPairs = (arr, target) => {
  let numIndex = {};
  let difference;
  for (let i = 0; i < arr.length; i++) {
    difference = target - arr[i];
    if (numIndex[difference] !== undefined) {
      return [numIndex[difference], i]
    } else {
      numIndex[arr[i]] = i;
    }
  }
}

sumOfPairs([1, 2, 3, 4], 6) //index [1, 3]
```

15. **Return the indexes of NaN in Array**

```
const array = [2, 3, 4, NaN, NaN, 5, NaN];
const tempArr = [];
array.filter((item, index) => {
  if(isNaN(item)) {
    tempArr.push(index)
  }
});
console.log(tempArr);

// OR

const reduceFn = array.reduce((acc, val, index) => {
  if(val !== val) {
    acc.push(index);
  }
  return acc;
}, [])
console.log(reduceFn)
```

16. **Implement Group by in JavaScript**

```
const cars = [
  { make: 'audi', model: 'r8', year: 2012, quantity: 2},
  { make: 'audi', model: 'v7', year: 2013, quantity: 5},
  { make: 'benz', model: 'q8', year: 2014, quantity: 23},
  { make: 'benz', model: 'r8', year: 2015, quantity: 20},
  { make: 'bmw', model: 'q7', year: 2017, quantity: 22}
]

let result = cars.reduce((acc, current) => {
  acc[current.make] = acc[current.make] || [];
  acc[current.make].push(current)
  return acc;
}, {});

// OR

const result = cars.group(({ make }) => make);
console.log(result)

// OR

const cars = [
  { make: "audi", model: "r8", year: 2012, quantity: 2 },
  { make: "audi", model: "v7", year: 2013, quantity: 5 },
  { make: "benz", model: "q8", year: 2014, quantity: 23 },
  { make: "benz", model: "r8", year: 2015, quantity: 20 },
  { make: "bmw", model: "q7", year: 2017, quantity: 22 },
];

const groupBy = (arr, fn) => {
  const result = {};
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const key = fn(current);

    if (!result[key]) {
      result[key] = [];
    }

    result[key].push(current);
  }

  return result;
};

console.log(groupBy(cars, (vehicle) => vehicle.make));


```

**Group By Prototype**

```
Array.prototype.groupBy = function(fn) {
    const result = {};
    this.forEach(item => {
        const key = fn(item);
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
    });
    return result;
};
```

17. **Difference between substring and substr in JavaScript**

```
"abc".substring(1, 2) // b  --> from, to   //returns a new string
"abc".substr(1, 2) // bc  --> from, length
```

18. **Find min and max number in an Array without using in-built methods**

```
function findMinMax(array) {
  let min = array[0],
    max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
    if (min > array[i]) {
      min = array[i];
    }
  }
  return { min, max };
}

findMinMax([19, 23, 0, -10, -19]); //{min: -19, max: 23}
```

19. **Polyfill for Filter Method to return even numbers in JavaScript**

```
Array.prototype.myFilter = function() {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i] % 2 === 0) {
      newArr.push(this[i])
    }
  }

  // OR
  // for (let item of this) {
  //   newArr.push(callback(item))
  // }
  return newArr;
}

[10, 2, 3, 5, 6, 9, 8].myFilter(current => current % 2 === 0);

--------------------

Array.prototype.myFilter = function(cb) {
  let newArr = [];
  for(let i=0; i< this.length; i++) {
     if(cb(this[i], i, this)) {
       newArr.push(this[i]);
     }
  }
  return newArr;
}

const nums = [1, 2, 3, 4, 5, 6];
const evenNums = nums.myFilter(x => x % 2);
console.log(evenNums); // [2, 4, 6]
```

20. **Polyfill For map() Method In JavaScript**

```
Array.prototype.myMap = function(callback) {
  const newArr = [];
  for (let item of this) {
    newArr.push(callback(item));
  }
  return newArr
}

[10, 2, 3, 5, 6, 9, 8].myMap(current => current * 2);

----------------------

  Array.prototype.myMap = function(cb) {
    let newArr = [];
    for(let i=0; i< this.length; i++) {
      newArr.push(cb(this[i], i, this));
    }
    return newArr;
  };

  const nums = [1, 2, 3, 4, 5];
  const multiplyByTwo = nums.myMap(x => x * 2);
  console.log(multiplyByTwo); // [2, 4, 6, 8, 10]
```

21. **Polyfill to sum the given array using reduce function in JavaScript**

```
function sum(a, b) {
  return a + b;
}

Array.prototype.myReduce = function (callback, initialVal) {
  let acc = initialVal;
  for (let i = 0; i < this.length; i++) {
    acc = callback(acc, this[i]);
  }

  // OR
  // let k = 0;
  // while (k < this.length) {
    // acc = callback(acc, this[k]);
    // k++;
  // }
  return acc;
}

const sumArray = [10, 20, 30, 40];
sumArray.myReduce(sum, 0);

-------------------------------

Array.prototype.myReduce = function(cb, initialValue) {
    let accumulator = initialValue;
    for(let i=0; i< this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
    }
    return accumulator;
}
  const nums = [1, 2, 3, 4, 5, 6];
  const sum = nums.myReduce((acc, curr, i, arr) => {
    return acc += curr
  }, 0);
  console.log(sum); // 21
```

22. **Polyfill to check if the given string or not in JavaScript**

```
const isString = (str) => {
  return typeof str === "string" || str instanceof String;
}

isString("check string") //true
isString(new String("check String")) //true
```

23. **Polyfill to find the max number in an array in JavaScript**

```
Array.prototype.maxNumber = function () {
  let max = this[0];
  for (let i = 0; i < this.length; i++) {
    if (max < this[i]) {
      return (max = this[i]);
    }
  }
};

[1, 20, 1, 3, 5].maxNumber(); //20
```

24. **Polyfill to find the min number in an array in JavaScript**

```
Array.prototype.minNumber = function () {
  let min = this[0];
  for (let i = 0; i < this.length; i++) {
    if (min > this[i]) {
      return (min = this[i]);
    }
  }
};

[1, 20, 11, 3, 5].minNumber(); //1
```

25. **Remove duplicate from an array**

```
// Filter()
const arr = [1, 2, 3, 2, 1, 4, 5, 6, 5];
const uniqueArr = arr.filter((value, index, self) => self.indexOf(value) === index);
console.log(uniqueArr); // [1, 2, 3, 4, 5, 6]


// Set()
const arr = [1, 2, 3, 2, 1, 4, 5, 6, 5];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // [1, 2, 3, 4, 5, 6]

// for...of loop
const arr = [1, 2, 3, 2, 1, 4, 5, 6, 5];
const uniqueArr = [];
for (const value of arr) {
  if (!uniqueArr.includes(value)) {
    uniqueArr.push(value);
  }
}
console.log(uniqueArr); // [1, 2, 3, 4, 5, 6]

// Remove items which are repeating
const diff = arr.filter((value, index, self) => self.indexOf(value) === self.lastIndexIf(value));
console.log(diff); // [1, 2, 3, 4, 5, 6]

// remove duplicates from both arrays
function removeDuplicates(arr) {
    return arr.filter((element, index) => arr.indexOf(element) === index);
}

function mergeUnique(arr1, arr2) {
    // Remove duplicates from both arrays
    const uniqueArr1 = removeDuplicates(arr1);
    const uniqueArr2 = removeDuplicates(arr2);
    
    // Merge unique elements from both arrays
    const mergedArray = [...uniqueArr1, ...uniqueArr2];
    
    return mergedArray;
}

// Example usage:
const arr1 = [1, 2, 2, 3, 4];
const arr2 = [3, 4, 5, 5, 6];
const mergedArray = mergeUnique(arr1, arr2);
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

```

26. **Convert an Array into Object**

```
const arrayOfStrings = ['foo', 'bar', 'baz'];
const newObj = { ...arrayOfStrings }; // {0: "foo", 1: "bar", 2: "baz"}

// OR

const newObject = {}
for (let i = 0; i < arrayOfStrings.length; i++) {
  newObject[i] = newObject[arrayOfStrings[i]]
}

// OR

const arr = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' }
];

const obj = arr.reduce((result, item) => {
  result[item.id] = item.name;
  return result;
}, {});

console.log(obj); // { 1: 'John', 2: 'Jane', 3: 'Bob' }

// OR

const obj = {};
for (let i = 0; i < arr.length; i++) {
  obj[arr[i].id] = arr[i].name;
}
console.log(obj); // { 1: 'John', 2: 'Jane', 3: 'Bob' }
```

27. **Measure Time Taken by a Function to Execute in JavaScript**

```
console.time('consoleTime')
methodCall()
console.timeEnd('consoleTime')

// OR

const start = performance.now() //return the timestamp
methodCall()
const end = performance.now()
console.log(end-start); //time taken to run the method
```

28. **Find the Pivot element of the given Array**

```
function findPivot(arr) {
  let leftSum = 0;
  let rightSum = arr.reduce((acc, currValue) => acc + currValue, 0);
  for (let i = 0; i < arr.length; i++) {
    rightSum -= arr[i];  // 28 - 1 = 27, 27 - 7 = 20, 20 - 3 = 17,  17 - 6 = 11
    if (leftSum === rightSum) {
      return arr[i];
    }
    leftSum += arr[i]; // 0 + 1 = 1, 1 + 7 = 8, 8 + 3 = 11
  }
  return -1;
}

// example usage
const arr = [1, 7, 3, 6, 5, 6];  --> //[1, 7, 3] = 11 and [5, 6] = 11, middle is 6
const pivotIndex = findPivot(arr);
console.log(pivotIndex) // 6
```

29. **Array Rotation with k number of rotation**

```
const nums = [1, 2, 3, 4, 5, 6];
const k = 3;
const rotateArray = (arr, k) => {
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop())
  }
  return arr;
}
rotateArray(arr, k) // [4, 5, 6, 1, 2, 3];
```

30. **Object Immutability In JavaScript | Object.preventExtensions | Object.seal() | Object.freeze()**

```
const cars = {
  maxSpeed: 40,
  weight: 200,
  color: 'red'
}

Object.preventExtensions(cars);
// Cannot add new property, but you can modify or delete

Object.seal(cars);
// You cannot add, delete, But you can modify properties
// Object.isSealed(cars) // true

Object.freeze(cars);
// Cannot add, delete or modify
// Object.isFrozen(cars) // true
```

31. **Memoization In JavaScript**

```
function addition(a, b) {
  return a + b;
}

const setUniqueProps = (fnToAdd, args) => {
  let propKey = [];
  return propKey.concat(fnToAdd, args).join("|");
}

function memoization(fnToAdd) {
  let cacheObj = {};
  return function(...args) {
    const uniqueProps = setUniqueProps(fnToAdd, args);
    if (!cacheObj[uniqueProps]) {
      cacheObj[uniqueProps] = fnToAdd(...args);
    }
    return cacheObj[uniqueProps];
  }
}

const memoized = memoization(addition)
console.log(memoized(10, 20)) //Returns value from memoized cache
console.log(memoized(10, 30)) //New function call
console.log(memoized(10, 20)) //Returns value from memoized cache
```

32. **Map Polyfill to find the square root**

```
const arr = [1, 2, 3, 4, 5]
function myMapFn(arr, sqrt) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let result = sqrt(arr[i], i, arr);
    newArr.push(result);
  }
  return newArr;
}

const squartRoot = myMapFn(arr, function(currentItem, index, arr) {
  return currentItem ** 2
})

console.log(squartRoot); // [1, 4, 9, 16, 25]
```

33. **Filter Polyfill find item greater than 3**

```
const arr = [1, 2, 3, 4, 5]
function myFilterFn(arr, greater) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let result = greater(arr[i], i, arr);
    if (result) {
      newArr.push(arr[i])
    }
  }
  return newArr;
}

const numberGreaterThan3 = myFilterFn(arr, function(currentItem, index, arr) {
  return currentItem > 3
})

console.log(numberGreaterThan3); // [4, 5]
```

34. **Find the Missing number or numbers in an Array In JavaScript**

```
function findMissingNumber(arr) {
  let missingNumber = [];
  let minNum = Math.min(...arr);
  let maxNum = Math.max(...arr);
  for (let i = minNum; i < maxNum; i++) {
    if (arr.indexOf(i) < 0) { //0 = item found, -1 item not found
      missingNumber.push(i)
    }
  }
  return missingNumber;
}

console.log(findMissingNumber([1, 4, 5, 7])) // [2, 3, 6]
console.log(findMissingNumber([5, 2, 6, 1, 3, 10])) //[4, 7, 8, 9]

--------------------

function firstMissingPositive(nums) {
    const numSet = new Set(nums);
    let smallestPositive = 1;
    
    while (numSet.has(smallestPositive)) {
        smallestPositive++;
    }
    
    return smallestPositive;
}

// Example usage:
const nums = [1, 2, 0];
console.log(firstMissingPositive(nums)); // Output: 3

```

35. **Swap First & Last Character of a String In JavaScript**

```
function swap(value) {
  const len = value.length;
  return value.charAt(len - 1) + value.substring(1, len - 1) + value.charAt(0)
}
console.log(swap('Melvin')) //nelviM
```

36. **Deep Copy in Javascript**

```
var student1 ={
  name : "Manish",
  company : "Gfg"
}

var student2 =  { ...student1 };
OR
// var student2 = Object.assign( {} ,student1);
OR
// var student2 = JSON.parse(JSON.stringify(student1))

student1.name = "Rakesh"

console.log("student 1 name is",student1.name)
console.log("student 2 name is ",student2.name);
```

38. **Find the factorial of a number**

```
function factorial(x) {
  // if number is 0
  if (x === 0) {
    return 1;
  }
  // if number is positive
  else {
    return x * factorial(x - 1);
  }
}
const result = factorial(3); // 3x2x1 = 6
```

39. **Reverse a string**

```
function reverseString(str) {
  // empty string
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
reverseString("Hello world") //dlrow olleH
```

40. **Check Occurrence of a Character Using for Loop**

```
function countCharacters(str, character) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === character) {
      count++;
    }
  }
  return count;
}
countCharacters("Hello world", "l") // 3
```

41. **Convert first letter of a string to uppercase**

```
function convertToUpperCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1, str.length);
}
convertToUpperCase("melvin");  // Melvin
```

41. **Remove duplicate elements from second array**

```
const array1 = [1, 2, 3];
const array2 = [2, 3, 5];
const filtered = array2.filter((item, index) => {
  return !array1.includes(item);
});
console.log(filtered); //[5]

// OR

array2.filter(function(val) {
  return array1.indexOf(val) === -1;
});
```

42. **Currying in JavaScript**

```
Currying is a functional programming technique where a function that takes multiple arguments is transformed into a series of functions, each taking one argument at a time.

Why is Currying Required?
a) Code Reusability and Partial Application
With currying, we can create specialized functions by partially applying arguments.

const multiply = (a) => (b) => a * b;

const double = multiply(2); // Pre-configured function (Partial application)
console.log(double(5)); // Output: 10
console.log(double(10)); // Output: 20


b) Function Composition
Currying helps in function composition, making it easier to create more modular and readable code.
const greet = (greeting) => (name) => `${greeting}, ${name}!`;

const sayHello = greet("Hello");
console.log(sayHello("Alice")); // Output: Hello, Alice!
console.log(sayHello("Bob")); // Output: Hello, Bob!

c) Avoiding Repetitive Code
With currying, you avoid rewriting the same logic multiple times.
const checkMinLength = (minLength) => (str) => str.length >= minLength;

const isValidUsername = checkMinLength(5);
console.log(isValidUsername("John")); // Output: false
console.log(isValidUsername("Jonathan")); // Output: true


function sum(a) {
  return (b) => {
      return (c) => {
          return a + b + c
      }
  }
}
console.log(sum(1)(2)(3)) // 6

function sum(a) {
  return (b, c) => {
      return a * b * c
  }
}
sum(10)(3,12);

// Nested/multiple arguments

function curry(fn) {
  return function curried(...args) {
    if (args.length === fn.length) {
      return fn(...args);
    } else {
      return (...moreArgs) => curried(...args, ...moreArgs);
    }
  };
}

// OR

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };

}

function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

alert( curriedSum(1, 2, 3) ); // 6, still callable normally
alert( curriedSum(1)(2,3) ); // 6, currying of 1st arg
alert( curriedSum(1)(2)(3) ); // 6, full currying


When to Use Currying?
You should use currying when:

You need reusability – When functions need to be reused with fixed parameters.
You want to partially apply functions – When arguments are provided step by step.
You need cleaner function composition – When combining multiple smaller functions.
You work with Higher-Order Functions (HOFs) – When working with functional paradigms like .map(), .filter(), .reduce().
You want to improve readability – When dealing with complex logic that benefits from modularity.

```

43. **Check palindrome**

```
const str1 = 'racecar';
function isPalindrome(str){
  for(let i = 0; i < str.length/2; i++){
    if (str[i] !== str[str.length -1 -i])
       return false;
  }
  return true;
}

console.log(isPalindrome(str1)); // true

OR

function isPalindrome(str) {
  // Convert the string to lowercase and remove all non-alphanumeric characters.
  const cleanedStr = str.toLowerCase().replace(/[^A-Za-z0-9]/g, "");

  // Reverse the string.
  const reversedStr = cleanedStr.split("").reverse().join("");

  // Check if the original string and the reversed string are equal.
  return cleanedStr === reversedStr;
}

OR 

function isPalindrome(str) {
    // Convert the string to lowercase to handle case sensitivity
    str = str.toLowerCase();
    
    // Initialize pointers
    let left = 0;
    let right = str.length - 1;
    
    // Iterate until pointers meet
    while (left <= right) {
        // Check if characters are alphanumeric
        if (!isAlphaNumeric(str[left])) {
            left++;
        } else if (!isAlphaNumeric(str[right])) {
            right--;
        } else {
            // Compare characters
            if (str[left] !== str[right]) {
                return false; // Not a palindrome
            }
            // Move pointers
            left++;
            right--;
        }
    }
    
    return true; // Palindrome
}

// Helper function to check if a character is alphanumeric
function isAlphaNumeric(char) {
    return /^[0-9a-zA-Z]+$/.test(char);
}


OR 

function isPalindrome(str) {
    // Convert the string to lowercase to handle case sensitivity
    str = str.toLowerCase();
    
    // Initialize pointers
    let left = 0;
    let right = str.length - 1;
    
    // Iterate until pointers meet
    while (left < right) {
        // Compare characters
        if (str[left] !== str[right]) {
            return false; // Not a palindrome
        }
        // Move pointers towards the center
        left++;
        right--;
    }
    
    return true; // Palindrome
}

```

44. **Check number of zeros**

```
function countZeros(num) {
  let count = 0;

  while (num > 0) {
    count += Math.floor(num / 10);
    num = num / 10;
  }
  return count;
}

const num2 = 12000;
console.log(countZeros(num2)); //1333

```

45. **How do you validate an email in javascript**

```
let email = "pradeep.kumar@gmail.com";
function validateEmail(email) {
  // regex pattern for email
  const re = /\S+@\S+\.\S+/g;

  // check if the email is valid
  let result = re.test(email);
  if (result) {
    console.log("Valid");
  } else {
    console.log("Not valid.");
  }
}
```

46. **Memoized function to Add Number**

```
const memoizedAdd = () => {
  let cache = {};
  return (number) => {
    if (number in cache) {
      console.log('Fetching from cache: ');
      return cache[number];
    }
    else {
      console.log('Calculating result: ');
      let result = number + 10;
      cache[number] = result;
      return result;
    }
  }
}
// returned function from memoizedAdd
const sum = memoizedAdd();

console.log(sum(10)); // Calculating result: 20
console.log(sum(10)); // Fetching from cache: 20
```

47. **What is bind method in javascript**

```
The bind() method allows an object to borrow a method from another object without making a copy of that method. This is known as function borrowing in JavaScript.
bind(): creates a new function that is bound to a specific context. This means that when the new function is called, the this keyword will be set to the specified value.

const person = {
  firstName: "Chhavi",
  lastName: "Goswami",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};

const member = {
  firstName: "Vasuda",
  lastName: "Sahota"
};

let fullName = person.fullName.bind(member);
console.log(fullName()); // Vasuda Sahota
```

48. **What are Closures**

```
A Closure is the combination of a function and the lexical environment within which that function was declared. i.e, it is an inner function that has access to the outer or enclosing function's variables.

Closure is useful in hiding implementation detail in JavaScript. In other words, it can be useful to create private variables or functions
Lexical Scope:
In lexical scoping free variables must belong to a parent scope.

// Lexical Scope
function init() {
  let name = "JavaScript closures"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  return displayName;
}
var closure = init();
closure();

// Dynamic Scope
function fun1() {
  console.log(a); // 10
}

function fun2() {
  var a = 20;
  fun1();
}

var a = 10;
fun2();

// Output 10
```

**Understanding JavaScript closures**

```
In JavaScript, a closure is a function that captures the lexical scope in which it was declared, allowing it to access and manipulate variables from an outer scope even after that scope has been closed.

Here’s how closures work:

Lexical scoping: JavaScript uses lexical scoping, meaning a function's access to variables is determined by its physical location within the source code.

Function creation: When a function is created, it keeps a reference to its lexical scope. This scope contains all the local variables that were in-scope at the time the closure was created.

Maintaining state: Closures are often used to maintain state in a secure way because the variables captured by the closure are not accessible outside the function.

const createCounter = () => {
  let count = 0;
  return () => {
    count += 1;
    return count;
  };
};

const counter = createCounter();
console.log(counter()); // Outputs: 1
console.log(counter()); // Outputs: 2

<!-- Why use closures? -->
Data encapsulation: Closures provide a way to create private variables and functions that can't be accessed from outside the closure. This is useful for hiding implementation details and maintaining state in an encapsulated way.

Functional programming: Closures are fundamental in functional programming paradigms, where they are used to create functions that can be passed around and invoked later, retaining access to the scope in which they were created, e.g. partial applications or currying.

Event handlers and callbacks: In JavaScript, closures are often used in event handlers and callbacks to maintain state or access variables that were in scope when the handler or callback was defined.

Module patterns: Closures enable the module pattern in JavaScript, allowing the creation of modules with private and public parts.
```

49. **What is an event delegation**

```
Event delegation is a technique in JavaScript that allows you to attach a single event listener to a parent element, rather than attaching a separate event listener to each child element.

With event delegation, you attach a single event listener to the parent element, and then use the event.target property to determine which child element triggered the event.

const parent = document.getElementById('parent');

parent.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    event.target.classList.toggle('selected');
  }
});

```

50. **Difference for..in and for..of**

```
for...in is used to iterate over the properties of an object. It returns the name of each property in the object. For example:
const obj = { a: 1, b: 2, c: 3 };

for (const prop in obj) {
  console.log(prop); // 'a', 'b', 'c'
}


for...of is used to iterate over the elements of an array or other iterable value. It returns the value of each element in the array. For example:
const arr = [1, 2, 3];

for (const element of arr) {
  console.log(element); // 1, 2, 3
}

```

51. **How to get the first non-null/undefined argument in JavaScript**

```
function findNonNull() {
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] != null) {
      return arguments[i];
    }
  }
}

console.log(findNonNull(null, undefined, "First", 1, 2, 3, null) );  // First
```

52. **Compare two objects to determine the first object contains equivalent property values to the second object**

```
let obj1 = {
	name: "John",
	age: 23,
	degree: "CS"
}

// Define the second object
let obj2 = {
	age: 23,
	degree: "CS"
}

// Define the function check
function check(obj1, obj2) {

	// Iterate the obj2 using for..in
	for (key in obj2) {

		// Check if both objects do not have the equal values of same key
		if (obj1[key] !== obj2[key]) {
			return false;
		}
	}
	return true
}

// Call the function
console.log(check(obj1, obj2)) //false
```

53. **Polyfill method for the get Lodash method in JavaScript**

```
function get(object, path, defaultValue = 'Error') {
    if (object === undefined || object === null) {
      return defaultValue;
    }

    let keys = path.split('.');
    let current = object;

    for (let i = 0; i < keys.length; i++) {
      if (current[keys[i]] === undefined || current[keys[i]] === null) {
        return defaultValue;
      }

      current = current[keys[i]];
    }

    return current;
  }

  const object = {
    a: {
      b: {
        c: 'hello',
      },
    },
  };

  const value = get(object, 'a.b.c');

  console.log(value); // 'hello'
```

54. **Polyfill method for the isEqual Lodash method in JavaScript**

```
function isEqual(value, other) {
    // Check if both values are objects
    if (typeof value !== 'object' || typeof other !== 'object') {
      return value === other;
    }

    // Check if both objects have the same number of properties
    if (Object.keys(value).length !== Object.keys(other).length) {
      return false;
    }

    // Loop through the properties of the first object
    for (const key in value) {
      // Check if the property exists in the second object
      if (!other.hasOwnProperty(key)) {
        return false;
      }

      // Recursively check if the property values are equal
      if (!isEqual(value[key], other[key])) {
        return false;
      }
    }

    // If all properties are equal, return true
    return true;
  }
```

55. **How to merge multiple arrays and remove duplicate items in JavaScript**

```
let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [3, 4, 5, 7];
let arr3 = [3, 4, 5, 7, 8];
// let arr = [...arr1, ...arr2, ...arr3];
// let mergedArr = [...new Set(arr)];
// console.log(mergedArr);

function mergeDuplicate(...arr) {
  const tempArr = [];
  arr.forEach((item) => {
    tempArr.push(...item);
  });
  return [...new Set(tempArr)];
}

const merged = mergeDuplicate(arr1, arr2, arr3);
console.log("merged", merged); // [1, 2, 3, 4, 5, 6, 7, 8]
```

56. **Program to Generate all Binary Strings From Given Pattern**

```
function generateBinaryStrings(str) {
  const queue = [""];

  for (let i = 0; i < queue.length; i++) {
    const current = queue[i];

    if (current.length === str.length) {
      console.log(current);
    } else {
      const nextIndex = current.length;
      if (str[nextIndex] === "X") {
        queue.push(current + "0");
        queue.push(current + "1");
      } else {
        queue.push(current + str[nextIndex]);
      }
    }
  }
}

const result = "X1X";
generateBinaryStrings(result);

```

57. **Program to Count Number of Alphabets**

```
let str = "Geeks123for#$Geeks";
let regex = /[a-zA-Z]/g;
console.log("Number of aplhabet", str.match(regex).length);

let regexNum = /[0-9]/g;
console.log("Number of aplhabet", str.match(regexNum).length);
```

58. **Program to Convert a Roman Number to Integer**

```
function romanToInt(num) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const temp = num.split("");
  let number = roman[temp[0]];

  for (let i = 1; i < temp.length; i++) {
    const current = roman[temp[i]];
    const previous = roman[temp[i - 1]];
    if (current <= previous) {
      number += current;
    } else {
      number = number - previous * 2 + current;
    }
  }
  return number;
}

console.log(romanToInt("MCMXCIV")); // 1994
```

OR

```
function stringToRoman(num) {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let result = 0;
  for (let i = 0; i < symbols.length; i++) {
    for (let j = 0; j < num.length; j++) {
      if (num[j] === symbols[i]) {
        result += values[i];
      }
    }
  }

  return result;
}

const input = "DDM";
const result = stringToRoman(input.split(""));
console.log(result);
```

58. **Program to Convert a Integer to Roman Number**

```
function intToRoman(num) {
  var romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  var result = "";
  for (var i in romanNumerals) {
    while (num >= romanNumerals[i]) {
      result += i;
      num -= romanNumerals[i];
    }
  }
  return result;
}

console.log(romanToInt(1994)); // Output: MCMXCIV
```

59. **Program to remove duplicate and show duplicate**

```
const arr = [4, 3, 1, 2, 5, 6, 1, 2, 3, 4];
const removedDup = arr.filter((item, index) => arr.indexOf(item) === index);
console.log("removedDup", removedDup); // [4, 3, 1, 2, 5, 6]

const duplicate = arr.filter((item, index) => arr.indexOf(item) !== index);
console.log("duplicate", duplicate); // [1, 2, 3, 4]
```

60. **Program to replace specific element with specific number**

```
const arr = [4, 3, 1, 2, 5, 6, 1, 2, 3, 4];
const replace2by9 = arr.toString().replaceAll(2, 9);
const replacedValue = replace2by9.split(",").map(Number); // or(parseInt)
console.log(replacedValue) // [4, 3, 1, 9, 5, 6, 1, 9, 3, 4];
```

61. **Program to find the factorial of a number**

```
function factorial(x) {
  // if number is 0
  if (x === 0) {
    return 1;
  }
  // if number is positive
  else {
    return x * factorial(x - 1);
  }
}

factorial(3) // 6
```

62. **JavaScript Promise and Promise Chaining**

```
// In JavaScript, a promise is a good way to handle asynchronous operations. It is used to find out if the asynchronous operation is successfully completed or not.
// A promise may have one of three states.
// Pending
// Fulfilled
// Rejected

doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => {
    console.log(`Got the final result: ${finalResult}`);
  })
  .catch(failureCallback);
```

63. **Javascript async/await**

```
// We use the async keyword with a function to represent that the function is an asynchronous function.
// The async function returns a promise.

// JavaScript await Keyword
// The await keyword is used inside
// the async function to wait for the asynchronous operation.
// The use of await pauses the async function until the promise returns a result (resolve or reject) value
// Using async

async function restaurantCustomer() {
  try{
      let customer = await getCustomer();
      let order = await getOrder(customer);
      let meal = await prepareFood(order);
      let food = await serveFood(meal);
      return await eatFood(food);
  } catch(e) {
      showError(e);
  }
}

```

64. **Difference between promises and async/await in JavaScript**

```
Promises:
are objects that represent the eventual completion or failure of an asynchronous operation. They are created using the new Promise() constructor and can be chained together using the .then() and .catch() methods.

const promise = new Promise((resolve, reject) => {
  // Do something asynchronous
  if (success) {
    resolve(result);
  } else {
    reject(error);
  }
});

promise.then(result => {
  // Do something with the result
}).catch(error => {
  // Handle the error
});


Async/await:
is a syntax that allows you to write asynchronous code in a more synchronous style. It is used in conjunction with promises and allows you to wait for promises to resolve before continuing execution.

async function asyncFunction() {
  // Do something asynchronous
  const result = await promise;

  // Do something with the result
}

asyncFunction();
```

65. **Difference Between Promise.all, Promise.allSettled, Promise.any, Promise.race, Promise.event**

```
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'foo');
})

// Promise.all
Promises.all([promise1, promise2, promise3]).then(values => console.log(values)) // [3, 42, "foo"]
// If any of the promise is reject it will stop at that point and return only the reject message, it wont return next/previous promise

// Promise.allSettled
Promises.allSettled([promise1, promise2, promise3]).then(values => values.forEach(val => val.status));
// It returns an array of object with all resolved and rejected promises.
// status --> status of promise
// value --> resolved
// reason --> rejected

// Promise.any
Promises.any([promise1, promise2, promise3]).then(values => console.log(values))
// It doesn't care about reject promise, it will return you the fastest resolved promise
// if all the promise are rejected then it will return an aggregated error message for all the promises

// Promise.race
Promises.race([promise1, promise2, promise3]).then(values => console.log(values))
// It will return the fastest promise which is either resolved or rejected

// Promise.event
The Promise.event() function is a utility function that allows you to create a promise from an event. This can be useful for situations where you need to wait for an event to occur before continuing with your code.
The Promise.event() function takes two arguments: the event target and the event name. The event target is the object that will be emitting the event, and the event name is the name of the event that you want to wait for.
The Promise.event() function will return a promise that will be resolved when the event is emitted. If the event is not emitted before the promise times out, the promise will be rejected.

const button = document.querySelector('button');

const promise = Promise.event(button, 'click');

promise.then(() => {
  // Do something when the button is clicked.
});
```

66. **Why To Use JavaScript Async/Await Over Promises**

```
const makeRequest = () => {
  return promise1.then((value1) => {
    return promise2(value1).then((value2) => {
      return promise3(value1, value2)
    })
  })
}

const makeRequest = () => {
  const value1 = await promise1();
  const value2 = await promise2(value1)
  return promise3(value1, value2);
}
```

67. **How to Sort Numeric Array using JavaScript**

```
const arrList = [3, 2, 4, 20, 1];

for (var i = 0; i < arrList.length; i++) {
  for (var j = 0; j < arrList.length; j++) {
    if (arrList[j] > arrList[i]) {
      // swap the numbers
      const a = arrList[i];
      arrList[i] = arrList[j];
      arrList[j] = a;

      OR
      // [arrList[i], arrList[j]] = [arrList[j], arrList[i]]
    }
  }
}

console.log(arrList); // [1, 2, 3, 4, 20]
```

67. **Counting Zeros**

```
function numofZeros(num) {
  let countZeros = 0;

  for (let num = 1; num <= 2014; num++) {
    const numStr = num.toString();
    countZeros += numStr.split("0").length - 1;
  }

  return countZeros;
}

console.log(numofZeros(2014)); //223
```

67. **Random between 5 to 7 using javascript**

```
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumber = getRandomInt(5, 7);

console.log(randomNumber); // 6
```

68. **Ways to remove duplicate characters from a string**

```
const str = "Hello, world!";
const uniqueStr = new Set(str).join("");
console.log(uniqueStr); // "Helo, wrd!"

OR

const str = "Hello, world!";
const uniqueStr = str.split("").filter((char, index, arr) => arr.indexOf(char) === index).join("");
console.log(uniqueStr); // "Helo, wrd!"

OR

const str = "Hello, world!";
const uniqueStr = [];
str.split("").forEach((char) => {
  if (!uniqueStr.includes(char)) {
    uniqueStr.push(char);
  }
});
console.log(uniqueStr.join("")); // "Helo, wrd!"
```

69. **Finding the First Non-repeating Character in a String**

```
const findChar = function (str) {
  let char;
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      char = str[i];
      break;
    }
  }
  return char;
};

console.log(findChar("eelloWorld")); //W
```

70. **A peak element is an element that is strictly greater than its neighbors**

```
// Input: nums = [1,2,1,3,5,6,4]
// Output: 5
// Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.

function findPeak(number) {
  if (!number) return false;
  for (let i = 1; i < number.length; i++) {
    if (number[i] >= number[i - 1] && number[i] >= number[i + 1]) {
      return i;
    }
  }
}

const nums = [1, 2, 1, 3, 5, 6, 4]; //1

const result = findPeak(nums);
console.log("result index", result); //1
```

71. **Given an integer target, return true if target is in matrix or false otherwise.**

```
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

function findTarget(matrix, target) {
  const [...item] = matrix;
  const tempArr = [];
  item.forEach((it) => {
    tempArr.push(...it);
  });
  return tempArr.includes(target);
}

const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const target = 3;
const result = findTarget(matrix, target);
console.log(result); //true


OR


function findTarget(matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length - 1; j++) {
      return matrix[j].includes(target);
    }

    // OR
    // return matrix[i].filter((item) => item === target).includes(target);
  }
}
```

72. **Sort string/number with and without sort method.**

```
const str = "Hi JavaScript TypeScript C CPP Python Java HTML CSS"
const sortedStr = str.split(" ").sort().join(" ");
console.log(sortedStr) //"C CPP CSS HTML Hi Java JavaScript Python TypeScript"

const withoutSort(str) {
  const convertToArr = str.split(" ");
  for (let i = 0; i < convertToArr.length; i++) {
    for (let j = 0; j < convertToArr.length; j++) {
      if (convertToArr[j] > convertToArr[i]) {
        [convertToArr[i], convertToArr[j]] = [convertToArr[j], convertToArr[i]]

        OR

        if (convertToArr[j] > convertToArr[i]) {
          const temp = convertToArr[i];
          convertToArr[i] = convertToArr[j];
          convertToArr[j] = temp;
        }
      }
    }
  }
  return convertToArr.join(" ")
}

```

73. **bind() method and Polyfill bind().**

```
The bind() method creates a new function and when that new function is called it set this keyword to the first argument which is passed to the bind method

// Polyfill for bind method
if (!Function.prototype.bind) {
    Function.prototype.bind = function(context) {
        var fn = this; // 'this' refers to the function on which bind is called
        var args = Array.prototype.slice.call(arguments, 1); // Get arguments after 'context'

        return function() {
            var newArgs = args.concat(Array.prototype.slice.call(arguments)); // Concatenate bound args with new args
            return fn.apply(context, newArgs); // Call original function with context and arguments
        };
    };
}

// Example usage:
let obj = {
    x: 42
};

function greet(name, age) {
    console.log(`Hello, ${name}. You are ${age} years old. x is ${this.x}`);
}

let boundGreet = greet.bind(obj, "Alice");
boundGreet(30); // Output: Hello, Alice. You are 30 years old. x is 42

```

74. **call() method and Polyfill call().**

```
The call() method calls the function directly and sets this to the first argument passed to the call method
call(): and apply() both allow you to call a function with a specific context. This means that you can specify the value of the this keyword inside the function.

// Polyfill for call method
if (!Function.prototype.call) {
    Function.prototype.call = function(context) {
        context = context || window; // Default context to global object (window in browsers)
        context.fn = this; // 'this' refers to the function on which call is called

        var args = [];
        for (var i = 1; i < arguments.length; i++) {
            args.push('arguments[' + i + ']');
        }

        // Execute the function with specified context and arguments
        var result = eval('context.fn(' + args.join(',') + ')');

        delete context.fn; // Clean up by deleting added property on context object

        return result; // Return the result of the function execution
    };
}

```

75. **apply() method and Polyfill apply().**

```
The apply() method calls the function directly and sets this to the first argument passed to the apply method
call(): and apply() both allow you to call a function with a specific context. This means that you can specify the value of the this keyword inside the function.

// Polyfill for apply method
if (!Function.prototype.apply) {
    Function.prototype.apply = function(context, argsArray) {
        context = context || window; // Default context to global object (window in browsers)
        context.fn = this; // 'this' refers to the function on which apply is called

        var result;

        if (!argsArray) {
            result = context.fn();
        } else {
            var args = [];
            for (var i = 0; i < argsArray.length; i++) {
                args.push('argsArray[' + i + ']');
            }
            result = eval('context.fn(' + args.join(',') + ')');
        }

        delete context.fn; // Clean up by deleting added property on context object

        return result; // Return the result of the function execution
    };
}

```

76. **deep and shallow copy.**

```
Shallow copy
A shallow copy is a copy of an object that only goes one level deep. In other words, it copies the object and all its properties, but any nested objects or arrays will still reference the same memory location as the original object.

// Shallow copy
const obj1 = {
  a: 1,
  b: {
    c: 2
  }
};

const obj2 = obj1;

// Change the value of a property in the original object
obj1.a = 3;

// The value of the property in the copy object has also changed
console.log(obj2.a); // 3


Deep copy
A deep copy is a copy of an object that includes all of its properties and any nested objects or arrays. This means that the new object is completely independent of the original object and any changes made to the new object will not affect the original object.

// Deep copy
const obj3 = JSON.parse(JSON.stringify(obj1));

// Change the value of a property in the original object
obj1.a = 4;

// The value of the property in the copy object has not changed
console.log(obj3.a); // 1
```

77. **Differences between arrow functions and regular functions in JavaScript**

```
Regular Functions
We can write the regular function in two ways, i.e Function declaration, and Function expression.

// function declaration
function add(a, b) { return a + b }

// function expression
const sum = function(a, b) { return a + b }

Arrow Functions
The arrow function — also called the fat arrow function — is a new feature introduced in ES6 that is a more concise syntax for writing function expressions.
const sum = (a, b) => a + b


const user = {
  username: "Melvin",
  getUserName: function () {
    return this.username; //this binds to user object
  }

   getUserName: () => {
    return this.username; //this binds to window object
  }
}

const getName = user.getUserName;
console.log(getName()) //undefined
console.log(user.getUserName()) //Melvin

- Syntax
- No arguments (arguments are array-like objects)
- No prototype object for the Arrow function
- Cannot be invoked with a new keyword (Not a constructor function)
- No own this (call, apply & bind won't work as expected)
- It cannot be used as a Generator function
- Duplicate-named parameters are not allowed
```

78. **JavaScript performance optimization**

```
Before looking at the tips contained in this section, it is important to talk about where in the process of browser page rendering JavaScript is handled. When a web page is loaded:

- The HTML is generally parsed first, in the order in which it appears on the page.
- Whenever CSS is encountered, it is parsed to understand the styles that need to be applied to the page. During this time, linked assets such as images and web fonts start to be fetched.
- Whenever JavaScript is encountered, the browser parses, evaluates, and runs it against the page.
- Slightly later on, the browser works out how each HTML element should be styled, given the CSS applied to it.
- The styled result is then painted to the screen.

*Loading critical assets as soon as possible:
<head>
  ...
  <!-- Preload a JavaScript file -->
  <link rel="preload" href="important-js.js" as="script" />
  <!-- Preload a JavaScript module -->
  <link rel="modulepreload" href="important-module.js" />
  ...
</head>

*The preload <link> fetches the JavaScript as soon as possible, without blocking rendering. You can then use it wherever you want in your page:
<!-- Include this wherever makes sense -->
<script src="important-js.js"></script>


*Deferring execution of non-critical JavaScript:
you can add the async attribute to your <script> elements
<head>
  ...
  <script async src="main.js"></script>
  ...
</head>
In <script async>, the script will be fetched in parallel to HTML parsing and executed as soon as it is available (potentially before HTML parsing completes) and it will not necessarily be executed in the order in which it appears in the HTML document. Use async when the script is independent of any other scripts on the page, for example, analytics.

In <script defer>, the script will be fetched in parallel to HTML parsing and executed when the document has been fully parsed, but before firing DOMContentLoaded. If there are multiple of them, each deferred script is executed in the order they appeared in the HTML document.


*Breaking down long tasks

*Optimizing event performance:
Events can be expensive for the browser to track and handle, especially when you are running an event continuously.
It is, therefore, a good idea to remove event listeners that are no longer needed. This can be done using removeEventListener()

Tips for writing more efficient code:
- Reduce DOM manipulation
- Batch DOM changes
- Reduce the amount of looped code

loading attribute to lazy load a JavaScript file
<script src="script.js" loading="lazy"></script>

the Intersection Observer API to lazy load a JavaScript file
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const script = document.createElement('script');
      script.src = 'script.js';
      document.head.appendChild(script);
    }
  });
});

observer.observe(document.querySelector('#lazy-load'));
```

79. **HTML performance optimization**

```
Key HTML performance issues
- Size of the image and video files
- Order of resource loading

Providing different image resolutions via srcset
<img
  srcset="480w.jpg 480w, 800w.jpg 800w"
  sizes="(max-width: 600px) 480px, 800px"
  src="800w.jpg"
  alt="Family portrait" />


Providing different sources for images and videos
<picture>
  <source media="(max-width: 799px)" srcset="narrow-banner-480w.jpg" />
  <source media="(min-width: 800px)" srcset="wide-banner-800w.jpg" />
  <img src="large-banner-800w.jpg" alt="Dense forest scene" />
</picture>


Lazy loading images:
<img src="800w.jpg" alt="Family portrait" loading="lazy" />

```

80. **CSS performance optimization**

```
- Remove unnecessary styles
 lighthouse developer tools

- Split CSS into separate modules
<!-- Loading and parsing styles.css is render-blocking -->
<link rel="stylesheet" href="styles.css" />

<!-- Loading and parsing print.css is not render-blocking -->
<link rel="stylesheet" href="print.css" media="print" />

<!-- Loading and parsing mobile.css is not render-blocking on large screens -->
<link
  rel="stylesheet"
  href="mobile.css"
  media="screen and (max-width: 480px)" />

- Minify and compress your CSS

- Simplify selectors

- Cut down on image HTTP requests with CSS sprites

- Preload important assets
  <link rel="preload" href="style.css" as="style" />

  <link
    rel="preload"
    href="ComicSans.woff2"
    as="font"
    type="font/woff2"
    crossorigin />

  <link
    rel="preload"
    href="bg-image-wide.png"
    as="image"
    media="(min-width: 601px)" />

```

80. **CSS specificity rule**

```
Here are the priorities of CSS:
- Inline
- Internal/Embedded
- External

The priority order of CSS selectors is:
- Value defined as Important
- Inline
- Id nesting
- Id
- Class nesting
- Class
- Tag nesting
- Tag

Here are the priorities of CSS selectors:
- Inline style
- Id selector
- Classes, pseudo-classes, and attributes

To avoid conflicts, you can:
- Only use classes
- Avoid applying multiple classes on a single HTML element
```

80. **Optimising Mobile App Performance in Low Internet Connectivity**

```
- Optimize data usage
Minimize the amount of data your app consumes by using efficient data formats, compressing images, and reducing unnecessary network requests.

- Caching
Implement caching mechanisms to store data locally on the device. This allows your app to display content even when there is no internet connection.
Use appropriate caching strategies for different types of data, such as HTTP caching headers or database caching.

- Offline capabilities
 Implement offline workflows and synchronize data when the connection is restored.
 Store data locally on the device using databases like SQLite

- Progressive loading
Start by loading essential content first and then progressively load additional content. This approach ensures that users can access critical information quickly, even with a slow or intermittent internet connection.

- Error handling
Implement effective error handling and provide informative messages to users when network requests fail

- Background synchronisation
If your app involves data synchronisation, implement background synchronisation mechanisms to update data whenever an internet connection is available.

- Reduce network requests
Minimise the number of network requests by combining multiple requests into a single one, using batch APIs
Implement pagination techniques to load data in smaller chunks instead of fetching all at once.

```

80. **Implementing a mobile-first approach**

```
- Use responsive design
Responsive design allows on-site elements to automatically adjust and rearrange themselves to fit the screens of different devices.

- Test across devices
Test your mobile interface on a real device to ensure it is user-friendly and functioning well on different devices.

- Keep the design simple
Simple and minimal web design improves content clarity and focuses users' attention on what matters the most.

- Prioritize content
Prioritize content that is always visible on smaller devices and what to hide behind navigational drawers, dropdown menus, or accordions.

- Avoid large chunks of content
Designing for smaller screens is all about avoiding clutter and building minimalistic user interfaces so that the user's focus is directed to only the most important things.

- Defining the Break Points
Media Query is a technique in CSS that can be used to apply different CSS styles based on a few particular rules, such as the viewport width.

```

80. **How to Lazy Load Images in Javascript**

```
Lazy Loading images is a technique to load images on a web page only when required. This way can improve the page’s loading time without reducing the page size.

Techniques for Lazy Loading Images in Javascript
- Using EventListeners
-  Using Intersection Observer API
```

**Clean code principles**

```
Clean code is simple, readable, maintainable, and testable. Some principles of clean code include

Exception handling
Exception handling improves maintainability, extensibility, and readability.

Single-responsibility principle
Each function should be responsible for one thing. If a function is doing more than one thing, it should be split.

Refactoring
Refactoring is the practice of reorganizing existing software code without impacting its external behavior. It aims to improve code readability and reduce complexity.

Functions
Functions should be short and focused. A good rule of thumb is to keep functions under 20 lines of code, and to ensure that each function only performs a single task.

Design patterns
A design pattern is a way to write clean, organized code. It emphasizes reusability by providing a series of techniques for an engineer to tackle specific problems.

DRI principle
DRI stands for Don't Repeat Yourself. Code should be written in a way that avoids repetition and promotes reuse

```

**find the first non-repeating character in a string and return its index using JavaScript**

```
function firstNonRepeatingCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    let c = string.charAt(i);
    if (string.indexOf(c) === i && string.indexOf(c, i + 1) === -1) {
      return i;
    }
  }
  return -1;
}

console.log(firstNonRepeatingCharacter('abacddbec')); // 7
----------------------------------------------------------------------
function nonRepeated(str) {
   for(let i = 0; i < str.length; i++) {
      let j = str.charAt(i)
      if (str.indexOf(j) === str.lastIndexOf(j)) {
        return i;
      }
   }
   return -1;
}

console.log(nonRepeated("aabcbd")); // 3
```

**find the longest palindromic substring in a given string**

```
var longestPalindrome = function(s) {
    let len = s.length;
    while (len>0) {
        for (let i=0; i<s.length-len+1; i++) {
            let str = s.slice(i, i+len);
            if (isPalindrome(str))
                return str;
        }
        len--;
    }
    return "";
};

const isPalindrome = function(arr) {
    let i=0;
    let j=arr.length-1;
    while (i<=j) {
        if (arr[i]!==arr[j])
            return false;
        i++; j--;
    }
    return true;
}

----------------------------------------------

function longestPalindrome(str) {
  let longest = '';
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      const substr = str.slice(i, j);
      if (substr === substr.split('').reverse().join('')) {
        if (substr.length > longest.length) {
          longest = substr;
        }
      }
    }
  }
  return longest;
}
console.log(longestPalindrome('forgeeksskeegfor')); //geeksskeeg
```

**Merge two sorted arrays in JavaScript**

```
function mergeArrays(arr1, arr2) {
  // Create a new array to store the merged result
  const mergedArray = [];

  // Iterate over both arrays and compare the elements
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  // Add the remaining elements of the first array to the merged array
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  // Add the remaining elements of the second array to the merged array
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  // Return the merged array
  return mergedArray;
}

// Example usage:
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];

const mergedArray = mergeArrays(arr1, arr2);

console.log(mergedArray); // [1, 2, 3, 4, 5, 6, 7, 8]

----------------------------------------------------------------

function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];

  while (arr1.length && arr2.length) {
    const firstElementOfArr1 = arr1[0];
    const firstElementOfArr2 = arr2[0];

    if (firstElementOfArr1 < firstElementOfArr2) {
      mergedArray.push(firstElementOfArr1);
      arr1.shift();
    } else {
      mergedArray.push(firstElementOfArr2);
      arr2.shift();
    }
  }

  // Add any remaining elements from arr1 to the merged array.
  while (arr1.length) {
    mergedArray.push(arr1.shift());
  }

  // Add any remaining elements from arr2 to the merged array.
  while (arr2.length) {
    mergedArray.push(arr2.shift());
  }

for (var i = 0; i < mergedArray.length; i++) {
  for (var j = 0; j < mergedArray.length; j++) {
    if (mergedArray[j] > mergedArray[i]) {
        [mergedArray[i], mergedArray[j]] = [mergedArray[j], mergedArray[i]]
    }
  }
}

  return mergedArray;
}

// Example usage:
const arr11 = [1, 13, 5];
const arr22 = [2, 4, 6];

const mergedArray = mergeSortedArrays(arr11, arr22);

console.log(mergedArray); // [1, 2, 4, 5, 6, 13]

```

**Advance Data types**

```
<!-- Symbols -->
Symbols are created using the Symbol() function, which returns a new unique symbol. Symbols are often used as object keys to ensure that they are unique and cannot be modified by other code.
Sets are useful for performing operations on collections of unique values, such as finding the union, intersection, or difference of two or more Sets.

const mySymbol = Symbol('mySymbol');

Symbols can also be used as methods to define object properties:
const myObject = {
  [mySymbol]: 'Hello, world!'
};

console.log(myObject[mySymbol]); // Output: "Hello, world!"

<!-- SET -->
Set is a collection of unique values. It is similar to an array, but with a few key differences.
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);

mySet.add([4, 5, 6]);

You can check if a value is in a Set using the has() method:
console.log(mySet.has(2)); // Output: true
console.log(mySet.has(4)); // Output: false

You can remove a value from a Set using the delete() method:
mySet.delete(2);
mySet.delete([4, 5, 6]);

You can iterate over a Set using a for...of loop:
for (const value of mySet) {
  console.log(value);
}

<!-- MAP -->
Map is a collection of key-value pairs. It is similar to an object

const myMap = new Map();
You can add key-value pairs to a Map using the set() method
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
myMap.set('key3', 'value3');

You can also add multiple key-value pairs at once using the set() method with an object:
myMap.set({ key4: 'value4' }, { key5: 'value5' });

You can check if a key is in a Map using the has() method:
console.log(myMap.has('key2')); // Output: true
console.log(myMap.has('key4')); // Output: false

You can retrieve a value from a Map using the get() method:
console.log(myMap.get('key2')); // Output: "value2"
console.log(myMap.get('key4')); // Output: undefined

myMap.delete('key2');

You can iterate over a Map using a for...of loop:
for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}

Maps are useful for performing operations on collections of key-value pairs, such as finding the sum, average, or maximum value of a set of numbers, or mapping a set of values to a set of keys.

<!-- WeakSet  -->
WeakSet is a collection of objects that allows you to store weak references to objects. WeakSet objects are similar to Set objects, but they only accept objects as values and do not prevent those objects from being garbage collected.

create a WeakSet in JavaScript:
const myWeakSet = new WeakSet();

You can add objects to a WeakSet using the add() method:
const myObject1 = { name: 'John' };
const myObject2 = { name: 'Jane' };

myWeakSet.add(myObject1);
myWeakSet.add(myObject2);

const myObject3 = { name: 'Bob' };
const myObject4 = { name: 'Alice' };

myWeakSet.add([myObject3, myObject4]);

You can check if an object is in a WeakSet using the has() method:
console.log(myWeakSet.has(myObject1)); // Output: true

You can remove an object from a WeakSet using the delete() method:
myWeakSet.delete(myObject1);
myWeakSet.delete([myObject3, myObject4]);

You can iterate over a WeakSet using a for...of loop:
for (const value of myWeakSet) {
  console.log(value);
}

WeakSet objects are useful for storing objects that should not prevent their properties from being garbage collected. For example, if you have a large object that is no longer needed and you want to prevent it from being garbage collected, you can store it in a WeakSet.

<!-- WeakMap -->
WeakMap objects are useful for storing objects that should not prevent their properties from being garbage collected. For example, if you have a large object that is no longer needed and you want to prevent it from being garbage collected, you can store it in a WeakMap.

create a WeakMap in JavaScript:
const myWeakMap = new WeakMap();

You can add key-value pairs to a WeakMap using the set() method:
const myObject1 = { name: 'John' };
const myObject2 = { name: 'Jane' };

myWeakMap.set(myObject1, 'value1');
myWeakMap.set(myObject2, 'value2');

You can also add multiple key-value pairs at once using the set() method with an object:
const myObject3 = { name: 'Bob' };
const myObject4 = { name: 'Alice' };

myWeakMap.set({ key1: myObject3, key2: myObject4 }, { value1: 'value3', value2: 'value4' });

You can check if a key is in a WeakMap using the has() method:
console.log(myWeakMap.has(myObject1)); // Output: true
console.log(myWeakMap.has({ name: 'John' })); // Output: false

You can retrieve a value from a WeakMap using the get() method:
console.log(myWeakMap.get(myObject1)); // Output: "value1"
console.log(myWeakMap.get({ name: 'John' })); // Output: undefined

```

Certainly! Let's explore a practical use case for both `WeakMap()` and `WeakSet()`:

**Use Case for WeakMap():**

Imagine you're developing a web application where you need to associate additional data with DOM elements. One common scenario is managing event listeners. You want to add event listeners to DOM elements but don't want to create memory leaks by accidentally keeping references to these elements longer than necessary.

```javascript
// WeakMap to associate data with DOM elements
let eventListeners = new WeakMap();

function addEventListener(element, eventName, handler) {
    if (!eventListeners.has(element)) {
        eventListeners.set(element, new Map());
    }
    let elementEvents = eventListeners.get(element);
    elementEvents.set(eventName, handler);
    element.addEventListener(eventName, handler);
}

function removeEventListener(element, eventName) {
    if (eventListeners.has(element)) {
        let elementEvents = eventListeners.get(element);
        if (elementEvents.has(eventName)) {
            let handler = elementEvents.get(eventName);
            element.removeEventListener(eventName, handler);
            elementEvents.delete(eventName);
        }
        if (elementEvents.size === 0) {
            eventListeners.delete(element);
        }
    }
}

// Usage example
let button = document.getElementById('myButton');
function handleClick() {
    console.log('Button clicked!');
}
addEventListener(button, 'click', handleClick);

// Later, if button is removed from DOM or no longer needed:
removeEventListener(button, 'click');
```

In this example, we use a `WeakMap()` named `eventListeners` to associate event handlers with DOM elements. Since `eventListeners` is a `WeakMap`, it won't prevent the associated DOM elements from being garbage collected if they are removed from the DOM or no longer needed elsewhere in the code.

**Use Case for WeakSet():**

Consider a scenario where you need to keep track of objects that are being observed by a monitoring system. However, you want to ensure that if an object is no longer used elsewhere in the application, it can be garbage collected.

```javascript
let monitoringSet = new WeakSet();

function startMonitoring(object) {
    monitoringSet.add(object);
    // Start monitoring object...
}

function stopMonitoring(object) {
    monitoringSet.delete(object);
    // Stop monitoring object...
}

// Usage example
let obj1 = {};
let obj2 = {};

startMonitoring(obj1);
startMonitoring(obj2);

// Later, if obj1 is no longer needed:
stopMonitoring(obj1);
```

In this example, we use a `WeakSet()` named `monitoringSet` to keep track of objects being monitored. When an object is added to `monitoringSet`, it is weakly referenced, allowing it to be garbage collected if there are no other strong references to it. This ensures that the monitoring system doesn't inadvertently prevent objects from being cleaned up by the garbage collector when they are no longer needed.

**Debouncing in JavaScript**

```
Debouncing in JavaScript is a technique that prevents a function from being called too frequently. It is often used to improve the performance of event handlers, such as those used for resizing or scrolling.

To debounce a function, you wrap it in a function that delays its execution until a certain amount of time has passed since the last time it was called. This delay prevents the function from being called multiple times in quick succession, which can improve performance and prevent unnecessary work.

Here is an example of a debounced function in JavaScript:
const debounce = (mainFunction, delay) => {
  // Declare a variable called 'timer' to store the timer ID
  let timer;

  // Return an anonymous function that takes in any number of arguments
  return function (...args) {
    // Clear the previous timer to prevent the execution of 'mainFunction'
    clearTimeout(timer);

    // Set a new timer that will execute 'mainFunction' after the specified delay
    timer = setTimeout(() => {
      mainFunction(...args);
    }, delay);
  };
};

// Define a function called 'searchData' that logs a message to the console
function searchData() {
  console.log("searchData executed");
}

// Create a new debounced version of the 'searchData' function with a delay of 3000 milliseconds (3 seconds)
const debouncedSearchData = debounce(searchData, 3000);

// Call the debounced version of 'searchData'
debouncedSearchData();

Debouncing can be a useful technique for improving the performance of event handlers. For example, if you have a function that updates the DOM in response to a scroll event, you can debounce it to prevent it from being called too frequently. This can improve the performance of your application and prevent unnecessary DOM updates.

```

---

```
const throttle = (callback, delay) => {
  let throttleTimeout = null;

  return (...args) => {
    // If the throttleTimeout is set, it means the callback is currently being throttled.
    if (throttleTimeout) {
      return;
    }

    // Set the throttleTimeout.
    throttleTimeout = setTimeout(() => {
      // Clear the throttleTimeout.
      throttleTimeout = null;

      // Call the callback.
      callback(...args);
    }, delay);
  };
};

// Example usage:

const handleClick = () => {
  console.log('Button clicked!');
};

// Throttle the handleClick function to only be called once every 1000 milliseconds.
const throttledHandleClick = throttle(handleClick, 1000);

// Add an event listener to the button.
document.querySelector('#button').addEventListener('click', throttledHandleClick);

In this example, the throttle function takes two arguments: the callback function to be throttled and the delay in milliseconds. The throttle function returns a new function that will only call the callback function once every delay milliseconds.
The throttledHandleClick function is then used as the event listener for the button's click event. This means that the handleClick function will only be called once every 1000 milliseconds, even if the button is clicked multiple times in a short period of time.
Throttling can be a useful technique for improving the performance and responsiveness of web applications. By throttling functions that are called frequently, you can reduce the amount of work that needs to be done and improve the overall user experience.

const throttle = (func, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
window.addEventListener("scroll", () => {
  throttle(handleScrollAnimation, 100);
});
```

**Generator function in JavaScript**

```
Generator functions can be used to implement a variety of algorithms, such as lazy evaluation, infinite sequences, and iterators. They are a powerful tool that can help you to write more efficient and concise code.

function* idMaker() {
  var index = 0;
  while (true) {
    yield index++;
  }
}

// Create a new generator object
const generator = idMaker();

// Get the first value from the generator
console.log(generator.next().value); // 0

// Get the second value from the generator
console.log(generator.next().value); // 1

// Get the third value from the generator
console.log(generator.next().value); // 2

This generator function will generate an infinite sequence of numbers, starting from 0. The yield keyword is used to pause the execution of the function and return the current value. The next() method can then be used to resume the execution of the function and get the next value.
```

**Asynchronous Operations with Generator Functions**

```
One of the main advantages of generator functions is their ability to handle asynchronous operations with ease. Traditionally, asynchronous tasks in JavaScript were managed using callbacks or promises, which could lead to callback hell or complex promise chains. Generator functions, in combination with yield and next(), offer a more intuitive way to write asynchronous code.

To perform asynchronous operations within a generator function, we need to use a helper function called yield with a promise. This helper function handles the resolution of the promise and resumes the generator function automatically.

fetching data asynchronously using generator functions:
function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Data fetched from ${url}`);
    }, 2000);
  });
}

function* fetchDataGenerator() {
  const data1 = yield fetchData('https://api.example.com/data1');
  console.log(data1);
  const data2 = yield fetchData('https://api.example.com/data2');
  console.log(data2);
  const data3 = yield fetchData('https://api.example.com/data3');
  console.log(data3);
}

const iterator = fetchDataGenerator();
const promise = iterator.next().value;
promise.then((data) => {
  iterator.next(data1).value.then((data) => {
    iterator.next(data2).value.then((data) => {
      iterator.next(data3);
    });
  });
});

In the above example, we have a generator function fetchDataGenerator() that yields promises obtained from the fetchData() function. Each yielded promise is resolved inside a then() block, and the resulting data is passed back to the generator function using next().
```

**Iterating Over Generator Functions**

```
Generator functions can also be used to create custom iterators. An iterator is an object that implements the iterator protocol, which requires the presence of a next() method that returns an object with the properties value and done.

Here’s an example of a generator function used as a custom iterator:
function* counter() {
  let count = 1;
  while (true) {
    yield count++;
  }
}

const iterator = counter();
console.log(iterator.next()); // Output: { value: 1, done: false }
console.log(iterator.next()); // Output: { value: 2, done: false }
console.log(iterator.next()); // Output: { value: 3, done: false }

Benefits of Generator Functions"
Simpler Asynchronous Code: Generator functions provide a cleaner and more sequential way to handle asynchronous operations compared to a traditional callback or promise-based approaches.

Lazy Evaluation: Generator functions allow for lazy evaluation of data streams. They produce values on demand, reducing memory usage and improving performance when dealing with large datasets.

Custom Iterators: Generator functions simplify the creation of custom iterators, making it easier to iterate over custom data structures or implement unique traversal patterns.

Stateful Execution: Generator functions retain their state between invocations, allowing for resumable computation and maintaining context across multiple function calls.
```

**event loop in javascript**

```
The event loop in JavaScript is a mechanism that allows the runtime to execute asynchronous code. It is a single-threaded loop that continuously checks for events to be processed. When an event is found, the event loop executes the associated callback function.

The event loop is what allows JavaScript to be responsive and interactive. Without the event loop, JavaScript would be a single-threaded language that could only execute one task at a time.

Here is a simplified example of how the event loop works:
// Create a function to handle a click event
function handleClick() {
  console.log('You clicked the button!');
}

// Add an event listener to the button
document.querySelector('button').addEventListener('click', handleClick);

// Start the event loop
while (true) {
  // Check for events to be processed
  const event = eventQueue.shift();

  // If there is an event, execute the associated callback function
  if (event) {
    event.callback();
  }
}
In this example, the handleClick() function is added as an event listener to the button. When the user clicks the button, the handleClick() function is added to the event queue. The event loop then checks for events to be processed. When it finds the handleClick() function in the event queue, it executes the function.
```

**event loop in javascript**

```
Let’s look at a simple example to illustrate how this works:
// First
console.log('Start');

// Second
setTimeout(() => {
  // Fifth: Callback function is not executed until after the delay.
  console.log('Timeout');
}, 2000);

// Third
console.log('End');

In the code above, the output will be:
Start
End
Timeout

Despite setTimeout being written in the code before console.log('End'), "End" is logged before "Timeout". This is because setTimeout is a Web API provided by the browser (not JavaScript itself). When the setTimeout function runs, the browser initiates a timer. Once this timer finishes, the callback function is put into a Task Queue. The JavaScript runtime checks this Task Queue and pushes the callback function into the call stack only when the call stack is empty.
```

**The Event Loop: A Closer Look**

```
let’s consider the following example:
// Define three functions
function foo() {
  console.log('Hello'); // 1: Logs 'Hello' immediately
  setTimeout(bar, 0); // 3: Starts a 0 second timer
  baz(); // 2: Calls the 'baz' function immediately
}

function bar() {
  console.log('World'); // 5: Logs 'World' after 'baz' finishes, despite the 0 second timer
}

function baz() {
  console.log('Goodbye'); // 4: Logs 'Goodbye' before 'bar' because 'bar' was offloaded to the browser
}

foo(); // Starts the 'foo' function

The output of this code will be ‘Hello’, ‘Goodbye’, ‘World’. Even though setTimeout is set to 0, it's placed on the Web API queue and is only executed once all functions in the call stack (the main thread) have been executed.
```

**Hoisting**

```
Hoisting is a mechanism in JavaScript that moves all variable and function declarations to the top of their scope before code execution. This means that functions and variables can be used before they are declared.

<!-- function hoisting -->
greet("John");

function greet(name) {
  console.log(`Hello, ${name}!`);
}

<!-- Example -->
// Function Declaration
console.log(foo); // [Function: foo]
foo(); // 'FOOOOO'
function foo() {
  console.log('FOOOOO');
}
console.log(foo); // [Function: foo]

// Function Expression
console.log(bar); // undefined
bar(); // Uncaught TypeError: bar is not a function
var bar = function () {
  console.log('BARRRR');
};
console.log(bar); // [Function: bar]


Only declarations are hoisted, not assignments. This means that the following code will not work:
console.log(name); // ReferenceError: name is not defined
var name = "John";

Variables declared with let or const are hoisted WITHOUT a default initialization. So accessing them before the line they were declared throws ReferenceError: Cannot access 'variable' before initialization.

But variables declared with var are hoisted WITH a default initialization of undefined. So accessing them before the line they were declared returns undefined.
```

**let vs var**

```
In JavaScript, both let and var are used to declare variables. The main difference between let and var is the scope of the variables they create: Variables declared by let are only available inside the block where they're defined, while variables declared by var are available throughout the function in which they're declared.

function greet() {
  var name = 'John';
  let age = 30;
  console.log(name); // 'John'
  console.log(age); // 30
}

greet();

console.log(name); // ReferenceError: name is not defined
console.log(age); // ReferenceError: age is not defined

Another difference between let and var is that variables declared with let cannot be redeclared in the same scope. This means that you cannot do something like this:
let name = 'John';
let name = 'Mary'; // Error: Identifier 'name' has already been declared

However, you can redeclare variables declared with var:
var name = 'John';
var name = 'Mary'; // No error
```

**Simple Rules to ‘this’ in Javascript**

```
1. If the new keyword is used when calling the function, this inside the function is a brand new object.
function ConstructorExample() {
    console.log(this);
    this.value = 10;
    console.log(this);
}
new ConstructorExample();
// -> {}
// -> { value: 10 }

2. If apply, call, or bind are used to call a function, this inside the function is the object that is passed in as the argument.
function fn() {
    console.log(this);
}
var obj = {
    value: 5
};
var boundFn = fn.bind(obj);
boundFn();     // -> { value: 5 }
fn.call(obj);  // -> { value: 5 }
fn.apply(obj); // -> { value: 5 }

3. If a function is called as a method — that is, if dot notation is used to invoke the function — this is the object that the function is a property of. In other words, when a dot is to the left of a function invocation, this is the object to the left of the dot.
var obj = {
    value: 5,
    printThis: function() {
        console.log(this);
    }
};
obj.printThis(); // -> { value: 5, printThis: ƒ }

4. If a function is invoked as a free function invocation, meaning it was invoked without any of the conditions present above, this is the global object.
function fn() {
    console.log(this);
}
// If called in browser:
fn(); // -> Window {stop: ƒ, open: ƒ, alert: ƒ, ...}

5. If the function is an ES2015 arrow function, it ignores all the rules above and receives the this value of its surrounding scope at the time it’s created. To determine this, go one line above the arrow function’s creation and see what the value of this is there. It will be the same in the arrow function.
const obj = {
    value: 'abc',
    createArrowFn: function() {
        return () => console.log(this);
    }
};
const arrowFn = obj.createArrowFn();
arrowFn();

var obj = {
    value: 'hi',
    printThis: function() {
        console.log(this);
    }
};
var print = obj.printThis;
obj.printThis(); // -> {value: "hi", printThis: ƒ}
print(); // -> Window {stop: ƒ, open: ƒ, alert: ƒ, ...}
```

**Polyfills for Array.flat**

```
if (!Array.prototype.myFlat) {
  Array.prototype.myFlat = function () {
    const output = [];
    function flattenArray(arr) {
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          flattenArray(arr[i]);
        } else {
          output.push(arr[i]);
        }
      }
      return output;
    }
    const returnValue = flattenArray(this);
    return returnValue;
  };
}

const inputArray = [0, 1, 2, [3, 4, [5, 6]], 7];
console.log(inputArray.myFlat());

```

**Polyfill for Promises**

```
function PromisePolyFill(executor) {
  let onResolve, onReject;
  let fulfilled = false,
    rejected = false,
    called = false,
    value;

  function resolve(v) {
    fulfilled = true;
    value = v;

    if (typeof onResolve === "function") {
      onResolve(value);
      called = true;
    }
  }

  function reject(reason) {
    rejected = true;
    value = reason;

    if (typeof onReject === "function") {
      onReject(value);
      called = true;
    }
  }

  this.then = function (callback) {
    onResolve = callback;

    if (fulfilled && !called) {
      called = true;
      onResolve(value);
    }
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;

    if (rejected && !called) {
      called = true;
      onReject(value);
    }
    return this;
  };

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

PromisePolyFill.resolve = (val) =>
  new PromisePolyFill(function executor(resolve, _reject) {
    resolve(val);
  });

PromisePolyFill.reject = (reason) =>
  new PromisePolyFill(function executor(resolve, reject) {
    reject(reason);
  });

PromisePolyFill.all = (promises) => {
  let fulfilledPromises = [],
    result = [];

  function executor(resolve, reject) {
    promises.forEach((promise, index) =>
      promise
        .then((val) => {
          fulfilledPromises.push(true);
          result[index] = val;

          if (fulfilledPromises.length === promises.length) {
            return resolve(result);
          }
        })
        .catch((error) => {
          return reject(error);
        })
    );
  }
  return new PromisePolyFill(executor);
};
```

**What is progressive rendering?**

```
Progressive rendering is the name given to techniques used to improve the performance of a webpage (in particular, improve perceived load time) to render content for display as quickly as possible.

Lazy loading of images
Images on the page are not loaded all at once. The image is only loaded when the user scrolls into/near the part of the page that displays the image.

<img loading="lazy"> is a modern way to instruct the browser to defer loading of images that are outside of the screen until the user scrolls near them.
Use JavaScript to watch the scroll position and load the image when the image is about to come on screen (by comparing the coordinates of the image with the scroll position).

Prioritizing visible content (or above-the-fold rendering)
Include only the minimum CSS/content/scripts necessary for the amount of page that would be rendered in the users browser first to display as quickly as possible, you can then use deferred scripts or listen for the DOMContentLoaded/load event to load in other resources and content.

Async HTML fragments
Flushing parts of the HTML to the browser as the page is constructed on the back end.
```

**What is the definition of a higher-order function?**

```
A higher-order function is any function that takes one or more functions as arguments, which it uses to operate on some data, and/or returns a function as a result. Higher-order functions are meant to abstract some operation that is performed repeatedly. The classic example of this is map, which takes an array and a function as arguments. map then uses this function to transform each item in the array, returning a new array with the transformed data. Other popular examples in JavaScript are forEach, filter, and reduce. A higher-order function doesn't just need to be manipulating arrays as there are many use cases for returning a function from another function. Function.prototype.bind is one such example in JavaScript.
```

**Micro and Macro task queue**

```
In JavaScript, the event loop is the mechanism that handles asynchronous programming. It consists of two queues: the macrotask queue and the microtask queue.
Macrotasks are tasks that are executed one at a time, in the order they are queued. They include things like setTimeout, setInterval, and event listeners.
Microtasks are tasks that have a higher priority than macrotasks. They are executed after each macrotask, but before the next macrotask is started. Microtasks include things like promises, process.nextTick(), and MutationObserver callbacks.
The reason for the two queues is to give microtasks a higher priority. This is because microtasks are often used for things like handling user input and updating the UI. It is important that these tasks are executed as soon as possible, so that the user experience is not affected.
Here is an example of how the two queues work:
setTimeout(() => {
  console.log('macrotask');
}, 0);

Promise.resolve().then(() => {
  console.log('microtask');
});

// microtask will be executed first
// macrotask will be executed second
```

**Convert 12 hours format to 24 hours format using javascript**
```
function convertTo24HourFormat(time12) {
  const [time, modifier] = time12.split(' ');
  let [hours, minutes] = time.split(':');
  
  if (hours === '12') {
    hours = '00';
  }
  
  if (modifier === 'PM') {
    hours = parseInt(hours, 10) + 12;
  }

  return `${hours}:${minutes}`;
}

// Example usage
const time12 = '01:30 PM';
const time24 = convertTo24HourFormat(time12);
console.log(time24); // Output: "13:30"
```

**Error codes in JavaScript**
```
SyntaxError: This error occurs when the JavaScript engine encounters syntax errors in the code, such as missing parentheses, brackets, or semicolons. The error code associated with SyntaxError is usually 1001.

ReferenceError: This error occurs when trying to access a variable or function that doesn't exist. The error code associated with ReferenceError is usually 1002.

TypeError: This error occurs when an operation is performed on a value of the wrong type. For example, trying to call a non-function as a function or accessing properties of undefined or null. The error code associated with TypeError is usually 1003.

InternalError: This error occurs when an internal error in the JavaScript engine is encountered. It's relatively rare and often indicates a serious issue with the engine itself. The error code associated with InternalError is usually 1007.
```

**JavaScript error codes**
```
4xx Client Error Codes:
400 Bad Request: The server cannot or will not process the request due to something that is perceived to be a client error 

401 Unauthorized: Similar to 403 Forbidden, but specifically indicates that authentication is required and has failed or has not yet been provided.

403 Forbidden: The client does not have access rights to the content, so the server is refusing to give the requested resource.

404 Not Found: The server cannot find the requested resource. This error can be caused by mistyped URLs, broken links, or the resource being moved or deleted.

429 Too Many Requests: The user has sent too many requests in a given amount of time. Intended for use with rate limiting schemes.

5xx Server Error Codes:
500 Internal Server Error: This status code indicates that something has gone wrong on the server's end, but the server cannot be more specific about what the exact problem is

501 Not Implemented: The server either does not recognize the request method or lacks the ability to fulfill the request.

502 Bad Gateway: The server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request.

503 Service Unavailable: This status code indicates that the server is currently unable to handle the request due to temporary overload or maintenance of the server.

504 Gateway Timeout: The server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request.

```

**Handle 10 parallel asynchronous calls without impacting the main thread**
```
// Function to perform an asynchronous operation (simulated with setTimeout)
function fetchData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Data from ${url}`);
        }, Math.random() * 2000); // Simulating network delay
    });
}

async function fetchParallel() {
    // Array of URLs to fetch data from
    const urls = [
        'https://example.com/data1',
        'https://example.com/data2',
        // Add more URLs here
    ];

    // Start all requests in parallel
    const promises = urls.map(url => fetchData(url));

    // Wait for all promises to resolve
    const results = await Promise.all(promises);

    // Handle results
    results.forEach(result => {
        console.log(result);
        // You can process each result here
    });
}

// Call the function to fetch data in parallel
fetchParallel();

```

**If one of three parallel promises fails, how would you handle printing the data from the remaining two promises**
```
async function fetchParallel() {
    const urls = [
        'https://example.com/data1',
        'https://example.com/data2',
        'https://example.com/data3', // Let's assume this URL fails
        // Add more URLs here
    ];

    const promises = urls.map(url => fetchData(url));

    try {
        const results = await Promise.all(promises);
        results.forEach(result => {
            console.log(result);
            // Process each successful result here
        });
    } catch (error) {
        console.error('An error occurred:', error);
        // If one promise fails, continue processing the successful results
        const successfulResults = error.results.filter(result => result !== undefined);
        successfulResults.forEach(result => {
            console.log(result);
            // Process each successful result here
        });
    }
}

```

Sure! Here are a few coding questions involving the `filter` method in JavaScript:

**Question 1: Filter Array of Numbers**
Given an array of numbers, write a function to filter out all numbers greater than a specified value.

```javascript
function filterNumbers(arr, threshold) {
    return arr.filter(num => num <= threshold);
}

const numbers = [10, 20, 30, 40, 50];
const threshold = 30;
console.log(filterNumbers(numbers, threshold)); // Output: [10, 20, 30]
```

**Question 2: Filter Array of Objects**
Given an array of objects representing people with their ages, write a function to filter out all people younger than a specified age.

```javascript
function filterPeopleByAge(people, minAge) {
    return people.filter(person => person.age >= minAge);
}

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 20 }
];
const minAge = 25;
console.log(filterPeopleByAge(people, minAge)); // Output: [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }]
```

**Question 3: Filter Array of Strings**
Given an array of strings, write a function to filter out all strings containing a specific substring.

```javascript
function filterStrings(arr, substring) {
    return arr.filter(str => str.includes(substring));
}

const strings = ['apple', 'banana', 'orange', 'kiwi', 'grape'];
const substring = 'an';
console.log(filterStrings(strings, substring)); // Output: ['banana', 'orange']
```

**Question 4: Filter Array of Arrays**
Given an array of arrays, write a function to filter out all arrays containing a specific element.

```javascript
function filterArrays(arr, element) {
    return arr.filter(subarr => subarr.includes(element));
}

const arrays = [[1, 2, 3], ['a', 'b', 'c'], [4, 5, 6]];
const element = 'a';
console.log(filterArrays(arrays, element)); // Output: [['a', 'b', 'c']]
```

These examples demonstrate various use cases of the `filter` method in JavaScript, allowing you to filter arrays based on different criteria.

Certainly! Here are some coding questions involving the `map` method in JavaScript:

**Question 1: Double Each Element**
Given an array of numbers, write a function to create a new array where each element is double the corresponding element in the original array.

```javascript
function doubleArray(arr) {
    return arr.map(num => num * 2);
}

const numbers = [1, 2, 3, 4, 5];
console.log(doubleArray(numbers)); // Output: [2, 4, 6, 8, 10]
```

**Question 2: Capitalize Each Word**
Given an array of strings representing words, write a function to create a new array where each word is capitalized.

```javascript
function capitalizeWords(arr) {
    return arr.map(word => word.charAt(0).toUpperCase() + word.slice(1));
}

const words = ['apple', 'banana', 'orange', 'kiwi', 'grape'];
console.log(capitalizeWords(words)); // Output: ['Apple', 'Banana', 'Orange', 'Kiwi', 'Grape']
```

**Question 3: Convert Temperatures**
Given an array of temperatures in Celsius, write a function to convert each temperature to Fahrenheit.

```javascript
function celsiusToFahrenheit(temperatures) {
    return temperatures.map(celsius => celsius * 9/5 + 32);
}

const celsiusTemperatures = [0, 10, 20, 30, 40];
console.log(celsiusToFahrenheit(celsiusTemperatures)); // Output: [32, 50, 68, 86, 104]
```

**Question 4: Extract Specific Property**
Given an array of objects, each representing a person with `name` and `age` properties, write a function to create a new array containing only the names of the people.

```javascript
function extractNames(people) {
    return people.map(person => person.name);
}

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 20 }
];
console.log(extractNames(people)); // Output: ['Alice', 'Bob', 'Charlie']
```

These examples demonstrate various use cases of the `map` method in JavaScript, allowing you to transform arrays based on different criteria.


Sure! Here are some coding questions involving the `reduce` method in JavaScript:

**Question 1: Sum of Array Elements**
Given an array of numbers, write a function to calculate the sum of all elements in the array using the `reduce` method.

```javascript
function sumArray(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // Output: 15
```

**Question 2: Flatten Array of Arrays**
Given an array of arrays, write a function to flatten the array using the `reduce` method.

```javascript
function flattenArray(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
}

const arrays = [[1, 2], [3, 4], [5, 6]];
console.log(flattenArray(arrays)); // Output: [1, 2, 3, 4, 5, 6]
```

**Question 3: Count Occurrences of Elements**
Given an array of elements, write a function to count the occurrences of each element and return an object with the counts using the `reduce` method.

```javascript
function countOccurrences(arr) {
    return arr.reduce((accumulator, currentValue) => {
        accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
        return accumulator;
    }, {});
}

const elements = ['apple', 'banana', 'apple', 'orange', 'banana', 'kiwi', 'banana'];
console.log(countOccurrences(elements)); // Output: { apple: 2, banana: 3, orange: 1, kiwi: 1 }
```

**Question 4: Group Elements by Property**
Given an array of objects, each representing a person with `name` and `age` properties, write a function to group the people by their age using the `reduce` method.

```javascript
function groupPeopleByAge(people) {
    return people.reduce((accumulator, currentValue) => {
        const age = currentValue.age;
        accumulator[age] = accumulator[age] || [];
        accumulator[age].push(currentValue.name);
        return accumulator;
    }, {});
}

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'David', age: 30 }
];
console.log(groupPeopleByAge(people));
// Output: { 25: ['Alice', 'Charlie'], 30: ['Bob', 'David'] }
```

These examples demonstrate various use cases of the `reduce` method in JavaScript, allowing you to aggregate and transform arrays based on different criteria.


**Coding on Closures**
Certainly! Here are some coding questions involving closures in JavaScript:

**Question 1: Counter using Closure**
Write a function that returns another function, which when invoked, increments and returns a counter value.

```javascript
function createCounter() {
    let counter = 0;
    return function() {
        return ++counter;
    };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3
```

**Question 2: Private Variable using Closure**
Write a function that returns an object with two methods `get()` and `set(value)`, which allow you to get and set a private variable.

```javascript
function createPrivateVariable() {
    let privateVar;

    return {
        get: function() {
            return privateVar;
        },
        set: function(value) {
            privateVar = value;
        }
    };
}

const pv = createPrivateVariable();
console.log(pv.get()); // Output: undefined
pv.set(10);
console.log(pv.get()); // Output: 10
pv.set(20);
console.log(pv.get()); // Output: 20
```

**Question 3: Function Factory**
Write a function that takes a parameter and returns a function which, when invoked, adds the parameter to the argument passed to the returned function.

```javascript
function addFactory(num) {
    return function(value) {
        return num + value;
    };
}

const addFive = addFactory(5);
console.log(addFive(10)); // Output: 15
console.log(addFive(20)); // Output: 25

const addTen = addFactory(10);
console.log(addTen(10)); // Output: 20
console.log(addTen(20)); // Output: 30
```

**Question 4: Memoization using Closure**
Write a function that memoizes the result of another function by storing the computed result in a closure.

```javascript
function memoize(func) {
    const cache = {};
    return function(arg) {
        if (cache[arg]) {
            return cache[arg];
        } else {
            const result = func(arg);
            cache[arg] = result;
            return result;
        }
    };
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(5)); // Output: 120
console.log(memoizedFactorial(5)); // Output: 120 (result fetched from cache)
```

These examples demonstrate how closures can be used to create private variables, implement function factories, and memoize function results in JavaScript.

**Implement a custom debounce function. And when you the click the button in a quick succession it should only update the state and localStorage at the last click**

Sure, here's a full example including HTML, CSS, and JavaScript:

HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Debounce Button Click</title>
  <style>
    button {
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <button id="myButton" onclick="handleClick()">Click Me</button>

  <script src="script.js"></script>
</body>
</html>
```

JavaScript (script.js):
```javascript
function debounce(func, delay) {
  let timer;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

const button = document.getElementById('myButton');
let clickCount = 0;

function handleClick() {
  clickCount++;
  console.log("Button clicked! Click count:", clickCount);
}

const debouncedHandleClick = debounce(() => {
  // Update localStorage with the final click count
  localStorage.setItem('clickCount', clickCount);
  console.log("Updating localStorage with click count:", clickCount);
}, 200);

button.addEventListener('click', debouncedHandleClick);
```

This example includes a button in HTML, some basic CSS for styling, and JavaScript for the debounce function, button click event handling, and updating `localStorage` at the last click.

**Create an iterator method that accepts an array and returns a new method that will return the next array value on each invocation.**
You can achieve the same functionality using a generator function, which simplifies the process of creating iterators in JavaScript. Here's how you can implement it using a generator function:

```javascript
function* createIterator(array) {
    for (let i = 0; i < array.length; i++) {
        yield array[i]; // Yield each element of the array
    }
}

// Example usage
const myArray = [1, 2, 3, 4, 5];
const iterator = createIterator(myArray);

console.log(iterator.next().value); // Output: 1
console.log(iterator.next().value); // Output: 2
console.log(iterator.next().value); // Output: 3
console.log(iterator.next().value); // Output: 4
console.log(iterator.next().value); // Output: 5
console.log(iterator.next().value); // Output: undefined
```

In this example:
- The `createIterator` function is defined as a generator function using the `function*` syntax.
- Inside the generator function, a `for` loop is used to iterate over each element of the array.
- The `yield` keyword is used to yield (return) each element of the array one by one as the generator is iterated.
- Each time the `next()` method is called on the iterator returned by `createIterator`, it returns an object with a `value` property containing the next value from the array until all elements have been iterated, after which it returns `{ value: undefined, done: true }`.


**Implement a function that retries a promise a specified number of times with a delay between each attempt.**

You can implement a function that retries a promise a specified number of times with a delay between each attempt. Here's how you can do it:

```javascript
function retryPromise(promiseFunc, retries, delay) {
    return new Promise((resolve, reject) => {
        function attempt(count) {
            promiseFunc()
                .then(resolve) // Resolve the promise if successful
                .catch(error => {
                    if (count < retries) {
                        // Retry the promise after the delay
                        setTimeout(() => attempt(count + 1), delay);
                    } else {
                        // Reject the promise if all retries are exhausted
                        reject(error);
                    }
                });
        }
        
        // Start the first attempt
        attempt(0);
    });
}

// Example usage:
const fetchUserData = () => {
    return new Promise((resolve, reject) => {
        // Simulate a network request
        setTimeout(() => {
            // Resolve the promise with mock user data
            resolve({ id: 1, name: 'John' });
        }, 1000);
    });
};

// Retry fetching user data up to 3 times with a delay of 500 milliseconds between each attempt
retryPromise(fetchUserData, 3, 500)
    .then(userData => {
        console.log('User data:', userData);
    })
    .catch(error => {
        console.error('Failed to fetch user data:', error);
    });
```

In this example:
- The `retryPromise` function takes three parameters: `promiseFunc` (a function that returns a promise), `retries` (the number of retries), and `delay` (the delay between each retry).
- Inside the function, we define an `attempt` function that recursively retries the promise up to the specified number of retries.
- If the promise is resolved successfully, we resolve the outer promise with the result.
- If an error occurs, we check if the number of retries has been exhausted. If not, we retry the promise after the specified delay. If all retries are exhausted, we reject the outer promise with the error.

**Sum of digits of number**
```
function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10
    num = Math.floor(num / 10)
  }
  return num
}

console.log(sumOfDigits(1287)) // 18 
```

**Sum of all natural number**
```
function sumOfNaturalNum(num) {
  let sum = 0;
  for(let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}

sumOfNaturalNum(5) //15
```

**Count number of digits in a number**
```
function countDigits(num) {
  let count = 0;
  do {
    count++;
    num = Math.floor(num / 10);
  } while (num > 0);
  return count;
}

console.log(countDigits(231));
```

**Palindrome of a number**
```
function isPalindrome(num) {
  let tempNum = num,
    reverseNum = 0;
  while (tempNum > 0) {
    const lastDigit = tempNum % 10;
    reverseNum = reverseNum * 10 + lastDigit;
    tempNum = Math.floor(tempNum / 10);
  }
  return num === reverseNum;
}

console.log(isPalindrome(23132)); //true

```

**Fibonacci series**
```
function fibonacci(num) {
  if (num < 2) {
    return 1;
  }
  let prev = 0,
    cur = 1,
    next;
  for (let i = 2; i <= num; i++) {
    next = prev + cur;
    prev = cur;
    cur = next;
  }
  return next;
}

console.log(fibonacci(6)); // 0 1 1 2 3 5 8

// OR

var fibonacci_series = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

 console.log(fibonacci_series(8)); 

-------------------------

function fibonacci(num) {
  if(n < 2) {
    return n
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}

```

**Find the missing number**
```
function findMissingNum(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }

  const sumSeq = num.length * ((num.length + 1) / 2) - sum;
  return sumSeq;
}

console.log(findMissingNum([6, 4, 3, 2, 1, 0])); // 5

```

**Find the sum of numbers**
```
function findSum(arr) {
  if(arr.length === 0) {
    return 0
  }
  return arr[arr.length - 1] + findSum(arr.slice(0, arr.length - 1))

  //OR
  const lastElement = arr.pop();
  return lastElement + findSum(arr);
}

```

To sort an array of strings ignoring case without using built-in methods like `sort()` or `toLowerCase()`, you can implement a custom sorting algorithm. One efficient approach is to use a technique similar to the bubble sort algorithm, but adapted to perform case-insensitive comparisons. Here’s how you can achieve this:

```javascript
// Example array of strings
const originalArray = ['Apple', 'banana', 'Orange', 'grape', 'kiwi'];

// Custom case-insensitive sort function without built-in methods
const customSort = (arr) => {
  // Clone the array to avoid mutation
  const clonedArray = arr.slice();

  // Custom case-insensitive comparison function
  const compareStrings = (str1, str2) => {
    const lowerStr1 = str1.toLowerCase();
    const lowerStr2 = str2.toLowerCase();
    if (lowerStr1 < lowerStr2) return -1;
    if (lowerStr1 > lowerStr2) return 1;
    return 0;
  };

  // Bubble sort algorithm adapted for case-insensitive comparison
  for (let i = 0; i < clonedArray.length - 1; i++) {
    for (let j = 0; j < clonedArray.length - 1 - i; j++) {
      if (compareStrings(clonedArray[j], clonedArray[j + 1]) > 0) {
        // Swap elements if they are in the wrong order
        const temp = clonedArray[j];
        clonedArray[j] = clonedArray[j + 1];
        clonedArray[j + 1] = temp;
      }
    }
  }

  return clonedArray;
};

// Sort the originalArray without mutating it and without built-in methods
const sortedArray = customSort(originalArray);

// Output the sorted array (originalArray remains unchanged)
console.log('Original Array:', originalArray);
console.log('Sorted Array:', sortedArray);
```

### Explanation:

1. **Custom Sort Function**: `customSort` takes an array `arr` as input and clones it (`const clonedArray = arr.slice()`) to avoid mutating the original array (`originalArray`).

2. **Custom Comparison Function**: `compareStrings` is defined within `customSort` to perform case-insensitive comparisons between two strings. It converts both strings to lowercase using `toLowerCase()` and then compares them using standard comparison operators.

3. **Bubble Sort Algorithm**: The sorting algorithm used here is a simple bubble sort adapted to use `compareStrings` for comparisons:
   - It iterates over the array multiple times (`for` loops).
   - For each pair of adjacent elements (`clonedArray[j]` and `clonedArray[j + 1]`), it uses `compareStrings` to determine if they are in the correct order.
   - If they are not, it swaps them (`const temp = clonedArray[j]; clonedArray[j] = clonedArray[j + 1]; clonedArray[j + 1] = temp;`).

4. **Immutable Approach**: The original array (`originalArray`) is never modified. Instead, the function returns a sorted copy (`clonedArray`).

5. **Output**: Finally, the sorted array (`sortedArray`) is logged to the console, demonstrating that `originalArray` remains unchanged.

This implementation ensures that the array is sorted in a case-insensitive manner without relying on built-in methods like `sort()` or `toLowerCase()`, providing a pure JavaScript approach to sorting strings.


**the sum of minimum and maximum elements of all sub-array of size B.**
A = [2, 5, -1, 7, -3, -1, -2] 
B = 4
 
Explanation:
Subarrays of size 4 are : 
    [2, 5, -1, 7],   min + max = -1 + 7 = 6
    [5, -1, 7, -3],  min + max = -3 + 7 = 4      
    [-1, 7, -3, -1], min + max = -3 + 7 = 4
    [7, -3, -1, -2], min + max = -3 + 7 = 4   
Sum of all min & max = 6 + 4 + 4 + 4 = 18

```
const arr = [2, 5, -1, 7, -3, -1, -2]; // 8 + 4 + 6 + 6

const diff = (arr, target) => {
  let total = 0;
  for (let i = 0; i <= arr.length - target; i++) {
    const subArr = arr.slice(i, i + target);
    total += findMinMax(subArr);
  }
  return total;
};

function findMinMax(sub) {
  let min = sub[0],
    max = sub[0];

  for (let i = 0; i < sub.length; i++) {
    if (max < sub[i]) {
      max = sub[i];
    }

    if (min > sub[i]) {
      min = sub[i];
    }
  }

  if (min < 0) {
    return max + min;
  }
  return max - min;
}

console.log(diff(arr, 4));
```

**Alternative sequence**
```
const seq = (arr) => {
  const subArr = [];
  for (let i = 0; i < arr.length; i++) {
    subArr.push(arr[i]);
    subArr.push(arr.pop());
  }
  return subArr;
};

const temp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(seq(temp)); //[1, 10, 2, 9, 3, 8, 4, 7, 5, 6]
```


Object manipulation in JavaScript involves various operations to create, modify, access, iterate, and delete properties of objects. Objects in JavaScript are fundamental data structures that store collections of key-value pairs. Here are some common operations and techniques for object manipulation:

### 1. Creating Objects

#### Using Object Literals

```javascript
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Anytown'
    }
};
```

#### Using Constructor Functions

```javascript
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

const person = new Person('John', 'Doe', 30);
```

#### Using ES6 Classes

```javascript
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

const person = new Person('John', 'Doe', 30);
```

### 2. Accessing and Modifying Properties

#### Dot Notation

```javascript
console.log(person.firstName);  // Output: John
person.age = 31;
```

#### Bracket Notation (useful for dynamic property access)

```javascript
const propName = 'lastName';
console.log(person[propName]);  // Output: Doe
```

### 3. Adding and Deleting Properties

#### Adding Properties

```javascript
person.email = 'john.doe@example.com';
```

#### Deleting Properties

```javascript
delete person.age;
```

### 4. Iterating Over Object Properties

#### Using `for...in` Loop

```javascript
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
```

#### Using `Object.keys()`

```javascript
Object.keys(person).forEach(key => {
    console.log(`${key}: ${person[key]}`);
});
```

### 5. Object Methods and Utilities

#### Object.keys()

```javascript
const keys = Object.keys(person);  // Returns an array of keys
```

#### Object.values()

```javascript
const values = Object.values(person);  // Returns an array of values
```

#### Object.entries()

```javascript
const entries = Object.entries(person);  // Returns an array of [key, value] pairs
```

#### Object.assign()

```javascript
const newObj = Object.assign({}, person);  // Creates a shallow copy of `person`
```

#### Spread Operator (ES6)

```javascript
const copiedPerson = { ...person };  // Creates a shallow copy of `person`
```

### 6. Nested Objects

```javascript
console.log(person.address.city);  // Output: Anytown
person.address.city = 'New City';
```

### 7. Checking for Property Existence

```javascript
if ('email' in person) {
    console.log('Email property exists');
}
```

### 8. Object Manipulation Best Practices

- **Immutability**: Prefer immutability where possible, especially in shared states or in functional programming contexts.
- **Deep Cloning**: Use deep cloning techniques (`JSON.parse(JSON.stringify(obj))`, libraries like Lodash `_.cloneDeep()`) for complex nested objects to avoid unintended mutation.
- **Consistency**: Maintain consistent naming conventions and object structures across your application to facilitate easier maintenance and debugging.

Object manipulation in JavaScript is versatile and foundational to many programming tasks, ranging from simple data storage to complex application state management in frameworks like React and Angular. Understanding these techniques is crucial for effective JavaScript development.

If you want to rearrange the positive and negative items in the array without changing their relative order (i.e., positive numbers stay in their original order, as do negative numbers), you can modify the approach slightly. Here’s how you can do it in JavaScript:

```javascript
function rearrangePositiveNegative(arr) {
    let positiveIndex = 0;

    // Move all negative numbers to the end
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
          [arr[i], arr[positiveIndex]] = [arr[positiveIndex], arr[i]];
          positiveIndex++;
        }
    }
    
    return arr;
}

// Example usage:
let arr = [4, -12, 2, 46, -20, -1];
let rearrangedArr = rearrangePositiveNegative(arr);
console.log(rearrangedArr); // [4,2,46,-12,-20,-1]
```

### Explanation:
- **Initialization**: `positiveIndex` starts at `0`, which tracks the position where the next positive number should be placed.
- **Loop through the array**: Iterate through each element of the array.
- **Condition**: If the current element `arr[i]` is negative (`arr[i] < 0`), swap it with the element at `arr[positiveIndex]` and then increment `positiveIndex`.
- **Result**: This will move all negative numbers to the end of the array while maintaining the relative order of positive numbers.

### Example Walkthrough:
Given the array `[4, -12, 2, 46, -20, -1]`:
- Start with `positiveIndex = 0`.
- Iterate through the array:
  - For `arr[1] = -12` (negative), swap with `arr[positiveIndex = 0] = 4`:
    - Resulting array: `[ -12, 4, 2, 46, -20, -1 ]`, `positiveIndex` increments to `1`.
  - For `arr[4] = -20` (negative), swap with `arr[positiveIndex = 1] = 2`:
    - Resulting array: `[ -12, -20, 2, 46, 4, -1 ]`, `positiveIndex` increments to `2`.
  - For `arr[5] = -1` (negative), swap with `arr[positiveIndex = 2] = 2`:
    - Resulting array: `[ -12, -20, -1, 46, 4, 2 ]`, `positiveIndex` increments to `3`.
- Final array: `[ -12, -20, -1, 46, 4, 2 ]`.

This approach effectively partitions the array into positive and negative numbers while preserving the relative order of positive numbers and moving all negative numbers to the end.

```
function formatNumber(number) {
  // Convert numbers greater than 1 million
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + "M";
  }
  // Convert numbers greater than 1000
  else if (number >= 1000) {
    return (number / 1000).toFixed(1) + "k";
  }
  // Return unchanged for smaller numbers
  else {
    return Math.round(number);
  }
}

// Examples
console.log(formatNumber(523.22)); // Outputs: "500"
console.log(formatNumber(1500)); // Outputs: "1.5k"
console.log(formatNumber(1200000)); // Outputs: "1.2M"
console.log(formatNumber(1234567)); // Outputs: "1.2M"
```