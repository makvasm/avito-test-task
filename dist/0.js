(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/Modal.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/Modal.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"#modal-wrapper {\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    background-color: rgba(41, 41, 41, 0.8);\\r\\n}\\r\\n\\r\\n.modal {\\r\\n    position: relative;\\r\\n    width: 80%;\\r\\n\\r\\n    padding: 30px;\\r\\n    gap: 10px;\\r\\n    margin: auto;\\r\\n    background-color: white;\\r\\n\\r\\n\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(2, 1fr);\\r\\n}\\r\\n\\r\\nform {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\nform > * {\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    max-height: 70px;\\r\\n    padding: 10px;\\r\\n\\r\\n    margin: 5px 0;\\r\\n    border-radius: 5px;\\r\\n    border: 1px solid black;\\r\\n    font-size: 17px;\\r\\n\\r\\n}\\r\\n\\r\\nform > button {\\r\\n    background-color: #4997d0;\\r\\n    color: white;\\r\\n    font-weight: 100;\\r\\n    font-size: 1.3em;\\r\\n}\\r\\n\\r\\n.modal-comments {\\r\\n    overflow-y: auto;\\r\\n    padding: 15px;\\r\\n}\\r\\n\\r\\n#modal-close {\\r\\n    position: absolute;\\r\\n    right: 0;\\r\\n    top: 0;\\r\\n    padding: 10px;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.placeholder {\\r\\n    min-height: 300px;\\r\\n}\\r\\n\\r\\n.modal > form, .modal-comments, .modal-img {\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n\\r\\n@media (max-width: 700px) {\\r\\n    .modal {\\r\\n        padding: 0;\\r\\n        position: fixed;\\r\\n        width: 100%;\\r\\n        max-height: 100%;\\r\\n        max-width: 700px;\\r\\n        min-width: 0;\\r\\n        height: 100%;\\r\\n\\r\\n        grid-template-columns: 100%;\\r\\n    }\\r\\n    .modal > form {\\r\\n        padding: 15px;\\r\\n    }\\r\\n\\r\\n    .placeholder {\\r\\n        min-height: 0;\\r\\n    }\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n@keyframes fade-in {\\r\\n    0%{\\r\\n        opacity: 0;\\r\\n        transform: scale(1.1);\\r\\n    }\\r\\n    100% {\\r\\n        opacity: 1;\\r\\n        transform: scale(1);\\r\\n    }\\r\\n}\\r\\n\\r\\n@keyframes fade-out {\\r\\n    100% {\\r\\n        transform: scale(0.3);\\r\\n        opacity: 0;\\r\\n    }\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles/Modal.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/components/Comment.js":
/*!***********************************!*\
  !*** ./src/components/Comment.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Comment; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Comment(_ref) {\n  var text = _ref.text,\n      date = _ref.date;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"comment-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"comment-date\"\n  }, date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"comment-text\"\n  }, text));\n}\n\n//# sourceURL=webpack:///./src/components/Comment.js?");

/***/ }),

/***/ "./src/components/Input.js":
/*!*********************************!*\
  !*** ./src/components/Input.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Input; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Input() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    required: true,\n    placeholder: \"\\u0412\\u0430\\u0448\\u0435 \\u0438\\u043C\\u044F\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    required: true,\n    placeholder: \"\\u0412\\u0430\\u0448 \\u043A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0439\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", null, \"\\u041E\\u0441\\u0442\\u0430\\u0432\\u0438\\u0442\\u044C \\u043A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0439\"));\n}\n\n//# sourceURL=webpack:///./src/components/Input.js?");

/***/ }),

/***/ "./src/components/Modal.js":
/*!*********************************!*\
  !*** ./src/components/Modal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Modal; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input */ \"./src/components/Input.js\");\n/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Comment */ \"./src/components/Comment.js\");\n/* harmony import */ var _styles_Modal_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Modal.css */ \"./src/styles/Modal.css\");\n/* harmony import */ var _styles_Modal_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Modal_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nfunction Modal() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      visible = _useState2[0],\n      toggleVisible = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState4 = _slicedToArray(_useState3, 2),\n      info = _useState4[0],\n      changeInfo = _useState4[1];\n\n  var modalRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"useHistory\"])();\n  var id = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"useParams\"])().img;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    toggleVisible(true);\n    fetch(\"https://boiling-refuge-66454.herokuapp.com/images/\".concat(id)).then(function (res) {\n      if (!res.ok) return console.log(\"Error\");\n      res.json().then(function (data) {\n        return changeInfo(data);\n      });\n    });\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"modal-wrapper\",\n    onClick: function onClick(event) {\n      if (event.target.id === \"modal-wrapper\" || event.target.id === \"modal-close\") {\n        toggleVisible(false);\n      }\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    ref: modalRef,\n    className: \"modal\",\n    style: {\n      animation: \"\".concat(visible ? \"fade-in\" : \"fade-out\", \" 0.25s\")\n    },\n    onAnimationEnd: function onAnimationEnd() {\n      if (!visible) history.goBack();\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"modal-close\"\n  }, \"X\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"placeholder\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"modal-img\",\n    src: info === null || info === void 0 ? void 0 : info.url\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"modal-comments\"\n  }, info === null || info === void 0 ? void 0 : info.comments.map(function (comment, i) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Comment__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      key: i,\n      text: comment.text,\n      date: new Date(comment.date).toUTCString()\n    });\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)));\n}\n\n//# sourceURL=webpack:///./src/components/Modal.js?");

/***/ }),

/***/ "./src/styles/Modal.css":
/*!******************************!*\
  !*** ./src/styles/Modal.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./Modal.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/Modal.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/styles/Modal.css?");

/***/ })

}]);