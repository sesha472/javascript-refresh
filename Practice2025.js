

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
 
 
 























//   let name= prompt("Please enter your name");
//   let marks = Number( prompt("enter your marks"));
//    switch(true){
//     case marks>=75: 
//     result="you got first class"
//     break;
//     case marks>=60 && marks<75:
//     result="YPU GOT SECOND CLASS"
//     break;
//     case marks>=35 && marks <60:result="you got 3 rd class";
//     break;
//     default:
//       result ="your pass";
//     break;
//    } 
//   console.log(result);
  







