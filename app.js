function addTask() {
    var newTaskText = document.getElementById("newTask").value;

    if (newTaskText.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(newTaskText));
    taskList.appendChild(li);

    document.getElementById("newTask").value = "";
}
