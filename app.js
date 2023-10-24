//Todo added on press enter

window.addEventListener('keydown', (e) => {
    if(e.target.value!=''){
        if (e.which == 13) {
            addingtodo();
        }
    }
});
//checked todo

function donetodo(donetodobox,textbox){
   
    if(!donetodobox.hasAttribute('checked')){
        donetodobox.setAttribute("checked","")
        textbox.setAttribute("class",'todocheckbox');
        

    }
    else{
        donetodobox.removeAttribute("checked")
        textbox.removeAttribute("class",'todocheckbox');
        
    }
}


//edit button
function editbutton(textbox){
    textbox.disabled=!textbox.disabled;
}


//remove button
function rmvbutton(container,todo){
    // console.log("remove");
    container.removeChild(todo);
}




        function addTask() {
            const taskInput = document.getElementById("task");
            const taskText = taskInput.value.trim();

            if (taskText === "") {
                return;
            }

            const taskList = document.getElementById("task-list");

            const listItem = document.createElement("li");
            listItem.className = "task-item";

            const textSpan = document.createElement("span");
            textSpan.className = "task-text";
            textSpan.innerText = taskText;
 

            const priority = document.createElement("span");
            priority.className = "task-priority low-priority";
            priority.innerText = "Low";

           

            const completeButton = document.createElement("button");
            completeButton.className = "complete-button";
            completeButton.innerText = "Complete";
            completeButton.onclick = function() {
                listItem.style.backgroundColor = "#ddd";
                completeButton.style.backgroundColor = "#888";
                completeButton.style.cursor = "default";
                completeButton.disabled = true;
            };

            const editButton = document.createElement("button");
            editButton.className = "edit-button";
            editButton.innerText = "Edit";
            editButton.onclick = function() {
                const updatedText = prompt("Edit task:", taskText);
                if (updatedText !== null && updatedText.trim() !== "") {
                    textSpan.innerText = updatedText.trim();
                }
            };

            const deleteButton = document.createElement("button");
            deleteButton.className = "delete-button";
            deleteButton.innerText = "Delete";
            deleteButton.onclick = function() {
                listItem.remove();
            };

            const dueDate = document.createElement("span");
            dueDate.className = "due-date";
            dueDate.innerText = "Due: Tomorrow";

            listItem.appendChild(textSpan);
            listItem.appendChild(priority);
            listItem.appendChild(completeButton);
            listItem.appendChild(editButton);
            listItem.appendChild(deleteButton);
            listItem.appendChild(dueDate);
            taskList.appendChild(listItem);
            

            taskInput.value = "";
        }

        function filterTasks() {
            const priorityFilter = document.getElementById("priority-filter").value;
            const taskItems = document.querySelectorAll(".task-item");

            taskItems.forEach(function(taskItem) {
                const taskPriority = taskItem.querySelector(".task-priority");

                if (priorityFilter === "all" || taskPriority.classList.contains(priorityFilter)) {
                    taskItem.style.display = "flex";
                } else {
                    taskItem.style.display = "none";
                }
            });
        }
    

