// Kunal Sharma IIT Jammu
let first = document.getElementById("first");
let a = first.getAttribute("class");
console.log(a);
console.log(first.hasAttribute("class"));
console.log(first.hasAttribute("style"));
first.setAttribute("hidden", "true");
console.log(first.attributes);
console.log(first.dataset);
console.log(first.dataset.player);
