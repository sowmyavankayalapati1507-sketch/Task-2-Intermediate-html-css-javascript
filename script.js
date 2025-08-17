// JavaScript Form Validation
document.getElementById("form").addEventListener("submit", function (event) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    event.preventDefault();
  }
});

// Dynamic To-Do List
function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = task;

  const btn = document.createElement("button");
  btn.textContent = "Remove";
  btn.className = "remove";
  btn.onclick = function () {
    li.remove();
  };

  li.appendChild(btn);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}