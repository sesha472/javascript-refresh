 
 
 
 
 
 
 
//  const obj={
//   cal(){
//     console.log("salary percentage ");
//   },
//     name:"harahara",
//     age:"30",
//     city:"nellore",
//     state :"ap"
//  }

//  let  fulldetails={
//      salary :90000
//  }


//  fulldetails.__proto__=obj;

//  let entriesproperies=Object.entries(obj).filter(([key,value])=> key!== "city")
//  let result=Object.fromEntries(entriesproperies)
//  console.log(entriesproperies);
//  console.log(result);

//  let resultkeys = Object.keys(obj)
//  let resultvalues = Object.values(obj)
//  let resultentire=Object.entries(obj)

//  for (const [key,value] in Object.entries(obj)) {
//    console.log(key,value);
//  }
// console.log(resultkeys);
// console.log(resultvalues);
// console.log(resultentire);











// const entries = [
//     ['name', 'Alice'],
//     ['age', 30],
//     ['occupation', 'Engineer']
//   ];
  
//   const person = Object.fromEntries(entries);
//   console.log(person);
  // Output: { name: 'Alice', age: 30, occupation: 'Engineer' }
  



//   const person = {
//     name: "Alice",
//     age: 30,
//     occupation: "Engineer"
//   };
  
// //   for (const [key,value] in Object.entries(person)) {
//     for (const key in person) {
//     console.log(`${key}: `);
//   }






//   const obj={
//     name:"harahara",
//     age:"30",
//     city:"nellore",
//     state :"ap"
//  }

//  let result=Object.entries(obj)

//  let result2=new URLSearchParams(result).toString()
//  console.log(result);
//  console.log(result2);









//   let a=10;
//   document.write('result:  ', a )

// const { array } = require("prop-types")

//    (9+9)==18 ?document.write('yes its true '):document.write("no it's not corret answer");

// var a=prompt('enter name');
// alert("the entered name is "+a)

//  var b= confirm("are you women?gives true or false");
//  if(b){
//  let  name=prompt('enter you name')
//  alert(' your are name is '+name)
//  }else{
//     alert('your are not women');
//  }



//***/ type conversion : conveting one data type into anothe dt

// var a='45';
// var b=55;
// // lets conver string into number using parseInt
// var x=parseInt(a);
// //  lets convert string into number
// var y= String(b);
// console.log(typeof y);







// document.write(typeof x +"<br>"+"<br>"); //number

// document.write(typeof y); //string

//*** switch case state ment */
// switch (true) {
//   case 2 >3:
//     document.write("first is true");
//     break;
//   case 4 < 5:
//     document.write("2nd is true");
//     break;

//   default:
//     document.write("there is no   true");
//     break;
// }

// const arr = ['a','b','c','d'];
// console.log(arr.push(1)); //5 adds elemnts in last ,retuns length after the elemend added to the array
// console.log(arr);

// const arr = ['a','b','c','d'];
// console.log(arr.pop());  // d ,remove last elemnt  in array ,retuns deleted elemnt
// console.log(arr); //['a', 'b', 'c']

// const arr = ['a','b','c','d'];
// console.log(arr.shift()); // a /removes first elemnt in array and return that elemnt
// console.log(arr);

// const arr = ['a','b','c','d'];
// console.log(arr.unshift("g")); //5 add elemnt in frint of array return final array length
// console.log(arr);

// join method crate a new sting by concating all elemnts in array and retuen with specific saparator
// const arr = ['a','b','c','d'];
// console.log(arr.join()); //a,b,c,d
// console.log(arr.join("")); //abcd
// console.log(arr.join(" ")); //a b c d
// console.log(arr.join("-")); //a-b-c-d
// console.log(arr);

// slice : returns a shallow copy of a portion of the array into new array
// it doenst change original array

// const arr = ['a','b','c','d'];
// console.log(arr.slice(0,2));  //['a', 'b']
// console.log(arr); //['a', 'b', 'c', 'd']

// splice :by useing splice we can add removie and replace the elemnts in array
// it changes the original

// const arr = ['a','b','c','d'];
// console.log(arr.splice(0,2)); //['a', 'b']
// console.log(arr); //['c', 'd']

// const arr = ['a','b','c','d'];
// console.log(arr.splice(0,2,'x','y'));  //['a', 'b']
// console.log(arr); //['c', 'd']

// finde duplicate elemnts form array
// var array = [4, 90,9,3, 4, 6, 3, 8, 9];
// let unique_elements =[];
// let duplicate_elements=[]
// for (let index = 0; index < array.length; index++) {     
//       array.indexOf(array[index])===index ?unique_elements.push(array[index]):duplicate_elements.push(array[index])
// }
// console.log(unique_elements);
// console.log(duplicate_elements);
     

      


// const b = [];
// for (let i = 0; i < a.length; i++) {
//   if (a.indexOf(a[i]) === i) {
//     b.push(a[i]);
//   }
// }
// console.log(b);

// /first operation converting all text to capitall
// function convertcapital(){
//   let inputtext=document.getElementById('text').value;
//   document.getElementById('result').innerText=inputtext.toUpperCase();
// // console.log(inputtext.toUpperCase());
// }

// function firstcapital(){
//   let inputtext1=document.getElementById('text').value;
//     let firstcapital=inputtext1.charAt(0).toUpperCase() + inputtext1.slice(1).toLowerCase();
//    document.getElementById('result2').innerText=firstcapital;
// }

// function firstwordletter(){
//   let inputtext1=document.getElementById('text').value;
//   let firstletter=inputtext1.split(' ');
//     let firstletter2=firstletter.map((mango)=>{
// return ( mango.charAt(0).toUpperCase() + mango.slice(1).toLowerCase() );
//    })
//   document.getElementById('result3').innerText=firstletter2.join(' ');
// }








 
