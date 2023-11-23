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

[1, 2, 3, 4, 5].reduce((acc, cur) => acc + cur, 10) //15

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
console.log(Object.is(1, 1)); //false
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

const flatten = (arr) => {
  const result = [];
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      result.push(...flatten(element))
    } else {
      result.push(element);
    }
  })
}
console.log(flatten(arr))
// [1, 2, 3, 4, 5, 6, 8, 9]
```
