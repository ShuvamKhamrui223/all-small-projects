/***** API related identifiers *****/
// Base URL
const baseURL = `https://api.currencybeacon.com/v1`;
// API key
const API_KEY = '17b585e706b8f746fd35027a41681196';

/***** Identifiers for Targeting required elements *****/
const list1 = document.getElementById('dropDown_convertFrom'),
    list2 = document.getElementById('dropDown_convertTo'),
    inputField = document.getElementById('inputField'),
    outputField = document.getElementById('outputField'),
    convertBtn = document.getElementById('convertBtn');

// Global variable declarations
let convert_to, convert_from;

/***** Event listeners *****/
window.addEventListener("DOMContentLoaded", populateCurrencies)

// inputField.addEventListener('blur', getAmount)
list1.addEventListener("change", e => convert_from = e.target.value)
list2.addEventListener("change", e => convert_to = e.target.value)
convertBtn.addEventListener("click", getAmount)

/***** Function declarations *****/
function getAmount(e) {
    let convertableValue = inputField.value;
    (convertableValue != '' && convertableValue > 0) ? convert(convertableValue) : alert("Please enter amount");
}

// 
function convert(convertableValue) {
    fetch(`${baseURL}/convert?api_key=${API_KEY}&from=${convert_from}&to=${convert_to}&amount=${convertableValue}`)
        .then(res => res.json())
        .then(data => outputField.value=data.response.value.toFixed(2))
}





// Function to get and populate currencies into a dropdown menu
function populateCurrencies() {
    fetch(`https://api.currencybeacon.com/v1/currencies?api_key=${API_KEY}&type=fiat`)
        .then(res => res.json())
        .then(data => {
            // converting an object into an array
            let fetchedData = Object.entries(data.response.fiats);
            // retrieve currency_name and currency_code and populate them into a separate dropdown list
            for (var i = 0; i < fetchedData.length; i++) {
                list1.innerHTML += `
                <option value="${fetchedData[i][1].currency_code}">${fetchedData[i][1].currency_name}</option>
            `;
                list2.innerHTML += `
                <option value="${fetchedData[i][1].currency_code}">${fetchedData[i][1].currency_name}</option>
            `;
            }
        })
}



/*
******** Better to write an URL with parameters to fetch ********

const API_URL=new URL(baseURL);
API_URL.searchParams.set('api_key',API_KEY)
API_URL.searchParams.set('from',convert_from)
API_URL.searchParams.set('to',convert_to)
API_URL.searchParams.set('amount',convertable_amount)

*/



/* 
// Code for sending notification
Notification.requestPermission()
    .then(permission => {
        if (permission === "granted") {
            const newNotification = new Notification("Testing notification", {
                body: "more info",
                tag: "testing"
            })
        } else {
            alert("You have denied to receive notification, please allow to receive")
        }
    })
    .catch(error => console.log(error))
 */