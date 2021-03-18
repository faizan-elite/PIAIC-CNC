/*
## JS chapter 18 19 20
Java-script assignments chapter 18 19 20

#### Make a TODO
Customize previous assignment "ch_15_16_17" with for loop...
*/

var user_input;
var courses=[];
var result=[];
var obtainedMarks = 0;
var totalMarks = 500;



for (var count = 0; count <= 4; count++) {
    user_input=prompt("Course "+(count+1)+" is: ");
    courses.splice(count,0,user_input);
    user_input="";
}
alert(courses);

for (var count = 0; count <= 4; count++) {
    user_input=+prompt("What are your marks in "+ courses[(count)]+" course: ");
    result.splice(count, 1, user_input);
    obtainedMarks = obtainedMarks + user_input
    user_input="";
}
var totalPercentage = (obtainedMarks / totalMarks) * 100;
alert ("Your overall percentage is: " + totalPercentage + " %");