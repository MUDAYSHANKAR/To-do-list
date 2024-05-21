let tasks = [];

function addTask() {
    const taskName = document.getElementById('taskName').value;
    const taskDueDate = document.getElementById('taskDueDate').value;
    const taskPriority = document.getElementById('taskPriority').value;

    if (taskName === '') {
        alert('Please enter a task name.');
        return;
    }

    const task = {
        id: Date.now(),
        name: taskName,
        dueDate: taskDueDate,
        priority: taskPriority,
        completed: false
    };

    tasks.push(task);
    document.getElementById('taskName').value = '';
    document.getElementById('taskDueDate').value = '';
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    
    tasks.forEach(task => {
        const taskElement = document.createElement('li');
        taskElement.className = `task ${task.completed ? 'completed' : ''}`;
        taskElement.innerHTML = `
            <span>${task.name} - ${task.dueDate} - ${task.priority}</span>
            <div>
                <button onclick="toggleComplete(${task.id})">${task.completed ? 'Undo' : 'Complete'}</button>
                <button onclick="editTask(${task.id})">Edit</button>
                <button onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
        taskList.appendChild(taskElement);
    });
}

function toggleComplete(id) {
    const task = tasks.find(task => task.id === id);
    task.completed = !task.completed;
    renderTasks();
}

function editTask(id) {
    const task = tasks.find(task => task.id === id);
    const newName = prompt('Edit task name:', task.name);
    if (newName !== null) {
        task.name = newName;
    }
    renderTasks();
}

function deleteTask(id) {
   
