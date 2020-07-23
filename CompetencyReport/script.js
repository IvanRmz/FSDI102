
function start(){
    let num1 = Number(prompt("Insert first number:"));
    let num2 = Number(prompt("Insert second number:"));
    calculate(num1, num2);
}

function calculate(num1, num2) {
    console.log("~~~~~~~~~~~~~~~~~~~~~~~");
    sum(num1, num2);
    sub(num1, num2);
    mul(num1, num2);
    div(num1, num2);
}

function sum(num1, num2) {
    console.log("Sum function");
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
}


function sub(num1, num2) {
    console.log("Substract function");
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
}


function mul(num1, num2) {
    console.log("Multiplication function");
    console.log(`${num1} * ${num2} = ${num1 * num2}`);
}


function div(num1, num2) {
    console.log("Divition function");
    console.log(`${num1} / ${num2} = ${num1 / num2}`);
}
