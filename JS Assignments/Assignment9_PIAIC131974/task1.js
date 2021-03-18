/*
## JS chapter 35 to 38
Java-script assignments chapter 35 to 38

1. input value from user in String ```var inputValue="cloUd naTive computinG"```
2. Convert every first letter of the content in Capitalize case. ```inputValue="Cloud Native Computing"```
```use Function```
3. print value in console.log() ```console.log(inputValue) | check result in browser console```

#### Understand this logic

var value= multiply(4,3,6);

console.log("value", value);   // ```The result is ?```

function add(a, b){
	var z= a+b;
	return z;
};

function multiply(a, b, c){
	var z= a* add(b, c);
	return z;
};

console.log("course", course);   // ```The result is ?```
console.log("z", z);   // ```The result is ?```

var course="cloud native computing";
*/
var userInput = prompt ("Enter Some Text").toLowerCase().split(" ");

function titleCase(string) {
	//return string.charAt(0).toUpperCase() + string.slice(1);
    for (var i = 0; i < string.length; i++) {
        string[i] = string[i].charAt(0).toUpperCase() + string[i].substring(1);     
    }
    return string.join(' '); 
}

console.log(titleCase(userInput));