const promiseOne = new Promise(function(resolve,reject){
    // Do an async 
    // DB calls, cryptography , network
    setTimeout(function(){
        console.log("Async task is completed")
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise completed");
    
})


// new Promise((resolve, reject) => {
//     setTimeout(function(){
//         console.log("Async task 2");
//          resolve()
//     },1000)
    
// }).then(function(){
//   console.log("Async task resolved");
  

// })

// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(function(){
//         resolve({userName : "Kashish",email : "kashish@gmail.com"})
//     },1000)
// })

// promiseThree.then(function(user){
// console.log(user);

// })

// const promiseFour = new Promise(function(resolve, reject) {
//     setTimeout(function(){
//     const error = false
//     if(!error){
//         resolve({userName : "Kashish",password : "1234"})
//     }else{
//         reject("ERROR : Something went wrong")
//     }
//     },1000)
// })

// promiseFour.then(function(user){
// console.log(user);
// return user.userName
// }).then((userName)=>{
//     console.log(userName);
    
// }).catch(function(error){
//     console.log(error);
    
// }).finally(()=>{
//     console.log("Promise is either resolved or rejected");
    
// })


const promiseFive = new Promise(function(resolve,reject){
  setTimeout(function(){
    let error = false
    if(!error){
        resolve({username : "Javascript",password : "123"})
    }else{
      reject("ERROR : JS went wrong")
    }
  },1000)
});

async function consumepromiseFive() {
  try{
    const response = await promiseFive
    console.log(response);
    
  }catch(error){
    console.log(error);
    
  }
}
consumepromiseFive()

async function getAllUsers(){
  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    console.log(data);
    
  }catch(error){
    console.log("E: "+error);
    
  }
}
getAllUsers()

fetch('https://api.github.com/users/kashishaggarwal991-stack')
.then((response)=>{
  return response.json()
}).then((data)=>{
   console.log(data);
   
})
.catch((error) => console.log(error));
