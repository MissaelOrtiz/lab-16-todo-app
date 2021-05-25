export function getUser(username) {
    const stringyuser = localStorage.getItem(username);
    return JSON.parse(stringyuser);
}

export function setUser(user) {
    const stringyUser = JSON.stringyuser(user);
    localStorage.setItem(user.username, stringyUser);
}

export function createUser(username, password) {
    if (localStorage.getItem(username)) {
        alert('This username taken. Please choose another username.');
    } else {
        const newUser = {
            username: username,
            password: password,
            todos: []
        };
        setUser(newUser);
        loginUser(username, password);
    }
}

export function loginUser(username, password) {
    const user = getUser(username);
    if (user) {
        if (user.password === password) {
            localStorage.setItem('CURRENT_USER', username);
            window.location = './todo/';
        } else {
            alert('Incorrect username and/or password. Try again.');
        }
    } else {
        alert('This user not not exist. Try again or create a new user.');
    }
}