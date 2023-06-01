let str="rupanwar";
let arr=str.split("");
console.log(arr);
const newArr=new Set(str);
 console.log(newArr);
 var count=0;
 let val="";
 let tmp=0;
 for(let i of newArr){
     for(let j in arr){
         val=i;
        if(val==arr[j])
        {
            count=count+1;
        }
       tmp=count;
     
 }
     count=0;
     console.log(val+":"+tmp )
 }
 