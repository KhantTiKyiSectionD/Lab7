const taskInput = document.getElementById('newTextInput');
const addTaskBtn = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

const addTask = () => {
const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Enter task');
        return;
    }
const listItem = document.createElement('li');
const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => listItem.classList.toggle('completed'));

const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => taskList.removeChild(listItem));

    listItem.appendChild(checkbox);
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteBtn);

    taskList.appendChild(listItem);
    taskInput.value = '';
    };

    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });