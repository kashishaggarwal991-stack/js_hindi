const coding = ["js","ruby","python","java"]
// it does not return values
// let x = coding.forEach(function(val){
//    // console.log(val);
//     return val
// })

// console.log(x);

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num)  =>  {
//     return num>4
// })

// const newNums = []
// myNums.forEach( (num) =>  {
//     if(num>4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const myNum = [1,2,3,4,5,6,7,8,9,10]

// const num = myNum.map( (i) =>  (i+10))
// Chaining 
const num = myNum.map( (i) =>  i*10)
                 .map( (i) => i+1)
                 .filter((i) => i>=40)
console.log(num);
