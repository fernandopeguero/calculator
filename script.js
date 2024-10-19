"use strict";

const textDisplay = document.querySelector(".display-text");
const container = document.querySelector(".container");

// CONSTANTS 

const MAX_NUMBERS = 10;


let currentNumber = [];
let previousNumber = [];
let operator = "";


container.addEventListener("click" , (e) => {
    e.preventDefault();

    const userSelection = e.target.value.trim()

    console.log(userSelection)

    switch(userSelection) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9": 
         if (currentNumber.length < MAX_NUMBERS) {
                currentNumber.push(userSelection);
 
            }

            textDisplay.textContent = currentNumber.join("");
           
        break;
        case "backspace":
            if(currentNumber.length > 0){
                currentNumber.pop();
            }
            textDisplay.textContent = currentNumber.length ? currentNumber.join("") : currentNumber.length;
        break;
        case "plus":
           previousNumber = [...currentNumber];
           currentNumber = [];
           textDisplay.textContent = currentNumber.length;
           operator = "+";
            break;
        case "equals":
            operate()
            break;
        case "clear":
            clear()
            break;

    }
})

function add (first , second) {

    return first + second

}

function substract () {

}

function multiply () {

}

function divide () {
    
}

function clear () {
    currentNumber = []
    textDisplay.textContent = currentNumber.length;
}


function operate() {

    if(currentNumber.length === 0 || previousNumber.length === 0) return;

    let total = 0;
    switch(operator) {
        case "+":
            total = add(Number(currentNumber.join("")), Number(previousNumber.join("")))
            break;
    }

    currentNumber = [];
    previousNumber = [];
    textDisplay.textContent = total
}
