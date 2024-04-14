let tasks = [];

window.onload = function(){
    let storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks){
        tasks = storedTasks;
        displayTasks();
    }
}

document.querySelector(".tasks-count").textContent = tasks.length;

function addTask(){
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value.trim();

    if (task !== ""){
        tasks.push({name:task, completed:false});
        displayTasks();
        taskInput.value="";
    }
}

function displayTasks(){
    let taskList = document.getElementById("taskList");
    taskList.innerHTML="";

    tasks.forEach(function(task, index){
        let li = document.createElement("li");

        let checkbox = document.createElement("input");
        checkbox.type="checkbox";
        checkbox.checked = task.completed;
        checkbox.onchange = function(){
            toggleTaskCompleted(index);
        };
        li.appendChild(checkbox);

        var span = document.createElement("span");
        span.textContent=task.name;
        if(task.completed){
            li.classList.add("completed");
        };
        li.appendChild(span);

        let buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("buttons");

        let editButton = document.createElement("button");
        editButton.textContent="Edit";
        editButton.onclick=function(){
        editTask(index);
        };
        buttonsDiv.appendChild(editButton);

        let deleteButton =document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick= function(){
            deleteTask(index);
        };
        buttonsDiv.appendChild(deleteButton);
        li.appendChild(buttonsDiv);
        taskList.appendChild(li);
        saveTasks();

});
}

function toggleTaskCompleted(index){
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
    saveTasks();
}

function editTask(index){
    let newName = prompt("enter new task name: ", tasks[index].name);
    if(newName !== null && newName.trim() !== ""){
        tasks[index].name = newName.trim();
        displayTasks();
        saveTasks();
    }
}

function deleteTask(index){
    tasks.splice(index, 1);
    displayTasks();
    saveTasks();
}


function saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
