const addTaskButton = document.getElementById("add-task-button")
const newTaskInput = document.getElementById("new-task-input")
const toDoDiv = document.getElementById("to-do-list")
addTaskButton.addEventListener("click", () => newTask())

function newTask() {

    let newTask = newTaskInput.value
    console.log(newTask)
    addTask(newTask)
}

function addTask(newTask) {
    
    let toDoDiv = document.getElementById("to-do-list")
    let checkbox = document.createElement("input")
    let breakLine = document.createElement("br")
    checkbox.type = "checkbox"
    checkbox.value = newTask
    checkbox.class = "to-do-item"

    let label = document.createElement("label")
    label.htmlFor = "value"

    label.appendChild(document.createTextNode(checkbox.value))
    toDoDiv.appendChild(checkbox)
    toDoDiv.appendChild(label)
    toDoDiv.appendChild(breakLine)

}