import { add, format, compareDesc, parseISO } from "date-fns";
import { masterArray } from "./master-structure.js";
import taskLoad from "./task.js";

const generateCurrentDate = () => new Date;

const _renderTodayTasks = () => {
    let todayDate = generateCurrentDate();
    todayDate = format(todayDate, 'dd-MM-yyyy');
    const taskArray = ['Today',];
    for (let i = 0; i < masterArray.length; i++) {
        for (let j = 1; j < masterArray[i].length; j++) {
            if (masterArray[i][j]['dueDate'] === todayDate) taskArray.push(masterArray[i][j])
        }
    };
    return taskArray;
};

const _renderSevenDayTasks = () => {
    let todayDate = generateCurrentDate();
    let seventhDay = add(todayDate, {
        days: 7,
    });
    //array to reverse "28-09-2022" to "2022-09-28"
    const arr = [];
    const taskArray = ['Seven Days',];
    //outer loop runs on master-array containing project arrays
    // inner loop runs on obj tasks stored in those arrays
    for (let i = 0; i < masterArray.length; i++) {
        for (let j = 1; j < masterArray[i].length; j++) {
            let storedDate = masterArray[i][j]['dueDate'];
            arr.length = 0;
            arr.push(...storedDate.split('-'));
            let formattedText = arr[2] + '-' + arr[1] + '-' + arr[0];
            let parsedDate = parseISO(formattedText);
            if (
                compareDesc(parsedDate, seventhDay) === 1
                ||
                compareDesc(parsedDate, seventhDay) === 0
            ) taskArray.push(masterArray[i][j])
        }
    };
    return taskArray;
};

const _renderImportant = () => {
    const taskArray = ['Important',];

    for (let i = 0; i < masterArray.length; i++) {
        for (let j = 1; j < masterArray[i].length; j++) {
            if (masterArray[i][j]['priority'] === 'h') taskArray.push(masterArray[i][j])
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
            taskLoad(_renderSevenDayTasks());
            break;

        case 'important':
            taskLoad(_renderImportant());
            break;

        default:
            break;
    }
};

export default display;