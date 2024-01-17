const baseURL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const amount = document.querySelector(".amount input");
const toCurr = document.querySelector(".to select");
const fromCurr = document.querySelector(".from select");
const msg = document.querySelector(".msg");

for(let select of dropdown){
    for(let currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name==="from" && currCode==="USD"){
            newOption.selected="currCode";
        }else if(select.name==="to" && currCode==="INR"){
            newOption.selected="CurrCode";
        }
        select.append(newOption);
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
}

window.addEventListener("load",()=>{
    updateExchange();
})

const updateFlag = (element)=>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    updateExchange();
})

const updateExchange = async ()=>{
    let amtVal = amount.value;
    if(amtVal==="" || amtVal<1){
        amtVal=1;
        amount.value="1";
    }
    let url = `${baseURL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    let rate = data[toCurr.value.toLowerCase()];
    // console.log("Rate =",rate);
    // console.log("Amount =",amount.value);
    
    let finalAmt = rate*amtVal;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmt} ${toCurr.value}`;
}


















