**What Are Design Patterns?**

```
These patterns are not algorithms or specific implementations. They are more like ideas, opinions, and abstractions that can be
useful in certain situations to solve a particular kind of problem.

The specific implementation of the patterns may vary depending on many different factors. But what's important is the concepts
behind them, and how they might help us achieve a better solution for our problem.
```

**JavaScript Design Patterns**
```
JavaScript design patterns are the reusable solutions that are applied to commonly occurring issues/problems in writing JavaScript web applications.

They help us to make our code more robust (strong).

These patterns help to write organized, beautiful and well-structured codes.

These design patterns decrease the overall codebase by segregating away all the unnecessary repetitions.
```

**JavaScript Creational Design Pattern**
```
These patterns deal with the object-creation mechanism. They try to create objects in a manner that is suitable for a particular situation.

Following is the list of some of the JavaScript Creational Design Patterns, along with their brief description:
Abstract Factory Design Pattern: This pattern actually creates an object that creates objects over a commonly mentioned or existing theme. This actually means that this method allows us to return a factor containing a group of related classes or objects.

Builder Design Pattern: This design pattern allows us to create complex objects by specifying the type and the content only. Things that are involved in the constructor are made hidden from the client.

Factory Method Pattern: This design pattern creates an abstract object or a class but lets the other subclasses or objects decide which method or object or method to instantiate (that is used to make an instance of that class or method).

Prototype Design Pattern: This design method helps us to create new objects but rather than returning a new object which is non-initialized, it actually returns a new object with values that are copied from the prototype (for example- an object, or a class)

Singleton Design Pattern: This design pattern allows any user to limit the number of instances of any particular object to just one and this single instance is referred to as a singleton.

```

**JavaScript Structural Design Pattern**
```
This design pattern allows us to know how the classes and the objects created so far can be compared to form larger structures. This design pattern eases the design by identifying a simple way to realize relationships among entities.

Following is the list of some of the JavaScript Structural Design Patterns, along with their brief description:
Adapter Design Pattern: This design pattern helps us in the translation of one interface (that is, an object’s properties and methods) to another and that is why this design pattern is also referred to as the Wrapper Pattern.

Proxy Design Pattern: This design pattern allows us to create a separate or a placeholder object for another object which will further be able to control this mentioned object.

Composite Design Pattern: This design pattern allows us to create object properties that are primitives items (items that are old or in existence previously) or a collection of objects.
```

**JavaScript Behavioral Design Pattern**
```
This design pattern identifies common communication patterns among objects. This actually increases flexibility in carrying out the communication.

Following is the list of some of the JavaScript Behavioral Design Patterns, along with their brief description:
Command Design Pattern: This pattern actually encapsulates various actions as objects, which thus allows systems to separate the objects that issue a request from the objects that actually process the object.

Interpreter Design Pattern: This design pattern offers us a scripting language for end-to-end users to customize their solutions.

Observer Design Pattern: This design pattern offers a model in which objects subscribe to an event and gets notified when any of the events occur. This pattern promotes good object-oriented design and loose coupling.
```

**Benefits of JavaScript design patterns**
```
Proven and reliable: Their widespread use by developers confirms their effectiveness and ensures they’ve been thoroughly tested and improved.

Versatile and adaptable: They represent general solutions that can be tailored to address various specific problems, making them highly reusable.

Concise and clear: Design patterns express complex solutions in an elegant and understandable way.
Boost communication: Shared knowledge of design patterns facilitates communication among developers by providing a common language for discussing potential solutions.

Refactoring-friendly: Designing applications with design patterns in mind often reduces the need for future code refactoring as they represent optimized solutions.

Compact and efficient: Design patterns typically require less code compared to other solutions due to their optimized and elegant nature.
```

**Types of Design Patterns**
```
There are three types of Design Patterns,

Creational Design Pattern
Structural Design Pattern
Behavioral Design Pattern
```

**Creational Design Pattern**
```
Creational Design Pattern abstract the instantiation process. They help in making a system independent of how its objects are created, composed and represented.

Importance of Creational Design Patterns:
A class creational Pattern uses inheritance to vary the class that’s instantiated, whereas an object creational pattern will delegate instantiation to another object.

Creational patterns become important as systems evolve to depend more on object composition than class inheritance. As that happens, emphasis shifts away from hardcoding a fixed set of behaviors toward defining a smaller set of fundamental behaviors that can be composed into any number of more complex ones.

Creating objects with particular behaviors requires more than simply instantiating a class.

When to ue Creational Design Patterns:
Complex Object Creation: Use creational patterns when the process of creating an object is complex, involving multiple steps, or requires the configuration of various parameters.

Promoting Reusability: Creational patterns promote object creation in a way that can be reused across different parts of the code or even in different projects, enhancing modularity and maintainability.

Reducing Coupling: Creational patterns can help reduce the coupling between client code and the classes being instantiated, making the system more flexible and adaptable to changes.

Singleton Requirements: Use the Singleton pattern when exactly one instance of a class is needed, providing a global point of access to that instance.

Step-by-Step Construction: Builder pattern of creational design patterns is suitable when you need to construct a complex object step by step, allowing for the creation of different representations of the same object.

Advantages of Creational Design Patterns:
Flexibility and Adaptability: Creational patterns make it easier to introduce new types of objects or change the way objects are created without modifying existing client code. This enhances the system’s flexibility and adaptability to change.

Reusability: By providing a standardized way to create objects, creational patterns promote code reuse across different parts of the application or even in different projects. This leads to more maintainable and scalable software.

Centralized Control: Creational patterns, such as Singleton and Factory patterns, allow for centralized control over the instantiation process. This can be advantageous in managing resources, enforcing constraints, or ensuring a single point of access.

Scalability: With creational patterns, it’s easier to scale and extend a system by adding new types of objects or introducing variations without causing major disruptions to the existing codebase.

Promotion of Good Design Practices: Creational patterns often encourage adherence to good design principles such as abstraction, encapsulation, and the separation of concerns. This leads to cleaner, more maintainable code.
```

**Structural Design Patterns**
```
Structural patterns are concerned with how classes and objects are composed to form larger structures. Structural class patterns use inheritance to compose interfaces or implementations.

Importance of Structural Design Patterns:
This pattern is particularly useful for making independently developed class libraries work together.

Structural object patterns describe ways to compose objects to realize new functionality.

It added flexibility of object composition comesfrom the ability to change the composition at run-time, which is impossible with static class composition.

When to ue Structural Design Patterns:
Adapting to Interfaces: Use structural patterns like the Adapter pattern when you need to make existing classes work with others without modifying their source code. This is particularly useful when integrating with third-party libraries or legacy code.

Organizing Object Relationships: Structural patterns such as the Decorator pattern are useful when you need to add new functionalities to objects by composing them in a flexible and reusable way, avoiding the need for subclassing.

Simplifying Complex Systems: When dealing with complex systems, structural patterns like the Facade pattern can be used to provide a simplified and unified interface to a set of interfaces in a subsystem.

Managing Object Lifecycle: The Proxy pattern is helpful when you need to control access to an object, either for security purposes, to delay object creation, or to manage the object’s lifecycle.

Hierarchical Class Structures: The Composite pattern is suitable when dealing with hierarchical class structures where clients need to treat individual objects and compositions of objects uniformly.

Advantages of Structural Design Patterns:
Flexibility and Adaptability: Structural patterns enhance flexibility by allowing objects to be composed in various ways. This makes it easier to adapt to changing requirements without modifying existing code.

Code Reusability: These patterns promote code reuse by providing a standardized way to compose objects. 
Components can be reused in different contexts, reducing redundancy and improving maintainability.
Improved Scalability: As systems grow in complexity, structural patterns provide a scalable way to organize and manage the relationships between classes and objects. This supports the growth of the system without causing a significant increase in complexity.

Simplified Integration: Structural patterns, such as the Adapter pattern, facilitate the integration of existing components or third-party libraries by providing a standardized interface. This makes it easier to incorporate new functionalities into an existing system.

Easier Maintenance: By promoting modularity and encapsulation, structural patterns contribute to easier maintenance. Changes to one part of the system are less likely to affect other parts, reducing the risk of unintended consequences.

Solves Recurring Design Problems: These patterns encapsulate solutions to recurring design problems. By applying proven solutions, developers can focus on higher-level design challenges unique to their specific applications.
```

**Behavioral Design Pattern**
```
Behavioral patterns are concerned with algorithms and the assignment of responsibilities between objects. Behavioral patterns describe not just patterns of objects or classes but also the patterns of communication between them.

Importance of Behavioral Design Pattern:
These patterns characterize complex control flow that’s difficult to follow at run-time.

They shift focus away from flow of control to let you concentratejust on the way objects are interconnected.

Behavioral class patterns use inheritance to distribute behavior between classes.

When to ue Behavioral Design Patterns:
Communication Between Objects: Use behavioral patterns when you want to define how objects communicate, collaborate, and interact with each other in a flexible and reusable way.

Encapsulation of Behavior: Apply behavioral patterns to encapsulate algorithms, strategies, or behaviors, allowing them to vary independently from the objects that use them. This promotes code reusability and maintainability.

Dynamic Behavior Changes: Use behavioral patterns when you need to allow for dynamic changes in an object’s behavior at runtime without altering its code. This is particularly relevant for systems that require flexibility in behavior.

State-Dependent Behavior: State pattern is suitable when an object’s behavior depends on its internal state, and the object needs to change its behavior dynamically as its state changes.

Interactions Between Objects: Behavioral patterns are valuable when you want to model and manage interactions between objects in a way that is clear, modular, and easy to understand.

Advantages of Behavioral Design Patterns:
Flexibility and Adaptability: Behavioral patterns enhance flexibility by allowing objects to interact in a more dynamic and adaptable way. This makes it easier to modify or extend the behavior of a system without altering existing code.

Code Reusability: Behavioral patterns promote code reusability by encapsulating algorithms, strategies, or behaviors in separate objects. This allows the same behavior to be reused across different parts of the system.

Separation of Concerns: These patterns contribute to the separation of concerns by dividing the responsibilities of different classes, making the codebase more modular and easier to understand.

Encapsulation of Algorithms: Behavioral patterns encapsulate algorithms, strategies, or behaviors in standalone objects, making it possible to modify or extend the behavior without affecting the client code.

Ease of Maintenance: With well-defined roles and responsibilities for objects, behavioral patterns contribute to easier maintenance. Changes to the behavior can be localized, reducing the impact on the rest of the code.
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

**Example 1: In this example, we will see how the Builder design pattern, as well as the Chain of Responsibilities design pattern, works.**
```
let Task = function (name, description) {
    this.name = name;
    this.description = description;
};

let TaskBuilder = function () {
    let name;
    let description;

    this.setName = function (name) {
        this.name = name;
        return this;
    };
    this.setDescription = function (description) {
        this.description = description;
        return this;
    };

    this.build = function () {
        return new Task(this.name, this.description);
    };
    return this;
};

let task = new TaskBuilder();
let object = task
    .setName("First Task")
    .setDescription("Study React and TypeScript")
    .build();
console.log(object);

```

**Proxy Design Pattern works.**
```
function mainDisplayFunction() {
    this.getData = function (name) {
        if (name === "ABC") return 20000;
        else if (name === "DEF") return 5000;
        else return 0;
    };
}

function proxyDisplayFunction() {
    let object_1 = new mainDisplayFunction();
    let result_object = {};
    return {
        getData: function (name) {
            if (!result_object[name]) {
                result_object[name] = object_1.getData(name);
            }
            console.log(name + ": " + result_object[name]);
            return result_object[name];
        },
    };
}

function mainFunction() {
    let main_object = new proxyDisplayFunction();
    main_object.getData("ABC");
    main_object.getData("DEF");
    main_object.getData("Apple");
}

mainFunction();

```