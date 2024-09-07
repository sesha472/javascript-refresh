// Prove that Array is also an Object in JavaScript

// let arr=[2,3,4,5];
// console.log(typeof arr);
// console.log(Array.isArray(arr));


// Display pyramid of number using JavaScript

// let num=""
// for (let index = 1; index <= 5; index++) {
//      num = num+ " "+index;
//     console.log(num);  
// }


// Truncate a string to a certain number of words

// const str = 'JavaScript is simple but not easy to master';
// let wordlimit=3
//  let result = str.split(" ").splice(0,wordlimit).join(" ");
//  console.log(result);


// How to check if an object is empty or not in javaScript?

//  const isobjisempty=(obj)=> Object.keys(obj).length ===0;
//  console.log(isobjisempty({}));
//  console.log(isobjisempty({city:"nellore"}));
 
//  let obj={name:"sai"};
//  console.log(Object.keys(obj).length === 0 ?"its is empty":"it is not empty");
 

// removeArrayElement("money") returns the array without the money object
// removeArrayElement("id") returns the array without the id object
// removeArrayElement("cStatus") returns the array without the cStatus object

// const array = [
//     { field: 'id', operator: 'eq' },
//     { field: 'cStatus', operator: 'eq' },
//     { field: 'money', operator: 'eq' },
//  ];
//    let elment= "id"
//   let result = array.filter((item,index,arr)=>{
//     if(item.field !== elment ){
//        return item
//     }
//   })
  
//   console.log(result);
  

//  let element="money"
//  let result= array.find((item,index)=> item.field === element);
 
//  console.log(result);

// finde last non -zero elment in array :
// let arr1= [0,30,4,5,5,2,0,0,0];

// function findelastindex(arr){
// for(i=arr.length-1; i>=0; i--){
//     if(arr[i] !== 0){
//        return i;
//     } 
// }
// return -1 
// }

// console.log( findelastindex(arr1));

// console.log(9);


// for(i=1; i<=5; i++){
//     var c=" ";
  
//   for(j=1; j<=i; j++){
//     c=c+"*";
//   }
//     console.log(c);
//   }
  
//   //*********************
  
  
//   for(var i=1; i<=5; i++){
//     var p=" ";
//     for(s=1; s<=i-1; s++){
//       p=p+"  "
//     }
//   for(var j=i; j<=5; j++){
//     p=p+"*";
//   }
//     console.log(p);
//   }
  
//   //************************
  
//   for(i=1; i<=5; i++){
//     var p="";
//     for(s=1; s<=5-i; s++){
//       p=" "+p;
//     }
//   for(j=1; j<=i; j++){
//     p=p+"*";
//   }
//   console.log(p);
//   }
  
  
  //*******************
  
  
  
  
  // for(i=1;i<=5; i++){
  //   var p= "";
  //   for (var s=5; s<=i-1; s++){
  //     p=p+"-";
  // }
  //   for(j=5; j>=i; j--){
  //     p=p+"*";
  // }
  //   console.log(p);
  // }
  
  
  
  // a=[1,0,5,8,3,4,9,2,5,7,9,3,4,7,2,34,78,55,1,44,98];
  // var swap;
  // for(i=0; i<a.length; i++){
  //   for(j=0;j<a.length; j++){
  //     if(a[j]>a[j+1]){
  //       swap=a[j];
  //       a[j]=a[j+1];
  //       a[j+1]=swap;
  //     }
  //   }
  // }
  // for(i=0;i<=a.length; i++){
  //   console.log(a[i]);
  // }
  
  
  
  // ******************
  
  //a=[1,0,5,8,3,4,9,2,5,7,9,3,4,7,2,34,78,55,1,44,98];
  // function bubble(a){
  // var swap;
  // for(i=0; i<a.length; i++){
  //   for(j=0;j<a.length; j++){
  //     if(a[j]>a[j+1]){
  //       swap=a[j];
  //       a[j]=a[j+1];
  //       a[j+1]=swap;
  //     }
  //   }
  // }
  // for(i=0;i<=a.length; i++){
  //   console.log(a[i]);
  // }
  // return 1;
  // }
  // bubble([4,5,8,2,9,1,0,3,0]);
  
  
  
  
  // ******************
  
  
  // for(var i=1; i<=5; i++){
  //   var p=" ";
  //   for(s=1; s<=i-1; s++){
  //     p=p+"  ";
  //   }
  // for(var j=5; j>=i; j--){
  //   if(j==5&&i==4){
  //     p=p+" ";
  //   }
  //   else{
  //   p=p+"*";
  // }
  // }
  //   console.log(p);
  // }
  
  
  // ******************




 