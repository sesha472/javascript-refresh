     

       

// flattnenig array using flat method using depth 

// const arr1=[2,[34,[90,98,[97,90],99],44],[23,[87,98],[36,86,[32,65,[43,74]]]]];
// const flatenarray=arr1.flat(5);
// console.log(flatenarray);



// finde largest number in nested Array 

// const mainarray=[[3,4,5],[5,2,4],[3,4,556],[67,88,8]];
// const findelargnum=(arr1)=>{
//   let largnum=arr1[0][0];
//    for (const nestarr of arr1) {
//     for (const item of nestarr) {
//       if(item>largnum){
//         largnum=item;
//       }
//     }
//    }
//    return largnum
// }
// console.log(findelargnum(mainarray));




// const { array, element, func } = require("prop-types");

      //  flat the array using recursive function 
      // const arr = [
      //   2,
      //   [34, [90, 98, [97, 90], 99], 44],
      //   [23, [87, 98], [36, 86, [32, 65, [43, 74]]]],
      // ];
      // const newarray = [];
      // const flatarry = (arrayargumentr) => {
      //   for (let i = 0; i < arrayargumentr.length; i++) {
      //     if (Array.isArray(arrayargumentr[i])) {
      //       flatarry(arrayargumentr[i]);
      //     } else {
      //       newarray.push(arrayargumentr[i]);
      //     }
      //   }
      // };

      // flatarry(arr);
      // console.log(newarray);



      // check given string is palindroem or not 4
      // const name="mom";
      // const isPalindrome=(str)=> str.split("").reverse().join("") === str ;
      // console.log(isPalindrome(name));  //true


      // Write a function that takes an array of numbers and returns a new array with only the even numbers

      // const arr=[2,3,2,1,2,,6,7,4,32,2,7,9,3,42,342,2,];
      // const evenarray=(aarrargument)=>{
      //   const resultarray= aarrargument.filter((element)=>element%2 == 0 );
      //   return resultarray;
      // }
      // console.log(evenarray(arr));
       
      // factorial of a given number. 
        // const factnum= (n)=> {
        //   if ((n ===0)  || (n ===1)){
        //     return n
        //   }else{
        //     return n* factnum(n-1)
        //   }
        // }
        // console.log(factnum(3));




  //  is prime number or not 
  // function findeprimenumbers(num) { 

  //   if (num <= 1) return false; 
  
  //   for (let i = 2; i <= Math.sqrt(num); i++) { 
  
  //     if (num % i === 0) return false; 
  
  //   } 
  
  //   return true; 
  
  // } 

  //  fiding prime numbers from 0 to given number

  // const findeprimenumbers=(n)=>{
  //   let c=0;
  //   if(n == 1 || n==0){
  //   console.log("\n");
  //   return `${n} is not prime`
  //   }
  //   for(i=1; i<=n; i++){
  //     if(n%i == 0){
  //       c++;
  //     }
  //   }
  //   console.log("\n");
     
  //   return c>2?`${n}'is not prime'`:`${n}"is prime"`;
  // }

  // findeprimenumbers(7);

  // for (let i = 0; i < 30; i++) {
  //   console.log(findeprimenumbers(i));
  // }


// findnig factorial 

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


// const obj1={
//     name:"sesha",
//       age :"31",
//   }
  
//   const obj2={
//     height:"5.5",
//     weight:"65",
//   }
      
     
  
//   const obj3={...obj1,obj2};
//   console.log(obj3);

  // let a=[10,20,30,40];
  // let b=[...a];
  // b[1]=9;
  // console.log(a);
  // console.log(b);
