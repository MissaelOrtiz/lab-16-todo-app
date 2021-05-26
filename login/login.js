//imports function createUser from local storage
import { loginUser } from '../common/local-storage-utils.js';

//declares DOM on form button
const formButton = document.querySelector('form');

//on submit button click
formButton.addEventListener('submit', (event) => {
    event.preventDefault();

    const userInfo = new FormData(formButton);

    loginUser(userInfo.get('username'), userInfo.get('password'));
    //window.location = '../todo/';


});