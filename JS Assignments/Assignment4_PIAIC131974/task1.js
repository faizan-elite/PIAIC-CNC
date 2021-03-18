/*
## JS chapter 10 to 14
Java-script assignments chapter 10 to 14

#### Make a Calculator
1. input a value from user ```for example num1 is 7```
1. input a second value from user ```for example num2 is 3```
3. input a third value from user ```for example sign is "+" or "-" or "*" or "/" or "%"```
4. print operation in alert() ```7-3 =4, or 7*3 =21, or 7/3 =2.3, or 7+3 =10 or 7%3 =1``` 

*/

var num1 = +prompt ("Enter a number");
var num2 = prompt ("Enter another number");
var operator = prompt ("Enter an operator + - * / or %");
var answer;

if (operator == "+") {
    answer = num1 + parseInt(num2);
    }   
else if (operator == "-") {
    answer = num1 - parseInt(num2);
    }
else if (operator == "*") {
    answer = num1 * parseInt(num2);
    }   
else if (operator == "/") {
    answer = num1 / parseInt(num2);
    }   
else if (operator == "%") {
    answer = num1 % parseInt(num2);
    }   
else { // Error Handling
    answer = "Invalid Inputs"
}

alert (num1 + " " + operator + " " + num2 + " = " + answer);
