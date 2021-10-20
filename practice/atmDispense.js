const withdraw = amount => {
  let arrHolder = [];
  let currentA=0;
  let remain=0;

  if(amount>=100){
    remain = amount/100;
    currentA = amount%100;
    
    arrHolder.push(Math.floor(remain));
  }else{
    arrHolder.push(0);
    // currentA=amount;

  }
  if(currentA>=50){
    remain = currentA/50;
    currentA = currentA%50;
  
    
    arrHolder.push(Math.floor(remain));
  }
  else{
    arrHolder.push(0);
    // currentA=amount;
  }
  if(currentA>=20){
    remain = currentA/20;
    
    arrHolder.push(Math.floor(remain));
  }else{
    arrHolder.push(0);
  }
  
  return arrHolder;
  
  
};

console.log(withdraw(20));
