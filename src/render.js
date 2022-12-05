import { format } from "date-fns";
import { masterArray } from "./master-structure.js";
import taskLoad from "./task.js";

const generateCurrentDate = () => new Date;

const _renderTodayTasks = () => {
    let todayDate = generateCurrentDate();
    todayDate = format(todayDate, 'dd-MM-yyyy');
    console.log(todayDate);
    console.log(typeof todayDate);
    const taskArray = ['Today',];
    for (let i = 0; i < masterArray.length; i++) {
        for (let j = 1; j < masterArray[i].length; j++) {
            if (masterArray[i][j]['dueDate'] === todayDate) taskArray.push(masterArray[i][j])
        }
    };
    return taskArray;
};

const display = (event) => {
    let targetNode = event.target.parentElement;
    let className = targetNode.className;

    switch (className) {
        case 'today':
            taskLoad(_renderTodayTasks());
            break;

        case 'seven-days':

            break;

        case 'important':

            break;

        default:
            break;
    }
};

export default display;