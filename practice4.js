





//  function Bank() {
//    var name = "namsthey";
//    function getname() {
//      return name;
//    }
//    function setname(newname) {
//      name = newname;
//    }
//    return { getname, setname };
//  }

//   let bank = Bank(); 
//   console.log(bank);
//   console.log(  bank.getname());
//   console.log(  bank.setname("good")); 
//   console.log(  bank.getname());
//     console.log(name)
//     ;
    
                 
// var myname= "sesha";
// (function (newname){
//   newname="kumar"
//    console.log(newname);
   
//    return newname;
// })(myname)
//console.log(myname);
           
  
// function chekinggivenelmenst (mainarrya,givenarray){
//     counter=0;
// for(let i=0 ; i< givenarray.length; i++){
// if(mainarrya.includes(givenarray[i])) {
//         counter++
// }
// }
// if(counter === givenarray.length){
//   return " all teh elmenst are present "
// }else{
//   return "false not every element is present " 
// }
// }

// let main_array = ['foo', 'bar', 'baz'];
// let a = ['foo', 'foobar'];
// let b = ['foo', 'bar'];

// console.log(chekinggivenelmenst(main_array,a))    

//  remove the duplicate lemenst in array1 by comparing with array 2 
// var array1_duplicate = [1, 2, 4, 3, 6, 7];
// var array2_dupl = [1, 2, 4, 8, 9, 7];
   
//     for(let i=0; i<array2_dupl.length; i++){ 
//            let findeindex=array1_duplicate.indexOf(array2_dupl[i]);
//            if(findeindex !==-1){
//             array1_duplicate.splice(findeindex,1)
//            }  
//     }
//     console.log(array1_duplicate);
//     console.log(array2_dupl);


//   let username="one";

//    let a=(function (personname) {
//     personname="two";
//     return personname;
//     console.log(personname);
//     console.log(username);
//    })(username);

//    console.log(a);
   
//    console.log(username);
   


    // let add5 =(num)=> num+5;
    // let add10 =(num)=> num+10;

    //  function calbfun(fn,val ){
    //             return fn(val)
    //  }
    //   let  result=calbfun(add10,5);
    //   console.log(result);
      
    //   finde second largeste elment in array 
//  let mainarr= [1,4,3,9,990,2,4,7];

//   let larg=-Infinity;
//   let seclarg=-Infinity;
//    for(let i=0;i<mainarr.length; i++){

//      if(mainarr[i] > larg){
//       seclarg=larg;
//          larg=mainarr[i]
//      } else if (mainarr[i]>seclarg && mainarr[i] !== larg){
//       seclarg=mainarr[i]
//      }
//    }
//     console.log(larg);
//     console.log(seclarg);
    

// third large elment 
//  let mainarr= [1,4,3,9,99,90,2,4,7];

//   let larg= -Infinity;
//   let seclarg=-Infinity;
//   let thirdlrg=-Infinity;


//    for(let i=0; i<mainarr.length; i++){
//         element=mainarr[i];
//         if(element>larg){
//           thirdlrg=seclarg;
//           seclarg=larg;
//           larg=element;
//         }
//         else if(element > seclarg && element != larg){
//           thirdlrg=seclarg
//           seclarg=element;
//         }else if(element >thirdlrg && element !== seclarg && element !== larg){
//           thirdlrg = element;
//         }
//    }

//     console.log(larg);
//     console.log(seclarg);
//     console.log(thirdlrg);
    
    
// rotate array 
// let array1= [2,4,11,6,8,9]; 
// let rotate=2;
//  for (let index = 0; index < 2 ; index++) {
//     let ele= array.shift();
//     array.push(ele);
//  }
//  console.log(array);
 
// function rotatearry(array,possitions){
//  if (array.length >= possitions){
//     for(let i=0; i<4; i++){
//       let temp=array[0];
//       for(let j=0; j<array.length; j++){
//         array[j]=array[j+1];
//       }
//       array[array.length-1]=temp;
//     } 
//     console.log(array);
// }
//  }
//  rotatearry(array1,1)

//  function calculations(x){

//     return function (y){
//         return x*y;
//     }
//  }
//   let mulwith2= calculations(2)
//   let mulwith3= calculations(3)

//  console.log(mulwith2(3));
//  console.log(mulwith3(3));

//  console.log(calculations(3)(4));

// function multiply(x,y){
//     console.log(x*y);
// }
// let mul2=multiply.bind(this,2);
// mul2(3)
 
    //   function callbackfun(arr,fn){
    //          arr.push(2);
    //          console.log(arr);      
    //          fn();
    //   }
    //   let array=[9,4,5,6];
    //   function msgfun(){
    //     console.log("value is suessfully add in array");
    //   }
    //  callbackfun(array,msgfun);

    // let string = "welcome to javascript guide";
 
//    let result= reversestring(string," ")
//    let output= reversestring(result,"")
//      function reversestring (str,saparator){
//         return str.split(saparator).reverse().join(saparator)
//      }
//      console.log(output);
     

    //  let result = string.split(" ").map((item)=>item.split("").reverse().join(""));
    //  let output= result.join(" ")

    //  console.log(output);


//  let arr= [1,2,3,4,2,2,3,4,5,2];
//  arr.splice(0)
//   console.log(arr);
  
   
//   let arr2= [1,2,3,4,2,2,3,4,5,2];
//   let arr3= arr2 //reference wont delt in this method 
//   arr2=[]
//   console.log(arr2);
//   console.log(arr3);
  
  
//   how to check if num  is intger or decimal 

  // function isint(num){
  //   return num %1 ===0
  // }

  // console.log(isint(9));
  // console.log(isint(4.5));
  
   
  // let orders =[
  //       {name:"raju",
  //       purchased:30,
  //        },
  //        {name:"shiva",
  //       purchased:30,
  //       },
  //       {name:"vishnu",
  //       purchased:30,
  //       },
  //       {name:"raju",
  //       purchased:150,
  //        },
  //       {name:"hanuman",
  //       purchased:30,
  //       }
  //   ];

  //    let  result = orders.filter((item=>item.name==="raju")).map(item=>item.purchased).reduce((acc,curentvalue,currindex,arr)=>acc+curentvalue);
  //    console.log(result);
     
//      let arr1=[10,20,30,40];
// let arr2=[];
// let result=arr1.entries();
//    for(let index of arr1.entries()){
//     console.log(index);
//    }

    
// let arr= [1,2,3,4,2,27,36,4,5,9];

//  let firstlarg= -Infinity
//  let secondlarg=-Infinity
//     for(i=0; i<arr.length; i++){
//     let element=arr[i];
//    if(element>firstlarg){
//     secondlarg=firstlarg;
//     firstlarg=element
//    }else if(element>secondlarg && element<firstlarg){
//           secondlarg=element;
//    }
//  }
//   console.log(firstlarg);
//   console.log(secondlarg);

  
// let arr= [1,2,3,4,2,27,36,4,5,90];
//  let firstlarg= -Infinity
//  let secondlarg=-Infinity
//  let thirdlarg= -Infinity
//     for(i=0; i<arr.length; i++){
//     let element=arr[i];
//    if(element>firstlarg){
//     thirdlarg=secondlarg;
//     secondlarg=firstlarg;
//     firstlarg=element
//    }else if(element>secondlarg && element<firstlarg &&element>thirdlarg){
//     thirdlarg=secondlarg;
//           secondlarg=element;
//    }else if(element>thirdlarg && element<secondlarg &&element<firstlarg){
//     thirdlarg= element
//    }
//  }
//   console.log(firstlarg);
//   console.log(secondlarg);
//   console.log(thirdlarg);
  

 

// let arr= [1,2,3,4,2,27,36,4,5,90];
//  let result= arr.sort((a,b)=>a-b);
//  console.log(result[result.length-3]);
//  finde larest elmet in flated arry 
//  let arr =[[2,3],[3,4],[85,7]];
//   let result = arr.flat(1);
//   console.log(result);


  
//  let arr =[[2,3],[369,4],[8100,7]];

//    let larg= -Infinity;
//    let seclarg=-Infinity
//   for( let item of arr){
//       for(let val of item){        
//          if(larg < val){
//             seclarg=larg
//             larg=val;
//          }  if(val <larg && val>seclarg){
//             seclarg=val;
//          }
//       }    
//   }
//    console.log(larg);
//    console.log(seclarg);
   
//    removing duplicate elemenents from array
//  let arr= [1,2,3,4,2,2,3,4,5,2];
//   let result = [...new Set(arr)];
//   console.log(result);


// let a=[2,4,6,5];
// let result= a.some(item=>item>5);
// console.log(result);

// let result = Array.from({length:9},(item,index)=>index+1);
// console.log(result);

// let arr = [30, 200, 2, 3, 15, 10];
// let r= arr.sort((a,b)=>b-a);
// console.log(r);


// let arr=['s','a','i','k','u','m','a','r'];
//   for(item of arr){
//     console.log(item)
//   }
//  console.log(Object.entries(arr));



// var arr = new Array( "Geeks", "for", "Geeks"); 
//  console.log(arr.toString());
//  console.log(arr.toLocaleString());
 


// let arr =[10, 15, 20, 25, 30];
//  let result=[];
//   for( let i=0; i<arr.length; i++){ 
//      result.push(arr[i])   
//   }
//   console.log(result);
  

 
 
