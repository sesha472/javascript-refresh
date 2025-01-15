















    //  function rigester(cbfn){
    //     setTimeout(() => {
    //          console.log("rigester");  
    //          cbfn();
    //     }, 3000);
    //  }
    //  function login(fn){
    //     setTimeout(() => {
    //          console.log("login"); 
    //          fn();
    //     }, 2000);
    //  }
    //  function thankyou(){
    //     setTimeout(() => {
    //          console.log("thank you");  
    //     }, 1000);
    //  }

    //    rigester(()=>{
    //     login(thankyou)
    // })

     
    //  function rigister (){
    //     return new Promise ((res,rej)=>{
    //         setTimeout(() => {
    //             console.log("rigister");
    //             res("sucess")
    //         },2000);
    //     })
    //  }
    //  function login (){
    //     return new Promise ((res,rej)=>{
    //         setTimeout(() => {
    //             console.log("login");
    //             rej(err)
    //         },1000);
    //     })
    //  }
    //  function thankyou (){
    //     return new Promise ((res,rej)=>{
    //         setTimeout(() => {
    //             console.log("thank you ");
    //             res();
    //         },2000);
    //     })
    // }       
     
    //  rigister().then(login).then(thankyou).catch(err=>console.log("this is err",err))

      
       
       




// let x1= new Promise((res,req)=>{
//      setTimeout(()=>{
//         res("one")
//      },2000)
//   })
 
//    let x2= new Promise((res,req)=>{
//     setTimeout(res,1000,"two")
 
//   })
 

//   Promise.all([x1,x2]).then((item)=>console.log(item))
 
//     Promise.race([x1,x2]).then((responses2)=>{
//      console.log(responses2)
//    })


  
// Promise.all()->it returns the promise if all promises are resolved or if any one is failed it rejects 


// let apis=[
//     "https://jsonplaceholder.typicode.com/users",
//     "https://jsonplaceholder.typicode.com/albums",
//     "https://jsonplaceholder.typicode.com/todos"
//  ];

// //   using promises 
//   Promise.all(apis)
//   .then((item)=>Promise.all(item.map(url=>fetch(url))))
//   .then((res)=>Promise.all(res.map(data=>data.json())))
//   .then(result=> console.log(result))
//   .catch(err=>console.log("oka err",err))
  

// using async await 
//  async function  fetchapi(apiarraydata){
//      try {
//         let fetchresponse=await Promise.all(apiarraydata.map((item)=>fetch(item)))
//          let resposes=await Promise.all(fetchresponse.map((item)=>item.json()))
//          console.log(resposes[0].map(item=>item.name));
//          return resposes[0];
         
//      } catch (error) {
//         console.log("the error occured",error);
        
//      }
        
//   }
// fetchapi(apis);
  



// Promise.any()-> retuns first resolved promise ignore others 

// let apis=[
//     "https://jsonplaceholder.typicode.com/uses",
//     "https://jsonplaceholder.typicode.com/alums",
//     "https://jsonplaceholder.typicode.com/todos"
//  ];

//   async function fetchany(apidata) {
//      try{
//         let responses = await Promise.any(apidata.map(url=>fetch(url)));
//         let data= await responses.json()
//         console.log(data);
//      }catch(err){
//           console.log("the err occured",err);
          
//      }
     
     
//   }

// fetchany(apis)


// Promise.any in new way ->returns first resolved promise
// let task1= new Promise ((resolve,reject)=>setTimeout(()=>resolve("completed1"),2000))
//  let task2= new Promise ((resolve,reject)=>setTimeout(()=>resolve("completed2"),1000))
//  let task3= new Promise ((resolve,reject)=>setTimeout(()=>reject("completed3"),3000))
// let promisearray=[task1,task2,task3];
//   async function ftechall(arraypromis) {
//     try{
//         let responses = await Promise.any(arraypromis);
//         console.log(responses);
//     }catch(err){
//       console.error(err)
//     }
//   }

//   ftechall(promisearray)


// this Promise.race ->returns the first full filed promises method take all promises and returns the result of the first promise that resolves or rejects
// let task1= new Promise ((resolve,reject)=>setTimeout(()=>resolve("completed1"),2000))
//  let task2= new Promise ((resolve,reject)=>setTimeout(()=>resolve("completed2"),1000))
//  let task3= new Promise ((resolve,reject)=>setTimeout(()=>reject("completed3"),3000))
// let arraydata=[task1,task2,task3]
//   async function fetchanypromis(arrpromis) {
//     try {
//         let responseofrace= await Promise.race(arrpromis)
//         console.log(responseofrace);
//     } catch (error) {
//         console.log("promises is rejected : ",error);   
//     }
//   }
//   fetchanypromis(arraydata) 

// const promise1 = Promise.resolve('Success from promise 1');
// const promise2 = Promise.reject('Error in promise 2');
// const promise3 = Promise.resolve('Success from promise 3');

// async function fetchPromises() {
//   const results = await Promise.allSettled([promise1, promise2, promise3]);

//   console.log(results);
// }

// fetchPromises();

  
//   let promise= new Promise ((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("resolved")
//         reject("this is rejected")

//     }, 1000);
//   })
//    promise.then ((data)=>console.log(data)
//    ).catch((err)=>{
//     console.error("its is rejected",err)
//    })
  
 


                //  async function fetchapis(){
                //      try{

                //     const responses= await Promise.all([
                //         fetch("https://jsonplaceholder.typicode.com/users"),
                //         fetch("https://jsonplaceholder.typicode.com/todos"),
                //     ]);

                //     const data= await Promise.all(responses.map(response=>response.json()))
                //    console.log(data);
                // }catch(error){
                //   console.log( "thappu ochindi error : "+error);
                  
                //    }

                // }
                // fetchapis()


                
                
               //  async function fetchapis(){
               //      try{

               //     const responses= await Promise.any([
               //         fetch("https://jsonplaceholder.typicode.com/users"),
               //         fetch("https://jsonplaceholder.typicode.com/todos"),
               //     ]);

               //     const data= await responses.json()
               //    console.log(data);
               // }catch(error){
               //   console.log( "thappu ochindi error : "+error);
                 
               //    }

               // }
               // fetchapis()


               // const api1 = 'https://jsonplaceholder.typicode.com/users';
// const api2 = 'https://jsonplaceholder.typicode.com/users';
// const api3 = 'https://jsonplaceholder.typicode.com/users';
// const api4 = 'https://jsonplaceholder.typicode.com/users';
// const api5 = 'https://jsonplaceholder.typicode.com/users';


//           async function fetchapis(){
//                  let responses = await Promise.all([
//                 fetch(api1),
//                 fetch(api2),
//                 fetch(api3),
//                 fetch(api4),
//                 fetch(api5),
//               ])
//                console.log(responses)    
//           }
//           fetchapis()



// const resultpromis=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let num = Math.round(Math.random()*10)
//          if(num <5){
//             resolve(`num is resoved num is ${num}` )
//          }
//          else{
//             reject(`num is rjected num is  ${num}`)
//          }
//     },1000)
// })
//  resultpromis.then((data)=>{
//     console.log(data);
//  }).catch((err)=>{
//   console.log(err);
//  })


