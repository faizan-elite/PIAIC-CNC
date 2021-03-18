/*
## JS chapter 39 to 42
Java-script assignments chapter 39 to 42

-----------------------
#### Make a Percentage Calculator

1. Get the 5-course number from the user```for example course1 is 70```
var totalMarks = 500
2. Calculate the total percentage ``` formula:  obtainedMarks * 100/ totalMarks ```
3. Calculate the grade ```use switch case```
``` Grade A+ 90% to 100% , Grade A 75% to 89% , Grade B 60% to 74% , Grade C 45% to 60% , Grade D 30% to 44% Grade F 0% to 29%```
4. print output in alert.
*/

var result1 = +prompt ("What are your marks in first course?");
var result2 = +prompt ("What are your marks in second course?");
var result3 = +prompt ("What are your marks in third course?");
var result4 = +prompt ("What are your marks in fourth course?");
var result5 = +prompt ("What are your marks in fifth course?");
var obtainedMarks = result1 + result2 + result3 + result4 + result5;
var totalMarks = 500;
var totalPercentage = obtainedMarks * 100 / totalMarks;
var grade;
switch (true) {
    case totalPercentage >= 90 && totalPercentage <= 100:
            grade = "A+"
            break;
    case totalPercentage >= 75 && totalPercentage <= 89:
            grade = "A"
            break;
    case totalPercentage >= 60 && totalPercentage <= 74:
            grade = "B"
            break;
    case totalPercentage >= 45 && totalPercentage <= 59:
            grade = "C"
            break;
    case totalPercentage > 30 && totalPercentage <= 44:
            grade = "D"
            break;
    default:
        grade = "F"
}
alert (grade);
