/*
JSON (JavaScript Object Notation) is a text-based format used to represent structured data. 
It’s commonly used for data interchange between systems, especially in web applications, 
because of its simplicity and ease of use across programming languages.
*/

// String Datatype.
let name = "AMRUDESH P S";

//Number Datatype.
let age = 20;

//Array Datatype.
let array = ["name", "place", "age", "sex"];

//Array of Object Datatype.
let arrayOfObjects = [
  {
    name: "amrudesh p s",
    first_name: "amrudesh",
    last_name: "p s",
    location: "kerala, INDIA",
    sex: "male",
  },
  {
    name: "appu",
    first_name: "appu",
    location: "kerala, INDIA",
    sex: "male",
  },
];

//Boolean Datatype.
let booleanValue = true;

//Object Datatype.
let object = {
  name: "amrudesh p s",
  first_name: "amrudesh",
  last_name: "p s",
  location: "kerala, INDIA",
  sex: "male",
};

//NULL Datatype.
var null_value = null;

//All datatypes on one object format
let data = {
  name: "Alice",
  age: 25,
  isStudent: false,
  courses: ["Math", "Physics"],
  address: {
    city: "New York",
    zip: "10001",
  },
};

//converting to JSON string format using stringify method.
var jsonStringFormat = JSON.stringify(data);
console.log(jsonStringFormat);

//converting to JSON object format using parse method.
var jsonObjectFormat = JSON.parse(jsonStringFormat);
console.log(jsonObjectFormat);
