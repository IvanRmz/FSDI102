
var  num1 = prompt("Insert first number: "); 
var  num2 = prompt("Insert second number: ");

function largerNumber (n1,n2){
    n1 = Number(n1);
    n2 = Number(n2);
    if(n1 > n2) {
        console.log(`${n1} is larger than ${n2}`);
    } else if (n2 > n1) {
        console.log(`${n2} is larger than ${n1}`);
    } else {
        console.log(`Both are the same number ${n1}`);
    }
}
largerNumber(num1, num2);