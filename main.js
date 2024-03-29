// 1. Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38


var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Today is: " + daylist[day] + ".");
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour >= 12) ? " PM " : " AM ";
hour = (hour >= 12) ? hour - 12 : hour;
if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    } else {
        hour = 12;
        prepand = ' PM';
    }
}
if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    } else {
        hour = 12;
        prepand = ' AM';
    }
}
console.log("Current Time: " + hour + prepand + " : " + minute + " : " + second); 




// 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  


var side1 = 5; 
var side2 = 6; 
var side3 = 7; 
var s = (side1 + side2 + side3) / 2;
var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
console.log(area);


// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  



function leapyear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2016)); 
console.log(leapyear(2000)); 
console.log(leapyear(1700)); 
console.log(leapyear(1800)); 
console.log(leapyear(100));  




// 7. Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.  



console.log('--------------------');
for (var year = 2014; year <= 2050; year++) {
    var d = new Date(year, 0, 1);
    if (d.getDay() === 0) {
        console.log("1st January is being a Sunday  " + year);
    }
}
console.log('--------------------'); 



// 8. Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".  



var num = Math.ceil(Math.random() * 10);
console.log(num);
var gnum = prompt('Guess the number between 1 and 10 inclusive');
if (gnum == num)
    console.log('Matched');
else
    console.log('Not matched, the number was ' + gnum); 


    // 9. Write a JavaScript program to calculate the days left before Christmas.



    today = new Date();
var cmas = new Date(today.getFullYear(), 11, 25);
if (today.getMonth() == 11 && today.getDate() > 25) {
    cmas.setFullYear(cmas.getFullYear() + 1);
}  
var one_day = 1000 * 60 * 60 * 24;
console.log(Math.ceil((cmas.getTime() - today.getTime()) / (one_day)) +
    " days left until Christmas!"); 




    // 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
    // [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]



function cToF(celsius) {
    var cTemp = celsius;
      var cToFahr = cTemp * 9 / 5 + 32;
      var message = cTemp + '\xB0C is ' + cToFahr + ' \xB0F.';
      console.log(message);
  }
  
  function fToC(fahrenheit) {
    var fTemp = fahrenheit;
      var fToCel = (fTemp - 32) * 5 / 9;
      var message = fTemp + '\xB0F is ' + fToCel + '\xB0C.';
      console.log(message);
  }
    cToF(60);
    fToC(45); 


    // 12. Write a JavaScript program to get the website URL (loading page).  
   

alert(document.URL);



// 13. Write a JavaScript exercise to create a variable using a user-defined name.



var var_name = 'abcd';
var n = 120;
this[var_name] = n;
console.log(this[var_name]); 



// 14. Write a JavaScript exercise to get the filename extension.  



filename = "system.php";
console.log(filename.split('.').pop());
filename = "abc.js";
console.log(filename.split('.').pop());




// 15. Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.  



function difference(n) {
    if (n <= 13) {
        return 13 - n;
    } else {
        return (n - 13) * 2;
    }
}
console.log(difference(32));
console.log(difference(11)); 



// 16. Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.



function sumTriple(x, y) {
    if (x == y) {
      return 3 * (x + y);
    } else {
      return (x + y);
    }
  }
  console.log(sumTriple(10, 20));
  console.log(sumTriple(10, 10)); 



//   17. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19. 



function diff_num(n) {
    if (n <= 19) {
      return (19 - n);
    } else {
      return (n - 19) * 3;
    }
  }
  console.log(diff_num(12));
  console.log(diff_num(19));
    console.log(diff_num(22));
    


    // 18. Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.
    


function test50(x, y) {
    return ((x == 50 || y == 50) || (x + y == 50));
  }
  console.log(test50(50, 50));
  console.log(test50(20, 50));  
  console.log(test50(20, 20));
  console.log(test50(20, 30));



//   19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400



function testhundred(x) {
    return ((Math.abs(100 - x) <= 20) || (Math.abs(400 - x) <= 20));
  }
  
  console.log(testhundred(10));
  console.log(testhundred(90));
  console.log(testhundred(99));
  console.log(testhundred(199));
  console.log(testhundred(200));



//   20. Write a JavaScript program to check two given integers whether one is positive and another one is negative. 



function positive_negative(x, y) {
    if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
      return true;
    } else {
      return false;
    }
  }
  console.log(positive_negative(2, 2));
  
  console.log(positive_negative(-2, 2));
  console.log(positive_negative(2, -2));
  console.log(positive_negative(-2, -2)); 
  


//   21. Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.
  
  
  
function string_check(str1) {
    if (str1 === null || str1 === undefined || str1.substring(0, 2) === 'Py') {
      return str1;
    }
    return "Py" + str1;
  }  
  console.log(string_check("Python"));
  console.log(string_check("thon"));



//   22. Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.



function remove_character(str, char_pos) {
    part1 = str.substring(0, char_pos);
    part2 = str.substring(char_pos + 1, str.length);
    return (part1 + part2);
  }  
  console.log(remove_character("Python", 0));
  console.log(remove_character("Python", 3));
  console.log(remove_character("Python", 5)); 

  



//   23. Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.  




function first_last(str1) {
    if (str1.length <= 1) {
      return str1;
    }
    mid_char = str1.substring(1, str1.length - 1);
    return (str1.charAt(str1.length - 1)) + mid_char + str1.charAt(0);
  }
  console.log(first_last('a'));
  console.log(first_last('ab'));
  console.log(first_last('abc')); 





//   24. Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back. 





function front_back(str) {
    first = str.substring(0, 1);
    return first + str + first;
  }
  console.log(front_back('a'));
  console.log(front_back('ab'));
  console.log(front_back('abc')); 
  



//   25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.  





function test37(x) {
    if (x % 3 == 0 || x % 7 == 0) {
      return true;
    } 
    else {
      return false;
    }
  }
  console.log(test37(12));
  console.log(test37(14));
  console.log(test37(10));
  console.log(test37(11)); 




//   26. Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.





function front_back3(str) {
    if (str.length >= 3) {
      str_len = 3;
      back = str.substring(str.length - 3);
      return back + str + back;
    } else {
      return false;
    }
  }
  console.log(front_back3("abc"));
  console.log(front_back3("ab"));
  console.log(front_back3("abcd")); 
  
  



//   27. Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.




function start_spec_str(str) {
    if (str.length < 4) {
      return false;
    }
    front = str.substring(0, 4);
    if (front == 'Java') {
      return true;
    } else {
      return false;
    }
  }
  console.log(start_spec_str("JavaScript"));
  console.log(start_spec_str("Java"));
  console.log(start_spec_str("Python")); 
  



  
//   28. Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.




function check_numbers(x, y) {
    if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)) {
      return true;
    } else {
      return false;
    }
  }
  console.log(check_numbers(12, 101));
  console.log(check_numbers(52, 80));
  console.log(check_numbers(15, 99)); 
  
  
  