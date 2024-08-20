main()

 function main():void
 {
    let array:number[]=[23,89,6,29,56,45,77,32];
    let iret:number=SecondLargestFromArray(array);
    console.log("Second largest element from array is "+iret);
 }

 function SecondLargestFromArray(array:number[]):number
 {
     let max=0,secondmax=0;
  for (let index = 0; index < array.length; index++) 
  {
      if(array[index]>max)
      {
         secondmax=max;
          max=array[index];  
      }
      if(secondmax<array[index]&& array[index]!=max)
      {
        secondmax=array[index];
      }
  }
  return secondmax;
 }
