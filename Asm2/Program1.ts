main()

function main():void
{
  let array:number[]=[23,89,6,29,56,45,77,32];
  let iret:number=MaxFromArray(array);
  console.log("Max fro array is "+iret);
  
}

function MaxFromArray(arr:number[]):number
{
    let max:number=0;
    for (let index = 0; index < arr.length; index++) 
    {
       if(arr[index]>max)
       max=arr[index];
    }
    return max;
}