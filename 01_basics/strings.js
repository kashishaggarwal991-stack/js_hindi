const name = "Kashish"
const repoCount = 10
// console.log(name+repoCount+ " hello");
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const game = new String("hite-shhc") 
 console.log(game[0]);
console.log(game.__proto__);
console.log(game.length);
console.log(game.charAt(4));
console.log(game.indexOf('i'));
console.log(game.toUpperCase());   
 console.log(game.charAt(4));

const newString = game.substring(0,4)
console.log(newString);  // only characters frpm 0 to 3 will come
const nextString = game.slice(-8,4) // negative values are also accepted
console.log(nextString )  
const one = "  hitesh  "
console.log(one.trim()) // it removes whitespace character

const two = "kashish@gmail.com/kashish%20gmail"
console.log(two.replace('%20','-'));  // replace a character

console.log(game.includes("hitr")); // checks if element is present or  not in string

console.log(game.split("-")); // splits string on basis of character we give




