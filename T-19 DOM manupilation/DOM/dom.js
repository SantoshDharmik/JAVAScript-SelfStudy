// DOM Manupilation
// document.body.style.backgroundColor = "blue";

// document.getElementById
// let skdharmik = document.getElementById("head")
// console.log(skdharmik)
// console.dir(skdharmik)

// getElementsByClassName
// let new1 = document.getElementsByClassName("heading1")
// console.log(new1);

// getElementsByTagName
// let new2 = document.getElementsByTagName("button")
// console.log(new2)

// querySelector(id)
// let para = document.querySelector("#para3")
// console.log(para)

// querySelectorAll
// let para = document.querySelectorAll("#para3")
// console.log(para)

// let para = document.querySelector(".heading1")
// console.log(para)

// head1 = document.getElementById("head")
// <h1 id=​"head">​Sk dharmik​</h1>​
// head1.tagName
// 'H1'

// let myId1 = document.querySelector("#myId")
// console.log(myId1);
// console.log(myId1.firstChild)
// console.log(myId1.lastChild)
// console.log(myId1.children[3])

// console.log(myId1.innerHTML)
// console.log(myId1.innerText)
// console.log(myId1.innerText = 'asdfasdf')
// console.log(myId1.innerHTML = '<h1>dfadf</h1>')

// myId1.children[1].innerText = '<h1 style="color: green;">adhikari</h1>'

// myId1.children[1].innerHTML = '<h1 style="color: green;">adhikari</h1>'

// 1)
// let skk = document.getElementById("even")
// console.log(skk.innerHTML = '<u>From apna clg std in nagpur</u>')

// let skk = document.querySelector("#even")
// console.log(skk.innerText = '<u>From apna clg std</u>') not recomanded !

// 2)
// let practice1 = document.querySelectorAll(".box");
// let ind = 1001;
// for(part of practice1){
//     part.innerHTML = `<b>my name is santosh dharmmik ${ind}`
//     ind++;
// }

// GetAttribute 
// let input = document.querySelector("input")
// console.log(input);

//  let id = input.getAttribute("id")
//  console.log(id);

//   let name = input.getAttribute("name")
//  console.log(name);

//  let placeHolder = input.getAttribute("placeHolder")
//  console.log(placeHolder);

// setattributes
// let input = document.querySelector("input")
// console.log(input.setAttribute("class","skdharmik"));

// input.setAttribute("class","123 ");

// let div = document.querySelector("div")
 
// console.log(div)
// //  style 

// div.style.backgroundColor = "green";
// div.style.fontSize = "50px"
// div.innerHTML = "Sk dharmik !"


// Insert element 
// create 
// add 4
// append,prepend,before,after

// let newBtn = document.createElement("button")
// newBtn.innerText = "Click me !"
// console.log(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn) // add to the last
// div.prepend(newBtn) // add to the first
// div.before(newBtn) // add in the before node
// div.after(newBtn) // add in the after node

// div.remove(newBtn)


// let name1 = document.createElement("h1");
// name1.innerHTML = "<b> hello my name is sk dharmik</b>";
// document.querySelector("body").prepend(name1);
// name1.remove();

// appendchild
// function addElement() {
//   // नया element बनाओ
//   let newPara = document.createElement("p");
//   newPara.textContent = "I am a new paragraph!";

//   // parent में add करो
//   document.getElementById("container").appendChild(newPara);
// }


// remove child
// function removeElement() {
//   let container = document.getElementById("container");
//   let firstPara = document.getElementById("first");

//   // parent से child हटाओ
//   container.removeChild(firstPara);
// }


// practice queueMicrotask. task1)
// let newBtn = document.createElement("button");
// newBtn.innerText = "Click Me !"
// console.log(newBtn);

// newBtn.style.backgroundColor = "red"
// newBtn.style.color = "white"

// let div = document.querySelector("div");
// div.before(newBtn);

// practice queueMicrotask. task2)

// let para = document.querySelector("p")
// para.classList.add("class","newClass")

// para.classList.remove("class","newClass")

