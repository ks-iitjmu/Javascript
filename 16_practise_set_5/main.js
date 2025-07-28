// Kunal Sharma IIT Jammu

// Question 1
let arr = [1, 2, 3, 4, 5, 6, 7, 83];
let a = prompt("Enter a Number: ");
a = Number.parseInt(a);
arr.push(a);
console.log(a);

// Question 2
do {
  let a = prompt("Enter a number: ");
  a = Number.parseInt(a);
  arr.push(a);
} while (a != 0);
console.log(arr);

// Question 3
let n = arr.filter((x) => {
  return x % 10 == 0;
});
console.log(n);

// Question 4
let n1 = arr.map((x) => {
  return x * X;
});
console.log(n1);

// Question 5
let arr2 = [1, 2, 3, 4, 5];
let reduceFunc = (x, y) => {
  return x * y;
};
let n2 = arr2.reduce(reduceFunc);
console.log(n2);
