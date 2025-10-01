let tasks = ['task1', 'task2'];

const select = document.getElementById('select');


window.onload = () => {
    renderTask();
    sum();
}

function addTask() {
    const taskInput = document.getElementById('task-text');
    const task = taskInput.value.trim();

    if(task === '') return;

    tasks.push(task);
    taskInput.value = '';
}

function renderTask() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    
    const list = document.createElement('ul');
    
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerText = task;
        list.appendChild(li);
    });
    contentDiv.appendChild(list);
}

function priority() {
    function compare (a, b) {
        let value = select.value;

        if (value === 'Highest') {
            return a > b ? 1 : -1;
        }
        return a < b ? 1 : -1;
    }

    tasks.sort(compare);
    renderTask();
}

function sum() {
    const x = parseFloat(document.getElementById('x').value);
    const y = parseFloat(document.getElementById('y').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(x) || isNaN(y)) {
        resultDiv.innerText = 'Invalid input';
        return;
    }

    const result = x + y;
    resultDiv.innerText = result;
}