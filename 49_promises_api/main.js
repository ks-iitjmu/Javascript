// Kunal Sharma IIT Jammu
let p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Value1");
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Value2");
    reject(new Error("Error"));
  }, 2000);
});

let p3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Value3");
  }, 3000);
});

// p1.then((value) => {
//   console.log(value);
// });

// p2.then((value) => {
//   console.log(value);
// });

// p3.then((value) => {
//   console.log(value);
// });

let promisesAll = Promise.all([p1, p2, p3]);
// let promisesAll = Promise.allSettled([p1, p2, p3]);
// let promisesAll = Promise.race([p1, p2, p3]);
// let promisesAll = Promise.any([p1, p2, p3]);
// let promisesAll = Promise.resolve(6);
// let promisesAll = Promise.reject(new Error("Error"));

promisesAll.then((value) => {
  console.log(value);
});
