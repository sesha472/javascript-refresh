

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

  
