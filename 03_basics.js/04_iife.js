// Immediately Invoked Function Expressions

(function chai(){  // named IIFE
    console.log("Hello");
    
})();

// If we want to run 2 iif together we should use semicolon at end of first iife

( (name) =>{
    console.log(`Hello , ${name}`);
    
}

)("Ram")