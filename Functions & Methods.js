//Method - when a function is associated with an object, called method
//Functions - Block of code that performs specific tasks; used whenever needed

//prevents from redundancy

// function fun(){
//     console.log("Hello, Sumit");
//     console.log("Welcome to JS");
// }
// fun();


// function fun1(msg,val){
//     console.log(msg,val); //parameter -> input
// }
// fun1("Great day",43); //argument

// function sum(a,b){
//     s=a+b;
//     console.log("Before return");
//     return s;
//     console.log("After return");  //after 'return', nothing is executed
// }
// // console.log(sum(2,3));
// let val=sum(2,4);
// console.log(val);


//Arrow functions - compact way of writing a function

// const functionName = (param1,param2,...) => {
//     //condition
// }

//sum function
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(3,4));

// //using arrow function

// const sum1 = (a,b) =>{
//     sum2=a+b;
//     return sum2;
// }
// console.log(sum1(7,6));


// //multiplication function

// function mul(x,y){
//     return x*y;
// }
// console.log(mul(4,5));

// //using arrow function

// const mul1 = (x,y) => {
//     return x*y;
// }
// console.log(mul1(10,3));


//Practice questions
//Q1

// function countVowels(str){
//     let count=0;
//     for(let char of str){
//         if(char ==="a" ||char==="e" ||char==="i" ||char==="o" ||char==="u"){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels("apnacollege"));

//Q2 - using arrow function

// const countVowels = (str) => {
//     let count=0;
//     for(let char of str){
//         if(char ==="a" ||char==="e" ||char==="i" ||char==="o" ||char==="u"){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels("xyzbweebbedbwg"));


//forEach loop in arrays; not used for strings
//arr.forEach(callBackFunction); 
// callBackFunction - it is a function to execute 'for each' element in the array; it is passed as an argument to another function

// Array.forEcah((val) => {
//     console.log(val);
// })

// let arr = [1,2,3,4,,5,6];

// arr.forEach(function printVal(a,b){
//     console.log(a*3);
// })

//using arrow function

// let arr = [1,2,3,4,,5,6];

// arr.forEach ((a,b) =>{
//     console.log(a*3);
// })

// let name = ["sumit", "nikhil","anuj", "manish" ];

// name.forEach((val,i,name) => {                  //callBackFunction has 3 parameters-(value,index,array itself)
//     console.log(val.toUpperCase(),i,name);
// })


//Higher order function/method - takes/uses other function as parameter or returns other function
//e.g. of HOF/HOM - forEach loop


//Practice question

// let num = [2, 3, 4, 5, 6];

// num.forEach((val) =>{
//     console.log(val*val);  // or we can use (val**2)
// })

//another way

// let num = [20, 30, 40, 50, 60];

// let calcSquare = (val) =>{
//     console.log(val*val);  
// }
// num.forEach(calcSquare);


//Array methods

//map - create a new array with the results of some operation; the value its callBack returns are used to form new array
//arr.map(callBackFunction(value,index,array));

// let newArray = arr.map((val) =>{
//     console.log(val*2);
// })

// let num1 = [1,2,3,4,5,6];

// num1.map ((val)=>{
//     console.log(val);
// })

// let num1 = [1,2,3,4,5,6];

// let newArray =num1.map ((val)=>{
//     return val*2;
// })
// console.log("Original Array:",num1);
// console.log("New Array:",newArray);


//filter - creates a new array of elements that give true for a condition/filter
//e.g. all even elements
//let newArray=arr.filter((val)=>{
//     return val%2===0;
// })

// let arr = [1,2,3,4,5,6,7,8,9,10];

// let evenValue=arr.filter((val)=>{
//     return val>3;
// })
// console.log(arr);
// console.log(evenValue);

//reduce - performs some operation and reduces the array to a single value; returns that single value

// let arr = [1,2,300,4435,34,76,780];

// const sum = arr.reduce((prev,curr)=>{
//     return prev>curr?prev:curr;
// })
// console.log(sum);

//Practice questions
//Q1

// let marks = [54, 57, 78,98,86,99,97,96];

// let maxMarks=marks.filter((val)=>{
//     return val>90;
// })
// console.log(maxMarks);

//Q2

// let n = prompt("Enter any number");
// console.log("The entered number is:",n);

// let arr = [];
// for(let i=0;i<n;i++){
//     arr[i]=i+1;
//     // console.log(arr[i]);
// }
// console.log(arr);

// let arrSum=arr.reduce((prev,curr)=>{
//     return prev+curr;
// })
// console.log("Sum of the array elements is:",arrSum);

// let arrMul=arr.reduce((prev,curr)=>{
//     return prev*curr;
// })
// console.log("Factorial of the given number is:",arrMul);


















    

























