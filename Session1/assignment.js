var productName = prompt("Insert Product's name: ");
var priceOfProduct = prompt("Price of the product: ");
var quantityOfProduct = prompt("Quantity of the product: ");

console.log ("Product: " + productName);
console.log ("Price: $" + priceOfProduct);
console.log ("Quantity: " + quantityOfProduct);
console.log ("------------------------ ");

var subtotal = Number(quantityOfProduct) * Number(priceOfProduct);
var tax = subtotal * 0.16;
console.log ("Subtotal: ~ $" + subtotal);
console.log ("Tax: ~~~~~~ $" + tax);

var total = subtotal + tax;
console.log ("------------------------ ");
console.log ("Total: ~~~~ $" + total);