
// check for match and unmatched brackets

function isValid(str){

    let stack = [];
    // length of a given string
    let len = str.length;

    let i;

    for(i =0; i<len; i++){
    
        if(str[i] === "(" || str[i]=== "{" || str[i] === "["){
            stack.push(str[i]);
        }else if(str[i]=== ")" || str[i]==="}"|| str[i]  === "]"){

            if(stack.length ===0){
                return false;
            }else{
                stack.pop();
            }
        }
    }
    return stack.length === 0 ? "valid":"Invalid";

}

console.log(isValid("{)[(}]"));