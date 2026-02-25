export default class Task{
    constructor(title, description){
        this.title = title;
        this.description = description;
        this.isChecked = false
        this.id = Date.now();
    }
    
    saveTask(){
        const taskTexts = {
            title: this.title,
            description: this.description,
            isChecked: this.isChecked
        }
        
        localStorage.setItem(this.id, JSON.stringify(taskTexts));
    }

    renderTask() {
        const taskList = document.querySelector('.taskList');

        const taskItem = document.createElement('div');
        taskItem.classList.add('taskItem');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', ()=>{
            this.isChecked = checkbox.value
            this.saveTask()
        })

        const taskText = document.createElement('div');
        taskText.classList.add('taskText');

        const h2 = document.createElement('h2');
        h2.textContent = this.title;

        const p = document.createElement('p');
        p.textContent = this.description;

        const editButton = document.createElement('button')
        editButton.textContent = String.fromCharCode(9998)
        editButton.add

        const deleteButton = document.createElement('button');
        deleteButton.textContent = String.fromCharCode(215)
        deleteButton.addEventListener('click', ()=>{
            taskItem.remove()
        })

        taskText.appendChild(h2);
        taskText.appendChild(p);

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskText);
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);
    }
}