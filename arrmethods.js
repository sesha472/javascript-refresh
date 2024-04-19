

// let arr1=[10,20,30,40];
// let arr2=[50,60,70,80];
//  let arr3=arr1.concat(arr2);
//  console.log(arr3);
//  console.log(arr1);
//  console.log(arr2);

// copyWithin(target-index,start-indexe,end-index(not frequires));
// let array1 = ['a', 'b', 'c', 'd', 'e'];
// let result=array1.copyWithin(0,3);
// console.log(result);


// let arr1=[10,20,30,40];

// let courses = ["HTML", "CSS", "Javascript", "React", "Node.js"];
// console.log("Original Array: " + courses);
 
// let lastElement = courses.pop();
// console.log("After Removed the last elements: " + courses);
 
// let firstElement = courses.shift();
// console.log("After Removed the First elements: " + courses);
 
// courses.splice(1, 2);
// console.log("After Removed 2 elements starting from index 1: " + courses);

// let num=10;
// let num2=10;
// console.log(num===num2);


// findong the are of traiangle using base and height 

// let baseof_triangle=10;
// let heightof_traiangle=20;

// let area =(baseof_triangle*heightof_traiangle)/2
// console.log(area);

// // using fromule with help of sides of traiangle 
// let a=3,b=4,c=5;
// let s =( (a+b+c)/2);
// let area2= Math.sqrt(s*(s-a) *(s-b)*(s-c))
// console.log(area2);





// const a=[5,7,3,9,36];
// let res=a.forEach((item,index)=>console.log(item))//undefinde because foreatch wont return anything we can do operations on eatch elemnt in arry
// console.log(res);



// let arr1=[10,20,30,40];
// let   arr2=[];

// let result=arr1.entries();
// for (const [key,value] in arr1) {
//     arr2.push(key);

// }
// console.log(arr2);

//  sorting array elemnts 

// let point = [30, 200, 2, 3, 15, 10];
// let b=point.sort((a,b)=>{return b-a});
// console.log(b);


// let a=[3,45,767,5,4];
// console.log(a.sort(function(a,b){
//   return a-b;
// }));


// var array=['s','a','i','k','u','m','a','r'];
// for(let i of array.keys()){
//     console.log(i);

// }

// let a=[5];
// let r=a.find(i=>i%2==0);
// console.log(r);

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.constructor); 

// var arr = new Array( "Geeks", "for", "Geeks"); 
//         console.log( arr.constructor);   



// checks evry elemnt in the array passed a test or not 
// let a=[2,4,6,5];
// console.log(a.every(i=>i%2==0));
// let a=[2,14,455,4,6,5];
// console.log(a.sort((a,b)=>a-b));

// let a=[2,4,6,5];
// console.log(a.includes(5));
// var array=['s','a','i','k','u','m','a','r'];
// console.log(array.join(""));










// let obj1={fname:"sachin",lname: "tendulkar",age:"27"};

// function fullname({fname,lname}){
//     console.log(fname);
//     console.log(lname);
// }

// fullname(obj1)

// console.log("Hellow" == "Hellow");
// function handleTimeout(){
//     console.log("normal function");
// }

// const handleTimeout2=()=>{
//     console.log("arrow function..");


// }
//   setTimeout(handleTimeout,2000);
// //   setTimeout(handleTimeout2,3000);
// // setTimeout(() => {
// //     console.log("set timeout function...");
// // },5000 );

// function init (){
//     function greet (){
//         console.log("hi");
//     }
//     return greet();
// }
// init();

// const printName = (personObj) => {
//     console.log(personObj.name);
// }
// printName({name: 'Max', age: 28}); // prints 'Max'


// this is how distructuring works 
// const printName = ({name}) => {
//     console.log(name);
// }
// printName({name: 'Max', age: 28}); // prints 'Max')


// Truncate a string to a certain number of words
// truncateWithWordLimit("JavaScript is simple", 3) returns "JavaScript is simple"
// const str = 'JavaScript is simple but not easy to master';
// const wordLimit = 3;

// let array=str.split(" ");
// let arr2=[];
// for (let index = 0; index < 3; index++) {
//      arr2.push(array[index]);
    
// };
// let result=arr2.join(" ");

// console.log(result); //JavaScript is simple
// // another way

// const str = 'JavaScript is simple but not easy to master';
// const wordLimit = 3;

// function truncateWithWordLimit(str, wordLimit) {
//    return str.split(' ').slice(0, wordLimit).join(' ');
// }

// console.log(`${truncateWithWordLimit(str, wordLimit)}`);


// const array1 = [5, 12, 8, 130, 44];
  
// const found = array1.find((element) => element > 1000);

// console.log(found);

// practice programs git hub page
// https://github.com/MehedilslamRipon/Problem-solving-with-JavaScript/blob/master/problem-18.js



// var username='a';

// var foo=(function (username){
//     username="b";
//     return username;
// })(username);

// console.log(username);


// function getusers(){
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response=> (response.json()))
//     .then(data=>console.log(data.map(item=>item.name).forEach(element => {
//         console.log(element);
//     })))

// }

// getusers()


// using axios 



//  const axios=require('axios');
// axios.get("https://jsonplaceholder.typicode.com/users").then(
//     response=>console.log(response.data.map(item=>item.name).forEach(element => {
//               console.log(element);
//           })))
































































































