function sayMyName(){
  console.log('H');
  console.log('I');
  console.log('T');
  console.log('E');
  console.log('S');
  console.log('H');
}

// sayMyName()

// function addNum(num1,num2){
//   console.log(num1+num2);
  
// }

// addNum(5,"a")

 function addNum(num1,num2){
  return num1+num2
  
 }

 // console.log("Sum : ",addNum(5,6));
 
 function loginUserMessage(username){
  if(username===undefined){
    // console.log("Please enter a valid name");
    return
  }
  return `${username} logged in`
 }

//  console.log(loginUserMessage("Ram"));
//  console.log(loginUserMessage());
 
// function calculateCartPrice(...num1){   // ... rest operator/spread operator
//   return num1
// }
function calculateCartPrice(val1,...num1){   // ... rest operator/spread operator
  return num1
}

console.log(calculateCartPrice(200,400,800));

const user = {
  name : "geeta",
  price : 99
}

function handleObject(anyObject){
   console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
   
}

// handleObject(user)
/* handleObject({
  name : "Sam",
  price : 200
})      */

  const newArr = [1,2,3,4,5]
  function returnSecondValue(getArr){
    return getArr[1]
  }

  console.log(returnSecondValue(newArr));
  
