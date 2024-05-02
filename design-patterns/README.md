**What Are Design Patterns?**

```
These patterns are not algorithms or specific implementations. They are more like ideas, opinions, and abstractions that can be
useful in certain situations to solve a particular kind of problem.

The specific implementation of the patterns may vary depending on many different factors. But what's important is the concepts
behind them, and how they might help us achieve a better solution for our problem.
```

**Design patterns**

```
<!-- Singleton pattern: -->
This pattern ensures that only one instance of a class is ever created. This can be useful for classes that manage global
resources, such as a database connection pool.

<!-- Observer pattern: -->
This pattern allows objects to be notified of changes to other objects. This can be useful for implementing things like user
interfaces that need to update when data changes.

<!-- Prototype pattern: -->
This pattern allows new objects to be created from existing objects without having to know the specific class of the existing
object. This can be useful for implementing things like object hierarchies.

<!-- Factory pattern: -->
This pattern allows objects to be created without having to specify the exact class of the object. This can be useful for
implementing things like object pools.

<!-- Command pattern: -->
This pattern allows requests to be encapsulated as objects. This can be useful for implementing things like undo/redo
functionality.

<!-- Module pattern: -->
This pattern allows code to be encapsulated into modules. This can be useful for organizing code and making it easier to reuse.

<!-- Decorator pattern: -->
This pattern allows objects to be extended without modifying their class. This can be useful for adding new functionality to
existing objects.
```

**Creational Design Patterns**

```
<!-- Singleton Pattern -->
Singleton is a design pattern that ensures that a class has only one immutable instance. Said simply, the singleton pattern
consists of an object that can't be copied or modified. It's often useful when we want to have some immutable single point of
truth for our application.

Let's say for example we want to have all of our app's configuration in a single object. And we want to disallow any duplication
or modification of that object.

Two ways of implementing this pattern are using object literals and classes:
Using an object literal:
const Config = {
  start: () => console.log('App has started'),
  update: () => console.log('App has updated'),
}

// We freeze the object to prevent new properties being added and existing properties being modified or removed
Object.freeze(Config)

Config.start() // "App has started"
Config.update() // "App has updated"

Config.name = "Robert" // We try to add a new key
console.log(Config) // And verify it doesn't work: { start: [Function: start], update: [Function: update] }

Using classes:
class Config {
    constructor() {}
    start(){ console.log('App has started') }
    update(){ console.log('App has updated') }
}

const instance = new Config()
Object.freeze(instance)

<!-- Factory Method Pattern -->
The Factory method pattern provides an interface for creating objects that can be modified after creation. The cool thing about
this is that the logic for creating our objects is centralized in a single place, simplifying and better organizing our code.

This pattern is used a lot and can also be implemented in two different ways, via classes or factory functions (functions that
return an object).
Using classes:
class Alien {
    constructor (name, phrase) {
        this.name = name
        this.phrase = phrase
        this.species = "alien"
    }
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
    sayPhrase = () => console.log(this.phrase)
}

const alien1 = new Alien("Ali", "I'm Ali the alien!")
console.log(alien1.name) // output: "Ali"

Using a factory function:
function Alien(name, phrase) {
    this.name = name
    this.phrase = phrase
    this.species = "alien"
}

Alien.prototype.fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
Alien.prototype.sayPhrase = () => console.log(this.phrase)

const alien1 = new Alien("Ali", "I'm Ali the alien!")

console.log(alien1.name) // output "Ali"
console.log(alien1.phrase) // output "I'm Ali the alien!"
alien1.fly() // output "Zzzzzziiiiiinnnnnggggg"

<!-- Builder Pattern -->
The Builder pattern is used to create objects in "steps". Normally we will have functions or methods that add certain properties
or methods to our object.

The cool thing about this pattern is that we separate the creation of properties and methods into different entities.
// We declare our objects
const bug1 = {
    name: "Buggy McFly",
    phrase: "Your debugger doesn't work with me!"
}

const bug2 = {
    name: "Martiniano Buggland",
    phrase: "Can't touch this! Na na na na..."
}

// These functions take an object as parameter and add a method to them
const addFlyingAbility = obj => {
    obj.fly = () => console.log(`Now ${obj.name} can fly!`)
}

const addSpeechAbility = obj => {
    obj.saySmthg = () => console.log(`${obj.name} walks the walk and talks the talk!`)
}

// Finally we call the builder functions passing the objects as parameters
addFlyingAbility(bug1)
bug1.fly() // output: "Now Buggy McFly can fly!"

addSpeechAbility(bug2)
bug2.saySmthg() // output: "Martiniano Buggland walks the walk and talks the talk!"

<!-- Prototype Pattern -->
The Prototype pattern allows you to create an object using another object as a blueprint, inheriting its properties and methods.

// We declare our prototype object with two methods
const enemy = {
    attack: () => console.log("Pim Pam Pum!"),
    flyAway: () => console.log("Flyyyy like an eagle!")
}

// We declare another object that will inherit from our prototype
const bug1 = {
    name: "Buggy McFly",
    phrase: "Your debugger doesn't work with me!"
}

// With setPrototypeOf we set the prototype of our object
Object.setPrototypeOf(bug1, enemy)

// With getPrototypeOf we read the prototype and confirm the previous has worked
console.log(Object.getPrototypeOf(bug1)) // { attack: [Function: attack], flyAway: [Function: flyAway] }

console.log(bug1.phrase) // Your debugger doesn't work with me!
console.log(bug1.attack()) // Pim Pam Pum!
console.log(bug1.flyAway()) // Flyyyy like an eagle!
```

**Observer pattern**
```
class Subject {
  constructor() {
    this.observers = [];
  }
  
  subscribe(observer) {
    this.observers.push(observer);
  }
  
  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }
  
  notify(data) {
    this.observers.forEach(observer => observer.update(data));
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }
  
  update(data) {
    console.log(`${this.name} received data: ${data}`);
  }
}

// Example usage
const subject = new Subject();

const observer1 = new Observer('Observer 1');
const observer2 = new Observer('Observer 2');
const observer3 = new Observer('Observer 3');

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.subscribe(observer3);

subject.notify('Hello World!');

subject.unsubscribe(observer2);

subject.notify('Goodbye World!');

we have a Subject class that keeps track of a list of observers. It provides methods to subscribe, unsubscribe, and notify the observers. The Observer class has an update method that gets called when the subject notifies it.

By creating instances of the Subject and Observer classes, we can subscribe observers to the subject, notify the observers when relevant data changes, and unsubscribe them if needed.
```

**Prototype pattern**
```
The Prototype pattern is a creational design pattern in JavaScript that deals with object creation. It is used to create objects based on a template or prototype object, rather than directly using a class or constructor function.

// Define a prototype object
const carPrototype = {
  drive() {
    console.log("Driving...");
  },
  stop() {
    console.log("Stopping...");
  },
};

// Create new objects based on the prototype
const car1 = Object.create(carPrototype);
car1.drive(); // Output: Driving...

const car2 = Object.create(carPrototype);
car2.stop(); // Output: Stopping...

we define a carPrototype object that serves as the template for creating new car objects. We can create new car objects using the Object.create() method, passing in the carPrototype as the argument. These new objects will inherit the properties and methods defined in the prototype.

Using the Prototype pattern in JavaScript allows us to create multiple objects with shared behavior without needing to create a separate class or constructor function for each object. It promotes reusability and simplifies object creation.
```

**Module pattern**
```
The Module pattern is a design pattern in JavaScript that allows encapsulation of private variables and functions inside a module, while exposing selected data or methods publicly.

const module = (() => {
  // Private variables and functions
  let privateVariable = 'Private data';

  const privateFunction = () => {
    console.log('Private function');
  };
  
  // Public API
  return {
    publicVariable: 'Public data',
    publicFunction: () => {
      console.log('Public function');
    },
    getPrivateData: () => {
      console.log(privateVariable);
    },
  };
})();

// Usage
console.log(module.publicVariable); // Output: Public data
module.publicFunction(); // Output: Public function
module.getPrivateData(); // Output: Private data

This pattern helps in organizing and protecting data and functions, preventing global scope pollution, and promoting modular code development.
```

**Singleton Pattern**
```
The Singleton pattern is a design pattern in JavaScript that restricts the instantiation of a class to a single instance and provides a global point of access to that instance.

const Singleton = (() => {
  let instance;

  const init = () => {
    // Private methods and properties
    const privateData = 'Private data';

    const privateMethod = () => {
      console.log('Private method');
    };

    return {
      // Public methods and properties
      publicData: 'Public data',
      publicMethod: () => {
        console.log('Public method');
      },
      getPrivateData: () => {
        console.log(privateData);
      },
    };
  };

  return {
    getInstance: () => {
      if (!instance) {
        instance = init();
      }
      return instance;
    },
  };
})();

// Usage
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // Output: true
instance1.publicMethod(); // Output: Public method
instance1.getPrivateData(); // Output: Private data

The Singleton pattern is useful in scenarios where we want to ensure one and only one instance of a class exists throughout the application. It provides a global point of access to that instance, allowing consistent access across different parts of the codebase.
```

**Factory pattern**
```
The Factory pattern is a design pattern in JavaScript that provides an interface for creating objects, but allows subclasses or derived classes to determine which class to instantiate

// Base class
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  display() {
    console.log(`Name: ${this.name}, Price: ${this.price}`);
  }
}

// Concrete classes
class ConcreteProductA extends Product {
  constructor(name, price) {
    super(name, price);
  }
  // Additional functionalities for ProductA
}

class ConcreteProductB extends Product {
  constructor(name, price) {
    super(name, price);
  }
  // Additional functionalities for ProductB
}

// Factory class
class ProductFactory {
  createProduct(productType, name, price) {
    switch (productType) {
      case 'A':
        return new ConcreteProductA(name, price);
      case 'B':
        return new ConcreteProductB(name, price);
      default:
        throw new Error('Invalid product type');
    }
  }
}

// Usage
const factory = new ProductFactory();

const productA = factory.createProduct('A', 'Product A', 10.99);
productA.display(); // Output: Name: Product A, Price: 10.99

const productB = factory.createProduct('B', 'Product B', 19.99);
productB.display(); // Output: Name: Product B, Price: 19.99

```