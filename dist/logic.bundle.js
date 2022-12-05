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
/* harmony export */   "projectName": () => (/* binding */ projectName),
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

const projectName = document.createElement('span'); // this is in global scope only to export

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
    projectName.textContent = _master_structure_js__WEBPACK_IMPORTED_MODULE_4__.masterArray[(0,_master_structure_js__WEBPACK_IMPORTED_MODULE_4__.getCurrentIndex)()][0];
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
    titleInput.setAttribute('required', '');
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
    prioritySelect.setAttribute('required', '');
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
    saveTaskButton.type = 'submit';
    saveTaskButton.classList.add('task-submit-button');
    saveTaskButton.textContent = 'Save';
    const cancelTaskButton = document.createElement('button');
    cancelTaskButton.type = 'button';
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
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.js */ "./src/home.js");





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

            case 'task-form':
                event.preventDefault();
                _targetNode.classList.toggle('hidden');
                const collection = _targetNode.children;
                const newTask = {
                    status: '',
                    details: collection[1].querySelector(':nth-child(2)').value,
                    title: collection[0].querySelector(':nth-child(2)').value,
                    dueDate: collection[3].querySelector(':nth-child(2)').value,
                    priority: collection[2].querySelector(':nth-child(2)').value,
                };
                _master_structure_js__WEBPACK_IMPORTED_MODULE_0__.masterArray[(0,_master_structure_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentIndex)()].push(newTask);
                (0,_task_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_master_structure_js__WEBPACK_IMPORTED_MODULE_0__.masterArray[(0,_master_structure_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentIndex)()]);
                console.log(_master_structure_js__WEBPACK_IMPORTED_MODULE_0__.masterArray[(0,_master_structure_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentIndex)()]);
                break;

            case 'edit-details':
                event.preventDefault();
                _targetNode.classList.toggle('hidden');
                let currentTaskIndex = Number(_targetNode.parentElement.parentElement.id);
                const taskCollection = _targetNode.children;
                console.log(currentTaskIndex);
                console.log(_master_structure_js__WEBPACK_IMPORTED_MODULE_0__.masterArray[(0,_master_structure_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentIndex)()][currentTaskIndex]);
                // console.log(taskCollection);
                const editedTask = {
                    status: '',
                    details: taskCollection[1].querySelector(':nth-child(2)').value,
                    title: taskCollection[0].querySelector(':nth-child(2)').value,
                    dueDate: taskCollection[0].querySelector(':nth-child(4)').value,
                    priority: taskCollection[1].querySelector(':nth-child(4)').value,
                };
                _master_structure_js__WEBPACK_IMPORTED_MODULE_0__.masterArray[(0,_master_structure_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentIndex)()][currentTaskIndex] = editedTask;
                (0,_task_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_master_structure_js__WEBPACK_IMPORTED_MODULE_0__.masterArray[(0,_master_structure_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentIndex)()]);
                console.log(_master_structure_js__WEBPACK_IMPORTED_MODULE_0__.masterArray[(0,_master_structure_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentIndex)()][currentTaskIndex]);
                break;

            default:
                break;
        }
    };

    const _toggle = (className) => {

        switch (className) {

            case 'task-title':
                // does not use toggle because display: flex & none doesn't co exist
                _targetNode.parentElement.classList.remove('brief-layout');
                _targetNode.parentElement.classList.add('hidden');
                _targetNode.parentElement.nextElementSibling.classList.remove('hidden');
                break;

            // case 'save':
            //     _targetNode.parentElement.classList.add('hidden');
            //     _targetNode.parentElement.previousElementSibling.classList.remove('hidden');
            //     _targetNode.parentElement.previousElementSibling.classList.add('brief-layout');
            //     break;

            case 'cancel-task':
                _targetNode.parentElement.parentElement.parentElement.previousElementSibling.classList.remove('hidden');
                _targetNode.parentElement.parentElement.parentElement.previousElementSibling.classList.add('brief-layout');
                _targetNode.parentElement.parentElement.parentElement.classList.add('hidden');
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
                (0,_master_structure_js__WEBPACK_IMPORTED_MODULE_0__.toggleIndex)(Number(_targetNode.parentElement.id));
                _home_js__WEBPACK_IMPORTED_MODULE_3__.projectName.textContent = _master_structure_js__WEBPACK_IMPORTED_MODULE_0__.masterArray[(0,_master_structure_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentIndex)()][0];
                (0,_task_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_master_structure_js__WEBPACK_IMPORTED_MODULE_0__.masterArray[(0,_master_structure_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentIndex)()]);
                break;

            case 'delete-button':
                let dummy = [];
                let targetedProject = _master_structure_js__WEBPACK_IMPORTED_MODULE_0__.masterArray[(0,_master_structure_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentIndex)()];
                let projId = _targetNode.parentElement.parentElement.id;
                dummy = targetedProject.filter((element) => targetedProject.indexOf(element).toString() != projId);
                targetedProject.length = 0;
                targetedProject.push(...dummy);
                (0,_task_js__WEBPACK_IMPORTED_MODULE_2__["default"])(targetedProject);
                break;

            default:
                break;
        }
    };

    const handleToggle = () => {
        _toggle(_className.split(' ')[0]);
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
/* harmony export */   "getCurrentIndex": () => (/* binding */ getCurrentIndex),
/* harmony export */   "masterArray": () => (/* binding */ masterArray),
/* harmony export */   "toggleIndex": () => (/* binding */ toggleIndex)
/* harmony export */ });
let _currentProjectIndex = 0;

const defaultProject = [
    'Default',
];

const _setProjectIndex = (newIndex) => {
    _currentProjectIndex = newIndex;
};

const toggleIndex = (newIndex) => {
    _setProjectIndex(newIndex);
};

const getCurrentIndex = () => {
    return _currentProjectIndex;
};

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



// console.log(masterArray);
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
        taskDiv.id = i;
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

        if (currentProject[i]['priority'] === 'h') {
            titleSpan.classList.add('high-priority')
            dateSpan.classList.add('high-priority')
        } else if (currentProject[i]['priority'] === 'm') {
            titleSpan.classList.add('medium-priority')
            dateSpan.classList.add('medium-priority')
        };

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
        titleInput.value = currentProject[i]['title'];
        const dateDiv = document.createElement('div');
        dateDiv.classList.add('date-div');
        const dueDateLabel = document.createElement('label');
        dueDateLabel.textContent = 'Date :';
        dueDateLabel.setAttribute('for', 'due-date');
        const dateInput = document.createElement('input');
        dateInput.type = 'date';
        dateInput.name = 'due-date';
        dateInput.id = 'due-date';
        dateInput.value = currentProject[i]['dueDate'];

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
        textAreaInput.textContent = currentProject[i]['details'];
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
        if(currentProject[i]['priority'] === 'h') prioritySelect.value = optionOne.value
        else if(currentProject[i]['priority'] === 'm') prioritySelect.value = optionTwo.value
        else if(currentProject[i]['priority'] === 'l') prioritySelect.value = optionThree.value
        formRowTwo.append(textAreaLabel, textAreaInput, priorityLabel, prioritySelect);

        const formRowThree = document.createElement('div');
        formRowThree.classList.add('form-row');
        const saveEditButton = document.createElement('button');
        saveEditButton.type = 'submit';
        saveEditButton.id = 'save-edit';
        saveEditButton.textContent = 'Save';
        const cancelEditButton = document.createElement('button');
        cancelEditButton.type = 'button';
        cancelEditButton.id = 'cancel-edit';
        cancelEditButton.classList.add('cancel-task');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxRQUFROztBQUVyRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLDhEQUF3QjtBQUNoQztBQUNBOztBQUVBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7OztBQzVCZ0I7O0FBRTFDO0FBQ0EsV0FBVyxvRUFBOEI7QUFDekMsUUFBUSwrREFBeUIsQ0FBQyxvRUFBOEI7QUFDaEU7O0FBRUEsb0JBQW9CLDJCQUEyQjtBQUMvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLDBEQUFvQjtBQUM1Qjs7QUFFQTs7QUFFQSxpRUFBZSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tYXN0ZXItc3RydWN0dXJlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3Rhc2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGluYm94SW1nIGZyb20gJy4vSWNvbnMvaW5ib3gtaWNvbi5wbmcnO1xuaW1wb3J0IGNhbGVuZGFySW1nIGZyb20gJy4vSWNvbnMvY2FsZW5kYXItaWNvbi5wbmcnO1xuaW1wb3J0IGltcEltZyBmcm9tICcuL0ljb25zL2ltcG9ydGFudC1pY29uLnBuZyc7XG5pbXBvcnQgdG9kYXlJbWcgZnJvbSAnLi9JY29ucy90b2RheS1pY29uLnBuZyc7XG5pbXBvcnQgeyBnZXRDdXJyZW50SW5kZXgsIG1hc3RlckFycmF5IH0gZnJvbSAnLi9tYXN0ZXItc3RydWN0dXJlLmpzJztcblxuY29uc3QgcHJvamVjdEFycmF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5wcm9qZWN0QXJyYXkuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1hcnJheScpO1xuXG5jb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGFpbmVyJyk7XG5cbmNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpOyAvLyB0aGlzIGlzIGluIGdsb2JhbCBzY29wZSBvbmx5IHRvIGV4cG9ydFxuXG5jb25zdCBwYWdlTG9hZCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudERpdi5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG5cbiAgICBjb25zdCBoZWFkZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICAgIGNvbnN0IG1haW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuXG4gICAgY29uc3QgZm9vdGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3RlckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG4gICAgZm9vdGVyRWxlbWVudC50ZXh0Q29udGVudCA9ICfCqSBNYWRlIGJ5IERhc1RhcGFuJztcblxuICAgIC8vIGFkZCB0byBET01cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnREaXYpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kKGhlYWRlckVsZW1lbnQsIG1haW5FbGVtZW50LCBmb290ZXJFbGVtZW50KTtcblxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKTtcblxuICAgIGNvbnN0IG1pZHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtaWRzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ21pZHNlY3Rpb24nKTtcblxuICAgIC8vIGFkZCB0byBET01cbiAgICBtYWluRWxlbWVudC5hcHBlbmQoc2lkZWJhciwgbWlkc2VjdGlvbik7XG5cbiAgICBjb25zdCBwcm9qZWN0SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaGVhZGluZycpO1xuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gbWFzdGVyQXJyYXlbZ2V0Q3VycmVudEluZGV4KCldWzBdO1xuICAgIGNvbnN0IHRhc2tTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRhc2tTcGFuLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcbiAgICBjb25zdCBuZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmV3VGFza0J1dHRvbi5pZCA9ICduZXctdGFzayc7XG4gICAgbmV3VGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCduZXctdGFzaycpO1xuXG4gICAgLy8gY3JlYXRlIHRhc2sgZm9ybVxuICAgIGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIG5ld1Rhc2tGb3JtLmFjdGlvbiA9ICcnO1xuICAgIG5ld1Rhc2tGb3JtLm1ldGhvZCA9ICcnO1xuICAgIG5ld1Rhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZm9ybScsICdoaWRkZW4nKTtcblxuICAgIGNvbnN0IGZvcm1Sb3dPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtUm93T25lLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tcm93Jyk7XG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0aXRsZScpO1xuICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnVGl0bGUgOidcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gICAgdGl0bGVJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIHRpdGxlSW5wdXQuaWQgPSAndGl0bGUnO1xuICAgIHRpdGxlSW5wdXQubmFtZSA9ICd0aXRsZSc7XG4gICAgZm9ybVJvd09uZS5hcHBlbmQodGl0bGVMYWJlbCwgdGl0bGVJbnB1dCk7XG5cbiAgICBjb25zdCBmb3JtUm93VHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybVJvd1R3by5jbGFzc0xpc3QuYWRkKCdmb3JtLXJvdycpO1xuICAgIGNvbnN0IHRleHRBcmVhTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRleHRBcmVhTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGV0YWlscycpO1xuICAgIHRleHRBcmVhTGFiZWwudGV4dENvbnRlbnQgPSAnRGV0YWlscyA6JztcbiAgICBjb25zdCB0ZXh0QXJlYUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICB0ZXh0QXJlYUlucHV0Lm5hbWUgPSAnZGV0YWlscyc7XG4gICAgdGV4dEFyZWFJbnB1dC5pZCA9ICdkZXRhaWxzJztcbiAgICBmb3JtUm93VHdvLmFwcGVuZCh0ZXh0QXJlYUxhYmVsLCB0ZXh0QXJlYUlucHV0KTtcblxuICAgIGNvbnN0IGZvcm1Sb3dUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Sb3dUaHJlZS5jbGFzc0xpc3QuYWRkKCdmb3JtLXJvdycpO1xuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHkgOic7XG4gICAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eScpO1xuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJpb3JpdHlTZWxlY3Quc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICBwcmlvcml0eVNlbGVjdC5uYW1lID0gJ3ByaW9yaXR5JztcbiAgICBwcmlvcml0eVNlbGVjdC5pZCA9ICdwcmlvcml0eSc7XG4gICAgY29uc3Qgb3B0aW9uT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uT25lLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICAgIG9wdGlvbk9uZS52YWx1ZSA9ICdoJztcbiAgICBjb25zdCBvcHRpb25Ud28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb25Ud28udGV4dENvbnRlbnQgPSAnTWVkaXVtJztcbiAgICBvcHRpb25Ud28udmFsdWUgPSAnbSc7XG4gICAgY29uc3Qgb3B0aW9uVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb25UaHJlZS50ZXh0Q29udGVudCA9ICdMb3cnO1xuICAgIG9wdGlvblRocmVlLnZhbHVlID0gJ2wnO1xuICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZChvcHRpb25PbmUsIG9wdGlvblR3bywgb3B0aW9uVGhyZWUpO1xuICAgIGZvcm1Sb3dUaHJlZS5hcHBlbmQocHJpb3JpdHlMYWJlbCwgcHJpb3JpdHlTZWxlY3QpO1xuXG4gICAgY29uc3QgZm9ybVJvd0ZvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtUm93Rm91ci5jbGFzc0xpc3QuYWRkKCdmb3JtLXJvdycpO1xuICAgIGNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0RhdGUgOic7XG4gICAgZHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2R1ZS1kYXRlJyk7XG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICBkYXRlSW5wdXQubmFtZSA9ICdkdWUtZGF0ZSc7XG4gICAgZGF0ZUlucHV0LmlkID0gJ2R1ZS1kYXRlJztcbiAgICBmb3JtUm93Rm91ci5hcHBlbmQoZHVlRGF0ZUxhYmVsLCBkYXRlSW5wdXQpO1xuXG4gICAgY29uc3QgZm9ybVJvd0ZpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtUm93Rml2ZS5jbGFzc0xpc3QuYWRkKCdmb3JtLXJvdycpO1xuICAgIGNvbnN0IHNhdmVUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc2F2ZVRhc2tCdXR0b24udHlwZSA9ICdzdWJtaXQnO1xuICAgIHNhdmVUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stc3VibWl0LWJ1dHRvbicpO1xuICAgIHNhdmVUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gJ1NhdmUnO1xuICAgIGNvbnN0IGNhbmNlbFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxUYXNrQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICBjYW5jZWxUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stYnV0dG9uJyk7XG4gICAgY2FuY2VsVGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIGZvcm1Sb3dGaXZlLmFwcGVuZChzYXZlVGFza0J1dHRvbiwgY2FuY2VsVGFza0J1dHRvbik7XG5cbiAgICAvLyBhZGQgdG8gRE9NXG4gICAgbmV3VGFza0Zvcm0uYXBwZW5kKGZvcm1Sb3dPbmUsIGZvcm1Sb3dUd28sIGZvcm1Sb3dUaHJlZSwgZm9ybVJvd0ZvdXIsIGZvcm1Sb3dGaXZlKTtcbiAgICBwcm9qZWN0SGVhZGluZy5hcHBlbmQocHJvamVjdE5hbWUsIHRhc2tTcGFuLCBuZXdUYXNrQnV0dG9uLCBuZXdUYXNrRm9ybSk7XG5cbiAgICAvL2FkZCB0byBET01cbiAgICBtaWRzZWN0aW9uLmFwcGVuZChwcm9qZWN0SGVhZGluZywgdGFza0NvbnRhaW5lcik7XG5cbiAgICBjb25zdCBzaWRlYmFyVG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZWJhclRvcC5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLXRvcCcpO1xuXG4gICAgY29uc3Qgc2lkZWJhckJvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXJCb3R0b20uY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1ib3R0b20nKTtcblxuICAgIC8vIGFkZCB0byBET01cbiAgICBzaWRlYmFyLmFwcGVuZChzaWRlYmFyVG9wLCBzaWRlYmFyQm90dG9tKTtcblxuICAgIGNvbnN0IGluYm94RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5ib3hEaXYuY2xhc3NMaXN0LmFkZCgnaW5ib3gnKTtcblxuICAgIGNvbnN0IHRvZGF5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kYXlEaXYuY2xhc3NMaXN0LmFkZCgndG9kYXknKTtcblxuICAgIGNvbnN0IHNldmVuRGF5c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNldmVuRGF5c0Rpdi5jbGFzc0xpc3QuYWRkKCdzZXZlbi1kYXlzJyk7XG5cbiAgICBjb25zdCBpbXBvcnRhbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbXBvcnRhbnREaXYuY2xhc3NMaXN0LmFkZCgnaW1wb3J0YW50Jyk7XG5cbiAgICBjb25zdCBpbmJveEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbmJveEljb24uY2xhc3NMaXN0LmFkZCgnaW5ib3gtaWNvbicpO1xuICAgIGluYm94SWNvbi5zcmMgPSBpbmJveEltZztcbiAgICBjb25zdCBpbmJveExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgaW5ib3hMaW5rLmNsYXNzTGlzdC5hZGQoJ2luYm94LWxpbmsnKTtcbiAgICBpbmJveExpbmsudGV4dENvbnRlbnQgPSAnSW5ib3gnO1xuXG4gICAgLy9hZGQgdG8gRE9NXG4gICAgaW5ib3hEaXYuYXBwZW5kKGluYm94SWNvbiwgaW5ib3hMaW5rKTtcblxuICAgIGNvbnN0IHRvZGF5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHRvZGF5SWNvbi5jbGFzc0xpc3QuYWRkKCd0b2RheS1pY29uJyk7XG4gICAgdG9kYXlJY29uLnNyYyA9IHRvZGF5SW1nO1xuXG4gICAgY29uc3QgdG9kYXlMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHRvZGF5TGluay5jbGFzc0xpc3QuYWRkKCd0b2RheS1saW5rJyk7XG4gICAgdG9kYXlMaW5rLnRleHRDb250ZW50ID0gJ1RvZGF5JztcblxuICAgIC8vIGFkZCB0byBET01cbiAgICB0b2RheURpdi5hcHBlbmQodG9kYXlJY29uLCB0b2RheUxpbmspO1xuXG4gICAgY29uc3QgY2FsZW5kYXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY2FsZW5kYXJJY29uLmNsYXNzTGlzdC5hZGQoJ2NhbGVuZGFyLWljb24nKTtcbiAgICBjYWxlbmRhckljb24uc3JjID0gY2FsZW5kYXJJbWc7XG5cbiAgICBjb25zdCBzZXZlbkRheXNMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHNldmVuRGF5c0xpbmsuY2xhc3NMaXN0LmFkZCgnc2V2ZW5EYXlzLWxpbmsnKTtcbiAgICBzZXZlbkRheXNMaW5rLnRleHRDb250ZW50ID0gJzcgRGF5cyc7XG5cbiAgICAvLyBhZGQgdG8gRE9NXG4gICAgc2V2ZW5EYXlzRGl2LmFwcGVuZChjYWxlbmRhckljb24sIHNldmVuRGF5c0xpbmspO1xuXG4gICAgY29uc3QgaW1wb3J0YW50SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltcG9ydGFudEljb24uY2xhc3NMaXN0LmFkZCgnaW1wLWljb24nKTtcbiAgICBpbXBvcnRhbnRJY29uLnNyYyA9IGltcEltZztcblxuICAgIGNvbnN0IGltcG9ydGFudExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgaW1wb3J0YW50TGluay5jbGFzc0xpc3QuYWRkKCdpbXAtbGluaycpO1xuICAgIGltcG9ydGFudExpbmsudGV4dENvbnRlbnQgPSAnSW1wb3J0YW50JztcblxuICAgIC8vIGFkZCB0byBET01cbiAgICBpbXBvcnRhbnREaXYuYXBwZW5kKGltcG9ydGFudEljb24sIGltcG9ydGFudExpbmspO1xuXG4gICAgLy9hZGQgdG8gRE9NXG4gICAgc2lkZWJhclRvcC5hcHBlbmQoaW5ib3hEaXYsIHRvZGF5RGl2LCBzZXZlbkRheXNEaXYsIGltcG9ydGFudERpdik7XG5cbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IG1hc3RlckFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyAgICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgLy8gICAgIHByb2plY3REaXYuaWQgPSBpO1xuXG4gICAgLy8gICAgIGNvbnN0IG5hbWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIC8vICAgICBuYW1lU3Bhbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKTtcbiAgICAvLyAgICAgbmFtZVNwYW4udGV4dENvbnRlbnQgPSBgJHttYXN0ZXJBcnJheVtpXVswXX0gYCArICdQcm9qZWN0JztcblxuICAgIC8vICAgICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgLy8gICAgIGRlbGV0ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsLWJ0bicpO1xuXG4gICAgLy8gICAgIC8vIGFkZCB0byBET01cbiAgICAvLyAgICAgcHJvamVjdERpdi5hcHBlbmQobmFtZVNwYW4sIGRlbGV0ZVByb2plY3RCdXR0b24pO1xuICAgIC8vICAgICBwcm9qZWN0QXJyYXkuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gICAgLy8gfVxuXG4gICAgLy8gY29uc3QgcHJvamVjdE9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vIHByb2plY3RPbmUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1vbmUnKTtcbiAgICAvLyBjb25zdCBwcm9qZWN0T25lTmFtZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgLy8gcHJvamVjdE9uZU5hbWVTcGFuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbmFtZScpO1xuICAgIC8vIHByb2plY3RPbmVOYW1lU3Bhbi50ZXh0Q29udGVudCA9ICdEZWZhdWx0IFByb2plY3QnO1xuICAgIC8vIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAvLyBkZWxldGVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbC1idG4nKTtcblxuICAgIC8vIC8vIGFkZCB0byBET01cbiAgICAvLyBwcm9qZWN0T25lLmFwcGVuZChwcm9qZWN0T25lTmFtZVNwYW4sIGRlbGV0ZVByb2plY3RCdXR0b24pO1xuICAgIC8vIHByb2plY3RBcnJheS5hcHBlbmQocHJvamVjdE9uZSk7XG5cbiAgICBjb25zdCBhY3Rpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhY3Rpb25EaXYuY2xhc3NMaXN0LmFkZCgnYWN0aW9uJyk7XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdCcpO1xuXG4gICAgY29uc3QgYWN0aW9uU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBhY3Rpb25TcGFuLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXByb2plY3QnKTtcbiAgICBhY3Rpb25TcGFuLnRleHRDb250ZW50ID0gJ0FkZCBQcm9qZWN0JztcblxuICAgIGNvbnN0IHByb2plY3RQb3BVcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBwcm9qZWN0UG9wVXAuYWN0aW9uID0gJyc7XG4gICAgcHJvamVjdFBvcFVwLm1ldGhvZCA9ICcnO1xuICAgIHByb2plY3RQb3BVcC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXBvcC11cCcsICdoaWRkZW4nKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwcm9qZWN0TmFtZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgcHJvamVjdE5hbWVJbnB1dC5pZCA9ICduYW1lJztcbiAgICBwcm9qZWN0TmFtZUlucHV0Lm5hbWUgPSAnbmFtZSc7XG4gICAgcHJvamVjdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgIGNvbnN0IHNhdmVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc2F2ZVByb2plY3RCdXR0b24udHlwZSA9ICdzdWJtaXQnO1xuICAgIHNhdmVQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ1NhdmUnO1xuICAgIHNhdmVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY2hhbmdlJyk7XG4gICAgc2F2ZVByb2plY3RCdXR0b24uaWQgPSAnc2F2ZS1wcm9qZWN0JztcbiAgICBjb25zdCBjYW5jZWxQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsUHJvamVjdEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgY2FuY2VsUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIGNhbmNlbFByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC11bmNoYW5nZWQnKTtcbiAgICBjYW5jZWxQcm9qZWN0QnV0dG9uLmlkID0gJ2NhbmNlbC1wcm9qZWN0JztcblxuICAgIC8vIGFkZCB0byBET01cbiAgICBwcm9qZWN0UG9wVXAuYXBwZW5kKHByb2plY3ROYW1lSW5wdXQsIHNhdmVQcm9qZWN0QnV0dG9uLCBjYW5jZWxQcm9qZWN0QnV0dG9uKTtcblxuICAgIC8vIGFkZCB0byBET01cbiAgICBhY3Rpb25EaXYuYXBwZW5kKGFkZFByb2plY3RCdXR0b24sIGFjdGlvblNwYW4sIHByb2plY3RQb3BVcCk7XG4gICAgc2lkZWJhckJvdHRvbS5hcHBlbmQocHJvamVjdEFycmF5LCBhY3Rpb25EaXYpO1xufTtcblxuZXhwb3J0IHsgcHJvamVjdEFycmF5LCB0YXNrQ29udGFpbmVyLCBwcm9qZWN0TmFtZSwgcGFnZUxvYWQgfTsiLCJpbXBvcnQgeyB0b2dnbGVJbmRleCwgZ2V0Q3VycmVudEluZGV4LCBtYXN0ZXJBcnJheSB9IGZyb20gXCIuL21hc3Rlci1zdHJ1Y3R1cmUuanNcIjtcbmltcG9ydCBwcm9qZWN0TG9hZCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgdGFza0xvYWQgZnJvbSBcIi4vdGFzay5qc1wiO1xuaW1wb3J0IHsgcHJvamVjdE5hbWUgfSBmcm9tIFwiLi9ob21lLmpzXCI7XG5cbmNvbnN0IGFwcExvZ2ljID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgX3RhcmdldE5vZGUgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgX2NsYXNzTmFtZSA9IF90YXJnZXROb2RlLmNsYXNzTmFtZTtcblxuICAgIGNvbnN0IF9mb3JtU3VibWlzc2lvbiA9IChjbGFzc05hbWUpID0+IHtcbiAgICAgICAgc3dpdGNoIChjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3Byb2plY3QtcG9wLXVwJzpcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIF90YXJnZXROb2RlLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBbXTtcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0LnB1c2goX3RhcmdldE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQudmFsdWUpO1xuICAgICAgICAgICAgICAgIG1hc3RlckFycmF5LnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgICAgICAgICAgX3RhcmdldE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICBwcm9qZWN0TG9hZCgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1hc3RlckFycmF5KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAndGFzay1mb3JtJzpcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIF90YXJnZXROb2RlLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBfdGFyZ2V0Tm9kZS5jaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdUYXNrID0ge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICcnLFxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxzOiBjb2xsZWN0aW9uWzFdLnF1ZXJ5U2VsZWN0b3IoJzpudGgtY2hpbGQoMiknKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGNvbGxlY3Rpb25bMF0ucXVlcnlTZWxlY3RvcignOm50aC1jaGlsZCgyKScpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlOiBjb2xsZWN0aW9uWzNdLnF1ZXJ5U2VsZWN0b3IoJzpudGgtY2hpbGQoMiknKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk6IGNvbGxlY3Rpb25bMl0ucXVlcnlTZWxlY3RvcignOm50aC1jaGlsZCgyKScpLnZhbHVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgbWFzdGVyQXJyYXlbZ2V0Q3VycmVudEluZGV4KCldLnB1c2gobmV3VGFzayk7XG4gICAgICAgICAgICAgICAgdGFza0xvYWQobWFzdGVyQXJyYXlbZ2V0Q3VycmVudEluZGV4KCldKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtYXN0ZXJBcnJheVtnZXRDdXJyZW50SW5kZXgoKV0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdlZGl0LWRldGFpbHMnOlxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgX3RhcmdldE5vZGUuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRUYXNrSW5kZXggPSBOdW1iZXIoX3RhcmdldE5vZGUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrQ29sbGVjdGlvbiA9IF90YXJnZXROb2RlLmNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRUYXNrSW5kZXgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1hc3RlckFycmF5W2dldEN1cnJlbnRJbmRleCgpXVtjdXJyZW50VGFza0luZGV4XSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGFza0NvbGxlY3Rpb24pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRlZFRhc2sgPSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogJycsXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbHM6IHRhc2tDb2xsZWN0aW9uWzFdLnF1ZXJ5U2VsZWN0b3IoJzpudGgtY2hpbGQoMiknKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRhc2tDb2xsZWN0aW9uWzBdLnF1ZXJ5U2VsZWN0b3IoJzpudGgtY2hpbGQoMiknKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZTogdGFza0NvbGxlY3Rpb25bMF0ucXVlcnlTZWxlY3RvcignOm50aC1jaGlsZCg0KScpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogdGFza0NvbGxlY3Rpb25bMV0ucXVlcnlTZWxlY3RvcignOm50aC1jaGlsZCg0KScpLnZhbHVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgbWFzdGVyQXJyYXlbZ2V0Q3VycmVudEluZGV4KCldW2N1cnJlbnRUYXNrSW5kZXhdID0gZWRpdGVkVGFzaztcbiAgICAgICAgICAgICAgICB0YXNrTG9hZChtYXN0ZXJBcnJheVtnZXRDdXJyZW50SW5kZXgoKV0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1hc3RlckFycmF5W2dldEN1cnJlbnRJbmRleCgpXVtjdXJyZW50VGFza0luZGV4XSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgX3RvZ2dsZSA9IChjbGFzc05hbWUpID0+IHtcblxuICAgICAgICBzd2l0Y2ggKGNsYXNzTmFtZSkge1xuXG4gICAgICAgICAgICBjYXNlICd0YXNrLXRpdGxlJzpcbiAgICAgICAgICAgICAgICAvLyBkb2VzIG5vdCB1c2UgdG9nZ2xlIGJlY2F1c2UgZGlzcGxheTogZmxleCAmIG5vbmUgZG9lc24ndCBjbyBleGlzdFxuICAgICAgICAgICAgICAgIF90YXJnZXROb2RlLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYnJpZWYtbGF5b3V0Jyk7XG4gICAgICAgICAgICAgICAgX3RhcmdldE5vZGUucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBfdGFyZ2V0Tm9kZS5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gY2FzZSAnc2F2ZSc6XG4gICAgICAgICAgICAvLyAgICAgX3RhcmdldE5vZGUucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIC8vICAgICBfdGFyZ2V0Tm9kZS5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAvLyAgICAgX3RhcmdldE5vZGUucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2JyaWVmLWxheW91dCcpO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdjYW5jZWwtdGFzayc6XG4gICAgICAgICAgICAgICAgX3RhcmdldE5vZGUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBfdGFyZ2V0Tm9kZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2JyaWVmLWxheW91dCcpO1xuICAgICAgICAgICAgICAgIF90YXJnZXROb2RlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdhZGQtcHJvamVjdCc6XG4gICAgICAgICAgICAgICAgX3RhcmdldE5vZGUucGFyZW50RWxlbWVudC5sYXN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdkZWwtYnRuJzpcbiAgICAgICAgICAgICAgICBsZXQgZHVtbXlBcnJheSA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0SWQgPSBfdGFyZ2V0Tm9kZS5wYXJlbnRFbGVtZW50LmlkO1xuICAgICAgICAgICAgICAgIGR1bW15QXJyYXkgPSBtYXN0ZXJBcnJheS5maWx0ZXIoKGVsZW1lbnQpID0+IG1hc3RlckFycmF5LmluZGV4T2YoZWxlbWVudCkudG9TdHJpbmcoKSAhPSBwcm9qZWN0SWQpO1xuICAgICAgICAgICAgICAgIG1hc3RlckFycmF5Lmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgbWFzdGVyQXJyYXkucHVzaCguLi5kdW1teUFycmF5KTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TG9hZCgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1hc3RlckFycmF5KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAncHJvamVjdC11bmNoYW5nZWQnOlxuICAgICAgICAgICAgICAgIF90YXJnZXROb2RlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcucHJldmlvdXNFbGVtZW50U2libGluZy52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIF90YXJnZXROb2RlLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ25ldy10YXNrJzpcbiAgICAgICAgICAgICAgICBfdGFyZ2V0Tm9kZS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ3Rhc2stYnV0dG9uJzpcbiAgICAgICAgICAgICAgICBfdGFyZ2V0Tm9kZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ3Byb2plY3QtbmFtZSc6XG4gICAgICAgICAgICAgICAgdG9nZ2xlSW5kZXgoTnVtYmVyKF90YXJnZXROb2RlLnBhcmVudEVsZW1lbnQuaWQpKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IG1hc3RlckFycmF5W2dldEN1cnJlbnRJbmRleCgpXVswXTtcbiAgICAgICAgICAgICAgICB0YXNrTG9hZChtYXN0ZXJBcnJheVtnZXRDdXJyZW50SW5kZXgoKV0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdkZWxldGUtYnV0dG9uJzpcbiAgICAgICAgICAgICAgICBsZXQgZHVtbXkgPSBbXTtcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0ZWRQcm9qZWN0ID0gbWFzdGVyQXJyYXlbZ2V0Q3VycmVudEluZGV4KCldO1xuICAgICAgICAgICAgICAgIGxldCBwcm9qSWQgPSBfdGFyZ2V0Tm9kZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQ7XG4gICAgICAgICAgICAgICAgZHVtbXkgPSB0YXJnZXRlZFByb2plY3QuZmlsdGVyKChlbGVtZW50KSA9PiB0YXJnZXRlZFByb2plY3QuaW5kZXhPZihlbGVtZW50KS50b1N0cmluZygpICE9IHByb2pJZCk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ZWRQcm9qZWN0Lmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ZWRQcm9qZWN0LnB1c2goLi4uZHVtbXkpO1xuICAgICAgICAgICAgICAgIHRhc2tMb2FkKHRhcmdldGVkUHJvamVjdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKCkgPT4ge1xuICAgICAgICBfdG9nZ2xlKF9jbGFzc05hbWUuc3BsaXQoJyAnKVswXSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pc3Npb24gPSAoKSA9PiB7XG4gICAgICAgIGxldCBfc2FuaXRpemVkQ2xhc3NOYW1lID0gX2NsYXNzTmFtZS5zcGxpdCgnICcpWzBdO1xuICAgICAgICBfZm9ybVN1Ym1pc3Npb24oX3Nhbml0aXplZENsYXNzTmFtZSk7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGhhbmRsZVRvZ2dsZSwgaGFuZGxlU3VibWlzc2lvbiB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwTG9naWM7IiwibGV0IF9jdXJyZW50UHJvamVjdEluZGV4ID0gMDtcblxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBbXG4gICAgJ0RlZmF1bHQnLFxuXTtcblxuY29uc3QgX3NldFByb2plY3RJbmRleCA9IChuZXdJbmRleCkgPT4ge1xuICAgIF9jdXJyZW50UHJvamVjdEluZGV4ID0gbmV3SW5kZXg7XG59O1xuXG5jb25zdCB0b2dnbGVJbmRleCA9IChuZXdJbmRleCkgPT4ge1xuICAgIF9zZXRQcm9qZWN0SW5kZXgobmV3SW5kZXgpO1xufTtcblxuY29uc3QgZ2V0Q3VycmVudEluZGV4ID0gKCkgPT4ge1xuICAgIHJldHVybiBfY3VycmVudFByb2plY3RJbmRleDtcbn07XG5cbmNvbnN0IG1hc3RlckFycmF5ID0gW2RlZmF1bHRQcm9qZWN0LF07XG5cbmV4cG9ydCB7IHRvZ2dsZUluZGV4LCBnZXRDdXJyZW50SW5kZXgsIG1hc3RlckFycmF5IH07IiwiaW1wb3J0IHsgbWFzdGVyQXJyYXkgfSBmcm9tIFwiLi9tYXN0ZXItc3RydWN0dXJlLmpzXCI7XG5pbXBvcnQgeyBwcm9qZWN0QXJyYXkgfSBmcm9tIFwiLi9ob21lLmpzXCI7XG5cbi8vIGNvbnNvbGUubG9nKG1hc3RlckFycmF5KTtcbmNvbnN0IHByb2plY3RMb2FkID0gKCkgPT4ge1xuICAgIC8vIGNsZWFuIGRpdiBcbiAgICB3aGlsZSAocHJvamVjdEFycmF5Lmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgcHJvamVjdEFycmF5LnJlbW92ZUNoaWxkKHByb2plY3RBcnJheS5sYXN0RWxlbWVudENoaWxkKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hc3RlckFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgICAgIHByb2plY3REaXYuaWQgPSBpO1xuXG4gICAgICAgIGNvbnN0IG5hbWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBuYW1lU3Bhbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKTtcbiAgICAgICAgbmFtZVNwYW4udGV4dENvbnRlbnQgPSBgJHttYXN0ZXJBcnJheVtpXVswXX0gYCArICdQcm9qZWN0JztcblxuICAgICAgICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsLWJ0bicpO1xuXG4gICAgICAgIC8vIGFkZCB0byBET01cbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmQobmFtZVNwYW4sIGRlbGV0ZVByb2plY3RCdXR0b24pO1xuICAgICAgICBwcm9qZWN0QXJyYXkuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdExvYWQ7IiwiaW1wb3J0IHsgdGFza0NvbnRhaW5lciB9IGZyb20gXCIuL2hvbWUuanNcIjtcblxuY29uc3QgdGFza0xvYWQgPSAoY3VycmVudFByb2plY3QpID0+IHtcbiAgICB3aGlsZSAodGFza0NvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgICAgIHRhc2tDb250YWluZXIucmVtb3ZlQ2hpbGQodGFza0NvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKTtcbiAgICB9O1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBjdXJyZW50UHJvamVjdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tEaXYuaWQgPSBpO1xuICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGl2Jyk7XG5cbiAgICAgICAgY29uc3QgYnJpZWZJbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJyaWVmSW5mb0Rpdi5jbGFzc0xpc3QuYWRkKCdicmllZi1pbmZvJywgJ2JyaWVmLWxheW91dCcpO1xuXG4gICAgICAgIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgIGNvbnN0IHRpdGxlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdGl0bGVTcGFuLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTtcbiAgICAgICAgdGl0bGVTcGFuLnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3RbaV1bJ3RpdGxlJ107XG4gICAgICAgIGNvbnN0IGRhdGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBkYXRlU3Bhbi5jbGFzc0xpc3QuYWRkKCdkdWUtZGF0ZScpO1xuICAgICAgICBkYXRlU3Bhbi50ZXh0Q29udGVudCA9IGN1cnJlbnRQcm9qZWN0W2ldWydkdWVEYXRlJ107XG4gICAgICAgIGNvbnN0IGRlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ1dHRvbicpO1xuXG4gICAgICAgIGlmIChjdXJyZW50UHJvamVjdFtpXVsncHJpb3JpdHknXSA9PT0gJ2gnKSB7XG4gICAgICAgICAgICB0aXRsZVNwYW4uY2xhc3NMaXN0LmFkZCgnaGlnaC1wcmlvcml0eScpXG4gICAgICAgICAgICBkYXRlU3Bhbi5jbGFzc0xpc3QuYWRkKCdoaWdoLXByaW9yaXR5JylcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50UHJvamVjdFtpXVsncHJpb3JpdHknXSA9PT0gJ20nKSB7XG4gICAgICAgICAgICB0aXRsZVNwYW4uY2xhc3NMaXN0LmFkZCgnbWVkaXVtLXByaW9yaXR5JylcbiAgICAgICAgICAgIGRhdGVTcGFuLmNsYXNzTGlzdC5hZGQoJ21lZGl1bS1wcmlvcml0eScpXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZGVtb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZW1vQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbW8tYnV0dG9uJyk7XG4gICAgICAgIGRlbW9CdXR0b24udGV4dENvbnRlbnQgPSAnRGVtbyc7XG5cbiAgICAgICAgLy8gYWRkIHRvIERPTVxuICAgICAgICBicmllZkluZm9EaXYuYXBwZW5kKGNoZWNrQm94LCB0aXRsZVNwYW4sIGRhdGVTcGFuLCBkZWxCdXR0b24pO1xuXG4gICAgICAgIGNvbnN0IHJhd0luZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcmF3SW5mb0Rpdi5jbGFzc0xpc3QuYWRkKCdyYXctaW5mbycsICdoaWRkZW4nKTtcblxuICAgICAgICAvLyBzdGFydCBlZGl0IGZvcm1cbiAgICAgICAgY29uc3QgZm9ybUVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGZvcm1FZGl0LmFjdGlvbiA9ICcnO1xuICAgICAgICBmb3JtRWRpdC5tZXRob2QgPSAnJztcbiAgICAgICAgZm9ybUVkaXQuY2xhc3NMaXN0LmFkZCgnZWRpdC1kZXRhaWxzJyk7XG5cbiAgICAgICAgY29uc3QgZm9ybVJvd09uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb3JtUm93T25lLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tcm93Jyk7XG4gICAgICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RpdGxlJyk7XG4gICAgICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnVGl0bGUgOidcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgdGl0bGVJbnB1dC5pZCA9ICd0aXRsZSc7XG4gICAgICAgIHRpdGxlSW5wdXQubmFtZSA9ICd0aXRsZSc7XG4gICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSBjdXJyZW50UHJvamVjdFtpXVsndGl0bGUnXTtcbiAgICAgICAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ2RhdGUtZGl2Jyk7XG4gICAgICAgIGNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEYXRlIDonO1xuICAgICAgICBkdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlLWRhdGUnKTtcbiAgICAgICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgICAgIGRhdGVJbnB1dC5uYW1lID0gJ2R1ZS1kYXRlJztcbiAgICAgICAgZGF0ZUlucHV0LmlkID0gJ2R1ZS1kYXRlJztcbiAgICAgICAgZGF0ZUlucHV0LnZhbHVlID0gY3VycmVudFByb2plY3RbaV1bJ2R1ZURhdGUnXTtcblxuICAgICAgICAvLyBhZGQgdG8gRE9NXG4gICAgICAgIGZvcm1Sb3dPbmUuYXBwZW5kKHRpdGxlTGFiZWwsIHRpdGxlSW5wdXQsIGR1ZURhdGVMYWJlbCwgZGF0ZUlucHV0KTtcblxuICAgICAgICBjb25zdCBmb3JtUm93VHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcm1Sb3dUd28uY2xhc3NMaXN0LmFkZCgnZm9ybS1yb3cnKTtcbiAgICAgICAgY29uc3QgdGV4dEFyZWFMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHRleHRBcmVhTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGV0YWlscycpO1xuICAgICAgICB0ZXh0QXJlYUxhYmVsLnRleHRDb250ZW50ID0gJ0RldGFpbHMgOic7XG4gICAgICAgIGNvbnN0IHRleHRBcmVhSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICB0ZXh0QXJlYUlucHV0Lm5hbWUgPSAnZGV0YWlscyc7XG4gICAgICAgIHRleHRBcmVhSW5wdXQuaWQgPSAnZGV0YWlscyc7XG4gICAgICAgIHRleHRBcmVhSW5wdXQudGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdFtpXVsnZGV0YWlscyddO1xuICAgICAgICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1kaXYnKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHkgOic7XG4gICAgICAgIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHknKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgcHJpb3JpdHlTZWxlY3QubmFtZSA9ICdwcmlvcml0eSc7XG4gICAgICAgIHByaW9yaXR5U2VsZWN0LmlkID0gJ3ByaW9yaXR5JztcbiAgICAgICAgY29uc3Qgb3B0aW9uT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbk9uZS50ZXh0Q29udGVudCA9ICdIaWdoJztcbiAgICAgICAgb3B0aW9uT25lLnZhbHVlID0gJ2gnO1xuICAgICAgICBjb25zdCBvcHRpb25Ud28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uVHdvLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG4gICAgICAgIG9wdGlvblR3by52YWx1ZSA9ICdtJztcbiAgICAgICAgY29uc3Qgb3B0aW9uVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uVGhyZWUudGV4dENvbnRlbnQgPSAnTG93JztcbiAgICAgICAgb3B0aW9uVGhyZWUudmFsdWUgPSAnbCc7XG5cbiAgICAgICAgLy8gYWRkIHRvIERPTVxuICAgICAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmQob3B0aW9uT25lLCBvcHRpb25Ud28sIG9wdGlvblRocmVlKTtcbiAgICAgICAgaWYoY3VycmVudFByb2plY3RbaV1bJ3ByaW9yaXR5J10gPT09ICdoJykgcHJpb3JpdHlTZWxlY3QudmFsdWUgPSBvcHRpb25PbmUudmFsdWVcbiAgICAgICAgZWxzZSBpZihjdXJyZW50UHJvamVjdFtpXVsncHJpb3JpdHknXSA9PT0gJ20nKSBwcmlvcml0eVNlbGVjdC52YWx1ZSA9IG9wdGlvblR3by52YWx1ZVxuICAgICAgICBlbHNlIGlmKGN1cnJlbnRQcm9qZWN0W2ldWydwcmlvcml0eSddID09PSAnbCcpIHByaW9yaXR5U2VsZWN0LnZhbHVlID0gb3B0aW9uVGhyZWUudmFsdWVcbiAgICAgICAgZm9ybVJvd1R3by5hcHBlbmQodGV4dEFyZWFMYWJlbCwgdGV4dEFyZWFJbnB1dCwgcHJpb3JpdHlMYWJlbCwgcHJpb3JpdHlTZWxlY3QpO1xuXG4gICAgICAgIGNvbnN0IGZvcm1Sb3dUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb3JtUm93VGhyZWUuY2xhc3NMaXN0LmFkZCgnZm9ybS1yb3cnKTtcbiAgICAgICAgY29uc3Qgc2F2ZUVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc2F2ZUVkaXRCdXR0b24udHlwZSA9ICdzdWJtaXQnO1xuICAgICAgICBzYXZlRWRpdEJ1dHRvbi5pZCA9ICdzYXZlLWVkaXQnO1xuICAgICAgICBzYXZlRWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTYXZlJztcbiAgICAgICAgY29uc3QgY2FuY2VsRWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjYW5jZWxFZGl0QnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgY2FuY2VsRWRpdEJ1dHRvbi5pZCA9ICdjYW5jZWwtZWRpdCc7XG4gICAgICAgIGNhbmNlbEVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2FuY2VsLXRhc2snKTtcbiAgICAgICAgY2FuY2VsRWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuXG4gICAgICAgIC8vIGFkZCB0byBET01cbiAgICAgICAgZm9ybVJvd1RocmVlLmFwcGVuZChzYXZlRWRpdEJ1dHRvbiwgY2FuY2VsRWRpdEJ1dHRvbik7XG5cbiAgICAgICAgLy8gYWRkIHRvIERPTVxuICAgICAgICBmb3JtRWRpdC5hcHBlbmQoZm9ybVJvd09uZSwgZm9ybVJvd1R3bywgZm9ybVJvd1RocmVlKTtcbiAgICAgICAgcmF3SW5mb0Rpdi5hcHBlbmQoZm9ybUVkaXQpO1xuICAgICAgICAvLyBlbmQgZWRpdCBmb3JtXG5cbiAgICAgICAgLy8gYWRkIHRvIERPTVxuICAgICAgICB0YXNrRGl2LmFwcGVuZChicmllZkluZm9EaXYsIHJhd0luZm9EaXYpO1xuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZCh0YXNrRGl2KTtcbiAgICB9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRhc2tMb2FkOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==