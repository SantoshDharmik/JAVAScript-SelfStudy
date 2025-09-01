// switch(expression) {
//   case value1:
//     // code block if expression === value1
//     break;

//   case value2:
//     // code block if expression === value2
//     break;

//   case value3:
//     // code block if expression === value3
//     break;

//   default:
//     // code block if no case matches
// }
// 1)Easy Example – Days of the Week
{let day = 1;

switch(day){
    case 1:
    console.log("monday");
    break;
    
    case 2:
    console.log("tuesday");
    break;
    
    case 3:
    console.log("wednsday");
    break;
    
    case 4:
    console.log("thursday");
    break;
    
    case 5:
    console.log("friday");
    break;
    
    case 6:
    console.log("saturday");
    break;
    
    case 7:
    console.log("sunday");
    break;
    
    default:
    console.log("invalid day");
}}

// 2)Use switch to check a traffic light color (red, yellow, green) and print the correct action.

let code = "yellow";
 switch (code){
     case "red":
         console.log("You can goooo");
         break;
     case "yellow":
         console.log("stop because the light is about to change to red");
         break;
     case "green":
         console.log("You can stop");
         break;     
    default:
    console.log("invalide code")
}


