//Collection of items - Arrays are mutable

// let marks = [23, 45, 67, 68, 78];
// console.log(marks);
// console.log(typeof(marks));
// console.log(marks[0]);
// console.log(marks.length);

// console.log(marks);
// console.log(marks[0]=43);
// console.log(marks);


// let name = ["Sumit", "Nikhil", "Saurav", "Anuj", "Vishal", "Manish"];
// console.log(name);
// console.log(name[0]="singh");
// console.log(name);
// console.log(typeof(name));
// console.log(name[0]);
// console.log(name.length);

//Looping over an array

// let marks = [23, 45, 67, 68, 78];

//for loop
// for(let i=0;i<marks.length;i++){
//     console.log(marks[i]);
// }

//for-of loop

// for(let i of marks){
//     console.log(i);
// }

// let cities = ["delhi", "gurgaon", "mumbai", "noida", "hyderabad"];

// for(let i of cities){
//     console.log(i.toUpperCase());
// }

//Practice questions
//Q1

// let marks = [23, 45, 67, 68, 78];

// let sum=0;
// for(let i=0;i<marks.length;i++){
//     sum=sum+marks[i];
// }
// console.log("Average marks is: ",sum/marks.length);

// let sum=0;
// for(let i of marks){
//     sum+=i;
// }
// console.log("Average marks is:",sum/marks.length);
// console.log(`Average marks is: ${sum/marks.length}`);

//Q2 - 10% offer on each item

// let prices = [250, 645, 300, 900, 50];
// console.log(prices);

// for(let i=0;i<prices.length;i++){
//     offer=prices[i]*(10/100);
//     prices[i]-=offer;
    
// }
// console.log("Prices after offer");
// console.log(prices);

//using for-of loop
// let i=0;
// for(let val of prices){
//     let offer=val*0.1;
//     prices[i]-=offer; 
//     console.log(`Values at index ${i} after offer is ${prices[i]}`);
//     i++; 
// }
// console.log(prices);


//Array methods/functions 

//push() - add to end

// let marks = [78, 87, 98, 97, 65, 58];
// console.log(marks);
// console.log(marks.length);
// marks.push(100,79,45);
// console.log(marks);
// console.log(marks.length);

// let name = ["Sumit", "Nikhil", "Saurav"];
// console.log(name);
// name.push("Anuj","Manish");
// console.log(name);

//pop() - delete from end & return

// let marks = [78, 87, 98, 97, 65, 58];
// console.log(marks);
// let deletedItem=marks.pop();
// console.log("Deleted value is:",deletedItem);
// console.log(marks);

//toString() - to convert an array to string

// console.log(marks);
// console.log(marks.toString());
// console.log(marks); //no change in original array

//concat() - join multiple arrays and returns result

// let name = ["sumit", "nikhil", "saurav", "anuj", "manish"];
// let fruits = ["mangoes", "apple", "guava", "banana"];
// let cities = ["delhi", "mumbai", "noida"];

// console.log(name);
// console.log(fruits);
// console.log(name.concat(fruits,cities));
// console.log(name); // no change in actual array
// console.log(fruits); // no change in actual array
// console.log(cities); // no change in actual array

//unshift() - add to start

// let name = ["sumit", "nikhil", "saurav", "anuj", "manish"];
// console.log(name);
// name.unshift("rohit");
// console.log(name);

// shift() - delete from start & return

// let val=name.shift();
// console.log("deleted:",val);
// console.log(name);

//slice() - returns a piece of array

// let name = ["sumit", "nikhil", "saurav", "anuj", "manish"];
// console.log(name);
// console.log(name.slice(2,3));
// console.log(name.slice(2,)); //end index empty - till end

//splice() - change original array(add, remove, replace)
//splice(startIdx, deleteCount, newElement1...)

// let name = ["sumit", "nikhil", "saurav", "anuj", "manish"];
// console.log(name);
// name.splice(1,3,"rahul","mohit","arvind");
// console.log(name);

// let num = [1,2,3,4,5,6,7,8,9];
// console.log(num);
// console.log(num.splice(3));
// console.log(num);
// num.splice(2,3,10,11,12);
// console.log(num);

// num.splice(2,0,101); //using splice() to add element without deleting any element  
// console.log(num);

//delete element using splice()

// num.splice(3,1);
// console.log(num);

//replace using splice()

// num.splice(3,1,100);
// console.log(num);


//Practice question

// let companies = ["Bloomberg", "Microsoft","Uber","Google","IBM","Netflix"];
// console.log(companies);
// console.log(companies.shift());
// console.log(companies);

// companies.splice(2,1,"Ola");
// console.log(companies);

// companies.push("Amazon");
// console.log(companies);















































