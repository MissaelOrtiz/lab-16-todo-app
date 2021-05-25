export function getUser(username) {
    const stringyuser = localStorage.getItem(username);
    return JSON.parse(stringyuser);
}

export function setUser(user) {
    const stringyUser = JSON.stringyuser(user);
    localStorage.setItem(user.username, stringyUser);
}