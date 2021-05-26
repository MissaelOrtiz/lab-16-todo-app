import { renderTodos } from '../todo/rendertodos.js';
import { logoutUser, getCurrentUser, setUser } from '../common/local-storage-utils.js';
import { createTodo } from '../todo/todo.js';


//grabs DOM elements for rendering Todos
const form = document.querySelector('form');
const logoutButton = document.querySelector('.logout-button');

//renders todo Tasks into ul 
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const todoTask = new FormData(form);

    createTodo(todoTask.get('message'));
    renderTodos();
    form.reset();

});



