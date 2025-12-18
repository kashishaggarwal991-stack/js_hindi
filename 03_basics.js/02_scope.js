var c = 300

if(true){
let a = 10
const b =20
var c = 30
}

//console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Hitesh"

function two(){
    const website = "youtube"
    console.log(username); // child can access parent variable
    
}
// console.log(website); 
two()

}

// one()

if(true){
    const username = "Hitesh"
if(username==="Hitesh"){
    const website = "youtube"
    console.log(username + website);
} 
//   console.log(website);
  
}

// console.log(username)


//////////////+++++++++++++//////////////////

console.log(addOne(5)); // we will get the answer
 
function addOne(num){
    return num+1
}

//console.log(addTwo(6)); // It will not work here because of the different way of declaration

const addTwo = function(num){
    return num+2
}


