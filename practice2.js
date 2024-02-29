
// pure functions are those dont hav eany side effects 
// const addtwovalues=(a,b)=> console.log(a+b);
// addtwovalues(2,3)
// addtwovalues(5,6)

// const { array } = require("prop-types");

// impure functions example these function produe diffrent output for the same input 
// let total=0;
//  function addwithtotal(n){
//   total += n;
//    console.log(total);
// }

// addwithtotal(9);//9
// addwithtotal(9);//18


// funcion currying 
//  function operation (n){
//    return function  (t){
//         return n+t
//     }
    
//  }
// const double = operation(2);
// const addwithfour = operation(4);
// console.log(double(3));//5
// console.log(addwithfour(3));//7

// console.log("9"+9+"9");
// console.log(2*"8");
// console.log(5*"8");

// for (var i = 0; i < 5; i++) {
//     setTimeout(function() {
//       console.log(i);
//     }, 1000);
//   }//55555 this is because of block scope


//   for (let i = 0; i < 5; i++) {
//     setTimeout(function() {
//       console.log(i);
//     }, 1000);
//   } //01234

// var func = [];
// for (var i = 0; i < 5; i++) {
//   func[i] = function() {
//   console.log(i);
//   };
// }
// func[3]();//5
// func[0]();//5 

// var func = [];
// for (let i = 0; i < 5; i++) {
//   func[i] = function() {
//     console.log(i);
//   };
// }
// func[3]();

// With let in the loop declaration (for (let i = 0; i < 5; i++)),
//  each iteration of the loop creates a new binding for i. Therefore, .
//  when each function is created and stored in the func array, it captures the value of i at that particular iteration.
// So, when func[3]() is called, it will output 3, as expected, because i was 3 when the function was created during the loop iteration.

// (function() {
//     var a = b = 5;
//   })();
//   console.log(b);
//   console.log(a); //error b is global variable a cant acces out side of functiin iffe


// var m = [
//     [0,  1,  2,  3,  4],
//     [5,  6,  7,  8,  9],
//     [10, 11, 12, 13, 14],
//     [15, 16, 17, 18, 19]
//   ];
  
//   var spiral = function (m) {
//           const result=m.flat();
//           return result;
//   };

//   console.log(spiral(m));

//   //[
//     0,  1,  2,  3,  4,  5,  6,
//     7,  8,  9, 10, 11, 12, 13,
//    14, 15, 16, 17, 18, 19
//  ]

// function flattenArray(arr) {
//     return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
// }

// const arr = [1, 2, [3, 4, [5, 6]]];
// const flatArr = flattenArray(arr);

// const arr = [1, 2, [3, 4, [5, 6]]];
// const flatArr = [].concat(...arr);
// console.log(flatArr);
// 1array.from method coverts string to array
// 2.we can create empty array with length we can fill with push method


// let a="apple";
// console.log(Array.from(a));//[ 'a', 'p', 'p', 'l', 'e' ]

// let b=Array.from({length:2}); //if we put empty string 
// console.log(b);//[ undefined, undefined ]
// oe we can use this method to fill with index values 
// let c=Array.from({length:5},(value,index)=>index)
// console.log(c);//[ 0, 1, 2, 3, 4 ]

// console.log(typeof c );//objbect

// console.log( Array.isArray(c)); //true


// usange of filter map reduce method 
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

// let result=orders.filter((item,index)=>{
//     if (item.name==="raju"){
//         return item;
//     }
// }).map((vale,index)=>vale.purchased).reduce((acc,curentvalue)=>acc+curentvalue,0);
// console.log(result);

// flat method falts the arry 

// const  a=[[1,2],[3,4],[3,4]];
// console.log(a.flat());//[ 1, 2, 3, 4, 3, 4 ]

// const  a=[[1,2],[3,[4,3,[7,8]]]];
// console.log(a.flat());//[ 1, 2, 3, [ 4, 3, [ 7, 8 ] ] ] empty falst and falt (1) also same
// console.log(a.flat(1));//[ 1, 2, 3, [ 4, 3, [ 7, 8 ] ] ]
// console.log(a.flat(2));//[ 1, 2, 3, 4, 3, [ 7, 8 ] ]
// console.log(a.flat(3));//[ 1, 2, 3, 4, 3, [ 7, 8 ] ]

// falt map method we use insted falt amp saparatle used 

// const a=["hellow javascript","namsthey sesha"]
// let resultmap=a.map((item)=>item.split(" "))//[ [ 'hellow', 'javascript' ], [ 'namsthey', 'sesha' ] ]
// let result=resultmap.flat();//[ 'hellow', 'javascript', 'namsthey', 'sesha' ]
// console.log(result);

// // inted this we use falt map 

// const a=["hellow javascript","namsthey sesha"];
// let result=a.flatMap((item)=>item.split(" "))
// console.log(result);//[ 'hellow', 'javascript', 'namsthey', 'sesha' ]

// entries methods return array of index and item values usnig for of method
// const a=[3,54,5,96,6] ;
// for (const iterator of a.entries()) {
//     console.log(iterator);
//     // [ 0, 3 ]
//     // [ 1, 54 ]
//     // [ 2, 5 ]
//     // [ 3, 96 ]
//     // [ 4, 6 ]
// }

// function one() {
//     console.log("one");
//     return false
// }
// function two() {
//     console.log("two");
//     return true
// }
// // let result1=((one())&&(two()))
// let result2=(0 &&"sesha")
// // console.log(result1);
// console.log(result2);


// let result=(3<4?"this is true":"this is false");
// console.log(result);

// function one(){
//     console.log(a); //hoisted 
//     if(true){
//         var a=9;
//         let b=10
//         console.log(a);
//     console.log(b);
//     }
// }
// one();


// let res=new Map([[1,2],[3,4]])
// console.log(res);//Map(2) { 1 => 2, 3 => 4 }

// let numbers =[1,2,3,4];
// let total=1;

// for (const iterator of numbers) {

//      total *= iterator;
// }
// console.log(total);

// let arr = ["I", "study", "JavaScript", "right", "now"];

// // remove 2 first elements
// let removed = arr.splice(0, 2);

// console.log(removed);


// let arr = ["I", "study", "JavaScript"];

// arr.splice(arr.length, 0, "complex", "language");
// console.log(arr);

// let arr = [1, 2, 5];
// let a=arr.splice(-1, 0,3);
// console.log(arr);
// console.log(a);

// let arr = ["t", "e", "s", "t"];

// console.log( arr.slice(1, 3) );//[ 'e', 's' ]




// let arr = [1, 2];

// let arrayLike = {
//   0: "something",
//   length: 1
// };

// console.log( arr.concat(arrayLike) );//[ 1, 2, { '0': 'something', length: 1 } ]


// let arr = [1, 2];

// let arrayLike = {
//     0: "something",
//     1: "else",
//     [Symbol.isConcatSpreadable]: true,
//     length: 2
// };

// console.log( arr.concat(arrayLike) );//[ 1, 2, 'something', 'else' ]


