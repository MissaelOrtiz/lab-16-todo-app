export function getUser(username) {
    const stringyuser = localStorage.getItem(username);
    return JSON.parse(stringyuser);
}