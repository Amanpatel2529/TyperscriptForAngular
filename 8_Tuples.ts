/*
Tuples :
It represents a heterogeneous collection of values.
*/

// Create and initialise tuples
var tuple1 = [10,"Marvellous",3.14];

// Accessing elements of tuples
console.log(tuple1[0]); 
console.log(tuple1[1]);
console.log(tuple1[2]);
console.log("Length of tuple : "+tuple1.length);
 
// Insert element into tuples
tuple1.push("Infosystems");
console.log(tuple1[3]);
console.log("Length of tuple after push : "+tuple1.length);

// Remove element from tuple
tuple1.pop();
console.log("Length of tuple after pop : "+tuple1.length);

// Update value of tuple
tuple1[0] = "Pune";

// Traversing tuples
console.log("Elements of tuples are");

for(var i=0; i<tuple1.length;i++)
{
    console.log(tuple1[i]);
}