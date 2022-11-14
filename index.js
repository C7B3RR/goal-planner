const inputTaskEl = document.querySelector(".input-new-task");
const taskContainer = document.querySelector(".task-field-container");
const taskListEl = document.querySelector(".tasks-list");
const formEl = document.querySelector(".form");
const formDeadlineEl = document.querySelector(".form-deadline");
const inputDeadlineEl = document.querySelector(".input-deadline");
const bodyContainer = document.querySelector(".body-container");
const deadlineContainer = document.querySelector(".deadline-container");
const containerEl = document.querySelector(".container");






formDeadlineEl.addEventListener("submit", (event) => {
    event.preventDefault()
    addTaskField();
});




formEl.addEventListener("submit", (event) => {
        event.preventDefault()
        addTask();
    });




function addTask() {
    
    
    let newTask = inputTaskEl.value;
    const liEl = document.createElement("li");
    liEl.innerText = newTask;
    taskListEl.appendChild(liEl);

    
}


function addTaskField() {
    let newTaskField = inputDeadlineEl.value;

    const divEl = document.createElement("div");
    divEl.classList.add("container");
    // divEl.innerText = newTaskField;
    bodyContainer.appendChild(divEl);

    const dLCEl = document.createElement("div");
    dLCEl.classList.add("deadline-container");
    // dLCEl.innerText = newTaskField;
    divEl.appendChild(dLCEl);
    const h3El = document.createElement("h3");
    h3El.classList.add("deadline-date");
    h3El.innerText = newTaskField;
    dLCEl.appendChild(h3El);

    const tFCEl = document.createElement("div");
    tFCEl.classList.add("task-field-container");
    divEl.appendChild(tFCEl);

    const tcEl = document.createElement("div");
    tcEl.classList.add("tasks-list");
    tFCEl.appendChild(tcEl);

    const aNTEl = document.createElement("div");
    aNTEl.classList.add("add-new-task");
    divEl.appendChild(aNTEl);

    const fEl = document.createElement("form");
    fEl.classList.add("form");
    fEl.classList.add("form-element");
    aNTEl.appendChild(fEl)

    const iEl = document.createElement("input");
    iEl.classList.add("input-new-task");
    iEl.classList.add("input-new-task-new");
    fEl.appendChild(iEl);

    inEl = document.querySelector(".input-new-task-new");
    inEl.type = "text";


    formEls = document.querySelectorAll(".form-element");

    formEls.forEach(formE => {
        formE.addEventListener("submit", (event) => {
            event.preventDefault()
            addTask();
        })        
    });
   



    
}


