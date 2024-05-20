const taskForm = document.querySelector<HTMLFormElement>(".form");

const formInput = document.querySelector<HTMLInputElement>(".form-input");

const taskListElement = document.querySelector<HTMLUListElement>(".list")

type Task = {
    description: string,
    isCompleted: boolean
}

const tasks: Task[] = loadTask();
tasks.forEach(renderTask);
function loadTask(): Task[] {
    const storedTasks = localStorage.getItem("tasks")
    if (storedTasks) {
        return JSON.parse(storedTasks) as Task[]
    }
    return []
}

taskForm?.addEventListener("submit", (e) => {
    e.preventDefault()
    const taskDescription = formInput?.value
    if (taskDescription) {
        const task: Task = {
            description: taskDescription,
            isCompleted: false
        }
        addTask(task)
        renderTask(task)
        updateStorage()
        formInput.value = ""
        return
    }
    alert("add task description")
})


function addTask(task: Task): void {
    tasks.push(task)
    console.log(task.description)
}


function renderTask(task: Task): void {
    const taskElemnet = document.createElement("li")
    taskElemnet.textContent = task.description
    const taskCheckbox = document.createElement("input")
    taskCheckbox.type = "checkbox"
    taskCheckbox.checked = task.isCompleted

    taskCheckbox.addEventListener("click", () => {
        task.isCompleted = !task.isCompleted
        updateStorage()
    })

    taskElemnet.appendChild(taskCheckbox)
    taskListElement?.appendChild(taskElemnet)
}

function updateStorage(): void {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}