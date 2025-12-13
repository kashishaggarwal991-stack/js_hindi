const myNums = [1,2,3]
// const newNums = myNums.reduce(function (acc,curValue){
//     console.log(`acc : ${acc} and curValue is ${curValue}`);
    
//     return acc+curValue
// },0)

// const newNums = myNums.reduce( (acc,curValue) => (acc+curValue),0)

// console.log(newNums);

let shoppingCart = [
    {
        Course : "JavaScript",
        Charges : 999
    },
    {
        Course : "Python",
        Charges : 2000
    },
    {
        Course : "C++",
        Charges : 3000
    },
]

const totalPrice = shoppingCart.reduce( (acc,item) => (acc+item.Charges),0)
console.log(totalPrice);

