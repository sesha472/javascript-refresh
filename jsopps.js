 


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
// console.log(mobile1.mobilename());
// console.log(mobile2.mobilename());
// mobile2.setname("sesha")
// console.log(mobile2.mobilename());
// console.log(mobile3.mobilename());

//  ***ABSTARCTION***
// // abscission is the process of hiding internal data and showing essential data to user
// //  the below code is normal class in this the minimum balance is available to outside ,so anyone can access it and over ride to minum 0 so we have to keep to hide private so we can write this minimum balance in get amount function that has local scope
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
// // we can acces and we can over ride varibale in class so we use abstraction method keep it hide in method
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

//  ENCAPSULATION :encapsulation is binding data members and functions into single unit  hiding data from outside
// to make function and variable avilable we have to use this. or private we haveto use var let const in constructior function 
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


