// async await (better way) >> promise chains >> callback hell

//synchronous - code runs in particular sequence of instructions given in the program. Each instruction wait for the previous instruction to complete its execution

//asynchronous - due to synchronous programming, sometimes important instructions get blocked due to some previous instructions, which causes a delay in the UI. Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.

// function printName() {
//   console.log("Name = Sumit");
// }

// setTimeout(printName, 2000); //1s = 1000ms

// console.log("One");
// console.log("Two");

// setTimeout(() =>{
//     console.log("Printing after 3 seconds");
// }, 3000);

// console.log("Three");
// console.log("Four");

//Callbacks - it's a function passed as an argument to another function

// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b,sumCallBack){
//     sumCallBack(a,b);
// }

// calculator(2,3,sum);    

// OR

// function calculator(a,b,sumCallBack){
//     sumCallBack(a,b); 
// }

// calculator(2,3,(a,b)=>{
//     console.log("Sum is =",a+b);
// }); 

//Callback hell - nested callbacks stacked below one another forming a pyramid structure (Pyramid of Doom)
//This style of programming becomes difficult to understand and manage

// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("Data =",dataId);
//         if(getNextData){
//             getNextData();
//         }      
//     },1000);
// }

// //Callack hell

// getData(1,()=>{
//     console.log("Getting data 2...");
//     getData(2,()=>{
//         console.log("Getting data 3...");
//         getData(3,()=>{
//             console.log("Getting data 4...");
//             getData(4);
//         });
//     });
// });


//Promises - it is for "eventual" completion of task. it is an object in JS.
//It is a solution to callback hell.

//let promise = new Promise((resolve,reject)=>{.....})

//resolve & reject are callbacks or handlers provided by JS
//3 states of promise - pending, fulfilled(resolved) and rejected

// let promise = new Promise((resolve,reject)=>{
//     console.log("Working with promise");
// })

// let promise1 = new Promise((resolve,reject)=>{
//     console.log("Working with promise");
//     resolve("Success");
// })

// let promise2 = new Promise((resolve,reject)=>{
//     console.log("Working with promise");
//     reject("Some error occured");
// })

// console.log(promise);
// console.log(promise1);
// console.log(promise2);

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data after 8 second =",dataId);
//             resolve("Success");
//             if(getNextData){
//                 getNextData();
//             }
//         },8000);
//     })
// }

// getData(345);
// let finalVal=getData(345);
// console.log(finalVal);

//Promises - a JS promise object can be:

//pending: the result is undefined
//resolved : the result is a value(fulfilled)   //resolve(result)
//rejected: the result is an error object       //reject(error)

//Promise has state (pending, fulfilled) and some result (result for resolve & error for reject)

// .then() & .catch()

// promise.then((res) =>{.....})       //fulfilled
// promise.catch((err) =>{.....})      //rejected

// let newPromise = ()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("I'm a promise");
//         resolve("Success");
//         // reject("Error occured");
//     })
// }

// let promise = newPromise();
// promise.then((res)=>{
//     console.log("Promise fulfilled,",res);
// })

// promise.catch((err)=>{
//     console.log("Promise rejected,",err);    
// })


// Promise chain

// function asyncFunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('Data 1');
//             resolve("Success");
//         },2000)
//     })
// }

// function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('Data 2');
//             resolve("Success");
//         },2000)
//     })
// }

// console.log("Fetching Data 1...");
// let p1 = asyncFunc1();
// p1.then((res)=>{
//     // console.log("Promise fulfilled,",res);
//     console.log("Fetching Data 2...");
//     let p2 = asyncFunc2();
//     p2.then((res)=>{
//         // console.log("Promise fulfilled,",res);
//     })
// })

// OR

// console.log("Fetching Data 1...");
// asyncFunc1().then((res)=>{
//     console.log("Fetching Data 2...");
//     asyncFunc2().then((res)=>{
//     })
// })

// let p2 = asyncFunc2();
// p2.then((res)=>{
//     console.log("Promise fulfilled,",res);
// })


// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data =",dataId);
//             resolve("Success");     
//         },2000);
//     })
// }

// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then((res)=>{
//         console.log(res);
//     })
// })

// OR

// console.log("Fetching data 1....");
// getData(1)
// .then((res)=>{
//     console.log("Fetching data 2....");
//     return getData(2);
// })
// .then((res)=>{
//     console.log("Fetching data 3....");
//     return getData(3);
// })
// .then((res)=>{
//     console.log(res);
// })

// async - await

//async function always returns a promise.

// async function myFunc(){....}

//await pauses the execution of its surrounding async function until the promise is settled.

// async function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Weather Data");
//             resolve(200);
//         },2000)
//     })
// }

// async function getWeatherData(){
//     await api();  //1st call
//     await api();  //2nd call
// }


function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data -",dataId);
            resolve("Success");
        },1000)
    })
}

// async function getAllData(){
//     console.log("Fetching Data - 1....");
//     await getData(1);
//     console.log("Fetching Data-2....");
//     await getData(2);
//     console.log("Fetching Data-3....");
//     await getData(3);
//     console.log("Fetching Data-4....");
//     await getData(4);
// }


// IIFE - Immediately Invoked Function Expression
// IIFE is a function that is called immediately as soon as it is defined.

//using IIFE

(async function(){              //function without name
    console.log("Fetching Data - 1....");
    await getData(100);
    console.log("Fetching Data-2....");
    await getData(200);
    console.log("Fetching Data-3....");
    await getData(300);
    console.log("Fetching Data-4....");
    await getData(400);
})();




























