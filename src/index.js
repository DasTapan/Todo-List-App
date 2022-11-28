import './style.css';
import pageLoad from './home.js';
import taskLoad from './task.js';
import appLogic from './logic.js';

pageLoad();
taskLoad();

document.addEventListener('click', (event) => {
    appLogic(event).handle();
});