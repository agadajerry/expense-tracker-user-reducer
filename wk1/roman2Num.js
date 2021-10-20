//  Reusable function
 function char2Num(ch){

    // Using switch statement to identify  the equivalent number

    switch(ch){
        case"I": return 1;  //retun statement act as a break here
        case"V": return 5;
        case"X" : return 10 ;
        case "L": return 50;
        case "C" :return 100;
        case"D" : return 500;
        case "M" :return 1000;
        default : return -1;

    }
} //end of char2Num function



// This function read individual string usingcharAt function

function roman_num_converter(romVal){

    str  = romVal.toUpperCase();
    let initCurr = char2Num(str.charAt(0));

    for(let i=1;i<str.length;i++){

        let currentVal = char2Num(str.charAt(i));

        let prevVal = char2Num(str.charAt(i-1));

        if(currentVal<=prevVal){
            initCurr+=currentVal;
            
        }else{

            initCurr = initCurr - prevVal*2 +currentVal;
        }
    }
    return initCurr;
}

let result  = roman_num_converter("iVc");
console.log(result);

