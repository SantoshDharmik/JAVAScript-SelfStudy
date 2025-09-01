// 1) Making strings
// // how to create string there are 3 types
// // 1)
// let str = "sk dharmik1"
// console.log(str) 
// // 2)
// let str1 = 'sk dharmik2'
// console.log(str1)
// // 3)
// let str2 = `sk dharmik3`
// console.log(str2)

// 2) Concatenation & length
// let a = "sk", b = " dharmik1728";
// console.log(a + b);  //Concatenation
// console.log((a+b).length)

// let str = "sk dharmik"
// console.log("lenght is ",str.length)
// // console.log(${length is}.str.length)

// 3)String method
// (toUperrCase(),toLowerCase()),trim())

// let str1 = "sk dharmik1"
// str1 = str1.toUpperCase();
// console.log(str1) 

// let str2 = "SK DHARMIK1"
// str2 = str2.toLowerCase();
// console.log(str2) 

// let str2 = "         SK DHARMIK           "
// console.log(str2.length);
// console.log(str2.trim());
// console.log(str2.trim().length);


// 4) Accessing characters
// let str = "sk dharmik1"
// console.log(str.charAt(3)); //method-1
// console.log(str[6]); //method-2

// 5) Finding positions
// indexof and lastindexof
// let str = "sk dharmik";
// console.log(str.indexOf('k'));

// let str1 = "sk dharmik";
// console.log(str1.lastIndexOf('k'));

// 6) slice vs substring (end index is exclusive)
 
// let str = "my name is sk and my id is skdharmik 1728" ;
// console.log(str.slice(0,20)); //cover 0 to 20 in range
// console.log(str.slice(15)); //remove starting 15 index
// console.log(str.slice(0)); //print all the str
// console.log(str.slice(-10)); // print the all 10 index
// console.log(str.slice(0,-10)); // print empty

// let str = "my name is sk and my id is skdharmik 1728" ;
// console.log(str.substring(0,20));
// console.log(str.substring(-10));

// // 7) Replacing text

// let str = "this is is";
// console.log(str);
// console.log(str.replace(" is"," was"));
// console.log(str.replaceAll(" is"," was"));

// let str1 = "my name is yash"
// console.log(str1);
// console.log(str1.replace("yash","sk"));

// crete a email id 
// let fullName = prompt("enter your full name without spaces : ");
// let userName = fullName + 5 + "@" + "gmail.com";  
// console.log(userName);

// let fullName = prompt("enter your full name without spaces : ");
// let userName = fullName + " you are fromm nagpur";  
// console.log(userName);


// 9) Capitalize names (your task)
let name=prompt("enter your name : ");
let username = name 
.split(" ")
.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
.join(" ");
console.log(username);

// 10. Reverse a String 

// let str = "SK DHARMIK"
// let rev = str.split("").reverse().join("")
// console.log(rev)

// // 11. Template Literals (Backticks, ES6)
// let name="santosh dharmik";
// let age = 21;
// let city = "nagpur";
// console.log(`hello ${name} your age is ${age} and you are from ${city}.`)

// 12. Regular Expressions (Regex)
// let pattern = /hello/gi;     // literal
// let re = new RegExp("hello","gi"); // constructor
// console.log(re);

// 13. Password Regex Example

