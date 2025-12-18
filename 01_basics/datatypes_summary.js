// Primitive

// 7 types : String,Number,Boolean,null,undefined,symbol,BigInt

// Reference(Non-Primitive)
// Objects , Array , Functions

const Id = Symbol('123')
const anotherId = Symbol('123')
//  console.log(Id==anotherId);
// console.log(typeof anotherId)  
// Stack (Primitive)  and Heap(non-Primitive)
let myName = "Kashish"
let anotherName = myName
anotherName = "Riya"
console.log(anotherName); // here copy is created

// heap
let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo =  userOne  // here reference is passed
userTwo.email = "kishii@gmail.com" 
console.log(userOne.email);
console.log(userTwo.email);
console.log(userTwo)




