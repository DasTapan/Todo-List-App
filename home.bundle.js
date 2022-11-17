"use strict";
(self["webpackChunktodo_list_app"] = self["webpackChunktodo_list_app"] || []).push([["home"],{

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Icons_inbox_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icons/inbox-icon.png */ "./src/Icons/inbox-icon.png");


const pageLoad = () => {
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');

    const headerElement = document.createElement('div');
    headerElement.classList.add('header');
    headerElement.textContent = 'Todo List App';

    const mainElement = document.createElement('div');
    mainElement.classList.add('main');

    const footerElement = document.createElement('div');
    footerElement.classList.add('footer');
    footerElement.textContent = 'DasTapan All Rights Reserved';

    // add to DOM
    document.body.appendChild(contentDiv);
    contentDiv.append(headerElement, mainElement, footerElement);

    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    const midsection = document.createElement('div');
    midsection.classList.add('midsection');

    // add to DOM
    mainElement.append(sidebar, midsection);

    const projectHeading = document.createElement('h1');
    projectHeading.classList.add('project-heading');
    projectHeading.textContent = 'Default Project';

    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');

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
    const todayLink = document.createElement('a');
    todayLink.classList.add('today-link');
    todayLink.textContent = 'Today';
    // add to DOM
    todayDiv.append(todayIcon, todayLink);

    const calendarIcon = document.createElement('img');
    calendarIcon.classList.add('calendar-icon');
    const sevenDaysLink = document.createElement('a');
    sevenDaysLink.classList.add('sevenDays-link');
    sevenDaysLink.textContent = '7 Days';
    // add to DOM
    sevenDaysDiv.append(calendarIcon, sevenDaysLink);

    const importantIcon = document.createElement('img');
    importantIcon.classList.add('imp-icon');
    const importantLink = document.createElement('a');
    importantLink.classList.add('imp-link');
    importantLink.textContent = 'Important';
    // add to DOM
    importantDiv.append(importantIcon, importantLink);

    //add to DOM
    sidebarTop.append(inboxDiv, todayDiv, sevenDaysDiv, importantDiv);

    const projectArray = document.createElement('div');
    projectArray.classList.add('project-array');
    projectArray.textContent = 'Default';

    const actionDiv = document.createElement('div');
    actionDiv.classList.add('action');
    actionDiv.textContent = 'Add Project';

    const addProjectButton = document.createElement('button');
    addProjectButton.classList.add('add-project');

    // add to DOM
    actionDiv.appendChild(addProjectButton);
    sidebarBottom.append(projectArray, actionDiv);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);

/***/ }),

/***/ "./src/Icons/inbox-icon.png":
/*!**********************************!*\
  !*** ./src/Icons/inbox-icon.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5cfa5aef2decbfc72439.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7O0FBRTlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGtEQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW5ib3hJbWcgZnJvbSAnLi9JY29ucy9pbmJveC1pY29uLnBuZyc7XG5cbmNvbnN0IHBhZ2VMb2FkID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50RGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGhlYWRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgIGhlYWRlckVsZW1lbnQudGV4dENvbnRlbnQgPSAnVG9kbyBMaXN0IEFwcCc7XG5cbiAgICBjb25zdCBtYWluRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcblxuICAgIGNvbnN0IGZvb3RlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuICAgIGZvb3RlckVsZW1lbnQudGV4dENvbnRlbnQgPSAnRGFzVGFwYW4gQWxsIFJpZ2h0cyBSZXNlcnZlZCc7XG5cbiAgICAvLyBhZGQgdG8gRE9NXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50RGl2KTtcbiAgICBjb250ZW50RGl2LmFwcGVuZChoZWFkZXJFbGVtZW50LCBtYWluRWxlbWVudCwgZm9vdGVyRWxlbWVudCk7XG5cbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XG5cbiAgICBjb25zdCBtaWRzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWlkc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdtaWRzZWN0aW9uJyk7XG5cbiAgICAvLyBhZGQgdG8gRE9NXG4gICAgbWFpbkVsZW1lbnQuYXBwZW5kKHNpZGViYXIsIG1pZHNlY3Rpb24pO1xuXG4gICAgY29uc3QgcHJvamVjdEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHByb2plY3RIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaGVhZGluZycpO1xuICAgIHByb2plY3RIZWFkaW5nLnRleHRDb250ZW50ID0gJ0RlZmF1bHQgUHJvamVjdCc7XG5cbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lcicpO1xuXG4gICAgLy9hZGQgdG8gRE9NXG4gICAgbWlkc2VjdGlvbi5hcHBlbmQocHJvamVjdEhlYWRpbmcsIHRhc2tDb250YWluZXIpO1xuXG4gICAgY29uc3Qgc2lkZWJhclRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXJUb3AuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci10b3AnKTtcblxuICAgIGNvbnN0IHNpZGViYXJCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFyQm90dG9tLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItYm90dG9tJyk7XG5cbiAgICAvLyBhZGQgdG8gRE9NXG4gICAgc2lkZWJhci5hcHBlbmQoc2lkZWJhclRvcCwgc2lkZWJhckJvdHRvbSk7XG5cbiAgICBjb25zdCBpbmJveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluYm94RGl2LmNsYXNzTGlzdC5hZGQoJ2luYm94Jyk7XG5cbiAgICBjb25zdCB0b2RheURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZGF5RGl2LmNsYXNzTGlzdC5hZGQoJ3RvZGF5Jyk7XG5cbiAgICBjb25zdCBzZXZlbkRheXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZXZlbkRheXNEaXYuY2xhc3NMaXN0LmFkZCgnc2V2ZW4tZGF5cycpO1xuXG4gICAgY29uc3QgaW1wb3J0YW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1wb3J0YW50RGl2LmNsYXNzTGlzdC5hZGQoJ2ltcG9ydGFudCcpO1xuXG4gICAgY29uc3QgaW5ib3hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW5ib3hJY29uLmNsYXNzTGlzdC5hZGQoJ2luYm94LWljb24nKTtcbiAgICBpbmJveEljb24uc3JjID0gaW5ib3hJbWc7XG4gICAgY29uc3QgaW5ib3hMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGluYm94TGluay5jbGFzc0xpc3QuYWRkKCdpbmJveC1saW5rJyk7XG4gICAgaW5ib3hMaW5rLnRleHRDb250ZW50ID0gJ0luYm94JztcbiAgICAvL2FkZCB0byBET01cbiAgICBpbmJveERpdi5hcHBlbmQoaW5ib3hJY29uLCBpbmJveExpbmspO1xuXG4gICAgY29uc3QgdG9kYXlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdG9kYXlJY29uLmNsYXNzTGlzdC5hZGQoJ3RvZGF5LWljb24nKTtcbiAgICBjb25zdCB0b2RheUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgdG9kYXlMaW5rLmNsYXNzTGlzdC5hZGQoJ3RvZGF5LWxpbmsnKTtcbiAgICB0b2RheUxpbmsudGV4dENvbnRlbnQgPSAnVG9kYXknO1xuICAgIC8vIGFkZCB0byBET01cbiAgICB0b2RheURpdi5hcHBlbmQodG9kYXlJY29uLCB0b2RheUxpbmspO1xuXG4gICAgY29uc3QgY2FsZW5kYXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY2FsZW5kYXJJY29uLmNsYXNzTGlzdC5hZGQoJ2NhbGVuZGFyLWljb24nKTtcbiAgICBjb25zdCBzZXZlbkRheXNMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHNldmVuRGF5c0xpbmsuY2xhc3NMaXN0LmFkZCgnc2V2ZW5EYXlzLWxpbmsnKTtcbiAgICBzZXZlbkRheXNMaW5rLnRleHRDb250ZW50ID0gJzcgRGF5cyc7XG4gICAgLy8gYWRkIHRvIERPTVxuICAgIHNldmVuRGF5c0Rpdi5hcHBlbmQoY2FsZW5kYXJJY29uLCBzZXZlbkRheXNMaW5rKTtcblxuICAgIGNvbnN0IGltcG9ydGFudEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbXBvcnRhbnRJY29uLmNsYXNzTGlzdC5hZGQoJ2ltcC1pY29uJyk7XG4gICAgY29uc3QgaW1wb3J0YW50TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBpbXBvcnRhbnRMaW5rLmNsYXNzTGlzdC5hZGQoJ2ltcC1saW5rJyk7XG4gICAgaW1wb3J0YW50TGluay50ZXh0Q29udGVudCA9ICdJbXBvcnRhbnQnO1xuICAgIC8vIGFkZCB0byBET01cbiAgICBpbXBvcnRhbnREaXYuYXBwZW5kKGltcG9ydGFudEljb24sIGltcG9ydGFudExpbmspO1xuXG4gICAgLy9hZGQgdG8gRE9NXG4gICAgc2lkZWJhclRvcC5hcHBlbmQoaW5ib3hEaXYsIHRvZGF5RGl2LCBzZXZlbkRheXNEaXYsIGltcG9ydGFudERpdik7XG5cbiAgICBjb25zdCBwcm9qZWN0QXJyYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0QXJyYXkuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1hcnJheScpO1xuICAgIHByb2plY3RBcnJheS50ZXh0Q29udGVudCA9ICdEZWZhdWx0JztcblxuICAgIGNvbnN0IGFjdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFjdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdhY3Rpb24nKTtcbiAgICBhY3Rpb25EaXYudGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLXByb2plY3QnKTtcblxuICAgIC8vIGFkZCB0byBET01cbiAgICBhY3Rpb25EaXYuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dHRvbik7XG4gICAgc2lkZWJhckJvdHRvbS5hcHBlbmQocHJvamVjdEFycmF5LCBhY3Rpb25EaXYpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGFnZUxvYWQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9