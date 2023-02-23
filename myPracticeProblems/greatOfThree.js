
function greatestOfThree(num1,num2,num3){
    var res=(num1>num2 && num1>num3) ? `The greatest amogst three is num1 ${num1}`:(num2>num3)?`The greater value is ${num2}`:`Num that is greater is ${num3}`
    return res;
    }
    console.log(greatestOfThree(1000,280,30));
    