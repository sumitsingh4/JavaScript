// DOM - Document Object Model

//Window object - represents an open window in a browser; it's browser's object (not javascript's) and is automatically created by browser
// it's a global object with lots of properties and methods

// console.log("Hello");
// window.console.log("Hello123");
// window.alert("Welcome")

//DOM - when a webpage is loaded, the browser creates a DOM of the page; basically it is way to access HTML in javacsript
//DOM is used for dynamic changes/manipulations in webpage - at run time without changing the HTML/CSS  files
// console.dir(document) - to print object as document is an object (not element) 

//tree like structure - window -> document -> HTML -> (head(meta,meta,title,link),body(div(img,h1,p,div),script))

// console.log(window);
// console.log(window.document);

// console.dir(window.document);
// console.dir(document); //window is global
// console.dir(document.body);
// console.log(document.body);
// console.dir(document.head);

// console.dir(document.body.childNodes[1]);


//DOM Manipulation

//selecting with id - document.getElementById("myId")

// console.dir(document.getElementById("sumit"));

//class - to put multiple elements in same category, we use class
// selecting with id

// console.dir(document.getElementsByClassName("heading"));

// selecting with tag

// console.dir(document.getElementsByTagName("p"));

//Query selector

//document.querySelector("myId/myClass/tag"); - returns first element

// let firstEl = document.querySelector("p");
// console.log(firstEl);

// let allEl = document.querySelectorAll("p");  //returns all elements
// console.log(allEl);

// let firstEl = document.querySelector(".heading");
// console.log(firstEl);

// let allEl = document.querySelectorAll(".heading"); 
// console.log(allEl);

//Properties

//DOM has 3 nodes - (text, comment and element); we work on element node only

//tagName

// let firstEl = document.querySelector("p");
// console.log(firstEl.tagName);

//innerText

// let firstEl = document.querySelector("p");
// console.log(firstEl.innerText);

// console.dir(document.body.firstChild);
// console.dir(document.querySelector("div").children);
// console.log(document.querySelector("div").children);

// let div = document.querySelector("div");
// console.dir(div);
// console.dir(div.innerText);
// console.dir(div.innerHTML);
// console.dir(div.textContent);


//Practice questions

//Q1

// let heading = document.querySelector("h2");
// console.dir(heading.innerText);
// console.dir(heading.innerText=heading.innerText + " from Apna College students");

//Q2

// let div = document.querySelectorAll(".box");
// console.log(div);
// console.log(div[0]); 
// console.log(div[1]);  
// console.log(div[2]);    


// div[0].innerText="sumit1";
// div[1].innerText="sumit2";
// div[2].innerText="sumit3";


// let idx=1;
// for(let i of div){
//     // console.log(i);
//     console.log(i.innerText);
//     console.log(i.innerText=`sumit ${idx}`);
//     idx++;
// }


//Attributes
//getAttribute(attr);   //to get the attribute value
//setAttribute(attr,value);   //to set the attribute value th

// let div = document.querySelector("div");
// console.log(div);
// console.log(div.getAttribute("class"));
// console.log(div.getAttribute("name"));

// let para = document.querySelectorAll("p");
// console.log(para[1]);
// console.log(para[1].getAttribute("class"));

// let para1 = para[1].setAttribute("class","sumit");
// console.log(para1);  //changes seen in Elements, not in console

//style 
//node.style  - we can make changes in HTML & CSS via javaScript

// let div = document.querySelector("div");
// console.log(div);
// console.log(div.style);
// div.style.backgroundColor = "red";
// div.style.fontSize = "30px";
// div.innerText = "Hello!";

//insert elements

//let el = document.createElement("div");

//node.appnend(el) //adds at the end of node(inside)
//node.prepend(el) //adds at the start of node(inside)
//node.before(el) //adds before the node(outside)
//node.after(el) //adds after the node(outside)

// let newButton = document.createElement("button");
// newButton.innerText="click here!";
// console.log(newButton.innerText);

// let div = document.querySelector("div");
// div.append(newButton);

// let div = document.querySelector("div");
// div.prepend(newButton);

// let div = document.querySelector("div");
// div.before(newButton);

// let div = document.querySelector("div");
// div.after(newButton);

// let para = document.querySelector("p");
// para.after(newButton);

// let newHeading = document.createElement("h4");
// newHeading.innerText="This is new heading";
// console.log(newHeading.innerText);

// let h4 = document.querySelector("body");
// h4.append(newHeading); 

// let h4 = document.querySelector("p");
// h4.prepend(newHeading); 

//delete element
//node.remove();  // removes the node

// let para = document.querySelector("p");
// para.remove();

// let heading = document.querySelector("h1");
// heading.remove();

// MDN Document - appendChild() ; removeChild()


//Practice questions

//Q1

// let newBttn = document.createElement("button");
// newBttn.innerText = "Click ME"; 
// newBttn.style.backgroundColor = "red"; 
// newBttn.style.color = "white"; 

// let firstEl = document.querySelector("body");
// firstEl.prepend(newBttn);

//Q2

// let newPara = document.querySelector("p");
// newPara.classList.add("content");

























































