

  



// let mainarr= [1,4,3,92,92,2,99,99,7];
// let larg=-Infinity;
// let slarg=-Infinity;
// let tlarg=-Infinity
// for(let i=0; i<mainarr.length; i++){
//     let element=mainarr[i]
//     if(element >larg) {
//         tlarg=slarg;
//         slarg=larg;
//         larg=element;
//     }
//      if(element > slarg && element <larg){
//         tlarg=slarg;
//         slarg=element;
//      }if (element > tlarg && element < slarg) {
//         tlarg = element;
//      }
// }
//  console.log(larg);
//  console.log(slarg);
//  console.log(tlarg);
 
// let arr= [2,4,11,6,8,9];   // [11,6,8,9,2,4]


// removie duplicare elemnst from array 
//  let arr= [1,2,3,4,2,2,8,3,4,5,2];

//  let result= arr.filter((item,index)=>arr.indexOf(item)=== index)
//  console.log(result);
 


// let val = Array.from({length:2},(item,index)=>index);
// console.log(val);

// let str= "namsthey";
// let res= Array.from(str);
// console.log(res);







//  function rotate(arr,positions){
//     let slicepart= arr.splice(0,positions);
//     console.log(slicepart);
//     let append=arr.concat(slicepart);
//     console.log(append);

//  }

//  rotate(arr,2);

// let arr= [2,4,11,6,8,9];   // [11,6,8,9,2,4]
//  for(let j=0; j<2; j++){

// let temp= arr[0];

//     for(let i=0; i<arr.length-1; i++){

//         arr[i]=arr[i+1]
//       }
//       arr[arr.length-1]=temp;
       
//       console.log(arr);
//  }







 

 
 
//  let result= mainarr.reduce((acc,curval)=>(acc >= curval) ?acc:curval,-Infinity);
//  console.log(result);
 

// let a= [,,,];
// console.log(a.length);
// console.log(a[0]);
// console.log(0 in a);



//  let a=[99,98,[11,12],new Date()];

//  let b= structuredClone(a);
// b.push(10);
// b[2][1]=36
//  console.log(a);
//  console.log(b);


//  function add(a,b){
//     return a+b;
//  }

//   console.log(add(2,3));//5
//   console.log(add(4,3));//7


//    let total=0;
//    function modifietotal(a){
//       total= total+a;
//       return total
//    }

//     console.log(modifietotal(10));//10
//     console.log(modifietotal(10));//20


    

    // let arr=[2,3,4,65,78,8];

    //  let result = arr.some((item)=>item>=10);

    // //  console.log(result);


   
    //  function * add(){
    //      let count = 0;
    //       while (true){
    //         yield count++
    //       }

    //  }

    //   let add1= add();

    //    console.log(add1.next());
    //    console.log(add1.next());
    //    console.log(add1.next());
       

       
  


// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.constructor); 


// var arr = new Array( "Geeks", "for", "Geeks"); 
// console.log(arr.toString());


//  let arr=  [];

//  console.log(typeof arr);

//   console.log(Array.isArray(arr));

// let str= "Codedamn is the best place to learn to code"

   

//  function truncatewithlimit (str,limit){
    
//    let result = str.split(" ");
    
//    return result.splice(0,limit).join(" ");
//  }
  
//   console.log(truncatewithlimit(str,5));
  
 


//  let date1= new Date("2023-03-25");
//  let date2 = new Date("2024-03-25");
//   let time= Math.abs(date1-date2);
//  console.log(Math.ceil(time/(60*60*24*1000)));
// console.log(date1.toLocaleString().split(","));



// const date =new Date ();
//  let arrday=["sun","mon","tue","wed","thur","fryday","saturdat"];

// // date.setMinutes(9) for checking purpose

// let day=date.getDay();
// let hour=date.getHours();
// let minutes=date.getMinutes()
// let seconds=date.getSeconds();
// let milsec=date.getMilliseconds()

// hour= hour>12? hour-12 :hour
// hour = hour===0?12:hour
//  let amorpm=hour>=12?"PM":"AM";

// // let hours = hour >=12 ? hour-12 :hour;
// // hours=hours==0 ?12: hours ;
// // let amorpm=hours > 12 ? "PM" : "AM"

//  seconds = seconds <10 ? `0${seconds}`:seconds
//  minutes = minutes <10 ? `0${minutes}`:minutes

// console.log("today is "+arrday[day] +"day");
 
 

 
  
//   function timer(){
//     let arrday=["sun","mon","tue","wed","thur","fryday","saturdat"];

//     let date= new Date();
//       let day = date.getDay()
//       let seconds= date.getSeconds()
//       let minutes= date.getMinutes()
//       let hours= date.getHours()
//        let amorpm= (hours >= 12) ?"PM":"AM";
  
//       console.log(`the time is ${hours}:${minutes}:${seconds}: ${amorpm}`);
      
//     //  console.log("today is ",arrday[day]);
     
//   }


//    setInterval(() => {
//     timer()
//    }, 1000);
// const obj = {  };

// console.log(Object.keys(obj).length === 0 ? "objct is  empty":"not  emthy");



// removeArrayElement("money") returns the array without the money object
// const array = [
//     { field: 'id', operator: 'eq' },
//     { field: 'cStatus', operator: 'eq' },
//     { field: 'money', operator: 'eq' },
//  ];


//   function removearrayelement(str){
//     let result = array.filter((item,index)=>item.field !==str);

//     console.log(result);
//   }
// removearrayelement("cStatus")
   


//  let str = "testying";

//  let result =str.length /2 
 
//  console.log(Math.ceil(result));
 
 
//  let a= {};
//  let b = {key: "b"};
//  let c = {key: "c"};
 
//    a[b]="line";
//    a[c]="one"

//    console.log(a);
   
// impure function
// let total=0;
//  function change (val){
//     total +=val;
//     return total
//  }

//   console.log(change(8));
//   console.log(change(8));
//   class  Car{
//    constructor(){

//    }
//   }

//    let tata= new Car();

//     let bajag={}
//     console.log(bajag instanceof Car);
    
//     console.log(typeof tata);
    
//     console.log(tata instanceof Car);
    
  // let api1=' https://jsonplaceholder.typicode.com/albums'
  // let api2=' https://jsonplaceholder.typicode.com/users'
  // let api3=' https://jsonplaceholder.typicode.com/albums'
  // let api4=' https://jsonplaceholder.typicode.com/users'

  // let arrpromises= [api1,api2,api3,api4];
 
    //   fetchdata= async()=>{
    //   let response= await Promise.all(arrpromises.map(item=>fetch(item)));
    //   let jsondata= await Promise.all(response.map(item=>item.json()));
    //   console.log(jsondata[0].map(item=>item.id));
      
    // }
    //  fetchdata()


    // fetchdata= async()=>{
    //     let response= await Promise.any(arrpromises.map(item=>fetch(item)));
    //     let jsondata= await response.json()
    //     console.log(jsondata.map(item=>item.id));
    //   }
    //    fetchdata()


    // let pr1= new Promise ((res,rej)=> setTimeout(()=>res("one"),1000))
    // let pr2= new Promise ((res,rej)=> setTimeout(()=>res("two"),3000))
    // let pr3= new Promise ((res,rej)=> setTimeout(()=>res("three"),1000))
   
    //  const fetchdata= async ()=>{
    //     try {
    //         let response= await Promise.all([pr1,pr2,pr3]);
    //         console.log(response);
    //     }catch(err){
    //          console.log("rejcted ra : ",err);    
    //     }
    //  }

    //  fetchdata()
    

//     const numbers = [3, 1, 4, 2];
// const sortedNumbers = numbers.toSorted(); // Returns a new sorted array
// console.log(sortedNumbers); // [1, 2, 3, 4]
// console.log(numbers); // [3, 1, 4, 2] (original remains unchanged)


// const numbers = [ new Date(), 1, 4, 2,[22,33]];
// let copunum= [...numbers];
// // let copunum= JSON.parse(JSON.stringify(numbers));
// // let copunum= structuredClone(numbers)

// copunum[1]=10;
// copunum[4][0]=99;
// let result= numbers[0]=== copunum[0] ?"Same":"not same";
// console.log(numbers);
// console.log(copunum);
// console.log(result);


// const mainarray=[[99999,4,905],[5,2,4],[3,4,556],[67,88,99]];
// let flatarray= mainarray.flat(Infinity);
// console.log(flatarray);
// let larg=-Infinity;
// let slarg=-Infinity;
//  for(let i=0; i<flatarray.length; i++){
//         if(flatarray[i]>larg){
//           slarg=larg;
//           larg=flatarray[i]
//         }if(flatarray[i]>slarg && flatarray[i]<larg){
//           slarg=flatarray[i]
//         }
//  }

//  console.log(larg);
//  console.log(slarg);
 
 






