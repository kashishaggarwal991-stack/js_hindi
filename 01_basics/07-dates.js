let myDate = new Date()
/* console.log(myDate.toLocaleDateString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());   */

/*  let myCreatedDate = new Date(2025,0,23,2,4);
console.log(myCreatedDate.toLocaleString());

console.log(typeof (myCreatedDate));    //object  */
let myCreatedDate = new Date("12-01-2025")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);   it will give answer in nano seconds
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getMonth());
console.log(newDate);
// console.log(newDate.getDay());   start from monday

newDate.toLocaleString('default',{
  weekday : "long"
})

   


