
// (function() {
//     var a = b = 5;
//  })();
 
//  console.log(b); //5
//  (function() {
//     let a = b = 5;
//  })();
 
//  console.log(b);//5
//  (function() {
//     const a = b = 5;
//  })();

//  (function() {
//     "use strict";
// //it throws error because we have to give the scope of b is window  
//     var a = b = 5;
//  })();
 
//  console.log(b); //5
 
//  console.log(b);//5

// const add=(num1,num2)=>num1+num2;

// console.log(add(9,9));

// const multiply=(num1,num2)=>num1+num2;
// console.log(multiply(9,9));
// let num3="4.5";
// let num4="4.5";
// let val=parseFloat(num3)+parseFloat(num4);
// console.log(val);

// const addfloat1=(num1,num2)=> (parseFloat(num1)+parseFloat(num2)).toFixed(2);
// console.log(addfloat1("4.564576","4.5")); //9.06 string 
// // if we want to convert that string into number use + unary operator
// const addfloat2=(num1,num2)=> +(parseFloat(num1)+parseFloat(num2)).toFixed(2);
// console.log(addfloat2("4.564576","4.5")); //9.06 number 

// const findenumbergroupe= num =>{
//     if(num==0){
//       return "number is zero"  
//     }else{
//         // (num>0)?"number is postive ":"number is nagative"; // it retun undefinded wont work

//         if(num>0){
//             return "number is positve"
//         }else{
//             return "number is negative"
//         }
//     }
// }
// console.log(findenumbergroupe(9));

// using ternary operator 

// const findenumbersign= num =>{
//     let result= (num === 0) ? "numberis zero " : `${(num>0) ? "number is positive":"numberis nagative"}`
//     return result;
// }
// console.log(findenumbersign(9)); //positive
// console.log(findenumbersign(-9)); //negative
// console.log(findenumbersign(0)); //zero

// console.log(Math.sign(9)); //1
// console.log(Math.sign(-9)); //-1
// console.log(Math.sign(0)); //0

// const findenumbersign=num=>{
//     switch (Math.sign(num)) {
//         case 1: 
//         return "number is positive"
//             case -1:
//                 return "number is negative"
    
//         default:0
//         return "zero number"
//     }
// }
// console.log(findenumbersign(0));



// linear serach in js 

// let data = [3, 4, 6, 8, 68, 4, 3, 5, 356, 78, 81];

// const searchinglinrarly = (array, num) => {
//   for (let index = 0; index < array.length; index++) {
//     if (num === array[index]) {
//       return `item found in ${index + 1} possition `;
//     }
//   }
// };

// const result = searchinglinrarly(data, 6);
// console.log(result);





// // binary search 

// let data = [3, 4, 6, 8, 68, 5, 56, 78, 81];
// let sortedarry=data.sort((a,b)=>a-b);
// console.log(sortedarry);

// const binarysearch=( array,element)=>{
  
//     let start=0;
//     let end= array.length-1;


//     while(start <= end){
//     let mid =Math.floor((start+end)/2);
//     if(element == array[mid]){
//         return `elemnt found at possition ${mid+1}`
//     }else if(element > array[mid]){
//          start=mid+1;
//     }else{
//         end=mid-1;
//     }
//     }
//     return "elamnt not found"
// }

// console.log(binarysearch([10,12,14,16,17,18],16));
// console.log(binarysearch(sortedarry,8));




let a=[10,24,23,4,5,63,2,6,6,322,5,6,3];
let swap;
let bubblesortedarry=[];
for(i=0; i<a.length; i++){
  for(j=0;j<a.length; j++){
    if(a[j]>a[j+1]){
      swap=a[j];
      a[j]=a[j+1];
      a[j+1]=swap;
    }
  }
}

console.log(a); //[2, 3,  4,  5,  5,  6,6, 6, 10, 23, 24, 63,  322]
