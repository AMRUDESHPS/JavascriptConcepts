// Static Typing
// Demonstrates how to explicitly define variable types in TypeScript
{
  let name: string = "amrudesh_ps"; // `name` must hold a string
  let age: number = 20; // `age` must hold a number
  let status: boolean = true; // `status` must hold a boolean value
  let array: string[] = ["hey", "hello", "hai"]; // `array` must be an array of strings
}

// TypeScript Type Inference
// Shows how TypeScript infers types based on initial assignment
{
  let name: string = "amrudesh_ps"; // TypeScript infers `name` as a string
  let age: number = 20; // TypeScript infers `age` as a number
  let status: boolean = true; // TypeScript infers `status` as a boolean
  let array: string[] = ["hey", "hello", "hai"]; // TypeScript infers `array` as a string array
}

// Interfaces and Type Aliases
// Demonstrates how to define and use an interface for a structured object
{
  interface User {
    name: string; // `name` property must be a string
    age: number; // `age` property must be a number
    getAge: () => void; // `getAge` must be a function that returns void
  }

  // Object implementing the `User` interface
  let user1: User = {
    name: "Bob",
    age: 30,
    getAge() {
      console.log(this.age); // Logs `age` to the console
    },
  };

  // Another object implementing the `User` interface
  let user2: User = {
    name: "Boby",
    age: 31,
    getAge() {
      console.log(this.age); // Logs `age` to the console
    },
  };
}

// Type Aliases
// Shows how to define and use a type alias (alternative to interface)
{
  type User = {
    name: string; // `name` property must be a string
    age: number; // `age` property must be a number
    getAge(): void; // `getAge` must be a function that returns void
  };

  // Object conforming to the `User` type alias
  let user1: User = {
    name: "Bob",
    age: 30,
    getAge() {
      console.log(this.age); // Logs `age` to the console
    },
  };

  // Another object conforming to the `User` type alias
  let user2: User = {
    name: "Boby",
    age: 31,
    getAge() {
      console.log(this.age); // Logs `age` to the console
    },
  };
}

// Functions
// Demonstrates how to define a function using interfaces and explicit types
{
  interface User {
    name?: string; // `name` property must be a string
    age?: number; // `age` property must be a number
  }

  // Object implementing the `User` interface
  let user1: User = {
    age: 20,
  };

  // Function that accepts a `User` object and returns the `name` property as a string
  function getName(user1: User): string | undefined {
    let username: string | undefined = user1.name;
    return username;
  }

  // Logs the `name` of the user to the console
  console.log("userName : " + getName(user1)); // Output: "userName : amrudesh_ps"
}

{
  // 1. Named Types: Interface and Type Alias
  interface User {
    id: number;
    name: string;
    role: Role; // Uses Enum for the role
    isActive: boolean;
  }

  type Role = "Admin" | "User" | "Guest"; // Type Alias for role

  // 2. Enums and `as const`
  const STATUSES = {
    ACTIVE: "ACTIVE",
    INACTIVE: "INACTIVE",
    SUSPENDED: "SUSPENDED",
  } as const;

  type Status = (typeof STATUSES)[keyof typeof STATUSES]; // Extracting types from `as const`

  // 3. Function Overloading
  function getUserInfo(user: User): string;
  function getUserInfo(id: number): string;
  function getUserInfo(data: User | number): string {
    if (typeof data === "number") {
      return `Fetching user information for user ID: ${data}`;
    }
    return `User Info - ID: ${data.id}, Name: ${data.name}, Role: ${data.role}`;
  }

  // 4. Generics
  function wrapValue<T>(value: T): { content: T } {
    return { content: value };
  }

  // 5. `keyof` and `typeof`
  type UserKeys = keyof User; // "id" | "name" | "role" | "isActive"

  const exampleKey: UserKeys = "name"; // Valid
  const userExample: User = {
    id: 1,
    name: "Alice",
    role: "Admin",
    isActive: true,
  };

  // 6. Utility Types
  type PartialUser = Partial<User>; // Makes all properties optional
  type ReadonlyUser = Readonly<User>; // Makes all properties read-only
  type UserWithoutRole = Omit<User, "role">; // Excludes "role" from User
  type UserWithNameOnly = Pick<User, "name">; // Includes only "name" property

  // 7. Special Types: `any`, `unknown`, `never`, `void`, `null`
  let anyValue: any = 42; // Can be any type
  anyValue = "Now a string!";

  let unknownValue: unknown = "Hello, unknown!";
  if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase()); // Safe after type check
  }

  function throwError(message: string): never {
    throw new Error(message); // Function never returns
  }

  function logMessage(message: string): void {
    console.log(message); // No return value
  }

  let nullableValue: string | null = null; // Nullable value
  nullableValue = "Not null anymore!";

  // Example Usage
  const user: User = { id: 101, name: "Bob", role: "User", isActive: true };
  console.log(getUserInfo(user)); // Output: User Info - ID: 101, Name: Bob, Role: User
  console.log(getUserInfo(102)); // Output: Fetching user information for user ID: 102

  const wrapped = wrapValue(user);
  console.log(wrapped.content.name); // Output: Bob

  const userKeys: UserKeys[] = ["id", "name", "role", "isActive"];
  console.log(userKeys); // Output: ["id", "name", "role", "isActive"]

  const partialUser: PartialUser = { name: "Charlie" };
  const readonlyUser: ReadonlyUser = {
    id: 202,
    name: "Eve",
    role: "Guest",
    isActive: false,
  };
  // readonlyUser.name = "New Name"; // Error: Cannot assign to 'name' because it is a read-only property

  const userWithoutRole: UserWithoutRole = {
    id: 303,
    name: "Dave",
    isActive: true,
  };
  console.log(userWithoutRole); // Output: { id: 303, name: "Dave", isActive: true }

  logMessage("This is a message!"); // Output: This is a message!
}

{
  type UserDetials = {
    name: string;
    id: number;
  };
  type AdminDetials = UserDetials & {
    role: string;
  };
  const user1: UserDetials = {
    name: "appu" ,
    id: 8 ,
  };
  let name = "amrudesh_ps" as const;
  console.log(name);
    
  function getAge(num: number): {
    content1: number;
    content2: number;
  } {
    return {
      content1: num,
      content2: num,
    };
  }
  let obj = getAge(12);
  console.log("Number1 : " + obj.content1 + "Number2 : " + obj.content2);
  const enum status {
    PENDING = "pending",
    SUCCESS = "success",
    REJECT = "rejected",
  }
  function geTAge<T>(num: T): T {
    return num;
  }
  console.log(geTAge<number>(12));
  console.log(geTAge<string>(status.PENDING));
}
