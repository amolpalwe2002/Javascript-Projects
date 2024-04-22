
const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;

    // display.value;
}

function clearDisplay(){

    display.value = null;

}

function calculate(){

    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "ERROR!";

        setTimeout(clearDisplay, 2000);
        
    }

}