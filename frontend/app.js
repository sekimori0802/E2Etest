let tasks = [];

function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    
    if (taskText) {
        const task = {
            id: Date.now(),
            text: taskText,
            completed: false
        };
        
        tasks.push(task);
        input.value = '';
        renderTasks();
        
        // バックエンドにタスクを送信
        fetch('http://localhost:9000/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task)
        })
        .catch(error => console.error('Error:', error));
    }
}

function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        renderTasks();
        
        // バックエンドに更新を送信
        fetch(`http://localhost:9000/api/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task)
        })
        .catch(error => console.error('Error:', error));
    }
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
    
    // バックエンドに削除リクエストを送信
    fetch(`http://localhost:9000/api/tasks/${id}`, {
        method: 'DELETE'
    })
    .catch(error => console.error('Error:', error));
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = 'task-item';
        if (task.completed) {
            li.classList.add('completed');
        }
        
        li.innerHTML = `
            <span onclick="toggleTask(${task.id})" style="cursor: pointer;">
                ${task.text}
            </span>
            <button onclick="deleteTask(${task.id})">削除</button>
        `;
        
        taskList.appendChild(li);
    });
}

// 初期タスクの読み込み
window.addEventListener('load', () => {
    fetch('http://localhost:9000/api/tasks')
        .then(response => response.json())
        .then(data => {
            tasks = data;
            renderTasks();
        })
        .catch(error => console.error('Error:', error));
});

// エンターキーでタスクを追加
document.getElementById('taskInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
