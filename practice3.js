
// re declare possible in var , is not possible in let, const
//   re assiging value is posible in var .,let ,but not posbile in const
// with const we have to asign and declare at same time

// const { any } = require("prop-types");


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



// check the string is alindrome or not

//  let isPalindrome=(str)=>{
//     let result =str.split('').reverse().join("");

//     let isTrue=(result===str)?"given string is palidnrome ":"its not palindrome "
//     console.log(isTrue);
//  }
//  isPalindrome("racecar");

// const a = new Set([1, 2, 3]);
// const b = new Set([2,4,5]);
// console.log(a.size); //3
// a.add(6,45); //it only adds one element
// console.log(a); //{ 1, 2, 3, 6 }
// console.log(a.size); //4
// // a.clear(); //remoes all elemnts from set
// // console.log(a); //0

// console.log(a.has(4));


// remove duplicate elemnts from array 

// let arr=[1,2,3,4,5,5,5,3];
//  console.log( [...new Set(arr)]);
//  console.log( [...new Set(arr)]);

// console.log([...new Set(arr)]);

// let arr=[1,2,3,43,3,3,3,65,5,5,3];
// let uniqueArray=[];
// for (const [index,item] of arr.entries()) {
//     console.log(index);
//     (uniqueArray.indexOf(arr[index]) === -1)?uniqueArray.push(arr[index]):null;
// }
// console.log(uniqueArray);

// check weteher the given arays are anagrams or not
// an anagram is a word formed by rearranging the letters of another word


// let str1="listen";
// let str2= "silent";
// let str1Array=str1.split("");
// let str2Array=str2.split("");
// let check=0;
// if(str1.length === str2.length){
// for (i=0; i<str1Array.length; i++){
//      if(( str2Array.includes(str1Array[i]))){
//         check++;
//      }else{
//         console.log("its not anagan");
//      }
// }
//   console.log((check === str1.length)?"its anagan": "iits not anagan");
// }else{
//     console.log("its not anagan");
// }

// the above method is i tried my own and anothe method  is

// let str1="lisaten";
// let str2= "silaent";
// let result1= str1.split('').sort().join('')
// let result2= str2.split('').sort().join('')
// let finalResult=(result1 === result2 )? "its anagan" :" its not anagan";
// console.log(finalResult);

// finden umber of vovels in string

// let str = "hellow world";
// let vowels = ["a", "e", "i", "o", "u"];
// let count = 0;
// for (const iterator of str.toLocaleLowerCase()) {
//   vowels.includes(iterator) ? count++ : null;
// }
// console.log(count); //3


// is number is evn or odd


//  let num =12;
//  let isPrime=()=>{
//  for(i=2; i<=num /2; i++){
//  if(num % i == 0){
//     return false

//  }
//  }
// return "its prime";
//  }

//  console.log( isPrime(7));

// let pnum=17;
// let c=0;

// for (i=0; i<pnum; i++){
//     if(pnum %i ===  0){
//         c++;
//     }
// }
// if(c>2){
//     console.log("its not prime");
// }else{
//     console.log("its  prime");
// }

// function findeletter(s){
// console.log(s.indexOf("g",14,11,14));
// return 1;
// }
// findeletter("he is a good boy and have good heart");

// const s="Hai darlings hai elaunnao hai ra  bagunnava hai ";
// console.log(s.slice(1,7));

// var x="10";
// var y="apple";
// var z=x/y;
// console.log(z); //nan

// let a=9.52223;
// console.log(a.toFixed()); //9.73 rounded to it's earest intiger 
// console.log( typeof (a.toFixed(2))); //9.73 string
// console.log(typeof a);//number
// console.log(a.toFixed(3));//9.732
// console.log(a.toFixed(10));//9.7322300000


// let a=5.436;
// let b=a.toPrecision(2); //5.4 ->length of numbers
// let c=a.toFixed(2); //5.44 
// console.log(parseInt(a));
// console.log(b); //5.4
// console.log(c) //5.44
// console.log(typeof b); //string
// console.log( typeof c); //string

// // methods that converts variable to numbers
// let d= Number(b)
// console.log( typeof d); //number


// let x=new Number(15);
// let y= new Number(15)
// console.log(x===y); //false because two object cant be compared 


// let str ="apple is soo cool"
// let result= str.slice(2,4);
// console.log(result);

//  let str ="apple is soo cool"
// let result= str.substring(2,4);
// console.log(result);

// let str ="apple is soo cool"
// let result= str.substr(2,4); //2nd index is lenth
// console.log(result);

// the call back function look like 
// function sum (a,b){
//    console.log(a+b);
// }

// function calculation (a,b, sumCallback){
//     sumCallback(a,b);    
// }
// calculation(9,9,sum); //18

// // or 

// calculation(9,9,(a,b)=>{
//     console.log(a+b);
// })

// call back hell loosks like bellow

// thebellow code gives 3 function sout at same time after 2sc 

// function getData(getid){

//     setTimeout(() => {
//         console.log("data: "+ getid);
//     }, 2000);
// }
// getData(27);
// getData(45);
// getData(81);

// the above code gives out of 3 functions after 2 sec same time if we want one by one 


// function getData(getid,getnextDta){

//     setTimeout(() => {

//         console.log("data: "+ getid);
//         if(getnextDta){
//         getnextDta();
//         }
//     }, 2000);
// }
// getData(27,()=>{
//     getData(9,()=>{
//         getData(81);
//     });

// })

// this is the look of the bbody function 

// const str="hellow";
// str.length=10;
// console.log(str.length);
// console.log(str);



// function fact(n){
//     if(n=== 1 || n===0 ){
//         //becaus factorial of 0 is 1
//         return 1;
//     }
//     return n * fact(n-1);
// }
// console.log(fact(5));

// let fact =(n)=>{
//     if(n===0 || n===1 ){
//         return 1;
//     }
//     return n * fact(n-1);
// }
// console.log(fact(5));


// removie white spaces from string 

//   let str = "hellow removie whote spaces  from string ";
//   console.log(str.length);

//    let strarry=str.split("").filter((item)=>{
//      if(item !== " "){
//        return item;
//    }
// } );

// let result= strarry.join("");
// console.log(result.length);
// console.log(result);

// using regular expressions 
//   let str = "hellow removie whote spaces  from string ";
//   console.log(str.replace(/\s/g," "));




