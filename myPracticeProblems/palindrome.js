function palindrome(x){
let arr=x.split('');
var y="";
for(let i=0;i<x.length;i++)
{
  y+=arr.pop();
}
console.log(y)
if(x===y){
  console.log('this is palindrome')
}
else{
  console.log('this is not a palindrome')
}
}
 palindrome("pqqqqp")


 