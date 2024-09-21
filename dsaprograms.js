//  linear search

// let a1 = [3, 4, 6, 8, 68, 5, 56, 7,8, 81];
//  function linearsearch(array,searchElement){
//      for (let i = 0; i < array.length; i++) {
//          if(searchElement == array[i]){
//             return `element foundn at possition ${i} `
//          }
//      }
//  }
//   console.log(linearsearch(a,8));
 

 

//fiding all possitions in linear search 
// let a2 = [3, 4, 6, 8, 68, 6, 8, 5, 56, 7, 8, 81];
// let possition = [];
// function linearsearch(array, searchElement) {
//   for (let i = 0; i < array.length; i++) {
//     if (searchElement == array[i]) {
//       possition.push(i);
//     }
//   }
//   if (possition.length > 0) {
//     return `elment found at possitions ${possition.join(",")}`;
//   } else {
//     return "elment not found ";
//   }
// }
// console.log(linearsearch(a2, 8));


//  binary search 
// const arr = [1, 3, 5, 7, 9];
// function binarysearch(a, search) {
//   let left = 0;
//   let right = a.length - 1;
//   while (left <= right) {
//     let middle = Math.floor((left + right) / 2);
//     if (search === a[middle]) {
//       return middle;
//     } else if (search > arr[middle]) {
//       left = middle + 1;
//     } else {
//       right = middle - 1;
//     }
//   }
//   return -1;
// }
// console.log(binarysearch(arr, 7));
 

//  binary searh unsing recursion funcion 

//  function binaryrecursion (arr,elm,left=0,right=arr.length-1){
//         if(left >right){
//             return -1
//         }
//          let middle= Math.floor ((left+right)/2);
//           if(elm == arr[middle]){
//             return middle;
//           }else if(elm >arr[middle]){
//             return binaryrecursion (arr,elm,middle+1,right);
//           }else{
//             return binaryrecursion (arr,elm,left,middle-1);
//           }
//  }
//  const arr2 = [1, 3, 5, 7, 9, 11, 15, 15];
//  console.log(binaryrecursion(arr2,7));

// let a=[10,24,23,4,5,63,2,6,5,6,3];
//  let swap;
//   for(i=0; i<a.length; i++){
//     for(j=0; j<a.length; j++){
//       if(a[j]>a[j+1]){
//         swap= a[j];
//         a[j]=a[j+1];
//         a[j+1]=swap;
//       }
//     }
//   }
// console.log(a)
 