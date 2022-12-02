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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDTTtBQUNKO0FBQ0Y7QUFDOUM7QUFDd0U7O0FBRXhFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw2REFBVyxDQUFDLHFFQUFtQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0Isa0RBQVE7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixrREFBUTs7QUFFNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QixxREFBVzs7QUFFbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixzREFBTTs7QUFFOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDLG1CQUFtQjs7QUFFeEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hRQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCb0Q7QUFDWDs7QUFFekMsWUFBWSw2REFBVztBQUN2QjtBQUNBO0FBQ0EsV0FBVyxtRUFBNkI7QUFDeEMsUUFBUSw4REFBd0IsQ0FBQyxtRUFBNkI7QUFDOUQ7O0FBRUEsb0JBQW9CLElBQUksb0VBQWtCLEVBQUU7QUFDNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0MsNkRBQVcsUUFBUTs7QUFFckQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSw4REFBd0I7QUFDaEM7QUFDQTs7QUFFQSxpRUFBZSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbWFzdGVyLXN0cnVjdHVyZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3Byb2plY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGluYm94SW1nIGZyb20gJy4vSWNvbnMvaW5ib3gtaWNvbi5wbmcnO1xuaW1wb3J0IGNhbGVuZGFySW1nIGZyb20gJy4vSWNvbnMvY2FsZW5kYXItaWNvbi5wbmcnO1xuaW1wb3J0IGltcEltZyBmcm9tICcuL0ljb25zL2ltcG9ydGFudC1pY29uLnBuZyc7XG5pbXBvcnQgdG9kYXlJbWcgZnJvbSAnLi9JY29ucy90b2RheS1pY29uLnBuZyc7XG5jb25zdCBwcm9qZWN0QXJyYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmltcG9ydCB7IGN1cnJlbnRQcm9qZWN0SW5kZXgsbWFzdGVyQXJyYXkgfSBmcm9tICcuL21hc3Rlci1zdHJ1Y3R1cmUuanMnO1xuXG5wcm9qZWN0QXJyYXkuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1hcnJheScpO1xuXG5jb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGFpbmVyJyk7XG5cbmNvbnN0IHBhZ2VMb2FkID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50RGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGhlYWRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuXG4gICAgY29uc3QgbWFpbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG5cbiAgICBjb25zdCBmb290ZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcbiAgICBmb290ZXJFbGVtZW50LnRleHRDb250ZW50ID0gJ8KpIE1hZGUgYnkgRGFzVGFwYW4nO1xuXG4gICAgLy8gYWRkIHRvIERPTVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudERpdik7XG4gICAgY29udGVudERpdi5hcHBlbmQoaGVhZGVyRWxlbWVudCwgbWFpbkVsZW1lbnQsIGZvb3RlckVsZW1lbnQpO1xuXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xuXG4gICAgY29uc3QgbWlkc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1pZHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnbWlkc2VjdGlvbicpO1xuXG4gICAgLy8gYWRkIHRvIERPTVxuICAgIG1haW5FbGVtZW50LmFwcGVuZChzaWRlYmFyLCBtaWRzZWN0aW9uKTtcblxuICAgIGNvbnN0IHByb2plY3RIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdEhlYWRpbmcuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1oZWFkaW5nJyk7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBtYXN0ZXJBcnJheVtjdXJyZW50UHJvamVjdEluZGV4XVswXTtcbiAgICBjb25zdCB0YXNrU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0YXNrU3Bhbi50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XG4gICAgY29uc3QgbmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld1Rhc2tCdXR0b24uaWQgPSAnbmV3LXRhc2snO1xuICAgIG5ld1Rhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2snKTtcblxuICAgIC8vIGNyZWF0ZSB0YXNrIGZvcm1cbiAgICBjb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBuZXdUYXNrRm9ybS5hY3Rpb24gPSAnJztcbiAgICBuZXdUYXNrRm9ybS5tZXRob2QgPSAnJztcbiAgICBuZXdUYXNrRm9ybS5jbGFzc0xpc3QuYWRkKCd0YXNrLWZvcm0nLCAnaGlkZGVuJyk7XG5cbiAgICBjb25zdCBmb3JtUm93T25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybVJvd09uZS5jbGFzc0xpc3QuYWRkKCdmb3JtLXJvdycpO1xuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGl0bGUnKTtcbiAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlIDonXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGl0bGVJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIHRpdGxlSW5wdXQuaWQgPSAndGl0bGUnO1xuICAgIHRpdGxlSW5wdXQubmFtZSA9ICd0aXRsZSc7XG4gICAgZm9ybVJvd09uZS5hcHBlbmQodGl0bGVMYWJlbCwgdGl0bGVJbnB1dCk7XG5cbiAgICBjb25zdCBmb3JtUm93VHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybVJvd1R3by5jbGFzc0xpc3QuYWRkKCdmb3JtLXJvdycpO1xuICAgIGNvbnN0IHRleHRBcmVhTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRleHRBcmVhTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGV0YWlscycpO1xuICAgIHRleHRBcmVhTGFiZWwudGV4dENvbnRlbnQgPSAnRGV0YWlscyA6JztcbiAgICBjb25zdCB0ZXh0QXJlYUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICB0ZXh0QXJlYUlucHV0Lm5hbWUgPSAnZGV0YWlscyc7XG4gICAgdGV4dEFyZWFJbnB1dC5pZCA9ICdkZXRhaWxzJztcbiAgICBmb3JtUm93VHdvLmFwcGVuZCh0ZXh0QXJlYUxhYmVsLCB0ZXh0QXJlYUlucHV0KTtcblxuICAgIGNvbnN0IGZvcm1Sb3dUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Sb3dUaHJlZS5jbGFzc0xpc3QuYWRkKCdmb3JtLXJvdycpO1xuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHkgOic7XG4gICAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eScpO1xuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJpb3JpdHlTZWxlY3QubmFtZSA9ICdwcmlvcml0eSc7XG4gICAgcHJpb3JpdHlTZWxlY3QuaWQgPSAncHJpb3JpdHknO1xuICAgIGNvbnN0IG9wdGlvbk9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbk9uZS50ZXh0Q29udGVudCA9ICdIaWdoJztcbiAgICBvcHRpb25PbmUudmFsdWUgPSAnaCc7XG4gICAgY29uc3Qgb3B0aW9uVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uVHdvLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG4gICAgb3B0aW9uVHdvLnZhbHVlID0gJ20nO1xuICAgIGNvbnN0IG9wdGlvblRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uVGhyZWUudGV4dENvbnRlbnQgPSAnTG93JztcbiAgICBvcHRpb25UaHJlZS52YWx1ZSA9ICdsJztcbiAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmQob3B0aW9uT25lLCBvcHRpb25Ud28sIG9wdGlvblRocmVlKTtcbiAgICBmb3JtUm93VGhyZWUuYXBwZW5kKHByaW9yaXR5TGFiZWwsIHByaW9yaXR5U2VsZWN0KTtcblxuICAgIGNvbnN0IGZvcm1Sb3dGb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybVJvd0ZvdXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1yb3cnKTtcbiAgICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEYXRlIDonO1xuICAgIGR1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkdWUtZGF0ZScpO1xuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgZGF0ZUlucHV0Lm5hbWUgPSAnZHVlLWRhdGUnO1xuICAgIGRhdGVJbnB1dC5pZCA9ICdkdWUtZGF0ZSc7XG4gICAgZm9ybVJvd0ZvdXIuYXBwZW5kKGR1ZURhdGVMYWJlbCwgZGF0ZUlucHV0KTtcblxuICAgIGNvbnN0IGZvcm1Sb3dGaXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybVJvd0ZpdmUuY2xhc3NMaXN0LmFkZCgnZm9ybS1yb3cnKTtcbiAgICBjb25zdCBzYXZlVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHNhdmVUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stYnV0dG9uJyk7XG4gICAgc2F2ZVRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnU2F2ZSc7XG4gICAgY29uc3QgY2FuY2VsVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbFRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgndGFzay1idXR0b24nKTtcbiAgICBjYW5jZWxUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgZm9ybVJvd0ZpdmUuYXBwZW5kKHNhdmVUYXNrQnV0dG9uLCBjYW5jZWxUYXNrQnV0dG9uKTtcblxuICAgIC8vIGFkZCB0byBET01cbiAgICBuZXdUYXNrRm9ybS5hcHBlbmQoZm9ybVJvd09uZSwgZm9ybVJvd1R3bywgZm9ybVJvd1RocmVlLCBmb3JtUm93Rm91ciwgZm9ybVJvd0ZpdmUpO1xuICAgIHByb2plY3RIZWFkaW5nLmFwcGVuZChwcm9qZWN0TmFtZSwgdGFza1NwYW4sIG5ld1Rhc2tCdXR0b24sIG5ld1Rhc2tGb3JtKTtcblxuICAgIC8vYWRkIHRvIERPTVxuICAgIG1pZHNlY3Rpb24uYXBwZW5kKHByb2plY3RIZWFkaW5nLCB0YXNrQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IHNpZGViYXJUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFyVG9wLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItdG9wJyk7XG5cbiAgICBjb25zdCBzaWRlYmFyQm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZWJhckJvdHRvbS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWJvdHRvbScpO1xuXG4gICAgLy8gYWRkIHRvIERPTVxuICAgIHNpZGViYXIuYXBwZW5kKHNpZGViYXJUb3AsIHNpZGViYXJCb3R0b20pO1xuXG4gICAgY29uc3QgaW5ib3hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmJveERpdi5jbGFzc0xpc3QuYWRkKCdpbmJveCcpO1xuXG4gICAgY29uc3QgdG9kYXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RheURpdi5jbGFzc0xpc3QuYWRkKCd0b2RheScpO1xuXG4gICAgY29uc3Qgc2V2ZW5EYXlzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2V2ZW5EYXlzRGl2LmNsYXNzTGlzdC5hZGQoJ3NldmVuLWRheXMnKTtcblxuICAgIGNvbnN0IGltcG9ydGFudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltcG9ydGFudERpdi5jbGFzc0xpc3QuYWRkKCdpbXBvcnRhbnQnKTtcblxuICAgIGNvbnN0IGluYm94SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGluYm94SWNvbi5jbGFzc0xpc3QuYWRkKCdpbmJveC1pY29uJyk7XG4gICAgaW5ib3hJY29uLnNyYyA9IGluYm94SW1nO1xuICAgIGNvbnN0IGluYm94TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBpbmJveExpbmsuY2xhc3NMaXN0LmFkZCgnaW5ib3gtbGluaycpO1xuICAgIGluYm94TGluay50ZXh0Q29udGVudCA9ICdJbmJveCc7XG5cbiAgICAvL2FkZCB0byBET01cbiAgICBpbmJveERpdi5hcHBlbmQoaW5ib3hJY29uLCBpbmJveExpbmspO1xuXG4gICAgY29uc3QgdG9kYXlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdG9kYXlJY29uLmNsYXNzTGlzdC5hZGQoJ3RvZGF5LWljb24nKTtcbiAgICB0b2RheUljb24uc3JjID0gdG9kYXlJbWc7XG5cbiAgICBjb25zdCB0b2RheUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgdG9kYXlMaW5rLmNsYXNzTGlzdC5hZGQoJ3RvZGF5LWxpbmsnKTtcbiAgICB0b2RheUxpbmsudGV4dENvbnRlbnQgPSAnVG9kYXknO1xuXG4gICAgLy8gYWRkIHRvIERPTVxuICAgIHRvZGF5RGl2LmFwcGVuZCh0b2RheUljb24sIHRvZGF5TGluayk7XG5cbiAgICBjb25zdCBjYWxlbmRhckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjYWxlbmRhckljb24uY2xhc3NMaXN0LmFkZCgnY2FsZW5kYXItaWNvbicpO1xuICAgIGNhbGVuZGFySWNvbi5zcmMgPSBjYWxlbmRhckltZztcblxuICAgIGNvbnN0IHNldmVuRGF5c0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgc2V2ZW5EYXlzTGluay5jbGFzc0xpc3QuYWRkKCdzZXZlbkRheXMtbGluaycpO1xuICAgIHNldmVuRGF5c0xpbmsudGV4dENvbnRlbnQgPSAnNyBEYXlzJztcblxuICAgIC8vIGFkZCB0byBET01cbiAgICBzZXZlbkRheXNEaXYuYXBwZW5kKGNhbGVuZGFySWNvbiwgc2V2ZW5EYXlzTGluayk7XG5cbiAgICBjb25zdCBpbXBvcnRhbnRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1wb3J0YW50SWNvbi5jbGFzc0xpc3QuYWRkKCdpbXAtaWNvbicpO1xuICAgIGltcG9ydGFudEljb24uc3JjID0gaW1wSW1nO1xuXG4gICAgY29uc3QgaW1wb3J0YW50TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBpbXBvcnRhbnRMaW5rLmNsYXNzTGlzdC5hZGQoJ2ltcC1saW5rJyk7XG4gICAgaW1wb3J0YW50TGluay50ZXh0Q29udGVudCA9ICdJbXBvcnRhbnQnO1xuXG4gICAgLy8gYWRkIHRvIERPTVxuICAgIGltcG9ydGFudERpdi5hcHBlbmQoaW1wb3J0YW50SWNvbiwgaW1wb3J0YW50TGluayk7XG5cbiAgICAvL2FkZCB0byBET01cbiAgICBzaWRlYmFyVG9wLmFwcGVuZChpbmJveERpdiwgdG9kYXlEaXYsIHNldmVuRGF5c0RpdiwgaW1wb3J0YW50RGl2KTtcblxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgbWFzdGVyQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAvLyAgICAgcHJvamVjdERpdi5pZCA9IGk7XG5cbiAgICAvLyAgICAgY29uc3QgbmFtZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgLy8gICAgIG5hbWVTcGFuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbmFtZScpO1xuICAgIC8vICAgICBuYW1lU3Bhbi50ZXh0Q29udGVudCA9IGAke21hc3RlckFycmF5W2ldWzBdfSBgICsgJ1Byb2plY3QnO1xuXG4gICAgLy8gICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAvLyAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWwtYnRuJyk7XG5cbiAgICAvLyAgICAgLy8gYWRkIHRvIERPTVxuICAgIC8vICAgICBwcm9qZWN0RGl2LmFwcGVuZChuYW1lU3BhbiwgZGVsZXRlUHJvamVjdEJ1dHRvbik7XG4gICAgLy8gICAgIHByb2plY3RBcnJheS5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgICAvLyB9XG5cbiAgICAvLyBjb25zdCBwcm9qZWN0T25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gcHJvamVjdE9uZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW9uZScpO1xuICAgIC8vIGNvbnN0IHByb2plY3RPbmVOYW1lU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAvLyBwcm9qZWN0T25lTmFtZVNwYW4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lJyk7XG4gICAgLy8gcHJvamVjdE9uZU5hbWVTcGFuLnRleHRDb250ZW50ID0gJ0RlZmF1bHQgUHJvamVjdCc7XG4gICAgLy8gY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIC8vIGRlbGV0ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsLWJ0bicpO1xuXG4gICAgLy8gLy8gYWRkIHRvIERPTVxuICAgIC8vIHByb2plY3RPbmUuYXBwZW5kKHByb2plY3RPbmVOYW1lU3BhbiwgZGVsZXRlUHJvamVjdEJ1dHRvbik7XG4gICAgLy8gcHJvamVjdEFycmF5LmFwcGVuZChwcm9qZWN0T25lKTtcblxuICAgIGNvbnN0IGFjdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFjdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdhY3Rpb24nKTtcblxuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC1wcm9qZWN0Jyk7XG5cbiAgICBjb25zdCBhY3Rpb25TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGFjdGlvblNwYW4uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvamVjdCcpO1xuICAgIGFjdGlvblNwYW4udGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnO1xuXG4gICAgY29uc3QgcHJvamVjdFBvcFVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHByb2plY3RQb3BVcC5hY3Rpb24gPSAnJztcbiAgICBwcm9qZWN0UG9wVXAubWV0aG9kID0gJyc7XG4gICAgcHJvamVjdFBvcFVwLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtcG9wLXVwJywgJ2hpZGRlbicpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2plY3ROYW1lSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICBwcm9qZWN0TmFtZUlucHV0LmlkID0gJ25hbWUnO1xuICAgIHByb2plY3ROYW1lSW5wdXQubmFtZSA9ICduYW1lJztcbiAgICBwcm9qZWN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gICAgY29uc3Qgc2F2ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzYXZlUHJvamVjdEJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgc2F2ZVByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnU2F2ZSc7XG4gICAgc2F2ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jaGFuZ2UnKTtcbiAgICBzYXZlUHJvamVjdEJ1dHRvbi5pZCA9ICdzYXZlLXByb2plY3QnO1xuICAgIGNvbnN0IGNhbmNlbFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxQcm9qZWN0QnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICBjYW5jZWxQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgY2FuY2VsUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXVuY2hhbmdlZCcpO1xuICAgIGNhbmNlbFByb2plY3RCdXR0b24uaWQgPSAnY2FuY2VsLXByb2plY3QnO1xuXG4gICAgLy8gYWRkIHRvIERPTVxuICAgIHByb2plY3RQb3BVcC5hcHBlbmQocHJvamVjdE5hbWVJbnB1dCwgc2F2ZVByb2plY3RCdXR0b24sIGNhbmNlbFByb2plY3RCdXR0b24pO1xuXG4gICAgLy8gYWRkIHRvIERPTVxuICAgIGFjdGlvbkRpdi5hcHBlbmQoYWRkUHJvamVjdEJ1dHRvbiwgYWN0aW9uU3BhbiwgcHJvamVjdFBvcFVwKTtcbiAgICBzaWRlYmFyQm90dG9tLmFwcGVuZChwcm9qZWN0QXJyYXksIGFjdGlvbkRpdik7XG59O1xuXG5leHBvcnQgeyBwcm9qZWN0QXJyYXksIHRhc2tDb250YWluZXIsIHBhZ2VMb2FkIH07IiwibGV0IGN1cnJlbnRQcm9qZWN0SW5kZXggPSAwO1xuXG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IFtcbiAgICAnRGVmYXVsdCcsXG4gICAge1xuICAgICAgICBzdGF0dXM6ICdpbmNvbXBsZXRlJyxcbiAgICAgICAgdGl0bGU6ICdCdXkgTWlsaycsXG4gICAgICAgIGR1ZURhdGU6ICcyMy8xMi8yMDIyJyxcbiAgICAgICAgcHJpb3JpdHk6ICdIJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBzdGF0dXM6ICdpbmNvbXBsZXRlJyxcbiAgICAgICAgdGl0bGU6ICdSZWNoYXJnZSBXaUZpJyxcbiAgICAgICAgZHVlRGF0ZTogJzEyLzEyLzIwMjInLFxuICAgICAgICBwcmlvcml0eTogJ0wnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHN0YXR1czogJ2luY29tcGxldGUnLFxuICAgICAgICB0aXRsZTogJ0V4ZXJjaXNlJyxcbiAgICAgICAgZHVlRGF0ZTogJzA3LzExLzIwMjInLFxuICAgICAgICBwcmlvcml0eTogJ0wnXG4gICAgfSxcbl07XG5cbmNvbnN0IG1hc3RlckFycmF5ID0gW2RlZmF1bHRQcm9qZWN0LF07XG5cbmV4cG9ydCB7IGN1cnJlbnRQcm9qZWN0SW5kZXgsIG1hc3RlckFycmF5IH07IiwiaW1wb3J0IHsgbWFzdGVyQXJyYXkgfSBmcm9tIFwiLi9tYXN0ZXItc3RydWN0dXJlLmpzXCI7XG5pbXBvcnQgeyBwcm9qZWN0QXJyYXkgfSBmcm9tIFwiLi9ob21lLmpzXCI7XG5cbmNvbnNvbGUubG9nKG1hc3RlckFycmF5KTtcbmNvbnN0IHByb2plY3RMb2FkID0gKCkgPT4ge1xuICAgIC8vIGNsZWFuIGRpdiBcbiAgICB3aGlsZSAocHJvamVjdEFycmF5Lmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgcHJvamVjdEFycmF5LnJlbW92ZUNoaWxkKHByb2plY3RBcnJheS5sYXN0RWxlbWVudENoaWxkKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hc3RlckFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgICAgIHByb2plY3REaXYuaWQgPSBpO1xuXG4gICAgICAgIGNvbnN0IG5hbWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBuYW1lU3Bhbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKTtcbiAgICAgICAgbmFtZVNwYW4udGV4dENvbnRlbnQgPSBgJHttYXN0ZXJBcnJheVtpXVswXX0gYCArICdQcm9qZWN0JztcblxuICAgICAgICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsLWJ0bicpO1xuXG4gICAgICAgIC8vIGFkZCB0byBET01cbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmQobmFtZVNwYW4sIGRlbGV0ZVByb2plY3RCdXR0b24pO1xuICAgICAgICBwcm9qZWN0QXJyYXkuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdExvYWQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9