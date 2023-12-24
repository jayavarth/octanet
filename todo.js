function addTask() {
  const taskInput = document.getElementById("taskInput");
  const dueDateInput = document.getElementById("dueDate");
  const statusInput = document.getElementById("status");
  const priorityInput = document.getElementById("priority");
  const categoryInput = document.getElementById("category");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") {
      alert("Please enter a task!");
      return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
      <span>${taskInput.value}</span>
      <span>Due Date: ${dueDateInput.value}</span>
      <span>Status: ${statusInput.value}</span>
      <span>Priority: ${priorityInput.value}</span>
      <span>Category: ${categoryInput.value}</span>
      <button onclick="removeTask(this)">Delete</button>
  `;

  taskList.appendChild(li);
  resetInputs();
}

function removeTask(button) {
  const taskList = document.getElementById("taskList");
  const li = button.parentNode;
  taskList.removeChild(li);
}

function resetInputs() {
  document.getElementById("taskInput").value = "";
  document.getElementById("dueDate").value = "";
  document.getElementById("status").value = "pending";
  document.getElementById("priority").value = "low";
  document.getElementById("category").value = "";
}



  