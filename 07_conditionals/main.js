// Kunal Sharma IIT Jammu
let Name = "Kunal Sharma";

// if --- else
if (Name === "Kunal Sharma") {
  console.log("Hi! Welcome Back Kunal Sharma");
} else {
  console.log("You are not Kunal Sharma");
}

// if --- else if --- else
let age = 21;
if (age < 18) {
  console.log("You can not drive!");
} else if (age < 0) {
  console.error("Error! Enter a valid age.");
} else {
  console.log("Yes! You can drive.");
}

// ternary operator
console.log("? : This is ternary operator Also used as conditionals.");
age >= 18
  ? console.log("Yes! You can drive.")
  : console.log("No! You cannot drive.");

// switch case
const expr = "Apples";
switch (expr) {
  case "Oranges":
    console.log("Oranges are $32.1 a KG.");
    break;
  case "Mangoes":
  case "Papaya":
    console.log("Mangoes and Papaya are $35.6 a KG.");
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
