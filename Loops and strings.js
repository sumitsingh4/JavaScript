//Loops - to execute a piece of code again and again

//For loop

// for(let i=1;i<=5;i++){
//     console.log("Sumit Singh");
// };
// console.log("Loop has ended")

//Calculate sum of first 5 numbers

// let num=5;
// let sum=0;
// for(i=1;i<=num;i++){
//     sum = sum + i;
// };
// console.log("Given number is: ",num);
// console.log("sum =",sum);

// for(let i=1;i<=5;i++){
//     console.log("i =",i);
// };
// console.log(i);  //Syntax error bcz scope of variable i is limited to for loop block only

//While loop

// let i=1;
// while(i<=5){
//     console.log("Value of   i =",i);
//     i++;
// };

//do-while loop - it will execute atleast once

// let i=1;
// do{
//     console.log("i =",i);
//     i++;
// }while(i<=5);

// for-of loop - helps in applying loop on arrays and strings

// let str="SumitSingh";
// let length=0;
// for(let i of str){
//     console.log("i =",i); //i is the iterator -> characters
//     length++;
    
// };
// console.log("length of the string is:",length);

// for-in loop - helps in applying loop on arrays and objects

// let student ={

//     fullName:"SumitSingh",
//     rollNo:23,
//     marks:89,
//     age:20,
//     cgpa:6.7,
//     isPass:true
// };
// for (let i in student){
//     console.log("Keys =",i, "Value =",student[i]);  //access key value pair
// }

//Practice questions
//Q1 - Even numbers

// total=0;
// for (let i=0;i<=100;i++){
//     if(i%2===0){
//         console.log("Number =",i);
//         total=total+1;
//     } 
// }
// console.log("Total =",total);

//Q2 - guessing number

// let number = 30;
// let i=prompt("Enter the number: ");
// console.log(i);

// while(i!=number){  //(!=) as prompt return string type and it doesn't match with number as we know (===) compares data type as well
//     i=prompt("Wrong number, Enter the number again: ");
// }
// console.log("Congratulations, you guessed the correct number i.e.",i);

//Strings - sequence of characters; represents texts - immutable

// let name = "SumitSingh";
// console.log(name);
// console.log(name.length);
// console.log(name[0]);
// console.log(name[1]);
// console.log(name[2]);
// console.log(name[3]);
// console.log(name[4]);

// Template Literals- String interpolation - Special string - used with `` symbol - embedded expressions in strings

// let tempLiteral=`This is a template literal`;
// console.log(typeof(tempLiteral));  //string

// let obj={
//     name:"pen",
//     price:188
// };
// let temLiteral=(`The cost of ${obj.name} is ${obj.price} rupees`); //using template literal - helps in writing separate things in one line without commas etc.
// console.log(temLiteral);
// console.log("The cost of",obj.name,"is",obj.price,"rupees");


// let tempLiteral=`This is a template literal ${1+2+3}`;
// console.log(tempLiteral);

//Escape characters - \n - next line; \t - tab space

// console.log("Sumit\nSingh");
// console.log("Sumit\tSingh");

// let str = "Sumit\tSingh";
// console.log(str);
// console.log(str.length);

//String Methods/functions - built-in functions to manipulate strings

// let str ="  sumit singh   ";
// console.log(str);
// console.log(str.toUpperCase());
// console.log(str.trim()); //removes white spaces from beginning and ending

// let str1 ="SUMIT SINGH";
// console.log(str1.toLowerCase());

// let str = "Welcome to JavaScript Coding ";
// let str1 = "Sumit Singh";
// let str2 = "good dayayayay";
// console.log(str.slice(0,6));
// console.log(str.slice());
// console.log(str.concat(str1));
// console.log("Hello everyone",str + str1);  //string concatanation
// console.log("Hello " + 123);
// console.log(str1.replace("Singh","Kumar")); //helps in searching value in string
// console.log(str2.replace("g","m"));
// console.log(str2.replace("da","os"));
// console.log(str2.replace("ay","zy"));
// console.log(str2.replaceAll("ay","zy"));

// console.log(str2.charAt(0));
// console.log(str2.charAt(1));
// console.log(str2.charAt(2));
// console.log(str2.charAt(3));

//Practice Questions
//Q1

// let name=prompt("Enter full name");
// console.log("Your Username is: @"+name+name.length);






























