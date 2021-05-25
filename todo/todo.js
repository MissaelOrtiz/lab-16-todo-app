//import functions from local storage utils (getCurrentUser, setUser)
//import findbyId from utils

//creates a todo list, adds to user object todo array, updates user object
export function createTodo(todoTask) {

    //gets current user state
    const user = getCurrentUser();

    //creates new todo object for todo array in user object
    const newTodo = {
        id: Math.ceil(Math.random() * 1999),
        message: todoTask,
        completed: false,
    };

    //adds new todo to todo array in user object
    user.todos.push(newTodo);

    //updates user in local storage
    setUser(user);
}


//toggles the completed boolean in todos array in user object
export function toggleTodo(todoId) {

    //gets current user state
    const user = getCurrentUser();

    //looks for existing todo in the todo array in the user object
    const existingTodo = findById(user.todos, todoId);

    //if todo exists, toggles completed boolean 
    if (existingTodo) {
        existingTodo.completed = !existingTodo.completed;

        //updates user in local storage
        setUser(user);

        //if no match, alerts user that the todo does not exist
    } else {
        alert('task does not exist');
    }
}