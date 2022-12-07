"use strict";
(self["webpackChunktodo_list_app"] = self["webpackChunktodo_list_app"] || []).push([["storage"],{

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

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _master_structure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./master-structure.js */ "./src/master-structure.js");


const defaultProject = ['Default',];

const _retrieveData = () => {
    let savedJson = localStorage.getItem('masterArray');
    let savedMasterArray = JSON.parse(savedJson);
    _master_structure_js__WEBPACK_IMPORTED_MODULE_0__.masterArray.length = 0;
    _master_structure_js__WEBPACK_IMPORTED_MODULE_0__.masterArray.push(...savedMasterArray);
};

if (!localStorage.getItem('masterArray')) {
    //populate with this if nothing is stored in localStorage
    _master_structure_js__WEBPACK_IMPORTED_MODULE_0__.masterArray.length = 0;
    _master_structure_js__WEBPACK_IMPORTED_MODULE_0__.masterArray[0] = defaultProject;
} else {
    _retrieveData();
}

const storeData = () => {
    localStorage.removeItem('masterArray');
    localStorage.setItem('masterArray', JSON.stringify(_master_structure_js__WEBPACK_IMPORTED_MODULE_0__.masterArray));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storeData);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/storage.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJvRDs7QUFFcEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvRUFBa0I7QUFDdEIsSUFBSSxrRUFBZ0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBLElBQUksb0VBQWtCO0FBQ3RCLElBQUksZ0VBQWM7QUFDbEIsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCw2REFBVztBQUNsRTs7QUFFQSxpRUFBZSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tYXN0ZXItc3RydWN0dXJlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvc3RvcmFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgX2N1cnJlbnRQcm9qZWN0SW5kZXggPSAwO1xuXG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IFsnRGVmYXVsdCcsXTtcblxuY29uc3QgbWFzdGVyQXJyYXkgPSBbZGVmYXVsdFByb2plY3QsXTtcblxuY29uc3QgX3NldFByb2plY3RJbmRleCA9IChuZXdJbmRleCkgPT4ge1xuICAgIF9jdXJyZW50UHJvamVjdEluZGV4ID0gbmV3SW5kZXg7XG59O1xuXG5jb25zdCB0b2dnbGVJbmRleCA9IChuZXdJbmRleCkgPT4ge1xuICAgIF9zZXRQcm9qZWN0SW5kZXgobmV3SW5kZXgpO1xufTtcblxuY29uc3QgZ2V0Q3VycmVudEluZGV4ID0gKCkgPT4ge1xuICAgIHJldHVybiBfY3VycmVudFByb2plY3RJbmRleDtcbn07XG5cbmV4cG9ydCB7IHRvZ2dsZUluZGV4LCBnZXRDdXJyZW50SW5kZXgsIG1hc3RlckFycmF5IH07IiwiaW1wb3J0IHsgbWFzdGVyQXJyYXkgfSBmcm9tIFwiLi9tYXN0ZXItc3RydWN0dXJlLmpzXCI7XG5cbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gWydEZWZhdWx0JyxdO1xuXG5jb25zdCBfcmV0cmlldmVEYXRhID0gKCkgPT4ge1xuICAgIGxldCBzYXZlZEpzb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbWFzdGVyQXJyYXknKTtcbiAgICBsZXQgc2F2ZWRNYXN0ZXJBcnJheSA9IEpTT04ucGFyc2Uoc2F2ZWRKc29uKTtcbiAgICBtYXN0ZXJBcnJheS5sZW5ndGggPSAwO1xuICAgIG1hc3RlckFycmF5LnB1c2goLi4uc2F2ZWRNYXN0ZXJBcnJheSk7XG59O1xuXG5pZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtYXN0ZXJBcnJheScpKSB7XG4gICAgLy9wb3B1bGF0ZSB3aXRoIHRoaXMgaWYgbm90aGluZyBpcyBzdG9yZWQgaW4gbG9jYWxTdG9yYWdlXG4gICAgbWFzdGVyQXJyYXkubGVuZ3RoID0gMDtcbiAgICBtYXN0ZXJBcnJheVswXSA9IGRlZmF1bHRQcm9qZWN0O1xufSBlbHNlIHtcbiAgICBfcmV0cmlldmVEYXRhKCk7XG59XG5cbmNvbnN0IHN0b3JlRGF0YSA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbWFzdGVyQXJyYXknKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbWFzdGVyQXJyYXknLCBKU09OLnN0cmluZ2lmeShtYXN0ZXJBcnJheSkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmVEYXRhOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==