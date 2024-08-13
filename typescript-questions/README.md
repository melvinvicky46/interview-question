**Array type**

```
const strings: string[] = ["Melvin", "Vicky", "Reena"];

const numbers: number[] = [100, 200, 300];
```

**Object literals**

```
const user: {fName: string, age: number, id: number} = { fName: 'Melvin', age: 39, id: 17 };

```

**type inference withObject literals**

```
let user = {
  fname: 'Vicky',
  age: 39
}
```

**functions**

```
function addNumbers(a: number, b: number): number {
  return a + b;
}

function addNumbers(items: number[]): number {
  const total = items.filter((a) => a * 2);
  return total
}
```

**any type**

```
any type can be changed to any datatype
let age: any;

any type in arrays
let user: any[] = ["melvin", 21, false];

```

**function any type**

```
function addNumber(value: any): any {
  return value + 20
}

```

**tuple type**

```
let user: [string, number, boolean] = ["Melvin", 39, true];

<!-- function tuple -->
function useCord(): [number, number] {
  const lat = 100;
  const long = 50;
  return [lat, long];
}

const [lat, long] = useCord();

<!-- Named tuple -->
let user: [name: string, age: number] = ["peach", 28];
```

**tuple type**

```
<!-- interfaces -->
interface Author {
  name: string,
  avatar: string
}

const author: Author = {
  name: "Melvin",
  avatar: "Player"
}

<!-- as function argument types -->
function createPost(author: Author): void {
  console.log(author.name, author.avatar);
}
createPost(author)

<!-- with array -->
let posts: Author[] = []
post.push({ name: "Vicky", avatar: "Players"})
```

**type alias**

```
type Rgb = [number, number, number];

function getColor(): Rgb {
  return [10, 20, 30]
}

<!-- object literal -->
type User = {
  name: string,
  score: number
}

const users: User = {
  name: "Messi",
  score: 212
}
```

**union type**

```
let someId: number | strings
someId = 2

type Id = number | boolean
let anotherId: Id
anotherId = 20
anotherId = true
```

**Type guards**

```
It means before executing code need to check the type

type Id = number | string;

function swapId(id: Id) {
  if (typeof id === 'string') {

  }
}
```

**tagged Interface**

```
interface Person {
  type: 'person'.
  name: string,
  age: number,
  id: number
}

interface Company {
  type: 'company',
  name: string,
  address: string,
  id: number
}

function personDetails(value: Person | Company): void {
  if (value.type === "person") {
    // gets all the property related to person
  } else {
    // gets all the property related to company
  }
}
```

**type and interface**

```
type BirdType = {
  wings: 2;
};

interface BirdInterface {
  wings: 2;
}

const bird1: BirdType = { wings: 2 };
const bird2: BirdInterface = { wings: 2 };

 <!-- example -->
type Owl = { nocturnal: true } & BirdType;
let owl: Owl = { wings: 2, nocturnal: true };

type Robin = { nocturnal: false } & BirdInterface;
let chicken: Chicken = { wings: 2, colourful: false, flies: false };

// One major difference between type aliases vs interfaces
// are that interfaces are open and type aliases are closed.
// This means you can extend an interface by declaring it
// a second time.

interface Kitten {
  purrs: boolean;
}

interface Kitten {
  colour: string;
}

// In the other case a type cannot be changed outside of
// its declaration.

<!-- error in type -->
type Puppy = {
  color: string;
};

type Puppy = {
  toys: number;
};
```

**Type Assertions**

```
Sometimes you will have information about the type of a value that TypeScript can’t know about.
 if you’re using document.getElementById, TypeScript only knows that this will return some kind of HTMLElement, but you might know that your page will always have an HTMLCanvasElement with a given ID.

 const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
 const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
```

**Partial<Type>**

```
Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});
```

**Required<Type>**

```
Constructs a type consisting of all properties of Type set to required. The opposite of Partial
interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };

const obj2: Required<Props> = { a: 5 };
```

**unknown vs any vs never typescript**

```
any:
The any type is a catch-all type that can be assigned any value. It is the least restrictive type in TypeScript.

unknown:
The unknown type is a type that represents any value that is not known to TypeScript. It is more restrictive than the any type, but less restrictive than any other type.
if we want to perform any operation on unknown type then we have to add additional checks.
let name: string;
name = "Melvin";

if(name === "string") {
  console.log(name);
}


never:
The never type is a type that represents values that never occur. It is the most restrictive type in TypeScript.
never is used when we have exhausted all possible value and we don’t have anything to assign.



// any type
let x: any;
x = 1; // valid
x = "hello"; // valid
x = true; // valid

// unknown type
let y: unknown;
y = 1; // valid
y = "hello"; // valid
y = true; // valid
// y.toUpperCase(); // error: Object is of type 'unknown'.

// never type
function foo(): never {
  throw new Error("This function never returns");
}

// foo(); // error: Function never returns.
```

Type aliases and interfaces are both used to define custom types in TypeScript, but they have some differences in how they can be used and extended.

### Type Aliases:

1. **Simple Aliasing**: Type aliases allow you to create a new name for any type, including primitives, union types, tuples, and more complex types.

   ```typescript
   type Name = string;
   type Age = number;
   type Person = { name: Name; age: Age };
   ```

2. **Union Types**: Type aliases are flexible and can be used to create aliases for union types.

   ```typescript
   type Result = string | number;
   ```

3. **Intersection Types**: Type aliases can also be used to define intersection types.

   ```typescript
   type Action = { type: string } & { payload: any };
   ```

4. **Readability and Code Maintenance**: Type aliases can make code more readable and maintainable by providing descriptive names for complex types or for reusing types.

### Interfaces:

1. **Object Shape**: Interfaces are specifically used to define the structure of objects. They can describe the shape of an object by specifying properties and their types.

   ```typescript
   interface Person {
     name: string;
     age: number;
   }
   ```

2. **Extending**: Interfaces support extending other interfaces, allowing for the composition of multiple interfaces into a single one.

   ```typescript
   interface Shape {
     color: string;
   }

   interface Square extends Shape {
     sideLength: number;
   }
   ```

3. **Declaration Merging**: Interfaces support declaration merging, meaning you can spread the definition of an interface across multiple declarations in the same scope.

   ```typescript
   interface User {
     name: string;
   }

   interface User {
     age: number;
   }

   // This results in a single merged interface:
   // interface User {
   //     name: string;
   //     age: number;
   // }
   ```

4. **Implementing**: Interfaces can be implemented by classes, ensuring that the class adheres to the structure specified by the interface.

   ```typescript
   interface Printable {
     print(): void;
   }

   class Document implements Printable {
     print() {
       console.log("Printing document...");
     }
   }
   ```

### Choosing Between Type Aliases and Interfaces:

- **Use Type Aliases**:

  - For creating simple types, especially for primitive types, union types, and tuples.
  - When you want to create descriptive names for complex types.
  - For defining intersection types.

- **Use Interfaces**:
  - When defining the shape of objects.
  - For extending other interfaces.
  - When you need declaration merging or want to define contracts for classes.

In practice, the choice between type aliases and interfaces often comes down to personal preference and specific use cases. They can often be used interchangeably, but understanding their differences can help in making more informed design decisions.

Sure, let's create a simple example to illustrate the usage of namespaces in TypeScript:

Suppose we have a project where we want to organize functionality related to geometry calculations. We can create a namespace called `Geometry` to encapsulate various geometric shapes and operations:

```typescript
// geometry.ts

namespace Geometry {
  export interface Point {
    x: number;
    y: number;
  }

  export function distanceBetweenPoints(p1: Point, p2: Point): number {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  export class Circle {
    constructor(public center: Point, public radius: number) {}

    circumference(): number {
      return 2 * Math.PI * this.radius;
    }

    area(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
}
```

In this example:

- We define a namespace `Geometry` using the `namespace` keyword.
- Inside the namespace, we declare an interface `Point` representing a 2D point with `x` and `y` coordinates.
- We define a function `distanceBetweenPoints` that calculates the distance between two points.
- We define a class `Circle` representing a circle with properties for its center (a `Point`) and radius.
- The `Circle` class has methods to calculate its circumference and area.

Now, let's use this namespace in another file:

```typescript
// main.ts

/// <reference path="geometry.ts" />

const point1: Geometry.Point = { x: 0, y: 0 };
const point2: Geometry.Point = { x: 3, y: 4 };

const distance = Geometry.distanceBetweenPoints(point1, point2);
console.log("Distance between points:", distance);

const circle = new Geometry.Circle({ x: 0, y: 0 }, 5);
console.log("Circumference of the circle:", circle.circumference());
console.log("Area of the circle:", circle.area());
```

In `main.ts`:

- We reference the `geometry.ts` file using a triple-slash directive (`/// <reference path="geometry.ts" />`) to ensure that TypeScript understands the `Geometry` namespace.
- We use the `Geometry` namespace to create points, calculate the distance between them, and work with circles.

This example demonstrates how namespaces in TypeScript can be used to organize related functionality and prevent naming conflicts, making the codebase more modular and maintainable.

Certainly! Let's delve deeper into the details of interfaces and types in TypeScript, covering their capabilities, use cases, and nuances.

### Interfaces

1. **Definition and Structure**:

   - **Purpose**: Interfaces are primarily used to define the structure of objects. They specify the names and types of properties and methods that an object must have to conform to that interface.
   - **Example**:
     ```typescript
     interface Person {
       name: string;
       age: number;
       greet(): void;
     }
     ```
   - In this example, `Person` interface mandates that any object implementing it must have `name` (string), `age` (number), and `greet` (function returning void) properties.

2. **Extensibility**:

   - Interfaces support inheritance via extends keyword, allowing you to build on existing interfaces.
   - **Example**:
     ```typescript
     interface Employee extends Person {
       employeeId: number;
       department: string;
     }
     ```
   - Here, `Employee` extends `Person` interface and adds `employeeId` and `department` properties.

3. **Declaration Merging**:

   - TypeScript allows you to merge multiple declarations of the same interface into a single definition.
   - This is useful when working with third-party libraries or modularizing your codebase.
   - **Example**:

     ```typescript
     interface Shape {
       color: string;
     }

     interface Shape {
       width: number;
       height: number;
     }

     // Resulting merged interface
     // interface Shape {
     //    color: string;
     //    width: number;
     //    height: number;
     // }
     ```

4. **Compatibility**:

   - Interfaces can describe the shape that objects should have at runtime. This is useful for defining contracts that classes or objects must adhere to.

5. **Convention**:
   - Interfaces are commonly used for defining object shapes that are expected to be used as instances or classes.
   - They emphasize the structure of data and behavior that an object should have.

### Types

1. **Definition**:

   - **Versatility**: Types in TypeScript are more versatile than interfaces as they can define not only object shapes but also primitive types, union types, tuple types, and more complex structures.
   - **Example**:

     ```typescript
     type Point = {
       x: number;
       y: number;
     };

     type ID = string | number;

     type Action = "create" | "read" | "update" | "delete";
     ```

2. **Utility Types**:

   - TypeScript provides built-in utility types such as `Partial`, `Pick`, `Record`, `Exclude`, `Extract`, etc., which allow you to manipulate existing types to create new ones easily.
   - **Example**:
     ```typescript
     type PartialPerson = Partial<Person>; // Makes all properties of Person optional
     type PersonProps = Pick<Person, "name" | "age">; // Selects specific properties from Person
     ```

3. **Literal Types and Union Types**:

   - Types can directly represent literal values (`string`, `number`, `boolean`) and can create union types and intersection types using `|` and `&` respectively.
   - **Example**:

     ```typescript
     type Status = "pending" | "approved" | "rejected";
     type AdminStatus = "admin" | "superadmin";

     type UserRole = Status | AdminStatus;
     ```

4. **Aliasing**:

   - Types allow aliasing complex types, making code more readable and maintainable by giving meaningful names to complex structures.
   - **Example**:
     ```typescript
     type Employee = {
       name: string;
       age: number;
       position: string;
     };
     ```

5. **Conditional Types**:
   - TypeScript introduces conditional types (`extends` and `infer` keywords) which allow you to create types that depend on other types.
   - **Example**:
     ```typescript
     type NonNullable<T> = T extends null | undefined ? never : T;
     type MyNonNullString = NonNullable<string | null | undefined>; // Result: string
     ```

### Choosing Between Interface and Type

- **Use interfaces** when you need to define the structure of objects that will be used as instances or when you want to take advantage of declaration merging and interface inheritance.

- **Use types** when you need to define more complex types, manipulate existing types using utility types, or use literal types, union types, and intersection types extensively.

### Practical Considerations

- **Interchangeability**: Interfaces and types can often be used interchangeably in TypeScript for defining object shapes. The choice between them often comes down to personal preference or team conventions.
- **Tooling and IDE Support**: Interfaces are typically more visible in documentation and tools like IntelliSense, which might influence your choice depending on your project's needs.

In summary, both interfaces and types in TypeScript serve to define and shape your data structures and types. Understanding their capabilities and nuances helps you leverage TypeScript's type system effectively in your projects.

Certainly! Here are TypeScript interview questions for experienced developers, each accompanied by an example where applicable:

1.  **TypeScript Fundamentals:**

    - **Question:** Explain the key differences between TypeScript and JavaScript.

      - **Example:** TypeScript provides static typing through type annotations, interfaces, and advanced type system features, which JavaScript lacks. For instance:

        ```typescript
        // TypeScript example
        function greet(person: string): string {
          return `Hello, ${person}!`;
        }
        console.log(greet("Alice")); // Outputs: Hello, Alice!

        // Equivalent JavaScript (without TypeScript annotations)
        function greet(person) {
          return `Hello, ${person}!`;
        }
        console.log(greet("Alice")); // Outputs: Hello, Alice!
        ```

    - **Question:** How does TypeScript help with catching errors early in development compared to JavaScript?

      - **Example:** TypeScript catches type-related errors during compile-time, reducing runtime errors. For example:

        ```typescript
        // TypeScript example
        function add(a: number, b: number): number {
          return a + b;
        }
        console.log(add(2, "3")); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

        // JavaScript equivalent (no type checking)
        function add(a, b) {
          return a + b;
        }
        console.log(add(2, "3")); // Outputs: '23'
        ```

2.  **TypeScript Types and Type System:**

    - **Question:** Describe the various types available in TypeScript. Provide examples of when each type would be useful.

      - **Example:**

        ```typescript
        // Primitive types
        let name: string = "Alice";
        let age: number = 30;
        let isActive: boolean = true;

        // Union types
        let result: number | string;
        result = 10; // valid
        result = "Hello"; // valid

        // Array and tuple types
        let numbers: number[] = [1, 2, 3];
        let tuple: [string, number] = ["Alice", 30];

        // Object types and interfaces
        interface Person {
          name: string;
          age: number;
        }
        let person: Person = { name: "Alice", age: 30 };

        // Type alias
        type Point = {
          x: number;
          y: number;
        };
        let point: Point = { x: 10, y: 20 };
        ```

    - **Question:** Explain the difference between type annotations and type inference in TypeScript.

      - **Example:**

        ```typescript
        // Type annotation
        let num: number; // explicitly declaring 'num' as a number
        num = 10;

        // Type inference
        let str = "Hello"; // TypeScript infers 'str' as type 'string'
        // str = 10; // Error: Type 'number' is not assignable to type 'string'
        ```

3.  **Interfaces vs. Types:**

    - **Question:** When would you choose an interface over a type alias (type)?
      - **Example:**
        ```typescript
        // Interface example
        interface Shape {
          color: string;
          area(): number;
        }
        // Type alias example
        type Point = {
          x: number;
          y: number;
        };
        ```
    - **Question:** What are mapped types in TypeScript? Give an example of a mapped type and describe its use case. - **Example:**
      ```typescript
      // Mapped type example
      type ReadOnly<T> = {
      readonly [P in keyof T]: T[P];
      };

             // Usage
             interface Person {
                 name: string;
                 age: number;
             }
             let readOnlyPerson: ReadOnly<Person> = { name: 'Alice', age: 30 };
             // readOnlyPerson.name = 'Bob'; // Error: Cannot assign to 'name' because it is a read-only property
             ```

      Mapped types in TypeScript provide a way to create new types by transforming properties of an existing type. This is useful for scenarios where you need to apply a certain operation to each property of a type, such as making all properties optional, readonly, or applying any other modification.

### Basic Concept

Mapped types are defined using a combination of the `keyof` operator and the `in` keyword. Here's a simple example of how a mapped type works:

```typescript
type Person = {
  name: string;
  age: number;
};

// Define a mapped type to make all properties optional
type PartialPerson = {
  [K in keyof Person]?: Person[K];
};
```

In this example:

- `keyof Person` creates a union type of the keys of `Person` (i.e., `"name" | "age"`).
- `[K in keyof Person]` iterates over each key in `Person`.
- `Person[K]` refers to the type of each property (i.e., `string` for `"name"` and `number` for `"age"`).

Thus, `PartialPerson` will have the same properties as `Person`, but all of them are optional.

### Use Case Example

Consider a scenario where you have a type for an API response and you want to create a type where all properties are optional, making it useful for scenarios like partial updates.

```typescript
type ApiResponse = {
  userId: number;
  username: string;
  email: string;
};

// Create a mapped type to represent an optional version of ApiResponse
type PartialApiResponse = {
  [K in keyof ApiResponse]?: ApiResponse[K];
};

// Usage
const updateUser: PartialApiResponse = {
  email: "newemail@example.com",
};
```

In this use case:

- `PartialApiResponse` allows you to create an object where any subset of `ApiResponse` properties can be included.
- This is particularly useful for PATCH requests where you only need to provide a subset of the fields.

### Advanced Usage

Mapped types can also be combined with other utility types and TypeScript features. For example, you can use conditional types to create a mapped type that modifies the properties based on their types:

```typescript
type ReadOnlyPerson = {
  readonly [K in keyof Person]: Person[K];
};

// Usage
const person: ReadOnlyPerson = {
  name: "John",
  age: 30,
};

// person.name = "Doe"; // Error: Cannot assign to 'name' because it is a read-only property
```

In this example, `ReadOnlyPerson` makes all properties of `Person` read-only, preventing modification of any property after the object is created.

Mapped types are a powerful feature in TypeScript for creating flexible and reusable types that adapt based on the structure of existing types.

4. **Advanced TypeScript Features:**

   - **Question:** What are TypeScript decorators? Provide an example where decorators are used to enhance a class.

     - **Example:**

       ```typescript
       // Decorator example
       function Log(target: any, key: string, descriptor: PropertyDescriptor) {
         const originalMethod = descriptor.value;
         descriptor.value = function (...args: any[]) {
           console.log(
             `Calling ${key} with arguments: ${JSON.stringify(args)}`
           );
           const result = originalMethod.apply(this, args);
           console.log(`Method ${key} returned: ${JSON.stringify(result)}`);
           return result;
         };
         return descriptor;
       }

       // Usage
       class Calculator {
         @Log
         add(a: number, b: number): number {
           return a + b;
         }
       }

       const calc = new Calculator();
       calc.add(2, 3); // Outputs:
       // Calling add with arguments: [2,3]
       // Method add returned: 5
       ```

These examples demonstrate practical use cases and understanding of TypeScript's advanced features, which are crucial for experienced developers in TypeScript-focused roles.

Certainly! Here are more TypeScript interview questions for experienced developers, along with examples where applicable:

5. **Advanced TypeScript Features (Continued):**

   - **Question:** What are conditional types in TypeScript? Provide a practical example where conditional types would be beneficial.

     - **Example:**

       ```typescript
       // Conditional type example
       type NonNullable<T> = T extends null | undefined ? never : T;
       type MyNonNullString = NonNullable<string | null | undefined>; // Result: string

       // Usage
       let value: MyNonNullString;
       value = "Hello"; // valid
       value = null; // Error: Type 'null' is not assignable to type 'string'
       ```

   - **Question:** Explain the concept of keyof in TypeScript. Provide an example where keyof is used.

     - **Example:**

       ```typescript
       // keyof example
       interface Person {
         name: string;
         age: number;
         address: string;
       }

       type PersonKey = keyof Person; // Result: 'name' | 'age' | 'address'

       // Usage
       function getProperty(obj: Person, key: PersonKey) {
         return obj[key];
       }

       const person: Person = {
         name: "Alice",
         age: 30,
         address: "123 Main St",
       };

       console.log(getProperty(person, "name")); // Outputs: 'Alice'
       ```

6. **Module System and TypeScript:**

   - **Question:** How does TypeScript handle module systems, such as CommonJS and ES modules? Provide an example of importing and exporting modules in TypeScript.

     - **Example:**

       ```typescript
       // Exporting module
       // myModule.ts
       export interface User {
         name: string;
         age: number;
       }

       // Importing module
       // app.ts
       import { User } from "./myModule";

       let user: User = { name: "Alice", age: 30 };
       ```

7. **Error Handling and Debugging in TypeScript:**

   - **Question:** How can TypeScript improve error handling and debugging compared to JavaScript?

     - **Example:** TypeScript provides clearer error messages during compilation, especially related to type mismatches and potential null/undefined errors.

       ```typescript
       // Example of TypeScript catching a type error
       function add(a: number, b: number): number {
         return a + b;
       }

       console.log(add(2, "3")); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
       ```

8. **TypeScript Tooling and Integration:**

   - **Question:** Describe TypeScript's integration with popular development tools and frameworks (e.g., Visual Studio Code, Angular). How does TypeScript enhance development workflows in these environments?
     - **Example:** TypeScript provides extensive language support in Visual Studio Code, offering features like IntelliSense, automatic type checking, and refactoring tools.
       ```typescript
       // TypeScript in Visual Studio Code
       // TypeScript compiler automatically detects and highlights type errors in real-time.
       ```

9. **Performance Considerations in TypeScript:**

   - **Question:** How does TypeScript impact performance compared to JavaScript, especially in runtime environments?
     - **Example:** TypeScript itself does not impact runtime performance significantly as it compiles down to plain JavaScript. However, TypeScript's type system can help in writing optimized code by catching potential performance bottlenecks early in development.

10. **TypeScript in Large-Scale Applications:**

    - **Question:** Discuss TypeScript's role in developing and maintaining large-scale applications. How does TypeScript facilitate code scalability and maintainability?
      - **Example:** TypeScript's static typing ensures better code reliability and scalability by providing clear interfaces and type annotations, reducing the risk of runtime errors and enhancing code maintainability over time.

These questions and examples cover a range of topics that are crucial for experienced TypeScript developers, demonstrating a deep understanding of TypeScript's advanced features, module system, tooling, performance considerations, and its role in large-scale application development.

Certainly! Here are TypeScript interview questions for experienced developers, each accompanied by an example where applicable:

1. **TypeScript Fundamentals:**

   - **Question:** Explain the key differences between TypeScript and JavaScript.

     - **Example:** TypeScript provides static typing through type annotations, interfaces, and advanced type system features, which JavaScript lacks. For instance:

       ```typescript
       // TypeScript example
       function greet(person: string): string {
         return `Hello, ${person}!`;
       }
       console.log(greet("Alice")); // Outputs: Hello, Alice!

       // Equivalent JavaScript (without TypeScript annotations)
       function greet(person) {
         return `Hello, ${person}!`;
       }
       console.log(greet("Alice")); // Outputs: Hello, Alice!
       ```

   - **Question:** How does TypeScript help with catching errors early in development compared to JavaScript?

     - **Example:** TypeScript catches type-related errors during compile-time, reducing runtime errors. For example:

       ```typescript
       // TypeScript example
       function add(a: number, b: number): number {
         return a + b;
       }
       console.log(add(2, "3")); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

       // JavaScript equivalent (no type checking)
       function add(a, b) {
         return a + b;
       }
       console.log(add(2, "3")); // Outputs: '23'
       ```

2. **TypeScript Types and Type System:**

   - **Question:** Describe the various types available in TypeScript. Provide examples of when each type would be useful.

     - **Example:**

       ```typescript
       // Primitive types
       let name: string = "Alice";
       let age: number = 30;
       let isActive: boolean = true;

       // Union types
       let result: number | string;
       result = 10; // valid
       result = "Hello"; // valid

       // Array and tuple types
       let numbers: number[] = [1, 2, 3];
       let tuple: [string, number] = ["Alice", 30];

       // Object types and interfaces
       interface Person {
         name: string;
         age: number;
       }
       let person: Person = { name: "Alice", age: 30 };

       // Type alias
       type Point = {
         x: number;
         y: number;
       };
       let point: Point = { x: 10, y: 20 };
       ```

   - **Question:** Explain the difference between type annotations and type inference in TypeScript.

     - **Example:**

       ```typescript
       // Type annotation
       let num: number; // explicitly declaring 'num' as a number
       num = 10;

       // Type inference
       let str = "Hello"; // TypeScript infers 'str' as type 'string'
       // str = 10; // Error: Type 'number' is not assignable to type 'string'
       ```

3. **Interfaces vs. Types:**

   - **Question:** When would you choose an interface over a type alias (type)?
     - **Example:**
       ```typescript
       // Interface example
       interface Shape {
         color: string;
         area(): number;
       }
       // Type alias example
       type Point = {
         x: number;
         y: number;
       };
       ```
   - **Question:** What are mapped types in TypeScript? Give an example of a mapped type and describe its use case.

     - **Example:**

       ```typescript
       // Mapped type example
       type ReadOnly<T> = {
         readonly [P in keyof T]: T[P];
       };

       // Usage
       interface Person {
         name: string;
         age: number;
       }
       let readOnlyPerson: ReadOnly<Person> = { name: "Alice", age: 30 };
       // readOnlyPerson.name = 'Bob'; // Error: Cannot assign to 'name' because it is a read-only property
       ```

4. **Advanced TypeScript Features:**

   - **Question:** What are TypeScript decorators? Provide an example where decorators are used to enhance a class.

     - **Example:**

       ```typescript
       // Decorator example
       function Log(target: any, key: string, descriptor: PropertyDescriptor) {
         const originalMethod = descriptor.value;
         descriptor.value = function (...args: any[]) {
           console.log(
             `Calling ${key} with arguments: ${JSON.stringify(args)}`
           );
           const result = originalMethod.apply(this, args);
           console.log(`Method ${key} returned: ${JSON.stringify(result)}`);
           return result;
         };
         return descriptor;
       }

       // Usage
       class Calculator {
         @Log
         add(a: number, b: number): number {
           return a + b;
         }
       }

       const calc = new Calculator();
       calc.add(2, 3); // Outputs:
       // Calling add with arguments: [2,3]
       // Method add returned: 5
       ```

These examples demonstrate practical use cases and understanding of TypeScript's advanced features, which are crucial for experienced developers in TypeScript-focused roles.

**Implicit and Explicit type**

```
Implicit:
let foo = "foo" // typesccript implicitly convert foo to string type


Explicit:
let foo: string = 'foo' //We are explicitly mentioning the foo as string type
```

Mapped types in TypeScript allow you to create new types by transforming each property of an existing type in a specific way. They are particularly useful for creating new types that retain the shape of existing types but with modified properties.

Here’s a basic explanation and example of mapped types:

### Basic Example

Suppose you have an interface representing a person:

```typescript
interface Person {
  name: string;
  age: number;
}
```

Now, let's say you want to create a new type `PersonPartial` where all properties of `Person` become optional. You can achieve this using a mapped type:

```typescript
type PersonPartial = {
  [K in keyof Person]?: Person[K];
};
```

### Explanation:

- `keyof Person`: This produces a union type of all keys of the `Person` interface, i.e., `"name" | "age"`.
- `[K in keyof Person]`: This syntax iterates over each key `K` in the union type of keys (`"name" | "age"`).
- `?: Person[K]`: This specifies that each property `K` in `PersonPartial` will be optional and will have the same type as the corresponding property in `Person`.

### Example Usage:

```typescript
// Original Person object
const person: Person = {
  name: "Alice",
  age: 30,
};

// Creating a PersonPartial object
const partialPerson: PersonPartial = {
  name: "Bob",
};

console.log(partialPerson);
// Output: { name: 'Bob' }
```

### Another Example

Let's say you want to create a `ReadOnlyPerson` type where all properties of `Person` are read-only:

```typescript
type ReadOnlyPerson = {
  readonly [K in keyof Person]: Person[K];
};

// Usage
const readOnlyPerson: ReadOnlyPerson = {
  name: "Alice",
  age: 30,
};

// This will cause a TypeScript error because properties are readonly
readOnlyPerson.name = "Bob";
```

### Conclusion

Mapped types in TypeScript provide a way to create new types based on existing ones, applying transformations such as making properties optional, readonly, or even changing their types. They are powerful tools for enhancing type safety and reusability in your TypeScript codebase.

Certainly! Generics in TypeScript allow you to write reusable, type-safe functions and classes. They enable you to create components that can work over a variety of types rather than a single one.

Here's a simple example to illustrate generics in TypeScript:

```typescript
// Example of a generic function
function identity<T>(arg: T): T {
  return arg;
}

// Using the generic function with different types
let output1 = identity<string>("hello"); // output1 is of type string
let output2 = identity<number>(123); // output2 is of type number

console.log(output1); // Output: hello
console.log(output2); // Output: 123
```

In this example:

- `identity` is a generic function that takes a type parameter `T`.
- The function `identity<T>` returns an argument of type `T`.

When calling `identity<string>("hello")`, TypeScript infers that `T` is `string`, so `output1` is of type `string`. Similarly, when calling `identity<number>(123)`, TypeScript infers `T` as `number`, so `output2` is of type `number`.

Here's another example using a generic class:

```typescript
// Example of a generic class
class Box<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

// Using the generic class with different types
let box1 = new Box<string>("Hello");
let box2 = new Box<number>(100);

console.log(box1.getValue()); // Output: Hello
console.log(box2.getValue()); // Output: 100
```

In this example:

- `Box<T>` is a generic class that stores a value of type `T`.
- The constructor and `getValue` method work with the type `T`.

When creating `box1` with `new Box<string>("Hello")`, TypeScript infers `T` as `string`, so `box1` holds a string value "Hello". For `box2` with `new Box<number>(100)`, `T` is inferred as `number`, so `box2` holds the number value 100.

Generics in TypeScript are powerful because they provide flexibility and type safety, allowing you to write reusable code while maintaining type constraints.

Indexed access types in TypeScript allow you to access the type of a property on another type using an index type query. This is particularly useful when you have a type with a known set of keys and you want to create a new type that extracts or transforms properties based on those keys dynamically.

### Basic Example

Suppose you have an interface `Person`:

```typescript
interface Person {
  name: string;
  age: number;
  address: {
    city: string;
    postalCode: number;
  };
}
```

Now, if you want to define a type that represents the type of the `name` property of `Person`, you can use indexed access types:

```typescript
type PersonName = Person["name"]; // string
```

In this example:

- `Person['name']` accesses the type of the `name` property in the `Person` interface, which is `string`.

### Indexed Access Types with Union Types

You can also use indexed access types with union types to create new types that represent multiple properties:

```typescript
type PersonInfo = Person["name" | "age"]; // { name: string; age: number; }
```

Here, `Person['name' | 'age']` creates a new type that includes only the `name` and `age` properties from the `Person` interface.

### Indexed Access Types with Nested Properties

Indexed access types can also access nested properties within objects:

```typescript
type PostalCode = Person["address"]["postalCode"]; // number
```

Here, `Person['address']['postalCode']` accesses the type of the `postalCode` property within the `address` property of the `Person` interface.

### Conclusion

Indexed access types provide a flexible way to extract or manipulate types based on the properties of other types. They are especially useful when you need to work with complex nested types or when you want to dynamically access or transform properties of existing types. This feature enhances TypeScript's ability to model and enforce type relationships within your codebase.

Indexed access types in TypeScript allow you to access the type of a property on another type using an index type query. This is particularly useful when you have a type with a known set of keys and you want to create a new type that extracts or transforms properties based on those keys dynamically.

### Basic Example

Suppose you have an interface `Person`:

```typescript
interface Person {
  name: string;
  age: number;
  address: {
    city: string;
    postalCode: number;
  };
}
```

Now, if you want to define a type that represents the type of the `name` property of `Person`, you can use indexed access types:

```typescript
type PersonName = Person["name"]; // string
```

In this example:

- `Person['name']` accesses the type of the `name` property in the `Person` interface, which is `string`.

### Indexed Access Types with Union Types

You can also use indexed access types with union types to create new types that represent multiple properties:

```typescript
type PersonInfo = Person["name" | "age"]; // { name: string; age: number; }
```

Here, `Person['name' | 'age']` creates a new type that includes only the `name` and `age` properties from the `Person` interface.

### Indexed Access Types with Nested Properties

Indexed access types can also access nested properties within objects:

```typescript
type PostalCode = Person["address"]["postalCode"]; // number
```

Here, `Person['address']['postalCode']` accesses the type of the `postalCode` property within the `address` property of the `Person` interface.

### Conclusion

Indexed access types provide a flexible way to extract or manipulate types based on the properties of other types. They are especially useful when you need to work with complex nested types or when you want to dynamically access or transform properties of existing types. This feature enhances TypeScript's ability to model and enforce type relationships within your codebase.

In TypeScript, `Awaited<Type>` is a utility type that allows you to infer the type that a `Promise<Type>` resolves to. This is particularly useful when working with asynchronous functions that return promises, as it helps in automatically determining the resolved type without explicitly specifying it.

### Example Usage

Let's say you have a function that returns a promise:

```typescript
function delay(ms: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("done");
    }, ms);
  });
}
```

Now, if you want to infer the resolved type of the promise returned by `delay`, you can use `Awaited<Type>`:

```typescript
type ResolvedType = Awaited<ReturnType<typeof delay>>; // string
```

Here:

- `ReturnType<typeof delay>` gives us the return type of the `delay` function, which is `Promise<string>`.
- `Awaited<Type>` infers the type that the `Promise<Type>` resolves to, so `Awaited<Promise<string>>` gives us `string`.

### More Examples

Here are a few more examples to illustrate different scenarios:

1. **Promise with a complex type:**

   ```typescript
   interface UserData {
     name: string;
     age: number;
   }

   function fetchUserData(): Promise<UserData> {
     return new Promise((resolve) => {
       setTimeout(() => {
         resolve({ name: "Alice", age: 30 });
       }, 1000);
     });
   }

   type User = Awaited<ReturnType<typeof fetchUserData>>; // UserData
   ```

2. **Promise that resolves to an array:**

   ```typescript
   function fetchNumbers(): Promise<number[]> {
     return new Promise((resolve) => {
       setTimeout(() => {
         resolve([1, 2, 3, 4, 5]);
       }, 500);
     });
   }

   type NumbersArray = Awaited<ReturnType<typeof fetchNumbers>>; // number[]
   ```

### Explanation

- `Awaited<Type>` is a generic utility type provided by TypeScript.
- `Type` is typically a promise type (`Promise<SomeType>`), and `Awaited<Type>` infers `SomeType`, which is the type the promise resolves to.

### Notes

- If `Type` is not a promise type (`Promise<SomeType>`), TypeScript will throw an error.
- `Awaited<Type>` works with any promise type, including those that resolve to primitive types, objects, arrays, etc.
- It simplifies type inference when working with asynchronous code, ensuring type safety and clarity in your TypeScript projects.

In TypeScript, `Partial<Type>` is a utility type that constructs a type with all properties of `Type` set to optional. This means every property of the resulting type can either be of the original type or `undefined`. `Partial<Type>` is quite handy when you want to define or manipulate types where not all properties are required.

### Example Usage

Let's say you have an interface `Person`:

```typescript
interface Person {
  name: string;
  age: number;
  address: {
    city: string;
    postalCode: number;
  };
}
```

If you want to create a new type where all properties of `Person` are optional, you can use `Partial<Type>`:

```typescript
type PartialPerson = Partial<Person>;

// PartialPerson is equivalent to:
// {
//     name?: string | undefined;
//     age?: number | undefined;
//     address?: {
//         city?: string | undefined;
//         postalCode?: number | undefined;
//     } | undefined;
// }
```

### Usage Example:

```typescript
// Original Person object
const person: Person = {
  name: "Alice",
  age: 30,
  address: {
    city: "Wonderland",
    postalCode: 12345,
  },
};

// Creating a PartialPerson object
const partialPerson: PartialPerson = {
  name: "Alice",
};

console.log(partialPerson);
// Output: { name: 'Alice' }

// You can also update properties later
partialPerson.age = 31;

console.log(partialPerson);
// Output: { name: 'Alice', age: 31 }

// Accessing deeply nested properties
console.log(partialPerson.address?.city); // Output: undefined
```

### Explanation:

- `Partial<Type>` transforms every property in `Type` into an optional property by appending `?` to each property's type definition.
- In the `PartialPerson` type derived from `Partial<Person>`, all properties (`name`, `age`, `address`) are optional. This means you can create objects with any combination of these properties, making TypeScript's type system more flexible and accommodating for scenarios where not all properties are required.

### Benefits:

- **Flexibility:** Allows you to work with types where some properties might not be known or are optional.
- **Type Safety:** Ensures that properties are correctly marked as optional in TypeScript, providing better type checking and preventing potential errors when accessing optional properties.

Using `Partial<Type>` is particularly useful in scenarios where you want to progressively build or modify objects, especially when dealing with complex nested structures or optional parameters in functions.

In TypeScript, `Required<Type>` is a utility type that constructs a type with all properties of `Type` set to required. This means every property of the resulting type must be present and cannot be `undefined` or `null`.

### Example Usage

Let's continue using the `Person` interface from the previous examples:

```typescript
interface Person {
  name?: string;
  age?: number;
  address?: {
    city?: string;
    postalCode?: number;
  };
}
```

If you want to create a new type where all properties of `Person` are mandatory (required), you can use `Required<Type>`:

```typescript
type RequiredPerson = Required<Person>;

// RequiredPerson is equivalent to:
// {
//     name: string;
//     age: number;
//     address: {
//         city: string;
//         postalCode: number;
//     };
// }
```

### Usage Example:

```typescript
// Original PartialPerson object
const partialPerson: Partial<Person> = {
  name: "Alice",
};

// Creating a RequiredPerson object
const requiredPerson: RequiredPerson = {
  name: "Alice", // Error: Property 'name' is optional in type 'Partial<Person>'
};

// Correct way to create a RequiredPerson object
const correctRequiredPerson: RequiredPerson = {
  name: "Alice",
  age: 30,
  address: {
    city: "Wonderland",
    postalCode: 12345,
  },
};

console.log(correctRequiredPerson);
// Output: { name: 'Alice', age: 30, address: { city: 'Wonderland', postalCode: 12345 } }
```

### Explanation:

- `Required<Type>` ensures that every property in `Type` becomes mandatory by removing the `?` modifier from each property's type definition.
- In the `RequiredPerson` type derived from `Required<Person>`, all properties (`name`, `age`, `address`) must be specified. This guarantees that objects of type `RequiredPerson` will have all properties defined and not `undefined`.

### Benefits:

- **Type Safety:** Helps enforce that all required properties are present in objects of a certain type, reducing the chance of runtime errors related to missing properties.
- **Clear Intent:** Clearly communicates to developers that certain properties are mandatory when defining objects of a specific type, which improves code readability and maintainability.

### Considerations:

- If a property in `Person` was originally optional (`?`), using `Required<Type>` ensures it becomes mandatory. Ensure that all properties you want to make mandatory are intended to be so in your application logic.

Using `Required<Type>` is beneficial when you need to enforce that objects of a particular type have certain properties defined, especially in scenarios where consistency and completeness of data are crucial.

In TypeScript, `Readonly<Type>` is a utility type that constructs a new type by making all properties of `Type` readonly. This means once properties are assigned a value, they cannot be reassigned or modified thereafter.

### Example Usage

Let's define an interface `Person` and use `Readonly<Type>` to create an immutable version of it:

```typescript
interface Person {
  name: string;
  age: number;
}

// Creating a ReadonlyPerson type
type ReadonlyPerson = Readonly<Person>;

// ReadonlyPerson is equivalent to:
// {
//     readonly name: string;
//     readonly age: number;
// }
```

### Usage Example:

```typescript
// Original Person object
const person: Person = {
  name: "Alice",
  age: 30,
};

// Creating a ReadonlyPerson object
const readonlyPerson: ReadonlyPerson = {
  name: "Alice", // Readonly property
  age: 30, // Readonly property
};

console.log(readonlyPerson.name); // Output: Alice

// Trying to modify a readonly property will result in a TypeScript error
// readonlyPerson.name = "Bob";  // Error: Cannot assign to 'name' because it is a read-only property.
```

### Explanation:

- `Readonly<Type>` ensures that all properties of `Type` become readonly, meaning they cannot be reassigned or modified after their initial assignment.
- In the `ReadonlyPerson` type derived from `Readonly<Person>`, both `name` and `age` properties are readonly.

### Benefits:

- **Immutability:** Ensures that once an object is created with `Readonly<Type>`, its properties cannot be accidentally modified, enhancing code predictability and preventing bugs related to unintentional mutations.
- **Enhanced Type Safety:** Provides stronger guarantees about the state of objects in your TypeScript code, especially in scenarios where maintaining the integrity of data is critical.

### Considerations:

- While `Readonly<Type>` prevents direct modifications to properties, it only applies at the first level of properties. If your type includes nested objects or arrays, those nested properties may still be mutable unless explicitly marked as readonly.

### Nested Readonly Example:

```typescript
interface Configuration {
  readonly server: {
    readonly host: string;
    readonly port: number;
  };
  readonly timeout: number;
}

const config: Readonly<Configuration> = {
  server: {
    host: "localhost",
    port: 8080,
  },
  timeout: 5000,
};

console.log(config.server.host); // Output: localhost

// Trying to modify a nested readonly property will result in a TypeScript error
// config.server.host = "example.com";  // Error: Cannot assign to 'host' because it is a read-only property.
```

In this example, both `server` and its properties `host` and `port` are readonly, ensuring that neither the server object nor its properties can be mutated after initialization.

In TypeScript, `Record<Keys, Type>` is a utility type that represents an object type whose keys are of type `Keys` and whose values are of type `Type`. It is useful for defining and constraining the shape of objects where you know the keys in advance.

### Example Usage

Let's say you want to define a type for a dictionary where the keys are strings representing usernames, and the values are objects representing user information (`User` type):

```typescript
type User = {
  id: number;
  email: string;
};

// Define a dictionary where keys are usernames (strings) and values are of type User
type UserDatabase = Record<string, User>;

// Example usage of UserDatabase
const users: UserDatabase = {
  alice: { id: 1, email: "alice@example.com" },
  bob: { id: 2, email: "bob@example.com" },
  charlie: { id: 3, email: "charlie@example.com" },
};
```

### Explanation:

- `Record<Keys, Type>` creates a type where every property key (`Keys`) must be of a specific type (usually `string` or `number`), and every property value (`Type`) must adhere to a specified type (`User` in this example).
- In `UserDatabase`, the keys are strings (representing usernames) and the values are objects of type `User`, which include properties `id` and `email`.

### Usage in Other Scenarios:

1. **Mapping Keys to Values:**

   ```typescript
   // Map days of the week (keys) to their full names (values)
   type DaysOfWeek =
     | "Monday"
     | "Tuesday"
     | "Wednesday"
     | "Thursday"
     | "Friday"
     | "Saturday"
     | "Sunday";
   type DaysMap = Record<DaysOfWeek, string>;

   const days: DaysMap = {
     Monday: "Mon",
     Tuesday: "Tue",
     Wednesday: "Wed",
     Thursday: "Thu",
     Friday: "Fri",
     Saturday: "Sat",
     Sunday: "Sun",
   };
   ```

2. **Dynamic Key Generation:**

   ```typescript
   // Create a record type dynamically from an array of keys
   function createRecord<T>(keys: string[]): Record<string, T> {
     const record: Record<string, T> = {};
     keys.forEach((key) => {
       record[key] = {} as T; // Initialize with an empty object of type T
     });
     return record;
   }

   // Example usage
   const myRecord = createRecord<number>(["a", "b", "c"]);
   // myRecord is of type Record<string, number> with keys 'a', 'b', 'c' initialized to 0
   ```

### Benefits:

- **Type Safety:** Ensures that objects conform to a specific structure where keys and values are predefined and adhered to.
- **Predictability:** Clearly defines the shape and constraints of objects, making it easier to understand and maintain code.

### Considerations:

- `Record<Keys, Type>` is useful when you know the keys ahead of time and want to enforce type safety on their values. If your keys are dynamic or unknown, you may need to use a different approach such as using generics or intersection types depending on your use case.

In TypeScript, `Pick<Type, Keys>` is a utility type that constructs a new type by picking only the specified properties `Keys` from the type `Type`. It allows you to create a subtype based on selecting a subset of properties from an existing type.

### Example Usage

Let's say you have an interface `Person` with several properties:

```typescript
interface Person {
  name: string;
  age: number;
  address: string;
  phone: string;
}

// Using Pick to create a new type with only selected properties
type BasicInfo = Pick<Person, "name" | "age">;

// BasicInfo is equivalent to:
// {
//     name: string;
//     age: number;
// }
```

### Usage Example:

```typescript
// Original Person object
const person: Person = {
  name: "Alice",
  age: 30,
  address: "123 Wonderland St.",
  phone: "555-1234",
};

// Creating an object with only selected properties using Pick
const basicInfo: BasicInfo = {
  name: person.name,
  age: person.age,
};

console.log(basicInfo);
// Output: { name: 'Alice', age: 30 }
```

### Explanation:

- `Pick<Type, Keys>` allows you to select specific properties (`Keys`) from the type `Type` and create a new type that includes only those properties.
- In the example, `BasicInfo` is created by picking only the `'name'` and `'age'` properties from `Person`.

### Benefits:

- **Subset Creation:** Allows you to define subsets of larger types, making your code more precise and focused on specific requirements.
- **Type Safety:** Ensures that the resulting type (`BasicInfo` in this case) only includes properties that are explicitly picked, avoiding accidental inclusion of unrelated properties.

### Additional Example:

You can also use `Pick` with more complex types and combinations:

```typescript
interface Car {
  make: string;
  model: string;
  year: number;
  color: string;
}

// Using Pick to create a new type with selected properties
type CarInfo = Pick<Car, "make" | "model" | "year">;

const car: Car = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
  color: "Silver",
};

const carInfo: CarInfo = {
  make: car.make,
  model: car.model,
  year: car.year,
};

console.log(carInfo);
// Output: { make: 'Toyota', model: 'Camry', year: 2022 }
```

In this example, `CarInfo` is created by picking only `'make'`, `'model'`, and `'year'` properties from `Car`, which allows you to focus on essential information about a car without including unnecessary details.

Using `Pick<Type, Keys>` is a powerful technique in TypeScript for creating specialized types that precisely match the requirements of your application or function, ensuring clarity and maintainability in your codebase.

In TypeScript, `Omit<Type, Keys>` is a utility type that constructs a new type by omitting the specified properties `Keys` from the type `Type`. It essentially creates a subtype that excludes certain properties.

### Example Usage

Let's use the same `Person` interface from earlier and demonstrate how `Omit` works:

```typescript
interface Person {
  name: string;
  age: number;
  address: string;
  phone: string;
}

// Using Omit to create a new type excluding specified properties
type PersonalInfo = Omit<Person, "address" | "phone">;

// PersonalInfo is equivalent to:
// {
//     name: string;
//     age: number;
// }
```

### Usage Example:

```typescript
// Original Person object
const person: Person = {
  name: "Alice",
  age: 30,
  address: "123 Wonderland St.",
  phone: "555-1234",
};

// Creating an object with omitted properties using Omit
const personalInfo: PersonalInfo = {
  name: person.name,
  age: person.age,
};

console.log(personalInfo);
// Output: { name: 'Alice', age: 30 }
```

### Explanation:

- `Omit<Type, Keys>` allows you to exclude specific properties (`Keys`) from the type `Type` and create a new type that does not include those properties.
- In the example, `PersonalInfo` is created by omitting the `'address'` and `'phone'` properties from `Person`.

### Benefits:

- **Subset Creation:** Enables you to define types that are subsets of larger types by excluding properties that are not needed for a particular use case.
- **Type Safety:** Ensures that the resulting type (`PersonalInfo` in this case) does not include the omitted properties, preventing accidental access or modification.

### Additional Example:

Here's another example using a more complex type:

```typescript
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

// Using Omit to create a new type excluding specified properties
type ProductPreview = Omit<Product, "description">;

const product: Product = {
  id: 1,
  name: "Smartphone",
  price: 599,
  description: "A powerful smartphone with advanced features.",
};

const productPreview: ProductPreview = {
  id: product.id,
  name: product.name,
  price: product.price,
};

console.log(productPreview);
// Output: { id: 1, name: 'Smartphone', price: 599 }
```

In this example, `ProductPreview` is created by omitting the `'description'` property from `Product`, which allows you to create a simplified preview version of the product without including its full description.

Using `Omit<Type, Keys>` in TypeScript provides flexibility in defining types that match specific requirements, ensuring clarity and reducing the likelihood of errors by focusing only on essential properties.

In TypeScript, `Extract<Type, Union>` is a utility type that constructs a new type by extracting from `Union` those types that are assignable to `Type`. It essentially filters out types from a union type based on a condition provided by `Type`.

### Example Usage

Let's demonstrate `Extract<Type, Union>` with a practical example:

```typescript
type Animal = "Dog" | "Cat" | "Bird" | "Snake";

// Extracting types from Animal that are assignable to 'Cat' or 'Snake'
type Pet = Extract<Animal, "Cat" | "Snake">;

// Pet is equivalent to:
// 'Cat' | 'Snake'
```

### Usage Example:

```typescript
// Original list of animals
const animals: Animal[] = ["Dog", "Cat", "Bird", "Snake"];

// Extracting only 'Cat' and 'Snake' from animals using Extract
const pets: Pet[] = animals.filter((animal) =>
  ["Cat", "Snake"].includes(animal)
) as Pet[];

console.log(pets);
// Output: ['Cat', 'Snake']
```

### Explanation:

- `Extract<Type, Union>` allows you to extract from `Union` those types that are assignable to `Type`.
- In the example, `Pet` is created by extracting types from `Animal` that are assignable to `'Cat'` or `'Snake'`, resulting in a type that includes only these two values.

### Benefits:

- **Filtering Union Types:** Enables you to create types that are subsets of larger union types by filtering out types that do not meet specific criteria (`Type`).
- **Type Safety:** Ensures that the resulting type (`Pet` in this case) only includes types that are explicitly specified, reducing the chance of errors and providing clear intent in your code.

### Additional Example:

Here's another example using a more complex union type:

```typescript
type Role = "Admin" | "User" | "Manager" | "Guest";

// Extracting types from Role that are assignable to 'Admin' or 'Manager'
type AdminRoles = Extract<Role, "Admin" | "Manager">;

// AdminRoles is equivalent to:
// 'Admin' | 'Manager'
```

In this example, `AdminRoles` is created by extracting types from `Role` that are assignable to `'Admin'` or `'Manager'`, effectively creating a subtype of `Role` with only these two roles included.

Using `Extract<Type, Union>` is valuable in scenarios where you need to work with subsets of union types based on specific conditions or requirements, providing flexibility and improving type safety in TypeScript applications.

In TypeScript, type aliases are used to give a name to a type or a combination of types. They are static and cannot be extended in the traditional sense that classes can be extended. However, you can achieve similar functionality by using intersection (`&`) or union (`|`) types to compose new types based on existing type aliases.

### Extending Type Aliases with Intersection Types

You can create a new type alias that combines properties from existing type aliases using intersection (`&`) types.

```typescript
type Person = {
  name: string;
  age: number;
};

type Employee = {
  company: string;
};

type EmployeeWithPerson = Person & Employee;

const employee: EmployeeWithPerson = {
  name: "John Doe",
  age: 30,
  company: "Example Inc.",
};

console.log(employee); // Output: { name: 'John Doe', age: 30, company: 'Example Inc.' }
```

In this example, `EmployeeWithPerson` is defined as an intersection of `Person` and `Employee`. This allows `EmployeeWithPerson` to have all properties of both `Person` and `Employee`.

### Extending Type Aliases with Union Types

You can also create a new type alias that represents a union (`|`) of existing type aliases.

```typescript
type Status = "active" | "inactive";

type Employee = {
  id: number;
  name: string;
  status: Status;
};

type Manager = {
  teamSize: number;
};

type ManagerOrEmployee = Employee | Manager;

const person: ManagerOrEmployee = {
  id: 1,
  name: "Jane Doe",
  status: "active",
  teamSize: 5,
};

console.log(person); // Output: { id: 1, name: 'Jane Doe', status: 'active', teamSize: 5 }
```

Here, `ManagerOrEmployee` is a union of `Employee` and `Manager`, allowing `person` to be either an `Employee` or a `Manager`.

### Conditional Types for Flexible Type Composition

TypeScript also supports conditional types (`extends` clauses) within mapped types, allowing for more complex type composition based on conditions.

```typescript
type Animal = {
  legs: number;
  sound: string;
};

type Dog = Animal & {
  breed: string;
};

type Cat = Animal & {
  furColor: string;
};

type Pet<T extends Animal> = T extends Dog
  ? "dog"
  : T extends Cat
  ? "cat"
  : "unknown";

const myDog: Pet<Dog> = "dog";
const myCat: Pet<Cat> = "cat";
// const myHamster: Pet<{ legs: number }> = "unknown"; // Error: Type '{ legs: number; }' does not satisfy the constraint 'Animal'.

console.log(myDog); // Output: "dog"
console.log(myCat); // Output: "cat"
```

In this example, `Pet` is a conditional type that determines if a given type `T` extends `Dog`, `Cat`, or is `unknown`.

### Conclusion

While TypeScript type aliases themselves cannot be extended directly, you can achieve similar effects using intersection types, union types, and conditional types. These features allow you to compose new types from existing ones, providing flexibility and reusability in your type definitions.

In TypeScript, `unknown`, `any`, and `never` are distinct types that serve different purposes and provide different levels of type safety and expressiveness. Here's an explanation of each type along with examples:

### `unknown` Type

The `unknown` type represents a type-safe counterpart of `any`. It is used to denote a value whose type is not known at compile-time. You must perform some type of checking or assertion before you can perform operations with values of type `unknown`.

```typescript
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

// Type assertion or type checking required before assigning to a more specific type
if (typeof userInput === "string") {
  userName = userInput; // OK
}

// userName = userInput; // Error: Type 'unknown' is not assignable to type 'string'.
```

In this example, `userInput` is initially assigned a number and then a string. Before assigning `userInput` to `userName`, we check its type using `typeof` to ensure it's a string. This type check is necessary because TypeScript won't allow direct assignment from `unknown` to `string` without such a check.

### `any` Type

The `any` type in TypeScript is the most flexible type. It effectively disables TypeScript's type checking for a particular value, allowing it to be assigned to any other type without causing type errors.

```typescript
let anyValue: any;

anyValue = 5; // OK
anyValue = "Max"; // OK

let userName: string = anyValue; // No error, because anyValue is of type 'any'

// Allows access to any properties/methods without type checking
console.log(anyValue.someProperty); // No type-checking error
```

Here, `anyValue` can be assigned any type of value (`number`, `string`, `object`, etc.) without any type checking by TypeScript. This flexibility can be convenient but sacrifices type safety.

### `never` Type

The `never` type represents values that never occur. It is typically used to indicate that a function will not return normally (e.g., it throws an error or has an infinite loop).

```typescript
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    // Infinite loop
  }
}

function unreachableCode(): never {
  throw new Error("This function should not be called");
}

let neverVariable: never;

// Type of 'never' can be assigned to another type, but not vice versa
let num: number = neverVariable; // Error: Type 'never' is not assignable to type 'number'
```

In this example:

- `throwError` is a function that explicitly throws an error, never returning normally.
- `infiniteLoop` is a function that contains an infinite loop, also never returning normally.
- `unreachableCode` is a function that throws an error, indicating that its code should never be executed.

### Summary

- **`unknown`:** Type-safe counterpart of `any`, requires type checking/assertions before use.
- **`any`:** Disables TypeScript's type checking for a particular value, allowing it to be assigned to any type.
- **`never`:** Represents values that never occur, typically used for functions that never return normally.

Using `unknown` and `never` provides stronger type safety compared to `any`, as they allow TypeScript to catch more errors at compile-time. They help developers write more robust and predictable code by ensuring types are respected and errors are minimized.

The TypeScript compiler (`tsc`) is a command-line tool that converts TypeScript code (.ts files) into JavaScript code (.js files) that can be executed in any JavaScript runtime environment (like browsers or Node.js). It brings the benefits of TypeScript's static typing and modern ECMAScript features to JavaScript development.

### Installing TypeScript Compiler

First, you need to install TypeScript globally on your machine using npm (Node Package Manager):

```bash
npm install -g typescript
```

Once installed, you can use the `tsc` command to compile TypeScript files.

### Compiling TypeScript Code

Let's go through the details of using the TypeScript compiler with an example.

#### Example TypeScript File

Create a TypeScript file (`example.ts`) with some TypeScript code:

```typescript
// example.ts
function greeter(person: string) {
  return `Hello, ${person}!`;
}

let user = "Jane Doe";
console.log(greeter(user));
```

#### Compiling TypeScript Code

To compile `example.ts` into JavaScript, run the TypeScript compiler (`tsc`) on the command line:

```bash
tsc example.ts
```

This command compiles `example.ts` into `example.js` (along with `example.js.map` for source maps if configured). Here's what happens during compilation:

1. **Type Checking:** TypeScript checks for type errors and provides type annotations for variables and function parameters based on TypeScript's static type system.

2. **Transpilation:** TypeScript compiler transpiles TypeScript features (such as arrow functions, classes, async/await, etc.) into equivalent ECMAScript code that can run in any JavaScript environment.

3. **Output Files:** After compilation, you'll see the generated JavaScript (`example.js`) that corresponds to your TypeScript code.

### TypeScript Configuration (`tsconfig.json`)

To configure TypeScript compilation options for your project, you can use a `tsconfig.json` file. This file specifies compiler options, file inclusion/exclusion rules, and other settings.

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- **`target`:** Specifies the ECMAScript target version for the compiled JavaScript.
- **`module`:** Specifies the module system used in the generated JavaScript (e.g., `"commonjs"` for Node.js, `"ESNext"` for modern browsers).
- **`outDir`:** Specifies the output directory for compiled JavaScript files.
- **`strict`:** Enables strict type-checking options.
- **`esModuleInterop`:** Allows compatibility between CommonJS and ES module systems.

### Watching Files

You can also use `tsc` in watch mode to automatically recompile TypeScript files when they change:

```bash
tsc -w
```

### Using Compiled JavaScript

After compiling TypeScript to JavaScript, you can include or reference the generated `.js` files in your HTML or Node.js application just like any other JavaScript file:

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>TypeScript Example</title>
    <script src="dist/example.js" defer></script>
  </head>
  <body>
    <h1>TypeScript Example</h1>
  </body>
</html>
```

### Summary

The TypeScript compiler (`tsc`) is a powerful tool that converts TypeScript code into JavaScript, bringing TypeScript's static typing and modern ECMAScript features to JavaScript development. With configuration options and watch mode, `tsc` supports efficient development workflows and ensures TypeScript code is compatible with various JavaScript environments.
