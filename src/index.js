import './style.css';
import pageLoad from './home.js';
import taskLoad from './task.js';
import appLogic from './logic.js';

console.log('Jay Jagannath');
console.log('Har Har Mahadev');
console.log('Jay Bhabani');
console.log('Jay Ganapati');
console.log('Jay Surya Bhagban');

console.log('Sri Ram Jay Ram ');
console.log('Jagannath Swami Nayanpath Gami');
console.log('Shiv Shiv Narayan Narayan');

pageLoad();
taskLoad();

document.addEventListener('click', (event) => {
    appLogic(event).handle();
});