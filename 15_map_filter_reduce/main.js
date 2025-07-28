// Kunal Sharma IIT Jammu
let arr = [45, 23, 21];

// array map method
let a = arr.map((value, index, array) => {
  console.log(value, index, array);
  return value + index;
});
console.log(a);

// array filter method
let arr2 = [45, 23, 21, 0, 3, 5];
let a2 = arr2.filter((i) => {
  return i < 10;
});
console.log(a2, arr2);

// array reduce method
let arr3 = [1, 2, 3, 5, 2, 1];
const reduceFunc = (h1, h2) => {
  return h1 + h2;
};
let newArr3 = arr3.reduce(reduceFunc);
console.log(newArr3);
