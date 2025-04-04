

// console.log(9);

// class Products {
//    constructor(name,price){
//      this.name=name;
//     this.price=price.toFixed(2)  
//  }
//   displaydetails() {
//       console.log(`the details are Rs${this.price}`)
//  }
// }

//  let product1= new Products("shurt",20.90);
// console.log(product1);

//  product1.displaydetails();


//       async function getdata(){
//            let response = await fetch("https://jsonplaceholder.typicode.com/users");
//            console.log(response.data);
// } 
//  getdata();
  

//    function rigister(cbfn) {
//      setTimeout(() => {
//        console.log("rigister ");
//        cbfn();
//      }, 1000);
//    }

//    function login(fn) {
//      setTimeout(() => {
//        console.log("login");
//        fn();
//      }, 2000);
//    }

//    function thankyou() {
//      setTimeout(() => {
//        console.log("thank you ");
//      }, 4000);
//    }

//    rigister(() => {
//      login(thankyou);
//    });

// const api1 = 'https://jsonplaceholder.typicode.com/users';
// const api2 = 'https://jsonplaceholder.typicode.com/users';
// const api3 = 'https://jsonplaceholder.typicode.com/users';
// const api4 = 'https://jsonplaceholder.typicode.com/users';
// const api5 = 'https://jsonplaceholder.typicode.com/users';
//           async function fetchapis(){
//                  let responses = await Promise.all([
//                 fetch(api1),
//                 fetch(api2),
//                 fetch(api3),
//                 fetch(api4),
//                 fetch(api5),
//               ])
//                console.log(responses)    
//           }
//           fetchapis()



//  async function jsondata() {
//      try {
//         let response =await fetch('https://jsonplaceholder.typicode.com/users');
//      let result = await response.json();
//      console.log(result.map((item)=>item.username)); 
//      } catch (error) {
//         console.log("erroe has occuured :",error);  
//      }   
//  }
//  jsondata(); 


//  setTimeout((arg1,arg2)=>{
//     console.log("this is arg1",arg1);
//     console.log("this is arg2",arg2);
    
//  },1000,"namsthey","hi");

// let var1=setInterval((arg1,arg2)=>{
//     console.log("this is arg1",arg1);
//     console.log("this is arg2",arg2);
    
//  },1000,"namsthey","hi");

//  clearInterval(var1);


// for(let i=0; i<5; i++){
//     setTimeout(()=>{
//         console.log(i);
        
//     },1000*i)
// }


// let obj= {

//     cat:{
//         age:{
//             value:9
//         }
//     }
// }
// console.log(obj.cat.h?.value);


 
// let add=(a,b)=>a+b;
// console.log(add(2,3));

// person ={
//     name:"hruthik",
//     age:23,
//     details:()=>{
//         console.log(`his name is ${this.name}`);
//     }
// }
// person.details();

// let arr= [1,2,3,4,2,2,3,94,5,9];
// let result = arr.sort((a,b)=>a-b);
// console.log(result);

// let output = result[result.length-1];
// console.log(output);

//    let result = Math.max(...arr);
//    console.log(result);


// let larg=-Infinity;

//  for(i=0; i<arr.length; i++){
//       if(arr[i]>larg){
//         larg=arr[i];
//       }
//       }
//    console.log(larg);



// let arr= [1,2,3,994,82,2,3,94,5,9];

//  let larg=-Infinity;
//  let secodlarg=-Infinity

//  for(i=0; i<arr.length; i++){
//       if(arr[i]>larg){
//         secodlarg=larg;
//         larg=arr[i];
//       } if(secodlarg>arr[i] & larg< arr[i] ){
//         secodlarg=arr[i]
//       }
//       }
//    console.log(larg);
//    console.log(secodlarg);


//  let a =[[2,3],[3,4],[85,7]];
//  let larg= -Infinity;
//  for(i=0;i<a.length;i++ ){
//     for(j=0;j<a[i].length; j++){
//         if(a[i][j]>larg){
//             larg=a[i][j]
//         }
//     }
//  }
//  console.log(larg);
 
   
//  let arr= [1,2,3,4,2,2,3,4,5,2];
//   let result= arr.filter((item,index,arr)=>arr.indexOf(item)===index);
//   console.log(result);

// function user(name,...rest){
//     console.log(...rest);
//       console.log(name +":"+rest);
// }
// user("dora","32",33,"kavali");

//  let str= "namsthey";
//   console.log(str.padStart(18,"*"));



// class Bank{
//     constructor(withdraw){
//         this.withdraw=withdraw
//         this.totalbalance=1000
//         this.min=500;
//     }
//      cashwithdraw(){
//         let balance =this.totalbalance-this.withdraw
//         if(balance<this.min){
//             console.log("failed ");
            
//         }else{
//             console.log("sucess");     
//         }        
//      }
//  }
//   let user=new Bank(600);
// user.min=0;
//   user.cashwithdraw()

// abstaction =>showing esential info and hiding implimentaion details 


//  class Bank {
//     constructor(withdraw){
//         this.withdraw=withdraw
//         this.totalbalance=1000
       
//     }
//      cashwithdraw(){
//         let min=500
//         let balance =this.totalbalance-this.withdraw
//         if(balance<500){
//             console.log("failed ");
            
//         }else{
//             console.log("sucess");     
//         }        
//      }
//  }
//   let user=new Bank(600);
//   user.cashwithdraw();

// Encapsulation is the procedure of binding both data members and member functions into a single unit 


// function created with name and assigned to variable is afunction expresssion 
// function without name is assigned to variable is anonymus function 



//  let array=["cricket","football"];
//  let result = array.push("tennis");

//  console.log(result);
//  console.log(array);

//  let str = "namsthey ";

// //  console.log(str.padStart(20,"918"));


//  let ammount=100;
//  let days=30;
//  let intrest=2;

//   for(let i=1; i<=days; i++){
//     if(i%4 === 0){
//         ammount += intrest
//     }
//     document.write(`your amount for ${i} days with intrest ${intrest} is ${ammount} </br>`);

//   }


  
// function foo(x,y=5){
//     return [x,y];
// }
// console.log(foo(7));

// function foo(x=5,y){
//     return [x,y];
// }

// let res=foo(3);
// console.log(res);


//  let arr= [1,2,3,4,2,2,3,4,5,7,7,2];
//  let resu= arr.filter((item,index,array)=>arr.indexOf(item)===index);
//  console.log(resu);


   
//  let arr= [1,2,3,4,2,2,3,4,5,7,7,2];
//  let res= [...new Set(arr)];
//  console.log(res);
 

//    let array1 = ['a', 'b', 'c', 'd', 'e'];
// let result=array1.copyWithin(1,3,5);
// console.log(result);

//  var array=['s','a','i','k','u','m','a','r'];
// console.log(array.join());
// console.log(array.toString());

  
  
// let ten= 10;
// console.log(ten +++ ten,ten);


 
// let orders =[
    //     {name:"raju",
    //     purchased:30,
    //      },
    //      {name:"shiva",
    //     purchased:30,
    //     },
    //     {name:"vishnu",
    //     purchased:30,
    //     },
    //     {name:"raju",
    //     purchased:150,
    //      },
    //     {name:"hanuman",
    //     purchased:30,
    //     }
    // ];
    // let res= orders.filter((item,index)=>item.name=== "raju").map((item,index)=>item.purchased).reduce((acc,curr,currindex,arrr)=>acc+curr,10);
    // console.log(res);
 
//  let arr = [1, 2, 3];
// console.log(arr.toSource());
     

// let str="apple";
// console.log(str.split(""));



//  let res= Array.from(str);
//  console.log(res);
 
     
//   let a= Array.from({length:5}).map((item,index)=>index+1)
//   console.log(a);

//  let date= new Date();
//   console.log(date);
//   console.log(date.toString());

  // let name= prompt("Please enter your name");
  // let marks = Number( prompt("enter your marks"));
  //  switch(true){
  //   case marks>=75: 
  //   result="you got first class"
  //   break;
  //   case marks>=60 && marks<75:
  //   result="YPU GOT SECOND CLASS"
  //   break;
  //   case marks>=35 && marks <60:result="you got 3 rd class";
  //   break;
  //   default:
  //     result ="your pass";
//     break;
//    } 
//   console.log(result);
  


// const obj = {
//     name: 'Alice',
//     friends: ['Bob', 'Charlie'],
//     printFriends: function() {
//           return this.friends.forEach((item,index)=>{
//              console.log(`${item} is friend of ${this.name}`)
//           })
//     }
// };
// console.log(obj.printFriends());

// ob is friend of Alice
// Charlie is friend of Alice


    //  const obj2 = {
    //     name: "Alice",
    //     greet: ()=> {
    //       setTimeout(() => {
    //          console.log("this " + obj2);  //undefinde
    //       }, 1000);
    //     },
    //   };
    //   obj2.greet();
  
// let arr1=[10,20,30,40];
// let  res= Object.entries(arr1);
// console.log(res);
//  let out= Object.fromEntries(res);
//  console.log(out);
 
  
// let arr1 = [10, 20, 30, 40];
// let arr2 = [];

// for (let [index, item] of arr1.entries()) {
//   console.log(index, item);
// }

// for (const keyindex in arr1) {
//   console.log(arr1[keyindex]);
// }
 
// let obj={fname:"sachin",lname: "tendulkar",age:"27"};
//  for(let key in obj){
//  console.log(key,obj[key]);
//  }

// let array=['s','a','i','k','u','m','a','r'];
//    for (const [index,item] of array.entries()) {
//     console.log(index,item);
//    }
//    for ( let item of array.values()){
//     console.log(item);

//         }





//  let arr= [1,2,3,4,5];
//  arr.length=3;
//  console.log(arr);
//  console.log(arr.length);

// let dl= delete arr[0];
// console.log(arr);
// console.log(arr.length);



//  for(item of arr){
//     console.log( "value : "+item);
    
//  }
// console.log(dl);
// console.log(arr);
// console.log(arr.length);


//  let arr = [1,2,3];
// console.log( arr === "1,2,3");

//  const mainarray=[[3,4,9],[5,2,4],[3,4,54],[67,88,8]];
// let res= mainarray.flat(Infinity);
// console.log(res);
//  let output = res.sort((a,b)=>a-b);
// console.log(output);

//  let larg=output[output.length-1];
//  console.log(larg);
 


//  const mainarray=[[3,4,99],[5,2,77],[3,66,54],[6,88,8]];
//  let larg=-Infinity;
//  let secondlarg=-Infinity
//  let thirdlarg=-Infinity;
//  let fourthlarg=-Infinity
//    for(let arrayitem of mainarray){
//        for(let val of arrayitem){
//            if(val>larg){
//             fourthlarg=thirdlarg;
//             thirdlarg=secondlarg;
//             secondlarg=larg
//             larg=val;
//            }else if(val>secondlarg && val<larg){
//             fourthlarg=thirdlarg;
//             thirdlarg=secondlarg
//              secondlarg=val;
//            }else if(val>thirdlarg && val<secondlarg){
//             thirdlarg=val
//            }
//            else if(val>fourthlarg && val>thirdlarg){
//             fourthlarg=val
//            }
//        }
       
//    }
//     console.log(larg);
//     console.log(secondlarg);
//     console.log(thirdlarg);
//     console.log(fourthlarg);

// flatening the arry using recursive method 
// const arr = [
//   2,
//   [3, 4],
//   [34, [90, 98, [97, 90], 99], 44],
//   [23, [87, 98], [36, 86, [32, 65, [43, 74]]]],
// ];
// let flatarray = (arrargument) => {
//   let newarry = [];
//   let innerflatfunction = (arrargument) => {
//     for (let arayitem of arrargument) {
//       if (Array.isArray(arayitem)) {
//         innerflatfunction(arayitem);
//       } else {
//         newarry.push(arayitem);
//       }
//     }
//   };
//   innerflatfunction(arrargument);
//   return newarry;
// };

// console.log(flatarray(arr));

// let arr = [10,20,30,10,40,20,10,90,40,10];
// let removieditems=[]
//     for(let i=0; i<arr.length; i++){
//        if(arr.indexOf(arr[i]) !== i){
//         removieditems.push(arr[i]);
//         arr.splice(i,1);
//         i--;
//        }
//     }
//      console.log(arr);
//      console.log(removieditems);
     

// const str = 'JavaScript is simple but not easy to master';

//  let limit=3;
//   let result= str.split(" ").splice(0,3).join(" ");
//   console.log(result);
  
     
// const arr=[2,3,2,1,2,,6,7,4,32,2,7,9,3,42,342,2,9];

//  let newarry=[]; 
//  for (const element of arr) {
//    if(element %2 ===0){
//     newarry.push(element)
//    }
//  }
//  console.log(newarry);
 

  //  let fact=(n)=>{
  //        if(n ===0 || n===1 || n >-Infinity){
  //         return 1;
  //        } else{
  //          return n*fact(n-1);
  //        }
  //  }
  //   console.log(fact(-9));

  //  let num =7;
  //   if(num <=1){
  //     console.log("not a prime");
  //   }if(num ===2 || num ===3){
  //     console.log("prime number");
      
  //   }
  //    for(let i=2; i<=Math.sqrt(num); i++){
  //      if(num %2 === 0){
  //       console.log ("not prime")
  //      } else{
  //       console.log("prime");
         
  //      }
  //    }


//      function findeprimenumbers(num) {
//   if (num <= 1) return "not prime";
//   console.log(Math.sqrt(num));
//   for (let i = 2; i <= Math.sqrt(num); i++){
//     if (num % i === 0) return "not prime";
//   }
//   return "prime";
// }
// console.log(findeprimenumbers(2));



    
 
 

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

//  let num =10;

//  let a=0;
//  let b=1;

//  for( let i =0; i<num; i++){

//      console.log(a);
//       let c=b+a;
//        a=b;
//        b=c;
      
//  }
 
// for(let i=1; i<=5; i++){
//       setTimeout(() => {
//         console.log(i);   
//       }, 1000*i);
//   }


  // function rigister(arg1){
  // console.log("rigister");
  // arg1();
  // }
  // function login(){
  // console.log("login");
  // }
  // function thankyou(arg2){
  // arg2();
  // console.log("thankyou");
  // }
  // thankyou(()=>{
  // rigister(login);
  // })
   



  // function rigister(arg1) {
  //   setTimeout(() => {
  //     console.log("rigister");
  //     arg1();
  //   }, 3000);
  // }

  // function login() {
  //   setTimeout(() => {
  //     console.log("login");
  //   }, 2000);
  // }

  // function thankyou(arg2) {
  //   setTimeout(() => {
  //     arg2();
  //     console.log("thankyou");
  //   }, 1000);
  // }

  // rigister(() => {
  //   login(thankyou);
  // });

  

  //  function mainfun (cbfn){
  //    console.log(('operation started'));
  //    setTimeout(() => {
  //      cbfn("operation complted")
  //    }, 2000);
  //  }

  //   function callbackfn(arg){
  //       console.log("result : "+arg);
        
  //   }
  //  mainfun(callbackfn)


  //  function factorial(a, b, cb) {
  //    setTimeout(() => {
  //      cb(a * b);
  //    }, 200);
  //  }

  //  factorial(6, 5, function (val1) {
  //    console.log(val1);
  //    factorial(val1, 4, function (val2) {
  //      console.log(val2);
  //      factorial(val2, 3, (val3) => {
  //        console.log(val3);
  //        factorial(val3, 2, (val4) => {
  //          console.log(val4);
  //        });
  //      });
  //    });
  //  });




  //  using promises 
  //  function factorila(a,b){
  //    return new Promise ((resolve,rej)=>{
  //     setTimeout(() => {
  //       resolve(a*b);
  //     }, 200);
  //    })
  //  }

  //   factorila(6,5)
  //   .then((response1)=>factorila(response1,4))
  //   .then((res2)=>factorila(res2,3))
  //   .then((res3)=>factorila(res3,2))
  //   .then((res4)=>factorila(res4,1))
  //   .then(res=>console.log(res))
  //   .catch(err=>console.log("this is : what  "+err))
    


  //   function factorial(a,b){
  //    return new Promise ((resolve,rej)=>{
  //     setTimeout(() => {
  //       resolve(a*b);
  //     }, 200);
  //    })
  //  }

  //  let  factfun = async ()=>{
  //    let res1= await factorial(6,5);
  //    let res2= await factorial(res1,4)
  //    let res3= await factorial(res2,3)
  //    let res4= await factorial(res3,2)
  //    console.log(res4);     
  //   }
  //    factfun();

  //  function merg(str1,str2){
       
  //  }



// merging twi strings alternatively 

  //  function merargstrings(str1, str2) {
  //    let st1arr = str1.split("");
  //    let st2arr = str2.split("");
  //    let maxlength = str1.length > str2.length ? str1.length : str2.length;
  //    let mergarr = [];
  //    for (let i = 0; i < maxlength; i++) {
  //      if (st1arr[i] !== undefined) {
  //        mergarr.push(st1arr[i]);
  //      }
  //      if (st2arr[i] !== undefined) {
  //        mergarr.push(st2arr[i]);
  //      }
  //    }
  //    let result = mergarr.join("");
  //    return result;
  //  }

  //  console.log(merargstrings("sai", "hruday"));





  // function merargstrings(str1, str2) {
  //   let maxlength = str1.length > str2.length ? str1.length : str2.length;
  //   let mergarr = [];
  //   for (let i = 0; i < maxlength; i++) {
  //     if (str1[i] !== undefined) {
  //       mergarr.push(str1[i]);
  //     }
  //     if (str2[i] !== undefined) {
  //       mergarr.push(str2[i]);
  //     }
  //   }
  //   let result = mergarr.join("");
  //   return result;
  // }

  // console.log(merargstrings("saiku", "hruday"));


  // //  another way 
  //  function mergstrings(s1,s2){
  //   let s3="";
  //      let l1=s1.length;
  //      let l2=s2.length;
  //       let max= Math.max(l1,l2);
  //       let j=0;
  //       let k=0;
  //      for(let i =0; i<max; i++){
  //         if(l1>j){
  //           s3=s3+s1[i];
  //           j++;
  //         } 
  //         if(l2>k){
  //            s3=s3+s2[i];
  //            k++;
  //         }
  //      }
  //      return s3;
  //     }
  //   console.log(mergstrings("saikumar",'hruday'));


//  finding the longest word in sentence 
  //  let word = "seshasai sai is arrived1";
  //   let result = word.split(" ");
  //   let len=0;
  //   let ind= 0;
  //   console.log(result);

  //    for(let [indexpossition,item] of result.entries()){
  //            console.log(indexpossition,item);
  //     if( item.length >len){
  //        len=item.length
  //           ind= indexpossition;
  //         }   
  //    }
  //     let output = result[ind]
  //     console.log(output);
  //   // console.log(result);
          
  // let word = "seshasaikumar sai is arrived1";
  //   let result = word.split(" ");
  //   let output= result.reduce((acc,currentvalue)=> (acc.length > currentvalue.length )? acc:currentvalue,"");
  //   console.log(output);

  // console.log(2-"2");



  // flatening the array 
//  const mainarray=[[3,4],[2,7],[3,6,],[6,8]];

//   let arr=[];
//   for(mainitem of mainarray){
//       for(inneritem of mainitem){
//        arr.push(inneritem);
//       }
//   }
// console.log(arr);




//  function multiply(x){
//    return function (y){
//     console.log(y);
    
//     return x*y;
//    }
//  }

//   let multiplybytwo= multiply(3);
//   console.log(multiplybytwo(2));
  
// in finite currying 
//  function add(a){
//    return function (b){
//      if ( b!== undefined){
//       return add(a+b);
//      }else{
//       return a
//      }
//    }
//  }
//   console.log(add(2)(3)(4)());

// let arr= [1,2,3,4,1,2];
//  let result = arr.filter((item,index)=>arr.indexOf(item) !== index);
//   console.log(result);
  
//  function abc(){
//    console.log(abc.xyz);

//  }
// console.log(abc.xyz=10);

//  abc();
//  console.log(abc);
 
//   abc.xyz=400;
//   abc()

//  console.log(a);
//  var a;
 

//  async function foo() {
//   let out= await "namsthey" ;
//   return out;
//  }
//   let result =  foo();
//    result.then(response=>console.log(response));

//  let str= "hruday is my name"

//   let result = str.split(" ");
//   console.log(result);
  
//   let output=result.map((item)=>item[0].toUpperCase()+item.slice(1)).join(' ')
//    console.log(output);


//  let arr= ["a","b","c"];
// let n=[]
//  for (const [index,element] of arr.entries()) {
//   n.push([element,element]);
//  }
//   console.log(n);
//    console.log(Object.fromEntries(n));


//  let arr= ["a","b","c"];
//  let out = arr.reduce((acc,crr,crrindex)=>({...acc,[crr]:crr}),{});
//  console.log(out);





//  let date= new Date();
 
// let arrday=["sun","mon","tue","wed","thur","fryday","saturdat"];
   
//   console.log(`today is : ${arrday[date.getDay()]}`);

//   let hours= date.getHours();
//   let minutes= date.getMinutes();
//   let seconds= date.getSeconds();

//     let trimmedseconds= seconds<10? `0${seconds}`:seconds
//    let result = `current time is ${hours>12? hours-12:hours}:${minutes}:${trimmedseconds}:${hours>12 ? "PM":"AM"}`
//   console.log(result);
  



    // let date1= new Date("2025/01/18");
    // let date2= new Date();

    //  let diffdate= Math.abs( date2-date1);
    //  console.log( Math.floor(diffdate/(24*60*60*1000)));
     

    //  console.log(date1);


    //  let date= new Date().toLocaleString()
    //  let date2= new Date().toLocaleDateString()
    //  let date3= new Date().toLocaleTimeString()
    //  console.log(date);
    //  console.log(date2);
    //  console.log(date3);


    
          
     
     
    
  
  

  
// let mainarr= [1,4,3,999,2,9,99,7];

//    let larg= -Infinity;
//    let secodlarg=-Infinity
//     for ( let item of mainarr){
//         if( item >larg){
//           secodlarg=larg;
//            larg=item;
//         } else if ( item <larg && item >secodlarg){
//            secodlarg= item;
//         }
//     }
//      console.log(larg);
//      console.log(secodlarg);
     
     

//  let result = Math.max(...mainarr)
//  console.log(result);
 
 



//  for ( let i=0; i<2; i++){   
//       let temp= arr[0];

//        for(j=0; j<arr.length-1; j++){
//             arr[j]=arr[j+1];
//        }

//        arr[arr.length-1]=temp;
//  }
//  console.log(arr);



//  let obj= {
//    val:function (){
//      return 90;
//    }
//  } 

// console.log( typeof( obj.val()));
// console.log(( typeof( obj.val().valueOf())));

//  let names= ["hruday",22,true,23];
// let result = names.valueOf();
// console.log(result);

//   console.log( typeof(names));


//  console.log(["A","d"]+["b","c"]);
//  console.log([1,2,4]+[4,5,6])
 
//  console.log([] + ![]);
//  ;

// const api1 = 'https://jsonplaceholder.typicode.com/users';
// const api2 = 'https://jsonplaceholder.typicode.com/users';
// const api3 = 'https://jsonplaceholder.typicode.com/users';
// const api4 = 'https://jsonplaceholder.typicode.com/users';
// const api5 = 'https://jsonplaceholder.typicode.com/users';


//   async function  promisetest (){
//      try{
//      let responses = await Promise.all([fetch(api1),
//       fetch(api2),
//       fetch(api3),
//       fetch(api4),
//       fetch(api5),
//      ]);
//     let result = await Promise.all(responses.map((response)=>{
//       return  response.json();
//     }))
//       console.log(result);
      
//   }catch(err){
//     console.log(err +"has occured");
    
//   }

//   }
 
//    promisetest();


// let apis=[
//       "https://jsonplaceholder.typicode.com/users",
//       "https://jsonplaceholder.typicode.com/albums",
//       "https://jsonplaceholder.typicode.com/todos"
//    ];

//    async function  fetchapi(apis){
//     try {
//       let responses= await Promise.all(apis.map(api=>fetch(api)));
//          let result=await Promise.all(responses.map(item=>item.json()));
//          console.log(result);
//     } catch (error) {
//       console.log("the error has came: "+ error);
      
//     }
         
         
//     }
//  fetchapi(apis)

// let apis=[
//       "https://jsonplaceholder.typicode.com/users",
//       "https://jsonplaceholder.typicode.com/albums",
//       "https://jsonplaceholder.typicode.com/todos"
//    ];


//      Promise.all(apis)
//      .then(fetingapis=>Promise.all(fetingapis.map(api=>fetch(api))))
//      .then(response=>Promise.all(response.map(item=>item.json())))
//      .then(result=>console.log(result))
//      .catch(err=>console.log("error came : "+err))
  

   

//  let promise1=new Promise((resolve,reject)=>{(setTimeout(()=>{resolve("completed1")},2000))})
//  let promise2=new Promise((resolve,reject)=>{(setTimeout(()=>{resolve("completed2")},1000))})
//  let promise3=new Promise((resolve,reject)=>{(setTimeout(()=>{resolve("completed3")},3000))})
 
//  let arr= ([promise1,promise2,promise3])
//   async function testpromise(promisearray) {
//          let response =await Promise.race(promisearray);
//          console.log(response);
//   }
//   testpromise(arr);
  


//  console.log("welcome");

//   const rigister=(cb)=>{
   
//     setTimeout(() => {
//       console.log("rigister");
//       cb();
//     }, 3000);

//   }

//   const login=(cb1)=>{
//     setTimeout(() => {
//       console.log("login");
//       cb1();
//     }, 2000);
//   }

//   const thankyou=()=>{
 
//     setTimeout(() => {
     
//       console.log("thankyou");
//     }, 1000);
//   }
 
//  rigister(()=>login(()=>thankyou()));
   
  




//  const rigister =()=>{
//    return new Promise ((resolve,reject)=>{
//     setTimeout(() => {
//       console.log("rigister");
//       resolve("rigister resolved")
      
//     }, 3000);
//    })
//  }


//  const login =()=>{
//   return new Promise ((resolve,reject)=>{
//    setTimeout(() => {
//      console.log("login");
//      resolve("login resolved")
     
//    }, 2000);
//   })
// }


// const thankyou =()=>{
//   return new Promise ((resolve,reject)=>{
//    setTimeout(() => {
//      console.log("thank you ");
//      resolve("thank you resolved")
     
//    }, 1000);
//   })
// }


//   rigister().then(login).then(thankyou);

  

// function firstcapital(str){
//    let first = str.slice(0,1);
//    let second= str.slice(1)
//    let out= first.toUpperCase()+second;
//    return out
// }

//  function firstallcapital(str){
//   let val= str.split(" ");
//   let result= val.map((item)=> firstcapital(item));
//   let out= result.join(" ");
//   return out
//  }

// function largnumfinde(str){
//   let result = str.split(",");
//   let out= result.map(Number);
//   let finalresult= Math.max(...out);
//   return finalresult;
// }

// function reversestring(){
//  let userinput= document.getElementById("inputstring").value
//   console.log(userinput);

//   //  let result= userinput.split("").reverse().join("");
//    let result= largnumfinde(userinput);
//    console.log(result);
//    document.getElementById("show").innerHTML=`<h1>${result}</h1>`
   
// }
    
// let obj1 = { name: "Rahul", address: { city: "Delhi" } };

// let obj2=obj1; //its acts as reference
// let obj2= Object.assign({},obj1)  //shallowcopy

// let obj2= JSON.parse(JSON.stringify(obj1)); //deepcopy

//  obj2.name="hruday";
//  obj2.address.city="hyd";

//  console.log(obj1);
//  console.log(obj2);
 

   
// const obj = {
//   name: "Amit",
//   date: new Date(),
//   numbers: [1, 2, 3],
// };

// // Using structuredClone()
// const clonedObj = structuredClone(obj);

// console.log(clonedObj); 
// console.log(clonedObj !== obj);  // true (deep copy)
// console.log(clonedObj.date === obj.date); // false (new Date object)


// const obj={
//       name:"sesha",
//       age:31,
//       adress :{
//           state:"ap"
//       }
//   }

//   console.log(Array.from(obj));
  


  // Object.freeze(obj);
  // Object.seal(obj)

  // obj.name="h";
  // delete obj.age
  // obj.color="white"
  // console.log(obj);
  

  // let arr=[
  //   {name:"sai"},
  //   {name:"nagi"},
  //   {name:"sai"},
  //   {name:"nagi"},
  //   {name:"0111"},
  // ]; 
  // let uniquevalues = new Set;
 
  //  let result = arr.filter((item)=>{

  //   if(!uniquevalues.has(item.name)){
  //     console.log(uniquevalues);
      
  //      uniquevalues.add(item.name);
  //      return true;
  //   }
  //     return false
    
  //  })

  //  console.log(uniquevalues);
   



  // let result = [... new Map(arr.map((item)=>[item.name,item])).values()];
  // console.log(result);


  // let mymap=  new Map();
  //   mymap.set("key","value")
  //   mymap.set(true,"yes")
  // // console.log(mymap);
  // for (const [key,val] of mymap) {
  //   console.log(key);
    
  // }
  // let myMap = new Map();
  // myMap.set("name", "Amit"); myMap.set(1, "One"); myMap.set(true, "Boolean Value"); 
  // console.log(myMap); // Output: Map(3) { 'name' => 'Amit', 1 => 'One', true => 'Boolean Value' }
  
  
    //  function rigester(cbfn){
    //     setTimeout(() => {
    //          console.log("rigester");  
    //          cbfn();
    //     }, 3000);
    //  }
    //  function login(fn){
    //     setTimeout(() => {
    //          console.log("login"); 
    //          fn();
    //     }, 2000);
    //  }
    //  function thankyou(){
    //     setTimeout(() => {
    //          console.log("thank you");  
    //     }, 1000);
    //  }

    //    rigester(()=>{
    //     login(thankyou)
    // })



    // let apis=[
    //       "https://jsonplaceholder.typicode.com/users",
    //       "https://jsonplaceholder.typicode.com/albums",
    //       "https://jsonplaceholder.typicode.com/todos"
    //    ];
    
// Promise.all( apis.map((url)=>fetch(url)))
// .then(res=>  Promise.all(res.map(item=>item.json())))
// .then(out=>console.log(out))

      //   using promises 
        // Promise.all(apis)
        // .then((item)=>Promise.all(item.map(url=>fetch(url))))
        // .then((res)=>Promise.all(res.map(data=>data.json())))
        // .then(result=> console.log(result))
        // .catch(err=>console.log("oka err",err))
        

        // async function   fetchdata (){
        //      try {
        //       let response= await Promise.all(apis.map((url)=>fetch(url)))
        //       let result= await Promise.all(response.map((item)=>item.json()))
        //       console.log(result);
        //       let onedata= result[1].map((item=>item.title));
        //       console.log(onedata);       
        //      } catch (error) {
        //       console.log("error came: ",error);
              
        //      }
        //  }
        //  fetchdata();


        // async function   fetchdata (){
        //        try {
        //         let response= await Promise.any(apis.map((url)=>fetch(url)))
        //         console.log(response);
                
        //         let result= await response.json()
        //         console.log(result);
                 
        //        } catch (error) {
        //         console.log("error came: ",error);
                
        //        }
        //    }
        //    fetchdata();


        //  let p1= new Promise((res,rej)=>setTimeout(() => {res("one") }, 3000));
        //  let p2= new Promise((res,rej)=>setTimeout(() => {res("two") }, 2000));
        //  let p3= new Promise((res,rej)=>setTimeout(() => {res("three") }, 4000));
   
        // //  Promise.allSettled([p1,p2,p3])
        // //  .then((res)=>console.log(res)
        // //  )
        // //  .catch(err=>console.log("promise is rejcted ra: ",err)
        // //  )

        //  async function fetchdata(apis) {
        //   let one= await Promise.allSettled(apis.map((item=>item)));
        //   console.log(one);
          
        //  }
        //  fetchdata([p1,p2,p3])

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((data) => console.log("Data:", data))
//   .catch((error) => console.log("Error:", error))
//   .finally(() => console.log("Hide loading spinner"));
         


//  function fact(a,b,cb){

//   setTimeout(() => {
//      cb(a*b);
//   }, 1000);
//  }

//   fact(2,4,(result1)=>{
//     console.log(result1)
//     fact(result1,2,function(val2){
//       console.log(val2);
//       fact(val2,2,function(val3){
//         console.log(val3);
        
//       })
//     })
//   })


  //  usng promises 
    // function fact(a,b){
    //   return new Promise((res,rej)=>{
    //     setTimeout(() => {
    //      res(a*b);
    //     }, 100);
    //   })
    // }

    //  fact(2,3)
    //  .then((result)=>fact(result,2))
    //  .then((result2)=>fact(result2,2))
    //  .then(res=>console.log(res))



// let p1= new Promise((resolve,reject)=> setTimeout(()=>resolve("one"),2000));
// let p2= new Promise((resolve,reject)=> setTimeout(()=>resolve("two"),1000));
// let p3= new Promise((resolve,reject)=> setTimeout(()=>resolve("three"),3000));
// let p4= new Promise((resolve,reject)=> setTimeout(()=>resolve("four"),4000));
// // let p2= new Promise((resolve,reject)=>resolve("two"));
// // let p3= new Promise((resolve,reject)=>resolve("three"));





//    async function fetchresult (){
//       let result = await Promise.race([p1,p2,p3,p4]);
//       console.log(result);
      
//    }

//    fetchresult();


//   function rigister(){
//      return new Promise((resolve,reject)=>{
//       setTimeout(() => {
//         console.log("rigiser");
//          resolve("suc");
//         }, 3000);
//      })
    
     
//   }


//   function login (){
//     return new Promise((resolve,reject)=>{
//       setTimeout(() => {
//         console.log("login");
//          resolve("e");
//         }, 2000);
//      })
    
//  }


//  function thankyou () {
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       console.log("thankyou");
//        resolve();
//       }, 500);
//    })
// }


//  rigister().then(login).then(thankyou)

//  let apis=[
//       "https://jsonplaceholder.typicode.com/users",
//       "https://jsonplaceholder.typicode.com/albums",
//       "https://jsonplaceholder.typicode.com/todos"
//    ];

    //  Promise.all(apis)
    // .then((req)=>Promise.all(req.map(item=>fetch(item))))
    // .then(res=>Promise.all(res.map(item=>item.json())))
    // .then(result=>console.log(result)
    // )

    //  async function  fetchdata() {
    //    try {
    //     let response= await Promise.all(apis.map(url=>fetch(url)))
    //     let result= await Promise.all(response.map(url=>(url.json())));
    //       let out= await result[0].map(name=>name.name)
    //     console.log(out);
    //    } catch (error) {
    //     console.log(error,"Came");
        
    //    }
    //  }
    //  fetchdata();

    // async function  fetchdata() {
    //   try {
    //    let response= await Promise.race(apis)
    //    let result= await fetch(response);
    //    let out= await result.json();
    //    console.log(out);
      
    //   } catch (error) {
    //    console.log(error,"Came");
       
    //   }
    // }
    // fetchdata();


      // function factorial (a,b,cb){
      //   setTimeout(() => {
      //      cb(a*b);
      //   }, 200);
      // }

      //  factorial (2,3,(val1)=>{
      //   console.log(val1);
      //    factorial (val1,4,(val2)=>{
      //     console.log(val2);
      //    })
      //  })

      //  function factorial(a,b){
      //   return new Promise ((res,rej)=>{
      //     setTimeout(() => {
      //       res(a*b)
      //     }, 200);
      //   })
      //  }

      //  factorial(2,3)
      //  .then((response1)=>factorial(response1,4))
      //    .then((res2)=>factorial(res2,3))
      //    .then((res3)=>factorial(res3,2))
      //    .then((res4)=>factorial(res4,1))
      //    .then(res=>console.log(res))
      //    .catch(err=>console.log("this is : what  "+err))
       



      // function factorial(a, b, cb) {
      //      setTimeout(() => {
      //        cb(a * b);
      //      }, 200);
      //    }
      
      //    factorial(6, 5, function (val1) {
      //      console.log(val1);
      //      factorial(val1, 4, function (val2) {
      //        console.log(val2);
      //        factorial(val2, 3, (val3) => {
      //          console.log(val3);
      //          factorial(val3, 2, (val4) => {
      //            console.log(val4);
      //          });
      //        });
      //      });
      //    });
      


 

 



 



