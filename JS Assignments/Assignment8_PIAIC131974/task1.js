/*
## JS chapter 31 to 34
Java-script assignments chapter 31 to 34

1. input your name through prompt. 		
``` for example name is  "Ameen Alam" ```
2. input your DOB(date) through prompt. 	
``` for example date is  "24" ```
3. input your DOB(month) through prompt.	
``` for example month is  "05" ```
4. input your DOB(year) through prompt. 	
``` for example year is  "1999" ```

5. print meassage in console.log()
   ``` "Hello Ameen Alam, Good Morning, AfterNoon, Evening or Night" ```

6. print meassage in console.log()
   ``` "Your DOB is {in pakistan standard time format}" ```

7. print meassage in console.log()
   ``` "You are 20 years 7 Month 10 Days 19 Hours 20 Minutes 25 Seconds old" ```

   ``` "Your Age in Days 7510" ```

8. print meassage in console.log()
   ``` "How much time left in your next birthday? 161 days 4 hours 39 minutes 34 seconds" ```
    or
   ``` "happy Birth Day Ameen Alam.  Today is Your 20th Birthday" ```
*/



var input_name = prompt ("What is your name?");
var input_day = prompt ("What is your DOB (date)?");
var input_month = +prompt ("What month were you born (number)?");
var input_year = +prompt ("What year were you born?");
var DOB = new Date (input_month + ", " + input_day + " " + input_year);
var greeting;
var rightNow = new Date ();
var rightNowHrs = new Date().getHours();
var date_diff = rightNow.getTime() - DOB.getTime();
if (rightNowHrs >= 5 && rightNowHrs <= 11) {
   greeting = "Good Morning"
}
else if (rightNowHrs >= 12 && rightNowHrs <= 16) {
   greeting = "Good Afternoon"
}

else if (rightNowHrs >= 17 && rightNowHrs <= 19) {
   greeting = "Good Evening"
}
else (greeting = "Good Night");
console.log("Hello " + input_name + ", " + greeting);
console.log("Your DOB is " + DOB);

// YEAR
var DOB_currentYr = new Date (DOB.setFullYear(rightNow.getFullYear()))
years_diff = date_diff / (1000 * 60 * 60 * 24 * 365);
years_diff = Math.floor(years_diff);

// MONTHS
var months_remain;
if (rightNow.getMonth() > DOB.getMonth()) { // Birthday This Year. 
   months_remain = rightNow.getMonth() - DOB.getMonth();
}
else {
   months_remain = DOB.getMonth() - rightNow.getMonth();
}
var months_diff = 11 - months_remain;

// DAYS
var days_diff;
if (rightNow.getDate() > DOB.getDate()) {
   days_diff = rightNow.getDate() - DOB.getDate();
}
else {
   days_diff = DOB.getDate() - rightNow.getDate();
}

// HOURS
var hours_diff = Math.floor(rightNow.getHours());

// MINUTES
var minutes_diff = Math.floor(rightNow.getMinutes());

// SECONDS
var seconds_diff = Math.floor(rightNow.getSeconds());

console.log ("You are " + years_diff + " Years " + months_diff + " Months " + days_diff + " Days " + hours_diff + " Hours " + minutes_diff + " Minutes " + seconds_diff + " Seconds old")

daysToday = date_diff / (1000 * 60 * 60 * 24);
daysToday = Math.floor(daysToday);
console.log ("Your age in days " + daysToday)