 


// class Mobile {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }

//   mobilename() {
//     console.log(`mobile name is ${this.name}`);
//   }
//   mobilecolor() {
//     console.log.log(`mobile name is ${this.color}`);
//   }
//   setname(newname) {
//     this.name = newname;
//   }
// }
//  const mobile1= new Mobile('redmi1','blue');

// const mobile2= new Mobile('redmi2','yellow');
// const mobile3= new Mobile('redmi3','gold');
// mobile1.mobilename();
// console.log(mobile2.mobilename());
// mobile2.setname("sesha")
// console.log(mobile2.mobilename());
// console.log(mobile3.mobilename());

// encapsulation
// class Mobile{
//     constructor(name,age){
//         let _name= name;
//          let _age=age;
//    this. getname=()=>{
//         console.log("name is "+_name);
//     }
//     this.getage=()=>{
//         console.log(_age);   
//     }

//      this.setname=(newname)=>{
//         _name= newname
//      }
//     }

//  }

//   let m1= new Mobile("sesha",32);

//   m1.getname()
//   m1.setname("sai");
//   m1.getname()
  


//    class Mobile {
//      constructor(name, color) {
//        this.name = name;
//        this.color = color;
//      }
//      getname() {
//        console.log(this.name);
//      }
//      setname(newname) {
//        this.name = newname;
//      }

//      getcolor() {
//        console.log(this.color);
//      }
//    }

//    let mobile1 = new Mobile("apple", "white");
//    mobile1.getname();
//    mobile1.getcolor();
//    mobile1.setname("samsung");
//    mobile1.getname();



//  ***ABSTARCTION***

// ABSTARCTION is the process of hiding internal data and showing essential data to user

//  the below code is normal class in this,the minimum balance is available to outside ,
// so anyone can access it and over ride to minum 0 so we have to keep to hide private
//  so we can write this minimum balance in get amount function that has local scope


//   class Atm {
//   constructor(withdraw) {
//     this.balnce = 1000;
//     this.minbalence = 500;
//     this.withdraw = withdraw;
//   }
//   getamount() {
//     if (this.balnce - this.withdraw >= this.minbalence) {
//       console.log("trancsaction sucessfull");
//     } else {
//       console.log("transacation fail");
//     }
//   }
// }

//    const person1 = new Atm(600);
//    person1.getamount()
//    person1.minbalence=100;
// // we can acces and we can override varibale in class so we use abstraction method keep it hide in method
//  person1.getamount();

// // abstarction applied to class
// class Atm {
//     constructor(withdraw){
//         this.balnce=1000;

//         this.withdraw=withdraw;
//     }
//       getamount( ){
//         this.minbalence=500;
//         // we add this varible to hide internal data
//         if ((this.balnce-this.withdraw) >= this.minbalence){
//             console.log('trancsaction sucessfull');
//         }
//             else{
//                 console.log("transacation fail");
//             }
//         }
//       }

//    const person1 = new Atm(500);
//    person1.getamount()
//    person1.minbalence=100;
// // we can over ride varibale in class so we use abstraction method keep it hide in method
//  person1.getamount();
    

//  class Atm{
//     constructor(withdraw){
//         this.balance=1000;
//         this.withdraw=withdraw;
       
//     }
//      drawamount=()=>{
//         this.minbalance=500;
//         if(this.balance-this.withdraw >= this.minbalance){
//             console.log("sucess");
//         }else{
//             console.log("fail");
            
//         }
//      }
//  }
//      let person1= new Atm(500);
//      console.log(person1.balance);
//      console.log(person1.minbalance);
//      person1.drawamount()

//      person1.minbalance=100;
//      console.log(person1.balance);
//      console.log(person1.minbalance);
//      person1.drawamount()     
//      person1.drawamount()



//  ENCAPSULATION :encapsulation is binding data members and functions into single unit  hiding data from outside,
// to make function and variable avilable we have to use "this" or ,private we haveto use var let const in constructior function 
// 

// class Bank {
//   constructor(name, account_no, account_type) {
//     var name = name;
//     var account_no = account_no;
//     var account_type = account_type;

//     this.getname = () => {
//       // console.log(`account name: ${name}`);
//       return name;
//     };
//     this.getaccountno = () => {
//       // console.log(`account number : ${account_no}`);
//       return account_no;
//     };
//     this.getaccounttype = () => {
//       // console.log(`account type :${account_type}`);
//       return account_type;
//     };
//     this.setname = (newname) => {
//       name = newname;
//     };
//     this.setaccno = () => {
//       account_no = Math.floor(Math.random() * 90000000);
//     };

//     this.setacctype = (acctype) => {
//       account_type = acctype;
//     };
//   }
// }




// const person1 = new Bank("raju", null, "savings");
// const person2 = new Bank("rani", null, "bussiness");
// for(i=0;i<5;i++){
//     let j=i;
//     setTimeout(() => {
//         console.log( "settimeout "+i);
//         console.log( "settimeout "+j);
//     }, 2000);
// }

// person1.getaccounttype();


// class Bank{
//     constructor(accname,acctype,accnum){
//         let _accname=accname;
//         var _acctype=acctype;
//         var _accnum=accnum;

//       this.getnam =()=>{
//             console.log(_accname);
            
//         }
//         this.getacctype=()=>{
//             console.log(_acctype);
            
//         }
//         this.getaccnum=()=>{
//             console.log(_accnum);
            
//         }
//         this.setaccnum=()=>{
//             _accnum=Math.floor( Math.random()*1000)
//         }

//     }
// }


//   let p= new Bank("sesha","savings",null);
//   p.setaccnum()
//   p.getaccnum();

// class Bank {
//     constructor(name,accnum,acctype){
//         this.name=name;
//         this.accnum=accnum;
//         this.acctype=acctype
//     }
    
//     getname (){
//         return this.name;
//     }
//     getaccnum(){
//         return this.accnum;
//     }
//     getacctype(){
//         return this.acctype;
//     }

//     setname(newname){
//         this.name=newname
//     }
//     setaccnum(){
//         this.accnum=Math.floor(Math.random()*900000)
//     }

//     }



//     let  person1=new Bank("raju",null,"saving")
    
//     console.log( person1.getname() );
//     person1.setname("newraju")
//     console.log( person1.getname() );

//     console.log( person1.getaccnum());
//      person1.setaccnum()
//     console.log( person1.getaccnum() );

//    person1.accnum=123;   //hacker can accecs our acount numbet and change soo we use encapsulation 
//    console.log( person1.getaccnum()); 
  

//  encapsulation  props ni hide chyedam, eyvna chnage chyalante set methods dwara matrame cheyali direct acces undadu
// class Bank {
//     constructor(name,accnum,acctype){
//         var name=name;
//         var accnum=accnum;
//         var acctype=acctype

//         this.getname=()=>{
//             return name;
//         }
//         this.getaccnum=()=>{
//             return accnum;
//         }
//         this.getacctype=()=>{
//             return acctype;
//         }
    
//         this.setname=(newname)=>{
//             name=newname
//         }
//         this.setaccnum=()=>{
//             accnum=Math.floor(Math.random()*900000);
//         }
//     }
//     }



//     let  person1=new Bank("raju",null,"saving")
    
//     console.log( person1.getname() );
//     person1.setname("newraju")
//     console.log( person1.getname() );

//     console.log( person1.getaccnum());
//      person1.setaccnum()
//     console.log( person1.getaccnum() );

//    person1.accnum=123;   //hacker can accecs our acount numbet and change soo we use encapsulation 
//    console.log( person1.getaccnum()); 








// class Bank{
//   constructor(name,color){
//     this.name=name;
//     this.color=color;
//   }
//   getname(){
//     console.log("the name is "+this.name)
//   }
//   getcolor(){
//     console.log("the color is "+this.color)
//   }
//   setname(newname){
//     this.name=newname
//   }
// }

// let person1 = new Bank ("sai","white")
// console.log(person1.name)
// person1.getcolor()
// person1.setname("sesha");
// console.log(person1.name)


// encapsulation is the processof binding datamebers and meber function into a single unit
//  showing esential data to useser hiding unneseary data
// and we can simoly say  privating properties ,it should hide all variable ,it can hide any method as well
// class Bank {
//   constructor(name, accnumber, acctype) {
//     var name = name;
//     var accnumber = accnumber;
//     var acctype = acctype;

//     this.getname = () => {
//       return name;
//     };
//     this.getaccnumber = () => {
//       return accnumber;
//     };
//     this.getacctype = () => {
//       return acctype;
//     };
//      this.setname=(newname)=>{
//              name=newname;
//           }
//         this.setaccnumer=()=>{
//             accnumber=  Math.floor(Math.random() * 999999);
//         }
//         this.setacctype=(newacctype)=>{
//             acctype=newacctype
//         }
//   }
// }

// let person1 = new Bank("sai", null, "current");

// console.log(person1.getname());
// person1.setname("sesha")
// console.log(person1.getname());



// console.log(person1.getaccnumber());
// person1.setaccnumer()
// console.log(person1.getaccnumber());

// console.log(person1.getacctype());
// person1.setacctype("good")
// console.log(person1.getacctype());
// // person1.setname("sesha");
// console.log(person1.getname());



//  class Atm{
//     constructor(withdraw){
//         this.balence=1000;
//         this.withdraw=withdraw
//     }
//     getamount=()=>{
//         let minimum=500
//         if(this.balence-this.withdraw >=minimum ){
//             console.log("sucess");
//         }else {
//             console.log("failed ");
            
//         }
//      }
//  }


//   let person1=new Atm(400);
// console.log(person1.balence);
// person1.getamount()





 





