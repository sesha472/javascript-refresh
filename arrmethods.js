


// let arr1=[10,20,30,40];
// let arr2=[50,60,70,80];
//  let arr3=arr1.concat(arr2);
//  console.log(arr3);
//  console.log(arr1);
//  console.log(arr2);

// console.log(9);


// let arr= [1,2,3,4,2,2,3,4,5,9];
// let result = Math.max(...arr);
// console.log(result);





// removie duplicare eelmnst from array 
//  let arr= [1,2,3,4,2,2,3,4,5,2];
//   let result = [...new Set(arr)]
//   console.log(result );
      
//  let arr= [1,2,3,4,2,2,4,5,2,9,9];
//  let result = arr.filter((item,index,arr)=>{
//          return arr.indexOf(item) === index 
//  })
//     console.log(result);
   

 
    
 

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
// console.log(courses.splice(1,2,"namsthey","good"));
// console.log("After Removed 2 elements starting from index 1: " + courses);//Html react node.js
// let arr = [1, 2, 5];
// let a=arr.splice(-1, 0,3);
// console.log(arr);[1,2,5,3]
// console.log(a); //[]


// let arr = ["I", "study", "JavaScript"];
// arr.splice(arr.length, 0, "complex", "language");
// console.log(arr); //[ 'I', 'study', 'JavaScript', 'complex', 'language' ]



// let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// let result=fruits.slice(1,3); //starting index endning index which is exclued 
// console.log(result);  //[ 'Orange', 'Lemon' ]

// let arr = ["t", "e", "s", "t"];
// console.log( arr.slice(1, 3) );//[ 'e', 's' ]

// let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// let result =fruits.slice()//it create copy of that array



// // checks evry elemnt in the array passed a test or not 
// let a=[2,4,6,5];
// console.log(a.every(i=>i%2==0));
// let a=[2,14,455,4,6,5];
// console.log(a.sort((a,b)=>a-b));

// let a=[2,4,6,5];
// console.log(a.includes(5));

// var array=['s','a','i','k','u','m','a','r'];
// console.log(array.join(""));


// let num=[1,3,5,7,9];
// console.log(num.indexOf(5));


// usange of filter map reduce method 
// finde the raju purchased total amount 
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

// let result = orders.filter((item,index)=>item.name === "raju").map((item,index)=>item.purchased).reduce((acc,cur)=>acc+cur)
// console.log(result);


// let result=orders.filter((item,index)=>{
//     if (item.name==="raju"){
//         return item;
//     }
// }).map((vale,index)=>vale.purchased).reduce((acc,curentvalue)=>acc+curentvalue,0);
// console.log(result);




//  to string 

// let num=[1,3,5,7,9];
// console.log(num.toString()); //1,3,5,7,9
// console.log(num);


// //  let arr1=[10,20,30,40];
// //  console.log(typeof arr1.toString()); //strin
// //  console.log(typeof arr1);//obj
// //  console.log(arr1.toString());//10,20,30,40


// let num = 123;
// console.log(num.toString());      // Output: "123"
// console.log(num.toString(2));     // Output: "1111011" (binary)
// console.log(num.toString(16));    // Output: "7b" (hexadecimal)


// to source 
// let arr = [1, 2, 3];
// console.log(arr.toSource()); // Output: "[1, 2, 3]" 

// let num = new Number(42);
// console.log(num.toSource()); // Output: "(new Number(42))"

// let regex = /abc/g;
// console.log(regex.toSource()); // Output: "/abc/g"



// Array.from() 

// let a="apple";
// console.log(Array.from(a));//[ 'a', 'p', 'p', 'l', 'e' ]

// let b=Array.from({length:2}); //if we put empty string 
// console.log(b);//[ undefined, undefined ]
// oe we can use this method to fill with index values 
// let c=Array.from({length:5},(value,index)=>index)
// console.log(c);//[ 0, 1, 2, 3, 4 ]

// console.log(typeof c );//objbect

// console.log( Array.isArray(c)); //true








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

    //   const obj = {
    //     name: "Alice",
    //     greet:  ()=> {
    //       setTimeout(() => {
    //         console.log("this " + this); //undefinde
    //       }, 1000);
    //     },
    //   };
    //   obj.greet();
    //   console.log(obj.greet());



// let bool = true ;
// console.log(bool.valueOf());  // Output: "true"

// let arr1=[10,20,30,40];
// let   arr2=[];
// let result=arr1.entries();
//    for (let [index,item] of arr1.entries()){
//     console.log(index ,item);
//    }

//  console.log(result);
     
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


// let array=['s','a','i','k','u','m','a','r'];
//    for (const iterator of array.keys()) {
//     console.log(iterator);
//    }



// let array=['s','a','i','k','u','m','a','r'];
// console.log(Object.entries(array));
// console.log(Object.keys(array));
// console.log(Object.values(array));



// let a=[5,4];
// let r=a.find(i => i%2==0 ) ;
// console.log(r);





// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.constructor); 

// var arr = new Array( "Geeks", "for", "Geeks"); 
//         console.log( arr.toString());   
//         console.log( arr.toLocaleString());   

















// console.log(found);

// practice programs git hub page
// https://github.com/MehedilslamRipon/Problem-solving-with-JavaScript/blob/master/problem-18.js



// var username='a';

// var foo=(function (username){
//     console.log(" first "+username);
//     username="b";
//     console.log(username);
//     return username;
// })(username);

// console.log(username);





































































































