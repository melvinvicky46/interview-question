**Object-Oriented Programming (OOP)**

```
OOP in JavaScript is based on the concept of prototypes. Prototypes are objects that serve as templates for other objects. When you create a new object, you can specify a prototype object, which will be used to initialize the new object's properties and methods.

The four pillars of OOP are:
Abstraction:
Abstraction is the act of hiding unnecessary details from the user. In OOP, abstraction is achieved by creating classes and objects. A class is a blueprint for creating objects, and an object is an instance of a class. Classes and objects allow you to hide the implementation details of your code from the user, and to focus on the functionality that the user needs.

Encapsulation:
Encapsulation is the act of bundling data and methods together into a single unit. In OOP, encapsulation is achieved by creating classes and objects. A class can contain both data and methods, and the data can be hidden from the user by making it private. This allows you to protect your data from being accidentally modified or corrupted.

Inheritance:
Inheritance is the act of creating a new class from an existing class. The new class inherits all of the properties and methods of the existing class, and can also add its own properties and methods. Inheritance allows you to reuse code and to create hierarchies of classes.

Polymorphism:
Polymorphism is the ability of an object to take on many forms. In OOP, polymorphism is achieved by using methods with the same name but different implementations. This allows you to write code that can work with different types of objects without having to know the specific type of object at compile time.
```

**abstraction in JavaScript**

```
// Creating an abstract class (constructor function)
function Vehicle() {
  this.vehicleName = vehicleName;
  if (this.constructor === Vehicle) {
    throw new Error("You cannot create an instance of Abstract Class");
  }
}

// Method (function) of our abstract class
Vehicle.prototype.display = function () {
  console.log("Vehicle Name: " + this.vehicleName);
};

// Creating a child class (constructor function)
function Car(vehicleName) {
  Vehicle.call(this, vehicleName);
}

// Inheriting the prototype from the Vehicle class
Car.prototype = Object.create(Vehicle.prototype);

// Overriding the display() method
Car.prototype.display = function () {
  console.log("Car Name: " + this.vehicleName);
};

// Creating an instance of the Car class
const car = new Car("Toyota");

// Calling the display() method
car.display();

In this example, the Vehicle class is an abstract class that cannot be instantiated and contains an abstract method display() which throws an error when called. The Car class inherits from the Vehicle class and implements the display() method providing a specific implementation.
Abstraction is a powerful concept in object-oriented programming that allows us to hide the implementation details of a class and expose only the necessary information to the user. This makes our code more reusable and maintainable.
```

**encapsulation in JavaScript**

```
class BankAccount {
  constructor(balance) {
    this._balance = balance;
  }

  get balance() {
    return this._balance;
  }

  set balance(newBalance) {
    if (newBalance < 0) {
      throw new Error('Balance cannot be negative');
    }

    this._balance = newBalance;
  }

  deposit(amount) {
    this._balance += amount;
  }

  withdraw(amount) {
    if (amount > this._balance) {
      throw new Error('Insufficient funds');
    }

    this._balance -= amount;
  }
}

const account = new BankAccount(100);

console.log(account.balance); // 100

account.deposit(50);

console.log(account.balance); // 150

account.withdraw(75);

console.log(account.balance); // 75

In this example, the BankAccount class encapsulates the balance property. This means that the balance property can only be accessed through the getBalance() and setBalance() methods. This helps to protect the balance property from being accidentally modified.

For example, if we try to set the balance property directly, we will get an error:
account.balance = -100; // Error: Balance cannot be negative

We can only modify the balance property through the deposit() and withdraw() methods. These methods validate the amount being deposited or withdrawn before modifying the balance property.
```

**inheritance in javascript**

```
Inheritance can be used to create reusable code. For example, the following code creates a Person class:

Inheritance in JavaScript is a feature that allows one object to inherit properties and methods from another object. This is achieved through the prototype chain, which is a linked list of objects that each object has access to.

Inheritance can be used to create reusable code. For example, the following code creates a Person class:
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

The Person class has a constructor that takes a name as a parameter and a greet() method that prints a greeting to the console.
The following code creates a new Person object called myPerson:
const myPerson = new Person('John Doe');

The myPerson object has access to the name property and the greet() method of the Person class.
The following code calls the greet() method on the myPerson object:
myPerson.greet();

Inheritance can be used to create hierarchies of classes. For example, the following code creates a Dog class that inherits from the Person class:
class Dog extends Person {
  constructor(name) {
    super(name);
  }

  bark() {
    console.log('Woof!');
  }
}

The Dog class has a constructor that takes a name as a parameter and a bark() method that prints a bark to the console.
The following code creates a new Dog object called myDog:
const myDog = new Dog('Fido');

The myDog object has access to the name property and the greet() method of the Person class, as well as the bark() method of the Dog class.
The following code calls the bark() method on the myDog object:
myDog.bark();
```

**polymorphism in JavaScript**

```
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log('Animal sound');
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  makeSound() {
    console.log('Woof!');
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  makeSound() {
    console.log('Meow!');
  }
}

const dog = new Dog('Fido');
const cat = new Cat('Felix');

dog.makeSound(); // Woof!
cat.makeSound(); // Meow!

In this example, the Animal class has a makeSound() method. The Dog and Cat classes extend the Animal class and override the makeSound() method to provide their own implementation.
When we call the makeSound() method on a Dog object, it will call the Dog class's implementation of the makeSound() method. When we call the makeSound() method on a Cat object, it will call the Cat class's implementation of the makeSound() method.
```

**Access Modifiers Types**

```
There are 3 types of access modifiers:

Public: The default access modifier. It means that the class member is accessible from anywhere.
Protected: It means that the class member is accessible from the class and its subclasses.
Private: It means that the class member is accessible only from the class.

<!-- Public Access Modifier -->
The public access modifier is the default access modifier for class members.
It means that the class member is accessible from anywhere.
Let's see an example in TS:
class Human {
    public name = 'Hasan';
    public age = 33;
}

Here we have a class called Human that has 2 public properties, name and age.
const human = new Human();

console.log(human.name); // Hasan
console.log(human.age); // 33

<!-- Protected Access Modifier -->
The protected access modifier is used to make a class member accessible from the class and its subclasses.

Let's see an example in TS:
class Human {
    protected name = 'Hasan';
    protected age = 33;
}

class Developer extends Human {
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}

Here we have a class called Human that has 2 protected properties, name and age.
And we have a class called Developer that extends Human.

Now let's see how to use it
const developer = new Developer();

developer.sayHello(); // Hello, my name is Hasan and I'm 33 years old.

console.log(developer.name); // Throws an error: Property 'name' is protected and only accessible within class 'Human' and its subclasses.

<!-- Private Access Modifier -->
The private access modifier is used to make a class member accessible only from the class.

class Human {
    private name = 'Hasan';
    private age = 33;

    sayHello() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}

It can not be accessed either from anywhere outside the class and even from the inherited classes.
// trying to access it from outside the class
const human = new Human();

human.sayHello(); // Hello, my name is Hasan and I'm 33 years old.

console.log(human.name); // Throws an error: Property 'name' is private and only accessible within class 'Human'.

// trying to access it from a subclass
class Developer extends Human {
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}

const developer = new Developer();

developer.sayHello(); // Throws an error: Property 'name' is private and only accessible within class 'Human'.

By default all members in JS class are public but starting from ECMAScript 2022, we can use private members in javascript classes by prefixing the class member with #.
class Human {
    #name = 'Hasan';
    #age = 33;

    sayHello() {
        console.log(`Hello, my name is ${this.#name} and I'm ${this.#age} years old.`);
    }
}
```

**Private modifier**

```
class Person {
    #name; // Private member

    constructor(name) {
        this.#name = name;
    }

    #sayHello() {
        console.log(`Hello, my name is ${this.#name}.`);
    }

    introduce() {
        // Accessing a private method
        this.#sayHello();
    }
}

const person = new Person('Bob');
// Accessing a public method that
// accesses a private method
person.introduce();

// Error: Private member is not accessible
console.log(person.#name);
```

**Prototypal inheritance works**

```
All JavaScript objects have a __proto__ property with the exception of objects created with Object.create(null), that is a reference to another object, which is called the object's "prototype". When a property is accessed on an object and if the property is not found on that object, the JavaScript engine looks at the object's __proto__, and the __proto__'s __proto__ and so on, until it finds the property defined on one of the __proto__s or until it reaches the end of the prototype chain. This behavior simulates classical inheritance

// Parent object constructor.
function Animal(name) {
  this.name = name;
}

// Add a method to the parent object's prototype.
Animal.prototype.makeSound = function () {
  console.log('The ' + this.constructor.name + ' makes a sound.');
};

// Child object constructor.
function Dog(name) {
  Animal.call(this, name); // Call the parent constructor.
}

// Set the child object's prototype to be the parent's prototype.
Object.setPrototypeOf(Dog.prototype, Animal.prototype);

// Add a method to the child object's prototype.
Dog.prototype.bark = function () {
  console.log('Woof!');
};

// Create a new instance of Dog.
const bolt = new Dog('Bolt');

// Call methods on the child object.
console.log(bolt.name); // "Bolt"
bolt.makeSound(); // "The Dog makes a sound."
bolt.bark(); // "Woof!"

```


Sure, let's illustrate abstraction in JavaScript using a similar example of a vehicle management system:

```javascript
// Define a Vehicle class as an abstraction
class Vehicle {
  // Constructor to initialize properties
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  // Abstract method to start the vehicle
  start() {
    throw new Error('Method start() must be implemented');
  }

  // Abstract method to stop the vehicle
  stop() {
    throw new Error('Method stop() must be implemented');
  }

  // Concrete method to display a message
  displayMessage(message) {
    console.log(message);
  }
}

// Define a Car class extending the Vehicle class
class Car extends Vehicle {
  // Implementation of the start method specific to a car
  start() {
    console.log(`Starting ${this.make} ${this.model}`);
  }

  // Implementation of the stop method specific to a car
  stop() {
    console.log(`Stopping ${this.make} ${this.model}`);
  }
}

// Define a Motorcycle class extending the Vehicle class
class Motorcycle extends Vehicle {
  // Implementation of the start method specific to a motorcycle
  start() {
    console.log(`Starting ${this.make} ${this.model}`);
  }

  // Implementation of the stop method specific to a motorcycle
  stop() {
    console.log(`Stopping ${this.make} ${this.model}`);
  }
}

// Create instances of Car and Motorcycle
const myCar = new Car('Toyota', 'Camry');
const myMotorcycle = new Motorcycle('Harley-Davidson', 'Sportster');

// Call methods on the instances without knowing their internal details
myCar.start();
myCar.stop();
myCar.displayMessage('This is my car');

myMotorcycle.start();
myMotorcycle.stop();
myMotorcycle.displayMessage('This is my motorcycle');
```

In this example:

- We define a `Vehicle` class as an abstraction, containing common behavior like `start()` and `stop()`.
- The `start()` and `stop()` methods are defined as abstract methods by throwing errors to indicate that they must be implemented by subclasses.
- We define concrete subclasses `Car` and `Motorcycle`, each providing their own implementation of `start()` and `stop()`.
- We create instances of `Car` and `Motorcycle` and call methods on them without knowing the specific details of their implementation, demonstrating abstraction.



Certainly! Encapsulation in JavaScript is often achieved through the use of closures and private variables. Here's an example demonstrating encapsulation using JavaScript:

```javascript
// Constructor function representing a Car
function Car(make, model) {
  // Private variables
  let _make = make;
  let _model = model;

  // Getter methods to access private variables
  this.getMake = function() {
    return _make;
  };

  this.getModel = function() {
    return _model;
  };

  // Setter methods to modify private variables
  this.setMake = function(make) {
    _make = make;
  };

  this.setModel = function(model) {
    _model = model;
  };
}

// Create an instance of Car
const myCar = new Car('Toyota', 'Camry');

// Access private variables using getter methods
console.log(myCar.getMake()); // Output: Toyota
console.log(myCar.getModel()); // Output: Camry

// Modify private variables using setter methods
myCar.setMake('Honda');
myCar.setModel('Accord');

console.log(myCar.getMake()); // Output: Honda
console.log(myCar.getModel()); // Output: Accord
```

In this example:

- We define a `Car` constructor function representing a car object.
- Inside the constructor function, we declare private variables `_make` and `_model`.
- We provide getter methods (`getMake()` and `getModel()`) to access the private variables from outside the constructor function.
- We provide setter methods (`setMake()` and `setModel()`) to modify the private variables from outside the constructor function.
- The private variables `_make` and `_model` are encapsulated within the `Car` object, and they cannot be accessed or modified directly from outside the object. Instead, they can only be accessed and modified through the getter and setter methods, providing encapsulation.



Certainly! Polymorphism in JavaScript can be demonstrated through method overriding. Here's an example:

```javascript
// Parent class
class Animal {
  // Method to make a sound
  makeSound() {
    console.log('Animal makes a sound');
  }
}

// Child class extending Animal
class Dog extends Animal {
  // Override makeSound method for Dog
  makeSound() {
    console.log('Dog barks');
  }
}

// Child class extending Animal
class Cat extends Animal {
  // Override makeSound method for Cat
  makeSound() {
    console.log('Cat meows');
  }
}

// Create instances of Dog and Cat
const dog = new Dog();
const cat = new Cat();

// Call makeSound method on each instance
dog.makeSound(); // Output: Dog barks
cat.makeSound(); // Output: Cat meows
```

In this example:

- We have a parent class `Animal` with a method `makeSound()` that prints a generic message.
- We have two child classes `Dog` and `Cat` that extend `Animal`.
- Each child class overrides the `makeSound()` method with its own implementation specific to that animal.
- When we call `makeSound()` on instances of `Dog` and `Cat`, they produce different sounds based on their specific implementations, demonstrating polymorphism.



Sure, here are some object-oriented programming (OOP) interview questions suitable for experienced candidates:

1. **What is the difference between abstraction and encapsulation?**
   Abstraction and encapsulation are two important concepts in object-oriented programming (OOP), but they serve different purposes.

**Abstraction** refers to the process of hiding the complex implementation details and showing only the essential features of an object to the outside world. It focuses on what an object does rather than how it does it. Abstraction allows us to model real-world entities as classes or objects in our software system, representing their essential characteristics and behaviors.

**Encapsulation**, on the other hand, is the bundling of data (attributes or properties) and methods (functions or behaviors) that operate on that data into a single unit, often referred to as a class. It involves hiding the internal state of an object and only exposing a controlled interface to interact with it. Encapsulation helps in ensuring data integrity and reducing the complexity of the system by providing a clear separation between the internal implementation and external usage.

Here's an example to illustrate the difference between abstraction and encapsulation:

```javascript
// Example demonstrating abstraction and encapsulation in JavaScript

// Abstraction: Shape class represents a geometric shape with a method to calculate area
class Shape {
  // Abstract method to calculate area (to be implemented by subclasses)
  calculateArea() {
    throw new Error('Method calculateArea() must be implemented');
  }
}

// Encapsulation: Circle class encapsulates the properties and methods related to a circle
class Circle extends Shape {
  constructor(radius) {
    super();
    // Encapsulated property: radius
    this._radius = radius;
  }

  // Encapsulation: Getter method for radius
  get radius() {
    return this._radius;
  }

  // Encapsulation: Setter method for radius
  set radius(radius) {
    if (radius > 0) {
      this._radius = radius;
    } else {
      console.error('Radius must be a positive number');
    }
  }

  // Abstraction: Implementation of calculateArea method for Circle
  calculateArea() {
    return Math.PI * Math.pow(this._radius, 2);
  }
}

// Create an instance of Circle
const myCircle = new Circle(5);

// Accessing properties using abstraction (method)
console.log('Area of the circle:', myCircle.calculateArea());

// Accessing properties using encapsulation (getter)
console.log('Radius of the circle:', myCircle.radius);

// Modifying properties using encapsulation (setter)
myCircle.radius = 10;
console.log('New radius of the circle:', myCircle.radius);
```

In this example:

- Abstraction is demonstrated by the `Shape` class, which defines a method `calculateArea()` without providing an implementation. Subclasses like `Circle` will implement this method based on their specific shape.
- Encapsulation is demonstrated by the `Circle` class, which encapsulates the property `_radius` and provides getter and setter methods (`radius`) to access and modify it. The internal state of the `Circle` object is hidden, and access is controlled through the encapsulated interface.

2. **Explain the SOLID principles and give examples of how you've applied them in your projects.**
   - SOLID principles are a set of five design principles for writing maintainable and scalable software:
     - Single Responsibility Principle (SRP)
     - Open/Closed Principle (OCP)
     - Liskov Substitution Principle (LSP)
     - Interface Segregation Principle (ISP)
     - Dependency Inversion Principle (DIP)
   - Candidates should be able to explain each principle and provide examples of how they've applied them to design and refactor their code.

3. **What is inheritance and how does it promote code reuse?**
   - Inheritance is a mechanism in OOP where a class (subclass or derived class) inherits properties and behavior from another class (superclass or base class). It promotes code reuse by allowing subclasses to inherit methods and attributes from their superclasses, reducing redundant code.

4. **What are abstract classes and interfaces, and when would you use each?**
   Abstract classes and interfaces are both tools used in object-oriented programming to define contracts for classes to implement, but they serve different purposes and have different use cases.

**Abstract Classes:**
- An abstract class is a class that cannot be instantiated on its own and may contain abstract methods (methods without a body) that must be implemented by its subclasses.
- Abstract classes can also contain concrete methods with implementations.
- Abstract classes can have constructors, member variables, and other methods just like any other class.
- Abstract classes are used when you have a base class that represents a generic concept, but it's not complete enough to be instantiated on its own.

Example of an abstract class in TypeScript:

```typescript
abstract class Shape {
    // Abstract method to calculate area
    abstract calculateArea(): number;

    // Concrete method to display the type of shape
    displayType(): void {
        console.log("This is a shape.");
    }
}

// Concrete subclass Rectangle extending Shape
class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}

// Concrete subclass Circle extending Shape
class Circle extends Shape {
    private radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

// Usage
const rectangle = new Rectangle(5, 10);
console.log("Area of rectangle:", rectangle.calculateArea());
rectangle.displayType(); // Output: This is a shape.

const circle = new Circle(5);
console.log("Area of circle:", circle.calculateArea());
circle.displayType(); // Output: This is a shape.
```

**Interfaces:**
- An interface is a contract that defines the properties and methods that a class must implement.
- Interfaces do not contain any implementations; they only define the structure that implementing classes must follow.
- A class can implement multiple interfaces.
- Interfaces are used when you want to define a contract that can be implemented by multiple unrelated classes.

Example of an interface in TypeScript:

```typescript
// Interface defining the contract for a Shape
interface Shape {
    // Method to calculate area
    calculateArea(): number;
}

// Class Rectangle implementing the Shape interface
class Rectangle implements Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}

// Class Circle implementing the Shape interface
class Circle implements Shape {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

// Usage
const rectangle = new Rectangle(5, 10);
console.log("Area of rectangle:", rectangle.calculateArea());

const circle = new Circle(5);
console.log("Area of circle:", circle.calculateArea());
```

**When to Use Each:**
- Use an abstract class when you want to provide a common base implementation for related classes, and you want to enforce that certain methods must be implemented by subclasses.
- Use an interface when you want to define a contract that can be implemented by multiple unrelated classes, or when you want to define the structure of an object without providing any implementation details.

In summary, abstract classes are used for inheritance and code reuse, while interfaces are used for defining contracts and achieving polymorphism.


5. **Explain method overloading and method overriding with examples.**
  Sure, let's explain method overloading and method overriding with examples in JavaScript:

**Method Overloading:**
Method overloading is the ability to define multiple methods with the same name but with different parameters or different numbers of parameters within the same class. JavaScript does not support method overloading directly like some other languages such as Java or C++, but you can achieve similar behavior using default parameter values or checking the number of arguments passed to the function.

```javascript
class Calculator {
  // Method overloading using default parameter values
  add(x, y = 0) {
    return x + y;
  }

  // Method overloading by checking the number of arguments
  multiply(x, y) {
    if (arguments.length === 1) {
      return x * x; // Square of a number
    } else if (arguments.length === 2) {
      return x * y;
    }
  }
}

const calc = new Calculator();

console.log(calc.add(5));        // Output: 5
console.log(calc.add(5, 3));     // Output: 8

console.log(calc.multiply(4));   // Output: 16 (square of 4)
console.log(calc.multiply(4, 3));// Output: 12
```

In this example, we have a `Calculator` class with two methods `add` and `multiply`. The `add` method is overloaded by providing a default parameter value for `y`, and the `multiply` method is overloaded by checking the number of arguments passed to the function.

**Method Overriding:**
Method overriding is the ability of a subclass to provide a specific implementation of a method that is already defined in its superclass. When a method in a subclass has the same name and signature (parameters) as a method in its superclass, it overrides the superclass's method.

```javascript
class Animal {
  // Method to make a sound
  makeSound() {
    return 'Animal makes a sound';
  }
}

class Dog extends Animal {
  // Override makeSound method for Dog
  makeSound() {
    return 'Dog barks';
  }
}

class Cat extends Animal {
  // Override makeSound method for Cat
  makeSound() {
    return 'Cat meows';
  }
}

const dog = new Dog();
console.log(dog.makeSound()); // Output: Dog barks

const cat = new Cat();
console.log(cat.makeSound()); // Output: Cat meows
```

In this example, we have a base class `Animal` with a method `makeSound`. The `Dog` and `Cat` subclasses override the `makeSound` method with their specific implementations. When we call `makeSound` on instances of `Dog` and `Cat`, they produce different sounds based on their specific implementations, demonstrating method overriding.


6. **What is polymorphism, and how does it relate to inheritance and interfaces?**
  Polymorphism is a fundamental concept in object-oriented programming (OOP) that allows objects of different classes to be treated as objects of a common superclass or interface. It enables a single interface to represent multiple underlying forms. There are two main types of polymorphism: compile-time polymorphism (method overloading) and runtime polymorphism (method overriding).

In the context of inheritance and interfaces:

1. **Polymorphism and Inheritance:**
   Polymorphism is closely related to inheritance. When a subclass inherits from a superclass, it inherits not only the superclass's attributes and methods but also its behavior. This allows objects of the subclass to be treated as objects of the superclass. Polymorphism allows us to write code that works with objects of the superclass but can also be used with objects of any subclass without modification.

2. **Polymorphism and Interfaces:**
   Polymorphism is also closely related to interfaces. Interfaces define a contract that classes must implement. Any class that implements an interface can be treated as an object of that interface type. This allows us to achieve polymorphism through interface types, where multiple classes can implement the same interface but provide different implementations for its methods.

Here's an example to illustrate polymorphism using inheritance and interfaces in TypeScript:

```typescript
// Interface representing a Shape
interface Shape {
    calculateArea(): number;
}

// Class Rectangle implementing the Shape interface
class Rectangle implements Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}

// Class Circle implementing the Shape interface
class Circle implements Shape {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

// Function to calculate total area of shapes using polymorphism
function getTotalArea(shapes: Shape[]): number {
    let totalArea = 0;
    for (const shape of shapes) {
        totalArea += shape.calculateArea();
    }
    return totalArea;
}

// Create instances of Rectangle and Circle
const rectangle = new Rectangle(5, 10);
const circle = new Circle(5);

// Array of shapes containing instances of Rectangle and Circle
const shapes: Shape[] = [rectangle, circle];

// Calculate total area of shapes using polymorphism
console.log("Total area of shapes:", getTotalArea(shapes)); // Output: Total area of shapes: 256.5309649148734
```

In this example:

- We have an `Shape` interface representing a common contract for shapes with a method `calculateArea`.
- The `Rectangle` and `Circle` classes implement the `Shape` interface and provide their own implementations of the `calculateArea` method.
- The `getTotalArea` function accepts an array of `Shape` objects, demonstrating polymorphism. It can calculate the total area of any shapes that implement the `Shape` interface, whether they are instances of `Rectangle` or `Circle`.
- This allows us to write code that works with objects of different classes (shapes) but can treat them uniformly as objects of the `Shape` interface, achieving polymorphism.


7. **What is composition over inheritance, and when would you prefer one over the other?**
   Composition over inheritance is a design principle in object-oriented programming that suggests favoring object composition (has-a relationship) over class inheritance (is-a relationship) to achieve code reuse and flexibility. It encourages building complex functionality by composing objects rather than inheriting from them. 

Here's an example to illustrate the difference between composition and inheritance and when you might prefer one over the other:

**Composition Example:**

```javascript
// Example of composition: Car has an Engine
class Engine {
    start() {
        console.log('Engine started');
    }

    stop() {
        console.log('Engine stopped');
    }
}

class Car {
    constructor() {
        this.engine = new Engine(); // Composition
    }

    start() {
        this.engine.start();
    }

    stop() {
        this.engine.stop();
    }
}

// Usage
const myCar = new Car();
myCar.start(); // Output: Engine started
myCar.stop();  // Output: Engine stopped
```

In this example, the `Car` class has an `Engine` object as a member, which it uses to start and stop the car. This is composition because `Car` is composed of an `Engine`. It allows the `Car` class to reuse the functionality of the `Engine` class without inheriting from it.

**Inheritance Example:**

```javascript
// Example of inheritance: Dog is an Animal
class Animal {
    makeSound() {
        console.log('Animal makes a sound');
    }
}

class Dog extends Animal {
    makeSound() {
        console.log('Dog barks');
    }
}

// Usage
const myDog = new Dog();
myDog.makeSound(); // Output: Dog barks
```

In this example, the `Dog` class inherits from the `Animal` class. This is inheritance because `Dog` is derived from `Animal`. It allows the `Dog` class to reuse the functionality of the `Animal` class.

**When to Prefer Composition over Inheritance:**

1. **Flexibility and Code Reusability:** Composition allows for more flexible code as it's not limited by the hierarchical nature of inheritance. It enables you to mix and match components easily, promoting code reuse and reducing dependencies.

2. **Avoiding Tight Coupling:** Inheritance creates a strong relationship between classes, leading to tight coupling, which can make the codebase harder to maintain. Composition, on the other hand, promotes loose coupling by allowing objects to interact through interfaces rather than inheritance hierarchies.

3. **Behavior Extension at Runtime:** With composition, you can dynamically change behavior at runtime by swapping out components. This is not as easily achievable with inheritance, where behavior is determined at compile time.

4. **Avoiding the Diamond Problem:** Inheritance hierarchies can lead to the diamond problem, where ambiguity arises when a subclass inherits from two classes that have a common ancestor. Composition avoids this problem by favoring a flatter class hierarchy.

In summary, while inheritance is useful in some cases, composition offers greater flexibility, code reusability, and maintainability, making it a preferred approach in many scenarios, especially in modern software design.


9. **Explain the concept of design patterns and give examples of commonly used design patterns.**
   - Design patterns are reusable solutions to common software design problems. Examples of commonly used design patterns include:
     - Singleton
     - Factory
     - Observer
     - Strategy
     - Decorator
   - Candidates should be able to explain the purpose of each pattern, when to use it, and provide examples of how they've applied them in their projects.

10. **What are the advantages and disadvantages of using multiple inheritance?**
    - Multiple inheritance allows a class to inherit from more than one superclass, enabling code reuse from multiple sources. However, it can lead to issues such as the diamond problem, where ambiguity arises when a subclass inherits from two classes that have a common ancestor. Candidates should discuss the pros and cons of multiple inheritance and how languages like C++ and Python handle these issues.

These questions cover a range of advanced OOP concepts and principles that experienced candidates should be familiar with in order to demonstrate their proficiency in object-oriented design and programming.