//Prototypes in JS - a JS object is an entity having state and behaviour (properties & method)
//JS objects have a special property called prototype
//we can set prototype using __proto__

// note - if object & prototype have same method, then object's method will be used

// const student = {
//     name:"sumit",
//     rollNo:29,
//     marks:78,
//     cgpa:7.8,
//     printMarks: function () {
//         return this.marks; //this.marks = student.marks
//     },
// };
// console.log("Marks -",student.printMarks());
// console.log(`Name - ${student.name}`);


// const employee = {
//     calcTax(){
//         console.log("Tax rate is 10%");
//     },

    // calcTax1: function (){               //another way to write function
    //     console.log("Tax rate is 20%");
    // },
// }

// const sumit = {
//     salary: 60000,
//     calcTax(){
//         console.log("Tax rate is 20%");
//     }
// }

// const anuj = {
//     salary: 50000,
// }

// const manish = {
//     salary: 70000,
// }

// sumit.__proto__=employee;
// anuj.__proto__=employee;
// manish.__proto__=employee;


//Classes - a program-code template for creating objects
//These objects will have same state(variables) & some behaviour(functions) inside it

// class myClass{
//     constructor(){...}
//     myMethod(){.....}
// }

// let myObj = new MyClass();


// class ToyotaCar{
//     start(){
//         console.log("Start");
//     }

//     stop(){
//         console.log("stop");
//     }

//     setBrand(brand){
//         this.brand = brand;
//     }
// }

// let fortuner = new ToyotaCar();
// fortuner.setBrand("Fortuner");
// let lexus = new ToyotaCar();
// lexus.setBrand("Lexux");


//Constructor - constructor() method is: 1)automatically invoked by new, 2)initializes object

// class ToyotaCar{
//     constructor(brand,mileage){
//         console.log("Creating new object");
//         this.brand=brand;
//         this.mileage=mileage;
//     }
//         start(){
//             console.log("Start");
//         }
    
//         stop(){
//             console.log("stop");
//         }
//     }
    
// let fortuner = new ToyotaCar("Fortuner",34);
// console.log(fortuner);
// let lexus = new ToyotaCar(); //brand: undefined
// let lexus = new ToyotaCar("Lexus",43); 
// console.log(lexus);


//Inheritance - it is passing down properties & methods from parent class to child class

//class Parent{

// }

// class Child extends Parent{

// }

//Note: if child and parent have same method, child's method will be used [Method overriding]

// class student{
//     printName(){
//         console.log("Name is Sumit Singh");
//     }
// }

// class student1 extends student{
//     printMarks(marks){
//         console.log("marks -",marks)
//     }
// }

// let obj = new student1();
// obj.printMarks(56);

// class Parent{
//     hello(){
//         console.log("Hello!");
//     }
// }

// class Child extends Parent{
// }

// let obj = new Child();

// class Person{
//     constructor(){
//         this.species="Homo sapiens";
//     }

//     eat(){
//         console.log("Eat");
//     }

//     sleep(){
//         console.log("Sleep");
//     }

//     work(){
//         console.log("Do nothing");
//     }
// }

// class Engineer extends Person{
//     work(){
//         console.log("Solves problem, builds something");
//     }
// }

// class Doctor extends Person{
//     work(){
//         console.log("Treats patients");
//     }
// }

// let sumit = new Engineer();
// let nikhil = new Doctor();
// let p1 = new Person();
// let e1 = new Engineer();


//super keyword - used to call the constructor of its parent class to access the parent's properties and methods

//super(args)  //calls parent's constructor
//super.parentMathod(args)

// class Person{
//     constructor(name){
//         this.species="Homo sapiens";
//         this.name=name;
//     }

//     eat(){
//         console.log("Eat");
//     }
// }

// class Engineer extends Person{
//     constructor(name){
//         super(name);  //to invoke parent class constructor
// }
//     work(){
//         super.eat();
//         console.log("Solves problem, builds something");
//     }
// }

// let enggObj = new Engineer("Sumit");


//Practice questions

//Q1

// let data = "Sensitive data";

// class user{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }
//     viewData(){
//         console.log("Website data -",data);
//     }
// }

// let userObj = new user("Sumit","Sumit@gmail.com");
// let userObj1 = new user("nikhil","nikhil@gmail.com");


//Q2

// class Admin extends user{
//     constructor(name,email){
//         super(name,email);
//     }
//     editData(){
//         data = "New - Highly Sensitive data";
//     }
// }

// let admin = new Admin("Admin","admin@gmail.com");
// console.log(data);
// admin.editData();
// console.log(data);

// Error handling
// try-catch

// try{

//    Code...

// } catch(err){            //err is the error object

//     ...handling error    
// }


let a =10;
let b = 20;

console.log("a =",a);
console.log("b =",b);
console.log("a+b =",a+b);
console.log("a-b =",a-b);

try{
    console.log("a+b =",a+c);  //error
} catch(err){
    console.log(err);
}

console.log("a%b =",a%b);
console.log("a*b =",a*b);
console.log("a/b =",a/b);




























