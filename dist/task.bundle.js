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
/* harmony export */   "getCurrentIndex": () => (/* binding */ getCurrentIndex),
/* harmony export */   "masterArray": () => (/* binding */ masterArray),
/* harmony export */   "toggleIndex": () => (/* binding */ toggleIndex)
/* harmony export */ });
let _currentProjectIndex = 0;

const defaultProject = ['Default',];

const masterArray = [defaultProject,];

const _setProjectIndex = (newIndex) => {
    _currentProjectIndex = newIndex;
};

const toggleIndex = (newIndex) => {
    _setProjectIndex(newIndex);
};

const getCurrentIndex = () => {
    return _currentProjectIndex;
};



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
/* harmony import */ var _master_structure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./master-structure.js */ "./src/master-structure.js");



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
        if (currentProject[i]['priority'] === 'h') prioritySelect.value = optionOne.value
        else if (currentProject[i]['priority'] === 'm') prioritySelect.value = optionTwo.value
        else if (currentProject[i]['priority'] === 'l') prioritySelect.value = optionThree.value
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/task.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSwwREFBb0I7QUFDNUI7O0FBRUE7O0FBRUEsaUVBQWUsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21hc3Rlci1zdHJ1Y3R1cmUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90YXNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpbmJveEltZyBmcm9tICcuL0ljb25zL2luYm94LWljb24ucG5nJztcbmltcG9ydCBjYWxlbmRhckltZyBmcm9tICcuL0ljb25zL2NhbGVuZGFyLWljb24ucG5nJztcbmltcG9ydCBpbXBJbWcgZnJvbSAnLi9JY29ucy9pbXBvcnRhbnQtaWNvbi5wbmcnO1xuaW1wb3J0IHRvZGF5SW1nIGZyb20gJy4vSWNvbnMvdG9kYXktaWNvbi5wbmcnO1xuaW1wb3J0IHsgZ2V0Q3VycmVudEluZGV4LCBtYXN0ZXJBcnJheSB9IGZyb20gJy4vbWFzdGVyLXN0cnVjdHVyZS5qcyc7XG5cbmNvbnN0IHByb2plY3RBcnJheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xucHJvamVjdEFycmF5LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYXJyYXknKTtcblxuY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xudGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lcicpO1xuXG5jb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTsgLy8gdGhpcyBpcyBpbiBnbG9iYWwgc2NvcGUgb25seSB0byBleHBvcnRcblxuY29uc3QgcGFnZUxvYWQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnREaXYuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuXG4gICAgY29uc3QgaGVhZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG5cbiAgICBjb25zdCBtYWluRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcblxuICAgIGNvbnN0IGZvb3RlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuICAgIGZvb3RlckVsZW1lbnQudGV4dENvbnRlbnQgPSAnwqkgTWFkZSBieSBEYXNUYXBhbic7XG5cbiAgICAvLyBhZGQgdG8gRE9NXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50RGl2KTtcbiAgICBjb250ZW50RGl2LmFwcGVuZChoZWFkZXJFbGVtZW50LCBtYWluRWxlbWVudCwgZm9vdGVyRWxlbWVudCk7XG5cbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XG5cbiAgICBjb25zdCBtaWRzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWlkc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdtaWRzZWN0aW9uJyk7XG5cbiAgICAvLyBhZGQgdG8gRE9NXG4gICAgbWFpbkVsZW1lbnQuYXBwZW5kKHNpZGViYXIsIG1pZHNlY3Rpb24pO1xuXG4gICAgY29uc3QgcHJvamVjdEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0SGVhZGluZy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWhlYWRpbmcnKTtcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IG1hc3RlckFycmF5W2dldEN1cnJlbnRJbmRleCgpXVswXTtcbiAgICBjb25zdCB0YXNrU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0YXNrU3Bhbi50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XG4gICAgY29uc3QgbmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld1Rhc2tCdXR0b24uaWQgPSAnbmV3LXRhc2snO1xuICAgIG5ld1Rhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2snKTtcblxuICAgIC8vIGNyZWF0ZSB0YXNrIGZvcm1cbiAgICBjb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBuZXdUYXNrRm9ybS5hY3Rpb24gPSAnJztcbiAgICBuZXdUYXNrRm9ybS5tZXRob2QgPSAnJztcbiAgICBuZXdUYXNrRm9ybS5jbGFzc0xpc3QuYWRkKCd0YXNrLWZvcm0nLCAnaGlkZGVuJyk7XG5cbiAgICBjb25zdCBmb3JtUm93T25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybVJvd09uZS5jbGFzc0xpc3QuYWRkKCdmb3JtLXJvdycpO1xuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGl0bGUnKTtcbiAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlIDonXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgIHRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICB0aXRsZUlucHV0LmlkID0gJ3RpdGxlJztcbiAgICB0aXRsZUlucHV0Lm5hbWUgPSAndGl0bGUnO1xuICAgIGZvcm1Sb3dPbmUuYXBwZW5kKHRpdGxlTGFiZWwsIHRpdGxlSW5wdXQpO1xuXG4gICAgY29uc3QgZm9ybVJvd1R3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Sb3dUd28uY2xhc3NMaXN0LmFkZCgnZm9ybS1yb3cnKTtcbiAgICBjb25zdCB0ZXh0QXJlYUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0ZXh0QXJlYUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2RldGFpbHMnKTtcbiAgICB0ZXh0QXJlYUxhYmVsLnRleHRDb250ZW50ID0gJ0RldGFpbHMgOic7XG4gICAgY29uc3QgdGV4dEFyZWFJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgdGV4dEFyZWFJbnB1dC5uYW1lID0gJ2RldGFpbHMnO1xuICAgIHRleHRBcmVhSW5wdXQuaWQgPSAnZGV0YWlscyc7XG4gICAgZm9ybVJvd1R3by5hcHBlbmQodGV4dEFyZWFMYWJlbCwgdGV4dEFyZWFJbnB1dCk7XG5cbiAgICBjb25zdCBmb3JtUm93VGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtUm93VGhyZWUuY2xhc3NMaXN0LmFkZCgnZm9ybS1yb3cnKTtcbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5IDonO1xuICAgIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHknKTtcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHByaW9yaXR5U2VsZWN0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gICAgcHJpb3JpdHlTZWxlY3QubmFtZSA9ICdwcmlvcml0eSc7XG4gICAgcHJpb3JpdHlTZWxlY3QuaWQgPSAncHJpb3JpdHknO1xuICAgIGNvbnN0IG9wdGlvbk9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbk9uZS50ZXh0Q29udGVudCA9ICdIaWdoJztcbiAgICBvcHRpb25PbmUudmFsdWUgPSAnaCc7XG4gICAgY29uc3Qgb3B0aW9uVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uVHdvLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG4gICAgb3B0aW9uVHdvLnZhbHVlID0gJ20nO1xuICAgIGNvbnN0IG9wdGlvblRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uVGhyZWUudGV4dENvbnRlbnQgPSAnTG93JztcbiAgICBvcHRpb25UaHJlZS52YWx1ZSA9ICdsJztcbiAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmQob3B0aW9uT25lLCBvcHRpb25Ud28sIG9wdGlvblRocmVlKTtcbiAgICBmb3JtUm93VGhyZWUuYXBwZW5kKHByaW9yaXR5TGFiZWwsIHByaW9yaXR5U2VsZWN0KTtcblxuICAgIGNvbnN0IGZvcm1Sb3dGb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybVJvd0ZvdXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1yb3cnKTtcbiAgICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEYXRlIDonO1xuICAgIGR1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkdWUtZGF0ZScpO1xuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgZGF0ZUlucHV0Lm5hbWUgPSAnZHVlLWRhdGUnO1xuICAgIGRhdGVJbnB1dC5pZCA9ICdkdWUtZGF0ZSc7XG4gICAgZm9ybVJvd0ZvdXIuYXBwZW5kKGR1ZURhdGVMYWJlbCwgZGF0ZUlucHV0KTtcblxuICAgIGNvbnN0IGZvcm1Sb3dGaXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybVJvd0ZpdmUuY2xhc3NMaXN0LmFkZCgnZm9ybS1yb3cnKTtcbiAgICBjb25zdCBzYXZlVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHNhdmVUYXNrQnV0dG9uLnR5cGUgPSAnc3VibWl0JztcbiAgICBzYXZlVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLXN1Ym1pdC1idXR0b24nKTtcbiAgICBzYXZlVGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdTYXZlJztcbiAgICBjb25zdCBjYW5jZWxUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsVGFza0J1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgY2FuY2VsVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWJ1dHRvbicpO1xuICAgIGNhbmNlbFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICBmb3JtUm93Rml2ZS5hcHBlbmQoc2F2ZVRhc2tCdXR0b24sIGNhbmNlbFRhc2tCdXR0b24pO1xuXG4gICAgLy8gYWRkIHRvIERPTVxuICAgIG5ld1Rhc2tGb3JtLmFwcGVuZChmb3JtUm93T25lLCBmb3JtUm93VHdvLCBmb3JtUm93VGhyZWUsIGZvcm1Sb3dGb3VyLCBmb3JtUm93Rml2ZSk7XG4gICAgcHJvamVjdEhlYWRpbmcuYXBwZW5kKHByb2plY3ROYW1lLCB0YXNrU3BhbiwgbmV3VGFza0J1dHRvbiwgbmV3VGFza0Zvcm0pO1xuXG4gICAgLy9hZGQgdG8gRE9NXG4gICAgbWlkc2VjdGlvbi5hcHBlbmQocHJvamVjdEhlYWRpbmcsIHRhc2tDb250YWluZXIpO1xuXG4gICAgY29uc3Qgc2lkZWJhclRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXJUb3AuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci10b3AnKTtcblxuICAgIGNvbnN0IHNpZGViYXJCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFyQm90dG9tLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItYm90dG9tJyk7XG5cbiAgICAvLyBhZGQgdG8gRE9NXG4gICAgc2lkZWJhci5hcHBlbmQoc2lkZWJhclRvcCwgc2lkZWJhckJvdHRvbSk7XG5cbiAgICBjb25zdCBpbmJveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluYm94RGl2LmNsYXNzTGlzdC5hZGQoJ2luYm94Jyk7XG5cbiAgICBjb25zdCB0b2RheURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZGF5RGl2LmNsYXNzTGlzdC5hZGQoJ3RvZGF5Jyk7XG5cbiAgICBjb25zdCBzZXZlbkRheXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZXZlbkRheXNEaXYuY2xhc3NMaXN0LmFkZCgnc2V2ZW4tZGF5cycpO1xuXG4gICAgY29uc3QgaW1wb3J0YW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1wb3J0YW50RGl2LmNsYXNzTGlzdC5hZGQoJ2ltcG9ydGFudCcpO1xuXG4gICAgY29uc3QgaW5ib3hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW5ib3hJY29uLmNsYXNzTGlzdC5hZGQoJ2luYm94LWljb24nKTtcbiAgICBpbmJveEljb24uc3JjID0gaW5ib3hJbWc7XG4gICAgY29uc3QgaW5ib3hMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGluYm94TGluay5jbGFzc0xpc3QuYWRkKCdpbmJveC1saW5rJyk7XG4gICAgaW5ib3hMaW5rLnRleHRDb250ZW50ID0gJ0luYm94JztcblxuICAgIC8vYWRkIHRvIERPTVxuICAgIGluYm94RGl2LmFwcGVuZChpbmJveEljb24sIGluYm94TGluayk7XG5cbiAgICBjb25zdCB0b2RheUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB0b2RheUljb24uY2xhc3NMaXN0LmFkZCgndG9kYXktaWNvbicpO1xuICAgIHRvZGF5SWNvbi5zcmMgPSB0b2RheUltZztcblxuICAgIGNvbnN0IHRvZGF5TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICB0b2RheUxpbmsuY2xhc3NMaXN0LmFkZCgndG9kYXktbGluaycpO1xuICAgIHRvZGF5TGluay50ZXh0Q29udGVudCA9ICdUb2RheSc7XG5cbiAgICAvLyBhZGQgdG8gRE9NXG4gICAgdG9kYXlEaXYuYXBwZW5kKHRvZGF5SWNvbiwgdG9kYXlMaW5rKTtcblxuICAgIGNvbnN0IGNhbGVuZGFySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNhbGVuZGFySWNvbi5jbGFzc0xpc3QuYWRkKCdjYWxlbmRhci1pY29uJyk7XG4gICAgY2FsZW5kYXJJY29uLnNyYyA9IGNhbGVuZGFySW1nO1xuXG4gICAgY29uc3Qgc2V2ZW5EYXlzTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBzZXZlbkRheXNMaW5rLmNsYXNzTGlzdC5hZGQoJ3NldmVuRGF5cy1saW5rJyk7XG4gICAgc2V2ZW5EYXlzTGluay50ZXh0Q29udGVudCA9ICc3IERheXMnO1xuXG4gICAgLy8gYWRkIHRvIERPTVxuICAgIHNldmVuRGF5c0Rpdi5hcHBlbmQoY2FsZW5kYXJJY29uLCBzZXZlbkRheXNMaW5rKTtcblxuICAgIGNvbnN0IGltcG9ydGFudEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbXBvcnRhbnRJY29uLmNsYXNzTGlzdC5hZGQoJ2ltcC1pY29uJyk7XG4gICAgaW1wb3J0YW50SWNvbi5zcmMgPSBpbXBJbWc7XG5cbiAgICBjb25zdCBpbXBvcnRhbnRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGltcG9ydGFudExpbmsuY2xhc3NMaXN0LmFkZCgnaW1wLWxpbmsnKTtcbiAgICBpbXBvcnRhbnRMaW5rLnRleHRDb250ZW50ID0gJ0ltcG9ydGFudCc7XG5cbiAgICAvLyBhZGQgdG8gRE9NXG4gICAgaW1wb3J0YW50RGl2LmFwcGVuZChpbXBvcnRhbnRJY29uLCBpbXBvcnRhbnRMaW5rKTtcblxuICAgIC8vYWRkIHRvIERPTVxuICAgIHNpZGViYXJUb3AuYXBwZW5kKGluYm94RGl2LCB0b2RheURpdiwgc2V2ZW5EYXlzRGl2LCBpbXBvcnRhbnREaXYpO1xuXG4gICAgY29uc3QgYWN0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWN0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ2FjdGlvbicpO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLXByb2plY3QnKTtcblxuICAgIGNvbnN0IGFjdGlvblNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgYWN0aW9uU3Bhbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC1wcm9qZWN0Jyk7XG4gICAgYWN0aW9uU3Bhbi50ZXh0Q29udGVudCA9ICdBZGQgUHJvamVjdCc7XG5cbiAgICBjb25zdCBwcm9qZWN0UG9wVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgcHJvamVjdFBvcFVwLmFjdGlvbiA9ICcnO1xuICAgIHByb2plY3RQb3BVcC5tZXRob2QgPSAnJztcbiAgICBwcm9qZWN0UG9wVXAuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1wb3AtdXAnLCAnaGlkZGVuJyk7XG4gICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJvamVjdE5hbWVJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIHByb2plY3ROYW1lSW5wdXQuaWQgPSAnbmFtZSc7XG4gICAgcHJvamVjdE5hbWVJbnB1dC5uYW1lID0gJ25hbWUnO1xuICAgIHByb2plY3ROYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICBjb25zdCBzYXZlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHNhdmVQcm9qZWN0QnV0dG9uLnR5cGUgPSAnc3VibWl0JztcbiAgICBzYXZlUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTYXZlJztcbiAgICBzYXZlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNoYW5nZScpO1xuICAgIHNhdmVQcm9qZWN0QnV0dG9uLmlkID0gJ3NhdmUtcHJvamVjdCc7XG4gICAgY29uc3QgY2FuY2VsUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbFByb2plY3RCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgIGNhbmNlbFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICBjYW5jZWxQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdW5jaGFuZ2VkJyk7XG4gICAgY2FuY2VsUHJvamVjdEJ1dHRvbi5pZCA9ICdjYW5jZWwtcHJvamVjdCc7XG5cbiAgICAvLyBhZGQgdG8gRE9NXG4gICAgcHJvamVjdFBvcFVwLmFwcGVuZChwcm9qZWN0TmFtZUlucHV0LCBzYXZlUHJvamVjdEJ1dHRvbiwgY2FuY2VsUHJvamVjdEJ1dHRvbik7XG5cbiAgICAvLyBhZGQgdG8gRE9NXG4gICAgYWN0aW9uRGl2LmFwcGVuZChhZGRQcm9qZWN0QnV0dG9uLCBhY3Rpb25TcGFuLCBwcm9qZWN0UG9wVXApO1xuICAgIHNpZGViYXJCb3R0b20uYXBwZW5kKHByb2plY3RBcnJheSwgYWN0aW9uRGl2KTtcbn07XG5cbmV4cG9ydCB7IHByb2plY3RBcnJheSwgdGFza0NvbnRhaW5lciwgcHJvamVjdE5hbWUsIHBhZ2VMb2FkIH07IiwibGV0IF9jdXJyZW50UHJvamVjdEluZGV4ID0gMDtcblxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBbJ0RlZmF1bHQnLF07XG5cbmNvbnN0IG1hc3RlckFycmF5ID0gW2RlZmF1bHRQcm9qZWN0LF07XG5cbmNvbnN0IF9zZXRQcm9qZWN0SW5kZXggPSAobmV3SW5kZXgpID0+IHtcbiAgICBfY3VycmVudFByb2plY3RJbmRleCA9IG5ld0luZGV4O1xufTtcblxuY29uc3QgdG9nZ2xlSW5kZXggPSAobmV3SW5kZXgpID0+IHtcbiAgICBfc2V0UHJvamVjdEluZGV4KG5ld0luZGV4KTtcbn07XG5cbmNvbnN0IGdldEN1cnJlbnRJbmRleCA9ICgpID0+IHtcbiAgICByZXR1cm4gX2N1cnJlbnRQcm9qZWN0SW5kZXg7XG59O1xuXG5leHBvcnQgeyB0b2dnbGVJbmRleCwgZ2V0Q3VycmVudEluZGV4LCBtYXN0ZXJBcnJheSB9OyIsImltcG9ydCB7IHRhc2tDb250YWluZXIgfSBmcm9tIFwiLi9ob21lLmpzXCI7XG5pbXBvcnQgeyBtYXN0ZXJBcnJheSB9IGZyb20gXCIuL21hc3Rlci1zdHJ1Y3R1cmUuanNcIjtcblxuY29uc3QgdGFza0xvYWQgPSAoY3VycmVudFByb2plY3QpID0+IHtcbiAgICB3aGlsZSAodGFza0NvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgICAgIHRhc2tDb250YWluZXIucmVtb3ZlQ2hpbGQodGFza0NvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKTtcbiAgICB9O1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBjdXJyZW50UHJvamVjdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tEaXYuaWQgPSBpO1xuICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGl2Jyk7XG5cbiAgICAgICAgY29uc3QgYnJpZWZJbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJyaWVmSW5mb0Rpdi5jbGFzc0xpc3QuYWRkKCdicmllZi1pbmZvJywgJ2JyaWVmLWxheW91dCcpO1xuXG4gICAgICAgIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgIGNvbnN0IHRpdGxlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdGl0bGVTcGFuLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTtcbiAgICAgICAgdGl0bGVTcGFuLnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3RbaV1bJ3RpdGxlJ107XG4gICAgICAgIGNvbnN0IGRhdGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBkYXRlU3Bhbi5jbGFzc0xpc3QuYWRkKCdkdWUtZGF0ZScpO1xuICAgICAgICBkYXRlU3Bhbi50ZXh0Q29udGVudCA9IGN1cnJlbnRQcm9qZWN0W2ldWydkdWVEYXRlJ107XG4gICAgICAgIGNvbnN0IGRlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ1dHRvbicpO1xuXG4gICAgICAgIGlmIChjdXJyZW50UHJvamVjdFtpXVsncHJpb3JpdHknXSA9PT0gJ2gnKSB7XG4gICAgICAgICAgICB0aXRsZVNwYW4uY2xhc3NMaXN0LmFkZCgnaGlnaC1wcmlvcml0eScpXG4gICAgICAgICAgICBkYXRlU3Bhbi5jbGFzc0xpc3QuYWRkKCdoaWdoLXByaW9yaXR5JylcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50UHJvamVjdFtpXVsncHJpb3JpdHknXSA9PT0gJ20nKSB7XG4gICAgICAgICAgICB0aXRsZVNwYW4uY2xhc3NMaXN0LmFkZCgnbWVkaXVtLXByaW9yaXR5JylcbiAgICAgICAgICAgIGRhdGVTcGFuLmNsYXNzTGlzdC5hZGQoJ21lZGl1bS1wcmlvcml0eScpXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gYWRkIHRvIERPTVxuICAgICAgICBicmllZkluZm9EaXYuYXBwZW5kKGNoZWNrQm94LCB0aXRsZVNwYW4sIGRhdGVTcGFuLCBkZWxCdXR0b24pO1xuXG4gICAgICAgIGNvbnN0IHJhd0luZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcmF3SW5mb0Rpdi5jbGFzc0xpc3QuYWRkKCdyYXctaW5mbycsICdoaWRkZW4nKTtcblxuICAgICAgICAvLyBzdGFydCBlZGl0IGZvcm1cbiAgICAgICAgY29uc3QgZm9ybUVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGZvcm1FZGl0LmFjdGlvbiA9ICcnO1xuICAgICAgICBmb3JtRWRpdC5tZXRob2QgPSAnJztcbiAgICAgICAgZm9ybUVkaXQuY2xhc3NMaXN0LmFkZCgnZWRpdC1kZXRhaWxzJyk7XG5cbiAgICAgICAgY29uc3QgZm9ybVJvd09uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb3JtUm93T25lLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tcm93Jyk7XG4gICAgICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RpdGxlJyk7XG4gICAgICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnVGl0bGUgOidcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgdGl0bGVJbnB1dC5pZCA9ICd0aXRsZSc7XG4gICAgICAgIHRpdGxlSW5wdXQubmFtZSA9ICd0aXRsZSc7XG4gICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSBjdXJyZW50UHJvamVjdFtpXVsndGl0bGUnXTtcbiAgICAgICAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ2RhdGUtZGl2Jyk7XG4gICAgICAgIGNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEYXRlIDonO1xuICAgICAgICBkdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlLWRhdGUnKTtcbiAgICAgICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgICAgIGRhdGVJbnB1dC5uYW1lID0gJ2R1ZS1kYXRlJztcbiAgICAgICAgZGF0ZUlucHV0LmlkID0gJ2R1ZS1kYXRlJztcbiAgICAgICAgZGF0ZUlucHV0LnZhbHVlID0gY3VycmVudFByb2plY3RbaV1bJ2R1ZURhdGUnXTtcblxuICAgICAgICAvLyBhZGQgdG8gRE9NXG4gICAgICAgIGZvcm1Sb3dPbmUuYXBwZW5kKHRpdGxlTGFiZWwsIHRpdGxlSW5wdXQsIGR1ZURhdGVMYWJlbCwgZGF0ZUlucHV0KTtcblxuICAgICAgICBjb25zdCBmb3JtUm93VHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcm1Sb3dUd28uY2xhc3NMaXN0LmFkZCgnZm9ybS1yb3cnKTtcbiAgICAgICAgY29uc3QgdGV4dEFyZWFMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHRleHRBcmVhTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGV0YWlscycpO1xuICAgICAgICB0ZXh0QXJlYUxhYmVsLnRleHRDb250ZW50ID0gJ0RldGFpbHMgOic7XG4gICAgICAgIGNvbnN0IHRleHRBcmVhSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICB0ZXh0QXJlYUlucHV0Lm5hbWUgPSAnZGV0YWlscyc7XG4gICAgICAgIHRleHRBcmVhSW5wdXQuaWQgPSAnZGV0YWlscyc7XG4gICAgICAgIHRleHRBcmVhSW5wdXQudGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdFtpXVsnZGV0YWlscyddO1xuICAgICAgICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1kaXYnKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHkgOic7XG4gICAgICAgIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHknKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgcHJpb3JpdHlTZWxlY3QubmFtZSA9ICdwcmlvcml0eSc7XG4gICAgICAgIHByaW9yaXR5U2VsZWN0LmlkID0gJ3ByaW9yaXR5JztcbiAgICAgICAgY29uc3Qgb3B0aW9uT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbk9uZS50ZXh0Q29udGVudCA9ICdIaWdoJztcbiAgICAgICAgb3B0aW9uT25lLnZhbHVlID0gJ2gnO1xuICAgICAgICBjb25zdCBvcHRpb25Ud28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uVHdvLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG4gICAgICAgIG9wdGlvblR3by52YWx1ZSA9ICdtJztcbiAgICAgICAgY29uc3Qgb3B0aW9uVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uVGhyZWUudGV4dENvbnRlbnQgPSAnTG93JztcbiAgICAgICAgb3B0aW9uVGhyZWUudmFsdWUgPSAnbCc7XG5cbiAgICAgICAgLy8gYWRkIHRvIERPTVxuICAgICAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmQob3B0aW9uT25lLCBvcHRpb25Ud28sIG9wdGlvblRocmVlKTtcbiAgICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0W2ldWydwcmlvcml0eSddID09PSAnaCcpIHByaW9yaXR5U2VsZWN0LnZhbHVlID0gb3B0aW9uT25lLnZhbHVlXG4gICAgICAgIGVsc2UgaWYgKGN1cnJlbnRQcm9qZWN0W2ldWydwcmlvcml0eSddID09PSAnbScpIHByaW9yaXR5U2VsZWN0LnZhbHVlID0gb3B0aW9uVHdvLnZhbHVlXG4gICAgICAgIGVsc2UgaWYgKGN1cnJlbnRQcm9qZWN0W2ldWydwcmlvcml0eSddID09PSAnbCcpIHByaW9yaXR5U2VsZWN0LnZhbHVlID0gb3B0aW9uVGhyZWUudmFsdWVcbiAgICAgICAgZm9ybVJvd1R3by5hcHBlbmQodGV4dEFyZWFMYWJlbCwgdGV4dEFyZWFJbnB1dCwgcHJpb3JpdHlMYWJlbCwgcHJpb3JpdHlTZWxlY3QpO1xuXG4gICAgICAgIGNvbnN0IGZvcm1Sb3dUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb3JtUm93VGhyZWUuY2xhc3NMaXN0LmFkZCgnZm9ybS1yb3cnKTtcbiAgICAgICAgY29uc3Qgc2F2ZUVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc2F2ZUVkaXRCdXR0b24udHlwZSA9ICdzdWJtaXQnO1xuICAgICAgICBzYXZlRWRpdEJ1dHRvbi5pZCA9ICdzYXZlLWVkaXQnO1xuICAgICAgICBzYXZlRWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTYXZlJztcbiAgICAgICAgY29uc3QgY2FuY2VsRWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjYW5jZWxFZGl0QnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgY2FuY2VsRWRpdEJ1dHRvbi5pZCA9ICdjYW5jZWwtZWRpdCc7XG4gICAgICAgIGNhbmNlbEVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2FuY2VsLXRhc2snKTtcbiAgICAgICAgY2FuY2VsRWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuXG4gICAgICAgIC8vIGFkZCB0byBET01cbiAgICAgICAgZm9ybVJvd1RocmVlLmFwcGVuZChzYXZlRWRpdEJ1dHRvbiwgY2FuY2VsRWRpdEJ1dHRvbik7XG5cbiAgICAgICAgLy8gYWRkIHRvIERPTVxuICAgICAgICBmb3JtRWRpdC5hcHBlbmQoZm9ybVJvd09uZSwgZm9ybVJvd1R3bywgZm9ybVJvd1RocmVlKTtcbiAgICAgICAgcmF3SW5mb0Rpdi5hcHBlbmQoZm9ybUVkaXQpO1xuICAgICAgICAvLyBlbmQgZWRpdCBmb3JtXG5cbiAgICAgICAgLy8gYWRkIHRvIERPTVxuICAgICAgICB0YXNrRGl2LmFwcGVuZChicmllZkluZm9EaXYsIHJhd0luZm9EaXYpO1xuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZCh0YXNrRGl2KTtcbiAgICB9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRhc2tMb2FkOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==