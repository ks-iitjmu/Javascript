// Kunal Sharma IIT Jammu
const num = [1, 2, 3, 4, 5];
console.log(num);

// convert to string
console.log(num.toString());

// join elements to a string using a separator
console.log(num.join("-"));
console.log(typeof num.join("-"));

// popping an element from an array
let r = num.pop(); // returns the popped element
console.log(num, r);

// pushing an element into an array
num.push(5);
console.log(num);

// removing element from the beginning
let r1 = num.shift();
console.log(num, r1);

// adding element to the beginning
num.unshift(1);
console.log(num);

// deleting array element by index
delete num[4];
console.log(num);

num[4] = 5;
console.log(num);

// concat 3 arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];
console.log(arr1.concat(arr2, arr3));

// sorting an array
let arr4 = [23, 325, 4767, 12, 1, 5, 436, 45, 31, 78, 5473];
let comp = (a, b) => {
  return b - a;
};
arr4.sort(comp);
console.log(arr4);

// splice array method
let q = arr4.splice(2, 1, 23, 51);
console.log(arr4);
console.log(q);

// slice method
console.log(num.slice(2));
console.log(num.slice(2, 4));

// reverse
num.reverse()
console.log(num)