// Kunal Sharma IIT Jammu
let b = document.getElementById("btn");

let x = function (event) {
  console.log(event.target);
  console.log(event.type, event.clientX, event.clientY);
};

let y = function (e) {
  console.log(e.target);
  alert("Hello World!");
};

b.addEventListener("click", x);

b.addEventListener("click", y);

let a = prompt("What is your favorite number?");

if (a == "2") {
  b.removeEventListener("click", y);
}
