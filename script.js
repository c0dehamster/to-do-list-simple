const taskInput = document.querySelector(".new-task__input")
const newTaskButton = document.querySelector(".button--new-task")
const taskList = document.querySelector(".task-list")

let newTask = ""

taskInput.addEventListener("input", e => {
	newTask = e.target.value
})

// Create a task item

const addListItem = task => {
	const newListItem = document.createElement("li")
	newListItem.classList.add("task-list__task")
	newListItem.innerHTML = `
        <div class="task-list__text">${task}</div>
            <button class="button button--delete">
                <i class="fa-solid fa-trash-can"></i>
            </button>`

	return newListItem
}

// Add a task item to the list

newTaskButton.addEventListener("click", () => {
	if (newTask === "") {
		alert("Please enter a task")
	} else {
		taskList.classList.remove("task-list--empty") // Display the lask list
		taskList.appendChild(addListItem(newTask))
	}

	const currentTasks = document.querySelectorAll(".task-list__task")

	currentTasks.forEach(task => {
		// Add the option to remove a task

		task.querySelector(".button--delete").addEventListener("click", function () {
			this.parentNode.remove()

			// Hide the task list if the removed task was the last one

			if (taskList.innerHTML === "") {
				taskList.classList.add("task-list--empty")
			}
		})

		// Cross out the comleted task

		task.querySelector(".task-list__text").addEventListener("click", e => {
			if (e.target.classList.contains("task-list__text--completed")) {
				e.target.classList.remove("task-list__text--completed")
			} else {
				e.target.classList.add("task-list__text--completed")
			}
		})
	})

	taskInput.value = ""
})
