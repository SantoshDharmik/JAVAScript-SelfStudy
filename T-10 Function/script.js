// // function in javascript is lke a reusable block of code that performs a specific task think of it as a recipe

// // 1.  WAYS TO DEFINING A FUNCTION

// // a) traditional function using function keyword
// // function function_name(argugments[optional]){
// //     // function body
// //     return statement;  // optional
// // }

// function hello1() {
//     console.log('hello universe 1');
// }
// hello1();
// hello1();
// hello1();


// // b) es6 arrow function (fat arrow function) : introduced in  2015 during es6
// // let function_name = (args(optional)) => {
// //     // function body
// //     return statement;   // optional
// // }

// let hello2 = () => {
//     console.log('hello world 2')
// }
// hello2();
// hello2();
// hello2();

// let hello3 = () => console.log('hello earth 3');
// hello3();
// hello3();
// hello3();


// // 2. HOW TO CALL A FUNCTION
// // function_name (data[optional]);

// let add = (num1, num2) => {    // parameters
//     return num1 + num2;
// } 
// console.log(add(900,500));     // arguments

// let a_line = (clg) => {
//     return `my name is Santosh and i am from ${clg}`;
// }
// console.log(a_line('PCE, Nagpur'));

// // 3 TYPES OF FUNCTIONS

//     // 1. NO ARGUMENTS NO RETURN
//     function name() {
//         console.log('my name is don');
//     }
//     name();
    
//     // 2. ARGMUMENTS AND RETURN
//     function name2(lang) {
//         return my mother tounge is ${lang};
//     }
//     console.log(name2('marathi'));
    
//     function multiply(num1, num2) {
//         return num1 * num2;
//     }
//     console.log(multiply(8,8));
    
//     // 3. ARGUMENTS AND NO RETURN
//     divide = (num1,num2) => {
//         console.log(num1 / num2);
//     }
//     divide(9,3);
    
//     // 4. NO ARGUMENT AND RETURN 
//     hi = () => {
//         return 'hi, my name is david';
//     }
//     console.log(hi());
    
// // 4 example 
//     //  a. factorial function
    
// const factorial = (number) => {
//     let fact = 1;
//     while (number != 0) {
//         fact = fact * number;
//         number--;   // decrease number here
//     }
//     return fact;
// }


// console.log(factorial(5));
// console.log(factorial(8));
// console.log(factorial(10)); // 3628800


//     // b. squre function
//     function squre(value) { 
//         return value * value;
//     }
//     let sq = squre(9);
//     console.log(sq);
    
//     // c. cube function
//     let cube = (val) => {
//         return val * val * val ;
//     }
//     console.log(cube(2));

// // ACCESSING OUTSIDE VARIABLE 
// let data = 100

// function squareData(){
//     return data * data
// }

// console.log(squareData())

// // 5. HOISTING : This means you can call a function before defining it and it will still work. like a 'var' scope. 
// // but it will only work in the traditional function not in arrow function.
// // if i pass only single value then i will

// add1(10,55);
// function add1(val1, val2) {
//     console.log(val1 + val2);
// }

// add2(10, 50);
// function add2(num1, num2) {
//     console.log(num1 + num2);
// }

// // lets try in the arrow function [it will cause an error]

// sirname_of_vijay('mallya'); 
// function sirname_of_vijay(sirname) {
//     console.log(sirname, 'the chor');
// }

// // sirname_of_king('alexzender'); 
// // let sirname_of_king = (sirname) => {
// //     console.log(sirname, 'the great');
// // }


// // 6. Callbacks :: functions that passed as an arguments

// function greet(name, callback) {
//     console.log("Hello " + name);
//     callback();  // यहाँ callback function को call किया जा रहा है
// }

// function sayBye() {
//     console.log("Goodbye!");
// }

// greet("Alice", sayBye);  


// // A callback is a function that we pass as an argument to another function. The other function can then run (or "call back") that function later.
// // Example:
// // greet is a function with two parameters → name and callback.
// // When we call greet("Alice", sayBye):
// // "Alice" goes into name.
// // sayBye (a function) goes into callback.
// // Inside greet:
// // It prints Hello Alice.
// // Then it runs callback(), which means sayBye() runs.
// // So the final output is:
// // Hello Alice
// // Goodbye!

// function about_me (firstname , sirname , condition,status,msg) {
//     console.log(Hi my name is ${firstname}. and I am only a single unmarried child of ${sirname} family);
//     condition();
//     status();
//     msg();
// }
// function broken() {
//     console.log('My current friendship status is broken');
// }
// function single() {
//     console.log('And my relationship status is single');
// }
// function gb() {
//     console.log('Thanking you for reading this now goodbye');
// }
// about_me('ritesh','itankar',broken,single,gb)


// function welcome(name,cb) {
//     console.log(hello, ${name});
//     cb();
// }
// welcome('ritesh',() => console.log('finding some peace from the toxicity'));


// // nested function
// function outside() {
//     console.log('this is the outer side');
    
//     function inside() {
//         console.log('this is the inner side');
        
//         function underground() {
//             console.log('this is under the ground');
//         }
//         underground();
//     }
//     inside();
// }
// outside();

// // let value_1 = +prompt('enter the value');
// let value_1 = 55;
// let fact = 1;
// let count = 0;
// while(value_1>1) {
//     fact = fact * value_1;
//     value_1--;
//     count++;
//     console.log('for step ' , count , fact);
// }

// function factri(value_2) {
//     let fact = 1;
// let count = 0;
// while(value_2>1) {
//     fact = fact * value_2;
//     value_2--;
//     count++;
//     console.log('for step ' , count , fact);
// }
    
// }


// factri(5);



// // extra thing
// function details(name, sirname, city, state = 'maharashtra', nation = 'india'){
//     console.log(name, sirname, city, state, nation);
// }
// details('ritesh','itankar','nagpur');

// function details(name, sirname, city, state = 'maharashtra', nation = 'india'){
//     console.log(name, sirname, city, state, nation); // here mh is overwrite by mp 
// }
// details('ritesh','itankar','nagpur','madhyapradesh');




// // function add1(num1, num2){
// //     let add1  = num1 + num2
// //     return add1
// // }
// // let answer = add1(100,200)
// // console.log(answer)         // will print because there is return in the fn
// // console.log(add(100,50))    // will print because there is return in the fn
// // add(1,5)    // won't print anything because there is no console.log if there was a console.log it will print the things inside the console.log
// // add(50,.5)  // won't print anything because there is no console.log if there was a console.log it will print the things inside the console.log

// // function welcome(name,cb) {
// //     console.log(hello, ${name});
// //     cb();
// // }
// // welcome('ritesh',() => console.log('finding some peace from the toxicity'));



// // let function1 = () => {
// //     return 1;
// // }
// // console.log(function1());

// // short cut for return 
// // let function1 = () => 1;
// // console.log(function1());

// // let welcome_line = () => 'hello boss, how are you !';
// // console.log(welcome_line());