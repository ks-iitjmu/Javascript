// Kunal Sharma IIT Jammu

// Question 1
let a = "Kunal Sharma";
console.log(a);
console.log(typeof a);
a = a + 3;
console.log(a);

// Question 2
console.log(typeof a);

// Question 3
const person = {
  name: "Kunal",
  college: "IIT Jammu",
  age: 21,
  branch: "MNC",
};
console.log(person);
// person = 89374; gives error

// Question 4
person["friend"] = "bhupinder";
person["name"] = "yashan";
console.log(person);

// Question 5
const dict = {
  appereciate: "recognise the full worth of.",
  ataraxia: "a state of freedom from emotional disturbance and anxiety.",
  yakka: "work, especially hard work.",
};

console.log(dict);
console.log("yakka means:", dict["yakka"]);
