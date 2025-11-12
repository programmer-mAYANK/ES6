// array methods:

// filter(): it'll accept one argument that is callback function with a parameter, using filter, this method will change/reduce the original length of the array
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

let numbers = [10, 20, 30, 40]
let sum = numbers.reduce(total sum)
