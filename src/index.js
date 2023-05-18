// 1. Write an ES6 function that takes an array of numbers and returns an array with each number incremented by 3 using the map method.

// const incrementNumbers = (numbers) => {
//   return numbers.map((number) => number + 3);
// };

// const numbers = [1, 2, 3, 4, 5];
// console.log(incrementNumbers(numbers));

// 2.Write an ES6 function that takes an array of strings and returns an array with all the strings capitalised using the map method.

// const capitalizeArray=(myArray)=>{
//   return myArray.map((array)=>array.toUpperCase())
// }

// const myArray=["apple","banana","cherry"]
// console.log(capitalizeArray(myArray))

// 3.Write an ES6 function that takes an array of objects representing people and returns an array of their ages using the map method.

// const getAges = (people) => {
//   return people.map((peep)=>peep.age)
// };

// const people = [
//   { name: "Ankit", age: 25 },
//   { name: "Vinit", age: 24 },
//   { name: "Shashi", age: 29 }
// ];

// const ages = getAges(people);
// console.log(ages);

// 4.Write an ES6 function that takes an array of objects representing products and returns an array with the product names in all lower case letters using the map method.

// const getProductNamesInLowerCase=(products)=>{
//   return products.map((product)=>product.name.toLowerCase())
// }

// const products=[
//   {name:"LIp BaLm",stock:100},
//   {name:"PERFUME",stock:400},
//   {name:"SOckS",stock:200}
// ]

// console.log(getProductNamesInLowerCase(products))

// 5.Write an ES6 function that takes an array of objects representing cities and returns an array of their names using the map method.

// const getCityNames = (cities) => {
//   return cities.map((city) => city.name);
// };

// const cities = [
//   { name: "New York", population: 8538000 },
//   { name: "Los Angeles", population: 3976000 },
//   { name: "Bangalore", population: 13608000 }
// ];

// console.log(getCityNames(cities));

// 6.Write an ES6 function that takes an array of strings and returns an array with only the strings that have a length greater than 5.

// const filterLongStrings=(fruits)=>{
//   return fruits.filter((fruit)=>fruit.length>5)
// }

// const fruits=["apple","banana","cherry","watermellon","pineapple"]
// console.log(filterLongStrings(fruits))

// 7.Write an ES6 function that takes an array of numbers and returns an array with only the numbers that are divisible by 3 and also by 5.

// *****************************IN MAP= TRUE ,FALSE TRUE FALSE IN FILTER=> ACTUAL VALUE******************************************************

// const isDivisibleBy3and5 = (numbers) => {
//   return numbers.filter((num) => num % 3 === 0 && num % 5 === 0);
// };

// const numbers = [1, 2, 30, 4, 15];
// console.log(isDivisibleBy3and5(numbers));

// 8.Write an ES6 function that takes an array of objects with the properties name and age, and returns an array with only the objects that have an age greater than 30.

// const filterByAge = (people) => people.filter(({ age }) => age > 30);

// const people = [
//   { name: "Rahul", age: 25 },
//   { name: "Raj", age: 35 },
//   { name: "Vijay", age: 45 }
// ];

// console.log(filterByAge(people));

// 9.Write an ES6 function that takes an array of objects with the properties name and score, and returns an array with only the objects that have a score greater than 80.
// NOT WORKING IN CSB IN NORMAL IT WILL WORK
// const filterByScore = (students) =>
//   students.filter((stdsInfo) => stdsInfo.score > 80);

// const students = [
//   { name: "Aditya", score: 85 },
//   { name: "Bob", score: 75 },
//   { name: "Charlie", score: 90 }
// ];

// console.log(filterByScore(students));

// 10. Write an ES6 function that takes an array of objects with the properties name, age and city, and returns an array with only the objects that have a city property of "Indore" and age greater than 70.

// const filterByCityAndAge = (people) => {
//   return people.filter((person) => person.city === "Indore" && person.age > 70);
// };

// const people = [
//   { name: "Ridhima", age: 75, city: "Indore" },
//   { name: "Akshay", age: 60, city: "Delhi" },
//   { name: "Udit", age: 80, city: "Indore" },
//   { name: "Venki", age: 80, city: "Bangalore" }
// ];

// const filteredPeople = filterByCityAndAge(people);
// console.log(filteredPeople);

// 11.Write an ES6 function that takes an array of objects containing book information (title, author, genre) and returns an array with only the books of "Science Fiction".

// const filterByGenre = (books, genre) => {
//   return books.filter((book) => book.genre === genre);
// };

// const books = [
//   {
//     title: "The Hitchhiker's Guide to the Galaxy",
//     author: "Douglas Adams",
//     genre: "Science Fiction"
//   },
//   {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     genre: "Fiction"
//   },
//   { title: "1984", author: "George Orwell", genre: "Science Fiction" },
//   { title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance" }
// ];

// const filteredBooks = filterByGenre(books, "Science Fiction");
// console.log(filteredBooks);

// 12. Write an ES6 function that takes an array of objects containing employee information (name, age, salary) and returns an array with only the employees who earn a salary above 22000 and age is above 25.

// Your ES6 code here

// const filterBySalary = (employees) => {
//   return employees.filter(({ salary, age }) => salary > 22000 && age > 25);
// };

// const employees = [
//   { name: "Abhay", age: 25, salary: 20000 },
//   { name: "Joice", age: 30, salary: 35000 },
//   { name: "Reena", age: 35, salary: 15000 },
//   { name: "Jeena", age: 40, salary: 50000 }
// ];

// const filteredEmployees = filterBySalary(employees, 22000, 25);
// console.log(filteredEmployees);
// Output: [{name: "Joice", age: 30, salary: 35000}, {name: "Jeena", age: 40, salary: 50000}]
