// // id="title" element টা console-এ দেখাও
// // const title = document.getElementById("title");
// // console.log(title.textContent)
// //  Window.document;
// // console.dir(window.document);
// // Window.document.body;
// // console.dir(document.body)
// let bgcolor = document.body.background("Green");
// console.log(bgcolor);
// // ----------------------
// // paragraph n text chng 
// document.querySelector("p").textContent = "Text changed!";
// // -------------------------------------------------------
// // h1 er color chng
// document.querySelector("h1").style.color = "red";
// // -------------------------------------------------------
// // new li jog kora ul  er moddhe
// // _______________________________________________________
// const li = document.createElement("li");
// li.textContent = "New item";
// document.querySelector("ul").appendChild(li);
// // ___________________________________________________

// //  remove 1st  paragrap;
// const p = document.querySelector("p");
// p.remove();
// // _____________________________________________________________
//         // Change image on click

// const img = document.querySelector("img");
// img.addEventListener("click", () => {
//   img.src = "newimage.jpg";
// });
// // ______________________________________________________________
//     //  Toggle dark mode

// const body = document.body;
// document.querySelector("#btn").addEventListener("click", () => {
//   body.classList.toggle("dark");
// });
// // ___________________________________________________________________
//     //   Show/hide text

// const text = document.querySelector("#text");
// const btn = document.querySelector("#toggle");
// btn.addEventListener("click", () => {
//   text.style.display = text.style.display === "none" ? "block" : "none";
// });
// //_____________________________________________________________________
// //    Form input value

// const input = document.querySelector("#name");
// const btn2 = document.querySelector("#submit");
// btn2.addEventListener("click", () => {
// alert("Hello, " + input.value);
// });
// // ________________________________________________________________________
// // Change background color randomly

// const colors = ["red", "green", "blue", "purple"];
// document.querySelector("#change").addEventListener("click", () => {
//   document.body.style.backgroundColor =
//     colors[Math.floor(Math.random() * colors.length)];
// });
// // ________________________________________________________________________________

// // Dynamic list builder

// const input = document.querySelector("#task");
// const add = document.querySelector("#add");
// const list = document.querySelector("#list");

// add.addEventListener("click", () => {
//   const li = document.createElement("li");
//   li.textContent = input.value;
//   list.appendChild(li);
//   input.value = "";
// });
// // _____________________________________________________________________________________

// // Counter with buttons
// let count = 0;
// const display = document.querySelector("#count");
// document.querySelector("#inc").addEventListener("click", () => {
//   count++;
//   display.textContent = count;
// });
// document.querySelector("#dec").addEventListener("click", () => {
//   count--;
//   display.textContent = count;
// });
// // ___________________________________________________________________________________________

// // Modal open/close
// const modal = document.querySelector("#modal");
// document.querySelector("#open").addEventListener("click", () => {
//   modal.style.display = "block";
// });
// document.querySelector("#close").addEventListener("click", () => {
//   modal.style.display = "none";
// });
// // _______________________________________________________________________________________________________
// // Form validation
// const form = document.querySelector("form");
// form.addEventListener("submit", (e) => {
//   const email = document.querySelector("#email").value;
//   if (!email.includes("@")) {
//     e.preventDefault();
//     alert("Invalid email!");
//   }
// });
// // _________________________________________________________________________________________________________________
// // Dynamic search filter

// const inputSearch = document.querySelector("#search");
// const items = document.querySelectorAll(".item");

// inputSearch.addEventListener("keyup", () => {
//   const val = inputSearch.value.toLowerCase();
//   items.forEach((item) => {
//     item.style.display = item.textContent.toLowerCase().includes(val)
//       ? "block"
//       : "none";
//   });
// });
// // __________________________________________________________________________________________________________________________________________
const task = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("task done");

    // resolve({
    //   status: "success",
    // });

    reject({
      error: "Forcefully Stopped",
    });
  }, 2000);
});

async function giveMeSyncFeelings() {
  try {
    const response = await task;
    console.log("inside then");
    console.log(response);
  } catch (error) {
    console.log("inside catch");
    console.log(error);
  }
}

giveMeSyncFeelings();
