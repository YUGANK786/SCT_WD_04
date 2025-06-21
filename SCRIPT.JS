const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskTime = document.getElementById("task-time");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const taskText = taskInput.value;
  const dateTime = taskTime.value;

  const li = document.createElement("li");
  const taskContent = document.createElement("span");
  taskContent.textContent = `${taskText} ${dateTime ? '⏰ ' + dateTime : ''}`;
  li.appendChild(taskContent);

  const actions = document.createElement("div");
  actions.className = "actions";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✅";
  completeBtn.onclick = () => {
    taskContent.classList.toggle("completed");
  };

  const editBtn = document.createElement("button");
  editBtn.textContent = "✏️";
  editBtn.onclick = () => {
    const newTask = prompt("Edit task:", taskText);
    if (newTask !== null) {
      taskContent.textContent = `${newTask} ${dateTime ? '⏰ ' + dateTime : ''}`;
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️";
  deleteBtn.onclick = () => li.remove();

  actions.append(completeBtn, editBtn, deleteBtn);
  li.appendChild(actions);
  taskList.appendChild(li);

  taskInput.value = "";
  taskTime.value = "";
});
