

// let size= prompt("enter the charecters ");
// let result= 24-size.length;
// let text=(result>0) ? "you have left":" you are excluded ";
// alert(`${text} ,${result} charecters`);

//  var name="hai";
// name.slice(0,1);

//  let name = prompt("enter the string you want ;");
// let result= name.slice(0,1).toUpperCase();
// let secresult=name.slice(1).toLowerCase()
// console.log(result+secresult)

//  let money=5;
// let bottlecost=1.5;
// let totalbottle= Math.floor(money  / bottlecost);
// let remaining = money % 1.5 ;

// console.log(totalbottle)
// console.log(remaining);

// function bmical(weight,height){
//     let bmi= Math.round(weight/(Math.pow(height,2)));
//         console.log( bmi); 
//     }
   
//    bmical(65,1.8)
   
   
   
   // var name=prompt("ente nme");
   //  var b= name.slice(0,1);
   //   var c=b.toUpperCase();
   // var name2=name.slice(1,name.length);
   // var d=name2.toLowerCase();
   // alert(c+d);
   
   // var dogage=prompt("dog age");
   // var humanage=((dogage-2)*4)+21;
   // alert(humanage);
   
   
   // function getmilk(money){
   //          var noofbottles=Math.floor(money/1.5);
   //          var bottles=noofbottles*1.5;
   //     var balance=money%1.5;
   
   //       console.log(balance);
   //       console.log(noofbottles+"you will get no of bootles");
   
   // }
   // getmilk(11);
   
   
   // function bmi( w,h){
   
   //     var output= Math.round(w/(h*h));
   
   //    console.log(output);
   // }
   
   // bmi(65,1.8);
   
   // var a=prompt("hi");
   // var b=prompt("ji");
   
   // var c=Math.random()*100;
   //  alert(Math.floor(c+1));
   
   // function noofbottles(money){
   //     var bottles= Math.floor(money/1.5);
   //     return bottles;
   // }
   
   // function change(money){
   //     var change1= Math.floor(money % 1.5);
   //     return change1;
   // }
   
   // var a= prompt("enter the money u have");
   //  alert("u will get "+noofbottles(a)+"of bottles"+"and the change"+change(a));
   
   // var a=prompt("enter name");
   // var b=prompt("enter another name");
   // var c=Math.floor(Math.random()*11);
   //  if(c>7){
   // alert(c+ "is good");
   //  }
   //  else{
   //      alert(c+ "is you r love score is low");
   
   //  }
   
   
   // var a=[];
   // var b=1;
   // function fizbuzz(){
   //      if(b%3==0 && b%5==0){
   //          a.push("fizbuzz");
   //      }
   //    else  if(b%3==0){
   //          a.push("fizz");
   //      } else if(b%5==0){
   //          a.push("bizz");
   //      }
   //      else{
   //     a.push(b);
   //      }
   //      b++;
        
   // }
   
   
   //  var a=[1,2,3,4,5,7,15,6,7,9,8,36,9,45];
   //  for(i=0; i<a.length;i++){
   //      if(a[i]%3==0 && a[i]%5==0){
   //          a[i]="fizbizz";
   //      } else if(a[i]%3==0){
   //          a[i]="fizz";
   //      } else if(a[i]%5==0){
   //          a[i]="buzz";
   //      } 
       
   //  }
   //           console.log(a);
        
        
   //      var nb=99;
   
   
   //      while (nb>=0){
   
   //        if(nb>0){
   //          console.log(nb+"of beer");
   //     console.log("Take one down, pass it around,");
   //        }
   //        else if(nb<=0){
   //            console.log(nb  + " of beer on the wall");
              
   //        }
   
   //     nb--;
   //      }
   
   //      var numberOfBottles = 99
   // while (numberOfBottles >= 0) {
   //     var bottleWord = "bottle";
   //     if (numberOfBottles === 1) {
   //         bottleWord = "bottles";
   //     } 
   //     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
   //     console.log(numberOfBottles + " " + bottleWord + " of beer,");
   //     console.log("Take one down, pass it around,");
   // 	numberOfBottles--;
   //     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
   // }
   
   // function fib(n){
   //         var output = [];
   
   //     var fNum = -1;
   //     var sNum = 1;
   //     var sum = 0;
      
   
   //     for(var i=0; i<n; i++){       
   //         sum = fNum + sNum;
   //         output.push(sum);   
   //         fNum = sNum;
   //         sNum = sum;   
   //     }
   //     return output;
   // }
   
   
   //     var x=[];
   //     if (n<=0){
   //     }else if (n<=1){
   //     var a=0;
   //     x.push(a);
   //     }else if(n<=2){
   //         a=0;
   //         var b=1;
   //     x.push(a);
   //     x.push(b);
   
   //     }else {
   //         var a=0;
   //         var b=1;
   //          x.push(a);
   //            x.push(b);
   //     for(var i=0 ; i<n; i++){
   //         var c= a+b;
   //           x.push(c);
   //            a=b;
   //            b=c;
   //     }
   // }
   // return x;
   // }
   

   // fib(5);   
   // function fib(n){
   
   // var x=[];
   // if(n==1){
   //     x=[0];
   // }else if(n==2){
   //     x=[0,1];
   // }else{
   //     x=[0,1];
   //     for(var i=0 ;i< n; i++){
   //     x.push(x[x.length-2]+x[x.length-1]);
   //     }
   // }
   //  return x;
   
   // }
   // var a=(Math.floor(Math.random()*6)+1);
   // console.log(a);