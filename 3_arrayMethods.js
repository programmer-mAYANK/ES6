// array methods:

// FILTER(): it'll accept one argument that is callback function with a parameter, using filter, this method will change/reduce the original length of the array
// let arr =[12, 35, 8, 9, 45, 16, 25]
// > 10
// let filteredArr = arr.filter(elm => elm > 10)
// console.log(filteredArr)
// map(): it'll accept one argument that is callback function with a parameter, it'll not modify the length of the original array,it'll return a new aray
// let arr =[1, 2, 3, 4, 5]
// let mappedArr = arr.map(value => value * 2)
// let mappedArr1 = arr.map(value => value * value)
// console.log(mappedArr, mappedArr1)

// find(): it'll accept one argument that is callabck function with a parameter,return only single element(object,number,string), it'll not return array
// let arr = [12, 35, 8, 9, 45, 16, 25]
// let findElm = arr.find(val => val > 300)
// console.log(findElm)

// reduce(): sum, it'll accept one argument that is callback function with two parameters

// let numbers = [10, 20, 30, 40]
// let sum = numbers.reduce((total, num) => total + num, 0);
// console.log(sum);

// Q1. Add 5 to each number
// let arr = [1, 2, 3, 4, 5] 
// Q2. Convert names to uppercase
// let names = ["john", "alice", "bob"]
// Q3. filter even numbers
// Let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// Q4. find maximum number
// Let arr1 = [2, 10, 5, 30, 15]
// Q5. Find first number greater than 50
// let numbers = [20, 35, 55, 70, 10]
// Q6. Find specific name - "bob" in array
// Q7. Filter even numbers and then double them
// let arr = [1, 2, 3, 4, 5, 6]
// Q8. return only available products then apply 10% discount
// Q9. Find the employee with highest salary
// let employees = [
// {name:"John",salary: 35000};
// {name:"Alice",salary: 52000};
// {name:"Bob",salary: 47000};
// {name:"Jack",salary: 60000};
// Q10. Filter students who passed all subjects 
// var marks = [
//   { name: "Aman", math: 80, sci: 45, eng: 90 },
//   { name: "Riya", math: 35, sci: 30, eng: 25 },
//   { name: "Kabir", math: 65, sci: 60, eng: 70 }
// ];
// Pass marks = 40
// Return only students who passed all three subjects.


// 1.
// let arr = [1, 2, 3, 4, 5]
// let addArr = arr.map(value => value + 5)
// console.log(addArr);

// 2.
// let names = ["john", "alice", "bob"]
// let uppercasedNames = names.map(name => name.toUpperCase())
// console.log(uppercasedNames);

// 3.
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// let evenNumbers = numbers.filter(num => num % 2 === 0)
// console.log(evenNumbers);

// 4.
// let arr1 = [2, 10, 5, 30, 15]
// let maxNumber = arr1.reduce((max, num) => (num > max ? num : max), arr1[0])
// console.log(maxNumber);

// 5.
// let numbers1 = [20, 35, 55, 70, 10]
// let firstGreaterThan50 = numbers1.find(num => num > 50)
// console.log(firstGreaterThan50);

// 6.
// let nameArray = ["john", "alice", "bob", ]
// let specificName = nameArray.find(name => name === "bob")
// console.log(specificName);

// 7.
// let arr = [1, 2, 3, 4, 5, 6]
// let result  = arr.filter(num => num % 2 === 0).map(num => num * 2)
// console.log(result);

// 8.
// let products = [
//     { name: "laptop", price: 60000, inStock: true },
//     { name: "mobile", price: 30000, inStock: false },
//     { name: "Keyboard", price: 2000, inStock: true },
//     { name: "Mouse", price: 800, inStock: true },
// ]

// let discountedProducts = products.filter(product => product.inStock).map(product => ({
//     ...product,
//     price: product.price * 0.9 
// })) 
// const result ="discountedProducts";
// console.log(result);

// 9.
// let employees = [
//   { name: "John", salary: 35000 },
//   { name: "Alice", salary: 52000 },
//   { name: "Bob", salary: 47000 },
//   { name: "Jack", salary: 60000 }
// ];

// let highestSalaryEmployee = employees.reduce(
//     (max, emp) => (emp.salary >max.salary ? emp : max),
//     employees [0]
// );

// const result = highestSalaryEmployee;
// console.log(result);

// 10.
// var marks = [ 
//   {name: "Aman", math: 80, science: 45, english: 90}, 
//   {name: "Riya", math: 35, science: 30, english: 25},
//   {name: "Kabir", math: 65, science: 60, english: 70},  
// ];
// var passMarks = 40;
// var passedStudents = marks.filter(student =>
//   student.math >= passMarks &&
//   student.science >= passMarks &&
//   student.english >= passMarks       
// ); 
// console.log("Students who passed all subjects:" , passedStudents); 
// const users =[{ name: "Alice", age: 24},
// { name: "Bob", age: 27},
// { name: "Charlie", age: 22},
// { name: "Dave", age: 30}];

// let ageMoreThan25 = users.filter(userAge => userAge.age > 25)
// console.log(ageMoreThan25)

// map(): always returns a new array, it'll not modify the length of the original array in argument we have to pass callback function with parameter which will check each elements of an array

// let arr = [1, 2, 3, 4, 5]
// let result = [2, 4, 6, 8, 10]
// let result = [1, 4, 9, 16, 25]
// let result = arr.map(val => val * 2)

// let result = arr.map(val => val * val)

// let result = arr.map(val => val > 2) // X
// [false,false,true,true,true]
// console.log(result)

// find(): it'll not return any array, return only one element while condition is not first.
// match then it'll return undefined

let arr1 = [8, 4, 102, 7, 15, 26, 2, 90, 270]
// return element greater than 10
// let arr1 = [1, 2, 3, 4, 5]
let greaterThan10 = arr1.find(val => val > 10)
console.log(greaterThan10)