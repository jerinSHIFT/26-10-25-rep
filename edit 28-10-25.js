const taskId = new URLSearchParams(window.location.search).get("task");
const taskForm = document.getElementById("edit-task-form");
const taskInputTitle = document.getElementById("task-title");
const goBackButton = document.getElementById("go-back-btn");
const API_URL = "https://68fefd92e02b16d1753c0c97.mockapi.io/task";

// fetch old data and show in input
fetch(`${API_URL}/${taskId}`)
  .then(res => res.json())
  .then(task => {
    taskInputTitle.value = task.title;
  })
  .catch(() => alert("Something is wrong."));

// update task on form submit
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const updatedTaskTitle = taskInputTitle.value.trim();

  if (updatedTaskTitle) {
    fetch(`${API_URL}/${taskId}`, {
      method: "PUT",
      body: JSON.stringify({ title: updatedTaskTitle, completed: false }),
      headers: { "Content-Type": "application/json" },
    })
      .then(res => res.json())
      .then(() => {
        alert("Task Updated Successfully.");
        window.location.href ="./27-10.html"; // fixed space
      })
      .catch(() => alert("Something went wrong."));
  } else {
    alert("No Task Found");
  }
});

// go back button
goBackButton.addEventListener("click", () => {
  window.history.back();
});
