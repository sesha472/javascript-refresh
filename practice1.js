 
  
  
//   var a;
//   var a=10;
//   a=100
//   console.log(a);

//   let b;
//    b=20
//    b=200 
// console.log(b);


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

