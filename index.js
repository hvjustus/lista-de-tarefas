import Task from './model/Task.js'

const form = document.getElementById('taskForm');
const titleInput = document.getElementById('titleInput')
const descriptionInput = document.getElementById('descriptionInput')

for(let i = 0; i < localStorage.length; i++){
    let key = localStorage.key(i)
    let data = JSON.parse(localStorage.getItem(key))

    let task = new Task(data.title, data.description)
    task.renderTask()
}


form.addEventListener('submit', (e) => {
    e.preventDefault()

    let title = titleInput.value
    let description = descriptionInput.value

    if(!title){
        alert('Adicione um título válido.')
        return
    }

    let task = new Task(title, description)
    task.saveTask()
    task.renderTask()
})