const display = document.getElementById("display");
function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value ="";
}

function calculate(){
    display.value =eval(1+2+3);
}