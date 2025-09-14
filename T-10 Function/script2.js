// count the vowels in the simple function and arrow function
// traditional or simple function 
function countVowels(str){
    let count =0;
    for (let char of str)
    if (char === "a"  ||
    char === "e"  ||
    char === "i" ||
    char === "o" ||
    char === "u")
    {
        count++;
    }
    console.log("total vowels is ",count)
}
countVowels("abcde")

// Arrow function
let countVowels1 = (str) => {
    let count = 0;
    for (let count of str)
    if ( char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
        {
            count ++;
        }
        console.log("total vowels is ",count)
}
countVowels("Sk dharmik")


// call back function 

// function functionName(name,callback) {
//     console.log("Hello "+ name);
//     callback();
// }
// function funName2(){
//     console.log("Santoshdharmik5@gmail.com")
// }
// functionName("santosh dharmik", funName2);

//   forEach method
// simple num
// let num = [1,2,3,4,5];

// num.forEach(function(num){
//     console.log(num);
// })

// square 
//  let num1 = [1,2,3,4,5,6,7,8,9,10];
 
//  num1.forEach(function(num1){
//      console.log(num1*num1)
//  })
 
 // cube with different approch
//  let num2 = [1,2,3,4,5,6,7,8,9,10];
 
//  num2.forEach(function(num2){
//      console.log(num2*num2*num2)
//  })
 
//  let fruits = ["Apple", "Banana", "Mango"];

// fruits.forEach(function(fruit, index, arr) {
//     console.log(`${index} : ${fruit} (from ${arr})`);
// });

//   map() method
//  let num1 = [1,2,3,4,5,6,7,8,9,10];
 
//  num1.map(function(num1){
//      console.log(num1*num1)
//  })
 
//  Return a new array
//   let num = [1,2,3,4,5,6,7,8,9,10];
 //  let newArr = num.map(function(num){
//      return num*num
//  }) 
 //  console.log(newArr)


// // filter() method
// let num = [1,2,3,4,5,6,7,8,9,10];

// let newArr = num.filter(function(num){
//     return num >= 3;
// })
// console.log(newArr);


// // // Reduce() method
// let numbers = [10, 20, 30, 40];
// let sum = numbers.reduce((pre, curr) => pre + curr, 0);
// console.log(sum);  // 100

// find the largest number 
// let numbers = [1000, 20, 30, 40,100,500,3,1000];

// let sum = numbers.reduce((pre, curr) => {
//     return pre > curr ? pre : curr;
// });

// console.log(sum);  // 100

// // find the smallest number

// let numbers1 = [1000, 20, 30, 40,100,500,3,1000];

// let sum1 = numbers1.reduce((pre, curr) => {
//     return pre < curr ? pre : curr;
// });

// console.log(sum1);  // 100

// slove the practice questions 
// 1) std marks
// let std = [35,,99,95,93,45,75,85,65,90,91,92]
// let newStd = std.filter(function(std){
//     return std >=90
// });
// console.log("Merit students are = ",newStd)

// 2) user input and output
// let n = prompt("enter a number : ");

// let arr = [];

// for(let i=1; i<=n; i++){
//     arr[i-1]=i;
// }
// console.log(arr)


// 3) reduce cal all sum

// let num = [1,2,3,4,5];
// let newArr = num.reduce((pre, cur) => {
// return pre + cur;
// });
// console.log(newArr);


// let num = [1,2,3,4,5,6,7,8,9,10];
// let newArr = num.reduce(function(pre, cur) {
//     return pre + cur;
// });
// console.log(newArr);

// 4)
// let num = [1,2,3,4,5];
// let newArr = num.reduce((pre, cur) => {
// return pre * cur;
// });
// console.log(newArr);

// let num = [1,2,3,4,5,6,7,8,9,10];
// let newArr = num.reduce(function(pre, cur) {
//     return pre * cur;
// });
// console.log(newArr);