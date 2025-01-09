





//  calculate  raju purchased order amounts 

// let orders =[
//   {name:"raju",
//   purchased:30,
//    },
//    {name:"shiva",
//   purchased:30,
//   },
//   {name:"vishnu",
//   purchased:30,
//   },
//   {name:"raju",
//   purchased:150,
//    },
//   {name:"hanuman",
//   purchased:30,
//   }
// ];

//   let result= orders.filter((item)=> item.name === "raju").map((item)=>item.purchased).reduce((acc,curvalue)=> acc+curvalue)
//   console.log(result)
// const printName = (personObj) => {
//     console.log(personObj.name);
// }

// printName({name: 'Max', age: 28}); // prints 'Max'

 
// this is how distructuring works 
// const printName = ({name}) => {
//     console.log(name);
// }
// printName({name: 'Max', age: 28}); // prints 'Max')


// let obj1={fname:"sachin",lname: "tendulkar",age:"27"}; //using distructuring
// function fullname({fname,lname}){
//     console.log(fname);
//     console.log(lname);
// }
// fullname(obj1)


// Object.freeze() cant add,,remove,update  properies from object 

//  freez the object 
// const obj={
//     name:"sesha",
//     age:31,
//     adress :{
//         state:"ap"
//     }
// }
// Object.freeze(obj)
// obj.state="ap";
// obj.age=40;
// obj.adress.state="tn"
// console.log(obj);


// deeep freez the object no prevnet changing of nested object values 
// const dataobj={
//     name:"sesha",
//     age:31,
//     adress :{
//         state:"ap"
//     }
// }

    // function deepfreesz(obj){ 
    //     const propNames = Object.keys(obj)
    //      for(let item of propNames){
    //          if(typeof obj[item] === "object" ){
    //             deepfreesz(obj[item])
    //          }
    //      }
    //      return  Object.freeze(obj);
    // }
    // console.log(dataobj);
    // deepfreesz(dataobj)
    // dataobj.adress.state="tn"
    // console.log(dataobj);




// Object.entries() method will return the array of string key value pairs of object props and values 
// const person1 = {
//   name: "sesha",
//   hight: 5.6,
//   age: 25,
//   weight: 40,
//   colour: "whight",
// };
// for (const [key,value] of Object.entries(person1)) {
// console.log(key,value); 
// }



// The Object.fromEntries() static method transforms a list of key-value pairs into an object.

// let users=[["name",'sesha'],["name2" ,'sesha2']]
// console.log(Object.fromEntries(users)); //{name: 'sesha', name2: 'sesha2'}


// In JavaScript, a Map is a collection of key-value pairs
//  where both keys and values can be of any data type.
//  It is an iterable, meaning it can be used in a for...of loop,
//  and it maintains the order of insertion of the elements.

// const myMap = new Map();

// Adding key-value pairs
// myMap.set('name', 'John');
// myMap.set('age', 30);
// myMap.set('state', "Ap");

// // // Getting a value
// console.log(myMap.get('name')); // 'John'
// console.log(myMap.get('age')); // 'John'
// console.log(myMap.get('state')); // 'John'

// // Checking if a key exists
// console.log(myMap.has('age')); // true

// // Deleting a key-value pair
// myMap.delete('name');
// console.log(myMap.has('name')); // false

// // Iterating over a Map
// myMap.set('country', 'USA');
// myMap.set('profession', 'Developer');

// for (let [key, value] of myMap.entries()) {
//   console.log(`${key}: ${value}`);
// }

// // Output:
// // 'age: 30'
// // 'country: USA'
// // 'profession: Developer'

// // Clearing the map
// myMap.clear();
// console.log(myMap.size); // 0


// const users=[
//     {name :'sesha',
//        hight : 5.6,
//        age: 25,
//         weight: 40,
//       colour: "whight"
//     },
//       {
//       name :"sesha",
//       hight: 5,
//       age: 26,
//       weight:65,
//       colour:"blue"
//       },
//       {
// name:"sai",
// hight:6,
// age:27,
// weight:66,
// colour:"skyblur"
// }];


// let userswithhighweight=users.filter(item=>item.weight>50)
// console.log(userswithhighweight);

// convert array of indexes and their values as key value pair of obejct 
// var arry=[1,9,4,5,6,7];
//     let result = arry.reduce((acc,current,curentindex,array)=>{
//         acc[curentindex] = current*2;
//         return acc;
//     },{});     
//     console.log(result);
    


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










// var s=arry.reduce(function(a,b){
//   a[b]=b*b;
//   return a;
// },{})
// console.log(s);



// for(i=0;i<s.length;i++){
// console.log(Object.keys(s[i]));
// }


// const obj=[{
//     key:"sample1",
//     data:"Data1",
//     },
//     {
//         key:"sample1",
//         data:"Data1",
//         },
//         {
//             key:"sample2",
//             data:"Data2",
//             },
//             {
//                 key:"sample1",
//                 data:"Data1",
//                 },
//                 {
//                     key:"sample3",
//                     data:"Data1",
//                     },
//                     {
//                         key:"sample4",
//                         data:"Data1",
//                         }
// ];


//  let output={}
//      obj.forEach((item)=>{
//         if(output[item.key]){
//             //if key is avilable
//             console.log("true");
//             output[item.key].push(item)
//         }else{
//            console.log("false");
//             output[item.key]=[item]
//         }
//      })
//  console.log(output);


// let sm1result =obj.filter((item,index)=>item.key==="sample1")
// let sm2result =obj.filter((item,index)=>item.key==="sample2")
// let sm3result =obj.filter((item,index)=>item.key==="sample3")
// let sm4result =obj.filter((item,index)=>item.key==="sample4")

// let output={
//     sample1:sm1result,
//     sample2:sm2result,
//     sample3:sm3result,
//     sample4:sm4result,
// }
// console.log(output);


// function app(){
//     element=document.createElement("h1");
//     element.textContent="sesha my name"
//     document.body.appendChild(element)
// }


// let data1={a:1 ,b:2, c:3, d:10,e:12};
// let data2={a:2, e:12, f:6, d:10}
// let outout= {};

//  for (const key in data1) {
//  if( data2[key] === data1[key]){
//     outout[key] = data1[key]
//  }
//  }
//  console.log(outout);
 

// let data1={a:1 ,b:2, c:3, d:10,e:12}
// let data2={a:2, e:12, f:6, d:10}
// let output= {}
 


//  for (let [key1,value1] of Object.entries(data1)){
//     // console.log(data2[key1]);
    
//      if(data2[key1] === value1){
//         output[key1] = value1
//      }


//  }
// console.log(output);


//  let normalfunobj={
//     name:"sesha",
//     foo:function(){
//         console.log(this.name);
//     }
//  }
 
//   let output = normalfunobj.foo;
//   output();
// normalfunobj.foo();
  
// console.log(0.2+0.1 == 0.3);
// console.log(0.3+0.6 == 0.9);

//  function* add (){
//      let count =0;

//       while (true){
//         yield count++;
//       }
   
//  }

//   let result = add();

//   console.log(result.next().value);
//   console.log(result.next().value);
//   console.log(result.next().value);
//   console.log(result.next().value);

//   console.log(result.next().value);

 