// Kunal Sharma IIT Jammu
let user = prompt("Enter S, W and G");
let cpu1 = Math.floor(Math.random() * 3);
let cpu = ["S", "W", "G"][cpu1];

const match = (cpu, user) => {
  if (cpu == user) {
    return "draw";
  } else if (cpu == "S" && user == "W") {
    return "cpu";
  } else if (cpu == "W" && user == "G") {
    return "cpu";
  } else if (cpu == "G" && user == "S") {
    return "cpu";
  } else if (cpu == "S" && user == "G") {
    return "user";
  } else if (cpu == "G" && user == "W") {
    return "user";
  } else if (cpu == "W" && user == "S") {
    return "user";
  }
};

let result = match(cpu, user);

document.writeln(
  `CPU: ${cpu} <br/> User: ${user} <br/> ${
    result === "draw" ? `It's a draw` : `The Winner is ${result}`
  }`
);
