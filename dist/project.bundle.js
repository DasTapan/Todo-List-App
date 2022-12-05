"use strict";
(self["webpackChunktodo_list_app"] = self["webpackChunktodo_list_app"] || []).push([["project"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/project.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ007QUFDSjtBQUNGO0FBQ3VCOztBQUVyRTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4Qiw2REFBVyxDQUFDLHFFQUFlO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGtEQUFRO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0Isa0RBQVE7O0FBRTVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIscURBQVc7O0FBRWxDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0Isc0RBQU07O0FBRTlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQyxtQkFBbUI7O0FBRXhEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDclFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJvRDtBQUNYOztBQUV6QztBQUNBO0FBQ0E7QUFDQSxXQUFXLG1FQUE2QjtBQUN4QyxRQUFRLDhEQUF3QixDQUFDLG1FQUE2QjtBQUM5RDs7QUFFQSxvQkFBb0IsSUFBSSxvRUFBa0IsRUFBRTtBQUM1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQyw2REFBVyxRQUFROztBQUVyRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLDhEQUF3QjtBQUNoQztBQUNBOztBQUVBLGlFQUFlLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tYXN0ZXItc3RydWN0dXJlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvcHJvamVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW5ib3hJbWcgZnJvbSAnLi9JY29ucy9pbmJveC1pY29uLnBuZyc7XG5pbXBvcnQgY2FsZW5kYXJJbWcgZnJvbSAnLi9JY29ucy9jYWxlbmRhci1pY29uLnBuZyc7XG5pbXBvcnQgaW1wSW1nIGZyb20gJy4vSWNvbnMvaW1wb3J0YW50LWljb24ucG5nJztcbmltcG9ydCB0b2RheUltZyBmcm9tICcuL0ljb25zL3RvZGF5LWljb24ucG5nJztcbmltcG9ydCB7IGdldEN1cnJlbnRJbmRleCwgbWFzdGVyQXJyYXkgfSBmcm9tICcuL21hc3Rlci1zdHJ1Y3R1cmUuanMnO1xuXG5jb25zdCBwcm9qZWN0QXJyYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnByb2plY3RBcnJheS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWFycmF5Jyk7XG5cbmNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1jb250YWluZXInKTtcblxuY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7IC8vIHRoaXMgaXMgaW4gZ2xvYmFsIHNjb3BlIG9ubHkgdG8gZXhwb3J0XG5cbmNvbnN0IHBhZ2VMb2FkID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50RGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGhlYWRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuXG4gICAgY29uc3QgbWFpbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG5cbiAgICBjb25zdCBmb290ZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcbiAgICBmb290ZXJFbGVtZW50LnRleHRDb250ZW50ID0gJ8KpIE1hZGUgYnkgRGFzVGFwYW4nO1xuXG4gICAgLy8gYWRkIHRvIERPTVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudERpdik7XG4gICAgY29udGVudERpdi5hcHBlbmQoaGVhZGVyRWxlbWVudCwgbWFpbkVsZW1lbnQsIGZvb3RlckVsZW1lbnQpO1xuXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xuXG4gICAgY29uc3QgbWlkc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1pZHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnbWlkc2VjdGlvbicpO1xuXG4gICAgLy8gYWRkIHRvIERPTVxuICAgIG1haW5FbGVtZW50LmFwcGVuZChzaWRlYmFyLCBtaWRzZWN0aW9uKTtcblxuICAgIGNvbnN0IHByb2plY3RIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdEhlYWRpbmcuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1oZWFkaW5nJyk7XG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBtYXN0ZXJBcnJheVtnZXRDdXJyZW50SW5kZXgoKV1bMF07XG4gICAgY29uc3QgdGFza1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdGFza1NwYW4udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xuICAgIGNvbnN0IG5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXdUYXNrQnV0dG9uLmlkID0gJ25ldy10YXNrJztcbiAgICBuZXdUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrJyk7XG5cbiAgICAvLyBjcmVhdGUgdGFzayBmb3JtXG4gICAgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgbmV3VGFza0Zvcm0uYWN0aW9uID0gJyc7XG4gICAgbmV3VGFza0Zvcm0ubWV0aG9kID0gJyc7XG4gICAgbmV3VGFza0Zvcm0uY2xhc3NMaXN0LmFkZCgndGFzay1mb3JtJywgJ2hpZGRlbicpO1xuXG4gICAgY29uc3QgZm9ybVJvd09uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Sb3dPbmUuY2xhc3NMaXN0LmFkZCgnZm9ybS1yb3cnKTtcbiAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RpdGxlJyk7XG4gICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZSA6J1xuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICB0aXRsZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgdGl0bGVJbnB1dC5pZCA9ICd0aXRsZSc7XG4gICAgdGl0bGVJbnB1dC5uYW1lID0gJ3RpdGxlJztcbiAgICBmb3JtUm93T25lLmFwcGVuZCh0aXRsZUxhYmVsLCB0aXRsZUlucHV0KTtcblxuICAgIGNvbnN0IGZvcm1Sb3dUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtUm93VHdvLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tcm93Jyk7XG4gICAgY29uc3QgdGV4dEFyZWFMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGV4dEFyZWFMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkZXRhaWxzJyk7XG4gICAgdGV4dEFyZWFMYWJlbC50ZXh0Q29udGVudCA9ICdEZXRhaWxzIDonO1xuICAgIGNvbnN0IHRleHRBcmVhSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIHRleHRBcmVhSW5wdXQubmFtZSA9ICdkZXRhaWxzJztcbiAgICB0ZXh0QXJlYUlucHV0LmlkID0gJ2RldGFpbHMnO1xuICAgIGZvcm1Sb3dUd28uYXBwZW5kKHRleHRBcmVhTGFiZWwsIHRleHRBcmVhSW5wdXQpO1xuXG4gICAgY29uc3QgZm9ybVJvd1RocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybVJvd1RocmVlLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tcm93Jyk7XG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSA6JztcbiAgICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5Jyk7XG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBwcmlvcml0eVNlbGVjdC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgIHByaW9yaXR5U2VsZWN0Lm5hbWUgPSAncHJpb3JpdHknO1xuICAgIHByaW9yaXR5U2VsZWN0LmlkID0gJ3ByaW9yaXR5JztcbiAgICBjb25zdCBvcHRpb25PbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb25PbmUudGV4dENvbnRlbnQgPSAnSGlnaCc7XG4gICAgb3B0aW9uT25lLnZhbHVlID0gJ2gnO1xuICAgIGNvbnN0IG9wdGlvblR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvblR3by50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuICAgIG9wdGlvblR3by52YWx1ZSA9ICdtJztcbiAgICBjb25zdCBvcHRpb25UaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvblRocmVlLnRleHRDb250ZW50ID0gJ0xvdyc7XG4gICAgb3B0aW9uVGhyZWUudmFsdWUgPSAnbCc7XG4gICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kKG9wdGlvbk9uZSwgb3B0aW9uVHdvLCBvcHRpb25UaHJlZSk7XG4gICAgZm9ybVJvd1RocmVlLmFwcGVuZChwcmlvcml0eUxhYmVsLCBwcmlvcml0eVNlbGVjdCk7XG5cbiAgICBjb25zdCBmb3JtUm93Rm91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Sb3dGb3VyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tcm93Jyk7XG4gICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRGF0ZSA6JztcbiAgICBkdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlLWRhdGUnKTtcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgIGRhdGVJbnB1dC5uYW1lID0gJ2R1ZS1kYXRlJztcbiAgICBkYXRlSW5wdXQuaWQgPSAnZHVlLWRhdGUnO1xuICAgIGZvcm1Sb3dGb3VyLmFwcGVuZChkdWVEYXRlTGFiZWwsIGRhdGVJbnB1dCk7XG5cbiAgICBjb25zdCBmb3JtUm93Rml2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Sb3dGaXZlLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tcm93Jyk7XG4gICAgY29uc3Qgc2F2ZVRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzYXZlVGFza0J1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgc2F2ZVRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgndGFzay1zdWJtaXQtYnV0dG9uJyk7XG4gICAgc2F2ZVRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnU2F2ZSc7XG4gICAgY29uc3QgY2FuY2VsVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbFRhc2tCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgIGNhbmNlbFRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgndGFzay1idXR0b24nKTtcbiAgICBjYW5jZWxUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgZm9ybVJvd0ZpdmUuYXBwZW5kKHNhdmVUYXNrQnV0dG9uLCBjYW5jZWxUYXNrQnV0dG9uKTtcblxuICAgIC8vIGFkZCB0byBET01cbiAgICBuZXdUYXNrRm9ybS5hcHBlbmQoZm9ybVJvd09uZSwgZm9ybVJvd1R3bywgZm9ybVJvd1RocmVlLCBmb3JtUm93Rm91ciwgZm9ybVJvd0ZpdmUpO1xuICAgIHByb2plY3RIZWFkaW5nLmFwcGVuZChwcm9qZWN0TmFtZSwgdGFza1NwYW4sIG5ld1Rhc2tCdXR0b24sIG5ld1Rhc2tGb3JtKTtcblxuICAgIC8vYWRkIHRvIERPTVxuICAgIG1pZHNlY3Rpb24uYXBwZW5kKHByb2plY3RIZWFkaW5nLCB0YXNrQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IHNpZGViYXJUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFyVG9wLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItdG9wJyk7XG5cbiAgICBjb25zdCBzaWRlYmFyQm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZWJhckJvdHRvbS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWJvdHRvbScpO1xuXG4gICAgLy8gYWRkIHRvIERPTVxuICAgIHNpZGViYXIuYXBwZW5kKHNpZGViYXJUb3AsIHNpZGViYXJCb3R0b20pO1xuXG4gICAgY29uc3QgaW5ib3hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmJveERpdi5jbGFzc0xpc3QuYWRkKCdpbmJveCcpO1xuXG4gICAgY29uc3QgdG9kYXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RheURpdi5jbGFzc0xpc3QuYWRkKCd0b2RheScpO1xuXG4gICAgY29uc3Qgc2V2ZW5EYXlzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2V2ZW5EYXlzRGl2LmNsYXNzTGlzdC5hZGQoJ3NldmVuLWRheXMnKTtcblxuICAgIGNvbnN0IGltcG9ydGFudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltcG9ydGFudERpdi5jbGFzc0xpc3QuYWRkKCdpbXBvcnRhbnQnKTtcblxuICAgIGNvbnN0IGluYm94SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGluYm94SWNvbi5jbGFzc0xpc3QuYWRkKCdpbmJveC1pY29uJyk7XG4gICAgaW5ib3hJY29uLnNyYyA9IGluYm94SW1nO1xuICAgIGNvbnN0IGluYm94TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBpbmJveExpbmsuY2xhc3NMaXN0LmFkZCgnaW5ib3gtbGluaycpO1xuICAgIGluYm94TGluay50ZXh0Q29udGVudCA9ICdJbmJveCc7XG5cbiAgICAvL2FkZCB0byBET01cbiAgICBpbmJveERpdi5hcHBlbmQoaW5ib3hJY29uLCBpbmJveExpbmspO1xuXG4gICAgY29uc3QgdG9kYXlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdG9kYXlJY29uLmNsYXNzTGlzdC5hZGQoJ3RvZGF5LWljb24nKTtcbiAgICB0b2RheUljb24uc3JjID0gdG9kYXlJbWc7XG5cbiAgICBjb25zdCB0b2RheUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgdG9kYXlMaW5rLmNsYXNzTGlzdC5hZGQoJ3RvZGF5LWxpbmsnKTtcbiAgICB0b2RheUxpbmsudGV4dENvbnRlbnQgPSAnVG9kYXknO1xuXG4gICAgLy8gYWRkIHRvIERPTVxuICAgIHRvZGF5RGl2LmFwcGVuZCh0b2RheUljb24sIHRvZGF5TGluayk7XG5cbiAgICBjb25zdCBjYWxlbmRhckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjYWxlbmRhckljb24uY2xhc3NMaXN0LmFkZCgnY2FsZW5kYXItaWNvbicpO1xuICAgIGNhbGVuZGFySWNvbi5zcmMgPSBjYWxlbmRhckltZztcblxuICAgIGNvbnN0IHNldmVuRGF5c0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgc2V2ZW5EYXlzTGluay5jbGFzc0xpc3QuYWRkKCdzZXZlbkRheXMtbGluaycpO1xuICAgIHNldmVuRGF5c0xpbmsudGV4dENvbnRlbnQgPSAnNyBEYXlzJztcblxuICAgIC8vIGFkZCB0byBET01cbiAgICBzZXZlbkRheXNEaXYuYXBwZW5kKGNhbGVuZGFySWNvbiwgc2V2ZW5EYXlzTGluayk7XG5cbiAgICBjb25zdCBpbXBvcnRhbnRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1wb3J0YW50SWNvbi5jbGFzc0xpc3QuYWRkKCdpbXAtaWNvbicpO1xuICAgIGltcG9ydGFudEljb24uc3JjID0gaW1wSW1nO1xuXG4gICAgY29uc3QgaW1wb3J0YW50TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBpbXBvcnRhbnRMaW5rLmNsYXNzTGlzdC5hZGQoJ2ltcC1saW5rJyk7XG4gICAgaW1wb3J0YW50TGluay50ZXh0Q29udGVudCA9ICdJbXBvcnRhbnQnO1xuXG4gICAgLy8gYWRkIHRvIERPTVxuICAgIGltcG9ydGFudERpdi5hcHBlbmQoaW1wb3J0YW50SWNvbiwgaW1wb3J0YW50TGluayk7XG5cbiAgICAvL2FkZCB0byBET01cbiAgICBzaWRlYmFyVG9wLmFwcGVuZChpbmJveERpdiwgdG9kYXlEaXYsIHNldmVuRGF5c0RpdiwgaW1wb3J0YW50RGl2KTtcblxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgbWFzdGVyQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAvLyAgICAgcHJvamVjdERpdi5pZCA9IGk7XG5cbiAgICAvLyAgICAgY29uc3QgbmFtZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgLy8gICAgIG5hbWVTcGFuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbmFtZScpO1xuICAgIC8vICAgICBuYW1lU3Bhbi50ZXh0Q29udGVudCA9IGAke21hc3RlckFycmF5W2ldWzBdfSBgICsgJ1Byb2plY3QnO1xuXG4gICAgLy8gICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAvLyAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWwtYnRuJyk7XG5cbiAgICAvLyAgICAgLy8gYWRkIHRvIERPTVxuICAgIC8vICAgICBwcm9qZWN0RGl2LmFwcGVuZChuYW1lU3BhbiwgZGVsZXRlUHJvamVjdEJ1dHRvbik7XG4gICAgLy8gICAgIHByb2plY3RBcnJheS5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgICAvLyB9XG5cbiAgICAvLyBjb25zdCBwcm9qZWN0T25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gcHJvamVjdE9uZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW9uZScpO1xuICAgIC8vIGNvbnN0IHByb2plY3RPbmVOYW1lU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAvLyBwcm9qZWN0T25lTmFtZVNwYW4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lJyk7XG4gICAgLy8gcHJvamVjdE9uZU5hbWVTcGFuLnRleHRDb250ZW50ID0gJ0RlZmF1bHQgUHJvamVjdCc7XG4gICAgLy8gY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIC8vIGRlbGV0ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsLWJ0bicpO1xuXG4gICAgLy8gLy8gYWRkIHRvIERPTVxuICAgIC8vIHByb2plY3RPbmUuYXBwZW5kKHByb2plY3RPbmVOYW1lU3BhbiwgZGVsZXRlUHJvamVjdEJ1dHRvbik7XG4gICAgLy8gcHJvamVjdEFycmF5LmFwcGVuZChwcm9qZWN0T25lKTtcblxuICAgIGNvbnN0IGFjdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFjdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdhY3Rpb24nKTtcblxuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC1wcm9qZWN0Jyk7XG5cbiAgICBjb25zdCBhY3Rpb25TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGFjdGlvblNwYW4uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvamVjdCcpO1xuICAgIGFjdGlvblNwYW4udGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnO1xuXG4gICAgY29uc3QgcHJvamVjdFBvcFVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHByb2plY3RQb3BVcC5hY3Rpb24gPSAnJztcbiAgICBwcm9qZWN0UG9wVXAubWV0aG9kID0gJyc7XG4gICAgcHJvamVjdFBvcFVwLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtcG9wLXVwJywgJ2hpZGRlbicpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2plY3ROYW1lSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICBwcm9qZWN0TmFtZUlucHV0LmlkID0gJ25hbWUnO1xuICAgIHByb2plY3ROYW1lSW5wdXQubmFtZSA9ICduYW1lJztcbiAgICBwcm9qZWN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gICAgY29uc3Qgc2F2ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzYXZlUHJvamVjdEJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgc2F2ZVByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnU2F2ZSc7XG4gICAgc2F2ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jaGFuZ2UnKTtcbiAgICBzYXZlUHJvamVjdEJ1dHRvbi5pZCA9ICdzYXZlLXByb2plY3QnO1xuICAgIGNvbnN0IGNhbmNlbFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxQcm9qZWN0QnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICBjYW5jZWxQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgY2FuY2VsUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXVuY2hhbmdlZCcpO1xuICAgIGNhbmNlbFByb2plY3RCdXR0b24uaWQgPSAnY2FuY2VsLXByb2plY3QnO1xuXG4gICAgLy8gYWRkIHRvIERPTVxuICAgIHByb2plY3RQb3BVcC5hcHBlbmQocHJvamVjdE5hbWVJbnB1dCwgc2F2ZVByb2plY3RCdXR0b24sIGNhbmNlbFByb2plY3RCdXR0b24pO1xuXG4gICAgLy8gYWRkIHRvIERPTVxuICAgIGFjdGlvbkRpdi5hcHBlbmQoYWRkUHJvamVjdEJ1dHRvbiwgYWN0aW9uU3BhbiwgcHJvamVjdFBvcFVwKTtcbiAgICBzaWRlYmFyQm90dG9tLmFwcGVuZChwcm9qZWN0QXJyYXksIGFjdGlvbkRpdik7XG59O1xuXG5leHBvcnQgeyBwcm9qZWN0QXJyYXksIHRhc2tDb250YWluZXIsIHByb2plY3ROYW1lLCBwYWdlTG9hZCB9OyIsImxldCBfY3VycmVudFByb2plY3RJbmRleCA9IDA7XG5cbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gW1xuICAgICdEZWZhdWx0Jyxcbl07XG5cbmNvbnN0IF9zZXRQcm9qZWN0SW5kZXggPSAobmV3SW5kZXgpID0+IHtcbiAgICBfY3VycmVudFByb2plY3RJbmRleCA9IG5ld0luZGV4O1xufTtcblxuY29uc3QgdG9nZ2xlSW5kZXggPSAobmV3SW5kZXgpID0+IHtcbiAgICBfc2V0UHJvamVjdEluZGV4KG5ld0luZGV4KTtcbn07XG5cbmNvbnN0IGdldEN1cnJlbnRJbmRleCA9ICgpID0+IHtcbiAgICByZXR1cm4gX2N1cnJlbnRQcm9qZWN0SW5kZXg7XG59O1xuXG5jb25zdCBtYXN0ZXJBcnJheSA9IFtkZWZhdWx0UHJvamVjdCxdO1xuXG5leHBvcnQgeyB0b2dnbGVJbmRleCwgZ2V0Q3VycmVudEluZGV4LCBtYXN0ZXJBcnJheSB9OyIsImltcG9ydCB7IG1hc3RlckFycmF5IH0gZnJvbSBcIi4vbWFzdGVyLXN0cnVjdHVyZS5qc1wiO1xuaW1wb3J0IHsgcHJvamVjdEFycmF5IH0gZnJvbSBcIi4vaG9tZS5qc1wiO1xuXG4vLyBjb25zb2xlLmxvZyhtYXN0ZXJBcnJheSk7XG5jb25zdCBwcm9qZWN0TG9hZCA9ICgpID0+IHtcbiAgICAvLyBjbGVhbiBkaXYgXG4gICAgd2hpbGUgKHByb2plY3RBcnJheS5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgICAgIHByb2plY3RBcnJheS5yZW1vdmVDaGlsZChwcm9qZWN0QXJyYXkubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXN0ZXJBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgICAgICBwcm9qZWN0RGl2LmlkID0gaTtcblxuICAgICAgICBjb25zdCBuYW1lU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgbmFtZVNwYW4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lJyk7XG4gICAgICAgIG5hbWVTcGFuLnRleHRDb250ZW50ID0gYCR7bWFzdGVyQXJyYXlbaV1bMF19IGAgKyAnUHJvamVjdCc7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbC1idG4nKTtcblxuICAgICAgICAvLyBhZGQgdG8gRE9NXG4gICAgICAgIHByb2plY3REaXYuYXBwZW5kKG5hbWVTcGFuLCBkZWxldGVQcm9qZWN0QnV0dG9uKTtcbiAgICAgICAgcHJvamVjdEFycmF5LmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RMb2FkOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==