const array = [10, 20, 30, 41, 50];

//MAP FUNCTION

const doubleArrayValues = array.map((value) => {
  value *= 2;
  return value;
});
console.log(doubleArrayValues);

const stringArray = array.map((value) => {
  return value.toString();
});
console.log(stringArray);

const binaryValues = array.map((value) => {
  return value.toString(2);
});
console.log(binaryValues);

const oddValuesOnly = array.map((value) => {
  if (value % 2 === 0) {
    return value;
  }
});
console.log(oddValuesOnly);

//FILTER FUNCTION

const filterOddValuesOnly = array.filter((value) => {
  if (value % 2 === 0) {
    return value;
  }
});
console.log(filterOddValuesOnly);

//FILTER FUNCTION

let initailValueForAccumulator = 0;
const reduceMaxValue = array.reduce((acc, curr) => {
  acc = acc < curr ? curr : acc;
  return acc;
}, initailValueForAccumulator);

console.log(reduceMaxValue);
