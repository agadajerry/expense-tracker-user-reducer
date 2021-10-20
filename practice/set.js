const  setNum = (str)=>{
let charArr = str.split('');
let holder =[];

for(let i =0;i<charArr.length;i++){
    
    holder.push(charArr[i]);
    let index = str.charAt(i);

    if(holder[index]){
        return false;
    }
    return true;
}
let setChar = new Set(charArr);
// return setChar;
}
console.log(setNum(" aabcd"));
