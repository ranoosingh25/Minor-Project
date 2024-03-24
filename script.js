document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
    function saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  
    function renderTasks() {
      taskList.innerHTML = '';
      tasks.forEach(function(task, index) {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
          <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
          <span class="complete" data-index="${index}">&#10003;</span>
          <span class="delete" data-index="${index}">X</span>
        `;
        taskList.appendChild(taskItem);
      });
    }
  
    taskForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        tasks.push({ text: taskText, completed: false });
        saveTasks();
        renderTasks();
        taskInput.value = '';
      }
    });
  
    taskList.addEventListener('click', function(event) {
      if (event.target.classList.contains('complete')) {
        const index = event.target.dataset.index;
        tasks[index].completed = !tasks[index].completed;
        saveTasks();
        renderTasks();
      } else if (event.target.classList.contains('delete')) {
        const index = event.target.dataset.index;
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
      }
    });
    

   
    function addTask(){
      if(inputBox.value === ''){
        alert("You must write something!");
      }
      else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        submit.appendChild(li);
      }
      inputBox.value="";
    }
  
    renderTasks();
  });