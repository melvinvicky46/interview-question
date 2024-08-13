Certainly! Here are some simple interview questions related to linked lists, along with their solutions in JavaScript:

### Question 1: Implementing a Node for a Linked List

**Question:** Implement a Node class for a singly linked list in JavaScript.

**Solution:**
```javascript
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
```

### Question 2: Implementing a Linked List

**Question:** Implement a LinkedList class with methods to append nodes and print the list.

**Solution:**
```javascript
class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    printList() {
        let current = this.head;
        let output = 'Linked List:';
        while (current) {
            output += ` ${current.data} ->`;
            current = current.next;
        }
        output += ' null';
        console.log(output);
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Example usage:
let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.printList(); // Output: Linked List: 1 -> 2 -> 3 -> null
```

### Question 3: Finding the Length of a Linked List

**Question:** Write a method to find the length of a singly linked list.

**Solution:**
```javascript
class LinkedList {
    // ...

    length() {
        let current = this.head;
        let count = 0;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }
}

// Example usage:
let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
console.log(list.length()); // Output: 3
```

### Question 4: Searching for a Node in a Linked List

**Question:** Write a method to search for a specific value in a singly linked list.

**Solution:**
```javascript
class LinkedList {
    // ...

    search(value) {
        let current = this.head;
        while (current) {
            if (current.data === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
}

// Example usage:
let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
console.log(list.search(2)); // Output: true
console.log(list.search(4)); // Output: false
```

### Question 5: Removing a Node from a Linked List

**Question:** Write a method to remove a node with a specific value from a singly linked list.

**Solution:**
```javascript
class LinkedList {
    // ...

    remove(value) {
        if (!this.head) {
            return;
        }
        if (this.head.data === value) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next) {
            if (current.next.data === value) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }
}

// Example usage:
let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.remove(2);
list.printList(); // Output: Linked List: 1 -> 3 -> null
```

These questions cover fundamental operations and concepts related to singly linked lists in JavaScript, often asked in interviews to assess understanding of data structures and problem-solving skills.


Certainly! Here are some recursion-related interview questions implemented in JavaScript:

1. **Factorial Calculation:**

   ```javascript
   function factorial(n) {
       if (n === 0) {
           return 1;
       } else {
           return n * factorial(n - 1);
       }
   }

   console.log(factorial(5)); // Output: 120
   ```

2. **Fibonacci Sequence:**

   ```javascript
   function fibonacci(n) {
       if (n <= 1) {
           return n;
       } else {
           return fibonacci(n - 1) + fibonacci(n - 2);
       }
   }

   console.log(fibonacci(6)); // Output: 8 (Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8)
   ```

3. **Binary Search Tree Operations:**

   ```javascript
   class TreeNode {
       constructor(val) {
           this.val = val;
           this.left = null;
           this.right = null;
       }
   }

   function insert(root, val) {
       if (!root) {
           return new TreeNode(val);
       }
       if (val < root.val) {
           root.left = insert(root.left, val);
       } else {
           root.right = insert(root.right, val);
       }
       return root;
   }

   function search(root, val) {
       if (!root || root.val === val) {
           return root;
       }
       if (val < root.val) {
           return search(root.left, val);
       } else {
           return search(root.right, val);
       }
   }

   // Example usage:
   let root = null;
   root = insert(root, 5);
   insert(root, 3);
   insert(root, 8);
   insert(root, 1);
   insert(root, 4);
   insert(root, 7);

   console.log(search(root, 4)); // Output: TreeNode object with value 4
   console.log(search(root, 6)); // Output: null (6 is not found in the tree)
   ```

4. **Recursive Sum of Array Elements:**

   ```javascript
   function arraySum(arr, n) {
       if (n <= 0) {
           return 0;
       } else {
           return arraySum(arr, n - 1) + arr[n - 1];
       }
   }

   console.log(arraySum([1, 2, 3, 4, 5], 5)); // Output: 15 (Sum of elements)
   ```

5. **Tower of Hanoi:**

   ```javascript
   function towerOfHanoi(n, source, auxiliary, target) {
       if (n === 1) {
           console.log(`Move disk 1 from ${source} to ${target}`);
           return;
       }
       towerOfHanoi(n - 1, source, target, auxiliary);
       console.log(`Move disk ${n} from ${source} to ${target}`);
       towerOfHanoi(n - 1, auxiliary, source, target);
   }

   towerOfHanoi(3, 'A', 'B', 'C');
   // Output:
   // Move disk 1 from A to C
   // Move disk 2 from A to B
   // Move disk 1 from C to B
   // Move disk 3 from A to C
   // Move disk 1 from B to A
   // Move disk 2 from B to C
   // Move disk 1 from A to C
   ```

These examples showcase how recursion can be applied to solve various problems using JavaScript. Understanding these concepts and being able to implement them will be helpful for recursion-related interview questions.

Certainly! Here are a few more recursion-related interview questions implemented in JavaScript:

6. **Reverse a String using Recursion:**

   ```javascript
   function reverseString(str) {
       if (str === "") {
           return "";
       } else {
           return reverseString(str.substring(1)) + str.charAt(0);
       }
   }

   console.log(reverseString("hello")); // Output: "olleh"
   ```

   Explanation: This function recursively reverses a string by breaking down the string into smaller substrings until reaching the base case (an empty string), then concatenates the characters in reverse order.

7. **Check if a String is Palindrome using Recursion:**

   ```javascript
   function isPalindrome(str) {
       str = str.toLowerCase().replace(/[\W_]/g, ''); // Remove non-alphanumeric characters and convert to lowercase
       if (str.length <= 1) {
           return true;
       }
       if (str.charAt(0) !== str.charAt(str.length - 1)) {
           return false;
       } else {
           return isPalindrome(str.substring(1, str.length - 1));
       }
   }

   console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
   console.log(isPalindrome("racecar")); // Output: true
   console.log(isPalindrome("hello")); // Output: false
   ```

   Explanation: This function checks if a string is a palindrome recursively by comparing characters from the start and end of the string, progressively moving inward.

8. **Generate all Subsets of a Set using Recursion:**

   ```javascript
   function generateSubsets(set) {
       let subsets = [];
       function backtrack(start, currentSubset) {
           subsets.push(currentSubset.slice());
           for (let i = start; i < set.length; i++) {
               currentSubset.push(set[i]);
               backtrack(i + 1, currentSubset);
               currentSubset.pop();
           }
       }
       backtrack(0, []);
       return subsets;
   }

   console.log(generateSubsets([1, 2, 3]));
   // Output: [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]
   ```

   Explanation: This function generates all subsets of a given set using recursion and backtracking. It explores all combinations of elements by including or excluding each element in the subset.

9. **Count Paths in a Grid from Top-Left to Bottom-Right using Recursion:**

   ```javascript
   function countPaths(m, n) {
       if (m === 1 || n === 1) {
           return 1;
       } else {
           return countPaths(m - 1, n) + countPaths(m, n - 1);
       }
   }

   console.log(countPaths(3, 3)); // Output: 6 (Number of paths in a 3x3 grid from top-left to bottom-right)
   ```

   Explanation: This function calculates the number of paths from the top-left corner to the bottom-right corner of an `m x n` grid using recursion. Each step can either move right or down until reaching the destination.

These examples demonstrate different applications of recursion in solving problems, ranging from string manipulation to combinatorial problems and grid traversal. Understanding recursion and its application to these types of problems is essential for mastering recursion-related interview questions.


Certainly! Here are a few more recursion-related interview questions implemented in JavaScript:

10. **Binary Search using Recursion:**

    ```javascript
    function binarySearch(arr, target, left = 0, right = arr.length - 1) {
        if (left > right) {
            return -1;
        }
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] > target) {
            return binarySearch(arr, target, left, mid - 1);
        } else {
            return binarySearch(arr, target, mid + 1, right);
        }
    }

    let sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
    console.log(binarySearch(sortedArray, 7)); // Output: 3 (index of target value 7)
    console.log(binarySearch(sortedArray, 14)); // Output: -1 (target value 14 not found)
    ```

    Explanation: This function performs binary search on a sorted array using recursion. It divides the search interval in half each time and compares the middle element with the target value, narrowing down the search until the target is found or the interval is empty.

11. **Depth-First Search (DFS) on a Graph using Recursion:**

    ```javascript
    class Graph {
        constructor() {
            this.adjList = new Map();
        }

        addVertex(vertex) {
            if (!this.adjList.has(vertex)) {
                this.adjList.set(vertex, []);
            }
        }

        addEdge(v, w) {
            this.adjList.get(v).push(w);
            this.adjList.get(w).push(v); // For undirected graph
        }

        dfsUtil(vertex, visited) {
            visited[vertex] = true;
            console.log(vertex);
            let neighbors = this.adjList.get(vertex);
            for (let neighbor of neighbors) {
                if (!visited[neighbor]) {
                    this.dfsUtil(neighbor, visited);
                }
            }
        }

        dfs(startVertex) {
            let visited = {};
            this.dfsUtil(startVertex, visited);
        }
    }

    let graph = new Graph();
    let vertices = ['A', 'B', 'C', 'D', 'E', 'F'];
    for (let vertex of vertices) {
        graph.addVertex(vertex);
    }
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('B', 'E');
    graph.addEdge('C', 'F');

    graph.dfs('A');
    ```

    Explanation: This code implements Depth-First Search (DFS) on a graph using recursion. It starts from a specified vertex (`startVertex`) and explores as far as possible along each branch before backtracking. The `dfsUtil` method is used recursively to traverse all reachable vertices.

12. **Calculate Power using Recursion:**

    ```javascript
    function power(base, exponent) {
        if (exponent === 0) {
            return 1;
        } else {
            return base * power(base, exponent - 1);
        }
    }

    console.log(power(2, 3)); // Output: 8 (2^3 = 2 * 2 * 2)
    console.log(power(5, 0)); // Output: 1 (any number to the power of 0 is 1)
    ```

    Explanation: This function calculates the power of a number (`base`) raised to an exponent (`exponent`) using recursion. It breaks down the problem into smaller subproblems until reaching the base case (`exponent === 0`).

These examples further illustrate how recursion can be applied to solve various types of problems, including searching algorithms, graph traversal, mathematical computations, and more complex data structures. Understanding these concepts and practicing recursion is crucial for preparing for recursion-related interview questions.

Absolutely! Here are a few more recursion-related interview questions implemented in JavaScript:

13. **Subset Sum Problem using Recursion:**

    ```javascript
    function subsetSum(arr, target, index = 0, currentSum = 0) {
        if (currentSum === target) {
            return true;
        }
        if (currentSum > target || index >= arr.length) {
            return false;
        }
        // Include current element in subset
        if (subsetSum(arr, target, index + 1, currentSum + arr[index])) {
            return true;
        }
        // Exclude current element from subset
        return subsetSum(arr, target, index + 1, currentSum);
    }

    let array = [2, 4, 6, 8, 10];
    let sum = 14;
    console.log(subsetSum(array, sum)); // Output: true (Subset [4, 10] sums up to 14)
    ```

    Explanation: This function uses recursion to solve the subset sum problem. It tries to find if there is any subset of the array `arr` that sums up to `target`. It recursively explores including or excluding each element in the subset until it finds a valid subset or exhausts all possibilities.

14. **Generate Permutations of a String using Recursion:**

    ```javascript
    function generatePermutations(str) {
        let result = [];
        function permute(current, remaining) {
            if (remaining.length === 0) {
                result.push(current);
            } else {
                for (let i = 0; i < remaining.length; i++) {
                    let nextCurrent = current + remaining[i];
                    let nextRemaining = remaining.substring(0, i) + remaining.substring(i + 1);
                    permute(nextCurrent, nextRemaining);
                }
            }
        }
        permute('', str);
        return result;
    }

    console.log(generatePermutations('abc'));
    // Output: ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
    ```

    Explanation: This function recursively generates all permutations of a given string `str`. It builds permutations by choosing one character at a time and recursively permuting the remaining characters until all permutations are generated.

15. **Check Balanced Parentheses using Recursion:**

    ```javascript
    function isBalancedParentheses(str) {
        function checkBalance(chars, openCount) {
            if (chars.length === 0) {
                return openCount === 0;
            }
            if (openCount < 0) {
                return false;
            }
            if (chars[0] === '(') {
                return checkBalance(chars.slice(1), openCount + 1);
            } else if (chars[0] === ')') {
                return checkBalance(chars.slice(1), openCount - 1);
            } else {
                return checkBalance(chars.slice(1), openCount);
            }
        }
        return checkBalance(str, 0);
    }

    console.log(isBalancedParentheses('(())')); // Output: true
    console.log(isBalancedParentheses('(()')); // Output: false
    ```

    Explanation: This function checks if parentheses in a string `str` are balanced using recursion. It maintains a count of open parentheses and ensures that each closing parenthesis has a corresponding opening parenthesis before it.

16. **Count Number of Binary Search Trees (BSTs) with `n` Nodes using Recursion:**

    ```javascript
    function countBSTs(n) {
        if (n <= 1) {
            return 1;
        }
        let count = 0;
        for (let i = 1; i <= n; i++) {
            count += countBSTs(i - 1) * countBSTs(n - i);
        }
        return count;
    }

    console.log(countBSTs(3)); // Output: 5 (Number of unique BSTs with 1, 2, and 3 nodes)
    ```

    Explanation: This function calculates the number of unique Binary Search Trees (BSTs) that can be formed with `n` nodes using recursion. It considers every node as a root and recursively calculates the number of left and right subtrees.

These additional examples cover a broader range of recursion applications, including combinatorial problems, string manipulations, balance checking, and tree-related problems. Mastering these concepts will enhance your understanding and ability to tackle recursion-related interview questions effectively.

```
// Fibonacci Series
function fibonacci(n) {
  let fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8];

// Factorial
function factorial(n) {
  let result = 1;
  if (n <= 1) {
    return 1;
  }
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(5)); //120

// Prime Number
// Numbers which are greater than 1 and which is not divisible by 2 is a prime number
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % 2 === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(5)); //true

// Power of two, the number which are divisible by 2 and remainder is zero
function power(n) {
  if (n < 1) {
    return false;
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;

  //  OR
  // return (n & (n - 1)) === 0
}

console.log(power(4));
console.log(power(5));

// ---------------------------- Recursion -------------------

function recursiveFib(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFib(n - 1) + recursiveFib(n - 2);
}
console.log(recursiveFib(6)); // [0, 1, 1, 2, 3, 5, 8]

function recursiveFactorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}
console.log(recursiveFactorial(5)); // 120

// ---------Search algorithm linear/binary
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
// Big-O O(n)
console.log(linearSearch([2, 1, 4, 5], 4)); //3

<!-- Binary search works only on sorted array -->
function binarySearch(arr, target) {
  let leftIndex = 0,
    rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) {
      return middleIndex;
    }
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}
// BigO - O(logn)
console.log(binarySearch([2, 3, 4, 8, 9], 10)); //-1

<!-- Recursion binary search -->
function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}
function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[middleIndex]) {
    return middleIndex;
  }

  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
}
console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6], 3)); // -1

// -------------------- Sorting --------------

<!-- Bubble sort -->
function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

console.log(bubbleSort([8, 20, -2, 4, -6]));


<!-- Insertion Sort -->


```