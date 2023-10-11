console.log(window);
console.log(document);
console.log(document.body);

// create text Node

let para = document.querySelector('.muni')
 let newPara = document.createElement('p');
 let textNode = document.createTextNode('Iam the best')
 newPara.appendChild(textNode)
//  let add = newPara.innerText = "Iam the best";
 para.appendChild(newPara)
 
//  :innerAdjacentHtml()
//  :::hase to be called 2 arguments
//  :: location / positon --> where  --> 4 way--> beforeBegin , afterBegin --> beforeEnd , afterEnd 
//  :: html text/content --> what

para.style.color = "red";

//   const parentDiv = document.getElementById("parent");
//   const childDiv = document.getElementById("child");

//   const parent = () => {
//     alert("Parent Div");
//   }
 
 
//   const child = () => {
//     alert("Child Div");
//     event.stopPropagation();
//   }

//   parentDiv.addEventListener('click' , parent);
//   childDiv.addEventListener('click' , child);

// prevent the default action of element
// const anchorTagArr = document.querySelectorAll('a');

// anchorTagArr[2].addEventListener('click' , function(event){
//   event.preventDefault();
// })
