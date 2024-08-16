main()

function main()
{
 let bret=ChkPrime(11);
 if(bret===true)
 console.log("No is Prime");
 else
 console.log("No is Not Prime");
 
 
}

function ChkPrime(no:number):boolean
{
    if(no==2)
    return true;

    let flag:boolean=true;

    for (let index = 2; index <=no/2; index++) 
    {
       if(no%index==0)
       {
           flag=false;
           break;
       }
    }
    return flag;
}