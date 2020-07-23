/**
 * Write a JavaScript program which compute, the averege marks of the following students. Then, this averege is used to determinate the corresponding grade. 
 * Student Name  -  marks
        David - 80
        Vinoth - 77 
        Divya - 88
        Ishitha - 95
        Thomas - 68


        The grades are computed as follows:
        Range - grade
        <60 - F
        <70 - D
        <80 - C
        <90 - B
        <100 - A
 * 
*/
var students = ["David", "Vinoth", "Divya", "Ishitha", "Thomas"];
var marks = [80,77,88,95,68];
var total = 0

console.log(`Student name   -   Mark`);
for(var i = 0 ; i < marks.length ; i++) {
    console.log(`     ${students[i]}   -   ${marks[i]}`);
    total+=marks[i];
}

var average = total / marks.length;

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
console.log(`Total sum of students marks: ${total}`);
console.log(`Total of students: ${marks.length}`);
console.log(`Average: ${average}`);

var msg = "The grade of the class is ";
if(average < 60) {
    msg+="F";
} else if(average < 70) {
    msg+="D";
} else if(average < 80) {
    msg+="C";
} else if(average < 90) {
    msg+="B";
} else {
    msg+="A";
}
console.log(msg);