    



//  let a =[[2,3],[3,4],[85,7]];
//   let result= a.flat().sort((a,b)=>a-b);
//   console.log(result[result.length-1]);


// let a =[[2,3],[300,[8,8],900],[85,[7,999]]];
//   let result= a.flat(2).sort((a,b)=>a-b);
//   console.log(result[result.length-1]);
  
    
//  let a =[[2,3],[399,4],[85,7]];
//   let largvalue= a[0][0];
//   for( item of a){
//     for(value of item){
//       if (value >largvalue){
//         largvalue=value;
//        }
//     }
//   }
//   console.log(largvalue);
  


    
//  let arr= [1,2,3,4,2,2,3,4,5,2];
  // let result = [...new Set(arr)];
  // console.log( result);

  // let result = arr.filter((item,index)=>arr.indexOf(item) === index);
  // console.log(result);
  
    // let uniquearr=[];
    //  for (let i=0; i<arr.length; i++){
    //     if(uniquearr.includes(arr[i]) === false){
    //       uniquearr.push(arr[i])
    //     }
    //  }
    //  console.log(uniquearr);


    // let array=['s','a','i','k','u','m','a','r'];
    //  let result = Object.entries(array)
    //  let output =  Object.fromEntries(result)
    // console.log(result);
    // console.log(output);
    

//      let arr = [1,2,3];
// console.log( arr == "1,2,3");


// const arr=[2,[34,[90,98,[97,90],99],44],[23,[87,98],[36,86,[32,65,[43,74]]]]];
// let newarray=[];

//     const flatarry=(a)=>{
//       for ( let i =0; i<a.length; i++){
//         if ( Array.isArray(a[i])){
//              flatarry(a[i]);
//         }else {
//           newarray.push(a[i])
//         }
//       }
//     }

//     console.log(flatarry(arr));
//     console.log(newarray);
    
    //  finde all duplicate elmenst in array 
// let arr = [1,2,4,5,2,4,8,5,5,5];
//   let result = arr.filter((item,index,a)=>(a.indexOf(item) !== index ))
//    console.log(result);

    
// let max=5;
// let min=2;

//  let result = Math.floor(Math.random() * (max-min) +min);          
//  console.log(result);


// const str = 'JavaScript is simple but not easy to master';
//  let result =str.split(" ").slice(0,3).join(" ");
//  console.log(result);

 
    
//  function fact(num){

//      if(num ==0 || num ==1){
//        return 1;
//      } else {
//         return num * fact(num-1)
//      }
//  }

//  console.log(fact(5));
 
    // let num=9;
    //    if (num==0 || num ==1){
    //     return "num is not prime"
    //    }
    //  for( i=2; i<num/2; i++){
    //     if ( i % 2 ===0){
    //       return "num is  prime"
    //     }
    //  }

    



    // const array1 = [5, 2, 3, 4, 5];
    // const array2 = [4, 7, 6];
    // const resultarray = [];
    // let findemaxarrylength =
    //   array1.length < array2.length ? array1.length : array2.length;
    // console.log(findemaxarrylength);

    // for (let index = 0; index < findemaxarrylength; index++) {
    //   if (array1[index] !== undefined && array2[index] !== undefined) {
    //     let sumvalue = array1[index] + array2[index];
    //     resultarray.push(sumvalue);
    //   }
    // }
    // console.log(resultarray);





    // const array1 = [1, 2, 3,4,5];
    // const array2 = [4, undefined, 6];
    //    const resultarray=[];
    //  let findemaxarrylength= array1.length<array2.length ?array1.length :array2.length
     
    //    for (let index = 0; index < findemaxarrylength; index++) {
    //          let sum = (array2[index] ?? 0) + (array1[index] ??0)
    //          resultarray.push(sum);
    //    }
    //    console.log(resultarray);
    
      




