// //  findnig factorial 


// var n=3;
// var fact=1;
// for(var i=1; i<=n; i++){
//  fact= fact*i;
// }
// console.log(fact);

// using function 
// function fact(n){
//   var fact=1;
//   for(var i=1; i<=n; i++){
//    fact= fact*i;
//   }
//   return fact;

// }
// console.log(fact(6))



// function fact(n){
// if(n==0){
//   return 1;
// }
// return n*fact(n-1);

// }
// console.log(fact(5))

//  fibonassi program 

//  var n=10;
// var a=0,b=1;
// var c=0;
// for(i=0; i<=n;i++){
//   console.log(c);
// c=a+b;
// a=b;
// b=c;

// }

// var n=3;
// var x=0,y=1,z=0

// for(i=0; i<=n; i++){
//   z=x+y;
//   x=z;
  
  
// }



//
//  function fibo(n){
//   var c,a=0,b=1;
//   for(i=1; i<=n; i++){
//     c=a+b;
//     a=b;
//     b=c;
//  console.log(c);
// }
// console.log("\n");
//     return " ";
// }
// console.log(fibo(9));



//   fib(n){
//  if(n==0 || n==1){
//   return 1;
//   }
//   t = fib(n-1)+fib(n-2);
//   return t;
// }
//  console.log(fib(9));



// console.log(99);
// let x=[1,2,3];
// let y =x.indexOf(3)*2;
// console.log(y);

// console.log("namasthey sesha sai");
// let a=10;

// for(i=0; i<5; i++){
//     console.log( "from firt log "+a);
//     setTimeout(()=>console.log(i),1000)
// }


const obj1={
    name:"sesha",
      age :"31",
  }
  
  const obj2={
    height:"5.5",
    weight:"65",
  }
      
     
  
//   const obj3={...obj1,obj2};
//   console.log(obj3);

  let a=[10,20,30,40];
  let b=[...a];
  b[1]=9;
  console.log(a);
  console.log(b);
