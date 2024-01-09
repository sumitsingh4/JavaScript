// console.log("Sumit Singh");
// x=null;
// y=undefined;
// console.log(x);
// console.log(y);

// variables (in ES6)- let and const; let can be updated, can't be redeclared again and const neither be updated nor declared again

// let name = "Sumit Singh";
// console.log(name);
// name = "Nikhil Singh";
// console.log(name);

// const age = 34;
// console.log(age);
// age=38;
// console.log(age); /*can't be updated*/

// let a;
// a=10;
// console.log(a);

// const b;
// b=28; /*const must be initialized*/
// console.log(b);


// scope of variables

// {
//     let a=19;
//     console.log(a); /* scope of let is within block */
// }
// {
//     let a=180;
//     console.log(a);
// }

// Data types - primitive - 7 (number, string, boolean, undefined, null, BigInt, Symbol); Non-primitive (Objects-A collection of values) - Arrays and Functions

// isFollow=true;
// console.log(isFollow);
// let x;
// console.log(x);
// let y=null;
// console.log(y);

// Rarely used - BigInt and Symbol

// let x=BigInt("123");
// console.log(x);
// let y=Symbol("Sumit");
// console.log(y);

// Objects - Key value pair - generally declared with const

// const student = {
//     fullName:"Sumit Singh",
//     age:25,
//     CGPA:9.3,
//     isPass:true
// };      
// console.log(student);
// console.log(student["fullName"]);
// console.log(student["age"]); 
// console.log(student["CGPA"]);
// console.log(student["isPass"]);   
// console.log(student.fullName);
// console.log(student.age);
// console.log(student.CGPA);
// console.log(student.isPass);

// student["age"]=student["age"]+1;  /* we can update object key of const object */
// console.log(student.age);
// student["fullName"]="Nikhil Singh";
// console.log(student.fullName)

// Practice question

// const pen={
//     name:"Parker Jotter",
//     rating:5000,
//     offer:50,
//     price:270,
//     isDeal:true
// };
// console.log(pen)
// console.log(pen.name);
// console.log(pen.rating);
// console.log(pen.offer);
// console.log(pen.price);
// console.log(pen.isDeal);

// const profile={
//     userName:"@sumitsingh",
//     isFollow:false,
//     posts:45,
//     followers:300,
//     following:12,
//     bio:"Software engineer in Capgemini"
// };
// console.log(profile);
// console.log(typeof(profile.userName));
// console.log(typeof(profile.isFollow));
// console.log(typeof(profile.bio));
// console.log(typeof(profile.followers));

// Strings
// let x="sumit kumar"
// x=x+" singh "
// console.log(x)
// x=x+123
// console.log(x)





// var number = 76
// var str = "This is string"
// var marks = {
//     Sumit:67,
//     Anuj:10,
//     Manish:34
// }
// console.log(marks)
// console.log(number)
// console.log(str)

// let a = 10
// let b = "Sumit"
// console.log(typeof(a))
// console.log(typeof(b))

// let details = {
//     name:"sumit",
//     empid:34,
//     location:"gurgaon"
// }
// console.log(details)
// console.log(typeof(details))
// console.log(typeof(details.empid))

// var a=10
// let b=45


// console.log(a)
// console.log(b)
// console.log(typeof(a))
// console.log(typeof(b))

// const a=23
// console.log(a)
// console.log(typeof(a))

// const b=true
// console.log(typeof !true)
// console.log(typeof(b))

// let a="48"
// console.log(typeof(a))
// console.log(+a)
// console.log(typeof(+a))

// let a=0
// let b=45



// console.log(a||'ten')
// console.log(a??b??'ten')

// let a=0
// b=(a!==undefined&&a!==null)?a:"ten"
// console.log(b)

// let a=10
// switch (a){
//     case 10:
//         console.log("Sumit")
//         break
//     case 12:
//         console.log("Ajay")
// }

// let studentDetails = [2,"Sumit","Delhi","clothes"]
// console.log(studentDetails)
// studentDetails[1] = "Africa"
// console.log(studentDetails)

// for (i of studentDetails){
//     if (i=="Sumit"){
//     continue
//     }
//     console.log(i)
// }

// for(i=0;i<studentDetails.length;i++){
//     if(studentDetails[i]==="Delhi"){
//         continue
//     }
//     console.log(studentDetails[i])
// }

// studentDetails.forEach(function(item,index){
//     console.log(`${item} is present at ${index}` )
// })

// const sumit=studentDetails.map(function(item,x){
//     return(item + ' is present at ' +x)

// })
// console.log(sumit)


