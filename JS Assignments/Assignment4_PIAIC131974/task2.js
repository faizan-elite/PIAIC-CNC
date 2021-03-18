/*
## JS chapter 10 to 14
Java-script assignments chapter 10 to 14

#### Second Assignment - Make a Percentage Calculator

1. Get the 5-course number from the user```for example course1 is 70```
var totalMarks = 500
2. Calculate the total percentage ``` formula:  obtainedMarks * 100/ totalMarks ```
3. print output in alert.
*/

var result1 = +prompt ("What is your in first course?");
var result2 = +prompt ("What is your in second course?");
var result3 = +prompt ("What is your in third course?");
var result4 = +prompt ("What is your in fourth course?");
var result5 = +prompt ("What is your in fifth course?");
var obtainedMarks = result1 + result2 + result3 + result4 + result5;
var totalMarks = 500;
var totalPercentage = obtainedMarks * 100 / totalMarks;
alert ("Your overall percentage is: " + totalPercentage + " %");