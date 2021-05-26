//imports function createUser from local storage
import { createUser } from '../common/local-storage-utils.js';

//declares DOM on form button
const formButton = document.querySelector('form');

//on submit button click
formButton.addEventListener('submit', (event) => {
    event.preventDefault();

    const userInfo = new FormData(formButton);

    createUser(userInfo.get('username'), userInfo.get('password'));
    window.location = '../todo/';


});
