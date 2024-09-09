    



//  let a =[[2,3],[3,4],[85,7]];
//   let result= a.flat().sort((a,b)=>a-b);
//   console.log(result[result.length-1]);


// let a =[[2,3],[300,[8,8],900],[85,[7,999]]];
//   let result= a.flat(2).sort((a,b)=>a-b);
//   console.log(result[result.length-1]);
  
    
//  let a =[[2,3],[399,4],[85,7]];
//   let largvalue= a[0][0];
//   for( item of a){
//     for(value of item){
//       if (value >largvalue){
//         largvalue=value;
//        }
//     }
//   }
//   console.log(largvalue);
  


    
//  let arr= [1,2,3,4,2,2,3,4,5,2];
  // let result = [...new Set(arr)];
  // console.log( result);

  // let result = arr.filter((item,index)=>arr.indexOf(item) === index);
  // console.log(result);
  
    // let uniquearr=[];
    //  for (let i=0; i<arr.length; i++){
    //     if(uniquearr.includes(arr[i]) === false){
    //       uniquearr.push(arr[i])
    //     }
    //  }
    //  console.log(uniquearr);


    // let array=['s','a','i','k','u','m','a','r'];
    //  let result = Object.entries(array)
    //  let output =  Object.fromEntries(result)
    // console.log(result);
    // console.log(output);
    

//      let arr = [1,2,3];
// console.log( arr == "1,2,3");


// const arr=[2,[34,[90,98,[97,90],99],44],[23,[87,98],[36,86,[32,65,[43,74]]]]];
// let newarray=[];

//     const flatarry=(a)=>{
//       for ( let i =0; i<a.length; i++){
//         if ( Array.isArray(a[i])){
//              flatarry(a[i]);
//         }else {
//           newarray.push(a[i])
//         }
//       }
//     }

//     console.log(flatarry(arr));
//     console.log(newarray);
    
    //  finde all duplicate elmenst in array 
// let arr = [1,2,4,5,2,4,8,5,5,5];
//   let result = arr.filter((item,index,a)=>(a.indexOf(item) !== index ))
//    console.log(result);

    
// let max=5;
// let min=2;

//  let result = Math.floor(Math.random() * (max-min) +min);          
//  console.log(result);


// const str = 'JavaScript is simple but not easy to master';
//  let result =str.split(" ").slice(0,3).join(" ");
//  console.log(result);

 
    
//  function fact(num){

//      if(num ==0 || num ==1){
//        return 1;
//      } else {
//         return num * fact(num-1)
//      }
//  }

//  console.log(fact(5));
 
    // let num=9;
    //    if (num==0 || num ==1){
    //     return "num is not prime"
    //    }
    //  for( i=2; i<num/2; i++){
    //     if ( i % 2 ===0){
    //       return "num is  prime"
    //     }
    //  }

    



    // const array1 = [5, 2, 3, 4, 5];
    // const array2 = [4, 7, 6];
    // const resultarray = [];
    // let findemaxarrylength =
    //   array1.length < array2.length ? array1.length : array2.length;
    // console.log(findemaxarrylength);

    // for (let index = 0; index < findemaxarrylength; index++) {
    //   if (array1[index] !== undefined && array2[index] !== undefined) {
    //     let sumvalue = array1[index] + array2[index];
    //     resultarray.push(sumvalue);
    //   }
    // }
    // console.log(resultarray);





    // const array1 = [1, 2, 3,4,5];
    // const array2 = [4, undefined, 6];
    //    const resultarray=[];
    //  let findemaxarrylength= array1.length<array2.length ?array1.length :array2.length
     
    //    for (let index = 0; index < findemaxarrylength; index++) {
    //          let sum = (array2[index] ?? 0) + (array1[index] ??0)
    //          resultarray.push(sum);
    //    }
    //    console.log(resultarray);
    
      

// let arr = [1,2,3,4,5];
//  let rotations = 2;

//   function rotate (array,rotatetimes){
//        for(let i=0; i<rotatetimes; i++){
//            let item = array.pop();
//            array.unshift(item);
//        }
//        return array;
//   }

//    console.log(rotate(arr,rotations));
   
  


// let str1= "know";
// let str2="nowk";
    // function checkstrings1( string1,string2){
    //    if (string1.length === string2.length){
    //     let result = string1.split('');
    //     let result2 = string2.split('');
    //       let output= result.every((item)=> result2.includes(item) );
    //       console.log(output);
    //    }else{
    //     console.log("notsame");
    //    }
      
    // }

    // checkstrings1(str1,str2)
  

    // let str1= "know";
    // let str2="nowk";

    //    if (str1.length === str2.length){
    //      let res1= str1.split("").sort();
    //      let res2= str2.split("").sort();
    //       let result = res1.every((item)=>res1.includes(item) !== res2.includes(item))
    //        let output= result ?"same charest ":"not same "
    //         console.log(output);
            
    //    }else{
    //     console.log("lengths are not same");
        
    //    }
   

    // let str= "namsthey      s e   s    h a      sai";
    // //  let res= str.replaceAll(" ","");
    // //  console.log(res);
     
    //   let out= str.split("");
    //   let res=[];
    //    for(let item of out){
    //      if(item !== " "){
    //        res.push(item)
    //      }
    //    }
    //   console.log(out);
    //   console.log(res.join(""))


        

     
    // function ceratecounter (){
    //   let counter =0 ;
    //    return function (){
    //     counter++;
    //     return counter
    //    }
    //  }
    //   let count= ceratecounter();
    //   let count2= ceratecounter();
    //   console.log(count());
    //   console.log(count());
    //   console.log(count2());





//     function User(name, age) {
//       this.name = name;
//       this.age = age;
  
//       this.getProfile = function() {
//           // Outer function context
//           console.log(this.constructor.name); // User
//           return () => {
//               // Inner function context
//               console.log(this.constructor.name); // User(Get it from the outer context)
//               console.log("I'm " + this.name + ", " + this.age + " yrs old");
//           };
//       }
//   }
  
//   let user = new User('John', 25);
//   let profile = user.getProfile();
//   profile(); //I'm John, 25 yrs old

//   function User(name, age) {
//     this.name = name;
//     this.age = age;

//     this.getProfile = function() {
//         // Outer function context
//         console.log(this.constructor.name); // User
//         return () => {
//             // Inner function context
//             console.log(this.constructor.name); // User(Get it from the outer context)
//             console.log("I'm " + this.name + ", " + this.age + " yrs old");
//         };
//     }
// }

// let user = new User('John', 25);
// let profile = user.getProfile();
// profile(); //I'm John, 25 yrs old
// function User(name, age) {
//   this.name = name;
//   this.age = age;

//   this.getProfile = function() {
//       // Outer function context
//       console.log(this.constructor.name); // User
//       return function() {
//           // Inner function context
//           console.log(this.constructor.name); // Window
//           console.log("I'm " + this.name + ", " + this.age + " yrs old");
//       };
//   }
// }

// var user = new User('John', 25);
// var profile = user.getProfile();
// profile(); //I'm , undefined yrs old
// // Example data
// const aob = 
// [
//     { framework: 'React.JS', website: 'Paypal' },
//     { framework: 'React.JS', website: 'Tesla' },
//     { framework: 'Angular', website: 'Google' },
//     { framework: 'Vue.JS', website: 'Vue' },
//     { framework: 'JavaScript', website: 'inblack67' },
// ]
// const superAob = (data, victim) => {

//     const obj = {};
  
//     data.forEach((data) => {
//         if(data.hasOwnProperty(victim)){
//             if(obj[data[victim]]){
//                 obj[data[victim]]++;
//             }
//             else{
//                 obj[data[victim]] = 1;
//             }
//         }
//     })
  
//     let superArrayOfObjects = [];
  
//     for (const key in obj) {
//         superArrayOfObjects = [...superArrayOfObjects, { victim: key, count: obj[key]}];
//     }
  
//     return superArrayOfObjects;
// }

// console.log(superAob(aob, 'framework'));

// // output:-
// // [
// //     { victim: 'React.JS', count: 2 },
// //     { victim: 'Angular', count: 1 },
// //     { victim: 'Vue.JS', count: 1 },
// //     { victim: 'JavaScript', count: 1 }
// // ]

// class Rectangle {
//   constructor(height, width) {
//       this.height = height;
//       this.width = width;
//   }

//   constructor(width) {
//       this.width = width;
//   }
//   // Getter
//   get area() {
//       return this.calcArea();
//   }
//   // Method
//   calcArea() {
//       return this.height * this.width;
//   }
// }

// const square = new Rectangle(20, 30);

// console.log(square.area); // Uncaught SyntaxError: A class may only have one constructor

// let obj={
//   name:"sachin",
//   greet:function (){
//           console.log(`myname is ${this.name}`)
//   }
// }
//  let obj2 ={
//   name:"kohli"
//  }
// let output= obj.greet.bind(obj2);
// console.log(output())

// this is hoisting excelent explanation 
// var rat=10;
//   function test(){
//     if (rat===undefined){
//       var rate= 20;
//       return rate;
//     }else{
//       var rate=30
//       return rat;
//     }
//   }

// console.log(test())

// const obj={
//       name:"sesha",
//       age:31,
//       adress :{
//           state:"ap"
//       }
//   }

//    let copyobj= JSON.parse(JSON.stringify(obj)); //deep copy 

//     copyobj.age=32;
//     copyobj.adress.state="tn";
//     console.log(obj);
//     console.log(copyobj);
    

// const mainarray=[[3,4,905],[5,2,[4,5,[9,8,9999],6],4],[3,4,556],[67,88,8999]];
//  let res= mainarray.flat(Infinity)
//   let largnum=-Infinity;
//   for(let item of res){
//       if(item >largnum){
//         largnum=item;
//       }
//   }
//   console.log(largnum);
//  console.log(res);
 
// const arr1 = [
//       2,
//       [34, [90, 98, [97, 90], 99], 44],
//       [23, [87, 98], [36,[86,4,5], [32, 65, [43, 74]]]],
//     ];

//     let res=[];
//      function flatarray(arr){
//          for ( let item of arr){
//              if( Array.isArray(item) === true){
//                 flatarray(item);
//              }else{
//                    res.push(item);
//              }

//          }
//      }
//  console.log(flatarray(arr1));
//  console.log(res);
 
  

// finde duplicate numbers in  array ?
// let arr = [1,2,4,5,2,4,8];
//  let uniqueelments= arr.filter((item,index)=>arr.indexOf(item) === index)
//  let duplicatelemnst= arr.filter((item,index)=>arr.indexOf(item) !== index)
//  console.log(uniqueelments);
//  console.log(duplicatelemnst);

// 3.Truncate a string to a certain number of words?
// let stringvale= "JavaScript is simple but not easy";
//     let res=  stringvale.split(" ")
//     let out= res.splice(res.length-3)
//     console.log(out);
    
 
// const arr=[2,3,2,1,2,6, ,7,4,32,2,7,9,3,42,342,2,9];
//  let out = []
// //  let res= arr.filter((item,index)=> item %2 !== 0);
//  for (let item of arr){
//      (item %2 !== 0 && typeof item === "number") ? out.push(item) :undefined;
//  }
//  console.log(out);
// console.log(res);



//  const isprime=(num)=>{
//      if(num <=1){
//         return "nor prime";
//      }
//       for (let i=2; i<=num; i++){
//          console.log(i);
//          if ( num % i === 0 ){
//             return  " not prime";
//          }
//       }
//        return "prime";
//  }
//   console.log( isprime(2));


//  function fact(num){
//      if (num <=1){
//         return 1
//      } else {
//          return num *fact(num-1)
//      }
//  }
//   console.log( fact(5));

//    let num = 5;
//    let a = 0;
//    let b = 1;
//    let c=0;
//    for (i = 0; i <= num; i++) {
//     console.log(c); 
//      c = a + b;
//      a = b;
//      b = c;
//    }

// let num = 5;
//    let a = 0;
//    let b = 1;
//    let c=0;
//    let d=[];
//    for (i = 0; i <= num; i++) {
//    d.push(a);
//     c = a + b;
//      a = b;
//      b = c;
//    }
//    console.log(d);

      function fib(n){    
         if(  n === 0){
            return 0;
         }else if(n===1){
            return 1;
         }else{
           return fib(n-1) + fib(n-2);
      }}

      function printfib(num){
        for(i=0; i<=num; i++){
            console.log(fib(i));
            
    }
     }   
      
     printfib(5)
    
               
    // let arr = [
//   { language: "JavaScript" },
//   { language: "JavaScript" },
//   { language: "TypeScript" },
//   { language: "C++" },
// ];

// let result = Object.values(
//   arr.reduce((acc, current) => {
//     let language = current.language;
//     if (!acc[language]) {
//       acc[language] = { language: language, count: 0 };
//     }
//     acc[language].count += 1;
//     return acc;
//   }, {})
// );

// console.log(result);  
// output : [
//     { language: 'JavaScript', count: 2 },
//     { language: 'TypeScript', count: 1 },
//     { language: 'C++', count: 1 }
//   ]



// let min =2;
// let max=4;
// let result= (Math.floor (Math.random() * (max-min) + min  )); //2 or 3
// let result= (Math.ceil (Math.random() * (max-min) + min  )); // 3 or 4
// let result= (Math.round (Math.random() * (max-min) + min  )); //2 or 3 or 4
// console.log(result);

// let arr=[2,3,4,5,6,99,3,2,1,2];
// console.log(Math.max(...arr));
// console.log(Math.min(...arr));


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

// const findenumbersign1= num =>{
//     let result= (num === 0) ? "numberis zero " : `${(num>0) ? "number is positive":"numberis nagative"}`
//     return result;
// }
// console.log(findenumbersign1(9)); //positive
// console.log(findenumbersign1(-9)); //negative
// console.log(findenumbersign1(0)); //zero

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

// let arraydata = [3, 4, 6, 8, 68, 4, 3, 5, 356, 78, 81];

// const searchinglinrarly = (array, num) => {
//   for (let index = 0; index < array.length; index++) {
//     if (num === array[index]) {
//       return `item found in ${index + 1} possition `;
//     }
//   }
// };

// const result = searchinglinrarly(arraydata, 6);
// console.log(result);





// binary search 

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




// let a=[10,24,23,4,5,63,2,6,6,322,5,6,3];
// let swap;
// let bubblesortedarry=[];
// for(i=0; i<a.length; i++){
//   for(j=0;j<a.length; j++){
//     if(a[j]>a[j+1]){
//       swap=a[j];
//       a[j]=a[j+1]; 
//       a[j+1]=swap;
//     }
//   }
// }
// console.log(a);   //[2, 3,  4,  5,  5,  6,6, 6, 10, 23, 24, 63,  322]


       
         
               