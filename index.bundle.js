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
___CSS_LOADER_EXPORT___.push([module.id, "/* UA style reset begins */\n\n*,\n::before,\n::after {\n    box-sizing: border-box;\n}\n\nhtml {\n    cursor: default;\n}\n\n/* FORM reset starts */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    font-family: inherit;\n    /* 1 */\n    font-size: 100%;\n    /* 1 */\n    line-height: 1.15;\n    /* 1 */\n    margin: 0;\n    /* 2 */\n}\n\n/**\n * 1. Show the overflow in IE.\n * 2. Remove the inheritance of text transform in Edge 18-, Firefox, and IE.\n */\n\nbutton {\n    overflow: visible;\n    /* 1 */\n    text-transform: none;\n    /* 2 */\n\n    padding: 0;\n}\n\n/**\n * Remove the inheritance of text transform in Firefox.\n */\n\nselect {\n    text-transform: none;\n}\n\n/**\n * 1. Remove the margin in Firefox and Safari.\n * 2. Remove the default vertical scrollbar in IE.\n * 3. Change the resize direction in all browsers (opinionated).\n */\n\ntextarea {\n    margin: 0;\n    /* 1 */\n    overflow: auto;\n    /* 2 */\n    resize: vertical;\n    /* 3 */\n}\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n\n::-webkit-input-placeholder {\n    color: inherit;\n    opacity: 0.54;\n}\n\n/**\n * Remove the inner border and padding of focus outlines in Firefox.\n */\n\n::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n}\n\n/**\n * Restore the focus outline styles unset by the previous rule in Firefox.\n */\n\n:-moz-focusring {\n    outline: 1px dotted ButtonText;\n}\n\n/**\n * Remove the additional :invalid styles in Firefox.\n */\n\n:-moz-ui-invalid {\n    box-shadow: none;\n}\n\n/* FORM reset ends */\n\nbody {\n    margin: 0;\n}\n\nh1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n}\n\nb,\nstrong {\n    font-weight: bolder;\n}\n\n/* UA style reset ends */\n\n/* My style begins */\n\nhtml {\n    --scrollbarBG: rgba(8, 217, 214, 0.65);\n    --thumbBG: rgb(37, 42, 52);\n}\n\nhtml,\nbody {\n    height: 100%;\n}\n\nbody {\n    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Ubuntu, 'Open Sans', sans-serif;\n    font-size: 16px;\n    color: whitesmoke;\n}\n\na:hover,\nbutton:hover {\n    cursor: pointer;\n}\n\n.content {\n    height: 100%;\n    background-color: #F8FAF0;\n    --header-height: 50px;\n    --footer-height: 30px;\n}\n\n.header {\n    height: var(--header-height);\n    line-height: var(--header-height);\n    font-weight: bold;\n\n    /* background-color: #6A2C70; */\n    background-color: #FCDEC0;\n    color: whitesmoke;\n}\n\n.main {\n    height: calc(100% - (var(--header-height) + var(--footer-height)));\n    display: flex;\n}\n\n/* set min & max sidebar width */\n.main>div {\n    flex-basis: auto;\n}\n\n.main .sidebar {\n    width: clamp(210px, 25vw, 18.9rem);\n    flex-shrink: 0;\n    border-right: 1px solid #404258;\n    background-color: #E5B299;\n    color: #070B04;\n}\n\n.sidebar-top {\n    padding: 20px;\n    height: 30%;\n    font-size: 1rem;\n}\n\n.sidebar-top>div {\n    margin-bottom: 15px;\n    display: flex;\n    padding: 2px;\n}\n\n.sidebar-top>div a {\n    margin-top: 2px;\n}\n\n.sidebar-top>div:hover {\n    background-color: rgb(144 229 72 / 38%);\n}\n\n.sidebar-top img {\n    width: 24px;\n    height: 24px;\n\n    margin-right: 8px;\n}\n\n.sidebar-bottom {\n    padding: 20px;\n    height: 70%;\n    font-size: 1.25rem;\n    font-weight: bold;\n}\n\n.sidebar-bottom .project-array {\n    /* background-color: red; */\n}\n\n.project-array>div {\n    /* background-color: chartreuse; */\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 15px;\n}\n\n.project-array>div button {\n    border: none;\n    border-radius: 50%;\n    width: 25px;\n    height: 25px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n}\n\n.sidebar .action {\n    text-align: center;\n}\n\n.main .midsection {\n    overflow: auto;\n    flex-grow: 1;\n\n    /* background-color: #F9ED69; */\n    background-color: #7D5A50;\n}\n\n.footer {\n    height: var(--footer-height);\n    line-height: var(--footer-height);\n\n    /* background-color: #6A2C70; */\n    background-color: #FCDEC0;\n    color: red;\n    font-size: 0.85rem;\n}\n\n.header,\n.footer {\n    text-align: center;\n}\n\n.project-heading {\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.project-heading span:first-child {\n    font-size: 1.3rem;\n    font-weight: bold;\n    margin-right: 25px;\n}\n\n.project-heading span:nth-child(2) {\n    margin-right: 15px;\n}\n\n.project-heading>button {\n    width: 28px;\n    height: 28px;\n    border-radius: 50%;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.task-container {\n    width: max(700px, 78%);\n    height: 500px;\n    border-radius: 15px;\n    padding: 15px;\n\n    margin: 0 auto;\n    /* background-color: #F08A5D; */\n    background-color: #B4846C;\n    overflow: auto;\n}\n\nbutton.add-project {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    display: block;\n\n    height: 51px;\n    width: 52px;\n    margin: 0 auto 5px;\n    border-radius: 50%;\n}\n\n.hidden {\n    display: none;\n}\n\n.task-div {\n    margin-bottom: 20px;\n    font-weight: bold;\n}\n\n.task-div input[type='checkbox']:hover {\n    cursor: pointer;\n}\n\n.brief-info {\n    height: 50px;\n    padding: 5px;\n    border-radius: 10px;\n}\n\n.brief-info:hover {\n    background-color: rgba(252, 222, 192, .35);\n}\n\n.brief-layout {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.raw-info {\n    height: 180px;\n    width: 60%;\n    margin: 0 auto 20px;\n\n    border: 1px solid #D6D9DC;\n    border-radius: 10px;\n    background-color: #F6F7F8;\n    padding: 10px;\n}\n\n/* edit form style begins */\nform.edit-details {\n    color: black;\n    height: 100%;\n}\n\nform.edit-details .form-row {\n    display: flex;\n    align-items: flex-start;\n    margin-bottom: 18px;\n}\n\nform.edit-details .form-row:nth-child(3) {\n    justify-content: center;\n}\n\nform.edit-details .form-row input[type='text'] {\n    background-color: #FFFFFF;\n    border: 1px solid #D6D9DC;\n    border-radius: 3px;\n    font-size: 14px;\n}\n\nform.edit-details .form-row label {\n    width: 68px;\n    text-align: right;\n    margin-right: 5px;\n}\n\nform.edit-details textarea {\n    width: 42%;\n    min-height: 60px;\n    resize: none;\n\n    border: 1px solid #D6D9DC;\n    border-radius: 3px;\n    margin-right: 20px;\n    font-size: 0.8rem;\n}\n\n#save-edit {\n    margin-right: 15px;\n    background-color: green;\n}\n\n#cancel-edit {\n    background-color: red;\n}\n\n#save-edit,\n#cancel-edit {\n    font-weight: bold;\n    color: whitesmoke;\n    padding: 4px 8px;\n    border-radius: 3px;\n}\n\n/* edit form style ends */\n\n/* project add form */\n#add-project {\n    margin-bottom: 10px;\n}\n\nform.project-pop-up {\n    background-color: #070b04e8;\n    padding: 5px;\n    border-radius: 10px;\n}\n\n.project-pop-up>input[type='text'] {\n    width: 95%;\n    height: 25px;\n    border-radius: 3px;\n    border: 1px solid #D6D9DC;\n\n    background-color: #FFFFFF;\n    font-size: 14px;\n    font-weight: bold;\n    margin-bottom: 10px;\n}\n\n#save-project {\n    margin-right: 10px;\n    margin-bottom: 5px;\n    background-color: #af7fffad;\n}\n\n#cancel-project {\n    background-color: #ef4848d4;\n}\n\n#save-project,\n#cancel-project {\n    font-weight: bold;\n    padding: 4px 8px;\n    border-radius: 3px;\n    color: #fde7e7;\n}\n\n/* project add form */\n\n/* task form begins */\n.task-form {\n    z-index: 1;\n    width: 300px;\n    padding: 10px;\n\n    background-color: #F6F7F8;\n    color: black;\n    border: 1px solid #D6D9DC;\n    border-radius: 10px;\n\n    position: absolute;\n    top: 60px;\n}\n\n.task-form .form-row {\n    display: flex;\n    align-items: flex-start;\n    margin-bottom: 10px;\n}\n\n.task-form label {\n    width: 70px;\n    margin-right: 5px;\n    text-align: right;\n}\n\n.task-form .form-row>input[type='text'] {\n    width: 65%;\n    height: 25px;\n    background-color: #FFFFFF;\n    border: 1px solid #D6D9DC;\n    border-radius: 3px;\n    font-size: 14px;\n}\n\n.task-form textarea {\n    width: 65%;\n    height: 100px;\n    min-height: 60px;\n    resize: none;\n\n    border: 1px solid #D6D9DC;\n    border-radius: 3px;\n}\n\n.task-form .form-row:last-child {\n    justify-content: center;\n}\n\n.task-form button {\n    padding: 4px 8px;\n    border-radius: 5px;\n}\n\n.task-form .form-row:last-child button:first-child {\n    margin-right: 10px;\n    background-color: green;\n    color: white;\n}\n\n.task-form .form-row:last-child button:last-child {\n    background-color: red;\n    color: white;\n}\n\n/* task form ends */\n\n/* Scrollbar style begins */\n.task-container::-webkit-scrollbar {\n    width: 8.5px;\n}\n\n.task-container {\n    scrollbar-width: thin;\n    scrollbar-color: var(--thumbBG) var(--scrollbarBG);\n}\n\n.task-container::-webkit-scrollbar-track {\n    background: var(--scrollbarBG);\n}\n\n.task-container::-webkit-scrollbar-thumb {\n    background-color: var(--thumbBG);\n    border-radius: 6px;\n    border: 3px solid var(--scrollbarBG);\n}\n\nbutton.delete-button {\n    height: 40px;\n    width: 40px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n\n    background-color: transparent;\n    background-size: contain;\n    border: 0;\n}\n\nspan.task-title:hover {\n    cursor: pointer;\n}\n\n.project span:hover {\n    cursor: pointer;\n}\n\n.medium-priority {\n    color: yellow;\n}\n\n.high-priority {\n    color: red;\n}\n\n/* Scrollbar style ends */\n\n/* My style ends */", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* UA style reset begins */\n\n*,\n::before,\n::after {\n    box-sizing: border-box;\n}\n\nhtml {\n    cursor: default;\n}\n\n/* FORM reset starts */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    font-family: inherit;\n    /* 1 */\n    font-size: 100%;\n    /* 1 */\n    line-height: 1.15;\n    /* 1 */\n    margin: 0;\n    /* 2 */\n}\n\n/**\n * 1. Show the overflow in IE.\n * 2. Remove the inheritance of text transform in Edge 18-, Firefox, and IE.\n */\n\nbutton {\n    overflow: visible;\n    /* 1 */\n    text-transform: none;\n    /* 2 */\n\n    padding: 0;\n}\n\n/**\n * Remove the inheritance of text transform in Firefox.\n */\n\nselect {\n    text-transform: none;\n}\n\n/**\n * 1. Remove the margin in Firefox and Safari.\n * 2. Remove the default vertical scrollbar in IE.\n * 3. Change the resize direction in all browsers (opinionated).\n */\n\ntextarea {\n    margin: 0;\n    /* 1 */\n    overflow: auto;\n    /* 2 */\n    resize: vertical;\n    /* 3 */\n}\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n\n::-webkit-input-placeholder {\n    color: inherit;\n    opacity: 0.54;\n}\n\n/**\n * Remove the inner border and padding of focus outlines in Firefox.\n */\n\n::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n}\n\n/**\n * Restore the focus outline styles unset by the previous rule in Firefox.\n */\n\n:-moz-focusring {\n    outline: 1px dotted ButtonText;\n}\n\n/**\n * Remove the additional :invalid styles in Firefox.\n */\n\n:-moz-ui-invalid {\n    box-shadow: none;\n}\n\n/* FORM reset ends */\n\nbody {\n    margin: 0;\n}\n\nh1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n}\n\nb,\nstrong {\n    font-weight: bolder;\n}\n\n/* UA style reset ends */\n\n/* My style begins */\n\nhtml {\n    --scrollbarBG: rgba(8, 217, 214, 0.65);\n    --thumbBG: rgb(37, 42, 52);\n}\n\nhtml,\nbody {\n    height: 100%;\n}\n\nbody {\n    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Ubuntu, 'Open Sans', sans-serif;\n    font-size: 16px;\n    color: whitesmoke;\n}\n\na:hover,\nbutton:hover {\n    cursor: pointer;\n}\n\n.content {\n    height: 100%;\n    background-color: #F8FAF0;\n    --header-height: 50px;\n    --footer-height: 30px;\n}\n\n.header {\n    height: var(--header-height);\n    line-height: var(--header-height);\n    font-weight: bold;\n\n    /* background-color: #6A2C70; */\n    background-color: #FCDEC0;\n    color: whitesmoke;\n}\n\n.main {\n    height: calc(100% - (var(--header-height) + var(--footer-height)));\n    display: flex;\n}\n\n/* set min & max sidebar width */\n.main>div {\n    flex-basis: auto;\n}\n\n.main .sidebar {\n    width: clamp(210px, 25vw, 18.9rem);\n    flex-shrink: 0;\n    border-right: 1px solid #404258;\n    background-color: #E5B299;\n    color: #070B04;\n}\n\n.sidebar-top {\n    padding: 20px;\n    height: 30%;\n    font-size: 1rem;\n}\n\n.sidebar-top>div {\n    margin-bottom: 15px;\n    display: flex;\n    padding: 2px;\n}\n\n.sidebar-top>div a {\n    margin-top: 2px;\n}\n\n.sidebar-top>div:hover {\n    background-color: rgb(144 229 72 / 38%);\n}\n\n.sidebar-top img {\n    width: 24px;\n    height: 24px;\n\n    margin-right: 8px;\n}\n\n.sidebar-bottom {\n    padding: 20px;\n    height: 70%;\n    font-size: 1.25rem;\n    font-weight: bold;\n}\n\n.sidebar-bottom .project-array {\n    /* background-color: red; */\n}\n\n.project-array>div {\n    /* background-color: chartreuse; */\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 15px;\n}\n\n.project-array>div button {\n    border: none;\n    border-radius: 50%;\n    width: 25px;\n    height: 25px;\n    background-image: url('./Icons/delete-icon.png');\n    background-size: cover;\n}\n\n.sidebar .action {\n    text-align: center;\n}\n\n.main .midsection {\n    overflow: auto;\n    flex-grow: 1;\n\n    /* background-color: #F9ED69; */\n    background-color: #7D5A50;\n}\n\n.footer {\n    height: var(--footer-height);\n    line-height: var(--footer-height);\n\n    /* background-color: #6A2C70; */\n    background-color: #FCDEC0;\n    color: red;\n    font-size: 0.85rem;\n}\n\n.header,\n.footer {\n    text-align: center;\n}\n\n.project-heading {\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.project-heading span:first-child {\n    font-size: 1.3rem;\n    font-weight: bold;\n    margin-right: 25px;\n}\n\n.project-heading span:nth-child(2) {\n    margin-right: 15px;\n}\n\n.project-heading>button {\n    width: 28px;\n    height: 28px;\n    border-radius: 50%;\n    background-image: url('./Icons/new-task.png');\n}\n\n.task-container {\n    width: max(700px, 78%);\n    height: 500px;\n    border-radius: 15px;\n    padding: 15px;\n\n    margin: 0 auto;\n    /* background-color: #F08A5D; */\n    background-color: #B4846C;\n    overflow: auto;\n}\n\nbutton.add-project {\n    background-image: url('./Icons/add-icon.png');\n    display: block;\n\n    height: 51px;\n    width: 52px;\n    margin: 0 auto 5px;\n    border-radius: 50%;\n}\n\n.hidden {\n    display: none;\n}\n\n.task-div {\n    margin-bottom: 20px;\n    font-weight: bold;\n}\n\n.task-div input[type='checkbox']:hover {\n    cursor: pointer;\n}\n\n.brief-info {\n    height: 50px;\n    padding: 5px;\n    border-radius: 10px;\n}\n\n.brief-info:hover {\n    background-color: rgba(252, 222, 192, .35);\n}\n\n.brief-layout {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.raw-info {\n    height: 180px;\n    width: 60%;\n    margin: 0 auto 20px;\n\n    border: 1px solid #D6D9DC;\n    border-radius: 10px;\n    background-color: #F6F7F8;\n    padding: 10px;\n}\n\n/* edit form style begins */\nform.edit-details {\n    color: black;\n    height: 100%;\n}\n\nform.edit-details .form-row {\n    display: flex;\n    align-items: flex-start;\n    margin-bottom: 18px;\n}\n\nform.edit-details .form-row:nth-child(3) {\n    justify-content: center;\n}\n\nform.edit-details .form-row input[type='text'] {\n    background-color: #FFFFFF;\n    border: 1px solid #D6D9DC;\n    border-radius: 3px;\n    font-size: 14px;\n}\n\nform.edit-details .form-row label {\n    width: 68px;\n    text-align: right;\n    margin-right: 5px;\n}\n\nform.edit-details textarea {\n    width: 42%;\n    min-height: 60px;\n    resize: none;\n\n    border: 1px solid #D6D9DC;\n    border-radius: 3px;\n    margin-right: 20px;\n    font-size: 0.8rem;\n}\n\n#save-edit {\n    margin-right: 15px;\n    background-color: green;\n}\n\n#cancel-edit {\n    background-color: red;\n}\n\n#save-edit,\n#cancel-edit {\n    font-weight: bold;\n    color: whitesmoke;\n    padding: 4px 8px;\n    border-radius: 3px;\n}\n\n/* edit form style ends */\n\n/* project add form */\n#add-project {\n    margin-bottom: 10px;\n}\n\nform.project-pop-up {\n    background-color: #070b04e8;\n    padding: 5px;\n    border-radius: 10px;\n}\n\n.project-pop-up>input[type='text'] {\n    width: 95%;\n    height: 25px;\n    border-radius: 3px;\n    border: 1px solid #D6D9DC;\n\n    background-color: #FFFFFF;\n    font-size: 14px;\n    font-weight: bold;\n    margin-bottom: 10px;\n}\n\n#save-project {\n    margin-right: 10px;\n    margin-bottom: 5px;\n    background-color: #af7fffad;\n}\n\n#cancel-project {\n    background-color: #ef4848d4;\n}\n\n#save-project,\n#cancel-project {\n    font-weight: bold;\n    padding: 4px 8px;\n    border-radius: 3px;\n    color: #fde7e7;\n}\n\n/* project add form */\n\n/* task form begins */\n.task-form {\n    z-index: 1;\n    width: 300px;\n    padding: 10px;\n\n    background-color: #F6F7F8;\n    color: black;\n    border: 1px solid #D6D9DC;\n    border-radius: 10px;\n\n    position: absolute;\n    top: 60px;\n}\n\n.task-form .form-row {\n    display: flex;\n    align-items: flex-start;\n    margin-bottom: 10px;\n}\n\n.task-form label {\n    width: 70px;\n    margin-right: 5px;\n    text-align: right;\n}\n\n.task-form .form-row>input[type='text'] {\n    width: 65%;\n    height: 25px;\n    background-color: #FFFFFF;\n    border: 1px solid #D6D9DC;\n    border-radius: 3px;\n    font-size: 14px;\n}\n\n.task-form textarea {\n    width: 65%;\n    height: 100px;\n    min-height: 60px;\n    resize: none;\n\n    border: 1px solid #D6D9DC;\n    border-radius: 3px;\n}\n\n.task-form .form-row:last-child {\n    justify-content: center;\n}\n\n.task-form button {\n    padding: 4px 8px;\n    border-radius: 5px;\n}\n\n.task-form .form-row:last-child button:first-child {\n    margin-right: 10px;\n    background-color: green;\n    color: white;\n}\n\n.task-form .form-row:last-child button:last-child {\n    background-color: red;\n    color: white;\n}\n\n/* task form ends */\n\n/* Scrollbar style begins */\n.task-container::-webkit-scrollbar {\n    width: 8.5px;\n}\n\n.task-container {\n    scrollbar-width: thin;\n    scrollbar-color: var(--thumbBG) var(--scrollbarBG);\n}\n\n.task-container::-webkit-scrollbar-track {\n    background: var(--scrollbarBG);\n}\n\n.task-container::-webkit-scrollbar-thumb {\n    background-color: var(--thumbBG);\n    border-radius: 6px;\n    border: 3px solid var(--scrollbarBG);\n}\n\nbutton.delete-button {\n    height: 40px;\n    width: 40px;\n    background-image: url('./Icons/remove-icon.png');\n\n    background-color: transparent;\n    background-size: contain;\n    border: 0;\n}\n\nspan.task-title:hover {\n    cursor: pointer;\n}\n\n.project span:hover {\n    cursor: pointer;\n}\n\n.medium-priority {\n    color: yellow;\n}\n\n.high-priority {\n    color: red;\n}\n\n/* Scrollbar style ends */\n\n/* My style ends */"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QywySEFBMEM7QUFDdEYsNENBQTRDLHFIQUF1QztBQUNuRiw0Q0FBNEMscUhBQXVDO0FBQ25GLDRDQUE0QywySEFBMEM7QUFDdEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0EsaUdBQWlHLDZCQUE2QixHQUFHLFVBQVUsc0JBQXNCLEdBQUcseUxBQXlMLDJCQUEyQixtQ0FBbUMscUNBQXFDLDZCQUE2QixnQkFBZ0Isc0lBQXNJLHdCQUF3Qix3Q0FBd0MsZ0NBQWdDLEdBQUcsaUZBQWlGLDJCQUEyQixHQUFHLGdNQUFnTSxnQkFBZ0Isa0NBQWtDLG9DQUFvQyxnQkFBZ0IscUhBQXFILHFCQUFxQixvQkFBb0IsR0FBRywwR0FBMEcseUJBQXlCLGlCQUFpQixHQUFHLDZHQUE2RyxxQ0FBcUMsR0FBRyx3RkFBd0YsdUJBQXVCLEdBQUcsbUNBQW1DLGdCQUFnQixHQUFHLFFBQVEscUJBQXFCLHVCQUF1QixHQUFHLGdCQUFnQiwwQkFBMEIsR0FBRyxnRUFBZ0UsNkNBQTZDLGlDQUFpQyxHQUFHLGlCQUFpQixtQkFBbUIsR0FBRyxVQUFVLGlHQUFpRyxzQkFBc0Isd0JBQXdCLEdBQUcsNEJBQTRCLHNCQUFzQixHQUFHLGNBQWMsbUJBQW1CLGdDQUFnQyw0QkFBNEIsNEJBQTRCLEdBQUcsYUFBYSxtQ0FBbUMsd0NBQXdDLHdCQUF3QixzQ0FBc0Msa0NBQWtDLHdCQUF3QixHQUFHLFdBQVcseUVBQXlFLG9CQUFvQixHQUFHLGtEQUFrRCx1QkFBdUIsR0FBRyxvQkFBb0IseUNBQXlDLHFCQUFxQixzQ0FBc0MsZ0NBQWdDLHFCQUFxQixHQUFHLGtCQUFrQixvQkFBb0Isa0JBQWtCLHNCQUFzQixHQUFHLHNCQUFzQiwwQkFBMEIsb0JBQW9CLG1CQUFtQixHQUFHLHdCQUF3QixzQkFBc0IsR0FBRyw0QkFBNEIsOENBQThDLEdBQUcsc0JBQXNCLGtCQUFrQixtQkFBbUIsMEJBQTBCLEdBQUcscUJBQXFCLG9CQUFvQixrQkFBa0IseUJBQXlCLHdCQUF3QixHQUFHLG9DQUFvQyxnQ0FBZ0MsS0FBSyx3QkFBd0IsdUNBQXVDLHNCQUFzQixxQ0FBcUMsMEJBQTBCLDBCQUEwQixHQUFHLCtCQUErQixtQkFBbUIseUJBQXlCLGtCQUFrQixtQkFBbUIsd0VBQXdFLDZCQUE2QixHQUFHLHNCQUFzQix5QkFBeUIsR0FBRyx1QkFBdUIscUJBQXFCLG1CQUFtQixzQ0FBc0Msa0NBQWtDLEdBQUcsYUFBYSxtQ0FBbUMsd0NBQXdDLHNDQUFzQyxrQ0FBa0MsaUJBQWlCLHlCQUF5QixHQUFHLHVCQUF1Qix5QkFBeUIsR0FBRyxzQkFBc0IsbUJBQW1CLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEdBQUcsdUNBQXVDLHdCQUF3Qix3QkFBd0IseUJBQXlCLEdBQUcsd0NBQXdDLHlCQUF5QixHQUFHLDZCQUE2QixrQkFBa0IsbUJBQW1CLHlCQUF5Qix3RUFBd0UsR0FBRyxxQkFBcUIsNkJBQTZCLG9CQUFvQiwwQkFBMEIsb0JBQW9CLHVCQUF1QixvQ0FBb0Msa0NBQWtDLHFCQUFxQixHQUFHLHdCQUF3Qix3RUFBd0UscUJBQXFCLHFCQUFxQixrQkFBa0IseUJBQXlCLHlCQUF5QixHQUFHLGFBQWEsb0JBQW9CLEdBQUcsZUFBZSwwQkFBMEIsd0JBQXdCLEdBQUcsNENBQTRDLHNCQUFzQixHQUFHLGlCQUFpQixtQkFBbUIsbUJBQW1CLDBCQUEwQixHQUFHLHVCQUF1QixpREFBaUQsR0FBRyxtQkFBbUIsb0JBQW9CLG9DQUFvQywwQkFBMEIsR0FBRyxlQUFlLG9CQUFvQixpQkFBaUIsMEJBQTBCLGtDQUFrQywwQkFBMEIsZ0NBQWdDLG9CQUFvQixHQUFHLHFEQUFxRCxtQkFBbUIsbUJBQW1CLEdBQUcsaUNBQWlDLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEdBQUcsOENBQThDLDhCQUE4QixHQUFHLG9EQUFvRCxnQ0FBZ0MsZ0NBQWdDLHlCQUF5QixzQkFBc0IsR0FBRyx1Q0FBdUMsa0JBQWtCLHdCQUF3Qix3QkFBd0IsR0FBRyxnQ0FBZ0MsaUJBQWlCLHVCQUF1QixtQkFBbUIsa0NBQWtDLHlCQUF5Qix5QkFBeUIsd0JBQXdCLEdBQUcsZ0JBQWdCLHlCQUF5Qiw4QkFBOEIsR0FBRyxrQkFBa0IsNEJBQTRCLEdBQUcsK0JBQStCLHdCQUF3Qix3QkFBd0IsdUJBQXVCLHlCQUF5QixHQUFHLHdFQUF3RSwwQkFBMEIsR0FBRyx5QkFBeUIsa0NBQWtDLG1CQUFtQiwwQkFBMEIsR0FBRyx3Q0FBd0MsaUJBQWlCLG1CQUFtQix5QkFBeUIsZ0NBQWdDLGtDQUFrQyxzQkFBc0Isd0JBQXdCLDBCQUEwQixHQUFHLG1CQUFtQix5QkFBeUIseUJBQXlCLGtDQUFrQyxHQUFHLHFCQUFxQixrQ0FBa0MsR0FBRyxxQ0FBcUMsd0JBQXdCLHVCQUF1Qix5QkFBeUIscUJBQXFCLEdBQUcsa0VBQWtFLGlCQUFpQixtQkFBbUIsb0JBQW9CLGtDQUFrQyxtQkFBbUIsZ0NBQWdDLDBCQUEwQiwyQkFBMkIsZ0JBQWdCLEdBQUcsMEJBQTBCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEdBQUcsc0JBQXNCLGtCQUFrQix3QkFBd0Isd0JBQXdCLEdBQUcsNkNBQTZDLGlCQUFpQixtQkFBbUIsZ0NBQWdDLGdDQUFnQyx5QkFBeUIsc0JBQXNCLEdBQUcseUJBQXlCLGlCQUFpQixvQkFBb0IsdUJBQXVCLG1CQUFtQixrQ0FBa0MseUJBQXlCLEdBQUcscUNBQXFDLDhCQUE4QixHQUFHLHVCQUF1Qix1QkFBdUIseUJBQXlCLEdBQUcsd0RBQXdELHlCQUF5Qiw4QkFBOEIsbUJBQW1CLEdBQUcsdURBQXVELDRCQUE0QixtQkFBbUIsR0FBRyw4RkFBOEYsbUJBQW1CLEdBQUcscUJBQXFCLDRCQUE0Qix5REFBeUQsR0FBRyw4Q0FBOEMscUNBQXFDLEdBQUcsOENBQThDLHVDQUF1Qyx5QkFBeUIsMkNBQTJDLEdBQUcsMEJBQTBCLG1CQUFtQixrQkFBa0Isd0VBQXdFLHNDQUFzQywrQkFBK0IsZ0JBQWdCLEdBQUcsMkJBQTJCLHNCQUFzQixHQUFHLHlCQUF5QixzQkFBc0IsR0FBRyxzQkFBc0Isb0JBQW9CLEdBQUcsb0JBQW9CLGlCQUFpQixHQUFHLDREQUE0RCx3RkFBd0YsUUFBUSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sYUFBYSxRQUFRLE1BQU0sU0FBUyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxPQUFPLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxZQUFZLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sUUFBUSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxhQUFhLGNBQWMsTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxZQUFZLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksWUFBWSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sYUFBYSxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGNBQWMsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxh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QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZjhDO0FBQ007QUFDSjtBQUNGO0FBQ3VCOztBQUVyRTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4Qiw2REFBVyxDQUFDLHFFQUFlO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGtEQUFRO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSwwREFBb0I7QUFDNUI7O0FBRUE7O0FBRUEsaUVBQWUsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21hc3Rlci1zdHJ1Y3R1cmUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdGFzay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9JY29ucy9kZWxldGUtaWNvbi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL0ljb25zL25ldy10YXNrLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vSWNvbnMvYWRkLWljb24ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9JY29ucy9yZW1vdmUtaWNvbi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBVQSBzdHlsZSByZXNldCBiZWdpbnMgKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKiBGT1JNIHJlc2V0IHN0YXJ0cyAqL1xcblxcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICAvKiAxICovXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgICAvKiAxICovXFxuICAgIG1hcmdpbjogMDtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAyLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UgMTgtLCBGaXJlZm94LCBhbmQgSUUuXFxuICovXFxuXFxuYnV0dG9uIHtcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAgIC8qIDEgKi9cXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICAgIC8qIDIgKi9cXG5cXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbnNlbGVjdCB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICogMi4gUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRS5cXG4gKiAzLiBDaGFuZ2UgdGhlIHJlc2l6ZSBkaXJlY3Rpb24gaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIC8qIDEgKi9cXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIC8qIDIgKi9cXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcXG4gICAgLyogMyAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSB0ZXh0IHN0eWxlIG9mIHBsYWNlaG9sZGVycyBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIG9wYWNpdHk6IDAuNTQ7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIG9mIGZvY3VzIG91dGxpbmVzIGluIEZpcmVmb3guXFxuICovXFxuXFxuOjotbW96LWZvY3VzLWlubmVyIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBvdXRsaW5lIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbjotbW96LWZvY3VzcmluZyB7XFxuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIDppbnZhbGlkIHN0eWxlcyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbjotbW96LXVpLWludmFsaWQge1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4vKiBGT1JNIHJlc2V0IGVuZHMgKi9cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qIFVBIHN0eWxlIHJlc2V0IGVuZHMgKi9cXG5cXG4vKiBNeSBzdHlsZSBiZWdpbnMgKi9cXG5cXG5odG1sIHtcXG4gICAgLS1zY3JvbGxiYXJCRzogcmdiYSg4LCAyMTcsIDIxNCwgMC42NSk7XFxuICAgIC0tdGh1bWJCRzogcmdiKDM3LCA0MiwgNTIpO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCAnU2Vnb2UgVUknLCBSb2JvdG8sIFVidW50dSwgJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbmE6aG92ZXIsXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RkFGMDtcXG4gICAgLS1oZWFkZXItaGVpZ2h0OiA1MHB4O1xcbiAgICAtLWZvb3Rlci1oZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcbiAgICBsaW5lLWhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNkEyQzcwOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNERUMwO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICh2YXIoLS1oZWFkZXItaGVpZ2h0KSArIHZhcigtLWZvb3Rlci1oZWlnaHQpKSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi8qIHNldCBtaW4gJiBtYXggc2lkZWJhciB3aWR0aCAqL1xcbi5tYWluPmRpdiB7XFxuICAgIGZsZXgtYmFzaXM6IGF1dG87XFxufVxcblxcbi5tYWluIC5zaWRlYmFyIHtcXG4gICAgd2lkdGg6IGNsYW1wKDIxMHB4LCAyNXZ3LCAxOC45cmVtKTtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM0MDQyNTg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNUIyOTk7XFxuICAgIGNvbG9yOiAjMDcwQjA0O1xcbn1cXG5cXG4uc2lkZWJhci10b3Age1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDMwJTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uc2lkZWJhci10b3A+ZGl2IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMnB4O1xcbn1cXG5cXG4uc2lkZWJhci10b3A+ZGl2IGEge1xcbiAgICBtYXJnaW4tdG9wOiAycHg7XFxufVxcblxcbi5zaWRlYmFyLXRvcD5kaXY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ0IDIyOSA3MiAvIDM4JSk7XFxufVxcblxcbi5zaWRlYmFyLXRvcCBpbWcge1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcblxcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcXG59XFxuXFxuLnNpZGViYXItYm90dG9tIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgaGVpZ2h0OiA3MCU7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5zaWRlYmFyLWJvdHRvbSAucHJvamVjdC1hcnJheSB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cXG59XFxuXFxuLnByb2plY3QtYXJyYXk+ZGl2IHtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogY2hhcnRyZXVzZTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1hcnJheT5kaXYgYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5zaWRlYmFyIC5hY3Rpb24ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tYWluIC5taWRzZWN0aW9uIHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGZsZXgtZ3JvdzogMTtcXG5cXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI0Y5RUQ2OTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdENUE1MDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIGhlaWdodDogdmFyKC0tZm9vdGVyLWhlaWdodCk7XFxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcXG5cXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzZBMkM3MDsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZDREVDMDtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xcbn1cXG5cXG4uaGVhZGVyLFxcbi5mb290ZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRpbmcge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkaW5nIHNwYW46Zmlyc3QtY2hpbGQge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcXG59XFxuXFxuLnByb2plY3QtaGVhZGluZyBzcGFuOm50aC1jaGlsZCgyKSB7XFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXG59XFxuXFxuLnByb2plY3QtaGVhZGluZz5idXR0b24ge1xcbiAgICB3aWR0aDogMjhweDtcXG4gICAgaGVpZ2h0OiAyOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiBtYXgoNzAwcHgsIDc4JSk7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjRjA4QTVEOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjQ4NDZDO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuYnV0dG9uLmFkZC1wcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuXFxuICAgIGhlaWdodDogNTFweDtcXG4gICAgd2lkdGg6IDUycHg7XFxuICAgIG1hcmdpbjogMCBhdXRvIDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhc2stZGl2IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi50YXNrLWRpdiBpbnB1dFt0eXBlPSdjaGVja2JveCddOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnJpZWYtaW5mbyB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uYnJpZWYtaW5mbzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUyLCAyMjIsIDE5MiwgLjM1KTtcXG59XFxuXFxuLmJyaWVmLWxheW91dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmF3LWluZm8ge1xcbiAgICBoZWlnaHQ6IDE4MHB4O1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBtYXJnaW46IDAgYXV0byAyMHB4O1xcblxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDZEOURDO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGN0Y4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4vKiBlZGl0IGZvcm0gc3R5bGUgYmVnaW5zICovXFxuZm9ybS5lZGl0LWRldGFpbHMge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuZm9ybS5lZGl0LWRldGFpbHMgLmZvcm0tcm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XFxufVxcblxcbmZvcm0uZWRpdC1kZXRhaWxzIC5mb3JtLXJvdzpudGgtY2hpbGQoMykge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuZm9ybS5lZGl0LWRldGFpbHMgLmZvcm0tcm93IGlucHV0W3R5cGU9J3RleHQnXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNENkQ5REM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG5mb3JtLmVkaXQtZGV0YWlscyAuZm9ybS1yb3cgbGFiZWwge1xcbiAgICB3aWR0aDogNjhweDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG5mb3JtLmVkaXQtZGV0YWlscyB0ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiA0MiU7XFxuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG5cXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q2RDlEQztcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4jc2F2ZS1lZGl0IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuI2NhbmNlbC1lZGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4jc2F2ZS1lZGl0LFxcbiNjYW5jZWwtZWRpdCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4vKiBlZGl0IGZvcm0gc3R5bGUgZW5kcyAqL1xcblxcbi8qIHByb2plY3QgYWRkIGZvcm0gKi9cXG4jYWRkLXByb2plY3Qge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG5mb3JtLnByb2plY3QtcG9wLXVwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA3MGIwNGU4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0LXBvcC11cD5pbnB1dFt0eXBlPSd0ZXh0J10ge1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q2RDlEQztcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuI3NhdmUtcHJvamVjdCB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWY3ZmZmYWQ7XFxufVxcblxcbiNjYW5jZWwtcHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZjQ4NDhkNDtcXG59XFxuXFxuI3NhdmUtcHJvamVjdCxcXG4jY2FuY2VsLXByb2plY3Qge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBjb2xvcjogI2ZkZTdlNztcXG59XFxuXFxuLyogcHJvamVjdCBhZGQgZm9ybSAqL1xcblxcbi8qIHRhc2sgZm9ybSBiZWdpbnMgKi9cXG4udGFzay1mb3JtIHtcXG4gICAgei1pbmRleDogMTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGN0Y4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNENkQ5REM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA2MHB4O1xcbn1cXG5cXG4udGFzay1mb3JtIC5mb3JtLXJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4udGFzay1mb3JtIGxhYmVsIHtcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLnRhc2stZm9ybSAuZm9ybS1yb3c+aW5wdXRbdHlwZT0ndGV4dCddIHtcXG4gICAgd2lkdGg6IDY1JTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDZEOURDO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLnRhc2stZm9ybSB0ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiA2NSU7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG5cXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q2RDlEQztcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4udGFzay1mb3JtIC5mb3JtLXJvdzpsYXN0LWNoaWxkIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWZvcm0gYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4udGFzay1mb3JtIC5mb3JtLXJvdzpsYXN0LWNoaWxkIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRhc2stZm9ybSAuZm9ybS1yb3c6bGFzdC1jaGlsZCBidXR0b246bGFzdC1jaGlsZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiB0YXNrIGZvcm0gZW5kcyAqL1xcblxcbi8qIFNjcm9sbGJhciBzdHlsZSBiZWdpbnMgKi9cXG4udGFzay1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDguNXB4O1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XFxuICAgIHNjcm9sbGJhci1jb2xvcjogdmFyKC0tdGh1bWJCRykgdmFyKC0tc2Nyb2xsYmFyQkcpO1xcbn1cXG5cXG4udGFzay1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Nyb2xsYmFyQkcpO1xcbn1cXG5cXG4udGFzay1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGh1bWJCRyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tc2Nyb2xsYmFyQkcpO1xcbn1cXG5cXG5idXR0b24uZGVsZXRlLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJvcmRlcjogMDtcXG59XFxuXFxuc3Bhbi50YXNrLXRpdGxlOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdCBzcGFuOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVkaXVtLXByaW9yaXR5IHtcXG4gICAgY29sb3I6IHllbGxvdztcXG59XFxuXFxuLmhpZ2gtcHJpb3JpdHkge1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4vKiBTY3JvbGxiYXIgc3R5bGUgZW5kcyAqL1xcblxcbi8qIE15IHN0eWxlIGVuZHMgKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDBCQUEwQjs7QUFFMUI7OztJQUdJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUEsc0JBQXNCOztBQUV0Qjs7O0VBR0U7O0FBRUY7Ozs7O0lBS0ksb0JBQW9CO0lBQ3BCLE1BQU07SUFDTixlQUFlO0lBQ2YsTUFBTTtJQUNOLGlCQUFpQjtJQUNqQixNQUFNO0lBQ04sU0FBUztJQUNULE1BQU07QUFDVjs7QUFFQTs7O0VBR0U7O0FBRUY7SUFDSSxpQkFBaUI7SUFDakIsTUFBTTtJQUNOLG9CQUFvQjtJQUNwQixNQUFNOztJQUVOLFVBQVU7QUFDZDs7QUFFQTs7RUFFRTs7QUFFRjtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTs7OztFQUlFOztBQUVGO0lBQ0ksU0FBUztJQUNULE1BQU07SUFDTixjQUFjO0lBQ2QsTUFBTTtJQUNOLGdCQUFnQjtJQUNoQixNQUFNO0FBQ1Y7O0FBRUE7O0VBRUU7O0FBRUY7SUFDSSxjQUFjO0lBQ2QsYUFBYTtBQUNqQjs7QUFFQTs7RUFFRTs7QUFFRjtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7O0VBRUU7O0FBRUY7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7O0VBRUU7O0FBRUY7SUFD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WUFBWTtJQUNaLHlCQUF5QjtJQUN6QixtQkFBbUI7O0lBRW5CLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsWUFBWTs7SUFFWix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBLG1CQUFtQjs7QUFFbkIsMkJBQTJCO0FBQzNCO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gseURBQWdEOztJQUVoRCw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQSx5QkFBeUI7O0FBRXpCLGtCQUFrQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBVQSBzdHlsZSByZXNldCBiZWdpbnMgKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKiBGT1JNIHJlc2V0IHN0YXJ0cyAqL1xcblxcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICAvKiAxICovXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgICAvKiAxICovXFxuICAgIG1hcmdpbjogMDtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAyLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UgMTgtLCBGaXJlZm94LCBhbmQgSUUuXFxuICovXFxuXFxuYnV0dG9uIHtcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAgIC8qIDEgKi9cXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICAgIC8qIDIgKi9cXG5cXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbnNlbGVjdCB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICogMi4gUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRS5cXG4gKiAzLiBDaGFuZ2UgdGhlIHJlc2l6ZSBkaXJlY3Rpb24gaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIC8qIDEgKi9cXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIC8qIDIgKi9cXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcXG4gICAgLyogMyAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSB0ZXh0IHN0eWxlIG9mIHBsYWNlaG9sZGVycyBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIG9wYWNpdHk6IDAuNTQ7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIG9mIGZvY3VzIG91dGxpbmVzIGluIEZpcmVmb3guXFxuICovXFxuXFxuOjotbW96LWZvY3VzLWlubmVyIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBvdXRsaW5lIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbjotbW96LWZvY3VzcmluZyB7XFxuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIDppbnZhbGlkIHN0eWxlcyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbjotbW96LXVpLWludmFsaWQge1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4vKiBGT1JNIHJlc2V0IGVuZHMgKi9cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qIFVBIHN0eWxlIHJlc2V0IGVuZHMgKi9cXG5cXG4vKiBNeSBzdHlsZSBiZWdpbnMgKi9cXG5cXG5odG1sIHtcXG4gICAgLS1zY3JvbGxiYXJCRzogcmdiYSg4LCAyMTcsIDIxNCwgMC42NSk7XFxuICAgIC0tdGh1bWJCRzogcmdiKDM3LCA0MiwgNTIpO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCAnU2Vnb2UgVUknLCBSb2JvdG8sIFVidW50dSwgJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbmE6aG92ZXIsXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RkFGMDtcXG4gICAgLS1oZWFkZXItaGVpZ2h0OiA1MHB4O1xcbiAgICAtLWZvb3Rlci1oZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcbiAgICBsaW5lLWhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNkEyQzcwOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNERUMwO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICh2YXIoLS1oZWFkZXItaGVpZ2h0KSArIHZhcigtLWZvb3Rlci1oZWlnaHQpKSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi8qIHNldCBtaW4gJiBtYXggc2lkZWJhciB3aWR0aCAqL1xcbi5tYWluPmRpdiB7XFxuICAgIGZsZXgtYmFzaXM6IGF1dG87XFxufVxcblxcbi5tYWluIC5zaWRlYmFyIHtcXG4gICAgd2lkdGg6IGNsYW1wKDIxMHB4LCAyNXZ3LCAxOC45cmVtKTtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM0MDQyNTg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNUIyOTk7XFxuICAgIGNvbG9yOiAjMDcwQjA0O1xcbn1cXG5cXG4uc2lkZWJhci10b3Age1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDMwJTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uc2lkZWJhci10b3A+ZGl2IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMnB4O1xcbn1cXG5cXG4uc2lkZWJhci10b3A+ZGl2IGEge1xcbiAgICBtYXJnaW4tdG9wOiAycHg7XFxufVxcblxcbi5zaWRlYmFyLXRvcD5kaXY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ0IDIyOSA3MiAvIDM4JSk7XFxufVxcblxcbi5zaWRlYmFyLXRvcCBpbWcge1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcblxcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcXG59XFxuXFxuLnNpZGViYXItYm90dG9tIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgaGVpZ2h0OiA3MCU7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5zaWRlYmFyLWJvdHRvbSAucHJvamVjdC1hcnJheSB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cXG59XFxuXFxuLnByb2plY3QtYXJyYXk+ZGl2IHtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogY2hhcnRyZXVzZTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1hcnJheT5kaXYgYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9JY29ucy9kZWxldGUtaWNvbi5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLnNpZGViYXIgLmFjdGlvbiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1haW4gLm1pZHNlY3Rpb24ge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgZmxleC1ncm93OiAxO1xcblxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlFRDY5OyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0Q1QTUwO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgaGVpZ2h0OiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xcblxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNkEyQzcwOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNERUMwO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBmb250LXNpemU6IDAuODVyZW07XFxufVxcblxcbi5oZWFkZXIsXFxuLmZvb3RlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtaGVhZGluZyB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRpbmcgc3BhbjpmaXJzdC1jaGlsZCB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkaW5nIHNwYW46bnRoLWNoaWxkKDIpIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkaW5nPmJ1dHRvbiB7XFxuICAgIHdpZHRoOiAyOHB4O1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL0ljb25zL25ldy10YXNrLnBuZycpO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgICB3aWR0aDogbWF4KDcwMHB4LCA3OCUpO1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcblxcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI0YwOEE1RDsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0I0ODQ2QztcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbmJ1dHRvbi5hZGQtcHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9JY29ucy9hZGQtaWNvbi5wbmcnKTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuXFxuICAgIGhlaWdodDogNTFweDtcXG4gICAgd2lkdGg6IDUycHg7XFxuICAgIG1hcmdpbjogMCBhdXRvIDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhc2stZGl2IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi50YXNrLWRpdiBpbnB1dFt0eXBlPSdjaGVja2JveCddOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnJpZWYtaW5mbyB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uYnJpZWYtaW5mbzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUyLCAyMjIsIDE5MiwgLjM1KTtcXG59XFxuXFxuLmJyaWVmLWxheW91dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmF3LWluZm8ge1xcbiAgICBoZWlnaHQ6IDE4MHB4O1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBtYXJnaW46IDAgYXV0byAyMHB4O1xcblxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDZEOURDO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGN0Y4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4vKiBlZGl0IGZvcm0gc3R5bGUgYmVnaW5zICovXFxuZm9ybS5lZGl0LWRldGFpbHMge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuZm9ybS5lZGl0LWRldGFpbHMgLmZvcm0tcm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XFxufVxcblxcbmZvcm0uZWRpdC1kZXRhaWxzIC5mb3JtLXJvdzpudGgtY2hpbGQoMykge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuZm9ybS5lZGl0LWRldGFpbHMgLmZvcm0tcm93IGlucHV0W3R5cGU9J3RleHQnXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNENkQ5REM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG5mb3JtLmVkaXQtZGV0YWlscyAuZm9ybS1yb3cgbGFiZWwge1xcbiAgICB3aWR0aDogNjhweDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG5mb3JtLmVkaXQtZGV0YWlscyB0ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiA0MiU7XFxuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG5cXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q2RDlEQztcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4jc2F2ZS1lZGl0IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuI2NhbmNlbC1lZGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4jc2F2ZS1lZGl0LFxcbiNjYW5jZWwtZWRpdCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4vKiBlZGl0IGZvcm0gc3R5bGUgZW5kcyAqL1xcblxcbi8qIHByb2plY3QgYWRkIGZvcm0gKi9cXG4jYWRkLXByb2plY3Qge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG5mb3JtLnByb2plY3QtcG9wLXVwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA3MGIwNGU4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0LXBvcC11cD5pbnB1dFt0eXBlPSd0ZXh0J10ge1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q2RDlEQztcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuI3NhdmUtcHJvamVjdCB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWY3ZmZmYWQ7XFxufVxcblxcbiNjYW5jZWwtcHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZjQ4NDhkNDtcXG59XFxuXFxuI3NhdmUtcHJvamVjdCxcXG4jY2FuY2VsLXByb2plY3Qge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBjb2xvcjogI2ZkZTdlNztcXG59XFxuXFxuLyogcHJvamVjdCBhZGQgZm9ybSAqL1xcblxcbi8qIHRhc2sgZm9ybSBiZWdpbnMgKi9cXG4udGFzay1mb3JtIHtcXG4gICAgei1pbmRleDogMTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGN0Y4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNENkQ5REM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA2MHB4O1xcbn1cXG5cXG4udGFzay1mb3JtIC5mb3JtLXJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4udGFzay1mb3JtIGxhYmVsIHtcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLnRhc2stZm9ybSAuZm9ybS1yb3c+aW5wdXRbdHlwZT0ndGV4dCddIHtcXG4gICAgd2lkdGg6IDY1JTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDZEOURDO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLnRhc2stZm9ybSB0ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiA2NSU7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG5cXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q2RDlEQztcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4udGFzay1mb3JtIC5mb3JtLXJvdzpsYXN0LWNoaWxkIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWZvcm0gYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4udGFzay1mb3JtIC5mb3JtLXJvdzpsYXN0LWNoaWxkIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRhc2stZm9ybSAuZm9ybS1yb3c6bGFzdC1jaGlsZCBidXR0b246bGFzdC1jaGlsZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiB0YXNrIGZvcm0gZW5kcyAqL1xcblxcbi8qIFNjcm9sbGJhciBzdHlsZSBiZWdpbnMgKi9cXG4udGFzay1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDguNXB4O1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XFxuICAgIHNjcm9sbGJhci1jb2xvcjogdmFyKC0tdGh1bWJCRykgdmFyKC0tc2Nyb2xsYmFyQkcpO1xcbn1cXG5cXG4udGFzay1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Nyb2xsYmFyQkcpO1xcbn1cXG5cXG4udGFzay1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGh1bWJCRyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tc2Nyb2xsYmFyQkcpO1xcbn1cXG5cXG5idXR0b24uZGVsZXRlLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9JY29ucy9yZW1vdmUtaWNvbi5wbmcnKTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgYm9yZGVyOiAwO1xcbn1cXG5cXG5zcGFuLnRhc2stdGl0bGU6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0IHNwYW46aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tZWRpdW0tcHJpb3JpdHkge1xcbiAgICBjb2xvcjogeWVsbG93O1xcbn1cXG5cXG4uaGlnaC1wcmlvcml0eSB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi8qIFNjcm9sbGJhciBzdHlsZSBlbmRzICovXFxuXFxuLyogTXkgc3R5bGUgZW5kcyAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgaW5ib3hJbWcgZnJvbSAnLi9JY29ucy9pbmJveC1pY29uLnBuZyc7XG5pbXBvcnQgY2FsZW5kYXJJbWcgZnJvbSAnLi9JY29ucy9jYWxlbmRhci1pY29uLnBuZyc7XG5pbXBvcnQgaW1wSW1nIGZyb20gJy4vSWNvbnMvaW1wb3J0YW50LWljb24ucG5nJztcbmltcG9ydCB0b2RheUltZyBmcm9tICcuL0ljb25zL3RvZGF5LWljb24ucG5nJztcbmltcG9ydCB7IGdldEN1cnJlbnRJbmRleCwgbWFzdGVyQXJyYXkgfSBmcm9tICcuL21hc3Rlci1zdHJ1Y3R1cmUuanMnO1xuXG5jb25zdCBwcm9qZWN0QXJyYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnByb2plY3RBcnJheS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWFycmF5Jyk7XG5cbmNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1jb250YWluZXInKTtcblxuY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7IC8vIHRoaXMgaXMgaW4gZ2xvYmFsIHNjb3BlIG9ubHkgdG8gZXhwb3J0XG5cbmNvbnN0IHBhZ2VMb2FkID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50RGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGhlYWRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuXG4gICAgY29uc3QgbWFpbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG5cbiAgICBjb25zdCBmb290ZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcbiAgICBmb290ZXJFbGVtZW50LnRleHRDb250ZW50ID0gJ8KpIE1hZGUgYnkgRGFzVGFwYW4nO1xuXG4gICAgLy8gYWRkIHRvIERPTVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudERpdik7XG4gICAgY29udGVudERpdi5hcHBlbmQoaGVhZGVyRWxlbWVudCwgbWFpbkVsZW1lbnQsIGZvb3RlckVsZW1lbnQpO1xuXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xuXG4gICAgY29uc3QgbWlkc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1pZHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnbWlkc2VjdGlvbicpO1xuXG4gICAgLy8gYWRkIHRvIERPTVxuICAgIG1haW5FbGVtZW50LmFwcGVuZChzaWRlYmFyLCBtaWRzZWN0aW9uKTtcblxuICAgIGNvbnN0IHByb2plY3RIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdEhlYWRpbmcuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1oZWFkaW5nJyk7XG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBtYXN0ZXJBcnJheVtnZXRDdXJyZW50SW5kZXgoKV1bMF07XG4gICAgY29uc3QgdGFza1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdGFza1NwYW4udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xuICAgIGNvbnN0IG5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXdUYXNrQnV0dG9uLmlkID0gJ25ldy10YXNrJztcbiAgICBuZXdUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrJyk7XG5cbiAgICAvLyBjcmVhdGUgdGFzayBmb3JtXG4gICAgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgbmV3VGFza0Zvcm0uYWN0aW9uID0gJyc7XG4gICAgbmV3VGFza0Zvcm0ubWV0aG9kID0gJyc7XG4gICAgbmV3VGFza0Zvcm0uY2xhc3NMaXN0LmFkZCgndGFzay1mb3JtJywgJ2hpZGRlbicpO1xuXG4gICAgY29uc3QgZm9ybVJvd09uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Sb3dPbmUuY2xhc3NMaXN0LmFkZCgnZm9ybS1yb3cnKTtcbiAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RpdGxlJyk7XG4gICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZSA6J1xuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICB0aXRsZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgdGl0bGVJbnB1dC5pZCA9ICd0aXRsZSc7XG4gICAgdGl0bGVJbnB1dC5uYW1lID0gJ3RpdGxlJztcbiAgICBmb3JtUm93T25lLmFwcGVuZCh0aXRsZUxhYmVsLCB0aXRsZUlucHV0KTtcblxuICAgIGNvbnN0IGZvcm1Sb3dUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtUm93VHdvLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tcm93Jyk7XG4gICAgY29uc3QgdGV4dEFyZWFMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGV4dEFyZWFMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkZXRhaWxzJyk7XG4gICAgdGV4dEFyZWFMYWJlbC50ZXh0Q29udGVudCA9ICdEZXRhaWxzIDonO1xuICAgIGNvbnN0IHRleHRBcmVhSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIHRleHRBcmVhSW5wdXQubmFtZSA9ICdkZXRhaWxzJztcbiAgICB0ZXh0QXJlYUlucHV0LmlkID0gJ2RldGFpbHMnO1xuICAgIGZvcm1Sb3dUd28uYXBwZW5kKHRleHRBcmVhTGFiZWwsIHRleHRBcmVhSW5wdXQpO1xuXG4gICAgY29uc3QgZm9ybVJvd1RocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybVJvd1RocmVlLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tcm93Jyk7XG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSA6JztcbiAgICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5Jyk7XG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBwcmlvcml0eVNlbGVjdC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgIHByaW9yaXR5U2VsZWN0Lm5hbWUgPSAncHJpb3JpdHknO1xuICAgIHByaW9yaXR5U2VsZWN0LmlkID0gJ3ByaW9yaXR5JztcbiAgICBjb25zdCBvcHRpb25PbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb25PbmUudGV4dENvbnRlbnQgPSAnSGlnaCc7XG4gICAgb3B0aW9uT25lLnZhbHVlID0gJ2gnO1xuICAgIGNvbnN0IG9wdGlvblR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvblR3by50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuICAgIG9wdGlvblR3by52YWx1ZSA9ICdtJztcbiAgICBjb25zdCBvcHRpb25UaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvblRocmVlLnRleHRDb250ZW50ID0gJ0xvdyc7XG4gICAgb3B0aW9uVGhyZWUudmFsdWUgPSAnbCc7XG4gICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kKG9wdGlvbk9uZSwgb3B0aW9uVHdvLCBvcHRpb25UaHJlZSk7XG4gICAgZm9ybVJvd1RocmVlLmFwcGVuZChwcmlvcml0eUxhYmVsLCBwcmlvcml0eVNlbGVjdCk7XG5cbiAgICBjb25zdCBmb3JtUm93Rm91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Sb3dGb3VyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tcm93Jyk7XG4gICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRGF0ZSA6JztcbiAgICBkdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlLWRhdGUnKTtcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgIGRhdGVJbnB1dC5uYW1lID0gJ2R1ZS1kYXRlJztcbiAgICBkYXRlSW5wdXQuaWQgPSAnZHVlLWRhdGUnO1xuICAgIGZvcm1Sb3dGb3VyLmFwcGVuZChkdWVEYXRlTGFiZWwsIGRhdGVJbnB1dCk7XG5cbiAgICBjb25zdCBmb3JtUm93Rml2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Sb3dGaXZlLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tcm93Jyk7XG4gICAgY29uc3Qgc2F2ZVRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzYXZlVGFza0J1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgc2F2ZVRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgndGFzay1zdWJtaXQtYnV0dG9uJyk7XG4gICAgc2F2ZVRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnU2F2ZSc7XG4gICAgY29uc3QgY2FuY2VsVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbFRhc2tCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgIGNhbmNlbFRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgndGFzay1idXR0b24nKTtcbiAgICBjYW5jZWxUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgZm9ybVJvd0ZpdmUuYXBwZW5kKHNhdmVUYXNrQnV0dG9uLCBjYW5jZWxUYXNrQnV0dG9uKTtcblxuICAgIC8vIGFkZCB0byBET01cbiAgICBuZXdUYXNrRm9ybS5hcHBlbmQoZm9ybVJvd09uZSwgZm9ybVJvd1R3bywgZm9ybVJvd1RocmVlLCBmb3JtUm93Rm91ciwgZm9ybVJvd0ZpdmUpO1xuICAgIHByb2plY3RIZWFkaW5nLmFwcGVuZChwcm9qZWN0TmFtZSwgdGFza1NwYW4sIG5ld1Rhc2tCdXR0b24sIG5ld1Rhc2tGb3JtKTtcblxuICAgIC8vYWRkIHRvIERPTVxuICAgIG1pZHNlY3Rpb24uYXBwZW5kKHByb2plY3RIZWFkaW5nLCB0YXNrQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IHNpZGViYXJUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFyVG9wLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItdG9wJyk7XG5cbiAgICBjb25zdCBzaWRlYmFyQm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZWJhckJvdHRvbS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWJvdHRvbScpO1xuXG4gICAgLy8gYWRkIHRvIERPTVxuICAgIHNpZGViYXIuYXBwZW5kKHNpZGViYXJUb3AsIHNpZGViYXJCb3R0b20pO1xuXG4gICAgY29uc3QgaW5ib3hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmJveERpdi5jbGFzc0xpc3QuYWRkKCdpbmJveCcpO1xuXG4gICAgY29uc3QgdG9kYXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RheURpdi5jbGFzc0xpc3QuYWRkKCd0b2RheScpO1xuXG4gICAgY29uc3Qgc2V2ZW5EYXlzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2V2ZW5EYXlzRGl2LmNsYXNzTGlzdC5hZGQoJ3NldmVuLWRheXMnKTtcblxuICAgIGNvbnN0IGltcG9ydGFudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltcG9ydGFudERpdi5jbGFzc0xpc3QuYWRkKCdpbXBvcnRhbnQnKTtcblxuICAgIGNvbnN0IGluYm94SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGluYm94SWNvbi5jbGFzc0xpc3QuYWRkKCdpbmJveC1pY29uJyk7XG4gICAgaW5ib3hJY29uLnNyYyA9IGluYm94SW1nO1xuICAgIGNvbnN0IGluYm94TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBpbmJveExpbmsuY2xhc3NMaXN0LmFkZCgnaW5ib3gtbGluaycpO1xuICAgIGluYm94TGluay50ZXh0Q29udGVudCA9ICdJbmJveCc7XG5cbiAgICAvL2FkZCB0byBET01cbiAgICBpbmJveERpdi5hcHBlbmQoaW5ib3hJY29uLCBpbmJveExpbmspO1xuXG4gICAgY29uc3QgdG9kYXlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdG9kYXlJY29uLmNsYXNzTGlzdC5hZGQoJ3RvZGF5LWljb24nKTtcbiAgICB0b2RheUljb24uc3JjID0gdG9kYXlJbWc7XG5cbiAgICBjb25zdCB0b2RheUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgdG9kYXlMaW5rLmNsYXNzTGlzdC5hZGQoJ3RvZGF5LWxpbmsnKTtcbiAgICB0b2RheUxpbmsudGV4dENvbnRlbnQgPSAnVG9kYXknO1xuXG4gICAgLy8gYWRkIHRvIERPTVxuICAgIHRvZGF5RGl2LmFwcGVuZCh0b2RheUljb24sIHRvZGF5TGluayk7XG5cbiAgICBjb25zdCBjYWxlbmRhckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjYWxlbmRhckljb24uY2xhc3NMaXN0LmFkZCgnY2FsZW5kYXItaWNvbicpO1xuICAgIGNhbGVuZGFySWNvbi5zcmMgPSBjYWxlbmRhckltZztcblxuICAgIGNvbnN0IHNldmVuRGF5c0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgc2V2ZW5EYXlzTGluay5jbGFzc0xpc3QuYWRkKCdzZXZlbkRheXMtbGluaycpO1xuICAgIHNldmVuRGF5c0xpbmsudGV4dENvbnRlbnQgPSAnNyBEYXlzJztcblxuICAgIC8vIGFkZCB0byBET01cbiAgICBzZXZlbkRheXNEaXYuYXBwZW5kKGNhbGVuZGFySWNvbiwgc2V2ZW5EYXlzTGluayk7XG5cbiAgICBjb25zdCBpbXBvcnRhbnRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1wb3J0YW50SWNvbi5jbGFzc0xpc3QuYWRkKCdpbXAtaWNvbicpO1xuICAgIGltcG9ydGFudEljb24uc3JjID0gaW1wSW1nO1xuXG4gICAgY29uc3QgaW1wb3J0YW50TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBpbXBvcnRhbnRMaW5rLmNsYXNzTGlzdC5hZGQoJ2ltcC1saW5rJyk7XG4gICAgaW1wb3J0YW50TGluay50ZXh0Q29udGVudCA9ICdJbXBvcnRhbnQnO1xuXG4gICAgLy8gYWRkIHRvIERPTVxuICAgIGltcG9ydGFudERpdi5hcHBlbmQoaW1wb3J0YW50SWNvbiwgaW1wb3J0YW50TGluayk7XG5cbiAgICAvL2FkZCB0byBET01cbiAgICBzaWRlYmFyVG9wLmFwcGVuZChpbmJveERpdiwgdG9kYXlEaXYsIHNldmVuRGF5c0RpdiwgaW1wb3J0YW50RGl2KTtcblxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgbWFzdGVyQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAvLyAgICAgcHJvamVjdERpdi5pZCA9IGk7XG5cbiAgICAvLyAgICAgY29uc3QgbmFtZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgLy8gICAgIG5hbWVTcGFuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbmFtZScpO1xuICAgIC8vICAgICBuYW1lU3Bhbi50ZXh0Q29udGVudCA9IGAke21hc3RlckFycmF5W2ldWzBdfSBgICsgJ1Byb2plY3QnO1xuXG4gICAgLy8gICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAvLyAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWwtYnRuJyk7XG5cbiAgICAvLyAgICAgLy8gYWRkIHRvIERPTVxuICAgIC8vICAgICBwcm9qZWN0RGl2LmFwcGVuZChuYW1lU3BhbiwgZGVsZXRlUHJvamVjdEJ1dHRvbik7XG4gICAgLy8gICAgIHByb2plY3RBcnJheS5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgICAvLyB9XG5cbiAgICAvLyBjb25zdCBwcm9qZWN0T25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gcHJvamVjdE9uZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW9uZScpO1xuICAgIC8vIGNvbnN0IHByb2plY3RPbmVOYW1lU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAvLyBwcm9qZWN0T25lTmFtZVNwYW4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lJyk7XG4gICAgLy8gcHJvamVjdE9uZU5hbWVTcGFuLnRleHRDb250ZW50ID0gJ0RlZmF1bHQgUHJvamVjdCc7XG4gICAgLy8gY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIC8vIGRlbGV0ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsLWJ0bicpO1xuXG4gICAgLy8gLy8gYWRkIHRvIERPTVxuICAgIC8vIHByb2plY3RPbmUuYXBwZW5kKHByb2plY3RPbmVOYW1lU3BhbiwgZGVsZXRlUHJvamVjdEJ1dHRvbik7XG4gICAgLy8gcHJvamVjdEFycmF5LmFwcGVuZChwcm9qZWN0T25lKTtcblxuICAgIGNvbnN0IGFjdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFjdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdhY3Rpb24nKTtcblxuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC1wcm9qZWN0Jyk7XG5cbiAgICBjb25zdCBhY3Rpb25TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGFjdGlvblNwYW4uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvamVjdCcpO1xuICAgIGFjdGlvblNwYW4udGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnO1xuXG4gICAgY29uc3QgcHJvamVjdFBvcFVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHByb2plY3RQb3BVcC5hY3Rpb24gPSAnJztcbiAgICBwcm9qZWN0UG9wVXAubWV0aG9kID0gJyc7XG4gICAgcHJvamVjdFBvcFVwLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtcG9wLXVwJywgJ2hpZGRlbicpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2plY3ROYW1lSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICBwcm9qZWN0TmFtZUlucHV0LmlkID0gJ25hbWUnO1xuICAgIHByb2plY3ROYW1lSW5wdXQubmFtZSA9ICduYW1lJztcbiAgICBwcm9qZWN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gICAgY29uc3Qgc2F2ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzYXZlUHJvamVjdEJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgc2F2ZVByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnU2F2ZSc7XG4gICAgc2F2ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jaGFuZ2UnKTtcbiAgICBzYXZlUHJvamVjdEJ1dHRvbi5pZCA9ICdzYXZlLXByb2plY3QnO1xuICAgIGNvbnN0IGNhbmNlbFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxQcm9qZWN0QnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICBjYW5jZWxQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgY2FuY2VsUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXVuY2hhbmdlZCcpO1xuICAgIGNhbmNlbFByb2plY3RCdXR0b24uaWQgPSAnY2FuY2VsLXByb2plY3QnO1xuXG4gICAgLy8gYWRkIHRvIERPTVxuICAgIHByb2plY3RQb3BVcC5hcHBlbmQocHJvamVjdE5hbWVJbnB1dCwgc2F2ZVByb2plY3RCdXR0b24sIGNhbmNlbFByb2plY3RCdXR0b24pO1xuXG4gICAgLy8gYWRkIHRvIERPTVxuICAgIGFjdGlvbkRpdi5hcHBlbmQoYWRkUHJvamVjdEJ1dHRvbiwgYWN0aW9uU3BhbiwgcHJvamVjdFBvcFVwKTtcbiAgICBzaWRlYmFyQm90dG9tLmFwcGVuZChwcm9qZWN0QXJyYXksIGFjdGlvbkRpdik7XG59O1xuXG5leHBvcnQgeyBwcm9qZWN0QXJyYXksIHRhc2tDb250YWluZXIsIHByb2plY3ROYW1lLCBwYWdlTG9hZCB9OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgcGFnZUxvYWQgfSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IHByb2plY3RMb2FkIGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgdGFza0xvYWQgZnJvbSAnLi90YXNrLmpzJztcbmltcG9ydCBhcHBMb2dpYyBmcm9tICcuL2xvZ2ljLmpzJztcbmltcG9ydCB7IG1hc3RlckFycmF5IH0gZnJvbSAnLi9tYXN0ZXItc3RydWN0dXJlLmpzJztcblxucGFnZUxvYWQoKTtcbnByb2plY3RMb2FkKCk7XG50YXNrTG9hZChtYXN0ZXJBcnJheVswXSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgYXBwTG9naWMoZXZlbnQpLmhhbmRsZVRvZ2dsZSgpO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgIGFwcExvZ2ljKGV2ZW50KS5oYW5kbGVTdWJtaXNzaW9uKCk7XG59KTsiLCJpbXBvcnQgeyB0b2dnbGVJbmRleCwgZ2V0Q3VycmVudEluZGV4LCBtYXN0ZXJBcnJheSB9IGZyb20gXCIuL21hc3Rlci1zdHJ1Y3R1cmUuanNcIjtcbmltcG9ydCBwcm9qZWN0TG9hZCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgdGFza0xvYWQgZnJvbSBcIi4vdGFzay5qc1wiO1xuaW1wb3J0IHsgcHJvamVjdE5hbWUgfSBmcm9tIFwiLi9ob21lLmpzXCI7XG5cbmNvbnN0IGFwcExvZ2ljID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgX3RhcmdldE5vZGUgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgX2NsYXNzTmFtZSA9IF90YXJnZXROb2RlLmNsYXNzTmFtZTtcblxuICAgIGNvbnN0IF9mb3JtU3VibWlzc2lvbiA9IChjbGFzc05hbWUpID0+IHtcbiAgICAgICAgc3dpdGNoIChjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3Byb2plY3QtcG9wLXVwJzpcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIF90YXJnZXROb2RlLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBbXTtcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0LnB1c2goX3RhcmdldE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQudmFsdWUpO1xuICAgICAgICAgICAgICAgIG1hc3RlckFycmF5LnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgICAgICAgICAgX3RhcmdldE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICBwcm9qZWN0TG9hZCgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1hc3RlckFycmF5KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAndGFzay1mb3JtJzpcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIF90YXJnZXROb2RlLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBfdGFyZ2V0Tm9kZS5jaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdUYXNrID0ge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICcnLFxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxzOiBjb2xsZWN0aW9uWzFdLnF1ZXJ5U2VsZWN0b3IoJzpudGgtY2hpbGQoMiknKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGNvbGxlY3Rpb25bMF0ucXVlcnlTZWxlY3RvcignOm50aC1jaGlsZCgyKScpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlOiBjb2xsZWN0aW9uWzNdLnF1ZXJ5U2VsZWN0b3IoJzpudGgtY2hpbGQoMiknKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk6IGNvbGxlY3Rpb25bMl0ucXVlcnlTZWxlY3RvcignOm50aC1jaGlsZCgyKScpLnZhbHVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgbWFzdGVyQXJyYXlbZ2V0Q3VycmVudEluZGV4KCldLnB1c2gobmV3VGFzayk7XG4gICAgICAgICAgICAgICAgdGFza0xvYWQobWFzdGVyQXJyYXlbZ2V0Q3VycmVudEluZGV4KCldKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtYXN0ZXJBcnJheVtnZXRDdXJyZW50SW5kZXgoKV0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdlZGl0LWRldGFpbHMnOlxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgX3RhcmdldE5vZGUuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRUYXNrSW5kZXggPSBOdW1iZXIoX3RhcmdldE5vZGUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrQ29sbGVjdGlvbiA9IF90YXJnZXROb2RlLmNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRUYXNrSW5kZXgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1hc3RlckFycmF5W2dldEN1cnJlbnRJbmRleCgpXVtjdXJyZW50VGFza0luZGV4XSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGFza0NvbGxlY3Rpb24pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRlZFRhc2sgPSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogJycsXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbHM6IHRhc2tDb2xsZWN0aW9uWzFdLnF1ZXJ5U2VsZWN0b3IoJzpudGgtY2hpbGQoMiknKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRhc2tDb2xsZWN0aW9uWzBdLnF1ZXJ5U2VsZWN0b3IoJzpudGgtY2hpbGQoMiknKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZTogdGFza0NvbGxlY3Rpb25bMF0ucXVlcnlTZWxlY3RvcignOm50aC1jaGlsZCg0KScpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogdGFza0NvbGxlY3Rpb25bMV0ucXVlcnlTZWxlY3RvcignOm50aC1jaGlsZCg0KScpLnZhbHVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgbWFzdGVyQXJyYXlbZ2V0Q3VycmVudEluZGV4KCldW2N1cnJlbnRUYXNrSW5kZXhdID0gZWRpdGVkVGFzaztcbiAgICAgICAgICAgICAgICB0YXNrTG9hZChtYXN0ZXJBcnJheVtnZXRDdXJyZW50SW5kZXgoKV0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1hc3RlckFycmF5W2dldEN1cnJlbnRJbmRleCgpXVtjdXJyZW50VGFza0luZGV4XSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgX3RvZ2dsZSA9IChjbGFzc05hbWUpID0+IHtcblxuICAgICAgICBzd2l0Y2ggKGNsYXNzTmFtZSkge1xuXG4gICAgICAgICAgICBjYXNlICd0YXNrLXRpdGxlJzpcbiAgICAgICAgICAgICAgICAvLyBkb2VzIG5vdCB1c2UgdG9nZ2xlIGJlY2F1c2UgZGlzcGxheTogZmxleCAmIG5vbmUgZG9lc24ndCBjbyBleGlzdFxuICAgICAgICAgICAgICAgIF90YXJnZXROb2RlLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYnJpZWYtbGF5b3V0Jyk7XG4gICAgICAgICAgICAgICAgX3RhcmdldE5vZGUucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBfdGFyZ2V0Tm9kZS5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gY2FzZSAnc2F2ZSc6XG4gICAgICAgICAgICAvLyAgICAgX3RhcmdldE5vZGUucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIC8vICAgICBfdGFyZ2V0Tm9kZS5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAvLyAgICAgX3RhcmdldE5vZGUucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2JyaWVmLWxheW91dCcpO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdjYW5jZWwtdGFzayc6XG4gICAgICAgICAgICAgICAgX3RhcmdldE5vZGUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBfdGFyZ2V0Tm9kZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2JyaWVmLWxheW91dCcpO1xuICAgICAgICAgICAgICAgIF90YXJnZXROb2RlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdhZGQtcHJvamVjdCc6XG4gICAgICAgICAgICAgICAgX3RhcmdldE5vZGUucGFyZW50RWxlbWVudC5sYXN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdkZWwtYnRuJzpcbiAgICAgICAgICAgICAgICBsZXQgZHVtbXlBcnJheSA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0SWQgPSBfdGFyZ2V0Tm9kZS5wYXJlbnRFbGVtZW50LmlkO1xuICAgICAgICAgICAgICAgIGR1bW15QXJyYXkgPSBtYXN0ZXJBcnJheS5maWx0ZXIoKGVsZW1lbnQpID0+IG1hc3RlckFycmF5LmluZGV4T2YoZWxlbWVudCkudG9TdHJpbmcoKSAhPSBwcm9qZWN0SWQpO1xuICAgICAgICAgICAgICAgIG1hc3RlckFycmF5Lmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgbWFzdGVyQXJyYXkucHVzaCguLi5kdW1teUFycmF5KTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TG9hZCgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1hc3RlckFycmF5KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAncHJvamVjdC11bmNoYW5nZWQnOlxuICAgICAgICAgICAgICAgIF90YXJnZXROb2RlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcucHJldmlvdXNFbGVtZW50U2libGluZy52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIF90YXJnZXROb2RlLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ25ldy10YXNrJzpcbiAgICAgICAgICAgICAgICBfdGFyZ2V0Tm9kZS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ3Rhc2stYnV0dG9uJzpcbiAgICAgICAgICAgICAgICBfdGFyZ2V0Tm9kZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ3Byb2plY3QtbmFtZSc6XG4gICAgICAgICAgICAgICAgdG9nZ2xlSW5kZXgoTnVtYmVyKF90YXJnZXROb2RlLnBhcmVudEVsZW1lbnQuaWQpKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IG1hc3RlckFycmF5W2dldEN1cnJlbnRJbmRleCgpXVswXTtcbiAgICAgICAgICAgICAgICB0YXNrTG9hZChtYXN0ZXJBcnJheVtnZXRDdXJyZW50SW5kZXgoKV0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdkZWxldGUtYnV0dG9uJzpcbiAgICAgICAgICAgICAgICBsZXQgZHVtbXkgPSBbXTtcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0ZWRQcm9qZWN0ID0gbWFzdGVyQXJyYXlbZ2V0Q3VycmVudEluZGV4KCldO1xuICAgICAgICAgICAgICAgIGxldCBwcm9qSWQgPSBfdGFyZ2V0Tm9kZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQ7XG4gICAgICAgICAgICAgICAgZHVtbXkgPSB0YXJnZXRlZFByb2plY3QuZmlsdGVyKChlbGVtZW50KSA9PiB0YXJnZXRlZFByb2plY3QuaW5kZXhPZihlbGVtZW50KS50b1N0cmluZygpICE9IHByb2pJZCk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ZWRQcm9qZWN0Lmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ZWRQcm9qZWN0LnB1c2goLi4uZHVtbXkpO1xuICAgICAgICAgICAgICAgIHRhc2tMb2FkKHRhcmdldGVkUHJvamVjdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKCkgPT4ge1xuICAgICAgICBfdG9nZ2xlKF9jbGFzc05hbWUuc3BsaXQoJyAnKVswXSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pc3Npb24gPSAoKSA9PiB7XG4gICAgICAgIGxldCBfc2FuaXRpemVkQ2xhc3NOYW1lID0gX2NsYXNzTmFtZS5zcGxpdCgnICcpWzBdO1xuICAgICAgICBfZm9ybVN1Ym1pc3Npb24oX3Nhbml0aXplZENsYXNzTmFtZSk7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGhhbmRsZVRvZ2dsZSwgaGFuZGxlU3VibWlzc2lvbiB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwTG9naWM7IiwibGV0IF9jdXJyZW50UHJvamVjdEluZGV4ID0gMDtcblxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBbXG4gICAgJ0RlZmF1bHQnLFxuXTtcblxuY29uc3QgX3NldFByb2plY3RJbmRleCA9IChuZXdJbmRleCkgPT4ge1xuICAgIF9jdXJyZW50UHJvamVjdEluZGV4ID0gbmV3SW5kZXg7XG59O1xuXG5jb25zdCB0b2dnbGVJbmRleCA9IChuZXdJbmRleCkgPT4ge1xuICAgIF9zZXRQcm9qZWN0SW5kZXgobmV3SW5kZXgpO1xufTtcblxuY29uc3QgZ2V0Q3VycmVudEluZGV4ID0gKCkgPT4ge1xuICAgIHJldHVybiBfY3VycmVudFByb2plY3RJbmRleDtcbn07XG5cbmNvbnN0IG1hc3RlckFycmF5ID0gW2RlZmF1bHRQcm9qZWN0LF07XG5cbmV4cG9ydCB7IHRvZ2dsZUluZGV4LCBnZXRDdXJyZW50SW5kZXgsIG1hc3RlckFycmF5IH07IiwiaW1wb3J0IHsgbWFzdGVyQXJyYXkgfSBmcm9tIFwiLi9tYXN0ZXItc3RydWN0dXJlLmpzXCI7XG5pbXBvcnQgeyBwcm9qZWN0QXJyYXkgfSBmcm9tIFwiLi9ob21lLmpzXCI7XG5cbi8vIGNvbnNvbGUubG9nKG1hc3RlckFycmF5KTtcbmNvbnN0IHByb2plY3RMb2FkID0gKCkgPT4ge1xuICAgIC8vIGNsZWFuIGRpdiBcbiAgICB3aGlsZSAocHJvamVjdEFycmF5Lmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgcHJvamVjdEFycmF5LnJlbW92ZUNoaWxkKHByb2plY3RBcnJheS5sYXN0RWxlbWVudENoaWxkKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hc3RlckFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgICAgIHByb2plY3REaXYuaWQgPSBpO1xuXG4gICAgICAgIGNvbnN0IG5hbWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBuYW1lU3Bhbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKTtcbiAgICAgICAgbmFtZVNwYW4udGV4dENvbnRlbnQgPSBgJHttYXN0ZXJBcnJheVtpXVswXX0gYCArICdQcm9qZWN0JztcblxuICAgICAgICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsLWJ0bicpO1xuXG4gICAgICAgIC8vIGFkZCB0byBET01cbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmQobmFtZVNwYW4sIGRlbGV0ZVByb2plY3RCdXR0b24pO1xuICAgICAgICBwcm9qZWN0QXJyYXkuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdExvYWQ7IiwiaW1wb3J0IHsgdGFza0NvbnRhaW5lciB9IGZyb20gXCIuL2hvbWUuanNcIjtcblxuY29uc3QgdGFza0xvYWQgPSAoY3VycmVudFByb2plY3QpID0+IHtcbiAgICB3aGlsZSAodGFza0NvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgICAgIHRhc2tDb250YWluZXIucmVtb3ZlQ2hpbGQodGFza0NvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKTtcbiAgICB9O1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBjdXJyZW50UHJvamVjdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tEaXYuaWQgPSBpO1xuICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGl2Jyk7XG5cbiAgICAgICAgY29uc3QgYnJpZWZJbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJyaWVmSW5mb0Rpdi5jbGFzc0xpc3QuYWRkKCdicmllZi1pbmZvJywgJ2JyaWVmLWxheW91dCcpO1xuXG4gICAgICAgIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgIGNvbnN0IHRpdGxlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdGl0bGVTcGFuLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTtcbiAgICAgICAgdGl0bGVTcGFuLnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3RbaV1bJ3RpdGxlJ107XG4gICAgICAgIGNvbnN0IGRhdGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBkYXRlU3Bhbi5jbGFzc0xpc3QuYWRkKCdkdWUtZGF0ZScpO1xuICAgICAgICBkYXRlU3Bhbi50ZXh0Q29udGVudCA9IGN1cnJlbnRQcm9qZWN0W2ldWydkdWVEYXRlJ107XG4gICAgICAgIGNvbnN0IGRlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ1dHRvbicpO1xuXG4gICAgICAgIGlmIChjdXJyZW50UHJvamVjdFtpXVsncHJpb3JpdHknXSA9PT0gJ2gnKSB7XG4gICAgICAgICAgICB0aXRsZVNwYW4uY2xhc3NMaXN0LmFkZCgnaGlnaC1wcmlvcml0eScpXG4gICAgICAgICAgICBkYXRlU3Bhbi5jbGFzc0xpc3QuYWRkKCdoaWdoLXByaW9yaXR5JylcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50UHJvamVjdFtpXVsncHJpb3JpdHknXSA9PT0gJ20nKSB7XG4gICAgICAgICAgICB0aXRsZVNwYW4uY2xhc3NMaXN0LmFkZCgnbWVkaXVtLXByaW9yaXR5JylcbiAgICAgICAgICAgIGRhdGVTcGFuLmNsYXNzTGlzdC5hZGQoJ21lZGl1bS1wcmlvcml0eScpXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZGVtb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZW1vQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbW8tYnV0dG9uJyk7XG4gICAgICAgIGRlbW9CdXR0b24udGV4dENvbnRlbnQgPSAnRGVtbyc7XG5cbiAgICAgICAgLy8gYWRkIHRvIERPTVxuICAgICAgICBicmllZkluZm9EaXYuYXBwZW5kKGNoZWNrQm94LCB0aXRsZVNwYW4sIGRhdGVTcGFuLCBkZWxCdXR0b24pO1xuXG4gICAgICAgIGNvbnN0IHJhd0luZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcmF3SW5mb0Rpdi5jbGFzc0xpc3QuYWRkKCdyYXctaW5mbycsICdoaWRkZW4nKTtcblxuICAgICAgICAvLyBzdGFydCBlZGl0IGZvcm1cbiAgICAgICAgY29uc3QgZm9ybUVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGZvcm1FZGl0LmFjdGlvbiA9ICcnO1xuICAgICAgICBmb3JtRWRpdC5tZXRob2QgPSAnJztcbiAgICAgICAgZm9ybUVkaXQuY2xhc3NMaXN0LmFkZCgnZWRpdC1kZXRhaWxzJyk7XG5cbiAgICAgICAgY29uc3QgZm9ybVJvd09uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb3JtUm93T25lLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tcm93Jyk7XG4gICAgICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RpdGxlJyk7XG4gICAgICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnVGl0bGUgOidcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgdGl0bGVJbnB1dC5pZCA9ICd0aXRsZSc7XG4gICAgICAgIHRpdGxlSW5wdXQubmFtZSA9ICd0aXRsZSc7XG4gICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSBjdXJyZW50UHJvamVjdFtpXVsndGl0bGUnXTtcbiAgICAgICAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ2RhdGUtZGl2Jyk7XG4gICAgICAgIGNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEYXRlIDonO1xuICAgICAgICBkdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlLWRhdGUnKTtcbiAgICAgICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgICAgIGRhdGVJbnB1dC5uYW1lID0gJ2R1ZS1kYXRlJztcbiAgICAgICAgZGF0ZUlucHV0LmlkID0gJ2R1ZS1kYXRlJztcbiAgICAgICAgZGF0ZUlucHV0LnZhbHVlID0gY3VycmVudFByb2plY3RbaV1bJ2R1ZURhdGUnXTtcblxuICAgICAgICAvLyBhZGQgdG8gRE9NXG4gICAgICAgIGZvcm1Sb3dPbmUuYXBwZW5kKHRpdGxlTGFiZWwsIHRpdGxlSW5wdXQsIGR1ZURhdGVMYWJlbCwgZGF0ZUlucHV0KTtcblxuICAgICAgICBjb25zdCBmb3JtUm93VHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcm1Sb3dUd28uY2xhc3NMaXN0LmFkZCgnZm9ybS1yb3cnKTtcbiAgICAgICAgY29uc3QgdGV4dEFyZWFMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHRleHRBcmVhTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGV0YWlscycpO1xuICAgICAgICB0ZXh0QXJlYUxhYmVsLnRleHRDb250ZW50ID0gJ0RldGFpbHMgOic7XG4gICAgICAgIGNvbnN0IHRleHRBcmVhSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICB0ZXh0QXJlYUlucHV0Lm5hbWUgPSAnZGV0YWlscyc7XG4gICAgICAgIHRleHRBcmVhSW5wdXQuaWQgPSAnZGV0YWlscyc7XG4gICAgICAgIHRleHRBcmVhSW5wdXQudGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdFtpXVsnZGV0YWlscyddO1xuICAgICAgICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1kaXYnKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHkgOic7XG4gICAgICAgIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHknKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgcHJpb3JpdHlTZWxlY3QubmFtZSA9ICdwcmlvcml0eSc7XG4gICAgICAgIHByaW9yaXR5U2VsZWN0LmlkID0gJ3ByaW9yaXR5JztcbiAgICAgICAgY29uc3Qgb3B0aW9uT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbk9uZS50ZXh0Q29udGVudCA9ICdIaWdoJztcbiAgICAgICAgb3B0aW9uT25lLnZhbHVlID0gJ2gnO1xuICAgICAgICBjb25zdCBvcHRpb25Ud28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uVHdvLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG4gICAgICAgIG9wdGlvblR3by52YWx1ZSA9ICdtJztcbiAgICAgICAgY29uc3Qgb3B0aW9uVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uVGhyZWUudGV4dENvbnRlbnQgPSAnTG93JztcbiAgICAgICAgb3B0aW9uVGhyZWUudmFsdWUgPSAnbCc7XG5cbiAgICAgICAgLy8gYWRkIHRvIERPTVxuICAgICAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmQob3B0aW9uT25lLCBvcHRpb25Ud28sIG9wdGlvblRocmVlKTtcbiAgICAgICAgaWYoY3VycmVudFByb2plY3RbaV1bJ3ByaW9yaXR5J10gPT09ICdoJykgcHJpb3JpdHlTZWxlY3QudmFsdWUgPSBvcHRpb25PbmUudmFsdWVcbiAgICAgICAgZWxzZSBpZihjdXJyZW50UHJvamVjdFtpXVsncHJpb3JpdHknXSA9PT0gJ20nKSBwcmlvcml0eVNlbGVjdC52YWx1ZSA9IG9wdGlvblR3by52YWx1ZVxuICAgICAgICBlbHNlIGlmKGN1cnJlbnRQcm9qZWN0W2ldWydwcmlvcml0eSddID09PSAnbCcpIHByaW9yaXR5U2VsZWN0LnZhbHVlID0gb3B0aW9uVGhyZWUudmFsdWVcbiAgICAgICAgZm9ybVJvd1R3by5hcHBlbmQodGV4dEFyZWFMYWJlbCwgdGV4dEFyZWFJbnB1dCwgcHJpb3JpdHlMYWJlbCwgcHJpb3JpdHlTZWxlY3QpO1xuXG4gICAgICAgIGNvbnN0IGZvcm1Sb3dUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb3JtUm93VGhyZWUuY2xhc3NMaXN0LmFkZCgnZm9ybS1yb3cnKTtcbiAgICAgICAgY29uc3Qgc2F2ZUVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc2F2ZUVkaXRCdXR0b24udHlwZSA9ICdzdWJtaXQnO1xuICAgICAgICBzYXZlRWRpdEJ1dHRvbi5pZCA9ICdzYXZlLWVkaXQnO1xuICAgICAgICBzYXZlRWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTYXZlJztcbiAgICAgICAgY29uc3QgY2FuY2VsRWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjYW5jZWxFZGl0QnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgY2FuY2VsRWRpdEJ1dHRvbi5pZCA9ICdjYW5jZWwtZWRpdCc7XG4gICAgICAgIGNhbmNlbEVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2FuY2VsLXRhc2snKTtcbiAgICAgICAgY2FuY2VsRWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuXG4gICAgICAgIC8vIGFkZCB0byBET01cbiAgICAgICAgZm9ybVJvd1RocmVlLmFwcGVuZChzYXZlRWRpdEJ1dHRvbiwgY2FuY2VsRWRpdEJ1dHRvbik7XG5cbiAgICAgICAgLy8gYWRkIHRvIERPTVxuICAgICAgICBmb3JtRWRpdC5hcHBlbmQoZm9ybVJvd09uZSwgZm9ybVJvd1R3bywgZm9ybVJvd1RocmVlKTtcbiAgICAgICAgcmF3SW5mb0Rpdi5hcHBlbmQoZm9ybUVkaXQpO1xuICAgICAgICAvLyBlbmQgZWRpdCBmb3JtXG5cbiAgICAgICAgLy8gYWRkIHRvIERPTVxuICAgICAgICB0YXNrRGl2LmFwcGVuZChicmllZkluZm9EaXYsIHJhd0luZm9EaXYpO1xuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZCh0YXNrRGl2KTtcbiAgICB9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRhc2tMb2FkOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==