let ss=userInput;
let sum=0;
for (let i=0;i<ss.length;i++)
{
   var dd=ss[i].split(' ');
   console.log(dd);
   for(var j=0;j<dd.length;j++)
   {
       sum=sum +  +(dd[j]);

   }
}
console.log(sum);