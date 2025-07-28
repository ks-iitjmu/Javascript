// Kunal Sharma IIT Jammu
let classMarks = [91, 34, 82, 84, "NP", 54, 48, 12, "NP"];
console.log(classMarks);
console.log(`The length of classMarks Array is ${classMarks.length}`);

for (let i = 0; i < classMarks.length; i++) {
  console.log(classMarks[i]);
}

console.log(classMarks[10]); // will be undefined because it is not in the array
classMarks[10] = 89; // adding new value to the array
console.log(classMarks[10]);
console.log(`The length of classMarks Array now is ${classMarks.length}`);
