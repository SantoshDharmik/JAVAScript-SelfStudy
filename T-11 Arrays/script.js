// ARRAY 
// let marks = {
//     std:110;
//     std2:20,
// } not used

// let marks=[1,2,3,4,5,6,7,8,9,10,11,12,52,78];
// console.log(marks);
// console.log(marks.length); //property

// 1)array indices
// print the single index value
// let marks=[1,2,3,4,5,6,7,8,9,10,11,12,52,78];
// console.log(`marks is ${marks[10]} :`);
// console.log(`marks is ${marks[50]} :`);

// chnage the value
// let marks=[1,2,3,4,5,6,7,8,9,10,52,78];
// console.log(`marks is ${marks[4]} :`);
// marks[4]=17;
// console.log(`update marks is ${marks[4]} :`);

// 2) looping in array

// let array = ["sK","riteSH","yash","ankit","jay","raj","lax","baby","mAC","boOk","naGPur"];
// console.log(array.length);
// console.log(`index of 5 is ${array[5]}`);
// array[5]="Santosh";
// console.log(`index of 5 is ${array[5]}`);
// console.log(array);
// for (let i=0; i<array.length; i++){
//     console.log(array[i]);
// }

// for-of
// for(let element of array){
//     console.log(element);
// }
// 3)uppercase and lowercase
// {for(let element of array){
//     console.log(`all element are in uppercase ${element.toUpperCase()}`);
// }}

// {for(let element of array){
//     console.log(`all element are in lowercase ${element.toLowerCase()}`);
// }}
// let marks=[1,2,3,4,5,6,7,8,9,10,11,12,52,78];
// // for (let i=0; i<marks.length; i++){
// //     console.log(marks[i]);
// // }
// // for-of
// for (let mark of marks){
//     console.log(mark);
// }

// practice que 1)
let marks = [85,97,44,37,76,60];
// console.log(marks.length);
let sum=0;
for(let i=0;i< marks.length; i++){
    sum = sum + marks[i];
    let avg = sum/marks.length;
    console.log("sum =", sum);
    console.log("sum =", avg);
}