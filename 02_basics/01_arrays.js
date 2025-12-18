const arr1 = [1,2,3,4,true]
// console.log(arr1[2]);
// const arr2 = new Array(1,2,3,4)
/* arr1.push(6)
arr1.push(7)
arr1.pop()   */


//arr1.unshift(0) the given element will come in starting of array
arr1.shift() // pop the starting element
 console.log(arr1.includes(9));
console.log(arr1.indexOf(3));
console.log(arr1.indexOf(9));   

// console.log(arr1);
//  console.log(typeof arr1);  //object

const arr2 = arr1.join() // it will convert array in string
console.log(arr2);
console.log(typeof arr2);
 console.log(arr1);
 
// slice and splice
const nyn1 = arr1.slice(1,3)
console.log(nyn1);
console.log("A" , arr1);


const nyn2 = arr1.splice(1,3)
console.log(nyn2);
console.log("B" , arr1);





 

