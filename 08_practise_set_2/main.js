// Kunal Sharma IIT Jammu

// Question 1
let age = 23;
if (age >= 10 && age <= 20) {
  console.log("Yes! Your age lies between 10 and 20.");
} else {
  console.log("No! Your age does not lies between 10 and 20.");
}

// Question 2
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

// Question 3
let n = 48698;
if (n % 2 == 0 && n % 3 == 0) {
  console.log(n, "is divisible by 2 and 3.");
} else {
  console.log(n, "is not divisible by 2 and 3.");
}

// Question 4
if (n % 2 == 0 || n % 3 == 0) {
  console.log(n, "is divisible by either 2 or 3.");
} else {
  console.log(n, "is not divisible by either 2 or 3.");
}

// Question 5
age >= 18
  ? console.log("Yes! You can drive.")
  : console.log("No! You cannot drive.");
