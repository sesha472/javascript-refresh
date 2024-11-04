




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
    
    
    
    
    

 

