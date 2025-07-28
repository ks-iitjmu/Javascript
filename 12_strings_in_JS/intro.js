// Kunal Sharma IIT Jammu

let Name = "Kunal Sharma";
console.log(Name);
console.log(Name.length);

let frnd = "Piyush Kumar";
console.log(frnd);

// printing each char of the string in new line
for (let a = 0; a < frnd.length; a++) {
  console.log(frnd[a]);
}

// Template Literals
let boy1 = "Kunal Sharma";
let boy2 = "Piyush Kumar";
let sentence = `${boy1} is a friend of ${boy2}.`;
console.log(sentence);

// Escape Characters
let person = "Nikhil D'suza";
console.log(person);
console.log("This is a tab \t escape character.");
console.log("This is a new line \n escape character.");
