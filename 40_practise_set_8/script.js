// Kunal Sharma IIT Jammu

// Question 3
document.getElementById("google").addEventListener("click", function (e) {
  window.location = "https://www.google.com";
  win.focus;
});

// Question 4
const fetchContent = async (url) => {
  con = await fetch(url);
  let a = await con.json();
  return a;
};

setInterval(async function () {
  let url = "https://jsonplaceholder.typicode.com/todos/1";
  console.log(await fetchContent(url));
}, 3000);

// Question 5
setInterval(async function () {
  document.querySelector("#bulb").classList.toggle("bulb");
}, 300);
