// Kunal Sharma IIT Jammu

// let a = setTimeout(() => {
//   alert("I am inside a setTimeout");
// }, 5000);

// console.log(a);

// let b = prompt("Do you want to run the settimeout?");
// if (b == "n") {
//   clearTimeout(a);
// }

const sum = (a, b, c) => {
  console.log("Yes I am running at ", a + b + c);
  return a + b + c;
};

setTimeout(sum, 5000, 1, 2, 3);

setInterval(() => {
  alert("setInterval");
}, 1000);
