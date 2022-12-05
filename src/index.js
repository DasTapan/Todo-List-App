import './style.css';
import { pageLoad } from './home.js';
import projectLoad from './project.js';
import taskLoad from './task.js';
import appLogic from './logic.js';
import { masterArray } from './master-structure.js';
import display from './render.js';

pageLoad();
projectLoad();
taskLoad(masterArray[0]);

const sidebarTop = document.querySelector('.sidebar-top');

document.addEventListener('click', (event) => {
    appLogic(event).handleToggle();
});

document.addEventListener('submit', (event) => {
    appLogic(event).handleSubmission();
});

sidebarTop.addEventListener('click', (event) => {
    display(event);
});