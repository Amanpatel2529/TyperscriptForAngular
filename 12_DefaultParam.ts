/*
Default Parameters
Function parameters can also be assigned values by default. However, such parameters can also be explicitly passed values.
*/

function percentage(marks:number,outof:number = 300) 
{ 
   var per = (marks/outof) * 100; 
   return per; 
}  
var iret:number;

iret = percentage(250); 
console.log(iret);
iret = percentage(250,500); 
console.log(iret);