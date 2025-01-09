
// let x=new Number(15);
//           let y= new Number(15)

// console.log(x===y); //false because two object cant be compared 

// const getAllSubset = arr => 
//   arr.reduce((subsets, value) =>
//     subsets.concat(subsets.map(set =>{
//         console.log("subset : "+ subsets);
//         console.log("value " +value);
//         console.log("setset " +[...set]);
//        return [value, ...set];
//     } ))
//   , [[]]
// );

// console.log ( getAllSubset([1,2,3]));

// //01. Template String

// function print(Name) {
//     console.log("Hello " + Name);
//     console.log(`Hello ${Name}`);
//   }
//   print("Pradeep");


// //02. Spread Operators

// var firstGroup = ["C", "C++", "Java"];
// var secondGroup = ["SQL", "MySQL", "BigData"];
// var thirdGroup = ["Android", "Python", "Ruby", firstGroup, secondGroup];
// var finalGroup = ["Android", "Python", "Ruby", ...firstGroup, ...secondGroup];

// console.log(thirdGroup);
// console.log(finalGroup);


// //03. Sets

// const sets = new Set([1, 2, 3, 4, 5]);
	
// console.log(sets.has(1)); 
// console.log(sets.has(0)); 


// //04. Default Parametrs
// function add(x = 10, y = 20) {
//   console.log(x + y);
// }
// add();
// add(30,60)


// //05. repeat()
    // var cat = {
    //   meow(times) {
    //     console.log("meow ".repeat(times));
    //   },
    // };
    // cat.meow(2);
    // let str = "namsthey ";
    // console.log(str.repeat(5));
    


// //06. Arrow Function

// var companyList = function(company) {
//   console.log(company);
// };

// //ES-6
// var companyList = company => console.log(company); //arraow function

// companyList(["Apple", "Microsoft", "Google"]);


// //07. Arrow function with 'this'

// var person = {
//   first: "Pradeep",
//   actions: ["bike", "hike", "ski", "surf"],
//   printActions: function() {
//     var _this = this;
//     this.actions.forEach(function(action) {
//       var str = _this.first + " likes to " + action;
//       console.log(str);
//     });
//   }
// };
// person.printActions();

// const person={
//     name:"king",
//   actions: ["bike", "hike", "ski", "surf"],
//    printactions:function(){
//        this.actions.forEach(item=>{
//         console.log(`${this.name} likes ${item}`);
//        })
//    }   
// }
// person.printactions()
 
// //ES-6
// var person = {
//   first: "Pradeep",
//   actions: ["bike", "hike", "ski", "surf"],
//   printActions() {
//     this.actions.forEach(action => {
//       var str = this.first + " likes to " + action;
//       console.log(str);
//     });
//   }
// };


// //08. Destructing Assignment
// var phone = {
//   title: "iPhone",
//   price: 800,
//   description: "The iPhone is a smartphone developed by Apple"
// };

// console.log(phone.title);
// //ES-6
// var { title, price } = {
//   title: "iPhone",
//   price: 800,
//   description: "The iPhone is a smartphone developed by Apple"
// };

// console.log(title);


// //09. Generators

// /*** Calling a generator function does not execute its body immediately ***/

	// function* generator(i) {
	// 	yield i;
	// 	yield i + 10
	// 	yield i + 20;
	// }
	// var gen = generator(10);
    // console.log(gen.next());
	// console.log(gen.next().value); //10
    // console.log(gen.next().value); //20
    // console.log(gen.next().value); //30

    // function* getmultipIeVaIues() {
    //   yield 18;
    //   yield 243;
    // }
    // const result = getmultipIeVaIues();
    // //the result.next()returns object of all values in function then if we want one by one we have call .value one by one
    // console.log(result.next().value);
    // console.log(result.next().value);
        
    

// //10. Symbols

// /*** They are tokens that serve as unique IDs. We create symbols via the factory function Symbol() ***/

// 	const symbol1 = Symbol();
// 	const symbol2 = Symbol(42);
// 	const symbol3 = Symbol('foo');

// 	console.log(typeof symbol1); 

// 	console.log(symbol3.toString()); 

// 	console.log(Symbol('foo') === Symbol('foo')); 


// // 11. Iterator

// /**  The iterable protocol allows JavaScript objects to define or customize their iteration behavior. **/

//   var title = 'ES6';
//   var iterateIt = title[Symbol.iterator]();

//   console.log(iterateIt.next().value); //output: E
//   console.log(iterateIt.next().value); //output: S
//   console.log(iterateIt.next().value); //output: 6

//01. Example:- Promises

// const delay = seconds => {
//     return new Promise(resolve => {
//         setTimeout(resolve, seconds * 1000)
//     });
// };

// console.log("Zero seconds wait");
// delay(1).then(() => console.log('One seconds wait'));
// delay(5).then(() => console.log('Five seconds wait'));

//02. Loading data with fetch()

// const getPeopleInSpace = () =>
//     fetch('http://api.open-notify.org/astros.json')
//         .then(res => res.json());

// getPeopleInSpace()
//     .then(console.log);

//03. Async() and await()

// const delay = seconds => {
//     return new Promise(
//         resolve => setTimeout(resolve, seconds * 1000)
//     )
// };

// const countToFive = async() => {
//     console.log('zero seconds wait');
//     await delay(2);
//     console.log('Two seconds wait');
//     await delay(5);
//     console.log('Five seconds wait');
// }

// countToFive();

// //04. Async with fetch

// const githubRequest = async(loginName) => {
//     try{
//         var response = await fetch(`http://api.github.com/users/${loginName}/followers`);
//         var json = await response.json();
//         // console.log(json);
//         var followerList = json.map(user => user.login);
//         console.log(followerList);
//     } catch(e){
//         console.log("Data didn't load", e);
//     }
// };

// githubRequest('eveporcello');
// githubRequest('jjulian');
// githubRequest('seshasai');


// function createcounter() {
//     let counter =0;
//     return function(){
//         counter++;
//         return counter
//     }
// }

// let counter1=createcounter();
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());

//  counter2=createcounter();
// console.log(counter2());

// console.log(9);


