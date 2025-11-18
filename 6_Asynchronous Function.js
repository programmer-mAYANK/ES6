// Promise:

// function checkNumber(num) {
//     return new Promise((reslove, reject)=>{
//         if (num > 10) {
//             reslove("number is grater than 10")
//         }
//          else { 
//             reject("number is 10 or less")
//         }
//     })
// }
// checkNumber(15)
//       .then(response => console.log(response))
//       .catch(error => console.log(error))

// const url ="https://fakestoreapi.com/users";

// const fetchData = () =>{
//     return new Promise((resolve, reject) => {
//         fetch (url)   
//         .then(response => {
//             if (!response.ok) {
//                 reject(new Error("Network response was not ok!"))
//             }
//             else{
//                 return response.json();
//             }    
//         })
//         .then(data => resolve(data))
//         .catch(error => reject(error))
//     })    
// }    
// fetchData()
// .then(data => console.log(data))
// .catch(error => console.log("there has a been a pronblem with fetch operation: ", error));

// async-await

console.log("Hello Asynchronous Function...")
async function fetchData() {
    try{
        const response = await fetch("https://fakestoreapi.com/users")
        const data = await response.json();
        console.log(data)
    }
    catch(error){
        console.log("Error:", err)
    }
}
fetchData();
console.log("I'll execute first before data fetching...")