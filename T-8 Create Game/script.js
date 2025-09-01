// create a game using loop
// 11) create a game 
let selectGameNum = 28;
let userNum = prompt("Guess the number from 1 to 100:");

while(userNum != selectGameNum){
    userNum = prompt("You entered wrong number. Guess again :");
}
console.log("congratulations, you won the game");