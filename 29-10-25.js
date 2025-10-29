// let tableBody = document.querySelector("#postsTable tbody");

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((posts) => {
//     posts.forEach((post) => {
//       let row = document.createElement("tr");

//       row.innerHTML = `
//         <td>${post.id}</td>
//         <td>${post.title}</td>
//         <td>${post.body}</td>
//       `;

//       tableBody.appendChild(row);
//     });
//   });
//   .catch((error) => console.error("Error:", error));

// Async await use kore [most usefull way ]


let row =document.querySelector(".row");
//  let tableBody = document.querySelector("#postsTable tbody");
 const fetchData = async ()=>{
       try{

          const response =  await fetch("https://jsonplaceholder.typicode.com/posts");
          const posts =   await response.json();
        // console.log(posts);
        posts.slice(0,12).forEach((post)=>{

    //    let row = document.createElement("tr");
       

       row.innerHTML +=`
        <div class="col-4">
         <div class="card">
            <h2> ${post.id}</h2>
          <p> ${post.title}</p>
          <p> ${post.body} </p>
          </div>
          </div>
       `;
   
        //  row.appendChild(row);

        });

       }catch(err){
       console.log (err);

       }

 };
 fetchData();



 console.log("JS loaded");

const API_URL = "https://68fefd92e02b16d1753c0c97.mockapi.io/task";
const tasklists = document.getElementById("task");
const taskForm = document.getElementById("new-task-form");
const taskInputTitle = document.getElementById("task-title");

// sanity checks
if (!tasklists) console.error("#task element missing");
if (!taskForm) console.error("#new-task-form element missing");
if (!taskInputTitle) console.error("#task-title element missing");

// GET
const fetchTask = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", API_URL, true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      try {
        const tasks = JSON.parse(xhr.responseText);
        console.log("Fetched:", tasks);
        renderTasks(tasks);
      } catch (e) {
        console.error("JSON parse error:", e);
      }
    } else {
      console.error("Failed to fetch tasks:", xhr.status, xhr.statusText);
    }
  };
  xhr.onerror = function () {
    console.error("Network error while fetching tasks!");
  };
  xhr.send();
};

// RENDER
const renderTasks = (tasks) => {
  if (!tasklists) return;
  tasklists.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="single-task">
        <p>${task.id}. ${task.title}</p>
        <div>
          <button data-id="${task.id}" class="edit-btn">Edit</button>
          <button data-id="${task.id}" class="delete-btn">Delete</button>
        </div>
      </div>
    `;
    tasklists.appendChild(li);
  });
};

fetchTask();

// CREATE
if (taskForm) {
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskTitle = taskInputTitle.value.trim();
    if (!taskTitle) return;
    addTask(taskTitle);
  });
}

const addTask = (taskTitle) => {
  const data = { title: taskTitle, completed: false };

  const xhr = new XMLHttpRequest();
  xhr.open("POST", API_URL, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = function () {
    if (xhr.status === 201) {
      console.log("Task added:", JSON.parse(xhr.responseText));
      taskInputTitle.value = ""; // clear input
      fetchTask(); // refresh
    } else {
      console.error("Failed to add task:", xhr.status, xhr.statusText);
    }
  };
  xhr.onerror = function () {
    console.error("Network error while adding task!");
  };
  xhr.send(JSON.stringify(data));
};



