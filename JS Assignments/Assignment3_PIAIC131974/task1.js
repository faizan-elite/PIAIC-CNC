/*
## JS chapter 9
Java-script assignments chapter 9

1. input a value from user ```for example firstName is "Ameen"```
1. input a second value from user ```for example lasName is "Alam"```
3. input a third value from user ```for example age is "20"```

4. print meassage in alert() ```Hello Ameen Alam, You are 20 years old``` 
*/

var firstName = prompt ("What is your First Name ?");
var lastName = prompt ("What is your Last Name ?");
var age = +prompt ("What is your age?");
alert ("'''Hello " + firstName + " " + lastName + ", you are " + age + " years old'''");