/*
Arrow Functions / Lambda Functions
Lambda refers to anonymous functions in programming. 
Lambda functions are a concise mechanism to represent anonymous functions. 
These functions are also called as Arrow functions.
*/

// Lamda expression
//It is an anonymous function expression that points to a single line of code.
var fun = (x:number)=> 10 + x 
console.log(fun(100));
 
// Lamda Statement
//Lambda statement is an anonymous function declaration 
//that points to a block of code.
var gun = (x:number)=> {    
    console.log("Inside gun");
    console.log(x)  
 } 
 gun(100);


