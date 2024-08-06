// console.log(9);
// console.log(a); //undefinded
// console.log(b); //error
// var  a = b = 5;


// 1.this arrow function 
// function foo(){
//     console.log(this.name);
// }
// foo.call({name:"sai"}); //sai

//  let foo=()=>{
//         console.log(this.name);
//     }
//  foo.call({name:"sai"}); //undefined because arrow function this ferer to window objcet


// 2.valueOf() method 

// let normalstr="apple";
// let objstr = new String ("bananna")

// let objtypestr=objstr.valueOf() 

// //converts objct typed string into primitive one
// console.log(typeof normalstr);//string
// console.log(typeof objstr);//object
// console.log(typeof objtypestr);//string
// console.log( objtypestr);//bananna


// let obj = {
//     valueOf: function() {
//         return 42; // Custom implementation of valueOf
//     }
// };

// console.log(obj.valueOf()); // Output: 42
// console.log(Number(obj));   // Output: 42
// console.log(obj + 1);       // Output: 43
 



// printing the current page

// const print_current_window=()=>{
//     window.print()
// }
// print_current_window();






  

// let b=[]
// for(i=0; i<arr.length; i++){
//     for(j=0; j<arr.length; j++){
//         if(arr[i]===arr[j]){
//           b.push(arr[i])
//           break;
//         //   arr.splice(j,1)
          
//         }
//     }
// }
// console.log(b);
// console.log(arr);

// function findDuplicates(array) {
//     const duplicates = [];

//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] === array[j] ) {
//                 duplicates.push(array[i]);
//             }
//         }
//     }

//     return duplicates;
// }

// const myArray = [9,2,9,3,8,7,3,2,2,8,9];
// const duplicateElements = findDuplicates(myArray);
// console.log(duplicateElements);



// print all numbers individuvally 
// let num =1836;
// let num2 = "";

// // console.log(num%10);
// // num=parseInt(num/10);
// // console.log(num);
//  while(num){
//     console.log(num%10);
//     let num3=num%10
//     num2=num2+num3

//     num=parseInt(num/10);
//  }

//  console.log(Number(num2));
 
// while(num>0){

//     // console.log(num%10);
//     num%10
//     num=parseInt(num/10)
//     console.log(num);
// }
 
 



// let data="apple is goopd"//finde how many a's in this text
// let result =data.split("p");
// console.log(result.length-1);

// const data=[ ];
// console.log(typeof data);
// console.log(Array.isArray(data));

// let data=7 
// while(data>=0) {
//      if(data<=5) { 
//         break;
//     // data--; 
//     // continue; 
// } 
// console.log(data);
//  data--; }


// reverseing the string 
// let data="sesha";
// let result=data.split("").reverse().join("")
// console.log(result);


// destructuring types 

// let person1 = { firstName: 'sesha', lastName: 'sai'};
// let person2 = { firstName: 'sesha', lastName: 'sai', middleName: 'kumar' }

// let tellname=( {firstName,lastName,middleName ="alternatename"} )=>{
//     console.log("this is my full name "+ firstName+" "+lastName+" "+middleName);
// }

// tellname(person1) //this is my full name sesha sai alternatename
// tellname(person2) //this is my full name sesha sai kumar

// // the above is very useful in react using props 

// // object destructuring
// function foo ( { x, y } ) {
//     console.log(x, y);
// }

// foo({y: 1, x: 2})  // -> 2 1

// foo({y: 1})  //  undefined 1

// foo({}) // undefined undefined

// // array destructuring

// let fullname =['sesha','sai'];

// let [firstname,lastname]=fullname;

// console.log(firstname,lastname);//sesha sai


// let arr= ['Mango',"Apple",'Bananna','Guva']

// let [mango,apple,bananna,guva]=arr;
// console.log(mango,bananna,apple,guva);//Mango Bananna Apple Guva

// let myObj = {

//     name: "Luke",
//     age: 25,
//     hobbies: "music"

// };

// let { hobbies, ...rest } = myObj;  // => Luke 25 music

// console.log(hobbies, rest)  // => music { name: 'Luke', age: 25 }

// console.log(hobbies, rest.age)  // => music 25

// var persons = [
//     {id : 1, name : "John", tags : "javascript"}, 
//     {id : 2, name : "Alice", tags : "javascript"}, 
//     {id : 3, name : "Roger", tags : "java"},
//     {id : 4, name : "Adam", tags : "javascript"},
//     {id : 5, name : "Alex", tags : "java"}
//   ];
  
//   var uniqueTags = persons.reduce((acc, personObj) => {
//     // console.log(acc);
//     // console.log(acc[personObj.tags] );
//       acc[personObj.tags] = 1;
//       console.log(acc);
//       return acc;
//   },{});
  
//   console.log(uniqueTags);;
//   console.log(Object.keys(uniqueTags))

// closure
// function outerfn(){
//     let count=0;
//     return function innerfn (){
//          count++;
//          return count
//     }
// }
// let counter=outerfn();
// let counter2=outerfn();
// console.log(counter2());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter2());