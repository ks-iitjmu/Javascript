// Kunal Sharma IIT Jammu

let number = Math.floor(Math.random() * 100) + 1;
let chances = 0;
let a;

do {
  a = prompt("Enter your guess (1-100): ");
  a = Number.parseInt(a);
  if (isNaN(a)) {
    console.log("Please enter a valid number.");
    continue;
  }
  chances++;
  if (a > number) {
    console.log("The actual number is smaller.");
  } else if (a < number) {
    console.log("The actual number is bigger.");
  } else {
    console.log(
      `Congratulations! You guessed it right in ${chances} tries. Your score is ${
        100 - chances
      }.`
    );
    break;
  }
} while (chances < 100);

if (chances === 100 && a !== number) {
  console.log(`Sorry! You've used all 100 chances. The number was ${number}.`);
}
