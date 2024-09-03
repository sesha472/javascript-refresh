;
//   completed re practing 
//  removie white spaces from string 
//   let str = "hellow removie whote spaces  from string";
//   let result = str.split("").filter((item)=>item !== " ").join("");
//   console.log(result);
//   let str = "hellow removie whote spaces  from string ";
//    let strarry=str.split("").filter((item)=>{
//      if(item !== " "){
//        return item;
//    }
// } );


// revers string 
//   let str="certain number of words";
// let revrssyting=''
//    for (i=str.length-1; i>=0; i--){
//      revrssyting = revrssyting + str[i];
//    }
//    console.log(revrssyting);
   
//   let result = str.split("").reverse().join("");
//   console.log(result);
  

//    let strinigvalue = "hellow removie whote spaceshh from string"     
//        function findeHighestword(str){
//         let result= str.split(" ");
//         let size=0;
//         for(let item of result){
//          if(item.length >size){
//             size=item.length
//          }
//       }
//       let output=result.filter(item=>item.length === size)
//       console.log(output);
//     }
//     findeHighestword(strinigvalue)
      

//  let palindrome = "racecar";
//  function checkpalidrome(str) {
//    let result = str.split("").reverse().join("");
//    return str === result ? "it is palindrome " : "not palindrome";
//  }
//  console.log(checkpalidrome(palindrome));
  

    
// Truncate a string to a certain number of words
// truncateWithWordLimit("JavaScript is simple", 3) returns "JavaScript is simple"
// truncateWithWordLimit("Codedamn is the best place to learn to code", 5) returns "Codedamn is the best place"

//    let str="Codedamn is the best place to learn to code";
//    let limit=5;
//    let result= str.split(" ").slice(0,limit).join(" ");
//    console.log(result);
   

// finding how many charecters in string 
// let data="apple is a good fruite and my a aim is to eat";
//  let result=data.split("").filter((item,index)=> item !== " ").length;
//  console.log(result);
 
  

//  let result=data.split("").filter((item,index)=> (item !== " "))
// console.log(result);

// let data="apple is a good fruite and my a aim is to eat"//finde how many a's in this text
// //  let result=data.split("").filter((item,index)=> item==="g").length;
// // console.log(result);

// let result =data.split("s");
// console.log(result.length-1); 

// console.log("Hellow".toLowerCase() == "hellow".toLowerCase());




// are anagrams are not 

//  let str1= "listen";
//  let str2= "silent";

//   let res1= str1.split("").sort().join("")
//   let res2= str2.split("").sort().join("")
// //   console.log(res1);
// //   console.log(res2);
//    console.log(res1 == res2);
   
 

// count vowelsin string 

// let vowels = ["a", "e", "i", "o", "u"];
// let str = "Hellow gOOd world";
// let count = 0;
// for (let item of str.toLowerCase()) {
//   vowels.includes(item) ? count++ : null;
// }
// console.log(count);
   

 
//  find elargest number in arry 
// let arr=[1,2,45,6,2,4,4,3];
//  let result = arr.sort((a,b)=>a-b)
//   let output = result[result.length-1]
//  console.log(output)

// let arr=[1,2,45,6,2,4,4,3];
// let largvalue= -Infinity
//  for (i=0; i<arr.length; i++){
//      if(largvalue < arr[i]) {
//          (largvalue = arr[i])
//      }  
//  }
//  console.log(largvalue)

//  let str = "namsthey";
//  let result = str.split("")
// let output=   result.splice(0,1).join().toUpperCase();
//  result.unshift(output)
//   let final= result.join("")
//  console.log(final);
 

 
// "namsthey sai kumar" = > Namsthey Sai Kumar

// function toTitleCase(str) { 
//      let result = str.split(" ");
//      let outputarr =[];
//    for(let item of result){
//     let str = item;
//      let result = str.split("")
//     let output=   result.splice(0,1).join().toUpperCase();
//      result.unshift(output)
//       let final= result.join("")
//      outputarr.push(final)
//    }
//      return outputarr.join(" ") 
//   } 
//   console.log(toTitleCase("namsthey sai kumar"));//Namsthey Sai Kumar
  

// https://github.com/sudheerj/javascript-interview-questions/tree/master/coding-exercise/superArrayOfObjects