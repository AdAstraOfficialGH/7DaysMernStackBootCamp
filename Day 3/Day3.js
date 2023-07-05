// 1) Varaibles and Datatypes

// let id = 29;
// let name = "Raj";
// console.log("Your id is :", id, "Your name :", name);
// console.log(`your id is : ${id} and your name is ${name}`);

// var, let , const
// var name = "Raj";
// let profession = "MERN stack Developer"
// const course = "JS IN 7 DAYS"
// console.log(course);

// let a;
// a = "Shrini";

// const b = 18;
// console.log(b);

// let name = "sachin";
// let num = 18;
// let newNum = 18.4;
// let is_valid = false;
// let names = ["Raj", "Gautham", "Saurabh"];
// let person = {
//   id: 1,
//   name: "Simba",
//   profession: "Python dev",
// };
// console.log(typeof person);

// 2) Conditional Statements and loops

// let age = 16;

// if (age >= 18) {
//   console.log("you can drive the car");
// } else {
//   console.log("You cant drive the car");
// }

// let a = 1;
// let b = 2;
// let c = 5;

// if (a > b) {
//   console.log("a is greater than b");
// } else if (a > c) {
//   console.log("a is greater than c ");
// } else {
//   console.log("c is greater");
// }

// let age = 18;
// let result =age >= 18? console.log("You are an adult"): console.log("You are a child bro!");

// 3) functions and Arrow functions

// let employee = "Rahul";
// function greet(name) {
//   console.log(`Welcome to the company ${name}`);
// }
// greet(employee);

// Arrow functions

// const addNum = (a, b) => {
//   return a + b;
// };
// console.log("The sum of the numbers is : ", addNum(4, 5));

// const addNum = (a, b) => a + b;
// console.log(addNum(63, 2));

// 4) fetch api, async await and promises

// fetch api and async await

// async function getData() {
//   const response = await fetch("https://dummyjson.com/products");
//   const data = await response.json();
//   console.log(data);
// }

// fetch api and promises

// const getData = async () => {
//   await fetch("https://dummyjson.com/products")
//     .then((res) => {
//       data = res.json();
//       console.log(data);
//     })
//     .catch((err) => console.log(err));
// };

// getData();

// 5) Array methods and Array Destructuring

// const listOfStudents = ["stu1", "stu2", "stu3"];
// console.log(listOfStudents[2]);

// forEach, map , filter, reduce

// const fruitArr = ["Mango", "Papaya", "Watermelon", ""];
// fruitArr.forEach(function (value, index, arr) {
//   console.log(`The value is ${value}, its index number is ${index}`, arr);
// });

// fruitArr.map((value, index) => {
//   console.log(`The value is ${value}, its index number is ${index}`);
// });

// let numbers = [1, 2, 3, 4, 5, 6];
// // const result = numbers.filter((value, i) => {
// //   return value > 3;
// // });

// const result = numbers.reduce((prev,cur) => {
//   return prev + curr;
// });

// console.log(result);
// 6) spread operator and window

// let numbers = [1, 2, 3, 4, 5, 6];
// // let newArr = numbers; // nahi maine array ko copy nahi sirf refer kiya
// let newArr = [...numbers];

// console.log(numbers);

// 7) local storage

// const personalData = 12;
// localStorage.setItem("Mera Personal Data", personalData);
// const gettingData = localStorage.getItem("Mera Personal Data");
// localStorage.removeItem("Mera Personal Data");

// alert("Please check the console")
// const user = prompt("Enter your name ");

// setTimeout(() => {
//     console.log("Bro nailed it!🤣");
// }, 1000);

// setInterval(() => {
//   console.log("SOrry bro");
// }, 2000);
