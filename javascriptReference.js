const suggestionsData = [
    // What is JavaScript?
    {
        name: "What is JavaScript?",
        description: "JavaScript is a programming language used to create interactive web pages. It allows you to dynamically change the content of a page, handle events, interact with the server, and much more.",
        example: `
    /*
    JavaScript performs the following tasks:
    - Adds interactivity (e.g., pop-ups, forms).
    - Dynamically updates content (e.g., changes text or styles of elements).
    - Handles user actions (e.g., button clicks).
    - Works with the server (e.g., sends and receives data).

    Key features:
    - Interpreted language: executed by the browser without prior compilation.
    - Supported in most web browsers.
    - Used both on the client and server sides (e.g., Node.js).
    */
    console.log("Hello, JavaScript world!"); // Output: Hello, JavaScript world!
        `
    },

    // Operators
    {
        name: "Operators",
        description: "Operators are used to perform operations on values.",
        example: `
        let x = 5 + 3; // Addition
        let y = 10 - 4; // Subtraction
        let z = x * y; // Multiplication
        console.log(z); // Output: 48
        `
    },

    // Variables and Types
    {
        name: "Variables and Types",
        description: "Variables are used to store data. JavaScript supports different data types.",
        example: `
        let age = 25; // Number
        let name = "Alice"; // String
        let isStudent = true; // Boolean
        console.log(\`Name: \${name}, Age: \${age}, Student: \${isStudent}\`);
        // Output:
        // Name: Alice, Age: 25, Student: true
        `
    },

    // Callback Functions
    {
        name: "Callback Functions",
        description: "Functions can be passed as arguments to other functions.",
        example: `
        function processUserInput(callback) {
        const name = "Alice";
        callback(name);
  }
        processUserInput((name) => console.log(\`Hello, \${name}!\`));
    // Output: Hello, Alice!
        `
    },

    // Object Mutation
    {
        name: "Object Mutation",
        description: "Objects are mutable; their properties can be updated or new ones added.",
        example: `
        const person = { name: "Alice", age: 25 };
        person.age = 26; // Update property
        person.city = "New York"; // Add new property
        console.log(person);
     // Output: { name: "Alice", age: 26, city: "New York" }
        `
    },

    // Ternary Operator
    {
        name: "Ternary Operator",
        description: "A shorthand way of writing conditions.",
        example: `
        const age = 18;
        const status = age >= 18 ? "adult" : "child";
        console.log(status); // Output: adult
        `
    },

    // Logical Operators
    {
        name: "Logical Operators",
        description: "Operators for working with logical values.",
        example: `
        const isAdult = true;
        const hasPermission = false;
        console.log(isAdult && hasPermission); // Output: false
        console.log(isAdult || hasPermission); // Output: true
        `
    },

    // String Concatenation
    {
        name: "String Concatenation",
        description: "Combining strings in JavaScript.",
        example: `
        const firstName = "Alice";
        const lastName = "Johnson";
        console.log(firstName + " " + lastName); // Output: Alice Johnson
        `
    },

    // Destructuring
    {
        name: "Destructuring",
        description: "A way to extract values from objects or arrays.",
        example: `
        const person = { name: "Alice", age: 25 };
        const { name, age } = person;
        console.log(name, age); // Output: Alice 25
        `
    },

    // Conditional Statements
    {
        name: "Conditional Statements",
        description: "Instructions to execute code based on conditions.",
        example: `
        const age = 18;
        if (age >= 18) {
        console.log("You are an adult.");
  }
        else {
        console.log("You are a child.");
  }
     // Output: You are an adult.
        `
    },

    // Promises
    {
        name: "Promises",
        description: "A way to handle asynchronous code.",
        example: `
  const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Data loaded"), 1000);
    });
  };
  fetchData().then((data) => console.log(data));
  // Output: Data loaded (after 1 second)
        `
    },
    
    // Classes and Prototypes
    {
        name: "Classes and Prototypes",
        description: "Classes are used to create objects with shared properties and methods.",
        example: `
        class Person {
        constructor(name, age) {
        this.name = name;
        this.age = age;
    }
        greet() {
        console.log(\`Hello, my name is \${this.name}\`);
    }
  }
        const alice = new Person("Alice", 25);
        alice.greet(); // Output: Hello, my name is Alice
        `
    },
    
    // Asynchronous Functions
    {
        name: "Asynchronous Functions",
        description: "Functions that simplify working with asynchronous code.",
        example: `
        const fetchData = async () => {
        const data = await new Promise((resolve) =>
        setTimeout(() => resolve("Data loaded"), 1000)
    );
        console.log(data);
  };
        fetchData();
     // Output: Data loaded (after 1 second)
        `
    },
    
    // JavaScript Functions
    {
        name: "JavaScript Functions",
        description: "Functions allow you to reuse code.",
        example: `
        function greet(name) {
        return 'Hello, ' + name + '!';
  }
  
        console.log(greet('Alice')); // Hello, Alice!
        `
    },

    // Loops in JavaScript
    {
        name: "Loops in JavaScript",
        description: "Loops are used to repeat specific operations.",
        example: `
        for (let i = 0; i < 5; i++) {
        console.log('Iteration: ' + i);
  }
     // Output:
     // Iteration: 0
     // Iteration: 1
     // Iteration: 2
     // Iteration: 3
     // Iteration: 4
        `
    },

    // Arrays in JavaScript
    {
        name: "Arrays in JavaScript",
        description: "Arrays are used to store multiple values in one variable.",
        example: `
        const fruits = ['Apple', 'Banana', 'Cherry'];

        fruits.forEach((fruit) => {
        console.log(fruit);
  });
     // Output:
     // Apple
     // Banana
     // Cherry
        `
    },

    // Objects in JavaScript
    {
        name: "Objects in JavaScript",
        description: "Objects are data structures that store data in key-value pairs.",
        example: `
        const person = {
        name: 'Alice',
        age: 25
    };
  
        console.log(person.name); // Alice
        console.log(person.age); // 25
        `
    },

    // DOM Manipulation
    {
        name: "DOM Manipulation",
        description: "JavaScript allows you to manipulate the DOM to change web pages.",
        example: `
        document.getElementById('myElement').textContent = 'Hello, DOM!';
        `
    },

    // Asynchronous Programming
    {
        name: "Promise in JavaScript",
        description: "Promise is used for working with asynchronous code.",
        example: `
        const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Done!'), 2000);
  });
  
        myPromise.then((message) => console.log(message));
    // Output after 2 seconds: Done!
        `
    },

    {
        name: "Async/Await in JavaScript",
        description: "Async/Await simplifies working with asynchronous code.",
        example: `
        async function fetchData() {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
  }
  
        fetchData();
        `
    },

    // Closures
    {
        name: "Closures in JavaScript",
        description: "Closures allow functions to remember the environment they were created in.",
        example: `
        function createCounter() {
        let count = 0;
        return function () {
        count++;
        return count;
    };
  }

        const counter = createCounter();
        console.log(counter()); // 1
        console.log(counter()); // 2
        `
    },
    // Modules
    {
        name: "Modules in JavaScript",
        description: "Modules help break down code into logical blocks.",
        example: `
     // math.js
        export function add(a, b) {
        return a + b;
  }
     // main.js
        import { add } from './math.js';
        console.log(add(2, 3)); // 5
        `
    },
    // Event Handling
    {
        name: "Event Handling",
        description: "JavaScript can respond to events such as clicks or key presses.",
        example: `
        document.getElementById('myButton').addEventListener('click', () => {
        alert('Button clicked!');
  });
        `
    }
];

export { suggestionsData };
