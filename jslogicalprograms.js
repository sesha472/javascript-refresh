// how to finde the length of the obj or how to chekt is obj is empty or not


//
//  var users={id:"1",name:"sesha1",city:"hyd",state:"ap"};
//  console.log(Object.keys(users).length); //4
// // console.log(users.constructor);
// // console.log(typeof(users));
//  var b= Object.values(users).length;
//  console.log(b);   //4


// // how to remove duplicatets in array

// by using filter ,indexof method
// let a=[2,4,8,,2,4,9,4,3];
// let b=a.filter((item,index)=> { return(a.indexOf(item)===index)});
//  in above line ,if we are using peranthsys we need to give return statment
// console.log(b);
//  let b= a.filter((item,index)=>a.indexOf(item)===index)
//  console.log(b);


// how to get duplicates from array
// let a=[9,5,3,2,4,4,3,2,3,4,3];
//  let b= a.filter((item,index)=>a.indexOf(item)!==index)
//  console.log(b);


// using forEach method iterate over array andpush elemnts based on logic
// let b = [1, 2, 1, 3, 1, 2, 3, 36, 6, 4];
// function duplicate(data) {
//   let emptyarr = [];
//   data.forEach((element) => {
//     if (!emptyarr.includes(element)) {
//       emptyarr.push(element);
//     }
//   });
//   return emptyarr;
// }
// console.log(duplicate(b));



// by using set  methods
// let a=[1,2,1,5,2,1,4,2,5,3,6,40];
// let b=[...new Set(a)];
// console.log(b);//[1, 2, 5, 4, 3, 6, 40]

// console.log(b.sort((a,b)=>a-b)); //[1, 2, 3, 4, 5, 6, 40]


//by using set
// let arr=["bananna","mango","apple","lemon","apple","lemon"]
// let x=[...new Set(arr)];
// console.log(x);

// let arr=["bananna","mango","apple","lemon","apple","lemon"]
//



//  b=[9,4,54,34,2,3,110,4,32]
//  let c=b.sort((a,b)=>b-a)
//  console.log(b.sort((a,b)=>a-b));
//  console.log(c);
//  console.log(d);

// let obj1={id:"1",name:"sesha"};
// let obj2={...obj1};
// console.log(obj1);
// console.log(obj2);
// obj2.name="sai";
// console.log(obj1);
// console.log(obj2);
 
// var obj={name:"sesha",
//         adress:{city:"hyd"}
// }

// const {adress:{city}} = obj;
// console.log(city);
//  const {city}=adress;
// console.log(name1);
// console.log(city);
// console.log(secret);


// var a={no1:10}
// var b=a;
// b.no1++;
// console.log(a,b);

// function add(...args){
//     let sum=0;
//     for(let i of args) sum +=i
//     return sum;

// }
// console.log(add(1,2,3));

// function add(...args){
//     console.log(args);
//         let result =args.map(item=>item*2);
//         let filt=args.filter((item,index)=>args.indexOf(item)==index);
//         let sort=args.sort((a,b)=>b-a);
//         return {result,filt,sort,args}
//     }
//     console.log(add(5,41,2,8,2,3,8,4,1);


// opps concepts
// function sub(a,b){
    //     return a-b;
    // }
    // function add(s,a,b){
    //    return s(a,b);
    // }
    
    // return  add(sub,20,5));
    
    
    // function x(y){
    //     return "x");
    // }
    
    
    
    // x(function y(x){
    //     return "y");
    // });
    
    
    // objcts ni 4 wasy lo create cheyachu
    
    // 1.object literals
    // let mobile={username:"seha"};
    // return mobile);
    
    // 2.objcet .create methods()
    // Mobile=Object.create({});
    // Mobile.username="sesha";
    // Mobile.city="hyd"
    // Mobile["age"]=28; //dot notation or ila square bracket lo object properties pass cheyachu
    // return Mobile);
    
    // 3.using functions
    // function mobile() {
    //     return "mobile"; 
    // }
    //  let Mobile=new mobile();
    //  Mobile.username="sesha";
    // Mobile.city="hyd"
    // Mobile.age=28;
    //  return Mobile);
    
    // 4.using classes
    
    //    class Mobile{
    //     };
    // let mobile  = new Mobile();  // ila object create cheyachi 
    // mobile[" username"]="sesha"; // we can create new properties to our new object 
    // return mobile);
    
    // ila four ways lo crete cheychu but inka chala waays untai but e four main 
       
    
    // constructor enduku use chestam ante normal ga function lo parameteres pass cheyalante cheyachu but class lo cheyalante ila constructor use chestham
    
    // class Mobile {
    //     constructor(name,color){
    //     var.name=name;
    //     var.color=color;
    //     }
    // }
    
    // let mobile = new Mobile('sesha','blue');
    // return mobile);
    
    
    // class Mobile {
    //         constructor(name,color){
    //         var.name=name;
    //         var.color=color;
    //         }
    
    //     getname(){
    //         return var.name+" var is your name ");
    //     }
    //    getcolor(){
    //        return "var is your color "+var.color);
    //    }
    
    //    setcolor(newcolor){
    //        var.color=newcolor;   
    //    }
    //     }
    
    
    //     let mobile= new Mobile();
    //     mobile.color="blue";
    //     mobile.name="redmi";
    
    //     mobile.getname();
    //     mobile.getcolor();
    
    //     mobile.setcolor("white");
    //     mobile.getcolor();
    
    
    
    
    // ENCAPSULATION
    
    // class Bank {
    //             constructor(name,acno,actype){
    //             var.name=name;
    //             var.acno=acno;
    //             var.actype=actype;
    //             }
        
    //             getname(){
    //              return " var is user name "+var.name;
    //           }
    //           getacno(){
    //            return "var is "+ var.name+" color "+var.acno;
    //           }
    //           getactype(){
    //           return "var is "+ var.name+" color "+var.actye;
    //           }
        
    //          setname(newname){
    //             var.name=newname;   
    //           }
    //          setacno(){
    //            var.acno=Math.floor(Math.random()*10000000);
    //          }
    //          setactype(newactype){
    //            var.actype=newactype;
    //          }
    
    
    //         }
    //     let user1= new Bank("sesha",null,'savings');
    //     console.log(user1.getname()); //sesha
    //     user1.setacno(); //  some random nmber 872652376 ,ila acnmber set ceyachu but 
    //      //evaran ahacker ila properteis direct ga cces cheysi chnage cheyachu 
    //         user1.name="sai";
    //        user1.acno=123;   //out side vallu set cheysthunary
    
    //     //  so ala kakukuna encapsulation cheysi ristrict cheyachy
    //     console.log(user1.getname());  //sai
    //     console.log(user1.getacno());   //123
    
        // ala cheyakunda manam encapuslation use cheysi datani
    
    
        // pyna class lo encapsulation use chyddam 
        // constructor lo  var anedi peytadam valla properties,methods  anni available ocheystuhnnai bayatki
        // ippudu props ni ristric cheyali bayataki acces lekunda ela cheystham ante
        // var badulu var let const use cheysi ristric cheyachu
        //ipudu var anedi contsrct fun nuchi baytai aces undadu
        // soo andukey functions anni constructor lopale unchali
        // appude varible ni use cheydaniki chance untadi
    
        // ippud  eymethods expose avallo bayatki vatiki var anedu use cheysthey chalu
    
        // class Bank {
        //     constructor(name,acno,actype){
        //     var name=name;
        //     var acno=acno;
        //     var actype=actype;
    
        //         this.getname=() =>{
        //        return"account holder name is =>" +name;
        //         }
        //          this.getacno=()=>{
        //           return  name+" account number is => "+acno;
        //         }
        //           this.getactype=()=> {
        //             return  name+" acount type is =>  "+actype;
        //            }
        //            this.setacno=()=>{
        //             acno=Math.floor(Math.random()*90000000);
        //               }
                      
        //        this.setname=(newname)=>{
        //         name=newname;   
        //    }
            
        //           }
      
        //            setactype=(newactype)=>{
        //              actype=newactype;
        //            }
    
        // }
        // function arrayReverse(arr) {
        //     var temp;
        //     var n = arr.length;
        //     var mid = n / 2;
         
        //     for (var i = 0; i < mid; i++) {
        //        temp = arr[i]
        //        arr[i] = arr[n - i - 1];
        //        arr[n - i - 1] = temp;
        //     }
         
        //     return arr;
        //  }
         
        
        //  const names = ['German', 'Nicolas', 'Martin', 'Micaela', 'Mateo', 'Matias', 'John', 'Gonzalo', 'Esteban', 'Paula', 'Victoria', 'Bautista', 'Carolina', 'Analia', 'Edward', 'Mirtha'];
        // const foo = names.filter((name) => name.toUpperCase().startsWith('M'));
        // console.log(foo);
        
        // console.log("this is good ");
    
        // let sesha =new Bank("sesha",null,"savings");
        // console.log(sesha.getname());
        // sesha.setacno();
        // sesha.acno=124;
        // sesha.setname("sai");   //this.setanme anedi constructor lo untene manam set cheygalm 
        // //ila acces cheylemu valu change avadu 123 ki
        // // because we r usnig encapulation
        // console.log(sesha.getname());
        // console.log(sesha.getacno());
        // console.log(sesha.getactype());
    
        