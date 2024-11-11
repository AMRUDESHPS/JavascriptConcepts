const people = [
    {
      name: "Amrudesh P S",
      age: 20,
      place: "Kothamangalam"
    },
    {
      name: "Arun Kumar",
      age: 25,
      place: "Ernakulam"
    },
    {
      name: "Priya Menon",
      age: 22,
      place: "Kochi"
    },
    {
      name: "Mohammed Rashid",
      age: 28,
      place: "Thrissur"
    },
    {
      name: "Anjali Krishna",
      age: 21,
      place: "Palakkad"
    },
    {
      name: "Rahul Nair",
      age: 24,
      place: "Kozhikode"
    },
    {
      name: "Meera Rajesh",
      age: 23,
      place: "Kannur"
    },
    {
      name: "Vishnu Prasad",
      age: 26,
      place: "Malappuram"
    },
    {
      name: "Lakshmi Priya",
      age: 19,
      place: "Alappuzha"
    },
    {
      name: "Sanjay Thomas",
      age: 27,
      place: "Kollam"
    }
  ];

// Remove elements
people.pop()  // Removes from end

// Add elements
people.push({
    name: "Sanjay Thomas",
    age: 27,
    place: "Kollam"
  })  // Adds to end


// Get array length
const length = people.length;
console.log("length : "+ length);

// Creating new arrays
const nameList = people.map(person => person.name);  // Transform each element
console.log("nameList : " + nameList);
const statusLabels = people.map(person => ({
    name: person.name,
    status: person.age < 21 ? 'Junior' : 
           person.age < 25 ? 'Intermediate' : 'Senior'
}));  // Transform each element
console.log("statusLabels : " + statusLabels);
const youngProple = people.filter(person => person.age < 25);  // Keep elements that match condition
console.log("youngProple : " + youngProple);
const avgAge = people.reduce((sum, person) => sum + person.age, 0);  // Reduce to single value
console.log("averageAge : " + avgAge);

let fromKochi = people.find(person => person.place === "Kochi");
console.log("persons from Kochi : " + fromKochi);



// // Add elements
// array.push(item)      // Adds to end
// array.unshift(item)   // Adds to beginning

// // Remove elements
// array.pop()           // Removes from end
// array.shift()         // Removes from beginning
// array.splice(start, deleteCount, ...items)  // Removes/adds elements anywhere


// // Creating new arrays
// array.map(item => /* transform */)      // Transform each element
// array.filter(item => /* condition */)   // Keep elements that match condition
// array.reduce((acc, item) => /* logic */, initialValue)  // Reduce to single value
// array.slice(start, end)                // Extract portion of array


// array.find(item => /* condition */)     // Returns first matching element
// array.findIndex(item => /* condition */) // Returns first matching index
// array.includes(item)                    // Checks if element exists
// array.indexOf(item)                     // Finds index of element


// array.find(item => /* condition */)     // Returns first matching element
// array.findIndex(item => /* condition */) // Returns first matching index
// array.includes(item)                    // Checks if element exists
// array.indexOf(item)                     // Finds index of element


// array.sort((a, b) => /* comparison */)  // Sort elements
// array.reverse()                         // Reverse order
// array.concat(array2)                    // Combine arrays


// array.forEach(item => /* logic */)      // Loop through elements
// array.some(item => /* condition */)     // Check if any element matches
// array.every(item => /* condition */)    // Check if all elements match


// array.forEach(item => /* logic */)      // Loop through elements
// array.some(item => /* condition */)     // Check if any element matches
// array.every(item => /* condition */)    // Check if all elements match


// array.join(separator)                   // Convert to string
// array.flat(depth)                       // Flatten nested arrays
// Array.isArray(value)                    // Check if value is array
// array.length                            // Get array length