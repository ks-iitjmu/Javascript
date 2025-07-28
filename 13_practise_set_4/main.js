// Kunal Sharma IIT Jammu

// Question 1
let str = "kunal\"";
console.log(str)
console.log(str.length);

// Question 2
const sentence = "The quick brown fox jumps over the lazy dog.";
const word = "fox";
const word2 = "kunal";
console.log(
  `The Word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence.`
);
console.log(
  `The Word "${word2}" ${
    sentence.includes(word2) ? "is" : "is not"
  } in the sentence.`
);
console.log(sentence.startsWith("The"));
console.log(sentence.endsWith("The"));

// Question 3
let Name = "Kunal Sharma";
console.log(Name.toUpperCase());
console.log(Name.toLowerCase());

// Question 4
let line = "Please give me RS 1000";
let amount = Number.parseInt(line.slice(18));
console.log(amount);
console.log(typeof amount);

// Question 5
let str2 = "Rishi Knitwear";
str2[4] = "t";
console.log(str2); // string is not changed because string is immutable
