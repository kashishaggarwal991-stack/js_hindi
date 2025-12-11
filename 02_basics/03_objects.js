// Singleton

// Object Literals
const mySym = Symbol("key1")
const user = {
    Name : "Hitesh",
  "full name" : "Hitesh Choudhary",
    age : 19,
    [mySym] : "myKey1",
    email : "hitesh@gmail.com",
    location: "Jaipur",
    isLoggedIn :"true"
} 

/* console.log(user.email);
console.log(user["email"]);

console.log(user["full name"]);
console.log(user[mySym]);   */
user.email = "hitesh@microsoft.com"
console.log(user.email);
// Object.freeze(user) we can't modify values
user.email = "hitesh@google.com"
// console.log(user);

user.greetings = function(){
    console.log("Hello user");
    
}

user.greetings2 = function(){
    console.log(`Hello user , ${this.Name}`);
    
}

console.log(user.greetings());
console.log(user.greetings2());






