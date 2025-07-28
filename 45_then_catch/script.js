// Kunal Sharma IIT Jammu
let p1 = new Promise((resolve, reject) => {
  console.log("Promise is Pending");
  setTimeout(() => {
    // console.log("I am a promise and I am rejected!");
    reject(new Error("I am an error"));
  }, 5000);
});

let p2 = new Promise((resolve, reject) => {
  console.log("Promise is Pending");
  setTimeout(() => {
    console.log("I am a promise and I am fullfilled!");
    resolve(true);
  }, 5000);
});

console.log(p1, p2);

// catch the errors
p1.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  }
);

// get the value
p2.then((value) => {
  console.log(value);
});
