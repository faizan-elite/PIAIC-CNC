/*
## JS chapter 21 to 30
Java-script assignments chapter 21 to 30

1. Take a input from user in number with decimal point ``` user input is 3.4```
2. Convert it into greater number ```Example: Math.ceil(3.4); to 4```
3. Declear a variable of string and assign some text ``` var text="This is my dummy text" ```
4. Slice the text into a new variable from 0 to the rounded number ```0 to 4;  Example: text.slice(0, 4)``` | ``` sliceText = This ```
5. Use for loop and concatination to reverse the sliced string; ```0==>4 ==> This ===> shiT ```
6. print value in alert ``` "shiT" ```
*/

var user_num = +prompt ("Enter a decimal number: ",3.4);
user_num = Math.ceil(user_num);
var text = "This is my dummy text";
var slice_text = text.slice(0,user_num);
var rev_text = "";
for (var char = slice_text.length - 1; char >= 0; char--) {
    rev_text = rev_text + text[char];
}
alert (rev_text);