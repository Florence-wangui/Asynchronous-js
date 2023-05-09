// Write an asynchronous function that accepts a message string and a delay time in milliseconds. 
// The function should log the message to the console after the specified delay time.
let greeting = ()=>{
    console.log("Hello, Everyone!");
}
let introduction = ()=>{
    console.log("I'm Flo, nice to meet y'all.");
};
greeting();
setTimeout(greeting, 3000);
setInterval(introduction, 2000);



// You have an array of user IDs and a function getUserData(id) that returns a Promise with user
//  data when given a user ID. Write an asynchronous function that fetches and logs the data for 
// each user ID one by one, in sequence.

async function fetchLogUserData(id){
    for (let i = 0; i < id.length; i++) {
        const logUser = await getUserData(id[i]);
        // console.log({getUserData});
        console.log({logUser});
    }
}
fetchLogUserData([0, 2, 4, 3, 1, 5, 6, 7]);

// You have an asynchronous function performTask() that returns a Promise. 
// The Promise resolves if the task is successful and rejects if there's an error. 
// Write a function that calls performTask() and logs a custom success message if the 
// task is successful, and a custom error message if there's an error.

let success = true;
let promise = new Promise(function(resolve, reject){
    if(success){
        resolve('Task successful!');
    }
    else{
        reject('Task unsuccessful!')
    }
});

console.log({promise});