// Kunal Sharma IIT Jammu
const changeBgRed = () => {
  document.body.firstElementChild.style.background = "red";
};

let b = document.body;
console.log("First child of body is : ", b.firstChild);
console.log("First Element child of body is : ", b.firstElementChild);
