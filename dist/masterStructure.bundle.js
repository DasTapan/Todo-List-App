"use strict";
(self["webpackChunktodo_list_app"] = self["webpackChunktodo_list_app"] || []).push([["masterStructure"],{

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



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/master-structure.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzdGVyU3RydWN0dXJlLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbWFzdGVyLXN0cnVjdHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgX2N1cnJlbnRQcm9qZWN0SW5kZXggPSAwO1xuXG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IFsnRGVmYXVsdCcsXTtcblxuY29uc3QgbWFzdGVyQXJyYXkgPSBbZGVmYXVsdFByb2plY3QsXTtcblxuY29uc3QgX3NldFByb2plY3RJbmRleCA9IChuZXdJbmRleCkgPT4ge1xuICAgIF9jdXJyZW50UHJvamVjdEluZGV4ID0gbmV3SW5kZXg7XG59O1xuXG5jb25zdCB0b2dnbGVJbmRleCA9IChuZXdJbmRleCkgPT4ge1xuICAgIF9zZXRQcm9qZWN0SW5kZXgobmV3SW5kZXgpO1xufTtcblxuY29uc3QgZ2V0Q3VycmVudEluZGV4ID0gKCkgPT4ge1xuICAgIHJldHVybiBfY3VycmVudFByb2plY3RJbmRleDtcbn07XG5cbmV4cG9ydCB7IHRvZ2dsZUluZGV4LCBnZXRDdXJyZW50SW5kZXgsIG1hc3RlckFycmF5IH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9