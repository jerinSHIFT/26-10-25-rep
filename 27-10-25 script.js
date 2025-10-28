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

// Render tasks with serial number (not API id)
const renderTasks = (tasks) => {
  tasklists.innerHTML = "";

  // latest first (optional)
  const sorted = [...tasks].sort((a, b) => Number(a.id) - Number(b.id));

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


// Add task
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskTitle = taskInputTitle.value.trim(); // const taskTitle =taskInputTitle.value;

  if (!taskTitle) return; //if(taskTitle){ addTask (taskTitle); taskInputTitle.value ="";}else{alert("No TASK FOUND..");}}
  addTask(taskTitle);
});

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

fetchTask();


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

