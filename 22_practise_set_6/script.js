// Kunal Sharma IIT Jammu

// Question 1
let age = prompt("What is Your Age?");
age = Number.parseInt(age);
let askAgain = true;

while (askAgain) {
  if (age >= 18) {
    alert("Yes you can drive.");
  } else if (age < 0) {
    console.error("Age can not be Negative.");
  } else {
    alert("No you can not drive.");
  }
  askAgain = confirm("Do You want to see the prompt again?");
  if (askAgain) {
    age = prompt("What is your age?");
    age = Number.parseInt(age);
  }
}

// Question 2
// added in the above code only

// Question 3
// added in the above code only
