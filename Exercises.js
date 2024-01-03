// // console.log(9);

// // js program to disply date 
// // date object pratice 
// const timer=()=>{
// let today=new Date();


// // today.setHours("")
// // today.setMinutes("1")
// // today.setSeconds("1")


// let arrday=["sun","mon","tue","wed","thur","fryday","saturdat"]

// let hours=today.getHours();
// let amorpm=hours>=12?"pm":"am";

// // console.log(hours); Convertimg 24 hour format to 12 hour format
//  hours = (hours >= 12) ? hours - 12 : hours;
//  hours=(hours==0)?12:hours; //if hourse is become 0 i am setting it to 12am like that
// // console.log(amorpm);

// let minutes=today.getMinutes();
// minutes=(minutes<10)?`0${minutes}`:minutes;
// let seconds=today.getSeconds();
// seconds=(seconds<10)?`0${seconds}`:seconds;


// console.log("today is : "+arrday[today.getDay()]);
// console.log("Current time is : "+hours+":"+minutes+":"+seconds+":"+amorpm); //Current time is : 11:42:53:am
// }

// timer();

// printing the current page

// const print_current_window=()=>{
//     window.print()
// }
// print_current_window();

// let date=new Date();
// date.setDate(1);

// let d=date.getDate();
// d=(d<10)?`0${d}`:d

// let m=date.getMonth()+1;
// let y=date.getFullYear()

// console.log(`${d}-${m}-${y} ,${d}/${m}/${y}`);

// finde duplicate sin array 
// let arr = [9,9,9];
// let duplicates=arr.filter((item,index ,arr)=>arr.indexOf(item)!==index );//12
// let nonduplicates=arr.filter((item,index ,arr)=>arr.indexOf(item)==index );//12
// console.log(duplicates);//12
// console.log(nonduplicates);//12345



  

// let b=[]
// for(i=0; i<arr.length; i++){
//     for(j=0; j<arr.length; j++){
//         if(arr[i]===arr[j]){
//           b.push(arr[i])
//           break;
//         //   arr.splice(j,1)
          
//         }
//     }
// }
// console.log(b);
// console.log(arr);

// function findDuplicates(array) {
//     const duplicates = [];

//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] === array[j] ) {
//                 duplicates.push(array[i]);
//             }
//         }
//     }

//     return duplicates;
// }

// const myArray = [9,2,9,3,8,7,3,2,2,8,9];
// const duplicateElements = findDuplicates(myArray);
// console.log(duplicateElements);


// finding how many letetrs in string 
// let data="apple is a good fruite and my a aim is to eat"//finde how many a's in this text
// let result =data.split("a");
// console.log(result.length-1); 


// let data="apple is good"//finde how many a's in this text
// let result =data.split(" ");
// console.log(result);
// const data=[ ];
// console.log(typeof data);
// console.log(Array.isArray(data));

// let data=7 
// while(data>=0) {
//      if(data<=5) { 
//     data--; 
//     continue; 
// } 
// console.log(data);
//  data--; }

// reverseing the string 
// let data="sesha";
// let result=data.split("").reverse().join("")
// console.log(result);


function arrayReverse(arr) {
    var temp;
    var n = arr.length;
    var mid = n / 2;
 
    for (var i = 0; i < mid; i++) {
       temp = arr[i]
       arr[i] = arr[n - i - 1];
       arr[n - i - 1] = temp;
    }
 
    return arr;
 }
 

 const names = ['German', 'Nicolas', 'Martin', 'Micaela', 'Mateo', 'Matias', 'John', 'Gonzalo', 'Esteban', 'Paula', 'Victoria', 'Bautista', 'Carolina', 'Analia', 'Edward', 'Mirtha'];
const foo = names.filter((name) => name.toUpperCase().startsWith('M'));
console.log(foo);