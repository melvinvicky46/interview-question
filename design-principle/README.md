**SOLID principles are an acronym of five design values**

```
S — Single responsibility principle
O — Open closed principle
L — Liskov substitution principle
I — Interface segregation principle
D — Dependency Inversion principle

# Single responsibility principle
A class should have one and only one reason to change, meaning that a class should only have one job.
This simplifies understanding, maintenance, and modification of the code in the future.

function calculateSalary(employee) {
    return employee.hoursWorked * employee.hourlyRate;
}

function generateReport(employee, salary) {
    let report = /*...*/;
    console.log(report);
}

# Open-Closed Principle (O)
Its official definition holds that software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.

Open for extension means that we should be able to add new features or components to the application without breaking existing code.

For example, assume that we have implemented a function named calculateSalaries() that uses an array with defined job roles and hourly rates to calculate salaries.
class ManageSalaries {
  constructor() {
    this.salaryRates = [
      { id: 1, role: 'developer', rate: 100 },
      { id: 2, role: 'architect', rate: 200 },
      { id: 3, role: 'manager', rate: 300 },
    ];
  }

  calculateSalaries(empId, hoursWorked) {
    let salaryObject = this.salaryRates.find((o) => o.id === empId);
    return hoursWorked * salaryObject.rate;
  }
}

const mgtSalary = new ManageSalaries();
console.log("Salary : ", mgtSalary.calculateSalaries(1, 100));

Directly modifying the salaryRates array will violate the open-closed principle. For example, suppose you need to extend the salary calculations for a new role. In that case, you need to create a separate method to add salary rates to the salaryRates array without making to the original code.
class ManageSalaries {
  constructor() {
    this.salaryRates = [
      { id: 1, role: 'developer', rate: 100 },
      { id: 2, role: 'architect', rate: 200 },
      { id: 3, role: 'manager', rate: 300 },
    ];
  }

  calculateSalaries(empId, hoursWorked) {
    let salaryObject = this.salaryRates.find((o) => o.id === empId);
    return hoursWorked * salaryObject.rate;
  }

  addSalaryRate(id, role, rate) {
    this.salaryRates.push({ id: id, role: role, rate: rate });
  }
}

const mgtSalary = new ManageSalaries();
mgtSalary.addSalaryRate(4, 'developer', 250);
console.log('Salary : ', mgtSalary.calculateSalaries(4, 100));

#Liskov Substitution Principle (L)
The Liskov Substitution Principle (LSP) is a fundamental concept in object-oriented programming, particularly in the context of the SOLID principles. It states that objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program.

Here's a simple example in JavaScript to illustrate the Liskov Substitution Principle:

Suppose we have a `Rectangle` class and a `Square` class that extends `Rectangle`. According to LSP, we should be able to substitute a `Square` object for a `Rectangle` object without breaking the behavior that is expected from a `Rectangle`.

```javascript
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }

  setWidth(width) {
    super.setWidth(width);
    super.setHeight(width);
  }

  setHeight(height) {
    super.setWidth(height);
    super.setHeight(height);
  }
}

function calculateArea(rectangle) {
  rectangle.setWidth(4);
  rectangle.setHeight(5);
  return rectangle.getArea();
}

const rectangle = new Rectangle(4, 5);
const square = new Square(4);

console.log(calculateArea(rectangle)); // Output: 20
console.log(calculateArea(square));    // Output: 16
```

In this example, both `Rectangle` and `Square` have methods to set the width and height, and to calculate the area. However, the implementation of `setWidth` and `setHeight` in the `Square` class violates the LSP. Although it ensures the square's integrity (ensuring width and height are always the same), it contradicts the behavior expected from the `Rectangle` class.

The Liskov Substitution Principle suggests that inheritance hierarchies should be designed in such a way that subclasses can be substituted for their base classes without altering the correctness of the program. In this case, `Square` should not inherit from `Rectangle`, or the inheritance should be redefined so that `Square` does not override the behavior of `Rectangle`.

The correct way to adhere to the Liskov Substitution Principle in this scenario would be to avoid having `Square` inherit from `Rectangle`, as it introduces complications in maintaining the expected behavior of both classes. Instead, you could consider a different design approach, such as using composition or a different inheritance hierarchy.

Here's a revised approach using composition:

```javascript
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square {
  constructor(size) {
    this.size = size;
  }

  getArea() {
    return this.size * this.size;
  }
}

function calculateArea(shape) {
  return shape.getArea();
}

const rectangle = new Rectangle(4, 5);
const square = new Square(4);

console.log(calculateArea(rectangle)); // Output: 20
console.log(calculateArea(square));    // Output: 16
```

In this example, `Rectangle` and `Square` are separate classes, each with its own implementation of `getArea()`. The `calculateArea` function accepts any object that has a `getArea()` method, allowing it to work with both rectangles and squares without any issues related to inheritance. This approach maintains the integrity of each class and adheres to the principles of composition over inheritance.

# Interface segregation principle
This principle is related to interfaces and focuses on breaking large interfaces into smaller ones. For example, suppose you are going to driving school to learn how to drive a car, and they give you a large set of instructions on driving cars, trucks, and trains. Since you only need to learn to drive a car, you do not need all the other information. The driving school should divide the instructions and just give you the instructions specific to cars.

Class DrivingTest {
  constructor(userType) {
    this.userType = userType;
  }
}

class CarDrivingTest extends DrivingTest {
  constructor(userType) {
    super(userType);
  }
}

class TruckDrivingTest extends DrivingTest {
  constructor(userType) {
    super(userType);
  }
}

const carUserTests = {
  startCarTest() {
    return ‘Car Test Started’;
  },
};

const truckUserTests = {
  startTruckTest() {
    return ‘Truck Test Started’;
  },
};

Object.assign(CarDrivingTest.prototype, carUserTests);
Object.assign(TruckDrivingTest.prototype, truckUserTests);

const carTest = new CarDrivingTest(carDriver );
console.log(carTest.startCarTest());
console.log(carTest.startTruckTest()); // Will throw an exception

const truckTest = new TruckDrivingTest( Truckdriver );
console.log(truckTest.startTruckTest());
console.log(truckTest.startCarTest()); // Will throw an exception

#Dependency inversion principle
Let’s consider a simple example to explain how dependency inversion works. Suppose you used the Yahoo email API in your application, and now you need to change it to the Gmail API. If you implemented the controller without dependency inversion like the following sample, you need to make some changes to the controller. This is because multiple controllers use the Yahoo API and you need to find each instance and update it.

class EmailController {
  sendEmail(emailDetails) {
    // Need to change this line in every controller that uses YahooAPI.const response = YahooAPI.sendEmail(emailDetails);
    if (response.status == 200) {
       return true;
    } else {
       return false;
    }
  }
}

The dependency inversion principle helps developers avoid such costly mistakes by moving the email API handling part to a separate controller in this case. Then you only need to change that controller whenever there is a change in the email API.
class EmailController {
  sendEmail(emailDetails) {
    const response = EmailApiController.sendEmail(emailDetails);
    if (response.status == 200) {
       return true;
    } else {
       return false;
    }
  }
}

class EmailApiController {
  sendEmail(emailDetails) {
    // Only need to change this controller. return YahooAPI.sendEmail(emailDetails);
  }
}
```

**DRY principle**

```
The DRY principle is a software development principle that stands for "Don't Repeat Yourself." It is one of the most important principles in software development, and it can help you write code that is more maintainable, readable, and scalable.
There are many ways to apply the DRY principle in JavaScript. One common way is to use functions. Functions allow you to encapsulate a block of code that can be reused multiple times. This can help you avoid repeating the same code over and over again.

 Here are some tips to follow when implementing the DRY principle:
Use functions to encapsulate reusable code
Extract common functionality into separate modules
Use variables to store repeated values
Avoid copying and pasting code

const calculateSum = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

const total = calculateSum([1, 2, 3, 4, 5]);
console.log(total); // 15
```

**KISS: Keep It Simple, Smart**

```
// Complex code
function calculateTotal(items) {
  var total = 0;
  for (var i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  return total;
}

// Simple code
function calculateTotal(items) {
  return items.reduce((total, item) => total + item.price, 0);
}
```

**YAGNI: You Ain't Gonna Need It**

```
The YAGNI principle, which stands for "You Aren't Gonna Need It," is a software development principle that advises developers to avoid adding functionality or code that is not currently needed. It is especially important in JavaScript development, where it can help to keep code concise, maintainable, and efficient.

// Not YAGNI
function calculateTaxes(price, taxRate) {
  let taxes = price * taxRate;
  return price + taxes
}

// YAGNI
function calculateTaxes(price, taxRate) {
  return price + taxes
}
```
