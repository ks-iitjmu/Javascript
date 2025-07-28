// Kunal Sharma IIT Jammu

let p1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Resolved after 2 seconds.");
    resolve(56);
  }, 2000);
});

p1.then((value) => {
  console.log(value);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise 2");
    }, 2000);
  });
})
  .then(() => {
    console.log("We are done.");
    return 2;
  })
  .then(() => {
    console.log("Now we are pakka done.");
  });