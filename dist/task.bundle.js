"use strict";
(self["webpackChunktodo_list_app"] = self["webpackChunktodo_list_app"] || []).push([["task"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/task.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSwwREFBb0I7QUFDNUI7O0FBRUE7O0FBRUEsaUVBQWUsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21hc3Rlci1zdHJ1Y3R1cmUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90YXNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpbmJveEltZyBmcm9tICcuL0ljb25zL2luYm94LWljb24ucG5nJztcbmltcG9ydCBjYWxlbmRhckltZyBmcm9tICcuL0ljb25zL2NhbGVuZGFyLWljb24ucG5nJztcbmltcG9ydCBpbXBJbWcgZnJvbSAnLi9JY29ucy9pbXBvcnRhbnQtaWNvbi5wbmcnO1xuaW1wb3J0IHRvZGF5SW1nIGZyb20gJy4vSWNvbnMvdG9kYXktaWNvbi5wbmcnO1xuY29uc3QgcHJvamVjdEFycmF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5pbXBvcnQgeyBjdXJyZW50UHJvamVjdEluZGV4LG1hc3RlckFycmF5IH0gZnJvbSAnLi9tYXN0ZXItc3RydWN0dXJlLmpzJztcblxucHJvamVjdEFycmF5LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYXJyYXknKTtcblxuY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xudGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lcicpO1xuXG5jb25zdCBwYWdlTG9hZCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudERpdi5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG5cbiAgICBjb25zdCBoZWFkZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICAgIGNvbnN0IG1haW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuXG4gICAgY29uc3QgZm9vdGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3RlckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG4gICAgZm9vdGVyRWxlbWVudC50ZXh0Q29udGVudCA9ICfCqSBNYWRlIGJ5IERhc1RhcGFuJztcblxuICAgIC8vIGFkZCB0byBET01cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnREaXYpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kKGhlYWRlckVsZW1lbnQsIG1haW5FbGVtZW50LCBmb290ZXJFbGVtZW50KTtcblxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKTtcblxuICAgIGNvbnN0IG1pZHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtaWRzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ21pZHNlY3Rpb24nKTtcblxuICAgIC8vIGFkZCB0byBET01cbiAgICBtYWluRWxlbWVudC5hcHBlbmQoc2lkZWJhciwgbWlkc2VjdGlvbik7XG5cbiAgICBjb25zdCBwcm9qZWN0SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaGVhZGluZycpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gbWFzdGVyQXJyYXlbY3VycmVudFByb2plY3RJbmRleF1bMF07XG4gICAgY29uc3QgdGFza1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdGFza1NwYW4udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xuICAgIGNvbnN0IG5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXdUYXNrQnV0dG9uLmlkID0gJ25ldy10YXNrJztcbiAgICBuZXdUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrJyk7XG5cbiAgICAvLyBjcmVhdGUgdGFzayBmb3JtXG4gICAgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgbmV3VGFza0Zvcm0uYWN0aW9uID0gJyc7XG4gICAgbmV3VGFza0Zvcm0ubWV0aG9kID0gJyc7XG4gICAgbmV3VGFza0Zvcm0uY2xhc3NMaXN0LmFkZCgndGFzay1mb3JtJywgJ2hpZGRlbicpO1xuXG4gICAgY29uc3QgZm9ybVJvd09uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Sb3dPbmUuY2xhc3NMaXN0LmFkZCgnZm9ybS1yb3cnKTtcbiAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RpdGxlJyk7XG4gICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZSA6J1xuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICB0aXRsZUlucHV0LmlkID0gJ3RpdGxlJztcbiAgICB0aXRsZUlucHV0Lm5hbWUgPSAndGl0bGUnO1xuICAgIGZvcm1Sb3dPbmUuYXBwZW5kKHRpdGxlTGFiZWwsIHRpdGxlSW5wdXQpO1xuXG4gICAgY29uc3QgZm9ybVJvd1R3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Sb3dUd28uY2xhc3NMaXN0LmFkZCgnZm9ybS1yb3cnKTtcbiAgICBjb25zdCB0ZXh0QXJlYUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0ZXh0QXJlYUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2RldGFpbHMnKTtcbiAgICB0ZXh0QXJlYUxhYmVsLnRleHRDb250ZW50ID0gJ0RldGFpbHMgOic7XG4gICAgY29uc3QgdGV4dEFyZWFJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgdGV4dEFyZWFJbnB1dC5uYW1lID0gJ2RldGFpbHMnO1xuICAgIHRleHRBcmVhSW5wdXQuaWQgPSAnZGV0YWlscyc7XG4gICAgZm9ybVJvd1R3by5hcHBlbmQodGV4dEFyZWFMYWJlbCwgdGV4dEFyZWFJbnB1dCk7XG5cbiAgICBjb25zdCBmb3JtUm93VGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtUm93VGhyZWUuY2xhc3NMaXN0LmFkZCgnZm9ybS1yb3cnKTtcbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5IDonO1xuICAgIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHknKTtcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHByaW9yaXR5U2VsZWN0Lm5hbWUgPSAncHJpb3JpdHknO1xuICAgIHByaW9yaXR5U2VsZWN0LmlkID0gJ3ByaW9yaXR5JztcbiAgICBjb25zdCBvcHRpb25PbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb25PbmUudGV4dENvbnRlbnQgPSAnSGlnaCc7XG4gICAgb3B0aW9uT25lLnZhbHVlID0gJ2gnO1xuICAgIGNvbnN0IG9wdGlvblR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvblR3by50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuICAgIG9wdGlvblR3by52YWx1ZSA9ICdtJztcbiAgICBjb25zdCBvcHRpb25UaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvblRocmVlLnRleHRDb250ZW50ID0gJ0xvdyc7XG4gICAgb3B0aW9uVGhyZWUudmFsdWUgPSAnbCc7XG4gICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kKG9wdGlvbk9uZSwgb3B0aW9uVHdvLCBvcHRpb25UaHJlZSk7XG4gICAgZm9ybVJvd1RocmVlLmFwcGVuZChwcmlvcml0eUxhYmVsLCBwcmlvcml0eVNlbGVjdCk7XG5cbiAgICBjb25zdCBmb3JtUm93Rm91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Sb3dGb3VyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tcm93Jyk7XG4gICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRGF0ZSA6JztcbiAgICBkdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlLWRhdGUnKTtcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgIGRhdGVJbnB1dC5uYW1lID0gJ2R1ZS1kYXRlJztcbiAgICBkYXRlSW5wdXQuaWQgPSAnZHVlLWRhdGUnO1xuICAgIGZvcm1Sb3dGb3VyLmFwcGVuZChkdWVEYXRlTGFiZWwsIGRhdGVJbnB1dCk7XG5cbiAgICBjb25zdCBmb3JtUm93Rml2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Sb3dGaXZlLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tcm93Jyk7XG4gICAgY29uc3Qgc2F2ZVRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzYXZlVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWJ1dHRvbicpO1xuICAgIHNhdmVUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gJ1NhdmUnO1xuICAgIGNvbnN0IGNhbmNlbFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stYnV0dG9uJyk7XG4gICAgY2FuY2VsVGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIGZvcm1Sb3dGaXZlLmFwcGVuZChzYXZlVGFza0J1dHRvbiwgY2FuY2VsVGFza0J1dHRvbik7XG5cbiAgICAvLyBhZGQgdG8gRE9NXG4gICAgbmV3VGFza0Zvcm0uYXBwZW5kKGZvcm1Sb3dPbmUsIGZvcm1Sb3dUd28sIGZvcm1Sb3dUaHJlZSwgZm9ybVJvd0ZvdXIsIGZvcm1Sb3dGaXZlKTtcbiAgICBwcm9qZWN0SGVhZGluZy5hcHBlbmQocHJvamVjdE5hbWUsIHRhc2tTcGFuLCBuZXdUYXNrQnV0dG9uLCBuZXdUYXNrRm9ybSk7XG5cbiAgICAvL2FkZCB0byBET01cbiAgICBtaWRzZWN0aW9uLmFwcGVuZChwcm9qZWN0SGVhZGluZywgdGFza0NvbnRhaW5lcik7XG5cbiAgICBjb25zdCBzaWRlYmFyVG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZWJhclRvcC5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLXRvcCcpO1xuXG4gICAgY29uc3Qgc2lkZWJhckJvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXJCb3R0b20uY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1ib3R0b20nKTtcblxuICAgIC8vIGFkZCB0byBET01cbiAgICBzaWRlYmFyLmFwcGVuZChzaWRlYmFyVG9wLCBzaWRlYmFyQm90dG9tKTtcblxuICAgIGNvbnN0IGluYm94RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5ib3hEaXYuY2xhc3NMaXN0LmFkZCgnaW5ib3gnKTtcblxuICAgIGNvbnN0IHRvZGF5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kYXlEaXYuY2xhc3NMaXN0LmFkZCgndG9kYXknKTtcblxuICAgIGNvbnN0IHNldmVuRGF5c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNldmVuRGF5c0Rpdi5jbGFzc0xpc3QuYWRkKCdzZXZlbi1kYXlzJyk7XG5cbiAgICBjb25zdCBpbXBvcnRhbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbXBvcnRhbnREaXYuY2xhc3NMaXN0LmFkZCgnaW1wb3J0YW50Jyk7XG5cbiAgICBjb25zdCBpbmJveEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbmJveEljb24uY2xhc3NMaXN0LmFkZCgnaW5ib3gtaWNvbicpO1xuICAgIGluYm94SWNvbi5zcmMgPSBpbmJveEltZztcbiAgICBjb25zdCBpbmJveExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgaW5ib3hMaW5rLmNsYXNzTGlzdC5hZGQoJ2luYm94LWxpbmsnKTtcbiAgICBpbmJveExpbmsudGV4dENvbnRlbnQgPSAnSW5ib3gnO1xuXG4gICAgLy9hZGQgdG8gRE9NXG4gICAgaW5ib3hEaXYuYXBwZW5kKGluYm94SWNvbiwgaW5ib3hMaW5rKTtcblxuICAgIGNvbnN0IHRvZGF5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHRvZGF5SWNvbi5jbGFzc0xpc3QuYWRkKCd0b2RheS1pY29uJyk7XG4gICAgdG9kYXlJY29uLnNyYyA9IHRvZGF5SW1nO1xuXG4gICAgY29uc3QgdG9kYXlMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHRvZGF5TGluay5jbGFzc0xpc3QuYWRkKCd0b2RheS1saW5rJyk7XG4gICAgdG9kYXlMaW5rLnRleHRDb250ZW50ID0gJ1RvZGF5JztcblxuICAgIC8vIGFkZCB0byBET01cbiAgICB0b2RheURpdi5hcHBlbmQodG9kYXlJY29uLCB0b2RheUxpbmspO1xuXG4gICAgY29uc3QgY2FsZW5kYXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY2FsZW5kYXJJY29uLmNsYXNzTGlzdC5hZGQoJ2NhbGVuZGFyLWljb24nKTtcbiAgICBjYWxlbmRhckljb24uc3JjID0gY2FsZW5kYXJJbWc7XG5cbiAgICBjb25zdCBzZXZlbkRheXNMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHNldmVuRGF5c0xpbmsuY2xhc3NMaXN0LmFkZCgnc2V2ZW5EYXlzLWxpbmsnKTtcbiAgICBzZXZlbkRheXNMaW5rLnRleHRDb250ZW50ID0gJzcgRGF5cyc7XG5cbiAgICAvLyBhZGQgdG8gRE9NXG4gICAgc2V2ZW5EYXlzRGl2LmFwcGVuZChjYWxlbmRhckljb24sIHNldmVuRGF5c0xpbmspO1xuXG4gICAgY29uc3QgaW1wb3J0YW50SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltcG9ydGFudEljb24uY2xhc3NMaXN0LmFkZCgnaW1wLWljb24nKTtcbiAgICBpbXBvcnRhbnRJY29uLnNyYyA9IGltcEltZztcblxuICAgIGNvbnN0IGltcG9ydGFudExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgaW1wb3J0YW50TGluay5jbGFzc0xpc3QuYWRkKCdpbXAtbGluaycpO1xuICAgIGltcG9ydGFudExpbmsudGV4dENvbnRlbnQgPSAnSW1wb3J0YW50JztcblxuICAgIC8vIGFkZCB0byBET01cbiAgICBpbXBvcnRhbnREaXYuYXBwZW5kKGltcG9ydGFudEljb24sIGltcG9ydGFudExpbmspO1xuXG4gICAgLy9hZGQgdG8gRE9NXG4gICAgc2lkZWJhclRvcC5hcHBlbmQoaW5ib3hEaXYsIHRvZGF5RGl2LCBzZXZlbkRheXNEaXYsIGltcG9ydGFudERpdik7XG5cbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IG1hc3RlckFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyAgICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgLy8gICAgIHByb2plY3REaXYuaWQgPSBpO1xuXG4gICAgLy8gICAgIGNvbnN0IG5hbWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIC8vICAgICBuYW1lU3Bhbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKTtcbiAgICAvLyAgICAgbmFtZVNwYW4udGV4dENvbnRlbnQgPSBgJHttYXN0ZXJBcnJheVtpXVswXX0gYCArICdQcm9qZWN0JztcblxuICAgIC8vICAgICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgLy8gICAgIGRlbGV0ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsLWJ0bicpO1xuXG4gICAgLy8gICAgIC8vIGFkZCB0byBET01cbiAgICAvLyAgICAgcHJvamVjdERpdi5hcHBlbmQobmFtZVNwYW4sIGRlbGV0ZVByb2plY3RCdXR0b24pO1xuICAgIC8vICAgICBwcm9qZWN0QXJyYXkuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gICAgLy8gfVxuXG4gICAgLy8gY29uc3QgcHJvamVjdE9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vIHByb2plY3RPbmUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1vbmUnKTtcbiAgICAvLyBjb25zdCBwcm9qZWN0T25lTmFtZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgLy8gcHJvamVjdE9uZU5hbWVTcGFuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbmFtZScpO1xuICAgIC8vIHByb2plY3RPbmVOYW1lU3Bhbi50ZXh0Q29udGVudCA9ICdEZWZhdWx0IFByb2plY3QnO1xuICAgIC8vIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAvLyBkZWxldGVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbC1idG4nKTtcblxuICAgIC8vIC8vIGFkZCB0byBET01cbiAgICAvLyBwcm9qZWN0T25lLmFwcGVuZChwcm9qZWN0T25lTmFtZVNwYW4sIGRlbGV0ZVByb2plY3RCdXR0b24pO1xuICAgIC8vIHByb2plY3RBcnJheS5hcHBlbmQocHJvamVjdE9uZSk7XG5cbiAgICBjb25zdCBhY3Rpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhY3Rpb25EaXYuY2xhc3NMaXN0LmFkZCgnYWN0aW9uJyk7XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdCcpO1xuXG4gICAgY29uc3QgYWN0aW9uU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBhY3Rpb25TcGFuLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXByb2plY3QnKTtcbiAgICBhY3Rpb25TcGFuLnRleHRDb250ZW50ID0gJ0FkZCBQcm9qZWN0JztcblxuICAgIGNvbnN0IHByb2plY3RQb3BVcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBwcm9qZWN0UG9wVXAuYWN0aW9uID0gJyc7XG4gICAgcHJvamVjdFBvcFVwLm1ldGhvZCA9ICcnO1xuICAgIHByb2plY3RQb3BVcC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXBvcC11cCcsICdoaWRkZW4nKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwcm9qZWN0TmFtZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgcHJvamVjdE5hbWVJbnB1dC5pZCA9ICduYW1lJztcbiAgICBwcm9qZWN0TmFtZUlucHV0Lm5hbWUgPSAnbmFtZSc7XG4gICAgcHJvamVjdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgIGNvbnN0IHNhdmVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc2F2ZVByb2plY3RCdXR0b24udHlwZSA9ICdzdWJtaXQnO1xuICAgIHNhdmVQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ1NhdmUnO1xuICAgIHNhdmVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY2hhbmdlJyk7XG4gICAgc2F2ZVByb2plY3RCdXR0b24uaWQgPSAnc2F2ZS1wcm9qZWN0JztcbiAgICBjb25zdCBjYW5jZWxQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsUHJvamVjdEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgY2FuY2VsUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIGNhbmNlbFByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC11bmNoYW5nZWQnKTtcbiAgICBjYW5jZWxQcm9qZWN0QnV0dG9uLmlkID0gJ2NhbmNlbC1wcm9qZWN0JztcblxuICAgIC8vIGFkZCB0byBET01cbiAgICBwcm9qZWN0UG9wVXAuYXBwZW5kKHByb2plY3ROYW1lSW5wdXQsIHNhdmVQcm9qZWN0QnV0dG9uLCBjYW5jZWxQcm9qZWN0QnV0dG9uKTtcblxuICAgIC8vIGFkZCB0byBET01cbiAgICBhY3Rpb25EaXYuYXBwZW5kKGFkZFByb2plY3RCdXR0b24sIGFjdGlvblNwYW4sIHByb2plY3RQb3BVcCk7XG4gICAgc2lkZWJhckJvdHRvbS5hcHBlbmQocHJvamVjdEFycmF5LCBhY3Rpb25EaXYpO1xufTtcblxuZXhwb3J0IHsgcHJvamVjdEFycmF5LCB0YXNrQ29udGFpbmVyLCBwYWdlTG9hZCB9OyIsImxldCBjdXJyZW50UHJvamVjdEluZGV4ID0gMDtcblxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBbXG4gICAgJ0RlZmF1bHQnLFxuICAgIHtcbiAgICAgICAgc3RhdHVzOiAnaW5jb21wbGV0ZScsXG4gICAgICAgIHRpdGxlOiAnQnV5IE1pbGsnLFxuICAgICAgICBkdWVEYXRlOiAnMjMvMTIvMjAyMicsXG4gICAgICAgIHByaW9yaXR5OiAnSCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc3RhdHVzOiAnaW5jb21wbGV0ZScsXG4gICAgICAgIHRpdGxlOiAnUmVjaGFyZ2UgV2lGaScsXG4gICAgICAgIGR1ZURhdGU6ICcxMi8xMi8yMDIyJyxcbiAgICAgICAgcHJpb3JpdHk6ICdMJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBzdGF0dXM6ICdpbmNvbXBsZXRlJyxcbiAgICAgICAgdGl0bGU6ICdFeGVyY2lzZScsXG4gICAgICAgIGR1ZURhdGU6ICcwNy8xMS8yMDIyJyxcbiAgICAgICAgcHJpb3JpdHk6ICdMJ1xuICAgIH0sXG5dO1xuXG5jb25zdCBtYXN0ZXJBcnJheSA9IFtkZWZhdWx0UHJvamVjdCxdO1xuXG5leHBvcnQgeyBjdXJyZW50UHJvamVjdEluZGV4LCBtYXN0ZXJBcnJheSB9OyIsImltcG9ydCB7IHRhc2tDb250YWluZXIgfSBmcm9tIFwiLi9ob21lLmpzXCI7XG5cbmNvbnN0IHRhc2tMb2FkID0gKGN1cnJlbnRQcm9qZWN0KSA9PiB7XG4gICAgd2hpbGUgKHRhc2tDb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICB0YXNrQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRhc2tDb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgfTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgY3VycmVudFByb2plY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGl2Jyk7XG5cbiAgICAgICAgY29uc3QgYnJpZWZJbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJyaWVmSW5mb0Rpdi5jbGFzc0xpc3QuYWRkKCdicmllZi1pbmZvJywgJ2JyaWVmLWxheW91dCcpO1xuXG4gICAgICAgIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgIGNvbnN0IHRpdGxlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdGl0bGVTcGFuLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTtcbiAgICAgICAgdGl0bGVTcGFuLnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3RbaV1bJ3RpdGxlJ107XG4gICAgICAgIGNvbnN0IGRhdGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBkYXRlU3Bhbi5jbGFzc0xpc3QuYWRkKCdkdWUtZGF0ZScpO1xuICAgICAgICBkYXRlU3Bhbi50ZXh0Q29udGVudCA9IGN1cnJlbnRQcm9qZWN0W2ldWydkdWVEYXRlJ107XG4gICAgICAgIGNvbnN0IGRlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ1dHRvbicpO1xuXG4gICAgICAgIGNvbnN0IGRlbW9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVtb0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZW1vLWJ1dHRvbicpO1xuICAgICAgICBkZW1vQnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbW8nO1xuXG4gICAgICAgIC8vIGFkZCB0byBET01cbiAgICAgICAgYnJpZWZJbmZvRGl2LmFwcGVuZChjaGVja0JveCwgdGl0bGVTcGFuLCBkYXRlU3BhbiwgZGVsQnV0dG9uKTtcblxuICAgICAgICBjb25zdCByYXdJbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHJhd0luZm9EaXYuY2xhc3NMaXN0LmFkZCgncmF3LWluZm8nLCAnaGlkZGVuJyk7XG5cbiAgICAgICAgLy8gc3RhcnQgZWRpdCBmb3JtXG4gICAgICAgIGNvbnN0IGZvcm1FZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBmb3JtRWRpdC5hY3Rpb24gPSAnJztcbiAgICAgICAgZm9ybUVkaXQubWV0aG9kID0gJyc7XG4gICAgICAgIGZvcm1FZGl0LmNsYXNzTGlzdC5hZGQoJ2VkaXQtZGV0YWlscycpO1xuXG4gICAgICAgIGNvbnN0IGZvcm1Sb3dPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9ybVJvd09uZS5jbGFzc0xpc3QuYWRkKCdmb3JtLXJvdycpO1xuICAgICAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0aXRsZScpO1xuICAgICAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlIDonXG4gICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0aXRsZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgICAgIHRpdGxlSW5wdXQuaWQgPSAndGl0bGUnO1xuICAgICAgICB0aXRsZUlucHV0Lm5hbWUgPSAndGl0bGUnO1xuICAgICAgICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRhdGVEaXYuY2xhc3NMaXN0LmFkZCgnZGF0ZS1kaXYnKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0RhdGUgOic7XG4gICAgICAgIGR1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkdWUtZGF0ZScpO1xuICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBkYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICAgICAgZGF0ZUlucHV0Lm5hbWUgPSAnZHVlLWRhdGUnO1xuICAgICAgICBkYXRlSW5wdXQuaWQgPSAnZHVlLWRhdGUnO1xuXG4gICAgICAgIC8vIGFkZCB0byBET01cbiAgICAgICAgZm9ybVJvd09uZS5hcHBlbmQodGl0bGVMYWJlbCwgdGl0bGVJbnB1dCwgZHVlRGF0ZUxhYmVsLCBkYXRlSW5wdXQpO1xuXG4gICAgICAgIGNvbnN0IGZvcm1Sb3dUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9ybVJvd1R3by5jbGFzc0xpc3QuYWRkKCdmb3JtLXJvdycpO1xuICAgICAgICBjb25zdCB0ZXh0QXJlYUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgdGV4dEFyZWFMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkZXRhaWxzJyk7XG4gICAgICAgIHRleHRBcmVhTGFiZWwudGV4dENvbnRlbnQgPSAnRGV0YWlscyA6JztcbiAgICAgICAgY29uc3QgdGV4dEFyZWFJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIHRleHRBcmVhSW5wdXQubmFtZSA9ICdkZXRhaWxzJztcbiAgICAgICAgdGV4dEFyZWFJbnB1dC5pZCA9ICdkZXRhaWxzJztcbiAgICAgICAgY29uc3QgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktZGl2Jyk7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5IDonO1xuICAgICAgICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5Jyk7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIHByaW9yaXR5U2VsZWN0Lm5hbWUgPSAncHJpb3JpdHknO1xuICAgICAgICBwcmlvcml0eVNlbGVjdC5pZCA9ICdwcmlvcml0eSc7XG4gICAgICAgIGNvbnN0IG9wdGlvbk9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb25PbmUudGV4dENvbnRlbnQgPSAnSGlnaCc7XG4gICAgICAgIG9wdGlvbk9uZS52YWx1ZSA9ICdoJztcbiAgICAgICAgY29uc3Qgb3B0aW9uVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvblR3by50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuICAgICAgICBvcHRpb25Ud28udmFsdWUgPSAnbSc7XG4gICAgICAgIGNvbnN0IG9wdGlvblRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvblRocmVlLnRleHRDb250ZW50ID0gJ0xvdyc7XG4gICAgICAgIG9wdGlvblRocmVlLnZhbHVlID0gJ2wnO1xuXG4gICAgICAgIC8vIGFkZCB0byBET01cbiAgICAgICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kKG9wdGlvbk9uZSwgb3B0aW9uVHdvLCBvcHRpb25UaHJlZSk7XG4gICAgICAgIGZvcm1Sb3dUd28uYXBwZW5kKHRleHRBcmVhTGFiZWwsIHRleHRBcmVhSW5wdXQsIHByaW9yaXR5TGFiZWwsIHByaW9yaXR5U2VsZWN0KTtcblxuICAgICAgICBjb25zdCBmb3JtUm93VGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9ybVJvd1RocmVlLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tcm93Jyk7XG4gICAgICAgIGNvbnN0IHNhdmVFZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHNhdmVFZGl0QnV0dG9uLmlkID0gJ3NhdmUtZWRpdCc7XG4gICAgICAgIHNhdmVFZGl0QnV0dG9uLnRleHRDb250ZW50ID0gJ1NhdmUnO1xuICAgICAgICBjb25zdCBjYW5jZWxFZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNhbmNlbEVkaXRCdXR0b24uaWQgPSAnY2FuY2VsLWVkaXQnO1xuICAgICAgICBjYW5jZWxFZGl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG5cbiAgICAgICAgLy8gYWRkIHRvIERPTVxuICAgICAgICBmb3JtUm93VGhyZWUuYXBwZW5kKHNhdmVFZGl0QnV0dG9uLCBjYW5jZWxFZGl0QnV0dG9uKTtcblxuICAgICAgICAvLyBhZGQgdG8gRE9NXG4gICAgICAgIGZvcm1FZGl0LmFwcGVuZChmb3JtUm93T25lLCBmb3JtUm93VHdvLCBmb3JtUm93VGhyZWUpO1xuICAgICAgICByYXdJbmZvRGl2LmFwcGVuZChmb3JtRWRpdCk7XG4gICAgICAgIC8vIGVuZCBlZGl0IGZvcm1cblxuICAgICAgICAvLyBhZGQgdG8gRE9NXG4gICAgICAgIHRhc2tEaXYuYXBwZW5kKGJyaWVmSW5mb0RpdiwgcmF3SW5mb0Rpdik7XG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kKHRhc2tEaXYpO1xuICAgIH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgdGFza0xvYWQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9