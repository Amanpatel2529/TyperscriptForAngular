/*
Inferred Typing

We can declar a variable without a type. In such cases, the compiler will determine the type of the variable on the basis of the value assigned to it. 
TypeScript will find the first usage of the variable within the code, determine the type to which it has been initially set and then assume the same type 
for this variable in the rest of your code block.
*/

var str ="Marvellous Infosystems"; // data type inferred as String
console.log("String contains : "+str);

var no = 2;    // data type inferred as  number 
console.log("value of no "+no);
 
