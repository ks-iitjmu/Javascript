// Kunal Sharma IIT Jammu
let p1 = new Promise((resolve, reject) => {
  console.log("Promise is not Resolved.");
  setTimeout(() => {
    console.log("Promise is now resolved.")
    resolve(1);
  }, 6000);
});

p1.then(() => {
  console.log("This is the first handler");
});

p1.then(() => {
  console.log("This is the second handler.");
});

p1.then(() => {
  console.log("This is the third handler.");
});
