







    












// var a; //declaring a variable is  variable with data type is declartion 
// var a=5; //
// console.log(a);
// let b;
//  b=9;
// console.log(a);
// const c= 9;
// console.log(c);

// var is global scope ,let const are block scope 
// re-declartion is posible in var but not in let,const 
// re-assigning value is posible in var and let ,but not in const  for primitive data type sonly 
// declartion and assignemnt should be done at same time with const and we cant change const value 


// hoisting simply means moving declartions to top
// in js both declaring and asigning value is not hoisting 


// console.log(a); //undefinde
// a()// error
// var a=()=>{
//     console.log("a function");
// }

// var a=function (){
//     console.log("normal functio a");
// }


// iffe functivar 
// var user ="sesha"
// function a(){
//     user="sai"
// }
// a()
// console.log(user);

// var user = "sesha";

// var a = (function (user) {
//   user = "sai";
// })(user);

// // a
// console.log(user);


// var bank =function(){
//    var  user="sesha";
//     function getname(){
//         return user
//     }
//     function setname(newuser){
//         user=newuser
//     }

//     return {getname,setname}
// }()

// var bankoperation =bank ;
// console.log(bankoperation.getname());
// bankoperation.setname("sai")
// console.log(bankoperation.getname());

// functctinoal programing 

// function fullname(name){
//     name();
//  return function b(){
//     console.log("output from function b ");
//  }
// }

// function name(){
//     console.log("sesha sai ");
// }

// let c=fullname(name)
// c()

// function step1(value,callback) {
//     callback(value+10,false)
// }

// function step2(value,callback) {

//     callback(value+10,false)
// }
// function step3(value,callback) {

//     callback(value+10,false)
// }


// step1(10,function(result,error){
//    if(!error){ 
//      step2(result,function(resultb,error){
//         if(!error){
//             // console.log(resultb);//30
//             step3(resultb,function(resultc,error){
//                 if(!error){
//                     // console.log(resultc);//40
//                 }
//             })
//         }
//      })
//    }
// })


// the above code leades to be callback hells thats y we use promises 

// let promisdata=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("timeout");
//     }, 1000);
//       console.log("promis full filed ");
// })
