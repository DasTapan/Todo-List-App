import './style.css';
import { pageLoad } from './home.js';
import projectLoad from './project.js';
import taskLoad from './task.js';
import appLogic from './logic.js';

pageLoad();
projectLoad();
taskLoad();

document.addEventListener('click', (event) => {
    appLogic(event).handle();
});