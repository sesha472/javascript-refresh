 
  
  
//   var a;
//   var a=10;
//   a=100
//   console.log(a);

const { func } = require("prop-types");

//   let b;
//    b=20
//    b=200 
// console.log(b);

// const a=[1,2,3,4];
// console.log(a[4]);

// const a=[1,2,3,4];
// const b = [...a];
// b.push(5)
// console.log(b);
// console.log(a);

// const user={name:"sesha sai"};
//   const admin=JSON.parse(JSON.stringify(user));
//   admin.age=30;
//   console.log(admin);
//   console.log(user);

  
// const user={name:"sesha sai"};
// const admin={...user};
// admin.age=30;
// console.log(admin);
// console.log(user);

// function begin () {
//   for (var i=0; i<5; i++) {
//    console.log(i)
//   }
//   console.log(i+"k")     
//  }
 
//  begin();

// hoisting
// d();
// function d(){
//   console.log("hi");
// }

// console.log(a);

// let a= 10;



// var e=()=>{
//   console.log("e");
// }

// e();









// const person={
 
//     name:"sai",
//     age:"30"
// }


// console.log(Object.entries(person));

// let a="sesha";
// let reverse=" ";
// // console.log(a.split("").reverse().join(""));
// for(let i=a.length-1; i>=0; i--){
//  reverse=reverse+a[i];

// }

// console.log(reverse);

// var a=[10,20,30,40];
// let b=[...a];
// b[3]=99;
// console.log(a);
// console.log(b);

// var a=[10,20,30,40,[50,60]];
// let b=[...a];
// b[4][0]=99;
// console.log(a);
// console.log(b);

// the bellow is deep copy 

// let a=[10,20,30,40,[50,60]];
// let b= JSON.parse(JSON.stringify(a))
// b[4][0]=99;
// console.log(a);
// console.log(b);

// let originalObject = { a: 1, b: { c: 2 } };
// let deepCopy = JSON.parse(JSON.stringify(originalObject));
// deepCopy.b.c = 3;
// console.log(originalObject.b.c); // Output: 2


// match.round ->return rounded to  its nearest intiger 
// Math.ceil->up to neares intiger
// Math.floor->down to neares intiger
// Math.trunc->returns intiger paret


// console.log(Math.random() *10);  //4.09878 like this 
// if we want to number witen range 

// this beloow logic return number bitween 2 numbers 

// let min =2;
// let max=4;
// let result= (Math.floor (Math.random() * (max-min) + min  )); //2 or 3 
// let result= (Math.ceil (Math.random() * (max-min) + min  )); // 3 or 4 
// let result= (Math.round (Math.random() * (max-min) + min  )); //2 or 3 or 4
// console.log(result);

// const user = {
//     email: '',
//     password: '',
//     loggedIn: false,
//   };


//   const data={...user,email:"sesha",loggedIn:true}
//   console.log(user);
//   console.log(data);

//  const user={name:"sesha sai"};
// const admin={...user,name:"kumar"};
// admin.age=30;
// console.log(admin);
// console.log(user);

// let data={
//     title:"namsthye",
//     city:"hyd",
//     state:"ap"
//   }
  
//   let b= {...data} ;
//   data.age="10";
//   console.log(data);
//   console.log(b)

// let arr1=[10,20,30,40];
// for (let index = 0; index < arr1.length; index++) {
//   console.log(arr1[index]);
  
// }

// for (const iterator of arr1) {
//   console.log(iterator *2);
// }

// const doublearry=(arr1,calnum)=>{
//      let emptyarr=[];
//     // cont arr1=arr1;
//    for(const item of arr1){
//     emptyarr.push(item*2)
//    }
//    return emptyarr;

// }

// let ar=[1,2,3,4,5];
// console.log(doublearry(ar,2));

// const square=(arr1,calnum)=>{
//   let emptyarr=[];
//  // cont arr1=
  // for (const key in phara) {
  //     console.log(key);
  // }arr1;
// for(const item of arr1){
//  emptyarr.push(item**2)
// }
// return emptyarr;

// }

// let ar1=[1,2,3,4,5];
// console.log(square(ar1,2));

// const howmanyletters=()=>{
//   const phara="this is"
//   // for (let index = 0; index < phara.length; index++) {
//   //     console.log(index+1); 
//   // }

// for (const iterator of phara) {
//     // let d= iterator;
//     console.log(iterator);
    
//   }

//   for (const iterator in phara) {
//     // console.log(iterator+1 );// 0+1 ,1+1 we get 01 11 like this string ataching   //we can get index
//     console.log(Number(iterator)+1 );// 1,2,3..
//   }
// }
// howmanyletters();

//  if you use of loop we will get letters 
//  if we use in loop we can get index numbers
//  const toatlarr=(arr1)=>{
//   let result=0;

//   // for (let i = 0; i < arr1.length; i++) {
//   //        result=result+arr1[i];
     
//   // }
//   for (const item of arr1) {
//          result=result+item;    
//   }
//   return {result:result};

//  }

//   console.log(toatlarr([0,1,5,11,1]));
 

// const maxvalue=(arr1)=>{
//   let result=0;
//   for (const item of arr1) {
//            if(item>result){
//             result=item;
//            }
//   }
//   return result;
//  }
//   console.log(maxvalue([12,3,-2,-1,1]));
 


//   const minvalue=(arr1)=>{
//     let result=0;
//     for (const item of arr1) {
//              if(item<result){
//               result=item;
//              }
//     }
//     return result;
//    }
//     console.log(minvalue([12,3,-2,-1,1]));
    


// let arr1=['10','10',"10"].map(parseInt);
// console.log(arr1);
// console.log(9);



// let arr=[1,2,4,5,67,65,3,3,2,24,5,6];
// console.log(arr);

//in operatoer is used to get key name in obj

// let obj={
//       title:"namsthye",
//       city:"hyd",
//       state:"ap"
//     }

//     console.log("title" in obj); //true
//     console.log("colour" in obj); //false


// let spc="price";

// let product={
//   name:"mobile"
// }
// // product.spc=25000;
// // //it adds another propert to product
// // console.log(product);//{ name: 'mobile', spc: 25000 }

// product[spc]=250; //its adds spc variable name as key in obj
// console.log(product);//{ name: 'mobile', spc: 25000, price: 250 }


// let arr=["a","b","c"];
// let obj1={...arr};
// // it takes index as keys for object 
// console.log(obj1);//{ '0': 'a', '1': 'b', '2': 'c' }
// let obj={
//         title:"namsthye",
//         city:"hyd",
//         state:"ap"
//       }
//       let arr2=[...obj];
//       console.log(arr2);//Error will occur cant spred obj in arry



//usnig  optional chaing reduce  errors in nested object properties accesing 
// let obj={
//   name:"mobile",
//   price:"200",
//   specifications:{
//     ram:"8gb",
//     rom:"128gb"
//   }
// }
// let obj2={
  
//     name:"laptop",
//     price:"900",
// }

// console.log(obj.specifications.ram);//8gb
// // console.log(obj2.specifications.ram);//it gives error becuase there is  no specificationsproertie
// console.log(obj2.specifications?.ram);//undefined 



// creating arrays using construtor
// let arr1= new Array(2,3,4);// it creates arry wth arguments 
// console.log(arr1); //[ 2, 3, 4 ]

// let arr2= new Array(4);// if we give one elemnet it take that elemnt as length of array
// console.log(arr2)//[ <4 empty items> ]
// console.log(arr2.length)//4
// if we give string of "4" it take one elemntof 4 in array no problem 

// delect operator is used to delt obj properties not variables 
// delect can nothing do primitive data types 
// let item="javascript";
// let obj2={
//       name:"laptop",
//       price:"900",
//   }
//   delete item; //nothing happend
//   delete obj2;//nothing happend
//   delete obj2.price//price will be deleed 
//   console.log(item);
//   console.log(obj2);


// call by value and call by referance 

// if we pass primitive values as function arguments only their values will be passd
//  if we pass obj ,arry  type values as function arguments their reference will be passed 
//   if we try to change tehri  values only arry values iwwll be chnaged not primitive values 
//   throught call by values outside variable wont relflects 

//   in t his we passes num as argument to function but ony num value will be passed to argument a ,
//   but in arr not  value its reference will be taken 

// let num=100;
//  let arr=[10,20,30];

//  function test(a,b) {
//   a=200;
//   b[1]=50;
//  }
//  test(num,arr); //num value is passed to argument a ,arr is passed as refernce 
//it cant change num vale only change reference values like arr obj
//  console.log(num);//100
//  console.log(arr);//[ 10, 50, 30 ]


// let y ="100";
// console.log( typeof y); //string 
// console.log( typeof +y);//it convets to number using unary + operator

// in js when tring to add two arrys it converts arrys in to stings and adds 
// let arr=[10,20,30];
// let arr2=[100,200,300];
// console.log(arr+arr2);//10,20,30100,200,300



// argumens  is a obje its a fixed kekyword in js  it return function arguments a key value pair of object with indexvalue of arr

// function show(){
//   console.log(arguments);
//   console.log(arguments.length);//4
// }

// show(10,2,3,"34"); //[Arguments] { '0': 10, '1': 2, '2': 3, '3': '34' }

// in js empty arr [] obj ,{} treated as true 
// undefined ,null,"",0 => treated as false 



// let obj={
//         name:"laptop",
//         price:"900",
//         colo:"yellow"
//     }

//     // let res=JSON.stringify(obj);
//     // console.log(res);//{"name":"laptop","price":"900","colo":"yellow"}

//     let res=JSON.stringify(obj,["price","colo"]); //if we give 2nd argument as arry of elemts of props names only that will take as json objct 
//     console.log(res);//{"price":"900","colo":"yellow"}


// var num=100;
// function show(){
//   console.log(num);
//   // var num=200; //if we use this line we get undefinded becuayse in function this variable get hoisted
// }
// show();

// naming convension 
// ->camelCase   =>evrey word should be caital except first word
// ->kebab-case  =>evry word small leters with highfun
// ->snake_case  =>evry word small with underscore
// ->PascalCase   =>evryword should start with capital letter


// let color="yellow";
// let product={
//   name:"car",
//   wheels:"4",
//   color      //it takes top color value as value to this key object or we can use color:color like that 
// }
// console.log(product);//{ name: 'car', wheels: '4', color: 'yellow' }
 

// with property will return modifed copied new arry wiit h replaced values 

const arr=['s','r','t'];
console.log(arr.slice(1,"t"));//['s', 't', 't'] it only works in browser not in node js local setup 



