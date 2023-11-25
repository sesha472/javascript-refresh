// console.log(9);

// js program to disply date 
// date object pratice 
const timer=()=>{
let today=new Date();


// today.setHours("")
// today.setMinutes("1")
// today.setSeconds("1")


let arrday=["sun","mon","tue","wed","thur","fryday","saturdat"]

let hours=today.getHours();
let amorpm=hours>=12?"pm":"am";

// console.log(hours); Convertimg 24 hour format to 12 hour format
 hours = (hours >= 12) ? hours - 12 : hours;
 hours=(hours==0)?12:hours; //if hourse is become 0 i am setting it to 12am like that
// console.log(amorpm);

let minutes=today.getMinutes();
minutes=(minutes<10)?`0${minutes}`:minutes;
let seconds=today.getSeconds();
seconds=(seconds<10)?`0${seconds}`:seconds;


console.log("today is : "+arrday[today.getDay()]);
console.log("Current time is : "+hours+":"+minutes+":"+seconds+":"+amorpm); //Current time is : 11:42:53:am
}

timer();



