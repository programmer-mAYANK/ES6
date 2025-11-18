// Destructuring in JS: destructuring is a short and easy way to extract values from and arrays or objects and store them in variables.
// array,object
// let arr = [10, 20, 30]
// console.log(arr[0])
// let a = arr[0]
// let b = arr[1]
// let c = arr[2]
// console.log(a, b, c)

// with destructring
// let [first, second, third] = arr;
// console.log(first, second)


// let a = 10;
// let b = 20;
// [a, b] = [b, a]
// console.log(a, b)


// let arr = [10, 20, 30, 40, 50, 60, 70, 80];
// let [first, ...rest] = arr;
// console.log(first)
// console.log(rest)

// // Object Destructuring
// let book = {
//     book_name: "Advanced Js",
//     book_price: 500,
//     book_pages: 750,
//     publication: {
//         name: "Js publication",
//         year: 2015
//     }
// }
// // rename variable
// let { book_name: book_title, book_price: price, book_pages, publication: { name,yera} }
// = book;
// console.log(book_title, price)

// extract name and age
// let user = {
// name: "Alice",
    // age: 25
// }
// rename properties while destructuring
// Extract math and eng from nested array
// let student = {
//     marks: { math: 80, eng: 90 }    
// }

// Extract firdt value seperately and remaining values using rest
// filter out even numbers and destructuring first and third element
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Combine array and object destructring
let arrObj = [
    { id: 1, name: "Laptop"},
    { id: 2, name: "Phone"}
]
let [{id:id1, name: p1},{id: id2, name: p2}] = arrObj

// remove password from an array
let user1 = [
    { name: "John", email: "john@email.com", password: "john123"},
    { name: "Alice", email: "alice@email.com", password: "alice123"},
    { name: "Jack", email: "jack@email.com", password: "jack123"},
]

// filter profiles with same department
let user2 = [
    { name: "John", email: "john@email.com", password: "john123", department: "IT"},
    { name: "Alice", email: "alice@email.com", password: "alice123", department: "HR"},
    { name: "Jack", email: "jack@email.com", password: "jack123", department: "IT"},
]
let personWithSameDept