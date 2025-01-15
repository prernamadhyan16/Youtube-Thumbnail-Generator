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

/***/ "__barrel_optimize__?names=LuMoon,LuSun!=!./node_modules/react-icons/lu/index.mjs":
/*!****************************************************************************************!*\
  !*** __barrel_optimize__?names=LuMoon,LuSun!=!./node_modules/react-icons/lu/index.mjs ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_Projects_Youtube_Thumbnail_generator_frontend_node_modules_react_icons_lu_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-icons/lu/index.mjs */ "./node_modules/react-icons/lu/index.mjs");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in E_Projects_Youtube_Thumbnail_generator_frontend_node_modules_react_icons_lu_index_mjs__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => E_Projects_Youtube_Thumbnail_generator_frontend_node_modules_react_icons_lu_index_mjs__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/components/ui/color-mode.jsx":
/*!******************************************!*\
  !*** ./src/components/ui/color-mode.jsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ColorModeButton: () => (/* binding */ ColorModeButton),\n/* harmony export */   ColorModeIcon: () => (/* binding */ ColorModeIcon),\n/* harmony export */   ColorModeProvider: () => (/* binding */ ColorModeProvider),\n/* harmony export */   useColorMode: () => (/* binding */ useColorMode),\n/* harmony export */   useColorModeValue: () => (/* binding */ useColorModeValue)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _barrel_optimize_names_LuMoon_LuSun_react_icons_lu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=LuMoon,LuSun!=!react-icons/lu */ \"__barrel_optimize__?names=LuMoon,LuSun!=!./node_modules/react-icons/lu/index.mjs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, next_themes__WEBPACK_IMPORTED_MODULE_2__]);\n([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, next_themes__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n/* __next_internal_client_entry_do_not_use__ ColorModeProvider,useColorMode,useColorModeValue,ColorModeIcon,ColorModeButton auto */ \n\n\n\n\nfunction ColorModeProvider(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_themes__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n        attribute: \"class\",\n        disableTransitionOnChange: true,\n        ...props\n    }, void 0, false, {\n        fileName: \"E:\\\\Projects\\\\Youtube Thumbnail generator\\\\frontend\\\\src\\\\components\\\\ui\\\\color-mode.jsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\nfunction useColorMode() {\n    const { resolvedTheme, setTheme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)();\n    const toggleColorMode = ()=>{\n        setTheme(resolvedTheme === \"light\" ? \"dark\" : \"light\");\n    };\n    return {\n        colorMode: resolvedTheme,\n        setColorMode: setTheme,\n        toggleColorMode\n    };\n}\nfunction useColorModeValue(light, dark) {\n    const { colorMode } = useColorMode();\n    return colorMode === \"light\" ? light : dark;\n}\nfunction ColorModeIcon() {\n    const { colorMode } = useColorMode();\n    return colorMode === \"light\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LuMoon_LuSun_react_icons_lu__WEBPACK_IMPORTED_MODULE_4__.LuSun, {}, void 0, false, {\n        fileName: \"E:\\\\Projects\\\\Youtube Thumbnail generator\\\\frontend\\\\src\\\\components\\\\ui\\\\color-mode.jsx\",\n        lineNumber: 34,\n        columnNumber: 34\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LuMoon_LuSun_react_icons_lu__WEBPACK_IMPORTED_MODULE_4__.LuMoon, {}, void 0, false, {\n        fileName: \"E:\\\\Projects\\\\Youtube Thumbnail generator\\\\frontend\\\\src\\\\components\\\\ui\\\\color-mode.jsx\",\n        lineNumber: 34,\n        columnNumber: 46\n    }, this);\n}\nconst ColorModeButton = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function ColorModeButton(props, ref) {\n    const { toggleColorMode } = useColorMode();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ClientOnly, {\n        fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Skeleton, {\n            boxSize: \"8\"\n        }, void 0, false, void 0, void 0),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.IconButton, {\n            onClick: toggleColorMode,\n            variant: \"ghost\",\n            \"aria-label\": \"Toggle color mode\",\n            size: \"sm\",\n            ref: ref,\n            ...props,\n            css: {\n                _icon: {\n                    width: \"5\",\n                    height: \"5\"\n                }\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ColorModeIcon, {}, void 0, false, {\n                fileName: \"E:\\\\Projects\\\\Youtube Thumbnail generator\\\\frontend\\\\src\\\\components\\\\ui\\\\color-mode.jsx\",\n                lineNumber: 56,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"E:\\\\Projects\\\\Youtube Thumbnail generator\\\\frontend\\\\src\\\\components\\\\ui\\\\color-mode.jsx\",\n            lineNumber: 42,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\Projects\\\\Youtube Thumbnail generator\\\\frontend\\\\src\\\\components\\\\ui\\\\color-mode.jsx\",\n        lineNumber: 41,\n        columnNumber: 7\n    }, this);\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91aS9jb2xvci1tb2RlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW1FO0FBQ2Q7QUFFdkI7QUFDZ0I7QUFFdkMsU0FBU1Esa0JBQWtCQyxLQUFLO0lBQ3JDLHFCQUNFLDhEQUFDTixzREFBYUE7UUFBQ08sV0FBVTtRQUFRQyx5QkFBeUI7UUFBRSxHQUFHRixLQUFLOzs7Ozs7QUFFeEU7QUFFTyxTQUFTRztJQUNkLE1BQU0sRUFBRUMsYUFBYSxFQUFFQyxRQUFRLEVBQUUsR0FBR1YscURBQVFBO0lBQzVDLE1BQU1XLGtCQUFrQjtRQUN0QkQsU0FBU0Qsa0JBQWtCLFVBQVUsU0FBUztJQUNoRDtJQUNBLE9BQU87UUFDTEcsV0FBV0g7UUFDWEksY0FBY0g7UUFDZEM7SUFDRjtBQUNGO0FBRU8sU0FBU0csa0JBQWtCQyxLQUFLLEVBQUVDLElBQUk7SUFDM0MsTUFBTSxFQUFFSixTQUFTLEVBQUUsR0FBR0o7SUFDdEIsT0FBT0ksY0FBYyxVQUFVRyxRQUFRQztBQUN6QztBQUVPLFNBQVNDO0lBQ2QsTUFBTSxFQUFFTCxTQUFTLEVBQUUsR0FBR0o7SUFDdEIsT0FBT0ksY0FBYyx3QkFBVSw4REFBQ1QscUZBQUtBOzs7OzZCQUFNLDhEQUFDRCxzRkFBTUE7Ozs7O0FBQ3BEO0FBRU8sTUFBTWdCLGdDQUFrQmpCLDZDQUFnQixDQUM3QyxTQUFTaUIsZ0JBQWdCYixLQUFLLEVBQUVlLEdBQUc7SUFDakMsTUFBTSxFQUFFVCxlQUFlLEVBQUUsR0FBR0g7SUFDNUIscUJBQ0UsOERBQUNaLHdEQUFVQTtRQUFDeUIsd0JBQVUsOERBQUN2QixzREFBUUE7WUFBQ3dCLFNBQVE7O2tCQUN0Qyw0RUFBQ3pCLHdEQUFVQTtZQUNUMEIsU0FBU1o7WUFDVGEsU0FBUTtZQUNSQyxjQUFXO1lBQ1hDLE1BQUs7WUFDTE4sS0FBS0E7WUFDSixHQUFHZixLQUFLO1lBQ1RzQixLQUFLO2dCQUNIQyxPQUFPO29CQUNMQyxPQUFPO29CQUNQQyxRQUFRO2dCQUNWO1lBQ0Y7c0JBRUEsNEVBQUNiOzs7Ozs7Ozs7Ozs7Ozs7QUFJVCxHQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2VuLXRodW1iLWZyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvdWkvY29sb3ItbW9kZS5qc3g/YTBjMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgQ2xpZW50T25seSwgSWNvbkJ1dHRvbiwgU2tlbGV0b24gfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgdXNlVGhlbWUgfSBmcm9tICduZXh0LXRoZW1lcydcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMdU1vb24sIEx1U3VuIH0gZnJvbSAncmVhY3QtaWNvbnMvbHUnXG5cbmV4cG9ydCBmdW5jdGlvbiBDb2xvck1vZGVQcm92aWRlcihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIGF0dHJpYnV0ZT0nY2xhc3MnIGRpc2FibGVUcmFuc2l0aW9uT25DaGFuZ2Ugey4uLnByb3BzfSAvPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDb2xvck1vZGUoKSB7XG4gIGNvbnN0IHsgcmVzb2x2ZWRUaGVtZSwgc2V0VGhlbWUgfSA9IHVzZVRoZW1lKClcbiAgY29uc3QgdG9nZ2xlQ29sb3JNb2RlID0gKCkgPT4ge1xuICAgIHNldFRoZW1lKHJlc29sdmVkVGhlbWUgPT09ICdsaWdodCcgPyAnZGFyaycgOiAnbGlnaHQnKVxuICB9XG4gIHJldHVybiB7XG4gICAgY29sb3JNb2RlOiByZXNvbHZlZFRoZW1lLFxuICAgIHNldENvbG9yTW9kZTogc2V0VGhlbWUsXG4gICAgdG9nZ2xlQ29sb3JNb2RlLFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDb2xvck1vZGVWYWx1ZShsaWdodCwgZGFyaykge1xuICBjb25zdCB7IGNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKClcbiAgcmV0dXJuIGNvbG9yTW9kZSA9PT0gJ2xpZ2h0JyA/IGxpZ2h0IDogZGFya1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ29sb3JNb2RlSWNvbigpIHtcbiAgY29uc3QgeyBjb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpXG4gIHJldHVybiBjb2xvck1vZGUgPT09ICdsaWdodCcgPyA8THVTdW4gLz4gOiA8THVNb29uIC8+XG59XG5cbmV4cG9ydCBjb25zdCBDb2xvck1vZGVCdXR0b24gPSBSZWFjdC5mb3J3YXJkUmVmKFxuICBmdW5jdGlvbiBDb2xvck1vZGVCdXR0b24ocHJvcHMsIHJlZikge1xuICAgIGNvbnN0IHsgdG9nZ2xlQ29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKVxuICAgIHJldHVybiAoXG4gICAgICA8Q2xpZW50T25seSBmYWxsYmFjaz17PFNrZWxldG9uIGJveFNpemU9JzgnIC8+fT5cbiAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVDb2xvck1vZGV9XG4gICAgICAgICAgdmFyaWFudD0nZ2hvc3QnXG4gICAgICAgICAgYXJpYS1sYWJlbD0nVG9nZ2xlIGNvbG9yIG1vZGUnXG4gICAgICAgICAgc2l6ZT0nc20nXG4gICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgX2ljb246IHtcbiAgICAgICAgICAgICAgd2lkdGg6ICc1JyxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnNScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8Q29sb3JNb2RlSWNvbiAvPlxuICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICA8L0NsaWVudE9ubHk+XG4gICAgKVxuICB9LFxuKVxuIl0sIm5hbWVzIjpbIkNsaWVudE9ubHkiLCJJY29uQnV0dG9uIiwiU2tlbGV0b24iLCJUaGVtZVByb3ZpZGVyIiwidXNlVGhlbWUiLCJSZWFjdCIsIkx1TW9vbiIsIkx1U3VuIiwiQ29sb3JNb2RlUHJvdmlkZXIiLCJwcm9wcyIsImF0dHJpYnV0ZSIsImRpc2FibGVUcmFuc2l0aW9uT25DaGFuZ2UiLCJ1c2VDb2xvck1vZGUiLCJyZXNvbHZlZFRoZW1lIiwic2V0VGhlbWUiLCJ0b2dnbGVDb2xvck1vZGUiLCJjb2xvck1vZGUiLCJzZXRDb2xvck1vZGUiLCJ1c2VDb2xvck1vZGVWYWx1ZSIsImxpZ2h0IiwiZGFyayIsIkNvbG9yTW9kZUljb24iLCJDb2xvck1vZGVCdXR0b24iLCJmb3J3YXJkUmVmIiwicmVmIiwiZmFsbGJhY2siLCJib3hTaXplIiwib25DbGljayIsInZhcmlhbnQiLCJhcmlhLWxhYmVsIiwic2l6ZSIsImNzcyIsIl9pY29uIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ui/color-mode.jsx\n");

/***/ }),

/***/ "./src/components/ui/provider.jsx":
/*!****************************************!*\
  !*** ./src/components/ui/provider.jsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Provider: () => (/* binding */ Provider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _color_mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color-mode */ \"./src/components/ui/color-mode.jsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _color_mode__WEBPACK_IMPORTED_MODULE_2__]);\n([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _color_mode__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n/* __next_internal_client_entry_do_not_use__ Provider auto */ \n\n\nfunction Provider(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {\n        value: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.defaultSystem,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_color_mode__WEBPACK_IMPORTED_MODULE_2__.ColorModeProvider, {\n            ...props\n        }, void 0, false, {\n            fileName: \"E:\\\\Projects\\\\Youtube Thumbnail generator\\\\frontend\\\\src\\\\components\\\\ui\\\\provider.jsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\Projects\\\\Youtube Thumbnail generator\\\\frontend\\\\src\\\\components\\\\ui\\\\provider.jsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91aS9wcm92aWRlci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRWdFO0FBQ2hCO0FBRXpDLFNBQVNHLFNBQVNDLEtBQUs7SUFDNUIscUJBQ0UsOERBQUNKLDREQUFjQTtRQUFDSyxPQUFPSiwyREFBYUE7a0JBQ2xDLDRFQUFDQywwREFBaUJBO1lBQUUsR0FBR0UsS0FBSzs7Ozs7Ozs7Ozs7QUFHbEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZW4tdGh1bWItZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy91aS9wcm92aWRlci5qc3g/ZmIyMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIsIGRlZmF1bHRTeXN0ZW0gfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgQ29sb3JNb2RlUHJvdmlkZXIgfSBmcm9tICcuL2NvbG9yLW1vZGUnXG5cbmV4cG9ydCBmdW5jdGlvbiBQcm92aWRlcihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxDaGFrcmFQcm92aWRlciB2YWx1ZT17ZGVmYXVsdFN5c3RlbX0+XG4gICAgICA8Q29sb3JNb2RlUHJvdmlkZXIgey4uLnByb3BzfSAvPlxuICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJDaGFrcmFQcm92aWRlciIsImRlZmF1bHRTeXN0ZW0iLCJDb2xvck1vZGVQcm92aWRlciIsIlByb3ZpZGVyIiwicHJvcHMiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ui/provider.jsx\n");

/***/ }),

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

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ }),

/***/ "next-themes":
/*!******************************!*\
  !*** external "next-themes" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("next-themes");;

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Navbar */ \"react-bootstrap/Navbar\");\n/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Nav */ \"react-bootstrap/Nav\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Container */ \"react-bootstrap/Container\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n\n\n\n\n\n\nconst Header = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__, {\n        bg: \"light\",\n        expand: \"lg\",\n        fixed: \"top\",\n        className: \"shadow-sm\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__.Brand, {\n                    href: \"/\",\n                    style: {\n                        fontWeight: \"bold\",\n                        color: \"#343a40\"\n                    },\n                    children: \"GetThumb\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\Projects\\\\Youtube Thumbnail generator\\\\frontend\\\\components\\\\Header.js\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__.Toggle, {\n                    \"aria-controls\": \"navbar-nav\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\Projects\\\\Youtube Thumbnail generator\\\\frontend\\\\components\\\\Header.js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__.Collapse, {\n                    id: \"navbar-nav\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__, {\n                        className: \"ms-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                                href: \"/\",\n                                active: router.pathname === \"/\",\n                                style: {\n                                    textDecoration: router.pathname === \"/\" ? \"underline\" : \"none\",\n                                    fontWeight: router.pathname === \"/\" ? \"bold\" : \"normal\",\n                                    color: \"#343a40\"\n                                },\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Projects\\\\Youtube Thumbnail generator\\\\frontend\\\\components\\\\Header.js\",\n                                lineNumber: 21,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                                href: \"/ideas\",\n                                active: router.pathname === \"/ideas\",\n                                style: {\n                                    textDecoration: router.pathname === \"/ideas\" ? \"underline\" : \"none\",\n                                    fontWeight: router.pathname === \"/ideas\" ? \"bold\" : \"normal\",\n                                    color: \"#343a40\"\n                                },\n                                children: \"Ideas\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Projects\\\\Youtube Thumbnail generator\\\\frontend\\\\components\\\\Header.js\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                                href: \"/about\",\n                                active: router.pathname === \"/about\",\n                                style: {\n                                    textDecoration: router.pathname === \"/about\" ? \"underline\" : \"none\",\n                                    fontWeight: router.pathname === \"/about\" ? \"bold\" : \"normal\",\n                                    color: \"#343a40\"\n                                },\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Projects\\\\Youtube Thumbnail generator\\\\frontend\\\\components\\\\Header.js\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                                href: \"/contact\",\n                                active: router.pathname === \"/contact\",\n                                style: {\n                                    textDecoration: router.pathname === \"/contact\" ? \"underline\" : \"none\",\n                                    fontWeight: router.pathname === \"/contact\" ? \"bold\" : \"normal\",\n                                    color: \"#343a40\"\n                                },\n                                children: \"Contact\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Projects\\\\Youtube Thumbnail generator\\\\frontend\\\\components\\\\Header.js\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Projects\\\\Youtube Thumbnail generator\\\\frontend\\\\components\\\\Header.js\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"E:\\\\Projects\\\\Youtube Thumbnail generator\\\\frontend\\\\components\\\\Header.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\Projects\\\\Youtube Thumbnail generator\\\\frontend\\\\components\\\\Header.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"E:\\\\Projects\\\\Youtube Thumbnail generator\\\\frontend\\\\components\\\\Header.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwQjtBQUMrQjtBQUFBO0FBQUE7QUFDakI7QUFFeEMsTUFBTUssU0FBUztJQUNiLE1BQU1DLFNBQVNGLHNEQUFTQTtJQUV4QixxQkFDRSw4REFBQ0gsbURBQU1BO1FBQUNNLElBQUc7UUFBUUMsUUFBTztRQUFLQyxPQUFNO1FBQU1DLFdBQVU7a0JBQ25ELDRFQUFDUCxzREFBU0E7OzhCQUVSLDhEQUFDRix5REFBWTtvQkFBQ1csTUFBSztvQkFBSUMsT0FBTzt3QkFBRUMsWUFBWTt3QkFBUUMsT0FBTztvQkFBVTs4QkFBRzs7Ozs7OzhCQUt4RSw4REFBQ2QsMERBQWE7b0JBQUNnQixpQkFBYzs7Ozs7OzhCQUM3Qiw4REFBQ2hCLDREQUFlO29CQUFDa0IsSUFBRzs4QkFDbEIsNEVBQUNqQixnREFBR0E7d0JBQUNRLFdBQVU7OzBDQUViLDhEQUFDUixxREFBUTtnQ0FDUFUsTUFBSztnQ0FDTFMsUUFBUWYsT0FBT2dCLFFBQVEsS0FBSztnQ0FDNUJULE9BQU87b0NBQ0xVLGdCQUFnQmpCLE9BQU9nQixRQUFRLEtBQUssTUFBTSxjQUFjO29DQUN4RFIsWUFBWVIsT0FBT2dCLFFBQVEsS0FBSyxNQUFNLFNBQVM7b0NBQy9DUCxPQUFPO2dDQUNUOzBDQUNEOzs7Ozs7MENBR0QsOERBQUNiLHFEQUFRO2dDQUNQVSxNQUFLO2dDQUNMUyxRQUFRZixPQUFPZ0IsUUFBUSxLQUFLO2dDQUM1QlQsT0FBTztvQ0FDTFUsZ0JBQWdCakIsT0FBT2dCLFFBQVEsS0FBSyxXQUFXLGNBQWM7b0NBQzdEUixZQUFZUixPQUFPZ0IsUUFBUSxLQUFLLFdBQVcsU0FBUztvQ0FDcERQLE9BQU87Z0NBQ1Q7MENBQ0Q7Ozs7OzswQ0FHRCw4REFBQ2IscURBQVE7Z0NBQ1BVLE1BQUs7Z0NBQ0xTLFFBQVFmLE9BQU9nQixRQUFRLEtBQUs7Z0NBQzVCVCxPQUFPO29DQUNMVSxnQkFBZ0JqQixPQUFPZ0IsUUFBUSxLQUFLLFdBQVcsY0FBYztvQ0FDN0RSLFlBQVlSLE9BQU9nQixRQUFRLEtBQUssV0FBVyxTQUFTO29DQUNwRFAsT0FBTztnQ0FDVDswQ0FDRDs7Ozs7OzBDQUdELDhEQUFDYixxREFBUTtnQ0FDUFUsTUFBSztnQ0FDTFMsUUFBUWYsT0FBT2dCLFFBQVEsS0FBSztnQ0FDNUJULE9BQU87b0NBQ0xVLGdCQUFnQmpCLE9BQU9nQixRQUFRLEtBQUssYUFBYSxjQUFjO29DQUMvRFIsWUFBWVIsT0FBT2dCLFFBQVEsS0FBSyxhQUFhLFNBQVM7b0NBQ3REUCxPQUFPO2dDQUNUOzBDQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWI7QUFFQSxpRUFBZVYsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dlbi10aHVtYi1mcm9udGVuZC8uL2NvbXBvbmVudHMvSGVhZGVyLmpzPzRkYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2YmFyLCBOYXYsIENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxOYXZiYXIgYmc9XCJsaWdodFwiIGV4cGFuZD1cImxnXCIgZml4ZWQ9XCJ0b3BcIiBjbGFzc05hbWU9XCJzaGFkb3ctc21cIj5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICB7LyogTG9nbyAqL31cclxuICAgICAgICA8TmF2YmFyLkJyYW5kIGhyZWY9XCIvXCIgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnLCBjb2xvcjogJyMzNDNhNDAnIH19PlxyXG4gICAgICAgICAgR2V0VGh1bWJcclxuICAgICAgICA8L05hdmJhci5CcmFuZD5cclxuXHJcbiAgICAgICAgey8qIFRvZ2dsZSBmb3IgTW9iaWxlICovfVxyXG4gICAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJuYXZiYXItbmF2XCIgLz5cclxuICAgICAgICA8TmF2YmFyLkNvbGxhcHNlIGlkPVwibmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtcy1hdXRvXCI+XHJcbiAgICAgICAgICAgIHsvKiBOYXZpZ2F0aW9uIExpbmtzICovfVxyXG4gICAgICAgICAgICA8TmF2LkxpbmtcclxuICAgICAgICAgICAgICBocmVmPVwiL1wiXHJcbiAgICAgICAgICAgICAgYWN0aXZlPXtyb3V0ZXIucGF0aG5hbWUgPT09ICcvJ31cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IHJvdXRlci5wYXRobmFtZSA9PT0gJy8nID8gJ3VuZGVybGluZScgOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiByb3V0ZXIucGF0aG5hbWUgPT09ICcvJyA/ICdib2xkJyA6ICdub3JtYWwnLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjMzQzYTQwJyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICA8TmF2LkxpbmtcclxuICAgICAgICAgICAgICBocmVmPVwiL2lkZWFzXCJcclxuICAgICAgICAgICAgICBhY3RpdmU9e3JvdXRlci5wYXRobmFtZSA9PT0gJy9pZGVhcyd9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiByb3V0ZXIucGF0aG5hbWUgPT09ICcvaWRlYXMnID8gJ3VuZGVybGluZScgOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiByb3V0ZXIucGF0aG5hbWUgPT09ICcvaWRlYXMnID8gJ2JvbGQnIDogJ25vcm1hbCcsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyMzNDNhNDAnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBJZGVhc1xyXG4gICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICA8TmF2LkxpbmtcclxuICAgICAgICAgICAgICBocmVmPVwiL2Fib3V0XCJcclxuICAgICAgICAgICAgICBhY3RpdmU9e3JvdXRlci5wYXRobmFtZSA9PT0gJy9hYm91dCd9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiByb3V0ZXIucGF0aG5hbWUgPT09ICcvYWJvdXQnID8gJ3VuZGVybGluZScgOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiByb3V0ZXIucGF0aG5hbWUgPT09ICcvYWJvdXQnID8gJ2JvbGQnIDogJ25vcm1hbCcsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyMzNDNhNDAnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBBYm91dFxyXG4gICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICA8TmF2LkxpbmtcclxuICAgICAgICAgICAgICBocmVmPVwiL2NvbnRhY3RcIlxyXG4gICAgICAgICAgICAgIGFjdGl2ZT17cm91dGVyLnBhdGhuYW1lID09PSAnL2NvbnRhY3QnfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogcm91dGVyLnBhdGhuYW1lID09PSAnL2NvbnRhY3QnID8gJ3VuZGVybGluZScgOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiByb3V0ZXIucGF0aG5hbWUgPT09ICcvY29udGFjdCcgPyAnYm9sZCcgOiAnbm9ybWFsJyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnIzM0M2E0MCcsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENvbnRhY3RcclxuICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvTmF2YmFyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk5hdmJhciIsIk5hdiIsIkNvbnRhaW5lciIsInVzZVJvdXRlciIsIkhlYWRlciIsInJvdXRlciIsImJnIiwiZXhwYW5kIiwiZml4ZWQiLCJjbGFzc05hbWUiLCJCcmFuZCIsImhyZWYiLCJzdHlsZSIsImZvbnRXZWlnaHQiLCJjb2xvciIsIlRvZ2dsZSIsImFyaWEtY29udHJvbHMiLCJDb2xsYXBzZSIsImlkIiwiTGluayIsImFjdGl2ZSIsInBhdGhuYW1lIiwidGV4dERlY29yYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var _components_ui_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/provider */ \"./src/components/ui/provider.jsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_provider__WEBPACK_IMPORTED_MODULE_4__]);\n_components_ui_provider__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n// import Footer from '../components/Footer';\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_provider__WEBPACK_IMPORTED_MODULE_4__.Provider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\Projects\\\\Youtube Thumbnail generator\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    paddingTop: \"70px\"\n                },\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Projects\\\\Youtube Thumbnail generator\\\\frontend\\\\pages\\\\_app.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Projects\\\\Youtube Thumbnail generator\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Projects\\\\Youtube Thumbnail generator\\\\frontend\\\\pages\\\\_app.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDZ0I7QUFDSTtBQUM5Qyw2Q0FBNkM7QUFDTztBQUVwRCxTQUFTRyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3JDLHFCQUNFLDhEQUFDSCw2REFBUUE7OzBCQUNQLDhEQUFDRCwwREFBTUE7Ozs7OzBCQUNQLDhEQUFDSztnQkFBSUMsT0FBTztvQkFBRUMsWUFBWTtnQkFBTzs7b0JBQUc7a0NBQ2xDLDhEQUFDSjt3QkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEM7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dlbi10aHVtYi1mcm9udGVuZC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG4vLyBpbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvcHJvdmlkZXInO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxQcm92aWRlcj5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdUb3A6ICc3MHB4JyB9fT4gey8qIFNwYWNlIGZvciB0aGUgZml4ZWQgaGVhZGVyICovfVxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICB7LyogPEZvb3Rlci8+ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWRlciIsIlByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJkaXYiLCJzdHlsZSIsInBhZGRpbmdUb3AiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/react-icons","vendor-chunks/bootstrap"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();