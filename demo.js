// Static Typing
// Demonstrates how to explicitly define variable types in TypeScript
{
    var name_1 = "amrudesh_ps"; // `name` must hold a string
    var age = 20; // `age` must hold a number
    var status_1 = true; // `status` must hold a boolean value
    var array = ["hey", "hello", "hai"]; // `array` must be an array of strings
}
// TypeScript Type Inference
// Shows how TypeScript infers types based on initial assignment
{
    var name_2 = "amrudesh_ps"; // TypeScript infers `name` as a string
    var age = 20; // TypeScript infers `age` as a number
    var status_2 = true; // TypeScript infers `status` as a boolean
    var array = ["hey", "hello", "hai"]; // TypeScript infers `array` as a string array
}
// Interfaces and Type Aliases
// Demonstrates how to define and use an interface for a structured object
{
    // Object implementing the `User` interface
    var user1 = {
        name: "Bob",
        age: 30,
        getAge: function () {
            console.log(this.age); // Logs `age` to the console
        },
    };
    // Another object implementing the `User` interface
    var user2 = {
        name: "Boby",
        age: 31,
        getAge: function () {
            console.log(this.age); // Logs `age` to the console
        },
    };
}
// Type Aliases
// Shows how to define and use a type alias (alternative to interface)
{
    // Object conforming to the `User` type alias
    var user1 = {
        name: "Bob",
        age: 30,
        getAge: function () {
            console.log(this.age); // Logs `age` to the console
        },
    };
    // Another object conforming to the `User` type alias
    var user2 = {
        name: "Boby",
        age: 31,
        getAge: function () {
            console.log(this.age); // Logs `age` to the console
        },
    };
}
// Functions
// Demonstrates how to define a function using interfaces and explicit types
{
    // Object implementing the `User` interface
    var user1 = {
        age: 20,
    };
    // Function that accepts a `User` object and returns the `name` property as a string
    function getName(user1) {
        var username = user1.name;
        return username;
    }
    // Logs the `name` of the user to the console
    console.log("userName : " + getName(user1)); // Output: "userName : amrudesh_ps"
}
{
    // 2. Enums and `as const`
    var STATUSES = {
        ACTIVE: "ACTIVE",
        INACTIVE: "INACTIVE",
        SUSPENDED: "SUSPENDED",
    };
    function getUserInfo(data) {
        if (typeof data === "number") {
            return "Fetching user information for user ID: ".concat(data);
        }
        return "User Info - ID: ".concat(data.id, ", Name: ").concat(data.name, ", Role: ").concat(data.role);
    }
    // 4. Generics
    function wrapValue(value) {
        return { content: value };
    }
    var exampleKey = "name"; // Valid
    var userExample = {
        id: 1,
        name: "Alice",
        role: "Admin",
        isActive: true,
    };
    // 7. Special Types: `any`, `unknown`, `never`, `void`, `null`
    var anyValue = 42; // Can be any type
    anyValue = "Now a string!";
    var unknownValue = "Hello, unknown!";
    if (typeof unknownValue === "string") {
        console.log(unknownValue.toUpperCase()); // Safe after type check
    }
    function throwError(message) {
        throw new Error(message); // Function never returns
    }
    function logMessage(message) {
        console.log(message); // No return value
    }
    var nullableValue = null; // Nullable value
    nullableValue = "Not null anymore!";
    // Example Usage
    var user = { id: 101, name: "Bob", role: "User", isActive: true };
    console.log(getUserInfo(user)); // Output: User Info - ID: 101, Name: Bob, Role: User
    console.log(getUserInfo(102)); // Output: Fetching user information for user ID: 102
    var wrapped = wrapValue(user);
    console.log(wrapped.content.name); // Output: Bob
    var userKeys = ["id", "name", "role", "isActive"];
    console.log(userKeys); // Output: ["id", "name", "role", "isActive"]
    var partialUser = { name: "Charlie" };
    var readonlyUser = {
        id: 202,
        name: "Eve",
        role: "Guest",
        isActive: false,
    };
    // readonlyUser.name = "New Name"; // Error: Cannot assign to 'name' because it is a read-only property
    var userWithoutRole = {
        id: 303,
        name: "Dave",
        isActive: true,
    };
    console.log(userWithoutRole); // Output: { id: 303, name: "Dave", isActive: true }
    logMessage("This is a message!"); // Output: This is a message!
}
{
    var user1 = {
        name: "appu",
        id: 8,
    };
    var name_3 = "amrudesh_ps";
    console.log(name_3);
    function getAge(num) {
        return {
            content1: num,
            content2: num,
        };
    }
    var obj = getAge(12);
    console.log("Number1 : " + obj.content1 + "Number2 : " + obj.content2);
    function geTAge(num) {
        return num;
    }
    console.log(geTAge(12));
    console.log(geTAge("pending" /* status.PENDING */));
}
