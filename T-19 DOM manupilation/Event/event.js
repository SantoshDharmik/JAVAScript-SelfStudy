// // // event
// // // mouse event(click), keyboard event(keypress), window event(load, resize, scroll), form event(change, select, submit)

// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (evt) => {
//     console.log(evt)
//     // let a = 25;
//     // a++;
//     // console.log(a);
//     console.log(evt.type);
//     console.log(evt.target.id);
//     console.log(evt.clientX);
//     console.log(evt.clientY);
// }

// let div = document.querySelector("div");
// div.onmouseover = (evt) => {
//     console.log(evt)
//     console.log(evt.type);
//     console.log(evt.target.id);
//     console.log(evt.clientX);
//     console.log(evt.clientY);
// }
//  add event listener 
// let btn1 = document.querySelector("#btn1");
// btn1.addEventListener("click", (event) => {
//     console.log("btn-1 was clicked");
//     console.log(event);
//     console.log(event.target);
//     console.log(event.type);
//     console.log(event.clientX);
//     console.log(event.clientY);
// })

// btn1.addEventListener("click", () => {
//     console.log("btn-2 was clicked ");
// })


//  remove event listener 

// let div = document.querySelector("div"); 
// btn1.addEventListener("click", () => {
//      console.log("btn-1 was clicked ");
// })
// btn1.addEventListener("click", () => {
//     console.log("btn-2 was clicked ");
// })

// const btn3 = () => {
//        console.log("btn-3 was clicked ");  
// };

// // btn1.addEventListener("click",);


// btn1.addEventListener("click", () => {
//     console.log("btn-4 was clicked ");
// })
// btn1.addEventListener("click", () => {
//     console.log("btn-5 was clicked ");
// })
 
// // delete the btn-3

// btn1.removeEventListener("click",)


// // 1) practice question dark theme
let btn1 = document.querySelector("#btn");
let body = document.querySelector("body");
let curMode = "light";

btn1.addEventListener("click", () => {
   if(curMode === "light"){
    curMode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
   } else{
    curMode = "light";
    body.classList.add("light")
    body.classList.remove("dark")
   }
   console.log(curMode);
});

