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
