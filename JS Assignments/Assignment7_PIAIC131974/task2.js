/*
## JS chapter 21 to 30
Java-script assignments chapter 21 to 30

#### Second Assignment 

1. input value from user in String ```var inputValue="cloUd naTive computinG"```
2. Convert every first letter of the content in Capitalize case. ```inputValue="Cloud Native Computing"```
3. print value in console.log() ```console.log(inputValue) | check result in browser console```
*/

var user_txt = prompt ("Enter a some text:");
var user_txt = user_txt.toLowerCase();
var text_split = user_txt.split(" ");
var titleCase = "";
for (var i = 0; i < text_split.length; i++) {
    text_split[i] = text_split[i].charAt(0).toUpperCase() + text_split[i].slice(1);
    if (i == 0) {
        titleCase = titleCase + text_split[i];
    }
    else {
        titleCase = titleCase + " " + text_split[i];
    }
}
console.log(titleCase);