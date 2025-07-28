// Kunal Sharma IIT Jammu
let promise = new Promise(function (resolve, reject) {
  console.log("Hello from Promise");
  resolve(56);
});

console.log("Hello One");

setTimeout(function () {
  console.log("Hello Two in 2 seconds");
}, 2000);

console.log("Hello Three");

console.log(promise);
