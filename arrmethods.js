


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

// const array1 = [5, 12, 8, 130, 44];
// const found = array1.find((element) => element > 1000);


 
// let lastElement = courses.pop();
// console.log(`After Removed the last elements  ${courses}`);


// let firstElement = courses.shift();
// console.log("After Removed the First elements: " + courses);
 

// const a=[5,7,3,9,36];
// let res=a.forEach((item,index)=>(item))//undefinde because foreatch wont return anything we can do operations on eatch elemnt in arry
// console.log(res);


// let courses = ["HTML", "CSS", "Javascript", "React", "Node.js"];
// courses.splice(1, 2); //Html react node.js
// console.log("After Removed 2 elements starting from index 1: " + courses);


// let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// let result=fruits.slice(1,3); //starting index endning index which is exclued 
// console.log(result);  //[ 'Orange', 'Lemon' ]

// let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// let result =fruits.slice()//it create copy of that array



// let num=[1,3,5,7,9];
// console.log(num.toString()); //1,3,5,7,9


// //  let arr1=[10,20,30,40];
// //  console.log(typeof arr1.toString()); //strin
// //  console.log(typeof arr1);//obj
// //  console.log(arr1.toString());//10,20,30,40


// let num = 123;
// console.log(num.toString());      // Output: "123"
// console.log(num.toString(2));     // Output: "1111011" (binary)
// console.log(num.toString(16));    // Output: "7b" (hexadecimal)



// let arr = [1, 2, 3];
// console.log(arr.toSource()); // Output: "[1, 2, 3]" 

// let num = new Number(42);
// console.log(num.toSource()); // Output: "(new Number(42))"

// let regex = /abc/g;
// console.log(regex.toSource()); // Output: "/abc/g"













// const obj = {
//     name: 'Alice',
//     friends: ['Bob', 'Charlie'],
//     printFriends: function() {
//         this.friends.forEach(friend => {
//             console.log(`${friend} is friends with ${this.name}`);
//         });
//     }
// };
// obj.printFriends();

// const obj = {
//     name: 'Alice',
//     greet: ()=>{
//         setTimeout( ()=>{
//             console.log("this "+this.name); //undefinde
//         },1000)
        
//     }
        
//     }
// ;
// obj.greet()


//  console.log( obj.greet());



//       function prime(num){
//     if (num<=1){
//         return "not prime number "
//     }for(i=2 ; i<num; i++){
//      if(num %2==0){
//         return "not prime "
//      }
//      else{
//         return "its prime number "
//      }

    
// }}

// console.log(prime(5));
// console.log(prim






// let bool = true;
// console.log(bool.valueOf());     // Output: "true"
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



// let courses = ["HTML", "CSS", "Javascript", "React", "Node.js"];
// console.log(courses.pop());
// console.log(courses.length);





























































































