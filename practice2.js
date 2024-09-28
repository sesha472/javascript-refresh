    


// finde larg lement in netseted array 
//  let a =[[2,3],[3,4],[85,7]];
//  let res=a.flat(Infinity).sort((a,b)=>a-b)
//   console.log(res[res.length-1]);

//   let result= a.flat().sort((a,b)=>a-b);
//   console.log(result[result.length-1]);


// let a =[[2,3],[300,[8,8],900],[85,[7,999]]];
//   let result= a.flat(2).sort((a,b)=>a-b);
//   console.log(result[result.length-1]);
  
//   using for of loop 
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
  
// uaing foor lopo
// let a =[[2,3],[399,4],[985,7]];
// let largval=a[0][0];
// for(let i=0; i<a.length; i++){
//   for (let j=0; j<a[i].length; j++){
//        if(largval <=a[i][j]){
//         largval=a[i][j]
//        }
//   }
// } 
// console.log(largval)



    
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


//     let arr= [1,2,3,4,2,23,2,9,9,3,4,5,2,2,2,5];
//  let uniqitems= arr.filter((item,index)=>arr.indexOf(item) === index)
//  let duplicates= arr.filter((item,index)=>arr.indexOf(item) !== index)
// console.log(uniqitems)
// console.log(duplicates)

// let arr= [1,2,3,4,2,23,2,9,9,3,4,5,2,2,2,5];
// let uniquearry=[];
// let duplicates =[]
//  for (let i=0; i<arr.length; i++){
//      if(uniquearry.includes(arr[i])){
//           duplicates.push(arr[i])
//      }else{
//       uniquearry.push(arr[i])
//      }
//  }
//  console.log(uniquearry)
//  console.log(duplicates)


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

    //   function fib(n){    
    //      if(  n === 0){
    //         return 0;
    //      }else if(n===1){
    //         return 1;
    //      }else{
    //        return fib(n-1) + fib(n-2);
    //   }}

    //   function printfib(num){
    //     for(i=0; i<=num; i++){
    //         console.log(fib(i));
            
    // }
    //  }   
      
    //  printfib(5)
    
               
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

// const adflotes=(num1,num2)=>{
//     let res= parseFloat(num1)+parseFloat(num2)
//     console.log(Number(res.toFixed(2)));
//    }
//     adflotes("1.2837258756" , "1.8")


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


// const mainarray=[[3,4,99],[999,2,4],[3,4,556],[67,88,89]];
//  let res=mainarray.flat(Infinity).sort((a,b)=>a-b);
//  let output= res[res.length-1]
//  console.log( res);
//  console.log( output);
 

// const mainarray=[[3,4,99],[999,2,4],[3,4,556],[67,88,89]];
// function findelarg(arr){
//    let larg= arr[0][0];
//    for(let i=0;i<arr.length; i++){
//     for(let j=0; j<arr[i].length; j++){
//         if(arr[i][j]>larg){
//           larg =arr[i][j]
//         }
//     }
//    }
//     return larg
// }
// console.log(findelarg(mainarray));



// const mainarray = [
//     2,
//     [34, [90, 98, [97, 90], 99], 44],
//     [23, [87, 98], [36, 86, [32, 65, [43, 74]]]],
//   ];

// const newarry=[];

//   function flataray(arr){

//       for(let i=0; i<arr.length; i++){
//         if(Array.isArray(arr[i])){
//            flataray(arr[i])
//         }else{
//         newarry.push(arr[i])
//         }
//       }
//   }  

// flataray(mainarray)
// console.log(newarry);

// let arr = [1,2,4,5,2,4,8];
//  let res= arr.filter((item,index,arr)=>arr.indexOf(item)!==index);
//  console.log(res);

 
// const str = 'JavaScript is simple but not easy to master';
// const wordLimit = 3;

//  function trucateword(str,wordLimit){
//         let res= str.split(" ").splice(0,wordLimit).join(" ");
//         return res;
//  }
// console.log(
//     trucateword(str,wordLimit)
// );

//  function isprime(n){
//        if(n <=1){
//         return "not prime"
//        }
//         for(let i=2; i<n /2; i++){
//             if(n%i == 0){
//                 return "not prime"
//             }
//         }
//         return "prime"
//  }
//  console.log(isprime(18));
 
//  finde prime numbers upto given number 10
//   for (let i = 0; i < 10; i++) {
//      if(isprime(i) === "prime"){
//         console.log( `${i} is ${isprime(i)}`);
//      }
//   }
       

//  factorial 
    // let n=5;
    //  let val=1;
    //  for (let i = 1; i <= n; i++) {
    //         val= val*i;
    //  }
    //   console.log(val);
      

// const factorial =(n)=>{
//        if (n<=1){
//         return 1;
//        }else{
//         return n *factorial(n-1)
//        }
//  }
// console.log(factorial(5));



// var n=10;
// var a=0,b=1;
// var c=0;
// for(i=0; i<=n;i++){
//   console.log(c);
// c=a+b;
// a=b;
// b=c;
// }

//   let num=10;
//    let fiboseries=[0,1];
//     for(let i=2; i<num; i++){
//         fiboseries[i]=fiboseries[i-2]+fiboseries[i-1]
//     }
//     console.log(...fiboseries);


    // let num =10 ;
    // let a=0;
    // let b=1;
    //  let c
    //  for(i=0; i <num ; i++){
    //     console.log(a);
    //     c=b+a;        
    //     a=b;
    //     b=c;
    //  }

    //  finde missing elment in given array upto given range 
//    let arr = [1,2,4,5,7,8,3];
//     let n=8;
//     let sercelemt=[];
//         for (let j = 1; j <= n; j++) {
//               if(arr.includes(j)){
//                 continue;
//               }else{
//                 sercelemt.push(j)
//               }      
//         }
//      console.log(sercelemt.join(','));
    

//     const findenum= (arr,num)=>{
//          let sum=0 ;
//          for(item of arr){
//             sum += item;
//          }
//          let actuvalval=  num *((num+1)/2);
//          return actuvalval-sum;
//     }

//      console.log(findenum(arr,n));
     

//     for(let i=1; i<=5; i++){
//             setTimeout(()=>console.log(i),i*1000)
//         }

// let x1= new Promise((res,req)=>{
//     setTimeout(res,4000,"one")
//   })
 
//    let x2= new Promise((res,req)=>{
//     setTimeout(res,1000,"two")
 
//   })
 
//   Promise.all([x1,x2]).then((responses)=>{
//        console.log(responses)
//   })
 
//     Promise.race([x1,x2]).then((responses2)=>{
//      console.log(responses2)
//    })

        //  let date= new Date();
        //        console.log(date.toISOString().split("T")[0]);
        // let year= date.getFullYear();
        // console.log(year);
        
        //     let monnth=date.getMonth();
        //     console.log(monnth+1);
        //     console.log(date.getTime());
            
          
        

        //  const timer=()=>{
        //     let date= new Date();

        //     let day=date.getDay()
        //     let arrday=["sun","mon","tue","wed","thu","fryday","saturdat"]

        //      let hours= date.getHours();
        //      let minits= date.getMinutes();
        //      let sec=date.getSeconds();
        //      let amorpm= (hours>=12)?"PM":"AM";
            
        //     console.log(`todat is : ${arrday[day]}`);
        //     console.log(`current time is ${hours}:${minits}:${sec}${amorpm}`);   
        //  }
        //   setInterval(()=>{
        //      timer()
        //   },1000)

    //  let date1= "1/1/2024"
    //  let date2= "1/1/2023"

    //  let fdate= new Date(date1)
    //  let ldate= new Date(date2)
      
    //  let diffdate= (fdate-ldate)/(24*60*60*1000)
    //  console.log(diffdate);





// Promise.all()->

//      let apis=[
//         "https://jsonplaceholder.typicode.com/users",
//         "https://jsonplaceholder.typicode.com/posts",
//         "https://jsonplaceholder.typicode.com/todos"
//      ];

//       async function fetchapis(arraydata){
//         try {
//             let responses= await Promise.all(arraydata.map(url=>fetch(url)));
//             let response=await Promise.all(responses.map((item)=>item.json()))
//             console.log(response)
//         } catch (error) {
//             console.error("somthing got erroe : ",error);
//         } 
//        ;
        
//       }

// fetchapis(apis)

// Promise.any()-> retun   

// let apis=[
//     "https://jsonplaceholder.typicode.com/users",
//     "https://jsonplaceholder.typicode.com/posts",
//     "https://jsonplaceholder.typicode.com/todos"
//  ];

//   async function fetchany() {
//      let responses = await Promise.any(apis.map(url=>fetch(url)));
//      let data= await responses.json()
//      console.log(data);
     
//   }

// fetchany()

// Promise.any in new way ->returns first resolved promise
// let task1= new Promise ((resolve,reject)=>setTimeout(()=>resolve("completed1"),2000))
//  let task2= new Promise ((resolve,reject)=>setTimeout(()=>resolve("completed2"),1000))
//  let task3= new Promise ((resolve,reject)=>setTimeout(()=>reject("completed3"),3000))
// let promisearray=[task1,task2,task3];
//   async function ftechall(arraypromis) {
//     try{
//         let responses = await Promise.any(arraypromis);
//         console.log(responses);
//     }catch(err){
//       console.error(err)
//     }
//   }

//   ftechall(promisearray)


// this Promise.race ->method take all promises and returns the result of the first promise that resolves or rejects
// let task1= new Promise ((resolve,reject)=>setTimeout(()=>resolve("completed1"),2000))
//  let task2= new Promise ((resolve,reject)=>setTimeout(()=>resolve("completed2"),1000))
//  let task3= new Promise ((resolve,reject)=>setTimeout(()=>reject("completed3"),900))
// let arraydata=[task1,task2,task3]
//   async function fetchanypromis(arrpromis) {
//     try {
//         let responseofrace= await Promise.race(arrpromis)
//         console.log(responseofrace);
//     } catch (error) {
//         console.log("promises is rejected : ",error);   
//     }
//   }
//   fetchanypromis(arraydata) 

// const promise1 = Promise.resolve('Success from promise 1');
// const promise2 = Promise.reject('Error in promise 2');
// const promise3 = Promise.resolve('Success from promise 3');

// async function fetchPromises() {
//   const results = await Promise.allSettled([promise1, promise2, promise3]);

//   console.log(results);
// }

// fetchPromises();


//  console.log("nam"+true);
//  console.log(true == "5");

// console.log( 1 && "true text");


//  function* genartorfun (){
//        yield 1;
//        yield 2;
//        yield 3;
//  }
//      let fun = genartorfun();
//      console.log(fun.next().value);
//      console.log(fun.next().value);
//      console.log(fun.next().value);
//      console.log(fun.next().value);
     
// var country= {
//     name: "india",
//     language: "hindi",
//     population: "130cr",
//     capital_city:"delhi"
// }
// var countryname= country.name
// var countrylang= country.language
// console.log(countryname); //india
// console.log(countrylang); // hindi 
// var {name:countryname,language:countrylang} = country
// console.log(countryname); //india
// console.log(countrylang); //hindi



//  function palidrome(str){
//          let stringis=str.toUpperCase();
//      let result = str.split("").reverse().join("").toUpperCase();
//      let output= (stringis === result)?"yes its palidrome":"not palindroe"
//      return output;
//  }

// console.log(palidrome("Mam"));

// write recursive funtion that returns 1 to 5 numbers 

//  function recursive (n){  
//      if(n == 0){
//         return "";
//      }
//         if( n >= 1 ){
//             return `${recursive(n-1)} ${n} `;
//         }
//  }
//   console.log(recursive(5)); // 1  2  3  4  5
  
// function pritnumbers (stratvalue){
//     if (stratvalue > 5) {
//         return '';
//     }
//     console.log(stratvalue);
//         pritnumbers(stratvalue+1)
    
// }

// pritnumbers(1)

//  function fact(n){
//     if( n<=0){
//         return 1;
//     }
//       return n*fact(n-1)
//  }
 
//  console.log(fact(5));

// console.log(9);

//  fiding elment using lenear search all positions 
// let a1 = [3, 4, 5, 8, 68, 5, 56, 7,5,8, 81];
// let elm =5;
// let position =[];
//  for(i=0; i<a1.length; i++){
//       if(elm === a1[i]){
//         position.push(i);
//       }
//  }
//  console.log(position.toString());
 
// let a1 = [3, 4, 5, 8, 68, 56, 7,5,8, 81];
//  let binarysearch=(array,elm)=>{
//     let arr= array.sort((a,b)=>a-b);
//     console.log(arr);
    
//     let left=0;
//     let right =arr.length -1;
    
//       while(left <= right ){
//           let middle= Math.floor((left+right)/2);

//            if(arr[middle] === elm) {
//             return middle;
//            }  if(elm >arr[middle]){
//             left=middle+1;
//            } else{
//             right=middle-1;
//            }

//     }
// return "element not found";

//  }

// console.log(binarysearch(a1,7));

// console.log(eval("3+6"));
// console.log(6>"10" >="0");

// for(var i =0; i<=5; i++){
//         setTimeout(()=>{
//             console.log(i);
//         },i*1000)
//     }

// let mainarr= [1,999,3,9,2,9,99,7];
//   let result = mainarr.sort((a,b)=>a-b);
//   console.log(result[result.length-1]);

// let mainarr= [1,999,3,9,2,9,99,7];

//   let result = mainarr.sort((a,b)=>a-b);
//   console.log(result[result.length-2]);

  
//   let promise= new Promise ((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("resolved")
//         reject("this is rejected")
//     }, 1000);
//   })
//    promise.then ((data)=>console.log(data)
//    ).catch((err)=>{
//     console.error(err)
//    })
  
//  console.log(10+"abc");
 
