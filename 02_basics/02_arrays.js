const arr1 = ["thor","ironman","Spiderman"]
const arr2 = ["Superman","flash","batman"]
/* arr1.push(arr2)
console.log(arr1);
console.log(arr1[3][0]);   */

const arr3 = arr1.concat(arr2)
// console.log(arr3);

const arr4 = [...arr1,...arr2]
// console.log(arr4);

const arr5= [1,2,3,[4,5,6],7,[6,[4,5]]]
const arr6 = arr5.flat(Infinity)
// console.log(arr6);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({Name : "Hitesh"})); // it will give empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

