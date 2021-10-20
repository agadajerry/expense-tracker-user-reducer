
function num2Roman(num){
   
const lookUp = {
    1: "I", 4 :"IV", 5 : "V", 9 : "IX", 10:"X", 40 :"XL",
     50:"L", 90:"XC", 100:"C", 500 :"D", 900 :"CM", 1000 :"M"
}
const numArr = [1000,900,500,400,100,90,50,40,10,5,4,1];
let i =0;
let subtract;
let romanHolder = "";
while(num>0){
    subtract = numArr[i];
    if(subtract>num){
        i++;
    }else{

        num-= subtract;
        romanHolder+= lookUp[subtract];//value for the subtract
    }
}
return romanHolder;
}
 let result  = num2Roman(563);

 console.log(result);
