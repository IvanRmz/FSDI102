for(var i = 0 ; i < 10 ; i++) {
    if(i == 5) {
        console.log("Yeah");
    } else {
        console.log(i);
    }
}

let traveling = function (destination) {
    return "Traveling to " + destination;
}

let travel = traveling("Italy");
let travel2 = traveling("London");
console.log(travel);
console.log(travel2);