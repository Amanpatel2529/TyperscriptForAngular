main()

function main():void
{
 let arr:number[]=[23,6,7,4,5,7];
 let iret:number=SumOfArray(arr);
 console.log("Sum Of Array Is "+iret);
 
}

function SumOfArray(array:number[]):number
{
    let isum:number=0;
    for (let index = 0; index < array.length; index++) {
       isum=isum+array[index];
    }
    return isum;
}