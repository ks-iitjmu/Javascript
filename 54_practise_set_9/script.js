// Kunal Sharma IIT Jammu

// // Question 1
// const loadScript = (src) => {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement("script");
//     script.type = "text/javascript";
//     script.src = src;
//     document.body.appendChild(script);
//     script.onload = () => {
//       resolve(1);
//     };
//     script.onerror = () => {
//       reject(0);
//     };
//   });
// };

// let p = loadScript("./add.js");
// p.then((value) => {
//   console.log(value);
// });

// // Question 2
// const loadScript = async (src) => {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement("script");
//     script.src = src;
//     script.onload = () => {
//       resolve(src);
//     };
//     script.onerror = () => {
//       reject(new Error(`Failed to load script: ${src}`));
//     };
//     document.body.appendChild(script);
//   });
// };

// const main = async () => {
//   try {
//     let a = await loadScript("./add.js");
//     console.log("Script loaded:", a);
//   } catch (err) {
//     console.error(err);
//   }
// };

// main();

// // Question 3
// let p = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error("This is an Error."));
//     }, 3000);
//   });
// };

// let a = async () => {
//   try {
//     let c = await p();
//     console.log(c);
//   } catch (error) {
//     console.log("This error has been handled.");
//   }
// };

// a();

// // Question 4
// let p1 = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(10);
//     }, 2000);
//   });
// };

// let p2 = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(20);
//     }, 1000);
//   });
// };

// let p3 = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(30);
//     }, 3000);
//   });
// };

// const run = async () => {
//   console.time("run");
//   let a1 = await p1();
//   console.log(a1);
//   let a2 = await p2();
//   console.log(a2);
//   let a3 = await p3();
//   console.log(a3);
//   console.timeEnd("run");
// };

// const run2 = async () => {
//   console.time("run2");
//   let a1 = p1();
//   let a2 = p2();
//   let a3 = p3();
//   let res = await Promise.all([a1, a2, a3]);
//   console.log(res);
//   console.timeEnd("run2");
// };

// run();
// run2();
