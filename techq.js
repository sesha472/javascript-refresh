// let a=[1,2,3,4,5,[1,2,3,4,[1,2,3,4,5]]];
// let b=JSON.parse(JSON.stringify(a));
// a[5][4][0]=10
// console.log(a);
// console.log(b);

// function convertcapital(){
//        let inputvalue= document.getElementById("text").value;
//         document.getElementById("result").innerText=inputvalue.split('').reverse().join("");
//     }



// 1.how to finde duplicate elements in array 
// const arr=[2,3,4,5,2];
// const result =arr.filter((item,index,array)=> {
//     return  array.indexOf(item)!==index ? item : null //[2]
//// or for non duplicates logic
//     return  array.indexOf(item)===index ? item : null //[2,3,4,5]
// })
// console.log(result); //[2]



// 2.how to find max and min value in array 

// const arr=[3,45,56,933,565,4];
// let maxnumber= arr.sort((a,b)=>b-a)[0]
// console.log(maxnumber);

               //  or

// let result=Math.max(...arr)
//   console.log(result);

//            or  using reduce method

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
//     return acc>=cur ? acc : cur;
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



// 3.how to finde second largest value in array 

// const arr=[3,45,56,93,56,93,4];
// let uniquearry=[... new Set(arr)];
// let result= uniquearry.sort((a,b)=>b-a);
// console.log(result);
// console.log(result[1]);



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





//4. findning missing intiger in given arry of 1 to 10 

// const arr= [1,2,3,4,5,8,9,10];
//     let newarr=Array.from({length:10},(value,index)=>index+1);
//     const missingelmets=newarr.filter((item,index)=>{
//        return  arr.includes(item) ?null:item
//     })
//     console.log(arr);
//     console.log(newarr);
//     console.log(missingelmets);


//    function missingelemnts (inputarry){
//    const uniquearry=[...new Set(inputarry)]
//     const givenarraylength=uniquearry.length
//     let newarr=Array.from({length:givenarraylength},(value,index)=>index+1);
//     const missingelmets=newarr.filter((item)=>{
//        return  uniquearry.includes(item) ?null:item
//     })
//     console.log(inputarry);
//     console.log();
//     console.log(newarr);
//     console.log(missingelmets);
//    }

//    missingelemnts([1,2,5,6,7,8,98,6,])

        
// 5.reverse the sentence words 
    // let str = "welcome to js interview";   // output should be :emoclew ot sj weivretni
    // let result=str.split(" ")
    // console.log(result);
    // let result2=result.map((item=>{ return item.split("").reverse().join("")})).join(" ")
    // console.log(result2);
    // let strarr=str.split(" ");
    // console.log(strarr); 
    // console.log(strarr.map(item=>item.split("").reverse().join("")).join(" "));

// 6.conver the text first word into capital remiang into lower case 
    // let str = "namsthey";
    // let splitedarry = str.split("");
    // let firstletter = splitedarry.splice(0, 1).join("").toLocaleUpperCase();
    // let remaingword = splitedarry.join("").toLocaleLowerCase();
    // console.log(firstletter);
    // console.log(remaingword);
    // let finaloutput = firstletter + remaingword;
    // console.log(finaloutput);








// console.log(42+"42"); //4242
// console.log(true +4); //5

// console.log(true == "s"); //bollen with string numbers cosiders number 
// console.log(true=='1');

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
// // }

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

//            myPromise.then((res)=>{
//                          return res
//                         }).catch((err)=>{
//                          return err})


// const myPromise= async()=>{
//     let sucess =false;
//     let resolve= await sucess;
    
// }


    // class human {
    //     name="hruday"
    //     printname=()=>console.log(this.name);
    // }
    // class Person extends human{
    //     age=27;
    //     printage=()=>console.log(this.age);
    // }

    // let person =new  Person();

    // person.printage()

    


 
    // how to empty an array 
    // let arr=["a","b","v","h"];
    // arr=[]
    // arr.length=0
    // arr.splice(0,arr.length)
    // while (arr.length) {
    //     arr.pop()
    // }

    // console.log(arr);

    // how to finde diffrence betwin dates 
    // let date1=new Date('6/9/2024');
    // let date2=new Date()
    // let diffdate=Math.abs((date2-date1))
    // let days=diffdate/(1000*60*60*24)
    // console.log(date1);
    // console.log(date2);
    // console.log(diffdate);
    // console.log(Math.ceil(days));

    // let a= moment([2022,10]);
    // let b= moment([2023,10]);

    // let difrnce=a.diff(b,'days');
    // console.log(difrnce);

    // let i=1;
    // let n=10;
    // let printnum=setInterval(() => {
    //      (i !==n) ? console.log(i++):clearInterval(printnum);
    // },i*1000);
    
    // let dt=new Date ();
    // console.log(dt.toUTCString());

 
// console.log(9);

// function myfun(...rest){
//      let result= rest.map((item)=>item*2)
//          console.log(result);
// }

// myfun(1,2,3,4)

// function myfun(){
    //     let arr=[];
    //     for(let i=0; i<arguments.length; i++){
    //         arr.push(arguments[i]);
    //     }
    //     return arr;
    // }
    
    // console.log( myfun(18,2,3,4));

    // function add(){
    //     let arr= arguments
    //     let result=0;
    //    for(let i=0; i<arr.length; i++){
    //      result= result + arr[i];
    //    }
    //    return result;
    // }  
    // console.log(add(2,3,4));
    
// let x=4;
// console.log(x++ + ++x); //10


//   let arr=[4,2,2,6,8,9,99]
// let result =arr.sort((a,b)=>b-a)
// console.log(result);


//   let arr=[4,2,2,6,8,9,99]
//   arr=[];
//   console.log(arr);
// class Person {
//     name = 'Max';
//     printMyName = () => {
//         console.log(this.name);
//     }
// }
 
// const person = new Person();
// person.printMyName();

// finde  the total of object values 
// const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
// let result =objects.reduce((acc,cur)=>{
//     return acc+cur.x
// },0)
// console.log(result);

