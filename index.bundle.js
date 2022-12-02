"use strict";
(self["webpackChunktodo_list_app"] = self["webpackChunktodo_list_app"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Icons/delete-icon.png */ "./src/Icons/delete-icon.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Icons/new-task.png */ "./src/Icons/new-task.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./Icons/add-icon.png */ "./src/Icons/add-icon.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./Icons/remove-icon.png */ "./src/Icons/remove-icon.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* UA style reset begins */\n\n*,\n::before,\n::after {\n    box-sizing: border-box;\n}\n\nhtml {\n    cursor: default;\n}\n\n/* FORM reset starts */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    font-family: inherit;\n    /* 1 */\n    font-size: 100%;\n    /* 1 */\n    line-height: 1.15;\n    /* 1 */\n    margin: 0;\n    /* 2 */\n}\n\n/**\n * 1. Show the overflow in IE.\n * 2. Remove the inheritance of text transform in Edge 18-, Firefox, and IE.\n */\n\nbutton {\n    overflow: visible;\n    /* 1 */\n    text-transform: none;\n    /* 2 */\n\n    padding: 0;\n}\n\n/**\n * Remove the inheritance of text transform in Firefox.\n */\n\nselect {\n    text-transform: none;\n}\n\n/**\n * 1. Remove the margin in Firefox and Safari.\n * 2. Remove the default vertical scrollbar in IE.\n * 3. Change the resize direction in all browsers (opinionated).\n */\n\ntextarea {\n    margin: 0;\n    /* 1 */\n    overflow: auto;\n    /* 2 */\n    resize: vertical;\n    /* 3 */\n}\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n\n::-webkit-input-placeholder {\n    color: inherit;\n    opacity: 0.54;\n}\n\n/**\n * Remove the inner border and padding of focus outlines in Firefox.\n */\n\n::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n}\n\n/**\n * Restore the focus outline styles unset by the previous rule in Firefox.\n */\n\n:-moz-focusring {\n    outline: 1px dotted ButtonText;\n}\n\n/**\n * Remove the additional :invalid styles in Firefox.\n */\n\n:-moz-ui-invalid {\n    box-shadow: none;\n}\n\n/* FORM reset ends */\n\nbody {\n    margin: 0;\n}\n\nh1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n}\n\nb,\nstrong {\n    font-weight: bolder;\n}\n\n/* UA style reset ends */\n\n/* My style begins */\n\nhtml {\n    --scrollbarBG: rgba(8, 217, 214, 0.65);\n    --thumbBG: rgb(37, 42, 52);\n}\n\nhtml,\nbody {\n    height: 100%;\n}\n\nbody {\n    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Ubuntu, 'Open Sans', sans-serif;\n    font-size: 16px;\n    color: whitesmoke;\n}\n\na:hover,\nbutton:hover {\n    cursor: pointer;\n}\n\n.content {\n    height: 100%;\n    background-color: #F8FAF0;\n    --header-height: 50px;\n    --footer-height: 30px;\n}\n\n.header {\n    height: var(--header-height);\n    line-height: var(--header-height);\n    font-weight: bold;\n\n    /* background-color: #6A2C70; */\n    background-color: #FCDEC0;\n    color: whitesmoke;\n}\n\n.main {\n    height: calc(100% - (var(--header-height) + var(--footer-height)));\n    display: flex;\n}\n\n/* set min & max sidebar width */\n.main>div {\n    flex-basis: auto;\n}\n\n.main .sidebar {\n    width: clamp(210px, 25vw, 18.9rem);\n    flex-shrink: 0;\n    border-right: 1px solid #404258;\n    background-color: #E5B299;\n    color: #070B04;\n}\n\n.sidebar-top {\n    padding: 20px;\n    height: 30%;\n    font-size: 1rem;\n}\n\n.sidebar-top>div {\n    margin-bottom: 15px;\n    display: flex;\n    padding: 2px;\n}\n\n.sidebar-top>div a {\n    margin-top: 2px;\n}\n\n.sidebar-top>div:hover {\n    background-color: rgb(144 229 72 / 38%);\n}\n\n.sidebar-top img {\n    width: 24px;\n    height: 24px;\n\n    margin-right: 8px;\n}\n\n.sidebar-bottom {\n    padding: 20px;\n    height: 70%;\n    font-size: 1.25rem;\n    font-weight: bold;\n}\n\n.sidebar-bottom .project-array {\n    /* background-color: red; */\n}\n\n.project-array>div {\n    /* background-color: chartreuse; */\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 15px;\n}\n\n.project-array>div button {\n    border: none;\n    border-radius: 50%;\n    width: 25px;\n    height: 25px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n}\n\n.sidebar .action {\n    text-align: center;\n}\n\n.main .midsection {\n    overflow: auto;\n    flex-grow: 1;\n\n    /* background-color: #F9ED69; */\n    background-color: #7D5A50;\n}\n\n.footer {\n    height: var(--footer-height);\n    line-height: var(--footer-height);\n\n    /* background-color: #6A2C70; */\n    background-color: #FCDEC0;\n    color: red;\n    font-size: 0.85rem;\n}\n\n.header,\n.footer {\n    text-align: center;\n}\n\n.project-heading {\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.project-heading span:first-child {\n    font-size: 1.3rem;\n    font-weight: bold;\n    margin-right: 25px;\n}\n\n.project-heading span:nth-child(2) {\n    margin-right: 15px;\n}\n\n.project-heading>button {\n    width: 28px;\n    height: 28px;\n    border-radius: 50%;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.task-container {\n    width: max(700px, 78%);\n    height: 500px;\n    border-radius: 15px;\n    padding: 15px;\n\n    margin: 0 auto;\n    /* background-color: #F08A5D; */\n    background-color: #B4846C;\n    overflow: auto;\n}\n\nbutton.add-project {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    display: block;\n\n    height: 51px;\n    width: 52px;\n    margin: 0 auto 5px;\n    border-radius: 50%;\n}\n\n.hidden {\n    display: none;\n}\n\n.task-div {\n    margin-bottom: 20px;\n    font-weight: bold;\n}\n\n.task-div input[type='checkbox']:hover {\n    cursor: pointer;\n}\n\n.task-container .task-div:nth-child(1),\n.task-container .task-div:nth-child(5) {\n    /* color: #00008b; */\n    /* color: #494CA2; */\n    color: #CF0A0A;\n}\n\n.task-container .task-div:nth-child(3) {\n    color: #F0FF42;\n}\n\n.brief-info {\n    height: 50px;\n    /* background-color: #F3E1E1; */\n    /* background-color: #EDDFB3; */\n    padding: 5px;\n    border-radius: 10px;\n}\n\n.brief-info:hover {\n    background-color: rgba(252, 222, 192, .35);\n}\n\n.brief-layout {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.raw-info {\n    height: 180px;\n    width: 60%;\n    margin: 0 auto 20px;\n\n    border: 1px solid #D6D9DC;\n    border-radius: 10px;\n    background-color: #F6F7F8;\n    padding: 10px;\n}\n\n/* edit form style begins */\nform.edit-details {\n    color: black;\n    height: 100%;\n}\n\nform.edit-details .form-row {\n    display: flex;\n    align-items: flex-start;\n    margin-bottom: 18px;\n}\n\nform.edit-details .form-row:nth-child(3) {\n    justify-content: center;\n}\n\nform.edit-details .form-row input[type='text'] {\n    background-color: #FFFFFF;\n    border: 1px solid #D6D9DC;\n    border-radius: 3px;\n    font-size: 14px;\n}\n\nform.edit-details .form-row label {\n    width: 68px;\n    text-align: right;\n    margin-right: 5px;\n}\n\nform.edit-details textarea {\n    width: 42%;\n    min-height: 60px;\n    resize: none;\n\n    border: 1px solid #D6D9DC;\n    border-radius: 3px;\n    margin-right: 20px;\n    font-size: 0.8rem;\n}\n\n#save-edit {\n    margin-right: 15px;\n    background-color: green;\n}\n\n#cancel-edit {\n    background-color: red;\n}\n\n#save-edit,\n#cancel-edit {\n    font-weight: bold;\n    color: whitesmoke;\n    padding: 4px 8px;\n    border-radius: 3px;\n}\n\n/* edit form style ends */\n\n/* project add form */\n#add-project {\n    margin-bottom: 10px;\n}\n\nform.project-pop-up {\n    background-color: #070b04e8;\n    padding: 5px;\n    border-radius: 10px;\n}\n\n.project-pop-up>input[type='text'] {\n    width: 95%;\n    height: 25px;\n    border-radius: 3px;\n    border: 1px solid #D6D9DC;\n\n    background-color: #FFFFFF;\n    font-size: 14px;\n    font-weight: bold;\n    margin-bottom: 10px;\n}\n\n#save-project {\n    margin-right: 10px;\n    margin-bottom: 5px;\n    background-color: #af7fffad;\n}\n\n#cancel-project {\n    background-color: #ef4848d4;\n}\n\n#save-project,\n#cancel-project {\n    font-weight: bold;\n    padding: 4px 8px;\n    border-radius: 3px;\n    color: #fde7e7;\n}\n\n/* project add form */\n\n/* task form begins */\n.task-form {\n    z-index: 1;\n    width: 300px;\n    padding: 10px;\n\n    background-color: #F6F7F8;\n    color: black;\n    border: 1px solid #D6D9DC;\n    border-radius: 10px;\n\n    position: absolute;\n    top: 60px;\n}\n\n.task-form .form-row {\n    display: flex;\n    align-items: flex-start;\n    margin-bottom: 10px;\n}\n\n.task-form label {\n    width: 70px;\n    margin-right: 5px;\n    text-align: right;\n}\n\n.task-form .form-row>input[type='text'] {\n    width: 65%;\n    height: 25px;\n    background-color: #FFFFFF;\n    border: 1px solid #D6D9DC;\n    border-radius: 3px;\n    font-size: 14px;\n}\n\n.task-form textarea {\n    width: 65%;\n    height: 100px;\n    min-height: 60px;\n    resize: none;\n\n    border: 1px solid #D6D9DC;\n    border-radius: 3px;\n}\n\n.task-form .form-row:last-child {\n    justify-content: center;\n}\n\n.task-form button {\n    padding: 4px 8px;\n    border-radius: 5px;\n}\n\n.task-form .form-row:last-child button:first-child {\n    margin-right: 10px;\n    background-color: green;\n    color: white;\n}\n\n.task-form .form-row:last-child button:last-child {\n    background-color: red;\n    color: white;\n}\n\n/* task form ends */\n\n/* Scrollbar style begins */\n.task-container::-webkit-scrollbar {\n    width: 8.5px;\n}\n\n.task-container {\n    scrollbar-width: thin;\n    scrollbar-color: var(--thumbBG) var(--scrollbarBG);\n}\n\n.task-container::-webkit-scrollbar-track {\n    background: var(--scrollbarBG);\n}\n\n.task-container::-webkit-scrollbar-thumb {\n    background-color: var(--thumbBG);\n    border-radius: 6px;\n    border: 3px solid var(--scrollbarBG);\n}\n\nbutton.delete-button {\n    height: 40px;\n    width: 40px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n\n    background-color: transparent;\n    background-size: contain;\n    border: 0;\n}\n\nspan.task-title:hover {\n    cursor: pointer;\n}\n\n.project span:hover {\n    cursor: pointer;\n}\n\n/* Scrollbar style ends */\n\n/* My style ends */", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* UA style reset begins */\n\n*,\n::before,\n::after {\n    box-sizing: border-box;\n}\n\nhtml {\n    cursor: default;\n}\n\n/* FORM reset starts */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    font-family: inherit;\n    /* 1 */\n    font-size: 100%;\n    /* 1 */\n    line-height: 1.15;\n    /* 1 */\n    margin: 0;\n    /* 2 */\n}\n\n/**\n * 1. Show the overflow in IE.\n * 2. Remove the inheritance of text transform in Edge 18-, Firefox, and IE.\n */\n\nbutton {\n    overflow: visible;\n    /* 1 */\n    text-transform: none;\n    /* 2 */\n\n    padding: 0;\n}\n\n/**\n * Remove the inheritance of text transform in Firefox.\n */\n\nselect {\n    text-transform: none;\n}\n\n/**\n * 1. Remove the margin in Firefox and Safari.\n * 2. Remove the default vertical scrollbar in IE.\n * 3. Change the resize direction in all browsers (opinionated).\n */\n\ntextarea {\n    margin: 0;\n    /* 1 */\n    overflow: auto;\n    /* 2 */\n    resize: vertical;\n    /* 3 */\n}\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n\n::-webkit-input-placeholder {\n    color: inherit;\n    opacity: 0.54;\n}\n\n/**\n * Remove the inner border and padding of focus outlines in Firefox.\n */\n\n::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n}\n\n/**\n * Restore the focus outline styles unset by the previous rule in Firefox.\n */\n\n:-moz-focusring {\n    outline: 1px dotted ButtonText;\n}\n\n/**\n * Remove the additional :invalid styles in Firefox.\n */\n\n:-moz-ui-invalid {\n    box-shadow: none;\n}\n\n/* FORM reset ends */\n\nbody {\n    margin: 0;\n}\n\nh1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n}\n\nb,\nstrong {\n    font-weight: bolder;\n}\n\n/* UA style reset ends */\n\n/* My style begins */\n\nhtml {\n    --scrollbarBG: rgba(8, 217, 214, 0.65);\n    --thumbBG: rgb(37, 42, 52);\n}\n\nhtml,\nbody {\n    height: 100%;\n}\n\nbody {\n    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Ubuntu, 'Open Sans', sans-serif;\n    font-size: 16px;\n    color: whitesmoke;\n}\n\na:hover,\nbutton:hover {\n    cursor: pointer;\n}\n\n.content {\n    height: 100%;\n    background-color: #F8FAF0;\n    --header-height: 50px;\n    --footer-height: 30px;\n}\n\n.header {\n    height: var(--header-height);\n    line-height: var(--header-height);\n    font-weight: bold;\n\n    /* background-color: #6A2C70; */\n    background-color: #FCDEC0;\n    color: whitesmoke;\n}\n\n.main {\n    height: calc(100% - (var(--header-height) + var(--footer-height)));\n    display: flex;\n}\n\n/* set min & max sidebar width */\n.main>div {\n    flex-basis: auto;\n}\n\n.main .sidebar {\n    width: clamp(210px, 25vw, 18.9rem);\n    flex-shrink: 0;\n    border-right: 1px solid #404258;\n    background-color: #E5B299;\n    color: #070B04;\n}\n\n.sidebar-top {\n    padding: 20px;\n    height: 30%;\n    font-size: 1rem;\n}\n\n.sidebar-top>div {\n    margin-bottom: 15px;\n    display: flex;\n    padding: 2px;\n}\n\n.sidebar-top>div a {\n    margin-top: 2px;\n}\n\n.sidebar-top>div:hover {\n    background-color: rgb(144 229 72 / 38%);\n}\n\n.sidebar-top img {\n    width: 24px;\n    height: 24px;\n\n    margin-right: 8px;\n}\n\n.sidebar-bottom {\n    padding: 20px;\n    height: 70%;\n    font-size: 1.25rem;\n    font-weight: bold;\n}\n\n.sidebar-bottom .project-array {\n    /* background-color: red; */\n}\n\n.project-array>div {\n    /* background-color: chartreuse; */\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 15px;\n}\n\n.project-array>div button {\n    border: none;\n    border-radius: 50%;\n    width: 25px;\n    height: 25px;\n    background-image: url('./Icons/delete-icon.png');\n    background-size: cover;\n}\n\n.sidebar .action {\n    text-align: center;\n}\n\n.main .midsection {\n    overflow: auto;\n    flex-grow: 1;\n\n    /* background-color: #F9ED69; */\n    background-color: #7D5A50;\n}\n\n.footer {\n    height: var(--footer-height);\n    line-height: var(--footer-height);\n\n    /* background-color: #6A2C70; */\n    background-color: #FCDEC0;\n    color: red;\n    font-size: 0.85rem;\n}\n\n.header,\n.footer {\n    text-align: center;\n}\n\n.project-heading {\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.project-heading span:first-child {\n    font-size: 1.3rem;\n    font-weight: bold;\n    margin-right: 25px;\n}\n\n.project-heading span:nth-child(2) {\n    margin-right: 15px;\n}\n\n.project-heading>button {\n    width: 28px;\n    height: 28px;\n    border-radius: 50%;\n    background-image: url('./Icons/new-task.png');\n}\n\n.task-container {\n    width: max(700px, 78%);\n    height: 500px;\n    border-radius: 15px;\n    padding: 15px;\n\n    margin: 0 auto;\n    /* background-color: #F08A5D; */\n    background-color: #B4846C;\n    overflow: auto;\n}\n\nbutton.add-project {\n    background-image: url('./Icons/add-icon.png');\n    display: block;\n\n    height: 51px;\n    width: 52px;\n    margin: 0 auto 5px;\n    border-radius: 50%;\n}\n\n.hidden {\n    display: none;\n}\n\n.task-div {\n    margin-bottom: 20px;\n    font-weight: bold;\n}\n\n.task-div input[type='checkbox']:hover {\n    cursor: pointer;\n}\n\n.task-container .task-div:nth-child(1),\n.task-container .task-div:nth-child(5) {\n    /* color: #00008b; */\n    /* color: #494CA2; */\n    color: #CF0A0A;\n}\n\n.task-container .task-div:nth-child(3) {\n    color: #F0FF42;\n}\n\n.brief-info {\n    height: 50px;\n    /* background-color: #F3E1E1; */\n    /* background-color: #EDDFB3; */\n    padding: 5px;\n    border-radius: 10px;\n}\n\n.brief-info:hover {\n    background-color: rgba(252, 222, 192, .35);\n}\n\n.brief-layout {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.raw-info {\n    height: 180px;\n    width: 60%;\n    margin: 0 auto 20px;\n\n    border: 1px solid #D6D9DC;\n    border-radius: 10px;\n    background-color: #F6F7F8;\n    padding: 10px;\n}\n\n/* edit form style begins */\nform.edit-details {\n    color: black;\n    height: 100%;\n}\n\nform.edit-details .form-row {\n    display: flex;\n    align-items: flex-start;\n    margin-bottom: 18px;\n}\n\nform.edit-details .form-row:nth-child(3) {\n    justify-content: center;\n}\n\nform.edit-details .form-row input[type='text'] {\n    background-color: #FFFFFF;\n    border: 1px solid #D6D9DC;\n    border-radius: 3px;\n    font-size: 14px;\n}\n\nform.edit-details .form-row label {\n    width: 68px;\n    text-align: right;\n    margin-right: 5px;\n}\n\nform.edit-details textarea {\n    width: 42%;\n    min-height: 60px;\n    resize: none;\n\n    border: 1px solid #D6D9DC;\n    border-radius: 3px;\n    margin-right: 20px;\n    font-size: 0.8rem;\n}\n\n#save-edit {\n    margin-right: 15px;\n    background-color: green;\n}\n\n#cancel-edit {\n    background-color: red;\n}\n\n#save-edit,\n#cancel-edit {\n    font-weight: bold;\n    color: whitesmoke;\n    padding: 4px 8px;\n    border-radius: 3px;\n}\n\n/* edit form style ends */\n\n/* project add form */\n#add-project {\n    margin-bottom: 10px;\n}\n\nform.project-pop-up {\n    background-color: #070b04e8;\n    padding: 5px;\n    border-radius: 10px;\n}\n\n.project-pop-up>input[type='text'] {\n    width: 95%;\n    height: 25px;\n    border-radius: 3px;\n    border: 1px solid #D6D9DC;\n\n    background-color: #FFFFFF;\n    font-size: 14px;\n    font-weight: bold;\n    margin-bottom: 10px;\n}\n\n#save-project {\n    margin-right: 10px;\n    margin-bottom: 5px;\n    background-color: #af7fffad;\n}\n\n#cancel-project {\n    background-color: #ef4848d4;\n}\n\n#save-project,\n#cancel-project {\n    font-weight: bold;\n    padding: 4px 8px;\n    border-radius: 3px;\n    color: #fde7e7;\n}\n\n/* project add form */\n\n/* task form begins */\n.task-form {\n    z-index: 1;\n    width: 300px;\n    padding: 10px;\n\n    background-color: #F6F7F8;\n    color: black;\n    border: 1px solid #D6D9DC;\n    border-radius: 10px;\n\n    position: absolute;\n    top: 60px;\n}\n\n.task-form .form-row {\n    display: flex;\n    align-items: flex-start;\n    margin-bottom: 10px;\n}\n\n.task-form label {\n    width: 70px;\n    margin-right: 5px;\n    text-align: right;\n}\n\n.task-form .form-row>input[type='text'] {\n    width: 65%;\n    height: 25px;\n    background-color: #FFFFFF;\n    border: 1px solid #D6D9DC;\n    border-radius: 3px;\n    font-size: 14px;\n}\n\n.task-form textarea {\n    width: 65%;\n    height: 100px;\n    min-height: 60px;\n    resize: none;\n\n    border: 1px solid #D6D9DC;\n    border-radius: 3px;\n}\n\n.task-form .form-row:last-child {\n    justify-content: center;\n}\n\n.task-form button {\n    padding: 4px 8px;\n    border-radius: 5px;\n}\n\n.task-form .form-row:last-child button:first-child {\n    margin-right: 10px;\n    background-color: green;\n    color: white;\n}\n\n.task-form .form-row:last-child button:last-child {\n    background-color: red;\n    color: white;\n}\n\n/* task form ends */\n\n/* Scrollbar style begins */\n.task-container::-webkit-scrollbar {\n    width: 8.5px;\n}\n\n.task-container {\n    scrollbar-width: thin;\n    scrollbar-color: var(--thumbBG) var(--scrollbarBG);\n}\n\n.task-container::-webkit-scrollbar-track {\n    background: var(--scrollbarBG);\n}\n\n.task-container::-webkit-scrollbar-thumb {\n    background-color: var(--thumbBG);\n    border-radius: 6px;\n    border: 3px solid var(--scrollbarBG);\n}\n\nbutton.delete-button {\n    height: 40px;\n    width: 40px;\n    background-image: url('./Icons/remove-icon.png');\n\n    background-color: transparent;\n    background-size: contain;\n    border: 0;\n}\n\nspan.task-title:hover {\n    cursor: pointer;\n}\n\n.project span:hover {\n    cursor: pointer;\n}\n\n/* Scrollbar style ends */\n\n/* My style ends */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logic.js */ "./src/logic.js");
/* harmony import */ var _master_structure_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./master-structure.js */ "./src/master-structure.js");







(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.pageLoad)();
(0,_project_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_task_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_master_structure_js__WEBPACK_IMPORTED_MODULE_5__.masterArray[0]);

document.addEventListener('click', (event) => {
    (0,_logic_js__WEBPACK_IMPORTED_MODULE_4__["default"])(event).handleToggle();
});

document.addEventListener('submit', (event) => {
    (0,_logic_js__WEBPACK_IMPORTED_MODULE_4__["default"])(event).handleSubmission();
});

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

/***/ "./src/Icons/add-icon.png":
/*!********************************!*\
  !*** ./src/Icons/add-icon.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c8befcaf6362a6e7583e.png";

/***/ }),

/***/ "./src/Icons/calendar-icon.png":
/*!*************************************!*\
  !*** ./src/Icons/calendar-icon.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ae291621799134cb0430.png";

/***/ }),

/***/ "./src/Icons/delete-icon.png":
/*!***********************************!*\
  !*** ./src/Icons/delete-icon.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e3af434513d0e9e078e5.png";

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

/***/ "./src/Icons/new-task.png":
/*!********************************!*\
  !*** ./src/Icons/new-task.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2e30726cbf3535ceb411.png";

/***/ }),

/***/ "./src/Icons/remove-icon.png":
/*!***********************************!*\
  !*** ./src/Icons/remove-icon.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d1c14af22db18367c6f0.png";

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksY0FBYyxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksWUFBWSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFlBQVksVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sYUFBYSxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFB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QUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZjhDO0FBQ007QUFDSjtBQUNGO0FBQzlDO0FBQ3dFOztBQUV4RTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsNkRBQVcsQ0FBQyxxRUFBbUI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JB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QUFDLG9FQUE4QjtBQUNoRTs7QUFFQSxvQkFBb0IsMkJBQTJCO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSwwREFBb0I7QUFDNUI7O0FBRUE7O0FBRUEsaUVBQWUsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21hc3Rlci1zdHJ1Y3R1cmUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdGFzay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9JY29ucy9kZWxldGUtaWNvbi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL0ljb25zL25ldy10YXNrLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vSWNvbnMvYWRkLWljb24ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9JY29ucy9yZW1vdmUtaWNvbi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBVQSBzdHlsZSByZXNldCBiZWdpbnMgKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKiBGT1JNIHJlc2V0IHN0YXJ0cyAqL1xcblxcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICAvKiAxICovXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgICAvKiAxICovXFxuICAgIG1hcmdpbjogMDtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAyLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UgMTgtLCBGaXJlZm94LCBhbmQgSUUuXFxuICovXFxuXFxuYnV0dG9uIHtcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAgIC8qIDEgKi9cXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICAgIC8qIDIgKi9cXG5cXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbnNlbGVjdCB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICogMi4gUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRS5cXG4gKiAzLiBDaGFuZ2UgdGhlIHJlc2l6ZSBkaXJlY3Rpb24gaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIC8qIDEgKi9cXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIC8qIDIgKi9cXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcXG4gICAgLyogMyAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSB0ZXh0IHN0eWxlIG9mIHBsYWNlaG9sZGVycyBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIG9wYWNpdHk6IDAuNTQ7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIG9mIGZvY3VzIG91dGxpbmVzIGluIEZpcmVmb3guXFxuICovXFxuXFxuOjotbW96LWZvY3VzLWlubmVyIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBvdXRsaW5lIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbjotbW96LWZvY3VzcmluZyB7XFxuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIDppbnZhbGlkIHN0eWxlcyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbjotbW96LXVpLWludmFsaWQge1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4vKiBGT1JNIHJlc2V0IGVuZHMgKi9cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qIFVBIHN0eWxlIHJlc2V0IGVuZHMgKi9cXG5cXG4vKiBNeSBzdHlsZSBiZWdpbnMgKi9cXG5cXG5odG1sIHtcXG4gICAgLS1zY3JvbGxiYXJCRzogcmdiYSg4LCAyMTcsIDIxNCwgMC42NSk7XFxuICAgIC0tdGh1bWJCRzogcmdiKDM3LCA0MiwgNTIpO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCAnU2Vnb2UgVUknLCBSb2JvdG8sIFVidW50dSwgJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbmE6aG92ZXIsXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RkFGMDtcXG4gICAgLS1oZWFkZXItaGVpZ2h0OiA1MHB4O1xcbiAgICAtLWZvb3Rlci1oZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcbiAgICBsaW5lLWhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNkEyQzcwOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNERUMwO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICh2YXIoLS1oZWFkZXItaGVpZ2h0KSArIHZhcigtLWZvb3Rlci1oZWlnaHQpKSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi8qIHNldCBtaW4gJiBtYXggc2lkZWJhciB3aWR0aCAqL1xcbi5tYWluPmRpdiB7XFxuICAgIGZsZXgtYmFzaXM6IGF1dG87XFxufVxcblxcbi5tYWluIC5zaWRlYmFyIHtcXG4gICAgd2lkdGg6IGNsYW1wKDIxMHB4LCAyNXZ3LCAxOC45cmVtKTtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM0MDQyNTg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNUIyOTk7XFxuICAgIGNvbG9yOiAjMDcwQjA0O1xcbn1cXG5cXG4uc2lkZWJhci10b3Age1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDMwJTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uc2lkZWJhci10b3A+ZGl2IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMnB4O1xcbn1cXG5cXG4uc2lkZWJhci10b3A+ZGl2IGEge1xcbiAgICBtYXJnaW4tdG9wOiAycHg7XFxufVxcblxcbi5zaWRlYmFyLXRvcD5kaXY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ0IDIyOSA3MiAvIDM4JSk7XFxufVxcblxcbi5zaWRlYmFyLXRvcCBpbWcge1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcblxcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcXG59XFxuXFxuLnNpZGViYXItYm90dG9tIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgaGVpZ2h0OiA3MCU7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5zaWRlYmFyLWJvdHRvbSAucHJvamVjdC1hcnJheSB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cXG59XFxuXFxuLnByb2plY3QtYXJyYXk+ZGl2IHtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogY2hhcnRyZXVzZTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1hcnJheT5kaXYgYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5zaWRlYmFyIC5hY3Rpb24ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tYWluIC5taWRzZWN0aW9uIHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGZsZXgtZ3JvdzogMTtcXG5cXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI0Y5RUQ2OTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdENUE1MDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIGhlaWdodDogdmFyKC0tZm9vdGVyLWhlaWdodCk7XFxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcXG5cXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzZBMkM3MDsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZDREVDMDtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xcbn1cXG5cXG4uaGVhZGVyLFxcbi5mb290ZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRpbmcge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkaW5nIHNwYW46Zmlyc3QtY2hpbGQge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcXG59XFxuXFxuLnByb2plY3QtaGVhZGluZyBzcGFuOm50aC1jaGlsZCgyKSB7XFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXG59XFxuXFxuLnByb2plY3QtaGVhZGluZz5idXR0b24ge1xcbiAgICB3aWR0aDogMjhweDtcXG4gICAgaGVpZ2h0OiAyOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiBtYXgoNzAwcHgsIDc4JSk7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjRjA4QTVEOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjQ4NDZDO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuYnV0dG9uLmFkZC1wcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuXFxuICAgIGhlaWdodDogNTFweDtcXG4gICAgd2lkdGg6IDUycHg7XFxuICAgIG1hcmdpbjogMCBhdXRvIDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhc2stZGl2IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi50YXNrLWRpdiBpbnB1dFt0eXBlPSdjaGVja2JveCddOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgLnRhc2stZGl2Om50aC1jaGlsZCgxKSxcXG4udGFzay1jb250YWluZXIgLnRhc2stZGl2Om50aC1jaGlsZCg1KSB7XFxuICAgIC8qIGNvbG9yOiAjMDAwMDhiOyAqL1xcbiAgICAvKiBjb2xvcjogIzQ5NENBMjsgKi9cXG4gICAgY29sb3I6ICNDRjBBMEE7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciAudGFzay1kaXY6bnRoLWNoaWxkKDMpIHtcXG4gICAgY29sb3I6ICNGMEZGNDI7XFxufVxcblxcbi5icmllZi1pbmZvIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNFMUUxOyAqL1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjRURERkIzOyAqL1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5icmllZi1pbmZvOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTIsIDIyMiwgMTkyLCAuMzUpO1xcbn1cXG5cXG4uYnJpZWYtbGF5b3V0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yYXctaW5mbyB7XFxuICAgIGhlaWdodDogMTgwcHg7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIG1hcmdpbjogMCBhdXRvIDIwcHg7XFxuXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNENkQ5REM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNkY3Rjg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi8qIGVkaXQgZm9ybSBzdHlsZSBiZWdpbnMgKi9cXG5mb3JtLmVkaXQtZGV0YWlscyB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5mb3JtLmVkaXQtZGV0YWlscyAuZm9ybS1yb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcXG59XFxuXFxuZm9ybS5lZGl0LWRldGFpbHMgLmZvcm0tcm93Om50aC1jaGlsZCgzKSB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5mb3JtLmVkaXQtZGV0YWlscyAuZm9ybS1yb3cgaW5wdXRbdHlwZT0ndGV4dCddIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q2RDlEQztcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbmZvcm0uZWRpdC1kZXRhaWxzIC5mb3JtLXJvdyBsYWJlbCB7XFxuICAgIHdpZHRoOiA2OHB4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcblxcbmZvcm0uZWRpdC1kZXRhaWxzIHRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDQyJTtcXG4gICAgbWluLWhlaWdodDogNjBweDtcXG4gICAgcmVzaXplOiBub25lO1xcblxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDZEOURDO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbiNzYXZlLWVkaXQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4jY2FuY2VsLWVkaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbiNzYXZlLWVkaXQsXFxuI2NhbmNlbC1lZGl0IHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi8qIGVkaXQgZm9ybSBzdHlsZSBlbmRzICovXFxuXFxuLyogcHJvamVjdCBhZGQgZm9ybSAqL1xcbiNhZGQtcHJvamVjdCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbmZvcm0ucHJvamVjdC1wb3AtdXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDcwYjA0ZTg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnByb2plY3QtcG9wLXVwPmlucHV0W3R5cGU9J3RleHQnXSB7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDZEOURDO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4jc2F2ZS1wcm9qZWN0IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhZjdmZmZhZDtcXG59XFxuXFxuI2NhbmNlbC1wcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmNDg0OGQ0O1xcbn1cXG5cXG4jc2F2ZS1wcm9qZWN0LFxcbiNjYW5jZWwtcHJvamVjdCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGNvbG9yOiAjZmRlN2U3O1xcbn1cXG5cXG4vKiBwcm9qZWN0IGFkZCBmb3JtICovXFxuXFxuLyogdGFzayBmb3JtIGJlZ2lucyAqL1xcbi50YXNrLWZvcm0ge1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNkY3Rjg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q2RDlEQztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDYwcHg7XFxufVxcblxcbi50YXNrLWZvcm0gLmZvcm0tcm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi50YXNrLWZvcm0gbGFiZWwge1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4udGFzay1mb3JtIC5mb3JtLXJvdz5pbnB1dFt0eXBlPSd0ZXh0J10ge1xcbiAgICB3aWR0aDogNjUlO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNENkQ5REM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4udGFzay1mb3JtIHRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDY1JTtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgbWluLWhlaWdodDogNjBweDtcXG4gICAgcmVzaXplOiBub25lO1xcblxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDZEOURDO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi50YXNrLWZvcm0gLmZvcm0tcm93Omxhc3QtY2hpbGQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stZm9ybSBidXR0b24ge1xcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi50YXNrLWZvcm0gLmZvcm0tcm93Omxhc3QtY2hpbGQgYnV0dG9uOmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGFzay1mb3JtIC5mb3JtLXJvdzpsYXN0LWNoaWxkIGJ1dHRvbjpsYXN0LWNoaWxkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIHRhc2sgZm9ybSBlbmRzICovXFxuXFxuLyogU2Nyb2xsYmFyIHN0eWxlIGJlZ2lucyAqL1xcbi50YXNrLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogOC41cHg7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICAgIHNjcm9sbGJhci13aWR0aDogdGhpbjtcXG4gICAgc2Nyb2xsYmFyLWNvbG9yOiB2YXIoLS10aHVtYkJHKSB2YXIoLS1zY3JvbGxiYXJCRyk7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zY3JvbGxiYXJCRyk7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aHVtYkJHKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1zY3JvbGxiYXJCRyk7XFxufVxcblxcbmJ1dHRvbi5kZWxldGUtYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgYm9yZGVyOiAwO1xcbn1cXG5cXG5zcGFuLnRhc2stdGl0bGU6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0IHNwYW46aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIFNjcm9sbGJhciBzdHlsZSBlbmRzICovXFxuXFxuLyogTXkgc3R5bGUgZW5kcyAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMEJBQTBCOztBQUUxQjs7O0lBR0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQSxzQkFBc0I7O0FBRXRCOzs7RUFHRTs7QUFFRjs7Ozs7SUFLSSxvQkFBb0I7SUFDcEIsTUFBTTtJQUNOLGVBQWU7SUFDZixNQUFNO0lBQ04saUJBQWlCO0lBQ2pCLE1BQU07SUFDTixTQUFTO0lBQ1QsTUFBTTtBQUNWOztBQUVBOzs7RUFHRTs7QUFFRjtJQUNJLGlCQUFpQjtJQUNqQixNQUFNO0lBQ04sb0JBQW9CO0lBQ3BCLE1BQU07O0lBRU4sVUFBVTtBQUNkOztBQUVBOztFQUVFOztBQUVGO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBOzs7O0VBSUU7O0FBRUY7SUFDSSxTQUFTO0lBQ1QsTUFBTTtJQUNOLGNBQWM7SUFDZCxNQUFNO0lBQ04sZ0JBQWdCO0lBQ2hCLE1BQU07QUFDVjs7QUFFQTs7RUFFRTs7QUFFRjtJQUNJLGNBQWM7SUFDZCxhQUFhO0FBQ2pCOztBQUVBOztFQUVFOztBQUVGO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTs7RUFFRTs7QUFFRjtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTs7RUFFRTs7QUFFRjtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQSxvQkFBb0I7O0FBRXBCO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxtQkFBbUI7QUFDdkI7O0FBRUEsd0JBQXdCOztBQUV4QixvQkFBb0I7O0FBRXBCO0lBQ0ksc0NBQXNDO0lBQ3RDLDBCQUEwQjtBQUM5Qjs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMEZBQTBGO0lBQzFGLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7O0lB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QUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsWUFBWTs7SUFFWix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBLG1CQUFtQjs7QUFFbkIsMkJBQTJCO0FBQzNCO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gseURBQWdEOztJQUVoRCw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBLHlCQUF5Qjs7QUFFekIsa0JBQWtCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFVBIHN0eWxlIHJlc2V0IGJlZ2lucyAqL1xcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi8qIEZPUk0gcmVzZXQgc3RhcnRzICovXFxuXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIC8qIDEgKi9cXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAgIC8qIDEgKi9cXG4gICAgbWFyZ2luOiAwO1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDIuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSAxOC0sIEZpcmVmb3gsIGFuZCBJRS5cXG4gKi9cXG5cXG5idXR0b24ge1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gICAgLyogMSAqL1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gICAgLyogMiAqL1xcblxcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuXFxuc2VsZWN0IHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKiAyLiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFLlxcbiAqIDMuIENoYW5nZSB0aGUgcmVzaXplIGRpcmVjdGlvbiBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgLyogMSAqL1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgLyogMiAqL1xcbiAgICByZXNpemU6IHZlcnRpY2FsO1xcbiAgICAvKiAzICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHRleHQgc3R5bGUgb2YgcGxhY2Vob2xkZXJzIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgb3BhY2l0eTogMC41NDtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgb2YgZm9jdXMgb3V0bGluZXMgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG46Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIG91dGxpbmUgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlIGluIEZpcmVmb3guXFxuICovXFxuXFxuOi1tb3otZm9jdXNyaW5nIHtcXG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGFkZGl0aW9uYWwgOmludmFsaWQgc3R5bGVzIGluIEZpcmVmb3guXFxuICovXFxuXFxuOi1tb3otdWktaW52YWxpZCB7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qIEZPUk0gcmVzZXQgZW5kcyAqL1xcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbmIsXFxuc3Ryb25nIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyogVUEgc3R5bGUgcmVzZXQgZW5kcyAqL1xcblxcbi8qIE15IHN0eWxlIGJlZ2lucyAqL1xcblxcbmh0bWwge1xcbiAgICAtLXNjcm9sbGJhckJHOiByZ2JhKDgsIDIxNywgMjE0LCAwLjY1KTtcXG4gICAgLS10aHVtYkJHOiByZ2IoMzcsIDQyLCA1Mik7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sICdTZWdvZSBVSScsIFJvYm90bywgVWJ1bnR1LCAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuYTpob3ZlcixcXG5idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGQUYwO1xcbiAgICAtLWhlYWRlci1oZWlnaHQ6IDUwcHg7XFxuICAgIC0tZm9vdGVyLWhlaWdodDogMzBweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XFxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICM2QTJDNzA7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQ0RFQzA7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gKHZhcigtLWhlYWRlci1oZWlnaHQpICsgdmFyKC0tZm9vdGVyLWhlaWdodCkpKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLyogc2V0IG1pbiAmIG1heCBzaWRlYmFyIHdpZHRoICovXFxuLm1haW4+ZGl2IHtcXG4gICAgZmxleC1iYXNpczogYXV0bztcXG59XFxuXFxuLm1haW4gLnNpZGViYXIge1xcbiAgICB3aWR0aDogY2xhbXAoMjEwcHgsIDI1dncsIDE4LjlyZW0pO1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzQwNDI1ODtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U1QjI5OTtcXG4gICAgY29sb3I6ICMwNzBCMDQ7XFxufVxcblxcbi5zaWRlYmFyLXRvcCB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGhlaWdodDogMzAlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5zaWRlYmFyLXRvcD5kaXYge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAycHg7XFxufVxcblxcbi5zaWRlYmFyLXRvcD5kaXYgYSB7XFxuICAgIG1hcmdpbi10b3A6IDJweDtcXG59XFxuXFxuLnNpZGViYXItdG9wPmRpdjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDQgMjI5IDcyIC8gMzglKTtcXG59XFxuXFxuLnNpZGViYXItdG9wIGltZyB7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuXFxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xcbn1cXG5cXG4uc2lkZWJhci1ib3R0b20ge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDcwJTtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnNpZGViYXItYm90dG9tIC5wcm9qZWN0LWFycmF5IHtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xcbn1cXG5cXG4ucHJvamVjdC1hcnJheT5kaXYge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBjaGFydHJldXNlOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcbi5wcm9qZWN0LWFycmF5PmRpdiBidXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL0ljb25zL2RlbGV0ZS1pY29uLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uc2lkZWJhciAuYWN0aW9uIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWFpbiAubWlkc2VjdGlvbiB7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNGOUVENjk7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3RDVBNTA7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBoZWlnaHQ6IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tZm9vdGVyLWhlaWdodCk7XFxuXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICM2QTJDNzA7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQ0RFQzA7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcXG59XFxuXFxuLmhlYWRlcixcXG4uZm9vdGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkaW5nIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtaGVhZGluZyBzcGFuOmZpcnN0LWNoaWxkIHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRpbmcgc3BhbjpudGgtY2hpbGQoMikge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRpbmc+YnV0dG9uIHtcXG4gICAgd2lkdGg6IDI4cHg7XFxuICAgIGhlaWdodDogMjhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vSWNvbnMvbmV3LXRhc2sucG5nJyk7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiBtYXgoNzAwcHgsIDc4JSk7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjRjA4QTVEOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjQ4NDZDO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuYnV0dG9uLmFkZC1wcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL0ljb25zL2FkZC1pY29uLnBuZycpO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG5cXG4gICAgaGVpZ2h0OiA1MXB4O1xcbiAgICB3aWR0aDogNTJweDtcXG4gICAgbWFyZ2luOiAwIGF1dG8gNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGFzay1kaXYge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnRhc2stZGl2IGlucHV0W3R5cGU9J2NoZWNrYm94J106aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciAudGFzay1kaXY6bnRoLWNoaWxkKDEpLFxcbi50YXNrLWNvbnRhaW5lciAudGFzay1kaXY6bnRoLWNoaWxkKDUpIHtcXG4gICAgLyogY29sb3I6ICMwMDAwOGI7ICovXFxuICAgIC8qIGNvbG9yOiAjNDk0Q0EyOyAqL1xcbiAgICBjb2xvcjogI0NGMEEwQTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIC50YXNrLWRpdjpudGgtY2hpbGQoMykge1xcbiAgICBjb2xvcjogI0YwRkY0MjtcXG59XFxuXFxuLmJyaWVmLWluZm8ge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNGM0UxRTE7ICovXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNFRERGQjM7ICovXFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmJyaWVmLWluZm86aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MiwgMjIyLCAxOTIsIC4zNSk7XFxufVxcblxcbi5icmllZi1sYXlvdXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJhdy1pbmZvIHtcXG4gICAgaGVpZ2h0OiAxODBweDtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG8gMjBweDtcXG5cXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q2RDlEQztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RjdGODtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLyogZWRpdCBmb3JtIHN0eWxlIGJlZ2lucyAqL1xcbmZvcm0uZWRpdC1kZXRhaWxzIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmZvcm0uZWRpdC1kZXRhaWxzIC5mb3JtLXJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xcbn1cXG5cXG5mb3JtLmVkaXQtZGV0YWlscyAuZm9ybS1yb3c6bnRoLWNoaWxkKDMpIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmZvcm0uZWRpdC1kZXRhaWxzIC5mb3JtLXJvdyBpbnB1dFt0eXBlPSd0ZXh0J10ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDZEOURDO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuZm9ybS5lZGl0LWRldGFpbHMgLmZvcm0tcm93IGxhYmVsIHtcXG4gICAgd2lkdGg6IDY4cHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuZm9ybS5lZGl0LWRldGFpbHMgdGV4dGFyZWEge1xcbiAgICB3aWR0aDogNDIlO1xcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xcbiAgICByZXNpemU6IG5vbmU7XFxuXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNENkQ5REM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuI3NhdmUtZWRpdCB7XFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbiNjYW5jZWwtZWRpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuI3NhdmUtZWRpdCxcXG4jY2FuY2VsLWVkaXQge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxuICAgIHBhZGRpbmc6IDRweCA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLyogZWRpdCBmb3JtIHN0eWxlIGVuZHMgKi9cXG5cXG4vKiBwcm9qZWN0IGFkZCBmb3JtICovXFxuI2FkZC1wcm9qZWN0IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuZm9ybS5wcm9qZWN0LXBvcC11cCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNzBiMDRlODtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1wb3AtdXA+aW5wdXRbdHlwZT0ndGV4dCddIHtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNENkQ5REM7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbiNzYXZlLXByb2plY3Qge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FmN2ZmZmFkO1xcbn1cXG5cXG4jY2FuY2VsLXByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY0ODQ4ZDQ7XFxufVxcblxcbiNzYXZlLXByb2plY3QsXFxuI2NhbmNlbC1wcm9qZWN0IHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDRweCA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgY29sb3I6ICNmZGU3ZTc7XFxufVxcblxcbi8qIHByb2plY3QgYWRkIGZvcm0gKi9cXG5cXG4vKiB0YXNrIGZvcm0gYmVnaW5zICovXFxuLnRhc2stZm9ybSB7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RjdGODtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDZEOURDO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNjBweDtcXG59XFxuXFxuLnRhc2stZm9ybSAuZm9ybS1yb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnRhc2stZm9ybSBsYWJlbCB7XFxuICAgIHdpZHRoOiA3MHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi50YXNrLWZvcm0gLmZvcm0tcm93PmlucHV0W3R5cGU9J3RleHQnXSB7XFxuICAgIHdpZHRoOiA2NSU7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q2RDlEQztcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi50YXNrLWZvcm0gdGV4dGFyZWEge1xcbiAgICB3aWR0aDogNjUlO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xcbiAgICByZXNpemU6IG5vbmU7XFxuXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNENkQ5REM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLnRhc2stZm9ybSAuZm9ybS1yb3c6bGFzdC1jaGlsZCB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGFzay1mb3JtIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDRweCA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnRhc2stZm9ybSAuZm9ybS1yb3c6bGFzdC1jaGlsZCBidXR0b246Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50YXNrLWZvcm0gLmZvcm0tcm93Omxhc3QtY2hpbGQgYnV0dG9uOmxhc3QtY2hpbGQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogdGFzayBmb3JtIGVuZHMgKi9cXG5cXG4vKiBTY3JvbGxiYXIgc3R5bGUgYmVnaW5zICovXFxuLnRhc2stY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiA4LjVweDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xcbiAgICBzY3JvbGxiYXItY29sb3I6IHZhcigtLXRodW1iQkcpIHZhcigtLXNjcm9sbGJhckJHKTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNjcm9sbGJhckJHKTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRodW1iQkcpO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXNjcm9sbGJhckJHKTtcXG59XFxuXFxuYnV0dG9uLmRlbGV0ZS1idXR0b24ge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vSWNvbnMvcmVtb3ZlLWljb24ucG5nJyk7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJvcmRlcjogMDtcXG59XFxuXFxuc3Bhbi50YXNrLXRpdGxlOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdCBzcGFuOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBTY3JvbGxiYXIgc3R5bGUgZW5kcyAqL1xcblxcbi8qIE15IHN0eWxlIGVuZHMgKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGluYm94SW1nIGZyb20gJy4vSWNvbnMvaW5ib3gtaWNvbi5wbmcnO1xuaW1wb3J0IGNhbGVuZGFySW1nIGZyb20gJy4vSWNvbnMvY2FsZW5kYXItaWNvbi5wbmcnO1xuaW1wb3J0IGltcEltZyBmcm9tICcuL0ljb25zL2ltcG9ydGFudC1pY29uLnBuZyc7XG5pbXBvcnQgdG9kYXlJbWcgZnJvbSAnLi9JY29ucy90b2RheS1pY29uLnBuZyc7XG5jb25zdCBwcm9qZWN0QXJyYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmltcG9ydCB7IGN1cnJlbnRQcm9qZWN0SW5kZXgsbWFzdGVyQXJyYXkgfSBmcm9tICcuL21hc3Rlci1zdHJ1Y3R1cmUuanMnO1xuXG5wcm9qZWN0QXJyYXkuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1hcnJheScpO1xuXG5jb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGFpbmVyJyk7XG5cbmNvbnN0IHBhZ2VMb2FkID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50RGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGhlYWRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuXG4gICAgY29uc3QgbWFpbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG5cbiAgICBjb25zdCBmb290ZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcbiAgICBmb290ZXJFbGVtZW50LnRleHRDb250ZW50ID0gJ8KpIE1hZGUgYnkgRGFzVGFwYW4nO1xuXG4gICAgLy8gYWRkIHRvIERPTVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudERpdik7XG4gICAgY29udGVudERpdi5hcHBlbmQoaGVhZGVyRWxlbWVudCwgbWFpbkVsZW1lbnQsIGZvb3RlckVsZW1lbnQpO1xuXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xuXG4gICAgY29uc3QgbWlkc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1pZHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnbWlkc2VjdGlvbicpO1xuXG4gICAgLy8gYWRkIHRvIERPTVxuICAgIG1haW5FbGVtZW50LmFwcGVuZChzaWRlYmFyLCBtaWRzZWN0aW9uKTtcblxuICAgIGNvbnN0IHByb2plY3RIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdEhlYWRpbmcuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1oZWFkaW5nJyk7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBtYXN0ZXJBcnJheVtjdXJyZW50UHJvamVjdEluZGV4XVswXTtcbiAgICBjb25zdCB0YXNrU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0YXNrU3Bhbi50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XG4gICAgY29uc3QgbmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld1Rhc2tCdXR0b24uaWQgPSAnbmV3LXRhc2snO1xuICAgIG5ld1Rhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2snKTtcblxuICAgIC8vIGNyZWF0ZSB0YXNrIGZvcm1cbiAgICBjb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBuZXdUYXNrRm9ybS5hY3Rpb24gPSAnJztcbiAgICBuZXdUYXNrRm9ybS5tZXRob2QgPSAnJztcbiAgICBuZXdUYXNrRm9ybS5jbGFzc0xpc3QuYWRkKCd0YXNrLWZvcm0nLCAnaGlkZGVuJyk7XG5cbiAgICBjb25zdCBmb3JtUm93T25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybVJvd09uZS5jbGFzc0xpc3QuYWRkKCdmb3JtLXJvdycpO1xuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGl0bGUnKTtcbiAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlIDonXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGl0bGVJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIHRpdGxlSW5wdXQuaWQgPSAndGl0bGUnO1xuICAgIHRpdGxlSW5wdXQubmFtZSA9ICd0aXRsZSc7XG4gICAgZm9ybVJvd09uZS5hcHBlbmQodGl0bGVMYWJlbCwgdGl0bGVJbnB1dCk7XG5cbiAgICBjb25zdCBmb3JtUm93VHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybVJvd1R3by5jbGFzc0xpc3QuYWRkKCdmb3JtLXJvdycpO1xuICAgIGNvbnN0IHRleHRBcmVhTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRleHRBcmVhTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGV0YWlscycpO1xuICAgIHRleHRBcmVhTGFiZWwudGV4dENvbnRlbnQgPSAnRGV0YWlscyA6JztcbiAgICBjb25zdCB0ZXh0QXJlYUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICB0ZXh0QXJlYUlucHV0Lm5hbWUgPSAnZGV0YWlscyc7XG4gICAgdGV4dEFyZWFJbnB1dC5pZCA9ICdkZXRhaWxzJztcbiAgICBmb3JtUm93VHdvLmFwcGVuZCh0ZXh0QXJlYUxhYmVsLCB0ZXh0QXJlYUlucHV0KTtcblxuICAgIGNvbnN0IGZvcm1Sb3dUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Sb3dUaHJlZS5jbGFzc0xpc3QuYWRkKCdmb3JtLXJvdycpO1xuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHkgOic7XG4gICAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eScpO1xuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJpb3JpdHlTZWxlY3QubmFtZSA9ICdwcmlvcml0eSc7XG4gICAgcHJpb3JpdHlTZWxlY3QuaWQgPSAncHJpb3JpdHknO1xuICAgIGNvbnN0IG9wdGlvbk9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbk9uZS50ZXh0Q29udGVudCA9ICdIaWdoJztcbiAgICBvcHRpb25PbmUudmFsdWUgPSAnaCc7XG4gICAgY29uc3Qgb3B0aW9uVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uVHdvLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG4gICAgb3B0aW9uVHdvLnZhbHVlID0gJ20nO1xuICAgIGNvbnN0IG9wdGlvblRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uVGhyZWUudGV4dENvbnRlbnQgPSAnTG93JztcbiAgICBvcHRpb25UaHJlZS52YWx1ZSA9ICdsJztcbiAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmQob3B0aW9uT25lLCBvcHRpb25Ud28sIG9wdGlvblRocmVlKTtcbiAgICBmb3JtUm93VGhyZWUuYXBwZW5kKHByaW9yaXR5TGFiZWwsIHByaW9yaXR5U2VsZWN0KTtcblxuICAgIGNvbnN0IGZvcm1Sb3dGb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybVJvd0ZvdXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1yb3cnKTtcbiAgICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEYXRlIDonO1xuICAgIGR1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkdWUtZGF0ZScpO1xuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgZGF0ZUlucHV0Lm5hbWUgPSAnZHVlLWRhdGUnO1xuICAgIGRhdGVJbnB1dC5pZCA9ICdkdWUtZGF0ZSc7XG4gICAgZm9ybVJvd0ZvdXIuYXBwZW5kKGR1ZURhdGVMYWJlbCwgZGF0ZUlucHV0KTtcblxuICAgIGNvbnN0IGZvcm1Sb3dGaXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybVJvd0ZpdmUuY2xhc3NMaXN0LmFkZCgnZm9ybS1yb3cnKTtcbiAgICBjb25zdCBzYXZlVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHNhdmVUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stYnV0dG9uJyk7XG4gICAgc2F2ZVRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnU2F2ZSc7XG4gICAgY29uc3QgY2FuY2VsVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbFRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgndGFzay1idXR0b24nKTtcbiAgICBjYW5jZWxUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgZm9ybVJvd0ZpdmUuYXBwZW5kKHNhdmVUYXNrQnV0dG9uLCBjYW5jZWxUYXNrQnV0dG9uKTtcblxuICAgIC8vIGFkZCB0byBET01cbiAgICBuZXdUYXNrRm9ybS5hcHBlbmQoZm9ybVJvd09uZSwgZm9ybVJvd1R3bywgZm9ybVJvd1RocmVlLCBmb3JtUm93Rm91ciwgZm9ybVJvd0ZpdmUpO1xuICAgIHByb2plY3RIZWFkaW5nLmFwcGVuZChwcm9qZWN0TmFtZSwgdGFza1NwYW4sIG5ld1Rhc2tCdXR0b24sIG5ld1Rhc2tGb3JtKTtcblxuICAgIC8vYWRkIHRvIERPTVxuICAgIG1pZHNlY3Rpb24uYXBwZW5kKHByb2plY3RIZWFkaW5nLCB0YXNrQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IHNpZGViYXJUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFyVG9wLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItdG9wJyk7XG5cbiAgICBjb25zdCBzaWRlYmFyQm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZWJhckJvdHRvbS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWJvdHRvbScpO1xuXG4gICAgLy8gYWRkIHRvIERPTVxuICAgIHNpZGViYXIuYXBwZW5kKHNpZGViYXJUb3AsIHNpZGViYXJCb3R0b20pO1xuXG4gICAgY29uc3QgaW5ib3hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmJveERpdi5jbGFzc0xpc3QuYWRkKCdpbmJveCcpO1xuXG4gICAgY29uc3QgdG9kYXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RheURpdi5jbGFzc0xpc3QuYWRkKCd0b2RheScpO1xuXG4gICAgY29uc3Qgc2V2ZW5EYXlzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2V2ZW5EYXlzRGl2LmNsYXNzTGlzdC5hZGQoJ3NldmVuLWRheXMnKTtcblxuICAgIGNvbnN0IGltcG9ydGFudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltcG9ydGFudERpdi5jbGFzc0xpc3QuYWRkKCdpbXBvcnRhbnQnKTtcblxuICAgIGNvbnN0IGluYm94SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGluYm94SWNvbi5jbGFzc0xpc3QuYWRkKCdpbmJveC1pY29uJyk7XG4gICAgaW5ib3hJY29uLnNyYyA9IGluYm94SW1nO1xuICAgIGNvbnN0IGluYm94TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBpbmJveExpbmsuY2xhc3NMaXN0LmFkZCgnaW5ib3gtbGluaycpO1xuICAgIGluYm94TGluay50ZXh0Q29udGVudCA9ICdJbmJveCc7XG5cbiAgICAvL2FkZCB0byBET01cbiAgICBpbmJveERpdi5hcHBlbmQoaW5ib3hJY29uLCBpbmJveExpbmspO1xuXG4gICAgY29uc3QgdG9kYXlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdG9kYXlJY29uLmNsYXNzTGlzdC5hZGQoJ3RvZGF5LWljb24nKTtcbiAgICB0b2RheUljb24uc3JjID0gdG9kYXlJbWc7XG5cbiAgICBjb25zdCB0b2RheUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgdG9kYXlMaW5rLmNsYXNzTGlzdC5hZGQoJ3RvZGF5LWxpbmsnKTtcbiAgICB0b2RheUxpbmsudGV4dENvbnRlbnQgPSAnVG9kYXknO1xuXG4gICAgLy8gYWRkIHRvIERPTVxuICAgIHRvZGF5RGl2LmFwcGVuZCh0b2RheUljb24sIHRvZGF5TGluayk7XG5cbiAgICBjb25zdCBjYWxlbmRhckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjYWxlbmRhckljb24uY2xhc3NMaXN0LmFkZCgnY2FsZW5kYXItaWNvbicpO1xuICAgIGNhbGVuZGFySWNvbi5zcmMgPSBjYWxlbmRhckltZztcblxuICAgIGNvbnN0IHNldmVuRGF5c0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgc2V2ZW5EYXlzTGluay5jbGFzc0xpc3QuYWRkKCdzZXZlbkRheXMtbGluaycpO1xuICAgIHNldmVuRGF5c0xpbmsudGV4dENvbnRlbnQgPSAnNyBEYXlzJztcblxuICAgIC8vIGFkZCB0byBET01cbiAgICBzZXZlbkRheXNEaXYuYXBwZW5kKGNhbGVuZGFySWNvbiwgc2V2ZW5EYXlzTGluayk7XG5cbiAgICBjb25zdCBpbXBvcnRhbnRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1wb3J0YW50SWNvbi5jbGFzc0xpc3QuYWRkKCdpbXAtaWNvbicpO1xuICAgIGltcG9ydGFudEljb24uc3JjID0gaW1wSW1nO1xuXG4gICAgY29uc3QgaW1wb3J0YW50TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBpbXBvcnRhbnRMaW5rLmNsYXNzTGlzdC5hZGQoJ2ltcC1saW5rJyk7XG4gICAgaW1wb3J0YW50TGluay50ZXh0Q29udGVudCA9ICdJbXBvcnRhbnQnO1xuXG4gICAgLy8gYWRkIHRvIERPTVxuICAgIGltcG9ydGFudERpdi5hcHBlbmQoaW1wb3J0YW50SWNvbiwgaW1wb3J0YW50TGluayk7XG5cbiAgICAvL2FkZCB0byBET01cbiAgICBzaWRlYmFyVG9wLmFwcGVuZChpbmJveERpdiwgdG9kYXlEaXYsIHNldmVuRGF5c0RpdiwgaW1wb3J0YW50RGl2KTtcblxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgbWFzdGVyQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAvLyAgICAgcHJvamVjdERpdi5pZCA9IGk7XG5cbiAgICAvLyAgICAgY29uc3QgbmFtZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgLy8gICAgIG5hbWVTcGFuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbmFtZScpO1xuICAgIC8vICAgICBuYW1lU3Bhbi50ZXh0Q29udGVudCA9IGAke21hc3RlckFycmF5W2ldWzBdfSBgICsgJ1Byb2plY3QnO1xuXG4gICAgLy8gICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAvLyAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWwtYnRuJyk7XG5cbiAgICAvLyAgICAgLy8gYWRkIHRvIERPTVxuICAgIC8vICAgICBwcm9qZWN0RGl2LmFwcGVuZChuYW1lU3BhbiwgZGVsZXRlUHJvamVjdEJ1dHRvbik7XG4gICAgLy8gICAgIHByb2plY3RBcnJheS5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgICAvLyB9XG5cbiAgICAvLyBjb25zdCBwcm9qZWN0T25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gcHJvamVjdE9uZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW9uZScpO1xuICAgIC8vIGNvbnN0IHByb2plY3RPbmVOYW1lU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAvLyBwcm9qZWN0T25lTmFtZVNwYW4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lJyk7XG4gICAgLy8gcHJvamVjdE9uZU5hbWVTcGFuLnRleHRDb250ZW50ID0gJ0RlZmF1bHQgUHJvamVjdCc7XG4gICAgLy8gY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIC8vIGRlbGV0ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsLWJ0bicpO1xuXG4gICAgLy8gLy8gYWRkIHRvIERPTVxuICAgIC8vIHByb2plY3RPbmUuYXBwZW5kKHByb2plY3RPbmVOYW1lU3BhbiwgZGVsZXRlUHJvamVjdEJ1dHRvbik7XG4gICAgLy8gcHJvamVjdEFycmF5LmFwcGVuZChwcm9qZWN0T25lKTtcblxuICAgIGNvbnN0IGFjdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFjdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdhY3Rpb24nKTtcblxuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC1wcm9qZWN0Jyk7XG5cbiAgICBjb25zdCBhY3Rpb25TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGFjdGlvblNwYW4uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvamVjdCcpO1xuICAgIGFjdGlvblNwYW4udGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnO1xuXG4gICAgY29uc3QgcHJvamVjdFBvcFVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHByb2plY3RQb3BVcC5hY3Rpb24gPSAnJztcbiAgICBwcm9qZWN0UG9wVXAubWV0aG9kID0gJyc7XG4gICAgcHJvamVjdFBvcFVwLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtcG9wLXVwJywgJ2hpZGRlbicpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2plY3ROYW1lSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICBwcm9qZWN0TmFtZUlucHV0LmlkID0gJ25hbWUnO1xuICAgIHByb2plY3ROYW1lSW5wdXQubmFtZSA9ICduYW1lJztcbiAgICBwcm9qZWN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gICAgY29uc3Qgc2F2ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzYXZlUHJvamVjdEJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgc2F2ZVByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnU2F2ZSc7XG4gICAgc2F2ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jaGFuZ2UnKTtcbiAgICBzYXZlUHJvamVjdEJ1dHRvbi5pZCA9ICdzYXZlLXByb2plY3QnO1xuICAgIGNvbnN0IGNhbmNlbFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxQcm9qZWN0QnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICBjYW5jZWxQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgY2FuY2VsUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXVuY2hhbmdlZCcpO1xuICAgIGNhbmNlbFByb2plY3RCdXR0b24uaWQgPSAnY2FuY2VsLXByb2plY3QnO1xuXG4gICAgLy8gYWRkIHRvIERPTVxuICAgIHByb2plY3RQb3BVcC5hcHBlbmQocHJvamVjdE5hbWVJbnB1dCwgc2F2ZVByb2plY3RCdXR0b24sIGNhbmNlbFByb2plY3RCdXR0b24pO1xuXG4gICAgLy8gYWRkIHRvIERPTVxuICAgIGFjdGlvbkRpdi5hcHBlbmQoYWRkUHJvamVjdEJ1dHRvbiwgYWN0aW9uU3BhbiwgcHJvamVjdFBvcFVwKTtcbiAgICBzaWRlYmFyQm90dG9tLmFwcGVuZChwcm9qZWN0QXJyYXksIGFjdGlvbkRpdik7XG59O1xuXG5leHBvcnQgeyBwcm9qZWN0QXJyYXksIHRhc2tDb250YWluZXIsIHBhZ2VMb2FkIH07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBwYWdlTG9hZCB9IGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgcHJvamVjdExvYWQgZnJvbSAnLi9wcm9qZWN0LmpzJztcbmltcG9ydCB0YXNrTG9hZCBmcm9tICcuL3Rhc2suanMnO1xuaW1wb3J0IGFwcExvZ2ljIGZyb20gJy4vbG9naWMuanMnO1xuaW1wb3J0IHsgbWFzdGVyQXJyYXkgfSBmcm9tICcuL21hc3Rlci1zdHJ1Y3R1cmUuanMnO1xuXG5wYWdlTG9hZCgpO1xucHJvamVjdExvYWQoKTtcbnRhc2tMb2FkKG1hc3RlckFycmF5WzBdKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBhcHBMb2dpYyhldmVudCkuaGFuZGxlVG9nZ2xlKCk7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgYXBwTG9naWMoZXZlbnQpLmhhbmRsZVN1Ym1pc3Npb24oKTtcbn0pOyIsImltcG9ydCB7IGN1cnJlbnRQcm9qZWN0SW5kZXgsIG1hc3RlckFycmF5IH0gZnJvbSBcIi4vbWFzdGVyLXN0cnVjdHVyZS5qc1wiO1xuaW1wb3J0IHByb2plY3RMb2FkIGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCB0YXNrTG9hZCBmcm9tIFwiLi90YXNrLmpzXCI7XG5cbmNvbnN0IGFwcExvZ2ljID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgX3RhcmdldE5vZGUgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgX2NsYXNzTmFtZSA9IF90YXJnZXROb2RlLmNsYXNzTmFtZTtcblxuICAgIGNvbnN0IF9mb3JtU3VibWlzc2lvbiA9IChjbGFzc05hbWUpID0+IHtcbiAgICAgICAgc3dpdGNoIChjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3Byb2plY3QtcG9wLXVwJzpcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIF90YXJnZXROb2RlLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBbXTtcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0LnB1c2goX3RhcmdldE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQudmFsdWUpO1xuICAgICAgICAgICAgICAgIG1hc3RlckFycmF5LnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgICAgICAgICAgX3RhcmdldE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICBwcm9qZWN0TG9hZCgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1hc3RlckFycmF5KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBfdG9nZ2xlID0gKGNsYXNzTmFtZSkgPT4ge1xuXG4gICAgICAgIHN3aXRjaCAoY2xhc3NOYW1lKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ3Rhc2stdGl0bGUnOlxuICAgICAgICAgICAgICAgIF90YXJnZXROb2RlLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYnJpZWYtbGF5b3V0Jyk7XG4gICAgICAgICAgICAgICAgX3RhcmdldE5vZGUucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBfdGFyZ2V0Tm9kZS5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnc2F2ZSc6XG4gICAgICAgICAgICAgICAgX3RhcmdldE5vZGUucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBfdGFyZ2V0Tm9kZS5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgX3RhcmdldE5vZGUucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2JyaWVmLWxheW91dCcpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdjYW5jZWwnOlxuICAgICAgICAgICAgICAgIF90YXJnZXROb2RlLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgX3RhcmdldE5vZGUucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIF90YXJnZXROb2RlLnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdicmllZi1sYXlvdXQnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnYWRkLXByb2plY3QnOlxuICAgICAgICAgICAgICAgIF90YXJnZXROb2RlLnBhcmVudEVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnZGVsLWJ0bic6XG4gICAgICAgICAgICAgICAgbGV0IGR1bW15QXJyYXkgPSBbXTtcbiAgICAgICAgICAgICAgICBsZXQgcHJvamVjdElkID0gX3RhcmdldE5vZGUucGFyZW50RWxlbWVudC5pZDtcbiAgICAgICAgICAgICAgICBkdW1teUFycmF5ID0gbWFzdGVyQXJyYXkuZmlsdGVyKChlbGVtZW50KSA9PiBtYXN0ZXJBcnJheS5pbmRleE9mKGVsZW1lbnQpLnRvU3RyaW5nKCkgIT0gcHJvamVjdElkKTtcbiAgICAgICAgICAgICAgICBtYXN0ZXJBcnJheS5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgIG1hc3RlckFycmF5LnB1c2goLi4uZHVtbXlBcnJheSk7XG4gICAgICAgICAgICAgICAgcHJvamVjdExvYWQoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtYXN0ZXJBcnJheSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ3Byb2plY3QtdW5jaGFuZ2VkJzpcbiAgICAgICAgICAgICAgICBfdGFyZ2V0Tm9kZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnByZXZpb3VzRWxlbWVudFNpYmxpbmcudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICBfdGFyZ2V0Tm9kZS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICduZXctdGFzayc6XG4gICAgICAgICAgICAgICAgX3RhcmdldE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICd0YXNrLWJ1dHRvbic6XG4gICAgICAgICAgICAgICAgX3RhcmdldE5vZGUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdwcm9qZWN0LW5hbWUnOlxuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0SW5kZXggPSBOdW1iZXIoX3RhcmdldE5vZGUucGFyZW50RWxlbWVudC5pZCk7XG4gICAgICAgICAgICAgICAgdGFza0xvYWQobWFzdGVyQXJyYXlbY3VycmVudFByb2plY3RJbmRleF0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVRvZ2dsZSA9ICgpID0+IHtcbiAgICAgICAgX3RvZ2dsZShfY2xhc3NOYW1lKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlU3VibWlzc2lvbiA9ICgpID0+IHtcbiAgICAgICAgbGV0IF9zYW5pdGl6ZWRDbGFzc05hbWUgPSBfY2xhc3NOYW1lLnNwbGl0KCcgJylbMF07XG4gICAgICAgIF9mb3JtU3VibWlzc2lvbihfc2FuaXRpemVkQ2xhc3NOYW1lKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgaGFuZGxlVG9nZ2xlLCBoYW5kbGVTdWJtaXNzaW9uIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhcHBMb2dpYzsiLCJsZXQgY3VycmVudFByb2plY3RJbmRleCA9IDA7XG5cbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gW1xuICAgICdEZWZhdWx0JyxcbiAgICB7XG4gICAgICAgIHN0YXR1czogJ2luY29tcGxldGUnLFxuICAgICAgICB0aXRsZTogJ0J1eSBNaWxrJyxcbiAgICAgICAgZHVlRGF0ZTogJzIzLzEyLzIwMjInLFxuICAgICAgICBwcmlvcml0eTogJ0gnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHN0YXR1czogJ2luY29tcGxldGUnLFxuICAgICAgICB0aXRsZTogJ1JlY2hhcmdlIFdpRmknLFxuICAgICAgICBkdWVEYXRlOiAnMTIvMTIvMjAyMicsXG4gICAgICAgIHByaW9yaXR5OiAnTCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc3RhdHVzOiAnaW5jb21wbGV0ZScsXG4gICAgICAgIHRpdGxlOiAnRXhlcmNpc2UnLFxuICAgICAgICBkdWVEYXRlOiAnMDcvMTEvMjAyMicsXG4gICAgICAgIHByaW9yaXR5OiAnTCdcbiAgICB9LFxuXTtcblxuY29uc3QgbWFzdGVyQXJyYXkgPSBbZGVmYXVsdFByb2plY3QsXTtcblxuZXhwb3J0IHsgY3VycmVudFByb2plY3RJbmRleCwgbWFzdGVyQXJyYXkgfTsiLCJpbXBvcnQgeyBtYXN0ZXJBcnJheSB9IGZyb20gXCIuL21hc3Rlci1zdHJ1Y3R1cmUuanNcIjtcbmltcG9ydCB7IHByb2plY3RBcnJheSB9IGZyb20gXCIuL2hvbWUuanNcIjtcblxuY29uc29sZS5sb2cobWFzdGVyQXJyYXkpO1xuY29uc3QgcHJvamVjdExvYWQgPSAoKSA9PiB7XG4gICAgLy8gY2xlYW4gZGl2IFxuICAgIHdoaWxlIChwcm9qZWN0QXJyYXkubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICBwcm9qZWN0QXJyYXkucmVtb3ZlQ2hpbGQocHJvamVjdEFycmF5Lmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFzdGVyQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgICAgcHJvamVjdERpdi5pZCA9IGk7XG5cbiAgICAgICAgY29uc3QgbmFtZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIG5hbWVTcGFuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbmFtZScpO1xuICAgICAgICBuYW1lU3Bhbi50ZXh0Q29udGVudCA9IGAke21hc3RlckFycmF5W2ldWzBdfSBgICsgJ1Byb2plY3QnO1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWwtYnRuJyk7XG5cbiAgICAgICAgLy8gYWRkIHRvIERPTVxuICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZChuYW1lU3BhbiwgZGVsZXRlUHJvamVjdEJ1dHRvbik7XG4gICAgICAgIHByb2plY3RBcnJheS5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0TG9hZDsiLCJpbXBvcnQgeyB0YXNrQ29udGFpbmVyIH0gZnJvbSBcIi4vaG9tZS5qc1wiO1xuXG5jb25zdCB0YXNrTG9hZCA9IChjdXJyZW50UHJvamVjdCkgPT4ge1xuICAgIHdoaWxlICh0YXNrQ29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgdGFza0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0YXNrQ29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgIH07XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGN1cnJlbnRQcm9qZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRpdicpO1xuXG4gICAgICAgIGNvbnN0IGJyaWVmSW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBicmllZkluZm9EaXYuY2xhc3NMaXN0LmFkZCgnYnJpZWYtaW5mbycsICdicmllZi1sYXlvdXQnKTtcblxuICAgICAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNoZWNrQm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgICAgICBjb25zdCB0aXRsZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHRpdGxlU3Bhbi5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJyk7XG4gICAgICAgIHRpdGxlU3Bhbi50ZXh0Q29udGVudCA9IGN1cnJlbnRQcm9qZWN0W2ldWyd0aXRsZSddO1xuICAgICAgICBjb25zdCBkYXRlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZGF0ZVNwYW4uY2xhc3NMaXN0LmFkZCgnZHVlLWRhdGUnKTtcbiAgICAgICAgZGF0ZVNwYW4udGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdFtpXVsnZHVlRGF0ZSddO1xuICAgICAgICBjb25zdCBkZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idXR0b24nKTtcblxuICAgICAgICBjb25zdCBkZW1vQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbW9CdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVtby1idXR0b24nKTtcbiAgICAgICAgZGVtb0J1dHRvbi50ZXh0Q29udGVudCA9ICdEZW1vJztcblxuICAgICAgICAvLyBhZGQgdG8gRE9NXG4gICAgICAgIGJyaWVmSW5mb0Rpdi5hcHBlbmQoY2hlY2tCb3gsIHRpdGxlU3BhbiwgZGF0ZVNwYW4sIGRlbEJ1dHRvbik7XG5cbiAgICAgICAgY29uc3QgcmF3SW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByYXdJbmZvRGl2LmNsYXNzTGlzdC5hZGQoJ3Jhdy1pbmZvJywgJ2hpZGRlbicpO1xuXG4gICAgICAgIC8vIHN0YXJ0IGVkaXQgZm9ybVxuICAgICAgICBjb25zdCBmb3JtRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybUVkaXQuYWN0aW9uID0gJyc7XG4gICAgICAgIGZvcm1FZGl0Lm1ldGhvZCA9ICcnO1xuICAgICAgICBmb3JtRWRpdC5jbGFzc0xpc3QuYWRkKCdlZGl0LWRldGFpbHMnKTtcblxuICAgICAgICBjb25zdCBmb3JtUm93T25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcm1Sb3dPbmUuY2xhc3NMaXN0LmFkZCgnZm9ybS1yb3cnKTtcbiAgICAgICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGl0bGUnKTtcbiAgICAgICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZSA6J1xuICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGl0bGVJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgICAgICB0aXRsZUlucHV0LmlkID0gJ3RpdGxlJztcbiAgICAgICAgdGl0bGVJbnB1dC5uYW1lID0gJ3RpdGxlJztcbiAgICAgICAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ2RhdGUtZGl2Jyk7XG4gICAgICAgIGNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEYXRlIDonO1xuICAgICAgICBkdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlLWRhdGUnKTtcbiAgICAgICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgICAgIGRhdGVJbnB1dC5uYW1lID0gJ2R1ZS1kYXRlJztcbiAgICAgICAgZGF0ZUlucHV0LmlkID0gJ2R1ZS1kYXRlJztcblxuICAgICAgICAvLyBhZGQgdG8gRE9NXG4gICAgICAgIGZvcm1Sb3dPbmUuYXBwZW5kKHRpdGxlTGFiZWwsIHRpdGxlSW5wdXQsIGR1ZURhdGVMYWJlbCwgZGF0ZUlucHV0KTtcblxuICAgICAgICBjb25zdCBmb3JtUm93VHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcm1Sb3dUd28uY2xhc3NMaXN0LmFkZCgnZm9ybS1yb3cnKTtcbiAgICAgICAgY29uc3QgdGV4dEFyZWFMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHRleHRBcmVhTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGV0YWlscycpO1xuICAgICAgICB0ZXh0QXJlYUxhYmVsLnRleHRDb250ZW50ID0gJ0RldGFpbHMgOic7XG4gICAgICAgIGNvbnN0IHRleHRBcmVhSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICB0ZXh0QXJlYUlucHV0Lm5hbWUgPSAnZGV0YWlscyc7XG4gICAgICAgIHRleHRBcmVhSW5wdXQuaWQgPSAnZGV0YWlscyc7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWRpdicpO1xuICAgICAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSA6JztcbiAgICAgICAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eScpO1xuICAgICAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBwcmlvcml0eVNlbGVjdC5uYW1lID0gJ3ByaW9yaXR5JztcbiAgICAgICAgcHJpb3JpdHlTZWxlY3QuaWQgPSAncHJpb3JpdHknO1xuICAgICAgICBjb25zdCBvcHRpb25PbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uT25lLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICAgICAgICBvcHRpb25PbmUudmFsdWUgPSAnaCc7XG4gICAgICAgIGNvbnN0IG9wdGlvblR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb25Ud28udGV4dENvbnRlbnQgPSAnTWVkaXVtJztcbiAgICAgICAgb3B0aW9uVHdvLnZhbHVlID0gJ20nO1xuICAgICAgICBjb25zdCBvcHRpb25UaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb25UaHJlZS50ZXh0Q29udGVudCA9ICdMb3cnO1xuICAgICAgICBvcHRpb25UaHJlZS52YWx1ZSA9ICdsJztcblxuICAgICAgICAvLyBhZGQgdG8gRE9NXG4gICAgICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZChvcHRpb25PbmUsIG9wdGlvblR3bywgb3B0aW9uVGhyZWUpO1xuICAgICAgICBmb3JtUm93VHdvLmFwcGVuZCh0ZXh0QXJlYUxhYmVsLCB0ZXh0QXJlYUlucHV0LCBwcmlvcml0eUxhYmVsLCBwcmlvcml0eVNlbGVjdCk7XG5cbiAgICAgICAgY29uc3QgZm9ybVJvd1RocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcm1Sb3dUaHJlZS5jbGFzc0xpc3QuYWRkKCdmb3JtLXJvdycpO1xuICAgICAgICBjb25zdCBzYXZlRWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzYXZlRWRpdEJ1dHRvbi5pZCA9ICdzYXZlLWVkaXQnO1xuICAgICAgICBzYXZlRWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTYXZlJztcbiAgICAgICAgY29uc3QgY2FuY2VsRWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjYW5jZWxFZGl0QnV0dG9uLmlkID0gJ2NhbmNlbC1lZGl0JztcbiAgICAgICAgY2FuY2VsRWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuXG4gICAgICAgIC8vIGFkZCB0byBET01cbiAgICAgICAgZm9ybVJvd1RocmVlLmFwcGVuZChzYXZlRWRpdEJ1dHRvbiwgY2FuY2VsRWRpdEJ1dHRvbik7XG5cbiAgICAgICAgLy8gYWRkIHRvIERPTVxuICAgICAgICBmb3JtRWRpdC5hcHBlbmQoZm9ybVJvd09uZSwgZm9ybVJvd1R3bywgZm9ybVJvd1RocmVlKTtcbiAgICAgICAgcmF3SW5mb0Rpdi5hcHBlbmQoZm9ybUVkaXQpO1xuICAgICAgICAvLyBlbmQgZWRpdCBmb3JtXG5cbiAgICAgICAgLy8gYWRkIHRvIERPTVxuICAgICAgICB0YXNrRGl2LmFwcGVuZChicmllZkluZm9EaXYsIHJhd0luZm9EaXYpO1xuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZCh0YXNrRGl2KTtcbiAgICB9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRhc2tMb2FkOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==