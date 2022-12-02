import './style.css';
import { pageLoad } from './home.js';
import projectLoad from './project.js';
import taskLoad from './task.js';
import appLogic from './logic.js';
import { masterArray } from './master-structure.js';

pageLoad();
projectLoad();
taskLoad(masterArray[0]);

document.addEventListener('click', (event) => {
    appLogic(event).handleToggle();
});

document.addEventListener('submit', (event) => {
    appLogic(event).handleSubmission();
});