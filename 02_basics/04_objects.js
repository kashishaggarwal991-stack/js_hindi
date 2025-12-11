// const user1 = new Object() Singleton Object
const user1 = {}
 user1.name = "Ram"
user1.email = "Ram@google.com"
user1.isLoggedin = "False"
// console.log(user1); 

const user2 = {
    email: "user2@gmail.com",
    username : {
        fullUsername : {
        firstName : "Hitesh",
        lastName : "Choudhary",
        }
    }
}

// console.log(user2.username.fullUsername.firstName);

const obj1 = { 1:"a" , 2 : "b"}
const obj2 = { 3 : "c" , 4 : "d"}
// const obj3 = {obj1,obj2}
//const obj4 = Object.assign({},obj1,obj2)
const obj4 = {...obj1,...obj2}
// console.log(obj4);

// console.log(Object.keys(user1)); // gives the keys in array
// console.log(Object.values(user1));
// console.log(Object.entries(user1));

// console.log(user1.hasOwnProperty('isLoggedin'));


const course = {
    courseInstructor : "Hitesh",
    Charges : 999
}

// course.courseInstructor

const{courseInstructor:inst} = course // if we don't have to use course.courseInstructor again for accessing
// console.log(inst);

// this is how APIs work
/* {
    "courseInstructor" : "Hitesh",
   "Charges" : "free"
}   */ 


   [
    {},
    {}
   ]


