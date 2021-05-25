import { getCurrentUser } from '../common/local-storage-utils.js';
import { toggleTodoCompleted } from './todos.js';

const ul = document.querySelector('ul');

export function renderTodos(){
    //get current user
    const user = getCurrentUser();

    //clear current ul
    ul.textContent = '';

    //EDIT USER TODO OBJECT
    user.todos.forEach((todo) => {
        //make li element with to-do text string
        const li = document.createElement('li');
        //EDIT/CONFIRM TODO TEXT VARIABLE
        li.textContent = todo.text;

        //style completed to-do
        if (todo.completed) {
            li.style.textDecoration = 'line-through';
        }

        li.addEventListener('click', () => {
            //EDIT/CONFIRM FUNCTION NAME + ARGUMENT
            toggleTodoCompleted(todo);
            renderTodos();
        });

        ul.appendChild('li');
    });
}