console.log("Execute...");

var num = 10;
var name = "Ivan";
var student = true;

console.log(num);
console.log(name);
console.log(student);

// array = complex var

var numbers = [25,24,12,30,31,45,60];
// console.log(numbers);


console.log("The first number is: " + numbers[0]);
console.log("The number is: " + numbers[3]);
numbers[2] = 35;
var total = numbers[0] + numbers[3];
numbers[6] = total;
console.table(numbers);
console.log(total);



for(var i = 1 ; i < 11 ; i++) {
    console.log(`Number ${i}`); // template string
}

// travel the array

for(var j = 0 ; j < numbers.length ; j++) {
    console.log(numbers[j]);
}

var products = ["Computer" , "Speakers" , "Headset", "LG Mouse"];

//travel the array and display on the console the products.
for(var i = 0 ; i < products.length ; i++) {
    console.log(`The product ${i+1} ${products[i]}`);
}