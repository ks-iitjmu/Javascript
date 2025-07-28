// Kunal Sharma IIT Jammu
let box = document.getElementById("box");
box.className = "teal";
console.log(box.classList);
box.classList.add("blue");
console.log(box.classList);
box.classList.remove("teal");
console.log(box.classList);
box.classList.contains("red");
console.log(box.classList);
box.classList.toggle("red");
console.log(box.classList);
box.classList.replace("blue", "black");
console.log(box.classList);
