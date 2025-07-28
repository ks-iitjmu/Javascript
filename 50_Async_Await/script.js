// Kunal Sharma IIT Jammu
async function Kunal() {
  let delhiW = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("26 deg");
    }, 2000);
  });
  let jammuW = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("18 deg");
    }, 8000);
  });

  console.log("Fetching delhi data: ");
  let dW = await delhiW;
  console.log("Fetched delhi data: ", dW);
  console.log("Fetching jammu data: ");
  let jW = await jammuW;
  console.log("Fetched jammu data: ", jW);
  return [dW, jW];
}

console.log("Welcome to weather control room.");
let a = Kunal();
a.then((value) => {
  console.log(value);
});
