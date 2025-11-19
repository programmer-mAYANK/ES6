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
// .catch(error => console.log("there has a been a problem with fetch operation: ", error));

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


// Create a function that perform these steps using async-await:
// 1. Fetch users
// 2. wait 2 seconds
// 3. Fetch posts
// 4. Combine both results into a single object
// 5. return the final combined data.
// user url: https://jsonplaceholder.typicode.com/users
// posts url: https://jsonplaceholder.typicode.com/posts
// {user:,
// post: }


// 1. Fetch users
async function fetchUsersAndPosts() {
    try {   
        const usersResponse = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await usersResponse.json();
        
    // 2. wait 2 seconds
   await new Promise(resolve => setTimeout(resolve, 2000));

   // 3. Fetch posts
   const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
   const posts = await postsResponse.json();

    // 4. Combine both results into a single object
    const combinedData = {
    users: users,
    posts: posts,
    totalUsers: users.length,
    totalPosts: posts.length
};    
    
    // 5. return the final combined data.
    return combinedData;
    }
    catch (error) {
        console.log("Error:", error);
    }   
}

// Call the function and log the result
fetchUsersAndPosts()
    .then(data => console.log(data))
    .catch(error => console.log("Error in fetching users and posts:", error));    

// Create a promise-based function.
// accept username and password
// if both are correct -> resolve after 2 second
// if wrong -> reject immediately

function login(username, password) {
    return new Promise((resolve, reject) => {
        if (username === "admin" && password === "password123") {
            setTimeout(() => {
                resolve("Login successful!");
            }, 2000);
        } else {
            reject("Invalid username or password.");
        }
    });
}

// Create a promise-based function.

function createResource(resource) {
    return new Promise((resolve, reject) => {
        if (!resource || typeof resource !== 'object') {
            reject(new Error('Invalid resource'));
            return;
        }
        setTimeout(() => {
            const created = { id: Date.now(), ...resource };
            resolve(created);
        }, 1000);
    });
}

createResource({ title: 'New Post', body: 'Hello world' })
    .then(r => console.log('Created:', r))
    .catch(err => console.log('Create failed:', err));

// accept username and password  

function loginPromise(username, password) {
    return new Promise((resolve, reject) => {
        if (typeof username !== 'string' || typeof password !== 'string') {
            reject(new Error('Username and password must be strings'));
            return;
        }
        if (username === 'admin' && password === 'password123') {
            setTimeout(() => {
                resolve({ username: 'admin', message: 'Login successful', token: 'fake-jwt-token' });
            }, 2000);
        } else {
            reject(new Error('Invalid username or password'));
        }
    });
}

// if both are correct -> resolve after 2 second

function login(username, password) {
    return new Promise((resolve, reject) => {
        if (username === "admin" && password === "password123") {
            setTimeout(() => {
                resolve("Login successful!");
            }, 2000);
        } else {
            reject(new Error("Invalid username or password."));
        }
    });
}

// if wrong -> reject immediately