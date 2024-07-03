




















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

