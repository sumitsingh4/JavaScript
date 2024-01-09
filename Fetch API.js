//Fetch API - it provides an interface for fetching (sending/receiving) resources.
//It uses 'Request' and 'Response' objects.
//The fetch() method is used fetch a resource (data).

// let promise = fetch(url,[options])

let url = "https://cat-fact.herokuapp.com/facts";
let catFact = document.querySelector("#fact");
let btn = document.querySelector("#btn");

// const getFacts = async ()=>{
//     console.log("Fetching data...");
//     let response = await fetch(url);           //GET request
//     console.log(response);   //JSON format
//     let data = await response.json();
//     console.log(data);
//     console.log(data[0].text);
//     catFact.innerText = data[0].text;
//     catFact.innerText = data[1].text;
//     catFact.innerText = data[2].text;

//     catFact.style.color = "white";

    // console.log(data[0].type);
    // console.log(data[0].updatedAt);
    // console.log(data[0].user);
    // console.log(data[0].used);
    // console.log(data[0].status);
// }

// btn.addEventListener("click",getFacts);


// using promise chain

function getData(){
    fetch(url).then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
        catFact.innerText = data[4].text;
    })
}

btn.addEventListener("click",getData);

// AJAX - is Asynchronous JS & XML 
// XML - data format used earlier
// JSON - is JS object notation (data format used nowadays)
// json() method - returns a second promise [first promise is already returned by fetch()] that resolves with the result of parsing (changing data format) the response body text as JSON. (Input is JSON, Output is JS object)

//25:17
























