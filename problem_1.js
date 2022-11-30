for(let i=1; i<=20 ;i++){
let num=i;
  let count=0;

  for(let j=1; j<=num ; j++){
    if(num%j==2){
      count++;
    }
  }
  if(count==0){
    console.log(i,"is a prime number")
  }
  else{
    console.log(i,"is not a prime number")
  }
}