
// let date= Date.now()
// let date2= new Date()

// let milsec=date2.getTime()
// console.log(date);
// console.log(date2);
// console.log(milsec);

// write a function in JavaScript to get the current date in the format “YYYY-MM-DD”
// let date= new Date().toISOString().split("T")[0];
// console.log(date); //2024-09-21
   




// js program to disply date 

// date object pratice 
// const timer=()=>{
// let today=new Date();
// // today.setHours("")
// // today.setMinutes("")
// // today.setSeconds("")

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
// console.log(`${hour}:${minutes}:${seconds}:${amorpm}`);


// finding the date gap betwin two dates
// let fdate="2024/9/21";
// let sdate="2024/9/11";
// let dobj1=new Date(fdate)
// let dobj2=new Date(sdate)
// console.log(dobj1);
// console.log(dobj2);//Sat Nov 25 2023 00:00:00 GMT+0530 (India Standard Time)
//   let res= Math.abs(dobj1-dobj2)
//   console.log(res/(24*60*60*1000));
  

// let diff=Math.abs(dobj1-dobj2);
// console.log(diff);//1296000000
// let days=diff/(24*60*60*1000)
// console.log(days);






// let date=new Date();
// date.setDate(1);

// let d=date.getDate();
// d=(d<10)?`0${d}`:d

// let m=date.getMonth()+1;
// let y=date.getFullYear()

// console.log(`${d}-${m}-${y} ,${d}/${m}/${y}`);


 

    //   let timer =()=>{
    //     let current= new Date();
    //     // current.setHours("11")
    //     // current.setMinutes("18")
    //     let year=current.getFullYear("2020");
    //     let month= current.getMonth()+1;
    //     // let day=current.getDay()+1
    //     let date=current.getDate()
        
    //      let hours=current.getHours();
    //      let indinahrs=(hours>=12?hours-12:hours ).toString().padStart(2,"0");
    //      let amorpm=hours>=12 ? "PM":"AM";
    //      let minits=current.getMinutes().toString().padStart(2,"0"); 
    //      let sec= current.getSeconds().toString().padStart(2,"0");

    //      console.log(`${indinahrs}-${minits}-${sec}:${amorpm}`);
    //      console.log(`${date}-${month}-${year} `);  
    //      console.log(current.toISOString().split("T")[0]);
         
    //   }
    //    timer();
    


   
 