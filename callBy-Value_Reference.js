var num = 100;

var arrObj = {
  name: "Amrudesh P S",
  age: 20,
  place: "Kothamangalam",
};

function firstFun() {
  secondFun(arrObj, num);

  console.log("First Function value: " + num);

  // Will print 20 (unchanged) because:
  // 1. We never modified the original object
  // 2. All modifications were done on reference1 (the copy)
  console.log("First Function reference value : " + arrObj.age);
}

function secondFun(reference, value) {
  // Increment the passed value (doesn't affect original 'num')
  value++;

  // Create a NEW separate object with only the age property
  // This creates a copy of the age value from the original object
  let reference1 = {
    age: reference.age,
  };

  // This modifies only the copy (reference1)
  // The original object (arrObj) remains unchanged
  reference1.age++;

  console.log("Second Function value : " + value);
  console.log(
    "Second Function reference value (avoid call by reference issue) : " +
      reference1.age
  );
}
firstFun();

/* Output will be:
   Second Function value : 101
   Second Function reference value (avoid call by reference issue) : 21
   First Function value: 100
   First Function reference value : 20
*/
