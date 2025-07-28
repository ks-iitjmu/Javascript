// Kunal Sharma IIT Jammu

for (let i = 0; i < 21; i++) {
  console.log(i);
}

// program to add first n natural numbers
let s = 0;
for (let i = 1; i <= 10; i++) {
  s += i;
}
console.log("Sum of first 10 natural numbers: ", s);

// for in loop for objects
let marks = {
  kunal: 45,
  ravi: 40,
  tina: 55,
  rahul: 35,
  rohit: 15,
};
for (let a in marks) {
  console.log(a, "have marks", marks[a]);
}

// for of loop
for (let a of "Kunal Sharma") {
  console.log(a);
}
