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
