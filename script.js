// to create a simple calculator we need at minimun 4 funtion 
/* we need 4 funtion to create a simple calculator we can add more later
add
subtract
multiply
divide
*/

const textDisplay = document.querySelector(".display-text");
const container = document.querySelector(".container");

// CONSTANTS 

const MAX_NUMBERS = 10;


let currentNumber = [];
let previousNumber = "";
let calculationObject = {
    "plus": [],
    "minus":[],
    "divide": [],
    "mutiply":[],
};

container.addEventListener("click" , (e) => {
    e.preventDefault();

    const userSelection = e.target.value

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
            break;
        case "equals":
        
            break;
        case "clear":
            clear()
            break;

    }
})

function add (...nums) {

    return nums.reduce((accumulator, current) => {
        accumulator += current;
    }, 0)

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


