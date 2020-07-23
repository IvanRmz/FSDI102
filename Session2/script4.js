// write a JavaScript program that accept two integers and display the larger
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


//write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "FizzBuzz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

function iteration() {
    for(var i = 1 ; i <= 100 ; i++ ) {
        if( i%3 == 0 && i%5 ==0) {
            console.log("FizzBuzz");
        } else if(i%3 == 0) {
            console.log("Fizz");
        } else if(i%5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

iteration();