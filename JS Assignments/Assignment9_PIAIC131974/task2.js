/*
## JS chapter 35 to 38
Java-script assignments chapter 35 to 38

#### Second Assignment
1. User input value in Number through prompt ```Example value=5```
2. Factorialize a Number ```use Function```
3. print value in console.log() ``` console.log(value); the result is 120```
*/

var userNum = +prompt ("Enter a number");

function factorial (n) {
    if (n <= 1) {
        return 1; 
    } else {
        return n * factorial (n-1);  
    }
}
console.log (factorial (userNum));