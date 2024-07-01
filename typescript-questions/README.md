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

     type Action = 'create' | 'read' | 'update' | 'delete';
     ```

2. **Utility Types**:
   - TypeScript provides built-in utility types such as `Partial`, `Pick`, `Record`, `Exclude`, `Extract`, etc., which allow you to manipulate existing types to create new ones easily.
   - **Example**:
     ```typescript
     type PartialPerson = Partial<Person>; // Makes all properties of Person optional
     type PersonProps = Pick<Person, 'name' | 'age'>; // Selects specific properties from Person
     ```

3. **Literal Types and Union Types**:
   - Types can directly represent literal values (`string`, `number`, `boolean`) and can create union types and intersection types using `|` and `&` respectively.
   - **Example**:
     ```typescript
     type Status = 'pending' | 'approved' | 'rejected';
     type AdminStatus = 'admin' | 'superadmin';
     
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