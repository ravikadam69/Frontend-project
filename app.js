const BASE_URL= "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/" 

const dropdown = document.querySelectorAll(".dropdown select")
const button=document.querySelector(" form button")
const fromcurr =document.querySelector(".from select")
const tocurr = document.querySelector(".to select")
const msg = document.querySelector(".msg")


for( let select of dropdown){
    for(currCode in countryList){
        let newOption = document.createElement("option")
        newOption.innerText= currCode
        newOption.value = currCode
        if(select.name==="From" && currCode ==="USD"){
            newOption.selected= "selected";
        }else if(select.name === "To" && currCode ==="INR"){
            newOption.selected="selected"
        }
        select.append(newOption)
    }
    select.addEventListener("change", (evt)=>{
        flag(evt.target)
    })
}

const updateexhangerate= async()=>{
    let ammount = document.querySelector(".amount input")
    let amtval = ammount.value;
    console.log(amtval)
    if(amtval==="" || amtval <1){
        amtval = 1
        ammount.value = "1"
    }

const URL =`${BASE_URL}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`
let response = await fetch(URL);
let data = await response.json()
let rate= data[tocurr.value.toLowerCase()]

let finalammt = amtval * rate
msg.innerText= `${amtval} ${fromcurr.value}= ${finalammt} ${tocurr.value}`
}



const flag = (element)=>{
   let currCode = element.value
   console.log(currCode)
   let countryCode = countryList[currCode]
   console.log(countryCode)
   let newSrc =`https://flagsapi.com/${countryCode}/flat/64.png`
   let img =element.parentElement.querySelector("img")
   img.src = newSrc
}

button.addEventListener("click", (evt)=>{
    evt.preventDefault();
    updateExhangeRate()
})

const updateExhangeRate = async()=>{
    let ammount = document.querySelector(".amount input")
    let amtval = ammount.value;
    console.log(amtval)
    if(amtval==="" || amtval <1){
        amtval = 1
        ammount.value = "1"
    }

const URL =`${BASE_URL}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`
let response = await fetch(URL);
let data = await response.json()
let rate= data[tocurr.value.toLowerCase()]

let finalammt = amtval * rate
msg.innerText= `${amtval} ${fromcurr.value}= ${finalammt} ${tocurr.value}`
}

window.addEventListener("load", ()=>{
    updateExhangeRate()
})