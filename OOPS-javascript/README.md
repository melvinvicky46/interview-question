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
