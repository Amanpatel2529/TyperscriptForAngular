/*
    Inheritance : Reusablity
    typescript supports single level, multiple, multilevel inheritance.
    Access specifiers are public, private, protected.
    Default access specifier is public.
*/
 
// Declare class Student
class Student 
{ 
    // Characteristics
    Sname:string; 
  
    //constructor 
    constructor(value:string) 
    { 
       this.Sname = value 
    }  
 
    //Behaviour
    DisplayS():void 
    { 
       console.log("Name of student : "+this.Sname) 
    } 
 }

 // Inherite Student class
 //use keyword extend
 class Employee extends Student
 {
    // Characteristics
    Eid : number;

    //constructor 
    constructor(value:number, name:string) 
    { 
        super(name);  //super keyword
        this.Eid = value; 
    }  
 
    //Behaviour
    DisplayE():void 
    { 
       console.log("ID of Employee : "+this.Eid) 
    }
 }

 // Create object of above class
 var obj1 = new Employee(11,"Piyush Khairnar");
 obj1.DisplayS();
 obj1.DisplayE();

 // instanceof operator is used to check whether the specific variable is object of class or not

 var bret = obj1 instanceof Student; //instanceof
 console.log(" obj1 is an instance of Student " +bret);

 var bret = obj1 instanceof Employee; 
 console.log(" obj1 is an instance of Employee " +bret);