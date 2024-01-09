//Events - the change in the state of an object
//events are fired to notify code of "interesting changes" that may affect code execution

//mouse events (click, double click, etc.)
//keyboard events (keypress, keyup, keydown, etc.)
//form events (submit, etc.)
//print event and many more..

//node.event = () =>{
//handle here
// }

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () =>{
//     console.log("Button1 was clicked");
//     let a=10;
//     a++;
//     console.log(a);
// }

// let div = document.querySelector("div");

// div.onmouseover = () =>{
//     console.log("You are inside div");
// }

//Event object - special object that has details about the event
//all event handlers have access to the Event Object's properties and methods

//node.event = (e) =>{
    //handle here
// }

// e.target, e.type, e.clientX, e.clientY

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (e) =>{
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX);
//     console.log(e.clientY);
// }

// let div = document.querySelector("div");

// div.onmouseover = (e) =>{
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX);
//     console.log(e.clientY);
// }

// Event listeners

//node.addEventListener(event,callBack);
//node.removeEventListeners(event,callBack);
//callBack reference should be same to remove

//we can apply multiple work on same event through event listeners

// let btn1 = document.querySelector("button"); 

// btn1.addEventListener("click",(e)=>{
//     console.log("Button1 was clicked-handler1");
//     console.log(e);
//     console.log(e.type);
// })

// btn1.addEventListener("click",(e)=>{
//     console.log("Button1 was clicked - handler2");
//     console.log(e);
//     console.log(e.type);
// })


// let btn1 = document.querySelector("button"); 

// btn1.addEventListener("click",(e)=>{
//     console.log("Button1 was clicked - handler1");
// })

// const handler2 = ()=>{
//     console.log("Button1 was clicked - handler2");
// }

// btn1.addEventListener("click",handler2);

// btn1.addEventListener("click",(e)=>{
//     console.log("Button1 was clicked - handler3");
// })

// btn1.addEventListener("click",(e)=>{
//     console.log("Button1 was clicked - handler4");
// })

// btn1.removeEventListener("click",handler2);


//Practice questions

// let btn = document.querySelector("button");
// let mode = "light";

// btn.addEventListener("click",()=>{
//     if(mode==="light"){
//         mode="dark";
//         document.querySelector("body").classList.add("dark");
//         document.querySelector("body").classList.remove("light");
//         // document.querySelector("button").style.backgroundColor="yellow";
//         // document.querySelector("h1").style.color="green";
//     } else{
//         mode="light";
//         document.querySelector("body").classList.add("light");
//         document.querySelector("body").classList.remove("dark");
//         // document.querySelector("button").style.backgroundColor="red";
//         // document.querySelector("h1").style.color="black";
//     }
//     console.log(mode);
// })



// let div = document.querySelector("div");

// div.addEventListener("mouseover",()=>{
//     console.log("You are inside div");
// })









































