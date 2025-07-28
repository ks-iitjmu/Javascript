// Kunal Sharma IIT Jammu

// Question 1
let ques1 = document.getElementById("questions");

console.log(ques1);
ques1.firstElementChild.style.color = "red";

// Question 2
// No it Does Not have tbody in it

// Question 3
let elem = document.getElementById("elements");
elem.firstElementChild.style.color = "blue";
elem.lastElementChild.style.color = "blue";

// Question 4
Array.from(document.getElementsByTagName("li")).forEach((element) => {
  element.style.background = "cyan";
});

// Question 5
// option d : none of these
