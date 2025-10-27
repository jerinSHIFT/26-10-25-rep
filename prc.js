document.body.style.background = "green";  // sets background color
let bgcolor = document.body.style.background;  // stores the color
console.log(bgcolor);  // prints it in console

let para = document.querySelector("p");
para.textContent = "Text changed!";
console.log(para.textContent); 
console.dir(para); 



let heading =document.querySelector("h1");
heading.style.color = "blue ";
let color = heading.style.color;
console.log("h1 color is changed to :",color);
console.dir(heading);


let h2 = document.querySelector("h2");
h2.style.color=" white";
 let color2 =h2.style.color;
 console.log(color2);
//  console.dir(h2);
// let UL = document.querySelector("ul");

// let LI = document.createElement("li");
// LI.textContent="Dancing";
//  LI.textContent;
// let end = UL.appendChild(LI);
// console.log(end);
// // end. style.color="blue";
// // let New2 =end. style.color;
// // console.log(New2);
// console.dir(UL);



// let Ul =  document.querySelector("ul");
// let LI = document.createElement("li");
// LI.textContent ="Dancing";
//  let first = Ul.firstElementChild;
// let final =  Ul.insertBefore(LI,first);
// console.log(final);
// let Ul =  document.querySelector("ul");
//  let LI = document.createElement("li");
// LI.textContent ="Dancing";
// let index = Ul.children[0];
// let final =  Ul.insertBefore(LI,index);
// console.log(final);
// let rem =  p.remove();
//   console.log (rem);
// let allPara = document.querySelectorAll("p");     
// let lastPara = allPara[allPara.length - 1];       

// lastPara.textContent = lastPara.textContent.replace("Email: example@email.com", "Mobile: 01****888");
// let mypara =lastPara.textContent;
// console.log( mypara);
let btn = document.getElementById('themeBtn');
  btn.onclick = () => document.body.classList.toggle('dark');

  console.log(  btn.onclick);
