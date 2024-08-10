
// Declare interface
interface Student 
{ 
    name:string, 
    college:string, 
    fun:()=>string 
 } 
 
 class Demo implements Student    //in java we use extend keyword for inherit class properties
 {
   name:string;
   college:string; 

   constructor(str1,str2)  //demo constructor - input params str1=name, str2=clgName
   {
      this.name = str1;   
      this.college = str2;
      console.log("Inside Demo constructor"); //log inside constructor
   }

   fun()  //function declaration 
   {
      return "Inside fun"; //returns string
   }
 }

var obj = new Demo("Piyush","PVG");  //creates obj to access Demo class and its properties 
// str1 contains : Piyush, str2 : PVG

 console.log(obj.name)  
 console.log(obj.college)
 console.log(obj.fun())  
 