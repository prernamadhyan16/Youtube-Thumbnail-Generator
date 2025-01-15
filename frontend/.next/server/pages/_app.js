"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap/Container":
/*!********************************************!*\
  !*** external "react-bootstrap/Container" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("react-bootstrap/Container");

/***/ }),

/***/ "react-bootstrap/Nav":
/*!**************************************!*\
  !*** external "react-bootstrap/Nav" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("react-bootstrap/Nav");

/***/ }),

/***/ "react-bootstrap/Navbar":
/*!*****************************************!*\
  !*** external "react-bootstrap/Navbar" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("react-bootstrap/Navbar");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Navbar */ \"react-bootstrap/Navbar\");\n/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Nav */ \"react-bootstrap/Nav\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Container */ \"react-bootstrap/Container\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n\n\n\n\n\n\nconst Header = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__, {\n        bg: \"light\",\n        expand: \"lg\",\n        fixed: \"top\",\n        className: \"shadow-sm\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__.Brand, {\n                    href: \"/\",\n                    style: {\n                        fontWeight: \"bold\",\n                        color: \"#343a40\"\n                    },\n                    children: \"MyWebsite\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\Projects\\\\GenThumb\\\\frontend\\\\components\\\\Header.js\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__.Toggle, {\n                    \"aria-controls\": \"navbar-nav\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\Projects\\\\GenThumb\\\\frontend\\\\components\\\\Header.js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__.Collapse, {\n                    id: \"navbar-nav\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__, {\n                        className: \"ms-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                                href: \"/\",\n                                active: router.pathname === \"/\",\n                                style: {\n                                    textDecoration: router.pathname === \"/\" ? \"underline\" : \"none\",\n                                    fontWeight: router.pathname === \"/\" ? \"bold\" : \"normal\",\n                                    color: \"#343a40\"\n                                },\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Projects\\\\GenThumb\\\\frontend\\\\components\\\\Header.js\",\n                                lineNumber: 21,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                                href: \"/ideas\",\n                                active: router.pathname === \"/ideas\",\n                                style: {\n                                    textDecoration: router.pathname === \"/ideas\" ? \"underline\" : \"none\",\n                                    fontWeight: router.pathname === \"/ideas\" ? \"bold\" : \"normal\",\n                                    color: \"#343a40\"\n                                },\n                                children: \"Ideas\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Projects\\\\GenThumb\\\\frontend\\\\components\\\\Header.js\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                                href: \"/about\",\n                                active: router.pathname === \"/about\",\n                                style: {\n                                    textDecoration: router.pathname === \"/about\" ? \"underline\" : \"none\",\n                                    fontWeight: router.pathname === \"/about\" ? \"bold\" : \"normal\",\n                                    color: \"#343a40\"\n                                },\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Projects\\\\GenThumb\\\\frontend\\\\components\\\\Header.js\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                                href: \"/contact\",\n                                active: router.pathname === \"/contact\",\n                                style: {\n                                    textDecoration: router.pathname === \"/contact\" ? \"underline\" : \"none\",\n                                    fontWeight: router.pathname === \"/contact\" ? \"bold\" : \"normal\",\n                                    color: \"#343a40\"\n                                },\n                                children: \"Contact\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Projects\\\\GenThumb\\\\frontend\\\\components\\\\Header.js\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Projects\\\\GenThumb\\\\frontend\\\\components\\\\Header.js\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"E:\\\\Projects\\\\GenThumb\\\\frontend\\\\components\\\\Header.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\Projects\\\\GenThumb\\\\frontend\\\\components\\\\Header.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"E:\\\\Projects\\\\GenThumb\\\\frontend\\\\components\\\\Header.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwQjtBQUMrQjtBQUFBO0FBQUE7QUFDakI7QUFFeEMsTUFBTUssU0FBUztJQUNiLE1BQU1DLFNBQVNGLHNEQUFTQTtJQUV4QixxQkFDRSw4REFBQ0gsbURBQU1BO1FBQUNNLElBQUc7UUFBUUMsUUFBTztRQUFLQyxPQUFNO1FBQU1DLFdBQVU7a0JBQ25ELDRFQUFDUCxzREFBU0E7OzhCQUVSLDhEQUFDRix5REFBWTtvQkFBQ1csTUFBSztvQkFBSUMsT0FBTzt3QkFBRUMsWUFBWTt3QkFBUUMsT0FBTztvQkFBVTs4QkFBRzs7Ozs7OzhCQUt4RSw4REFBQ2QsMERBQWE7b0JBQUNnQixpQkFBYzs7Ozs7OzhCQUM3Qiw4REFBQ2hCLDREQUFlO29CQUFDa0IsSUFBRzs4QkFDbEIsNEVBQUNqQixnREFBR0E7d0JBQUNRLFdBQVU7OzBDQUViLDhEQUFDUixxREFBUTtnQ0FDUFUsTUFBSztnQ0FDTFMsUUFBUWYsT0FBT2dCLFFBQVEsS0FBSztnQ0FDNUJULE9BQU87b0NBQ0xVLGdCQUFnQmpCLE9BQU9nQixRQUFRLEtBQUssTUFBTSxjQUFjO29DQUN4RFIsWUFBWVIsT0FBT2dCLFFBQVEsS0FBSyxNQUFNLFNBQVM7b0NBQy9DUCxPQUFPO2dDQUNUOzBDQUNEOzs7Ozs7MENBR0QsOERBQUNiLHFEQUFRO2dDQUNQVSxNQUFLO2dDQUNMUyxRQUFRZixPQUFPZ0IsUUFBUSxLQUFLO2dDQUM1QlQsT0FBTztvQ0FDTFUsZ0JBQWdCakIsT0FBT2dCLFFBQVEsS0FBSyxXQUFXLGNBQWM7b0NBQzdEUixZQUFZUixPQUFPZ0IsUUFBUSxLQUFLLFdBQVcsU0FBUztvQ0FDcERQLE9BQU87Z0NBQ1Q7MENBQ0Q7Ozs7OzswQ0FHRCw4REFBQ2IscURBQVE7Z0NBQ1BVLE1BQUs7Z0NBQ0xTLFFBQVFmLE9BQU9nQixRQUFRLEtBQUs7Z0NBQzVCVCxPQUFPO29DQUNMVSxnQkFBZ0JqQixPQUFPZ0IsUUFBUSxLQUFLLFdBQVcsY0FBYztvQ0FDN0RSLFlBQVlSLE9BQU9nQixRQUFRLEtBQUssV0FBVyxTQUFTO29DQUNwRFAsT0FBTztnQ0FDVDswQ0FDRDs7Ozs7OzBDQUdELDhEQUFDYixxREFBUTtnQ0FDUFUsTUFBSztnQ0FDTFMsUUFBUWYsT0FBT2dCLFFBQVEsS0FBSztnQ0FDNUJULE9BQU87b0NBQ0xVLGdCQUFnQmpCLE9BQU9nQixRQUFRLEtBQUssYUFBYSxjQUFjO29DQUMvRFIsWUFBWVIsT0FBT2dCLFFBQVEsS0FBSyxhQUFhLFNBQVM7b0NBQ3REUCxPQUFPO2dDQUNUOzBDQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWI7QUFFQSxpRUFBZVYsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dlbi10aHVtYi1mcm9udGVuZC8uL2NvbXBvbmVudHMvSGVhZGVyLmpzPzRkYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2YmFyLCBOYXYsIENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxOYXZiYXIgYmc9XCJsaWdodFwiIGV4cGFuZD1cImxnXCIgZml4ZWQ9XCJ0b3BcIiBjbGFzc05hbWU9XCJzaGFkb3ctc21cIj5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICB7LyogTG9nbyAqL31cclxuICAgICAgICA8TmF2YmFyLkJyYW5kIGhyZWY9XCIvXCIgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBjb2xvcjogJyMzNDNhNDAnIH19PlxyXG4gICAgICAgICAgTXlXZWJzaXRlXHJcbiAgICAgICAgPC9OYXZiYXIuQnJhbmQ+XHJcblxyXG4gICAgICAgIHsvKiBUb2dnbGUgZm9yIE1vYmlsZSAqL31cclxuICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwibmF2YmFyLW5hdlwiIC8+XHJcbiAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cIm5hdmJhci1uYXZcIj5cclxuICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXMtYXV0b1wiPlxyXG4gICAgICAgICAgICB7LyogTmF2aWdhdGlvbiBMaW5rcyAqL31cclxuICAgICAgICAgICAgPE5hdi5MaW5rXHJcbiAgICAgICAgICAgICAgaHJlZj1cIi9cIlxyXG4gICAgICAgICAgICAgIGFjdGl2ZT17cm91dGVyLnBhdGhuYW1lID09PSAnLyd9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiByb3V0ZXIucGF0aG5hbWUgPT09ICcvJyA/ICd1bmRlcmxpbmUnIDogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogcm91dGVyLnBhdGhuYW1lID09PSAnLycgPyAnYm9sZCcgOiAnbm9ybWFsJyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnIzM0M2E0MCcsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgPE5hdi5MaW5rXHJcbiAgICAgICAgICAgICAgaHJlZj1cIi9pZGVhc1wiXHJcbiAgICAgICAgICAgICAgYWN0aXZlPXtyb3V0ZXIucGF0aG5hbWUgPT09ICcvaWRlYXMnfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogcm91dGVyLnBhdGhuYW1lID09PSAnL2lkZWFzJyA/ICd1bmRlcmxpbmUnIDogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogcm91dGVyLnBhdGhuYW1lID09PSAnL2lkZWFzJyA/ICdib2xkJyA6ICdub3JtYWwnLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjMzQzYTQwJyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgSWRlYXNcclxuICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgPE5hdi5MaW5rXHJcbiAgICAgICAgICAgICAgaHJlZj1cIi9hYm91dFwiXHJcbiAgICAgICAgICAgICAgYWN0aXZlPXtyb3V0ZXIucGF0aG5hbWUgPT09ICcvYWJvdXQnfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogcm91dGVyLnBhdGhuYW1lID09PSAnL2Fib3V0JyA/ICd1bmRlcmxpbmUnIDogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogcm91dGVyLnBhdGhuYW1lID09PSAnL2Fib3V0JyA/ICdib2xkJyA6ICdub3JtYWwnLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjMzQzYTQwJyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQWJvdXRcclxuICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgPE5hdi5MaW5rXHJcbiAgICAgICAgICAgICAgaHJlZj1cIi9jb250YWN0XCJcclxuICAgICAgICAgICAgICBhY3RpdmU9e3JvdXRlci5wYXRobmFtZSA9PT0gJy9jb250YWN0J31cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IHJvdXRlci5wYXRobmFtZSA9PT0gJy9jb250YWN0JyA/ICd1bmRlcmxpbmUnIDogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogcm91dGVyLnBhdGhuYW1lID09PSAnL2NvbnRhY3QnID8gJ2JvbGQnIDogJ25vcm1hbCcsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyMzNDNhNDAnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDb250YWN0XHJcbiAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICA8L05hdj5cclxuICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L05hdmJhcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJOYXZiYXIiLCJOYXYiLCJDb250YWluZXIiLCJ1c2VSb3V0ZXIiLCJIZWFkZXIiLCJyb3V0ZXIiLCJiZyIsImV4cGFuZCIsImZpeGVkIiwiY2xhc3NOYW1lIiwiQnJhbmQiLCJocmVmIiwic3R5bGUiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJUb2dnbGUiLCJhcmlhLWNvbnRyb2xzIiwiQ29sbGFwc2UiLCJpZCIsIkxpbmsiLCJhY3RpdmUiLCJwYXRobmFtZSIsInRleHREZWNvcmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n\n\n\n\n// import Footer from '../components/Footer';\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\Projects\\\\GenThumb\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    paddingTop: \"70px\"\n                },\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Projects\\\\GenThumb\\\\frontend\\\\pages\\\\_app.js\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Projects\\\\GenThumb\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUNnQjtBQUNJO0FBQzlDLDZDQUE2QztBQUU3QyxTQUFTRSxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3JDLHFCQUNFOzswQkFDRSw4REFBQ0gsMERBQU1BOzs7OzswQkFDUCw4REFBQ0k7Z0JBQUlDLE9BQU87b0JBQUVDLFlBQVk7Z0JBQU87O29CQUFHO2tDQUNsQyw4REFBQ0o7d0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7QUFLaEM7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dlbi10aHVtYi1mcm9udGVuZC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG4vLyBpbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ1RvcDogJzcwcHgnIH19PiB7LyogU3BhY2UgZm9yIHRoZSBmaXhlZCBoZWFkZXIgKi99XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIHsvKiA8Rm9vdGVyLz4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZGl2Iiwic3R5bGUiLCJwYWRkaW5nVG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/bootstrap"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();