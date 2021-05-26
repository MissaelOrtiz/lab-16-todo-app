import { getCurrentUser } from '../common/local-storage-utils.js';
import { toggleTodo } from './todos.js';


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
        const li = document.createElement('li');
        li.textContent = todo.message;

        //style completed to-do
        if (todo.completed) {
            li.style.textDecoration = 'line-through';
        }

        li.addEventListener('click', () => {
            //change completed boolean
            toggleTodo(todo.id);
            //render new ul
            renderTodos();
        });

        ul.appendChild('li');
    });
}