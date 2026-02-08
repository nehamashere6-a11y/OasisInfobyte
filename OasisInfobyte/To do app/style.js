let tasks = [];

const renderTasks = () => {
    const pending = document.getElementById('pendingTasksList');
    const completed = document.getElementById('completedTasksList');
    pending.innerHTML = completed.innerHTML = '';

    tasks.forEach((t, i) => {
        const li = document.createElement('li');
        li.className = `task-item ${t.completed ? 'completed' : ''}`;
        li.innerHTML = `
            <span>${t.text}
                <small>(${new Date(t.createdDate).toLocaleString()})</small>
                ${t.completed ? `<small>(Completed: ${new Date(t.completedDate).toLocaleString()})</small>` : ''}
            </span>
            <div class="task-actions">
                ${!t.completed ? `<button class="complete-btn" onclick="toggleComplete(${i})">Complete</button>` : ''}
                <button onclick="editTask(${i})">Edit</button>
                <button class="delete-btn" onclick="deleteTask(${i})">Delete</button>
            </div>
        `;
        (t.completed ? completed : pending).appendChild(li);
    });
};

const addTask = () => {
    const input = document.getElementById('taskInput');
    if (!input.value.trim()) return;

    tasks.push({
        text: input.value.trim(),
        completed: false,
        createdDate: new Date().toISOString(),
        completedDate: null
    });
    input.value = '';
    renderTasks();
};

const toggleComplete = i => {
    tasks[i].completed = !tasks[i].completed;
    tasks[i].completedDate = tasks[i].completed ? new Date().toISOString() : null;
    renderTasks();
};

const editTask = i => {
    const text = prompt('Edit your task:', tasks[i].text);
    if (text && text.trim()) {
        tasks[i].text = text.trim();
        renderTasks();
    }
};

const deleteTask = i => confirm('Page says! delete this task?') && (tasks.splice(i, 1), renderTasks());

document.addEventListener('DOMContentLoaded', renderTasks);
