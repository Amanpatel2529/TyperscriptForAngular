// Passing array to the function

var batches:string[] = new Array("PPA","UNIX","LB","ANGULAR"); 

function fun(arr:string[]) 
{
   for(var i = 0;i<arr.length;i++) 
   { 
      console.log(arr[i]) 
   }  
}   
 
// call the above function
fun(batches);

// Returning array from function

function gun():number[] 
{ 
    return new Array(10,20,30,40); 
} 
  
 var arr:number[] = gun();

 for(var i in arr) 
 { 
    console.log(arr[i]); 
 }