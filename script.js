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
            setOperation("+");
            break;
        case "minus":
           setOperation("-");
            break;
        case "multiply":
            setOperation("*");
            break;
        case "divide":
            setOperation("/");
            break;
        case "dot":
            if(!currentNumber.includes(".")){
                currentNumber.push(".");
            }
            textDisplay.textContent = currentNumber.join("");
            break;
        case "equals":
            operate()
            break;
        case "toggle":
            if(operator === "+"){
                operator = "-";
            } else if (operator === "-"){
                operator = "+";
            }
            break;
        case "clear":
            clear()
            break;

    }
})

function add (first , second) {

    return (first + second).toFixed(1);

}

function substract (first, second) {
    return (first - second).toFixed(1);
}

function multiply (first, second) {
    return (first * second).toFixed(1);
}

function divide (first, second) {
    return (first / second).toFixed(1);
}

function clear () {
    currentNumber = []
    previousNumber = []
    operator = ""
    textDisplay.textContent = currentNumber.length;
}


function operate() {

    if(currentNumber.length === 0 || previousNumber.length === 0) return;

    let total = 0;
    switch(operator) {
        case "+":
            total = add(Number(previousNumber.join("")),Number(currentNumber.join("")));
            break;
        case "-":
            total = substract(Number(previousNumber.join("")),Number(currentNumber.join("")));
        break;
        case "/":
            total = divide(Number(previousNumber.join("")),Number(currentNumber.join("")));
            break; 
        case "*":
            total = multiply(Number(previousNumber.join("")),Number(currentNumber.join("")));
            break;
    }

    currentNumber = [total];
    previousNumber = [];
    operator = "";
    textDisplay.textContent = total
}

function setOperation (simbol) {
    previousNumber = [...currentNumber];
    currentNumber = [];
    textDisplay.textContent = currentNumber.length;
    operator = simbol;
}