
// re declare possible in var , is not possible in let, const
//   re assiging value is posible in var .,let ,but not posbile in const 
// with const we have to asign and declare at same time 


// var a=10;
// console.log(a);
//  var a=20
// console.log(a);

// let b=10;
// console.log(b);
//   b=20
// console.log(b);

// const c=30;
// console.log(c);

// in object data typesits posible with const and let becuase its stores as reference type 


// console.log(a); //undefinde
// var a="raju";

// // console.log(b); //error
// // let b="raju";


// calingname();
// function calingname(){
//     console.log("namsthey sai ");
// }

// let a=123;
// let b= a.toString()
// console.log( typeof b);


// let trail=213;
// console.log(trail.toString());

// let text = "Hello World!";
// let result = text.toString();
// console.log( typeof result);

// let sum1=(a,b)=>a+b;

// console.log(sum1(4,5));

// function sum(c){
//     return function addwith2(d){
//         return c+d
//     }
// }

// console.log(sum(2)(6));

// let a= 'a'
// let b= 'b'
// console.log(a<b);


// const a = "a";
// const b = "b";
// if (a < b) {
//   // true
//   console.log(`${a} is less than ${b}`);
// } else if (a > b) {
//   console.log(`${a} is greater than ${b}`);
// } else {
//   console.log(`${a} and ${b} are equal.`);
// }


// let max=50;
// let min=55;
// let result= Math.ceil(Math.random()*(max-min) + min)
// console.log(result);

// let a=9;
// let b=4;
// let result=Math.sqrt( (Math.pow(a,2))+ (Math.pow(b,2)));
// console.log(result);


// reversinga tring 
// using for loop 
// let str="hellow";
// let result="";
// for(i=str.length-1;i>=0;i--){
//     result +=str[i];
    
// }
// console.log(result);


// usinf for loop fo rfunction 
// let reverseSrring=( str)=> {
//    let result="";
//    for(i=str.length-1;i>=0;i--){
//         result +=str[i]
//    }
//    return result;
// }
// console.log(reverseSrring("one"));//eno

// using string  methods 
// let reverseSrring=( str)=> {
//    let result= str.split("").reverse().join("");
//    return result
// }
// console.log(reverseSrring("one"));//eno

// finde the longest word in sentence 

// let sentence="my city name  is nellore"
//   let wordsArray=sentence.split(" ");
//   let sizeofstring=0;
//     for(i=0; i<wordsArray.length; i++){
//         if(wordsArray[i].length>=sizeofstring)
//         sizeofstring=wordsArray[i].length;
//     }
//     console.log(sizeofstring); //7 
//     let result=wordsArray.filter(item=>item.length===sizeofstring);
//     let [strname]=result;
//     console.log(strname); //nellore

//     // yes succesfully completed above task with my own thinking but long procedure urekha

     
// let sentence="my city name  is nellore javascript is favourite language";
//   let wordsArray=sentence.split(" ");
//   let longestword="";
//     for(i=0; i<wordsArray.length; i++){
//         if(wordsArray[i].length>=longestword.length)
//         longestword=wordsArray[i];
//     }
//     console.log(longestword); 
// how to make an arry of data into empty array without looping or using pop 


// let arr=[1,2,3,4,4];
// console.log(arr);
// arr.length=0;
// console.log(arr);


// how to take user inputs in node console 

// const readline=require('readline')
// const { stdin, stdout } = require('process');

// const rl=readline.createInterface({
//     input:stdin,
//     output:stdout
// })

// rl.question('enter the first value : ',(fvalue)=>{
    
// rl.question('enter the first value : ',(svalue)=>{
//     fvalue=Number(fvalue);
//     svalue=Number(svalue);
//   console.log(`the sum of the given values is : ${fvalue+svalue}`);
//     rl.close();
// })
// })

//    const { log } = require('console');
// const { stdin, stdout } = require('process');
// const readline =require('readline');

//    const rl=readline.createInterface({
//     input:stdin,
//     output:stdout
//    })
    

//    rl.question(`enter the input intiger : `,(num)=>{
//     console.log(typeof(+num));
//     // num= +num;
//     num=Number(num);
//     console.log(Number.isInteger(num));
//          rl.close();
        
//    })




// async function f() {
   
//     return 1;
//   }

  
//   console.log(f()); //Promise { 1 }
 

//  f().then((resolved)=>console.log("resolved"));



