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
        alert('This username already exists. Please choose another username.');
    } else {
        const newUser = {
            username: username,
            password: password,
            todos: []
        };
        setUser(newUser);
        // ADD IN LOG IN FUNCTION WHEN WRITTEN HERE
    }
}