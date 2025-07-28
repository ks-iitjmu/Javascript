// Kunal Sharma IIT Jammu

let marks = {
  shubham: 90,
  Kunal: 65,
  Roshan: 45,
  Rituraj: 35,
};

// Question 1
for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    "The marks of",
    Object.keys(marks)[i],
    "is",
    marks[Object.keys(marks)[i]]
  );
}

// Question 2
for (let a in marks) {
  console.log("The marks of", a, "are", marks[a]);
}

// Question 3
let cn = 43;
while (cn != 34) {
  console.log(cn);
  cn--;
}

// Question 4
const mean = (a, b, c, d) => {
  return (a + b + c + d) / 4;
};
console.log("mean of 23, 34, 45, 54 are", mean(23, 34, 45, 54));
