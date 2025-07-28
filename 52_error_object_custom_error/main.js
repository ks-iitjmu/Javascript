// Kunal Sharma IIT Jammu
let age1 = "829886";
let age2 = "34bkbnb345";

let age = (a) => {
  try {
    a = Number.parseInt(a);
    if (a > 120) {
      throw new ReferenceError("Kunal is not good");
    }
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
  }
  console.log("The script is still running.");
};

age(age1);
age(age2);
