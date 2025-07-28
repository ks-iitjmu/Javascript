// Kunal Sharma IIT Jammu

// // Synchronous programming
// let a = prompt("What is your name?");
// let b = prompt("What is your age?");
// let c = prompt("What is your favorite color?");

// console.log(a + " is " + b + " years old and has " + c + " favorite color.");

// // Asynchronous programming
// console.log("Start");
// setTimeout(function () {
//   console.log("Hey I am good");
// }, 3000);
// console.log("End");

// Callbacks
function loadScript(src, callback) {
  var script = document.createElement("script");
  script.src = src;
  script.onload = function () {
    console.log("loaded script with src: " + src);
    callback(src);
  };
  script.onerror = function () {
    console.log("Error loading script with src: " + src);
    callback(new Error("Src got some error!"));
  };
  document.body.appendChild(script);
}

function hello(error, src) {
  if (error) {
    console.error(error);
  } else {
    alert("Hello!" + src);
  }
}

loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",
  hello
);
