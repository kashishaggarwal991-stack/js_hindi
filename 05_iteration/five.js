const coding = ["js","ruby","python","java"]
// We will use callback(no name) fxn here 
// coding.forEach(function(val){
//     console.log(val);
    
// })

// coding.forEach( (val) => {
//     console.log(val);
    
// })

// function printMe(item){
//     console.log(item);
    
// }

// coding.forEach(printMe)

// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
    
// })

const myCoding = [ 
    {languageName : "javascript",
    languageFileName : "js"
    },

    {languageName : "java",
    languageFileName : "javac"
    },

    {languageName : "python",
    languageFileName : "py"
    },


]

myCoding.forEach( (val) => {
    console.log(val.languageName);
    
})