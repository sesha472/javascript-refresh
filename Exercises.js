// console.log(9);
// console.log(a); //undefinded
// console.log(b); //error
// var  a = b = 5;

// console.log(eval("3 + 4"));

// console.log(5 > "15" < 5); //true
// console.log(5 > "85" > 5); //false


// for(var i =0; i<5; i++){
//     setTimeout(()=>{
//         console.log(i);
//     },1000)
// }
     
// for(let i =0; i<5; i++){
//         setTimeout(()=>{
//             console.log(i);
//         },i*1000)
//     }



//  finde largets element in array
// let mainarr= [1,4,3,9,2,9,994,7];
//  let result = mainarr.sort((a,b)=>a-b);
//  let largelment = result[result.length-1]
//  console.log(largelment);

// let mainarr= [1,4,3,9,2,9,994,7];

// let largelmt=-Infinity;

// for(let i=0; i<mainarr.length; i++){
//    if(largelmt >mainarr[i]){
//       largelmt=mainarr[i];
//    }

// }
// console.log(largelmt);

  



//  finde second largelment in arr
//  method 1 
//  let mainarr= [1,4,3,9,2,4,7];
//      let arr = mainarr.sort((a,b)=>a-b)
//      let largnum = arr[arr.length-1];
//      let secondlarg;
//       for (i=arr.length-2; i>=0; i--){
//             if(largnum !== arr[i]){
//                 secondlarg=arr[i]
//                 break;
//             }
//       }

//       console.log(secondlarg);



//  method 2 
//  let mainarr= [1,4,6,9,2,4,7];
//  let arr=mainarr.sort();
//  let larg=-Infinity
//  let secondlarg;
//  for (let i =0; i<arr.length; i++){
//     if(larg < arr[i]){
//     larg= arr[i]
//     }
//  }
//    for(i= arr.length-1; i>= 0; i--){
//       if( larg >arr[i]){
//              secondlarg= arr[i]
//              break;
//       }
//    }
//  console.log(larg);
//  console.log(secondlarg);

//  finde 3,4,5lasrgest elemnes byc hnaging count == 2,3,4 like this

//  let arr= [1,4,6,9,2,4,7,7];
//   let result= [...new Set(arr)].sort((a,b)=>a-b)
//   let output = result[result.length-3]
//    console.log(result);
//    console.log(output);

// using for loop
//  let mainarr= [1,2,3,4,5,6];
//  let arr = mainarr.sort((a,b)=>a-b);
//  let larg = -Infinity
//  let thirdlarg;
//  let count=0;
//  for (let i=0; i<arr.length; i++){
//     if(larg < arr[i]){
//     larg= arr[i]
//     }
//  }
//  console.log(larg);

//    for(i= arr.length-1; i>= 0; i--){
//       if( larg >arr[i]){
//         count++
//          thirdlarg= arr[i]
//           if(count ===2){
//             break;
//           }

//       }
//    }
//  console.log(thirdlarg);

// rotating array by2 possition left

// let rotatepositions=2;
//  let result = arr.splice(0,rotatepositions);
//  console.log(...result);
//  arr.push(...result);
//  console.log(arr);

// using for loop

// let arr= [2,4,11,6,8,9];   // [11,6,8,9,2,4]
// //  let possitions u want to rotate
// let positions=2;
//  for(let i=0; i<positions; i++){

//     let temp= arr[0];
//     for(j=0; j<arr.length-1; j++){
//         arr[j] = arr[j+1];
//     }
//     arr[arr.length-1]=temp;
//  }
//  console.log(arr);



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
// let objstr = new String ("bananna");

// let objtypestr=objstr.valueOf();

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

// const printcurrentwindow=()=>{
//     window.print()
// }
// printcurrentwindow();

//  finde duplicates in array

// using filter method
// const myArray = [1,2,3,4,5,2,4,2,4];;
//  let uniqueelements= myArray.filter((item,index,arr)=>arr.indexOf(item) == index )
//  let dublicateelements= myArray.filter((item,index,arr)=>arr.indexOf(item) !== index )
//  console.log(uniqueelements);
//  console.log(dublicateelements);

// using map method
// const a = [1,2,3,4,5,2,4,2,4];
// let uniqueelements= [];
// let dublicateelements=[];
//  a.map(item=>uniqueelements.includes(item) ? dublicateelements.push(item):uniqueelements.push(item))
// console.log(a);
// console.log(uniqueelements);
// console.log(dublicateelements);

// using Es6 Set method
// let result =  [...new Set(myArray)]
// console.log(result);

// function findDuplicates(array) {
//     const uniqueelements = [];
//     const dupliacteelments =[]
//       for(item of array) {
//         if(uniqueelements.indexOf(item) == -1){
//               uniqueelements.push(item)

//         }
//         else{
//             dupliacteelments.push(item)
//         }
//       }
//     return {uniqueelements,dupliacteelments};
// }

// const myArray =  [1,2,3,4,5,2,4,2,4];
// console.log( findDuplicates(myArray));

// const myArray = [9, 2, 9, 9, 2, 2];
// const duplicates = [];

// for (let i = 0; i < myArray.length; i++) {
//     for (let j = i + 1; j < myArray.length; j++) {
//         if (myArray[i] === myArray[j]) {
//             duplicates.push(myArray[j]);
//         }
//     }
// }

// console.log(duplicates);

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

// let array= [5,7,9,13,15,17]
// let count=0;
//   for(i=0; i<array.length; i++){
//     if(array[i]%2 !== 0 ){

//         console.log("odd");

//     }
//   }

// for(i=0; i<arr.length; i++){
//     if()
// }

// let result =
// console.log(null === null);
// console.log(undefined === undefined);



// function *count(){
//       yield 1;
//       yield 2;
//       yield 3;
//       yield 4;
// }
//    let gen = count ();
//  console.log(gen.next().value);
//  console.log(gen.next().value);
//  console.log(gen.next().value);



// let array=['s','a','i','k','u','m','a','r'];
//  let result = array.reduce((acc,curntvalue,index)=>{
//        acc[index] =curntvalue;
//        return acc
//  },{})
//  console.log(result);
 


// let array=['s','a','i','k','u','m','a','r'];
//   let arrayobj={}
//    for([key,value] of array.entries()){
//       arrayobj[key]=value
//    }
//    console.log(arrayobj);
   
 

                //  async function fetchapis(){
                //      try{

                //     const responses= await Promise.all([
                //         fetch("https://jsonplaceholder.typicode.com/users"),
                //         fetch("https://jsonplaceholder.typicode.com/todos"),
                //     ]);

                //     const data= await Promise.all(responses.map(response=>response.json()))
                //    console.log(data);
                // }catch(error){
                //   console.log( "thappu ochindi error : "+error);
                  
                //    }

                // }
                // fetchapis()






                
               //  async function fetchapis(){
               //      try{

               //     const responses= await Promise.any([
               //         fetch("https://jsonplaceholder.typicode.com/users"),
               //         fetch("https://jsonplaceholder.typicode.com/todos"),
               //     ]);

               //     const data= await responses.json()
               //    console.log(data);
               // }catch(error){
               //   console.log( "thappu ochindi error : "+error);
                 
               //    }

               // }
               // fetchapis()