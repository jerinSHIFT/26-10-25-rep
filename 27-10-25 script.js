// Task Manager project using javascript ajax and asynchronus programming

// টপিক:

// 1. API and how it combines backend and frontend 2. API call using fetch API (Post, Delete, Get, Update) 3. Task Manager Project using fetch API

// নোট:

// Task Manager Project using Ajax Architecture, Implement Ajax to fetch and 

// ________________________________________________________________________________________________________________________________________________________________
                                    //  CRUD OPERATION [CREATE ,REMDER ]

const API_URL = "https://68fefd92e02b16d1753c0c97.mockapi.io/task";
const tasklists = document.getElementById("task");
const taskForm = document.getElementById("new-task-form");
const taskInputTitle = document.getElementById("task-title");

// Get all tasks
const fetchTask = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", API_URL, true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      const tasks = JSON.parse(xhr.responseText);
      renderTasks(tasks);
    }
  };
  xhr.send();
};

// Render tasks with serial number (not API id)//Render tasks (UI te dekhano)
const renderTasks = (tasks) => {   // uporer rebder tasks ta e eikhane use hoise ''
  tasklists.innerHTML = "";

  // latest first (optional) 
  const sorted = [...tasks].sort((a, b) => Number(a.id) - Number(b.id));   // ei khane function er  nam "tasks"

  sorted.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="single-task">
        <p>${index + 1}. ${task.title}</p>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    `;
    tasklists.appendChild(li);
  });
};


// Add Task form submit // submit er button mane add button ta kaj koranor jonno 
taskForm.addEventListener("submit", (e) => {  // task,index ... oi khaner task use hoise 
  e.preventDefault();
  const taskTitle = taskInputTitle.value.trim(); // const taskTitle =taskInputTitle.value;

  if (!taskTitle) return; //if(taskTitle){ addTask (taskTitle); taskInputTitle.value ="";}else{alert("No TASK FOUND..");}}
  addTask(taskTitle);
});

//// Add Task (POST)

const addTask = (task) => {
  const data = {
    title: task,
    completed: false
  };
  const xhr = new XMLHttpRequest();
  xhr.open("POST", API_URL, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = function () {
    if (xhr.status === 201) {
      alert("TASK ADDED SUCCESSFULLY!");
      taskInputTitle.value = "";
      fetchTask(); // refresh list
    }
  };
  xhr.send(JSON.stringify(data));
};
// Auto-load on start
fetchTask();//[Add + Read system ][ CRUD  = U- Update and D-Delete ]

// _________________________________________________________________________________________________________________________
 


           //  [ CRUD  = U- Update and D-Delete  ADD HOISE + EITA COMPLETE PROJECT]
           

const API_URL = "https://68fefd92e02b16d1753c0c97.mockapi.io/task";
const tasklists = document.getElementById("task");
const taskForm = document.getElementById("new-task-form");
const taskInputTitle = document.getElementById("task-title");

// Get all tasks
const fetchTask = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", API_URL, true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      const tasks = JSON.parse(xhr.responseText);
      renderTasks(tasks);
    }
  };
  xhr.send();
};

// Render tasks with serial number (not API id)//Render tasks (UI te dekhano)
const renderTasks = (tasks) => {   // uporer rebder tasks ta e eikhane use hoise ''
  tasklists.innerHTML = "";

  // latest first (optional) 
  const sorted = [...tasks].sort((a, b) => Number(a.id) - Number(b.id));   // ei khane function er  nam "tasks"

  sorted.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="single-task">
        <p>${index + 1}. ${task.title}</p>
        <div>
          <button class ="edit-btn" data-id ="${task.id}">Edit</button>
          <button class = "delete-btn"data-id ="${task.id}">Delete</button>
        </div>
      </div>
    `;
    tasklists.appendChild(li);
  });
 let editButtons = document.querySelectorAll(".edit-btn");
  let deleteButtons = document.querySelectorAll(".delete-btn");

  editButtons.forEach(button=>{
   button.addEventListener("click",(e)=>{
    const taskId = e.target.dataset.id;
    console.log(taskId);
    window.location.href =`edit 27-10-25.html?task=${taskId}`;
  
   });

  });
  deleteButtons.forEach(button=>{
   button.addEventListener("click",(e)=>{
    const taskId = e.target.dataset.id;
    console.log(taskId);
    deleteTask(taskId);
 
   });

  });

};


// Add Task form submit // submit er button mane add button ta kaj koranor jonno 
taskForm.addEventListener("submit", (e) => {  // task,index ... oi khaner task use hoise 
  e.preventDefault();
  const taskTitle = taskInputTitle.value.trim(); // const taskTitle =taskInputTitle.value;

  if (!taskTitle) return; //if(taskTitle){ addTask (taskTitle); taskInputTitle.value ="";}else{alert("No TASK FOUND..");}}
  addTask(taskTitle);
});

//// Add Task (POST)

const addTask = (task) => {
  const data = {
    title: task,
    completed: false
  };
  const xhr = new XMLHttpRequest();
  xhr.open("POST", API_URL, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = function () {
    if (xhr.status === 201) {
      alert("TASK ADDED SUCCESSFULLY!");
      taskInputTitle.value = "";
      fetchTask(); // refresh list
    }
  };
  xhr.send(JSON.stringify(data));
};
// Auto-load on start
fetchTask();
const deleteTask =(taskId)=>{
const xhr = new XMLHttpRequest ();
xhr.open("DELETE",`${API_URL}/${taskId}`,true);
xhr.onload = function (){
 if (xhr.status===200){
   alert(`task : ${taskId} deleted successfully...`);
   fetchTask();

 }

}
 xhr.send()
}



// ================================================================================================================================
                                  //  FOR PRECTISE ***


// const API_URL = "https://68fefd92e02b16d1753c0c97.mockapi.io/task";

// const fetchTask = () => {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", API_URL, true); // space ta remove kora hoise
//   xhr.onload = function() {
//     // if (xhr.status === 200) {
//     //   console.log("Response:", JSON.parse(xhr.responseText)); // data dekhar jonno
//     // } else {
//     //   console.error("Error:", xhr.status, xhr.statusText);
//     // }
//     console.log(xhr);
//   };
// //   xhr.onerror = function() {
// //     console.error("Network Error!");
// //   };
//   xhr.send();
// };

// fetchTask();


// const API_URL = "https://68fefd92e02b16d1753c0c97.mockapi.io/task";
// const tasklists = document.getElementById("task");
// const taskForm = document.getElementById("new-task-form");
// const taskInputTitle = document.getElementById("task-title");

// // Read / Get
// const fetchTask = () => {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", API_URL, true);
//   xhr.onload = function () {
//     if (xhr.status === 200) {
//       const tasks = JSON.parse(xhr.responseText);
//       renderTasks(tasks);
//     } else {
//       console.error("Failed to fetch tasks:", xhr.status);
//     }
//   };
//   xhr.onerror = function () {
//     console.error("Network error while fetching tasks!");
//   };
//   xhr.send();
// };

// // Render tasks
// const renderTasks = (tasks) => {
//   tasklists.innerHTML = "";
//   tasks.forEach((task) => {
//     let li = document.createElement("li");
//     li.innerHTML = `
//       <div class="single-task">
//         <p>${task.id}. ${task.title}</p>
//         <div>
//           <button>Edit</button>
//           <button>Delete</button>
//         </div>
//       </div>
//     `;
//     tasklists.appendChild(li);
//   });
// };

// fetchTask();

// // Add new task
// taskForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const taskTitle = taskInputTitle.value.trim();
//   if (taskTitle) {
//     addTask(taskTitle);
//   }
// });

// const addTask = (taskTitle) => {
//   const data = {
//     title: taskTitle,
//     completed: false
//   };

//   const xhr = new XMLHttpRequest();
//   xhr.open("POST", API_URL, true);
//   xhr.setRequestHeader("Content-Type", "application/json");
//   xhr.onload = function () {
//     if (xhr.status === 201) {
//       console.log("Task added:", JSON.parse(xhr.responseText));
//       fetchTask(); // refresh list after adding
//     } else {
//       console.error("Failed to add task:", xhr.status);
//     }
//   };
//   xhr.onerror = function () {
//     console.error("Network error while adding task!");
//   };
//   xhr.send(JSON.stringify(data));
// };

// ======================================

// console.log("JS loaded");

// const API_URL = "https://68fefd92e02b16d1753c0c97.mockapi.io/task";
// const tasklists = document.getElementById("task");
// const taskForm = document.getElementById("new-task-form");
// const taskInputTitle = document.getElementById("task-title");

// // sanity checks
// if (!tasklists) console.error("#task element missing");
// if (!taskForm) console.error("#new-task-form element missing");
// if (!taskInputTitle) console.error("#task-title element missing");

// // GET
// const fetchTask = () => {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", API_URL, true);
//   xhr.onload = function () {
//     if (xhr.status === 200) {
//       try {
//         const tasks = JSON.parse(xhr.responseText);
//         console.log("Fetched:", tasks);
//         renderTasks(tasks);
//       } catch (e) {
//         console.error("JSON parse error:", e);
//       }
//     } else {
//       console.error("Failed to fetch tasks:", xhr.status, xhr.statusText);
//     }
//   };
//   xhr.onerror = function () {
//     console.error("Network error while fetching tasks!");
//   };
//   xhr.send();
// };

// // RENDER
// const renderTasks = (tasks) => {
//   if (!tasklists) return;
//   tasklists.innerHTML = "";
//   tasks.forEach((task) => {
//     const li = document.createElement("li");
//     li.innerHTML = `
//       <div class="single-task">
//         <p>${task.id}. ${task.title}</p>
//         <div>
//           <button data-id="${task.id}" class="edit-btn">Edit</button>
//           <button data-id="${task.id}" class="delete-btn">Delete</button>
//         </div>
//       </div>
//     `;
//     tasklists.appendChild(li);
//   });
// };

// fetchTask();

// // CREATE
// if (taskForm) {
//   taskForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const taskTitle = taskInputTitle.value.trim();
//     if (!taskTitle) return;
//     addTask(taskTitle);
//   });
// }

// const addTask = (taskTitle) => {
//   const data = { title: taskTitle, completed: false };

//   const xhr = new XMLHttpRequest();
//   xhr.open("POST", API_URL, true);
//   xhr.setRequestHeader("Content-Type", "application/json");
//   xhr.onload = function () {
//     if (xhr.status === 201) {
//       console.log("Task added:", JSON.parse(xhr.responseText));
//       taskInputTitle.value = ""; // clear input
//       fetchTask(); // refresh
//     } else {
//       console.error("Failed to add task:", xhr.status, xhr.statusText);
//     }
//   };
//   xhr.onerror = function () {
//     console.error("Network error while adding task!");
//   };
//   xhr.send(JSON.stringify(data));
// };

