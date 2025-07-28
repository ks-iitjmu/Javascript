// Kunal Sharma IIT Jammu

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}

// for each loop
num.forEach((element) => {
  console.log(element * element);
});

// array from
let Name = "Kunal";
let arr = Array.from(Name);
console.log(arr);

// for --- of loop
for (let i of num) {
  console.log(i);
}

// for --- in loop
for (let i in num) {
  console.log(i);
}
