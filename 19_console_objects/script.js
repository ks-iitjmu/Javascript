// Kunal Sharma IIT Jammu

console.log("log");
console.info("info");
console.warn("warn");
console.error("error");
console.info("info");
console.assert("err" != false);
console.assert("err" == false);

console.time("forloop");
for (let i = 0; i < 500; i++) {
  console.log(2005);
}
console.timeEnd("forloop");
