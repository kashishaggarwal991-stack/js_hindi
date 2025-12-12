const user = {
    username : "Hitesh",
    Price : 999,

   welcomeMessage:function(){
     console.log(`${this.username}, welcome to website`);
     console.log(this); // it refers to the current context
     
   }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this); empty string aaygaa

// function chai(){
//     let username = "Ram"
//     console.log(this.username);  undefined output
    
// }

// chai()

// let chai = function(){
//     let username = "Hitesh"
//     console.log(this.username);  undefined
    
// }

//////////Declaration of arrow fxn

// Explicit as we are using curly braces
// let chai = () => {
//      let username = "Hitesh"
//     console.log(this.username);  undefined
    
//  }
//chai()

// Implicit it will not contain return
//let addNum = (num1,num2) =>  num1+num2
//let addNum = (num1,num2) =>  (num1+num2)
let addNum = (num1,num2) =>  ({username:"Hitesh"})
 console.log(addNum(5,6))