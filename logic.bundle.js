"use strict";
(self["webpackChunktodo_list_app"] = self["webpackChunktodo_list_app"] || []).push([["logic"],{

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageLoad": () => (/* binding */ pageLoad),
/* harmony export */   "projectArray": () => (/* binding */ projectArray),
/* harmony export */   "taskContainer": () => (/* binding */ taskContainer)
/* harmony export */ });
/* harmony import */ var _Icons_inbox_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icons/inbox-icon.png */ "./src/Icons/inbox-icon.png");
/* harmony import */ var _Icons_calendar_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icons/calendar-icon.png */ "./src/Icons/calendar-icon.png");
/* harmony import */ var _Icons_important_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icons/important-icon.png */ "./src/Icons/important-icon.png");
/* harmony import */ var _Icons_today_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icons/today-icon.png */ "./src/Icons/today-icon.png");
/* harmony import */ var _master_structure_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./master-structure.js */ "./src/master-structure.js");




const projectArray = document.createElement('div');


projectArray.classList.add('project-array');

const taskContainer = document.createElement('div');
taskContainer.classList.add('task-container');

const pageLoad = () => {
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');

    const headerElement = document.createElement('div');
    headerElement.classList.add('header');

    const mainElement = document.createElement('div');
    mainElement.classList.add('main');

    const footerElement = document.createElement('div');
    footerElement.classList.add('footer');
    footerElement.textContent = '© Made by DasTapan';

    // add to DOM
    document.body.appendChild(contentDiv);
    contentDiv.append(headerElement, mainElement, footerElement);

    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    const midsection = document.createElement('div');
    midsection.classList.add('midsection');

    // add to DOM
    mainElement.append(sidebar, midsection);

    const projectHeading = document.createElement('div');
    projectHeading.classList.add('project-heading');
    const projectName = document.createElement('span');
    projectName.textContent = _master_structure_js__WEBPACK_IMPORTED_MODULE_4__.masterArray[_master_structure_js__WEBPACK_IMPORTED_MODULE_4__.currentProjectIndex][0];
    const taskSpan = document.createElement('span');
    taskSpan.textContent = 'Add Task';
    const newTaskButton = document.createElement('button');
    newTaskButton.id = 'new-task';
    newTaskButton.classList.add('new-task');

    // create task form
    const newTaskForm = document.createElement('form');
    newTaskForm.action = '';
    newTaskForm.method = '';
    newTaskForm.classList.add('task-form', 'hidden');

    const formRowOne = document.createElement('div');
    formRowOne.classList.add('form-row');
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'title');
    titleLabel.textContent = 'Title :'
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.id = 'title';
    titleInput.name = 'title';
    formRowOne.append(titleLabel, titleInput);

    const formRowTwo = document.createElement('div');
    formRowTwo.classList.add('form-row');
    const textAreaLabel = document.createElement('label');
    textAreaLabel.setAttribute('for', 'details');
    textAreaLabel.textContent = 'Details :';
    const textAreaInput = document.createElement('textarea');
    textAreaInput.name = 'details';
    textAreaInput.id = 'details';
    formRowTwo.append(textAreaLabel, textAreaInput);

    const formRowThree = document.createElement('div');
    formRowThree.classList.add('form-row');
    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority :';
    priorityLabel.setAttribute('for', 'priority');
    const prioritySelect = document.createElement('select');
    prioritySelect.name = 'priority';
    prioritySelect.id = 'priority';
    const optionOne = document.createElement('option');
    optionOne.textContent = 'High';
    optionOne.value = 'h';
    const optionTwo = document.createElement('option');
    optionTwo.textContent = 'Medium';
    optionTwo.value = 'm';
    const optionThree = document.createElement('option');
    optionThree.textContent = 'Low';
    optionThree.value = 'l';
    prioritySelect.append(optionOne, optionTwo, optionThree);
    formRowThree.append(priorityLabel, prioritySelect);

    const formRowFour = document.createElement('div');
    formRowFour.classList.add('form-row');
    const dueDateLabel = document.createElement('label');
    dueDateLabel.textContent = 'Date :';
    dueDateLabel.setAttribute('for', 'due-date');
    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.name = 'due-date';
    dateInput.id = 'due-date';
    formRowFour.append(dueDateLabel, dateInput);

    const formRowFive = document.createElement('div');
    formRowFive.classList.add('form-row');
    const saveTaskButton = document.createElement('button');
    saveTaskButton.classList.add('task-button');
    saveTaskButton.textContent = 'Save';
    const cancelTaskButton = document.createElement('button');
    cancelTaskButton.classList.add('task-button');
    cancelTaskButton.textContent = 'Cancel';
    formRowFive.append(saveTaskButton, cancelTaskButton);

    // add to DOM
    newTaskForm.append(formRowOne, formRowTwo, formRowThree, formRowFour, formRowFive);
    projectHeading.append(projectName, taskSpan, newTaskButton, newTaskForm);

    //add to DOM
    midsection.append(projectHeading, taskContainer);

    const sidebarTop = document.createElement('div');
    sidebarTop.classList.add('sidebar-top');

    const sidebarBottom = document.createElement('div');
    sidebarBottom.classList.add('sidebar-bottom');

    // add to DOM
    sidebar.append(sidebarTop, sidebarBottom);

    const inboxDiv = document.createElement('div');
    inboxDiv.classList.add('inbox');

    const todayDiv = document.createElement('div');
    todayDiv.classList.add('today');

    const sevenDaysDiv = document.createElement('div');
    sevenDaysDiv.classList.add('seven-days');

    const importantDiv = document.createElement('div');
    importantDiv.classList.add('important');

    const inboxIcon = document.createElement('img');
    inboxIcon.classList.add('inbox-icon');
    inboxIcon.src = _Icons_inbox_icon_png__WEBPACK_IMPORTED_MODULE_0__;
    const inboxLink = document.createElement('a');
    inboxLink.classList.add('inbox-link');
    inboxLink.textContent = 'Inbox';

    //add to DOM
    inboxDiv.append(inboxIcon, inboxLink);

    const todayIcon = document.createElement('img');
    todayIcon.classList.add('today-icon');
    todayIcon.src = _Icons_today_icon_png__WEBPACK_IMPORTED_MODULE_3__;

    const todayLink = document.createElement('a');
    todayLink.classList.add('today-link');
    todayLink.textContent = 'Today';

    // add to DOM
    todayDiv.append(todayIcon, todayLink);

    const calendarIcon = document.createElement('img');
    calendarIcon.classList.add('calendar-icon');
    calendarIcon.src = _Icons_calendar_icon_png__WEBPACK_IMPORTED_MODULE_1__;

    const sevenDaysLink = document.createElement('a');
    sevenDaysLink.classList.add('sevenDays-link');
    sevenDaysLink.textContent = '7 Days';

    // add to DOM
    sevenDaysDiv.append(calendarIcon, sevenDaysLink);

    const importantIcon = document.createElement('img');
    importantIcon.classList.add('imp-icon');
    importantIcon.src = _Icons_important_icon_png__WEBPACK_IMPORTED_MODULE_2__;

    const importantLink = document.createElement('a');
    importantLink.classList.add('imp-link');
    importantLink.textContent = 'Important';

    // add to DOM
    importantDiv.append(importantIcon, importantLink);

    //add to DOM
    sidebarTop.append(inboxDiv, todayDiv, sevenDaysDiv, importantDiv);

    // for (let i = 0; i < masterArray.length; i++) {
    //     const projectDiv = document.createElement('div');
    //     projectDiv.classList.add('project');
    //     projectDiv.id = i;

    //     const nameSpan = document.createElement('span');
    //     nameSpan.classList.add('project-name');
    //     nameSpan.textContent = `${masterArray[i][0]} ` + 'Project';

    //     const deleteProjectButton = document.createElement('button');
    //     deleteProjectButton.classList.add('del-btn');

    //     // add to DOM
    //     projectDiv.append(nameSpan, deleteProjectButton);
    //     projectArray.appendChild(projectDiv);
    // }

    // const projectOne = document.createElement('div');
    // projectOne.classList.add('project-one');
    // const projectOneNameSpan = document.createElement('span');
    // projectOneNameSpan.classList.add('project-name');
    // projectOneNameSpan.textContent = 'Default Project';
    // const deleteProjectButton = document.createElement('button');
    // deleteProjectButton.classList.add('del-btn');

    // // add to DOM
    // projectOne.append(projectOneNameSpan, deleteProjectButton);
    // projectArray.append(projectOne);

    const actionDiv = document.createElement('div');
    actionDiv.classList.add('action');

    const addProjectButton = document.createElement('button');
    addProjectButton.classList.add('add-project');

    const actionSpan = document.createElement('span');
    actionSpan.setAttribute('id', 'add-project');
    actionSpan.textContent = 'Add Project';

    const projectPopUp = document.createElement('form');
    projectPopUp.action = '';
    projectPopUp.method = '';
    projectPopUp.classList.add('project-pop-up', 'hidden');
    const projectNameInput = document.createElement('input');
    projectNameInput.type = 'text';
    projectNameInput.id = 'name';
    projectNameInput.name = 'name';
    projectNameInput.setAttribute('required', '');
    const saveProjectButton = document.createElement('button');
    saveProjectButton.type = 'submit';
    saveProjectButton.textContent = 'Save';
    saveProjectButton.classList.add('project-change');
    saveProjectButton.id = 'save-project';
    const cancelProjectButton = document.createElement('button');
    cancelProjectButton.type = 'button';
    cancelProjectButton.textContent = 'Cancel';
    cancelProjectButton.classList.add('project-unchanged');
    cancelProjectButton.id = 'cancel-project';

    // add to DOM
    projectPopUp.append(projectNameInput, saveProjectButton, cancelProjectButton);

    // add to DOM
    actionDiv.append(addProjectButton, actionSpan, projectPopUp);
    sidebarBottom.append(projectArray, actionDiv);
};



/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _master_structure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./master-structure.js */ "./src/master-structure.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.js */ "./src/task.js");




const appLogic = (event) => {
    const _targetNode = event.target;
    const _className = _targetNode.className;

    const _formSubmission = (className) => {
        switch (className) {
            case 'project-pop-up':
                event.preventDefault();
                _targetNode.classList.toggle('hidden');
                const newProject = [];
                newProject.push(_targetNode.firstElementChild.value);
                _master_structure_js__WEBPACK_IMPORTED_MODULE_0__.masterArray.push(newProject);
                _targetNode.firstElementChild.value = '';
                (0,_project_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
                console.log(_master_structure_js__WEBPACK_IMPORTED_MODULE_0__.masterArray);
                break;

            default:
                break;
        }
    };

    const _toggle = (className) => {

        switch (className) {

            case 'task-title':
                _targetNode.parentElement.classList.remove('brief-layout');
                _targetNode.parentElement.classList.add('hidden');
                _targetNode.parentElement.nextElementSibling.classList.remove('hidden');
                break;

            case 'save':
                _targetNode.parentElement.classList.add('hidden');
                _targetNode.parentElement.previousElementSibling.classList.remove('hidden');
                _targetNode.parentElement.previousElementSibling.classList.add('brief-layout');
                break;

            case 'cancel':
                _targetNode.parentElement.classList.add('hidden');
                _targetNode.parentElement.previousElementSibling.classList.remove('hidden');
                _targetNode.parentElement.previousElementSibling.classList.add('brief-layout');
                break;

            case 'add-project':
                _targetNode.parentElement.lastElementChild.classList.toggle('hidden');
                break;

            case 'del-btn':
                let dummyArray = [];
                let projectId = _targetNode.parentElement.id;
                dummyArray = _master_structure_js__WEBPACK_IMPORTED_MODULE_0__.masterArray.filter((element) => _master_structure_js__WEBPACK_IMPORTED_MODULE_0__.masterArray.indexOf(element).toString() != projectId);
                _master_structure_js__WEBPACK_IMPORTED_MODULE_0__.masterArray.length = 0;
                _master_structure_js__WEBPACK_IMPORTED_MODULE_0__.masterArray.push(...dummyArray);
                (0,_project_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
                console.log(_master_structure_js__WEBPACK_IMPORTED_MODULE_0__.masterArray);
                break;

            case 'project-unchanged':
                _targetNode.previousElementSibling.previousElementSibling.value = '';
                _targetNode.parentElement.classList.toggle('hidden');
                break;

            case 'new-task':
                _targetNode.nextElementSibling.classList.toggle('hidden');
                break;

            case 'task-button':
                _targetNode.parentElement.parentElement.classList.toggle('hidden');
                break;

            case 'project-name':
                _master_structure_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex = Number(_targetNode.parentElement.id);
                (0,_task_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_master_structure_js__WEBPACK_IMPORTED_MODULE_0__.masterArray[_master_structure_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex]);
                break;

            default:
                break;
        }
    };

    const handleToggle = () => {
        _toggle(_className);
    };

    const handleSubmission = () => {
        let _sanitizedClassName = _className.split(' ')[0];
        _formSubmission(_sanitizedClassName);
    };

    return { handleToggle, handleSubmission };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appLogic);

/***/ }),

/***/ "./src/master-structure.js":
/*!*********************************!*\
  !*** ./src/master-structure.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currentProjectIndex": () => (/* binding */ currentProjectIndex),
/* harmony export */   "masterArray": () => (/* binding */ masterArray)
/* harmony export */ });
let currentProjectIndex = 0;

const defaultProject = [
    'Default',
    {
        status: 'incomplete',
        title: 'Buy Milk',
        dueDate: '23/12/2022',
        priority: 'H'
    },
    {
        status: 'incomplete',
        title: 'Recharge WiFi',
        dueDate: '12/12/2022',
        priority: 'L'
    },
    {
        status: 'incomplete',
        title: 'Exercise',
        dueDate: '07/11/2022',
        priority: 'L'
    },
];

const masterArray = [defaultProject,];



/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _master_structure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./master-structure.js */ "./src/master-structure.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");



console.log(_master_structure_js__WEBPACK_IMPORTED_MODULE_0__.masterArray);
const projectLoad = () => {
    // clean div 
    while (_home_js__WEBPACK_IMPORTED_MODULE_1__.projectArray.lastElementChild) {
        _home_js__WEBPACK_IMPORTED_MODULE_1__.projectArray.removeChild(_home_js__WEBPACK_IMPORTED_MODULE_1__.projectArray.lastElementChild);
    }

    for (let i = 0; i < _master_structure_js__WEBPACK_IMPORTED_MODULE_0__.masterArray.length; i++) {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.id = i;

        const nameSpan = document.createElement('span');
        nameSpan.classList.add('project-name');
        nameSpan.textContent = `${_master_structure_js__WEBPACK_IMPORTED_MODULE_0__.masterArray[i][0]} ` + 'Project';

        const deleteProjectButton = document.createElement('button');
        deleteProjectButton.classList.add('del-btn');

        // add to DOM
        projectDiv.append(nameSpan, deleteProjectButton);
        _home_js__WEBPACK_IMPORTED_MODULE_1__.projectArray.appendChild(projectDiv);
    }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectLoad);

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");


const taskLoad = (currentProject) => {
    while (_home_js__WEBPACK_IMPORTED_MODULE_0__.taskContainer.lastElementChild) {
        _home_js__WEBPACK_IMPORTED_MODULE_0__.taskContainer.removeChild(_home_js__WEBPACK_IMPORTED_MODULE_0__.taskContainer.lastElementChild);
    };

    for (let i = 1; i < currentProject.length; i++) {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task-div');

        const briefInfoDiv = document.createElement('div');
        briefInfoDiv.classList.add('brief-info', 'brief-layout');

        const checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        const titleSpan = document.createElement('span');
        titleSpan.classList.add('task-title');
        titleSpan.textContent = currentProject[i]['title'];
        const dateSpan = document.createElement('span');
        dateSpan.classList.add('due-date');
        dateSpan.textContent = currentProject[i]['dueDate'];
        const delButton = document.createElement('button');
        delButton.classList.add('delete-button');

        const demoButton = document.createElement('button');
        demoButton.classList.add('demo-button');
        demoButton.textContent = 'Demo';

        // add to DOM
        briefInfoDiv.append(checkBox, titleSpan, dateSpan, delButton);

        const rawInfoDiv = document.createElement('div');
        rawInfoDiv.classList.add('raw-info', 'hidden');

        // start edit form
        const formEdit = document.createElement('form');
        formEdit.action = '';
        formEdit.method = '';
        formEdit.classList.add('edit-details');

        const formRowOne = document.createElement('div');
        formRowOne.classList.add('form-row');
        const titleLabel = document.createElement('label');
        titleLabel.setAttribute('for', 'title');
        titleLabel.textContent = 'Title :'
        const titleInput = document.createElement('input');
        titleInput.type = 'text';
        titleInput.id = 'title';
        titleInput.name = 'title';
        const dateDiv = document.createElement('div');
        dateDiv.classList.add('date-div');
        const dueDateLabel = document.createElement('label');
        dueDateLabel.textContent = 'Date :';
        dueDateLabel.setAttribute('for', 'due-date');
        const dateInput = document.createElement('input');
        dateInput.type = 'date';
        dateInput.name = 'due-date';
        dateInput.id = 'due-date';

        // add to DOM
        formRowOne.append(titleLabel, titleInput, dueDateLabel, dateInput);

        const formRowTwo = document.createElement('div');
        formRowTwo.classList.add('form-row');
        const textAreaLabel = document.createElement('label');
        textAreaLabel.setAttribute('for', 'details');
        textAreaLabel.textContent = 'Details :';
        const textAreaInput = document.createElement('textarea');
        textAreaInput.name = 'details';
        textAreaInput.id = 'details';
        const priorityDiv = document.createElement('div');
        priorityDiv.classList.add('priority-div');
        const priorityLabel = document.createElement('label');
        priorityLabel.textContent = 'Priority :';
        priorityLabel.setAttribute('for', 'priority');
        const prioritySelect = document.createElement('select');
        prioritySelect.name = 'priority';
        prioritySelect.id = 'priority';
        const optionOne = document.createElement('option');
        optionOne.textContent = 'High';
        optionOne.value = 'h';
        const optionTwo = document.createElement('option');
        optionTwo.textContent = 'Medium';
        optionTwo.value = 'm';
        const optionThree = document.createElement('option');
        optionThree.textContent = 'Low';
        optionThree.value = 'l';

        // add to DOM
        prioritySelect.append(optionOne, optionTwo, optionThree);
        formRowTwo.append(textAreaLabel, textAreaInput, priorityLabel, prioritySelect);

        const formRowThree = document.createElement('div');
        formRowThree.classList.add('form-row');
        const saveEditButton = document.createElement('button');
        saveEditButton.id = 'save-edit';
        saveEditButton.textContent = 'Save';
        const cancelEditButton = document.createElement('button');
        cancelEditButton.id = 'cancel-edit';
        cancelEditButton.textContent = 'Cancel';

        // add to DOM
        formRowThree.append(saveEditButton, cancelEditButton);

        // add to DOM
        formEdit.append(formRowOne, formRowTwo, formRowThree);
        rawInfoDiv.append(formEdit);
        // end edit form

        // add to DOM
        taskDiv.append(briefInfoDiv, rawInfoDiv);
        _home_js__WEBPACK_IMPORTED_MODULE_0__.taskContainer.append(taskDiv);
    }

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskLoad);

/***/ }),

/***/ "./src/Icons/calendar-icon.png":
/*!*************************************!*\
  !*** ./src/Icons/calendar-icon.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ae291621799134cb0430.png";

/***/ }),

/***/ "./src/Icons/important-icon.png":
/*!**************************************!*\
  !*** ./src/Icons/important-icon.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dc2ce32611ac30be1df4.png";

/***/ }),

/***/ "./src/Icons/inbox-icon.png":
/*!**********************************!*\
  !*** ./src/Icons/inbox-icon.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5cfa5aef2decbfc72439.png";

/***/ }),

/***/ "./src/Icons/today-icon.png":
/*!**********************************!*\
  !*** ./src/Icons/today-icon.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "56bef64aa411ec0e98a5.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/logic.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsMERBQW9CO0FBQzVCOztBQUVBOztBQUVBLGlFQUFlLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21hc3Rlci1zdHJ1Y3R1cmUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdGFzay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW5ib3hJbWcgZnJvbSAnLi9JY29ucy9pbmJveC1pY29uLnBuZyc7XG5pbXBvcnQgY2FsZW5kYXJJbWcgZnJvbSAnLi9JY29ucy9jYWxlbmRhci1pY29uLnBuZyc7XG5pbXBvcnQgaW1wSW1nIGZyb20gJy4vSWNvbnMvaW1wb3J0YW50LWljb24ucG5nJztcbmltcG9ydCB0b2RheUltZyBmcm9tICcuL0ljb25zL3RvZGF5LWljb24ucG5nJztcbmNvbnN0IHByb2plY3RBcnJheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaW1wb3J0IHsgY3VycmVudFByb2plY3RJbmRleCxtYXN0ZXJBcnJheSB9IGZyb20gJy4vbWFzdGVyLXN0cnVjdHVyZS5qcyc7XG5cbnByb2plY3RBcnJheS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWFycmF5Jyk7XG5cbmNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1jb250YWluZXInKTtcblxuY29uc3QgcGFnZUxvYWQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnREaXYuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuXG4gICAgY29uc3QgaGVhZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG5cbiAgICBjb25zdCBtYWluRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcblxuICAgIGNvbnN0IGZvb3RlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuICAgIGZvb3RlckVsZW1lbnQudGV4dENvbnRlbnQgPSAnwqkgTWFkZSBieSBEYXNUYXBhbic7XG5cbiAgICAvLyBhZGQgdG8gRE9NXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50RGl2KTtcbiAgICBjb250ZW50RGl2LmFwcGVuZChoZWFkZXJFbGVtZW50LCBtYWluRWxlbWVudCwgZm9vdGVyRWxlbWVudCk7XG5cbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XG5cbiAgICBjb25zdCBtaWRzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWlkc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdtaWRzZWN0aW9uJyk7XG5cbiAgICAvLyBhZGQgdG8gRE9NXG4gICAgbWFpbkVsZW1lbnQuYXBwZW5kKHNpZGViYXIsIG1pZHNlY3Rpb24pO1xuXG4gICAgY29uc3QgcHJvamVjdEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0SGVhZGluZy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWhlYWRpbmcnKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IG1hc3RlckFycmF5W2N1cnJlbnRQcm9qZWN0SW5kZXhdWzBdO1xuICAgIGNvbnN0IHRhc2tTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRhc2tTcGFuLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcbiAgICBjb25zdCBuZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmV3VGFza0J1dHRvbi5pZCA9ICduZXctdGFzayc7XG4gICAgbmV3VGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCduZXctdGFzaycpO1xuXG4gICAgLy8gY3JlYXRlIHRhc2sgZm9ybVxuICAgIGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIG5ld1Rhc2tGb3JtLmFjdGlvbiA9ICcnO1xuICAgIG5ld1Rhc2tGb3JtLm1ldGhvZCA9ICcnO1xuICAgIG5ld1Rhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZm9ybScsICdoaWRkZW4nKTtcblxuICAgIGNvbnN0IGZvcm1Sb3dPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtUm93T25lLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tcm93Jyk7XG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0aXRsZScpO1xuICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnVGl0bGUgOidcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0aXRsZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgdGl0bGVJbnB1dC5pZCA9ICd0aXRsZSc7XG4gICAgdGl0bGVJbnB1dC5uYW1lID0gJ3RpdGxlJztcbiAgICBmb3JtUm93T25lLmFwcGVuZCh0aXRsZUxhYmVsLCB0aXRsZUlucHV0KTtcblxuICAgIGNvbnN0IGZvcm1Sb3dUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtUm93VHdvLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tcm93Jyk7XG4gICAgY29uc3QgdGV4dEFyZWFMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGV4dEFyZWFMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkZXRhaWxzJyk7XG4gICAgdGV4dEFyZWFMYWJlbC50ZXh0Q29udGVudCA9ICdEZXRhaWxzIDonO1xuICAgIGNvbnN0IHRleHRBcmVhSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIHRleHRBcmVhSW5wdXQubmFtZSA9ICdkZXRhaWxzJztcbiAgICB0ZXh0QXJlYUlucHV0LmlkID0gJ2RldGFpbHMnO1xuICAgIGZvcm1Sb3dUd28uYXBwZW5kKHRleHRBcmVhTGFiZWwsIHRleHRBcmVhSW5wdXQpO1xuXG4gICAgY29uc3QgZm9ybVJvd1RocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybVJvd1RocmVlLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tcm93Jyk7XG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSA6JztcbiAgICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5Jyk7XG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBwcmlvcml0eVNlbGVjdC5uYW1lID0gJ3ByaW9yaXR5JztcbiAgICBwcmlvcml0eVNlbGVjdC5pZCA9ICdwcmlvcml0eSc7XG4gICAgY29uc3Qgb3B0aW9uT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uT25lLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICAgIG9wdGlvbk9uZS52YWx1ZSA9ICdoJztcbiAgICBjb25zdCBvcHRpb25Ud28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb25Ud28udGV4dENvbnRlbnQgPSAnTWVkaXVtJztcbiAgICBvcHRpb25Ud28udmFsdWUgPSAnbSc7XG4gICAgY29uc3Qgb3B0aW9uVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb25UaHJlZS50ZXh0Q29udGVudCA9ICdMb3cnO1xuICAgIG9wdGlvblRocmVlLnZhbHVlID0gJ2wnO1xuICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZChvcHRpb25PbmUsIG9wdGlvblR3bywgb3B0aW9uVGhyZWUpO1xuICAgIGZvcm1Sb3dUaHJlZS5hcHBlbmQocHJpb3JpdHlMYWJlbCwgcHJpb3JpdHlTZWxlY3QpO1xuXG4gICAgY29uc3QgZm9ybVJvd0ZvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtUm93Rm91ci5jbGFzc0xpc3QuYWRkKCdmb3JtLXJvdycpO1xuICAgIGNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0RhdGUgOic7XG4gICAgZHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2R1ZS1kYXRlJyk7XG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICBkYXRlSW5wdXQubmFtZSA9ICdkdWUtZGF0ZSc7XG4gICAgZGF0ZUlucHV0LmlkID0gJ2R1ZS1kYXRlJztcbiAgICBmb3JtUm93Rm91ci5hcHBlbmQoZHVlRGF0ZUxhYmVsLCBkYXRlSW5wdXQpO1xuXG4gICAgY29uc3QgZm9ybVJvd0ZpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtUm93Rml2ZS5jbGFzc0xpc3QuYWRkKCdmb3JtLXJvdycpO1xuICAgIGNvbnN0IHNhdmVUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc2F2ZVRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgndGFzay1idXR0b24nKTtcbiAgICBzYXZlVGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdTYXZlJztcbiAgICBjb25zdCBjYW5jZWxUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWJ1dHRvbicpO1xuICAgIGNhbmNlbFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICBmb3JtUm93Rml2ZS5hcHBlbmQoc2F2ZVRhc2tCdXR0b24sIGNhbmNlbFRhc2tCdXR0b24pO1xuXG4gICAgLy8gYWRkIHRvIERPTVxuICAgIG5ld1Rhc2tGb3JtLmFwcGVuZChmb3JtUm93T25lLCBmb3JtUm93VHdvLCBmb3JtUm93VGhyZWUsIGZvcm1Sb3dGb3VyLCBmb3JtUm93Rml2ZSk7XG4gICAgcHJvamVjdEhlYWRpbmcuYXBwZW5kKHByb2plY3ROYW1lLCB0YXNrU3BhbiwgbmV3VGFza0J1dHRvbiwgbmV3VGFza0Zvcm0pO1xuXG4gICAgLy9hZGQgdG8gRE9NXG4gICAgbWlkc2VjdGlvbi5hcHBlbmQocHJvamVjdEhlYWRpbmcsIHRhc2tDb250YWluZXIpO1xuXG4gICAgY29uc3Qgc2lkZWJhclRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXJUb3AuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci10b3AnKTtcblxuICAgIGNvbnN0IHNpZGViYXJCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFyQm90dG9tLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItYm90dG9tJyk7XG5cbiAgICAvLyBhZGQgdG8gRE9NXG4gICAgc2lkZWJhci5hcHBlbmQoc2lkZWJhclRvcCwgc2lkZWJhckJvdHRvbSk7XG5cbiAgICBjb25zdCBpbmJveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluYm94RGl2LmNsYXNzTGlzdC5hZGQoJ2luYm94Jyk7XG5cbiAgICBjb25zdCB0b2RheURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZGF5RGl2LmNsYXNzTGlzdC5hZGQoJ3RvZGF5Jyk7XG5cbiAgICBjb25zdCBzZXZlbkRheXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZXZlbkRheXNEaXYuY2xhc3NMaXN0LmFkZCgnc2V2ZW4tZGF5cycpO1xuXG4gICAgY29uc3QgaW1wb3J0YW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1wb3J0YW50RGl2LmNsYXNzTGlzdC5hZGQoJ2ltcG9ydGFudCcpO1xuXG4gICAgY29uc3QgaW5ib3hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW5ib3hJY29uLmNsYXNzTGlzdC5hZGQoJ2luYm94LWljb24nKTtcbiAgICBpbmJveEljb24uc3JjID0gaW5ib3hJbWc7XG4gICAgY29uc3QgaW5ib3hMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGluYm94TGluay5jbGFzc0xpc3QuYWRkKCdpbmJveC1saW5rJyk7XG4gICAgaW5ib3hMaW5rLnRleHRDb250ZW50ID0gJ0luYm94JztcblxuICAgIC8vYWRkIHRvIERPTVxuICAgIGluYm94RGl2LmFwcGVuZChpbmJveEljb24sIGluYm94TGluayk7XG5cbiAgICBjb25zdCB0b2RheUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB0b2RheUljb24uY2xhc3NMaXN0LmFkZCgndG9kYXktaWNvbicpO1xuICAgIHRvZGF5SWNvbi5zcmMgPSB0b2RheUltZztcblxuICAgIGNvbnN0IHRvZGF5TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICB0b2RheUxpbmsuY2xhc3NMaXN0LmFkZCgndG9kYXktbGluaycpO1xuICAgIHRvZGF5TGluay50ZXh0Q29udGVudCA9ICdUb2RheSc7XG5cbiAgICAvLyBhZGQgdG8gRE9NXG4gICAgdG9kYXlEaXYuYXBwZW5kKHRvZGF5SWNvbiwgdG9kYXlMaW5rKTtcblxuICAgIGNvbnN0IGNhbGVuZGFySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNhbGVuZGFySWNvbi5jbGFzc0xpc3QuYWRkKCdjYWxlbmRhci1pY29uJyk7XG4gICAgY2FsZW5kYXJJY29uLnNyYyA9IGNhbGVuZGFySW1nO1xuXG4gICAgY29uc3Qgc2V2ZW5EYXlzTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBzZXZlbkRheXNMaW5rLmNsYXNzTGlzdC5hZGQoJ3NldmVuRGF5cy1saW5rJyk7XG4gICAgc2V2ZW5EYXlzTGluay50ZXh0Q29udGVudCA9ICc3IERheXMnO1xuXG4gICAgLy8gYWRkIHRvIERPTVxuICAgIHNldmVuRGF5c0Rpdi5hcHBlbmQoY2FsZW5kYXJJY29uLCBzZXZlbkRheXNMaW5rKTtcblxuICAgIGNvbnN0IGltcG9ydGFudEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbXBvcnRhbnRJY29uLmNsYXNzTGlzdC5hZGQoJ2ltcC1pY29uJyk7XG4gICAgaW1wb3J0YW50SWNvbi5zcmMgPSBpbXBJbWc7XG5cbiAgICBjb25zdCBpbXBvcnRhbnRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGltcG9ydGFudExpbmsuY2xhc3NMaXN0LmFkZCgnaW1wLWxpbmsnKTtcbiAgICBpbXBvcnRhbnRMaW5rLnRleHRDb250ZW50ID0gJ0ltcG9ydGFudCc7XG5cbiAgICAvLyBhZGQgdG8gRE9NXG4gICAgaW1wb3J0YW50RGl2LmFwcGVuZChpbXBvcnRhbnRJY29uLCBpbXBvcnRhbnRMaW5rKTtcblxuICAgIC8vYWRkIHRvIERPTVxuICAgIHNpZGViYXJUb3AuYXBwZW5kKGluYm94RGl2LCB0b2RheURpdiwgc2V2ZW5EYXlzRGl2LCBpbXBvcnRhbnREaXYpO1xuXG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBtYXN0ZXJBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgIC8vICAgICBwcm9qZWN0RGl2LmlkID0gaTtcblxuICAgIC8vICAgICBjb25zdCBuYW1lU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAvLyAgICAgbmFtZVNwYW4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lJyk7XG4gICAgLy8gICAgIG5hbWVTcGFuLnRleHRDb250ZW50ID0gYCR7bWFzdGVyQXJyYXlbaV1bMF19IGAgKyAnUHJvamVjdCc7XG5cbiAgICAvLyAgICAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIC8vICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbC1idG4nKTtcblxuICAgIC8vICAgICAvLyBhZGQgdG8gRE9NXG4gICAgLy8gICAgIHByb2plY3REaXYuYXBwZW5kKG5hbWVTcGFuLCBkZWxldGVQcm9qZWN0QnV0dG9uKTtcbiAgICAvLyAgICAgcHJvamVjdEFycmF5LmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICAgIC8vIH1cblxuICAgIC8vIGNvbnN0IHByb2plY3RPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyBwcm9qZWN0T25lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3Qtb25lJyk7XG4gICAgLy8gY29uc3QgcHJvamVjdE9uZU5hbWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIC8vIHByb2plY3RPbmVOYW1lU3Bhbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKTtcbiAgICAvLyBwcm9qZWN0T25lTmFtZVNwYW4udGV4dENvbnRlbnQgPSAnRGVmYXVsdCBQcm9qZWN0JztcbiAgICAvLyBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgLy8gZGVsZXRlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWwtYnRuJyk7XG5cbiAgICAvLyAvLyBhZGQgdG8gRE9NXG4gICAgLy8gcHJvamVjdE9uZS5hcHBlbmQocHJvamVjdE9uZU5hbWVTcGFuLCBkZWxldGVQcm9qZWN0QnV0dG9uKTtcbiAgICAvLyBwcm9qZWN0QXJyYXkuYXBwZW5kKHByb2plY3RPbmUpO1xuXG4gICAgY29uc3QgYWN0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWN0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ2FjdGlvbicpO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLXByb2plY3QnKTtcblxuICAgIGNvbnN0IGFjdGlvblNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgYWN0aW9uU3Bhbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC1wcm9qZWN0Jyk7XG4gICAgYWN0aW9uU3Bhbi50ZXh0Q29udGVudCA9ICdBZGQgUHJvamVjdCc7XG5cbiAgICBjb25zdCBwcm9qZWN0UG9wVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgcHJvamVjdFBvcFVwLmFjdGlvbiA9ICcnO1xuICAgIHByb2plY3RQb3BVcC5tZXRob2QgPSAnJztcbiAgICBwcm9qZWN0UG9wVXAuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1wb3AtdXAnLCAnaGlkZGVuJyk7XG4gICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJvamVjdE5hbWVJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIHByb2plY3ROYW1lSW5wdXQuaWQgPSAnbmFtZSc7XG4gICAgcHJvamVjdE5hbWVJbnB1dC5uYW1lID0gJ25hbWUnO1xuICAgIHByb2plY3ROYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICBjb25zdCBzYXZlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHNhdmVQcm9qZWN0QnV0dG9uLnR5cGUgPSAnc3VibWl0JztcbiAgICBzYXZlUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTYXZlJztcbiAgICBzYXZlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNoYW5nZScpO1xuICAgIHNhdmVQcm9qZWN0QnV0dG9uLmlkID0gJ3NhdmUtcHJvamVjdCc7XG4gICAgY29uc3QgY2FuY2VsUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbFByb2plY3RCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgIGNhbmNlbFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICBjYW5jZWxQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdW5jaGFuZ2VkJyk7XG4gICAgY2FuY2VsUHJvamVjdEJ1dHRvbi5pZCA9ICdjYW5jZWwtcHJvamVjdCc7XG5cbiAgICAvLyBhZGQgdG8gRE9NXG4gICAgcHJvamVjdFBvcFVwLmFwcGVuZChwcm9qZWN0TmFtZUlucHV0LCBzYXZlUHJvamVjdEJ1dHRvbiwgY2FuY2VsUHJvamVjdEJ1dHRvbik7XG5cbiAgICAvLyBhZGQgdG8gRE9NXG4gICAgYWN0aW9uRGl2LmFwcGVuZChhZGRQcm9qZWN0QnV0dG9uLCBhY3Rpb25TcGFuLCBwcm9qZWN0UG9wVXApO1xuICAgIHNpZGViYXJCb3R0b20uYXBwZW5kKHByb2plY3RBcnJheSwgYWN0aW9uRGl2KTtcbn07XG5cbmV4cG9ydCB7IHByb2plY3RBcnJheSwgdGFza0NvbnRhaW5lciwgcGFnZUxvYWQgfTsiLCJpbXBvcnQgeyBjdXJyZW50UHJvamVjdEluZGV4LCBtYXN0ZXJBcnJheSB9IGZyb20gXCIuL21hc3Rlci1zdHJ1Y3R1cmUuanNcIjtcbmltcG9ydCBwcm9qZWN0TG9hZCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgdGFza0xvYWQgZnJvbSBcIi4vdGFzay5qc1wiO1xuXG5jb25zdCBhcHBMb2dpYyA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IF90YXJnZXROb2RlID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IF9jbGFzc05hbWUgPSBfdGFyZ2V0Tm9kZS5jbGFzc05hbWU7XG5cbiAgICBjb25zdCBfZm9ybVN1Ym1pc3Npb24gPSAoY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgIHN3aXRjaCAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICBjYXNlICdwcm9qZWN0LXBvcC11cCc6XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBfdGFyZ2V0Tm9kZS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gW107XG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdC5wdXNoKF90YXJnZXROb2RlLmZpcnN0RWxlbWVudENoaWxkLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBtYXN0ZXJBcnJheS5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgICAgICAgICAgIF90YXJnZXROb2RlLmZpcnN0RWxlbWVudENoaWxkLnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgcHJvamVjdExvYWQoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtYXN0ZXJBcnJheSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgX3RvZ2dsZSA9IChjbGFzc05hbWUpID0+IHtcblxuICAgICAgICBzd2l0Y2ggKGNsYXNzTmFtZSkge1xuXG4gICAgICAgICAgICBjYXNlICd0YXNrLXRpdGxlJzpcbiAgICAgICAgICAgICAgICBfdGFyZ2V0Tm9kZS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2JyaWVmLWxheW91dCcpO1xuICAgICAgICAgICAgICAgIF90YXJnZXROb2RlLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgX3RhcmdldE5vZGUucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ3NhdmUnOlxuICAgICAgICAgICAgICAgIF90YXJnZXROb2RlLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgX3RhcmdldE5vZGUucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIF90YXJnZXROb2RlLnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdicmllZi1sYXlvdXQnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnY2FuY2VsJzpcbiAgICAgICAgICAgICAgICBfdGFyZ2V0Tm9kZS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIF90YXJnZXROb2RlLnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBfdGFyZ2V0Tm9kZS5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnYnJpZWYtbGF5b3V0Jyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2FkZC1wcm9qZWN0JzpcbiAgICAgICAgICAgICAgICBfdGFyZ2V0Tm9kZS5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2RlbC1idG4nOlxuICAgICAgICAgICAgICAgIGxldCBkdW1teUFycmF5ID0gW107XG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3RJZCA9IF90YXJnZXROb2RlLnBhcmVudEVsZW1lbnQuaWQ7XG4gICAgICAgICAgICAgICAgZHVtbXlBcnJheSA9IG1hc3RlckFycmF5LmZpbHRlcigoZWxlbWVudCkgPT4gbWFzdGVyQXJyYXkuaW5kZXhPZihlbGVtZW50KS50b1N0cmluZygpICE9IHByb2plY3RJZCk7XG4gICAgICAgICAgICAgICAgbWFzdGVyQXJyYXkubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICBtYXN0ZXJBcnJheS5wdXNoKC4uLmR1bW15QXJyYXkpO1xuICAgICAgICAgICAgICAgIHByb2plY3RMb2FkKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobWFzdGVyQXJyYXkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdwcm9qZWN0LXVuY2hhbmdlZCc6XG4gICAgICAgICAgICAgICAgX3RhcmdldE5vZGUucHJldmlvdXNFbGVtZW50U2libGluZy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgX3RhcmdldE5vZGUucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnbmV3LXRhc2snOlxuICAgICAgICAgICAgICAgIF90YXJnZXROb2RlLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAndGFzay1idXR0b24nOlxuICAgICAgICAgICAgICAgIF90YXJnZXROb2RlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAncHJvamVjdC1uYW1lJzpcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJvamVjdEluZGV4ID0gTnVtYmVyKF90YXJnZXROb2RlLnBhcmVudEVsZW1lbnQuaWQpO1xuICAgICAgICAgICAgICAgIHRhc2tMb2FkKG1hc3RlckFycmF5W2N1cnJlbnRQcm9qZWN0SW5kZXhdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVUb2dnbGUgPSAoKSA9PiB7XG4gICAgICAgIF90b2dnbGUoX2NsYXNzTmFtZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pc3Npb24gPSAoKSA9PiB7XG4gICAgICAgIGxldCBfc2FuaXRpemVkQ2xhc3NOYW1lID0gX2NsYXNzTmFtZS5zcGxpdCgnICcpWzBdO1xuICAgICAgICBfZm9ybVN1Ym1pc3Npb24oX3Nhbml0aXplZENsYXNzTmFtZSk7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGhhbmRsZVRvZ2dsZSwgaGFuZGxlU3VibWlzc2lvbiB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwTG9naWM7IiwibGV0IGN1cnJlbnRQcm9qZWN0SW5kZXggPSAwO1xuXG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IFtcbiAgICAnRGVmYXVsdCcsXG4gICAge1xuICAgICAgICBzdGF0dXM6ICdpbmNvbXBsZXRlJyxcbiAgICAgICAgdGl0bGU6ICdCdXkgTWlsaycsXG4gICAgICAgIGR1ZURhdGU6ICcyMy8xMi8yMDIyJyxcbiAgICAgICAgcHJpb3JpdHk6ICdIJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBzdGF0dXM6ICdpbmNvbXBsZXRlJyxcbiAgICAgICAgdGl0bGU6ICdSZWNoYXJnZSBXaUZpJyxcbiAgICAgICAgZHVlRGF0ZTogJzEyLzEyLzIwMjInLFxuICAgICAgICBwcmlvcml0eTogJ0wnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHN0YXR1czogJ2luY29tcGxldGUnLFxuICAgICAgICB0aXRsZTogJ0V4ZXJjaXNlJyxcbiAgICAgICAgZHVlRGF0ZTogJzA3LzExLzIwMjInLFxuICAgICAgICBwcmlvcml0eTogJ0wnXG4gICAgfSxcbl07XG5cbmNvbnN0IG1hc3RlckFycmF5ID0gW2RlZmF1bHRQcm9qZWN0LF07XG5cbmV4cG9ydCB7IGN1cnJlbnRQcm9qZWN0SW5kZXgsIG1hc3RlckFycmF5IH07IiwiaW1wb3J0IHsgbWFzdGVyQXJyYXkgfSBmcm9tIFwiLi9tYXN0ZXItc3RydWN0dXJlLmpzXCI7XG5pbXBvcnQgeyBwcm9qZWN0QXJyYXkgfSBmcm9tIFwiLi9ob21lLmpzXCI7XG5cbmNvbnNvbGUubG9nKG1hc3RlckFycmF5KTtcbmNvbnN0IHByb2plY3RMb2FkID0gKCkgPT4ge1xuICAgIC8vIGNsZWFuIGRpdiBcbiAgICB3aGlsZSAocHJvamVjdEFycmF5Lmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgcHJvamVjdEFycmF5LnJlbW92ZUNoaWxkKHByb2plY3RBcnJheS5sYXN0RWxlbWVudENoaWxkKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hc3RlckFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgICAgIHByb2plY3REaXYuaWQgPSBpO1xuXG4gICAgICAgIGNvbnN0IG5hbWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBuYW1lU3Bhbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKTtcbiAgICAgICAgbmFtZVNwYW4udGV4dENvbnRlbnQgPSBgJHttYXN0ZXJBcnJheVtpXVswXX0gYCArICdQcm9qZWN0JztcblxuICAgICAgICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsLWJ0bicpO1xuXG4gICAgICAgIC8vIGFkZCB0byBET01cbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmQobmFtZVNwYW4sIGRlbGV0ZVByb2plY3RCdXR0b24pO1xuICAgICAgICBwcm9qZWN0QXJyYXkuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdExvYWQ7IiwiaW1wb3J0IHsgdGFza0NvbnRhaW5lciB9IGZyb20gXCIuL2hvbWUuanNcIjtcblxuY29uc3QgdGFza0xvYWQgPSAoY3VycmVudFByb2plY3QpID0+IHtcbiAgICB3aGlsZSAodGFza0NvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgICAgIHRhc2tDb250YWluZXIucmVtb3ZlQ2hpbGQodGFza0NvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKTtcbiAgICB9O1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBjdXJyZW50UHJvamVjdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFzay1kaXYnKTtcblxuICAgICAgICBjb25zdCBicmllZkluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYnJpZWZJbmZvRGl2LmNsYXNzTGlzdC5hZGQoJ2JyaWVmLWluZm8nLCAnYnJpZWYtbGF5b3V0Jyk7XG5cbiAgICAgICAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjaGVja0JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgY29uc3QgdGl0bGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICB0aXRsZVNwYW4uY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpO1xuICAgICAgICB0aXRsZVNwYW4udGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdFtpXVsndGl0bGUnXTtcbiAgICAgICAgY29uc3QgZGF0ZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGRhdGVTcGFuLmNsYXNzTGlzdC5hZGQoJ2R1ZS1kYXRlJyk7XG4gICAgICAgIGRhdGVTcGFuLnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3RbaV1bJ2R1ZURhdGUnXTtcbiAgICAgICAgY29uc3QgZGVsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnV0dG9uJyk7XG5cbiAgICAgICAgY29uc3QgZGVtb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZW1vQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbW8tYnV0dG9uJyk7XG4gICAgICAgIGRlbW9CdXR0b24udGV4dENvbnRlbnQgPSAnRGVtbyc7XG5cbiAgICAgICAgLy8gYWRkIHRvIERPTVxuICAgICAgICBicmllZkluZm9EaXYuYXBwZW5kKGNoZWNrQm94LCB0aXRsZVNwYW4sIGRhdGVTcGFuLCBkZWxCdXR0b24pO1xuXG4gICAgICAgIGNvbnN0IHJhd0luZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcmF3SW5mb0Rpdi5jbGFzc0xpc3QuYWRkKCdyYXctaW5mbycsICdoaWRkZW4nKTtcblxuICAgICAgICAvLyBzdGFydCBlZGl0IGZvcm1cbiAgICAgICAgY29uc3QgZm9ybUVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGZvcm1FZGl0LmFjdGlvbiA9ICcnO1xuICAgICAgICBmb3JtRWRpdC5tZXRob2QgPSAnJztcbiAgICAgICAgZm9ybUVkaXQuY2xhc3NMaXN0LmFkZCgnZWRpdC1kZXRhaWxzJyk7XG5cbiAgICAgICAgY29uc3QgZm9ybVJvd09uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb3JtUm93T25lLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tcm93Jyk7XG4gICAgICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RpdGxlJyk7XG4gICAgICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnVGl0bGUgOidcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgdGl0bGVJbnB1dC5pZCA9ICd0aXRsZSc7XG4gICAgICAgIHRpdGxlSW5wdXQubmFtZSA9ICd0aXRsZSc7XG4gICAgICAgIGNvbnN0IGRhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGF0ZURpdi5jbGFzc0xpc3QuYWRkKCdkYXRlLWRpdicpO1xuICAgICAgICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBkdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRGF0ZSA6JztcbiAgICAgICAgZHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2R1ZS1kYXRlJyk7XG4gICAgICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGRhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgICAgICBkYXRlSW5wdXQubmFtZSA9ICdkdWUtZGF0ZSc7XG4gICAgICAgIGRhdGVJbnB1dC5pZCA9ICdkdWUtZGF0ZSc7XG5cbiAgICAgICAgLy8gYWRkIHRvIERPTVxuICAgICAgICBmb3JtUm93T25lLmFwcGVuZCh0aXRsZUxhYmVsLCB0aXRsZUlucHV0LCBkdWVEYXRlTGFiZWwsIGRhdGVJbnB1dCk7XG5cbiAgICAgICAgY29uc3QgZm9ybVJvd1R3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb3JtUm93VHdvLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tcm93Jyk7XG4gICAgICAgIGNvbnN0IHRleHRBcmVhTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICB0ZXh0QXJlYUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2RldGFpbHMnKTtcbiAgICAgICAgdGV4dEFyZWFMYWJlbC50ZXh0Q29udGVudCA9ICdEZXRhaWxzIDonO1xuICAgICAgICBjb25zdCB0ZXh0QXJlYUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgdGV4dEFyZWFJbnB1dC5uYW1lID0gJ2RldGFpbHMnO1xuICAgICAgICB0ZXh0QXJlYUlucHV0LmlkID0gJ2RldGFpbHMnO1xuICAgICAgICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1kaXYnKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHkgOic7XG4gICAgICAgIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHknKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgcHJpb3JpdHlTZWxlY3QubmFtZSA9ICdwcmlvcml0eSc7XG4gICAgICAgIHByaW9yaXR5U2VsZWN0LmlkID0gJ3ByaW9yaXR5JztcbiAgICAgICAgY29uc3Qgb3B0aW9uT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbk9uZS50ZXh0Q29udGVudCA9ICdIaWdoJztcbiAgICAgICAgb3B0aW9uT25lLnZhbHVlID0gJ2gnO1xuICAgICAgICBjb25zdCBvcHRpb25Ud28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uVHdvLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG4gICAgICAgIG9wdGlvblR3by52YWx1ZSA9ICdtJztcbiAgICAgICAgY29uc3Qgb3B0aW9uVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uVGhyZWUudGV4dENvbnRlbnQgPSAnTG93JztcbiAgICAgICAgb3B0aW9uVGhyZWUudmFsdWUgPSAnbCc7XG5cbiAgICAgICAgLy8gYWRkIHRvIERPTVxuICAgICAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmQob3B0aW9uT25lLCBvcHRpb25Ud28sIG9wdGlvblRocmVlKTtcbiAgICAgICAgZm9ybVJvd1R3by5hcHBlbmQodGV4dEFyZWFMYWJlbCwgdGV4dEFyZWFJbnB1dCwgcHJpb3JpdHlMYWJlbCwgcHJpb3JpdHlTZWxlY3QpO1xuXG4gICAgICAgIGNvbnN0IGZvcm1Sb3dUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb3JtUm93VGhyZWUuY2xhc3NMaXN0LmFkZCgnZm9ybS1yb3cnKTtcbiAgICAgICAgY29uc3Qgc2F2ZUVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc2F2ZUVkaXRCdXR0b24uaWQgPSAnc2F2ZS1lZGl0JztcbiAgICAgICAgc2F2ZUVkaXRCdXR0b24udGV4dENvbnRlbnQgPSAnU2F2ZSc7XG4gICAgICAgIGNvbnN0IGNhbmNlbEVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY2FuY2VsRWRpdEJ1dHRvbi5pZCA9ICdjYW5jZWwtZWRpdCc7XG4gICAgICAgIGNhbmNlbEVkaXRCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcblxuICAgICAgICAvLyBhZGQgdG8gRE9NXG4gICAgICAgIGZvcm1Sb3dUaHJlZS5hcHBlbmQoc2F2ZUVkaXRCdXR0b24sIGNhbmNlbEVkaXRCdXR0b24pO1xuXG4gICAgICAgIC8vIGFkZCB0byBET01cbiAgICAgICAgZm9ybUVkaXQuYXBwZW5kKGZvcm1Sb3dPbmUsIGZvcm1Sb3dUd28sIGZvcm1Sb3dUaHJlZSk7XG4gICAgICAgIHJhd0luZm9EaXYuYXBwZW5kKGZvcm1FZGl0KTtcbiAgICAgICAgLy8gZW5kIGVkaXQgZm9ybVxuXG4gICAgICAgIC8vIGFkZCB0byBET01cbiAgICAgICAgdGFza0Rpdi5hcHBlbmQoYnJpZWZJbmZvRGl2LCByYXdJbmZvRGl2KTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmQodGFza0Rpdik7XG4gICAgfVxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCB0YXNrTG9hZDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=