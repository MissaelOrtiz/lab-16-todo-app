import { getCurrentUser } from '../common/local-storage-utils.js';
import { toggleTodo, nukeTodo } from './todo.js';


export function renderTodos(){
    //get ul DOM element
    const ul = document.querySelector('ul');
    //get current user
    const user = getCurrentUser();

    //clear current ul
    ul.textContent = '';

    //EDIT USER TODO OBJECT
    user.todos.forEach((todo) => {
        //make li element with to-do text string
        const div = document.createElement('div');
        const li = document.createElement('li');
        const button = document.createElement('button');

        li.textContent = todo.message;
        button.textContent = 'nuke it';
        button.style.marginLeft = '10px';
        button.classList = 'nuke-button hidden';
        button.value = todo.id;
        //style completed to-do
        if (todo.completed) {
            li.style.textDecoration = 'line-through';
            button.classList.toggle('hidden');
        }

        li.addEventListener('click', () => {
            toggleTodo(todo.id);
            renderTodos();
        });
        
        button.addEventListener('click', () => {
            nukeTodo(todo.id);
            renderTodos();
        });

        div.append(li, button);
        ul.append(div);
    });
}