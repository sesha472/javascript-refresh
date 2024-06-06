// let a=[1,2,3,4,5,[1,2,3,4,[1,2,3,4,5]]];
// let b=JSON.parse(JSON.stringify(a));
// a[5][4][0]=10
// console.log(a);
// console.log(b);



// how to finde duplicate elements in array 

// const arr=[2,3,4,5,2];
// const result =arr.filter((item,index,array)=> {
//     return  array.indexOf(item)!==index ? item:null //[2]
//     return  array.indexOf(item)===index ? item:null //[2,3,4,5]
// })
// console.log(result); //[2]



// how to find max and min value in array 

// const arr=[3,45,56,933,565,4];
// let result=Math.max(...arr)
//   console.log(result);

//    or 
//    let result=arr.reduce((acc,curent)=>{
//     console.log(`accumulator : ${acc} ,cuurentvalue:${curent}`);
//           if(curent>=acc){
//             return curent;
//           }else{
//             return acc
//           }
//    },-Infinity);
//    console.log(result);
    // or

//   let result= arr.reduce((acc,cur)=>{
//     return acc>=cur?acc:cur;
//   },-Infinity)
//   console.log(result);
//    or 

//   let value=-Infinity;
//  let result= arr.forEach((item,index)=>{
//         if(item>=value){
//       value=item
//         }
//  })
//  console.log(value);

 //   let value=-Infinity;
//   for (let index = 0; index < arr.length; index++) {
//           if(arr[index]>=value){
//             value=arr[index]
//           }
//   }
//   console.log(value);


// const result=arr.reduce((acc,cur)=> {
//     return Math.max(acc,cur);
// },-Infinity)
//   console.log(result);

// const maxnumberult= Math.max(...arr);
// const minnuber= Math.min(...arr);
// console.log(maxnumberult);
// console.log(minnuber);



// how to finde second largest value in array 

// const arr=[3,45,56,93,56,4];
// let result= arr.sort((a,b)=>b-a);
// console.log(result[1]);//56
// or 
// let value=-Infinity;
//   for (let index = 0; index < arr.length; index++) {
//           if(arr[index]>=value){
//             value=arr[index]
//           }
//   }
//    let indexofhighestvalue=arr.indexOf(value);
//     arr.splice(indexofhighestvalue,1);

//     let secondlargevalue=-Infinity;
//   for (let index = 0; index < arr.length; index++) {
//           if(arr[index]>=secondlargevalue){
//             secondlargevalue=arr[index]
//           }
//   }
//   console.log(secondlargevalue);









// findning missing intiger in given arry of 1 to 10 

// const arr= [1,2,3,4,5,8,9,10];

// console.log(42+"42"); //4242
// console.log(true +4); //5

// console.log(true == "textstring"); //bollen with string numbers cosiders number 


// console.log(6 + 3*2 + (6-3)); //15

// let result = "true" || "sha"
// console.log(result); //true


// let a=10
// let b=10
// let c= 10;
// if(a== b== c){
//     console.log('true');
// }
// else{
//     console.log('false'); //y beacuse true ==10
// }

// const myPromise=new Promise((resolve, reject) => {
//     let sucess =false;
//     setTimeout(() => {
//         if (sucess) {
//             console.log('sucess');
//         } else {
//             console.log('failure');
//         }
//     }, 1000);
// });

// myPromise.then((res)=>{
// return res
// }).catch((err)=>{
// return err})
// const myPromise= async()=>{
//     let sucess =false;
//     let resolve= await sucess;
    
// }