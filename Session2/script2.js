console.log("Executed!!!");

let points = 1000;
let logged = true;

if(logged) {
    console.log("Welcome");
} else {
    console.log("Please Log in to the system");
}

if(points >= 500) {
    console.log("You Won!!!");
} else {
    console.log("Game over!!!");
}

// logical operators && (AND) || (OR)

let hour  = 9;
if(hour > 8 && hour <= 12) {
    console.log("Buenos Dias // Goog Morning");
} else if (hour > 12 && hour < 18) {
    console.log("Buenas tardes // Good afternoon");
} else if(hour > 18 && hour <= 24){
    console.log("Buenas Noches // Good night");
} else {
    console.log("Invalid hour");
}

let userName = "Ivan";
let userPass = "1234";

var user = prompt("Enter user name: ");
var pass = prompt("Enter passwaord: ");

if(user == userName && pass == userPass) {
    console.log("Welcome to the system.");
    welcome(userName);
} else {
    console.log("The info isn't correct.");
}

function welcome (name) {
    alert("Welcome to the system " + name)
}

function sum(a, b) {
    console.log(`Sum ${a} + ${b} = ${a + b}`);
}
function mul(a, b) {
    console.log(`Mult ${a} * ${b} = ${a * b}`);
}
function div(a, b) {
    console.log(`Div ${a} / ${b} = ${a / b}`);
}
function sub(a, b) {
    console.log(`Sub ${a} - ${b} = ${a - b}`);
}

function multiplicationTable(number) {
    console.log(`********** Table of ${number} **********`);
    for(var i = 1 ; i < 11 ; i++) {
        console.log(`${number} - ${i} = ${number * i}`);
    }
    console.log(`****************************************`);
}
sum(5, 9);
sub(9, 8);
mul(5, 2);
div(12, 4);
multiplicationTable(2);

