const taskInput = document.getElementById("taskadd");
const addTaskButton = document.getElementById("addtask");
const taskList = document.getElementById("tasklist");

addTaskButton.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        return;
    }

    const li = document.createElement("li");
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => editTask(taskSpan));

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => taskList.removeChild(li));

    li.appendChild(taskSpan);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = "";
}

function editTask(taskSpan) {
    const newText = prompt("Edit the task", taskSpan.textContent);
    if (newText !== null && newText.trim() !== "") {
        taskSpan.textContent = newText;
    }
}
 
