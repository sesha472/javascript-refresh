















// const printName = (personObj) => {
//     console.log(personObj.name);
// }
// printName({name: 'Max', age: 28}); // prints 'Max'

// this is how distructuring works 
// const printName = ({name}) => {
//     console.log(name);
// }
// printName({name: 'Max', age: 28}); // prints 'Max')


// let obj1={fname:"sachin",lname: "tendulkar",age:"27"}; //using distructuring
// function fullname({fname,lname}){
//     console.log(fname);
//     console.log(lname);
// }
// fullname(obj1)


// Object.freeze() cant add,,remove,update  properies from object 

// const obj={
//     name:"sesha",
//     age:31
// }

// Object.freeze(obj)
// obj.state="ap";
// obj.age=40;
// console.log(obj);



// Object.entries() method will return the array of string key value pairs of object props and values 
// const person1 = {
//   name: "sesha",
//   hight: 5.6,
//   age: 25,
//   weight: 40,
//   colour: "whight",
// };
// for (const [key,value] of Object.entries(person1)) {
// console.log(key,value); 
// }



// The Object.fromEntries() static method transforms a list of key-value pairs into an object.

// let users=[["name" ,'sesha'],["name2" ,'sesha2']]
// console.log(Object.fromEntries(users)); //{name: 'sesha', name2: 'sesha2'}


// In JavaScript, a Map is a collection of key-value pairs
//  where both keys and values can be of any data type.
//  It is an iterable, meaning it can be used in a for...of loop,
//  and it maintains the order of insertion of the elements.

// const myMap = new Map();

// // Adding key-value pairs
// myMap.set('name', 'John');
// myMap.set('age', 30);

// // Getting a value
// console.log(myMap.get('name')); // 'John'

// // Checking if a key exists
// console.log(myMap.has('age')); // true

// // Deleting a key-value pair
// myMap.delete('name');
// console.log(myMap.has('name')); // false

// // Iterating over a Map
// myMap.set('country', 'USA');
// myMap.set('profession', 'Developer');

// for (let [key, value] of myMap.entries()) {
//   console.log(`${key}: ${value}`);
// }

// // Output:
// // 'age: 30'
// // 'country: USA'
// // 'profession: Developer'

// // Clearing the map
// myMap.clear();
// console.log(myMap.size); // 0


// const users=[
//     {name :'sesha',
//        hight : 5.6,
//        age: 25,
//         weight: 40,
//       colour: "whight"
//     },
//       {
//       name :"sesha",
//       hight: 5,
//       age: 26,
//       weight:65,
//       colour:"blue"
//       },
//       {
// name:"sai",
// hight:6,
// age:27,
// weight:66,
// colour:"skyblur"
// }];

// let userswithhighweight=users.filter(item=>item.weight>50)
// console.log(userswithhighweight);

// var arry=[1,9,4,5,6,7];
// var s=arry.reduce(function(a,b){
//   a[b]=b*b;
//   return a;
// },{})
// console.log(s);



// for(i=0;i<s.length;i++){
// console.log(Object.keys(s[i]));
// }
