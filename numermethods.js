
// toString() method conver number to string 

// let a=123;
// console.log( typeof a.toString());



// let x=9.456;
// console.log(x.toExponential(2)); 
// 9.46e+0

// toFixed method retun string with a specified nof  decimals 
// let y=9.4555;
// console.log(y.toFixed(2));
// 9.46

// toPrecision
//  retuns a string with specified number 
// let z=6.73673;
// console.log(z.toPrecision(3)); //6.74
// console.log(z.toPrecision(2)); //6.7
// console.log(z.toPrecision(1)); //1e+0 it transfer like this

// number method can conver js expresson into number

// console.log(Number(true)); //1
// console.log(Number('10')); //10
// console.log(Number('sai')); //NaN we can give number string not a alphabet string
// console.log(Number('10.99')); 10.99



// let a='-10';
// console.log(a);
// console.log(typeof a); //string
// let b= Number(a);  //converted to number
// console.log(b);
// console.log(typeof b); //number


// let a='-10';
// console.log(a);
// console.log(typeof a); //string
// let b= Number(a);  //converted to -ve number -10
// console.log(b);
// console.log(typeof b); //number



// let a='10';
// console.log(parseInt(a)); //10//it coverts string into whole number 
// let a='-10';
// console.log(parseInt(a)); //-10
//  console.log(parseInt(10.88778)); //10 it gives whole numbers not decimal 

// if we want decimal number also we can use 
// console.log(parseFloat(10.7829));//10.7829

// console.log(Number.isInteger(9));
// console.log(Number.isSafeInteger(9));

// the number values print in different country styles
// INDIAN formate
// console.log(988732.009.toLocaleString('en-IN')); //9,88,732.009
// // GERMEN
// console.log(988732.009.toLocaleString('ge-GE')); //988,732.009
//  like wise chines ,japnies EventCounts.apply.formats are there
//  open mdn and click local string in searching about tolocalstring it shows different country codes





