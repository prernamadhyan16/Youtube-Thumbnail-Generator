"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ideas",{

/***/ "./pages/ideas.js":
/*!************************!*\
  !*** ./pages/ideas.js ***!
  \************************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.mjs\");\n/* harmony import */ var components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Footer */ \"./components/Footer.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ideas = [\n    {\n        id: 1,\n        title: \"Late Night Vibe\",\n        image: \"/idea1.jpg\",\n        description: \"Capture the essence of late-night productivity or relaxation with this vibe-enhancing thumbnail idea.\"\n    },\n    {\n        id: 2,\n        title: \"BGMI Game\",\n        image: \"/idea2.jpg\",\n        description: \"Showcase the thrill and excitement of the popular BGMI game with engaging visuals.\"\n    },\n    {\n        id: 3,\n        title: \"Passive Income Ideas\",\n        image: \"/idea3.jpg\",\n        description: \"Highlight the best ways to generate passive income and achieve financial freedom.\"\n    },\n    {\n        id: 4,\n        title: \"Jazzy Night\",\n        image: \"/idea4.jpg\",\n        description: \"Set the stage for an unforgettable jazzy evening with a captivating thumbnail.\"\n    },\n    {\n        id: 5,\n        title: \"10 Awesome Books\",\n        image: \"/idea5.jpg\",\n        description: \"Share a curated list of 10 amazing books that everyone should read.\"\n    },\n    {\n        id: 6,\n        title: \"Income Ideas\",\n        image: \"/idea6.jpg\",\n        description: \"Inspire your audience with innovative income ideas to boost their financial growth.\"\n    },\n    {\n        id: 7,\n        title: \"Authentic Thailand\",\n        image: \"/idea7.jpg\",\n        description: \"Explore the vibrant culture, cuisine, and destinations of authentic Thailand.\"\n    },\n    {\n        id: 8,\n        title: \"Books to Change Mindset\",\n        image: \"/idea8.jpg\",\n        description: \"Introduce books that can transform perspectives and unlock personal growth.\"\n    },\n    {\n        id: 9,\n        title: \"Travel with me to Kolkata\",\n        image: \"/idea9.jpg\",\n        description: \"Take your audience on a journey to discover the beauty and culture of Kolkata.\"\n    },\n    {\n        id: 10,\n        title: \"India on Trains\",\n        image: \"/idea10.jpg\",\n        description: \"Experience the charm of India's railways and the stories they hold.\"\n    },\n    {\n        id: 11,\n        title: \"How to become a FreeLancer\",\n        image: \"/idea11.jpg\",\n        description: \"Provide insights and tips on how to kickstart a successful freelancing career.\"\n    },\n    {\n        id: 12,\n        title: \"Mystery Box Unboxing\",\n        image: \"/idea12.jpg\",\n        description: \"Build suspense and excitement with an intriguing mystery box unboxing.\"\n    }\n];\nconst Ideas = ()=>{\n    _s();\n    const [selectedIdea, setSelectedIdea] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleImageClick = (idea)=>{\n        setSelectedIdea(idea);\n    };\n    const handleClose = ()=>{\n        setSelectedIdea(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {\n        maxW: \"container.xl\",\n        py: 8,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                as: \"h1\",\n                size: \"xl\",\n                textAlign: \"center\",\n                mb: 8,\n                children: \"Our Ideas\"\n            }, void 0, false, {\n                fileName: \"E:\\\\Projects\\\\Youtube Thumbnail generator\\\\frontend\\\\pages\\\\ideas.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.SimpleGrid, {\n                columns: {\n                    base: 1,\n                    sm: 2,\n                    md: 3\n                },\n                spacing: 8,\n                children: ideas.map((idea)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        bg: \"white\",\n                        borderRadius: \"lg\",\n                        shadow: \"lg\",\n                        overflow: \"hidden\",\n                        cursor: \"pointer\",\n                        onClick: ()=>handleImageClick(idea),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {\n                                src: idea.image,\n                                alt: idea.title,\n                                boxSize: \"100%\",\n                                objectFit: \"cover\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Projects\\\\Youtube Thumbnail generator\\\\frontend\\\\pages\\\\ideas.js\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                                p: 4,\n                                textAlign: \"center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                                    as: \"h4\",\n                                    size: \"md\",\n                                    children: idea.title\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Projects\\\\Youtube Thumbnail generator\\\\frontend\\\\pages\\\\ideas.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Projects\\\\Youtube Thumbnail generator\\\\frontend\\\\pages\\\\ideas.js\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, idea.id, true, {\n                        fileName: \"E:\\\\Projects\\\\Youtube Thumbnail generator\\\\frontend\\\\pages\\\\ideas.js\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"E:\\\\Projects\\\\Youtube Thumbnail generator\\\\frontend\\\\pages\\\\ideas.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            selectedIdea && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                pos: \"fixed\",\n                top: 0,\n                left: 0,\n                w: \"100vw\",\n                h: \"100vh\",\n                bg: \"rgba(0, 0, 0, 0.8)\",\n                display: \"flex\",\n                alignItems: \"center\",\n                justifyContent: \"center\",\n                zIndex: 10,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                    bg: \"white\",\n                    borderRadius: \"lg\",\n                    shadow: \"lg\",\n                    maxW: \"600px\",\n                    w: \"90%\",\n                    p: 6,\n                    textAlign: \"center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {\n                            src: selectedIdea.image,\n                            alt: selectedIdea.title,\n                            mb: 4,\n                            borderRadius: \"lg\",\n                            objectFit: \"cover\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projects\\\\Youtube Thumbnail generator\\\\frontend\\\\pages\\\\ideas.js\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                            as: \"h3\",\n                            size: \"lg\",\n                            mb: 4,\n                            children: selectedIdea.title\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projects\\\\Youtube Thumbnail generator\\\\frontend\\\\pages\\\\ideas.js\",\n                            lineNumber: 88,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                            mb: 6,\n                            children: selectedIdea.description\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projects\\\\Youtube Thumbnail generator\\\\frontend\\\\pages\\\\ideas.js\",\n                            lineNumber: 91,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            colorScheme: \"purple\",\n                            onClick: handleClose,\n                            children: \"Close\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projects\\\\Youtube Thumbnail generator\\\\frontend\\\\pages\\\\ideas.js\",\n                            lineNumber: 92,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Projects\\\\Youtube Thumbnail generator\\\\frontend\\\\pages\\\\ideas.js\",\n                    lineNumber: 72,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\Projects\\\\Youtube Thumbnail generator\\\\frontend\\\\pages\\\\ideas.js\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\Projects\\\\Youtube Thumbnail generator\\\\frontend\\\\pages\\\\ideas.js\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Projects\\\\Youtube Thumbnail generator\\\\frontend\\\\pages\\\\ideas.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Ideas, \"0SC/FDRpLeVprjGuOvq7E8n7+LQ=\");\n_c = Ideas;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ideas);\nvar _c;\n$RefreshReg$(_c, \"Ideas\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVU7O3NDQUVWLDhEQUFDcEIsbURBQUtBOzRCQUNKa0MsS0FBS3ZCLGFBQWFILEtBQUs7NEJBQ3ZCMkIsS0FBS3hCLGFBQWFKLEtBQUs7NEJBQ3ZCYyxJQUFJOzRCQUNKUSxjQUFhOzRCQUNiUSxXQUFVOzs7Ozs7c0NBRVosOERBQUNwQyxxREFBT0E7NEJBQUNpQixJQUFHOzRCQUFLQyxNQUFLOzRCQUFLRSxJQUFJO3NDQUM1QlYsYUFBYUosS0FBSzs7Ozs7O3NDQUVyQiw4REFBQ0wsa0RBQUlBOzRCQUFDbUIsSUFBSTtzQ0FBSVYsYUFBYUYsV0FBVzs7Ozs7O3NDQUN0Qyw4REFBQ04sb0RBQU1BOzRCQUFDNkMsYUFBWTs0QkFBU2YsU0FBU2xCO3NDQUFhOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFNekQsOERBQUNYLHlEQUFNQTs7Ozs7Ozs7Ozs7QUFJYjtHQWpGTU07S0FBQUE7QUFtRk4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaWRlYXMuanM/YTY3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBTaW1wbGVHcmlkLCBCb3gsIEltYWdlLCBIZWFkaW5nLCBUZXh0LCBCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCJjb21wb25lbnRzL0Zvb3RlclwiO1xyXG5cclxuY29uc3QgaWRlYXMgPSBbXHJcbiAgeyBpZDogMSwgdGl0bGU6IFwiTGF0ZSBOaWdodCBWaWJlXCIsIGltYWdlOiBcIi9pZGVhMS5qcGdcIiwgZGVzY3JpcHRpb246IFwiQ2FwdHVyZSB0aGUgZXNzZW5jZSBvZiBsYXRlLW5pZ2h0IHByb2R1Y3Rpdml0eSBvciByZWxheGF0aW9uIHdpdGggdGhpcyB2aWJlLWVuaGFuY2luZyB0aHVtYm5haWwgaWRlYS5cIiB9LFxyXG4gIHsgaWQ6IDIsIHRpdGxlOiBcIkJHTUkgR2FtZVwiLCBpbWFnZTogXCIvaWRlYTIuanBnXCIsIGRlc2NyaXB0aW9uOiBcIlNob3djYXNlIHRoZSB0aHJpbGwgYW5kIGV4Y2l0ZW1lbnQgb2YgdGhlIHBvcHVsYXIgQkdNSSBnYW1lIHdpdGggZW5nYWdpbmcgdmlzdWFscy5cIiB9LFxyXG4gIHsgaWQ6IDMsIHRpdGxlOiBcIlBhc3NpdmUgSW5jb21lIElkZWFzXCIsIGltYWdlOiBcIi9pZGVhMy5qcGdcIiwgZGVzY3JpcHRpb246IFwiSGlnaGxpZ2h0IHRoZSBiZXN0IHdheXMgdG8gZ2VuZXJhdGUgcGFzc2l2ZSBpbmNvbWUgYW5kIGFjaGlldmUgZmluYW5jaWFsIGZyZWVkb20uXCIgfSxcclxuICB7IGlkOiA0LCB0aXRsZTogXCJKYXp6eSBOaWdodFwiLCBpbWFnZTogXCIvaWRlYTQuanBnXCIsIGRlc2NyaXB0aW9uOiBcIlNldCB0aGUgc3RhZ2UgZm9yIGFuIHVuZm9yZ2V0dGFibGUgamF6enkgZXZlbmluZyB3aXRoIGEgY2FwdGl2YXRpbmcgdGh1bWJuYWlsLlwiIH0sXHJcbiAgeyBpZDogNSwgdGl0bGU6IFwiMTAgQXdlc29tZSBCb29rc1wiLCBpbWFnZTogXCIvaWRlYTUuanBnXCIsIGRlc2NyaXB0aW9uOiBcIlNoYXJlIGEgY3VyYXRlZCBsaXN0IG9mIDEwIGFtYXppbmcgYm9va3MgdGhhdCBldmVyeW9uZSBzaG91bGQgcmVhZC5cIiB9LFxyXG4gIHsgaWQ6IDYsIHRpdGxlOiBcIkluY29tZSBJZGVhc1wiLCBpbWFnZTogXCIvaWRlYTYuanBnXCIsIGRlc2NyaXB0aW9uOiBcIkluc3BpcmUgeW91ciBhdWRpZW5jZSB3aXRoIGlubm92YXRpdmUgaW5jb21lIGlkZWFzIHRvIGJvb3N0IHRoZWlyIGZpbmFuY2lhbCBncm93dGguXCIgfSxcclxuICB7IGlkOiA3LCB0aXRsZTogXCJBdXRoZW50aWMgVGhhaWxhbmRcIiwgaW1hZ2U6IFwiL2lkZWE3LmpwZ1wiLCBkZXNjcmlwdGlvbjogXCJFeHBsb3JlIHRoZSB2aWJyYW50IGN1bHR1cmUsIGN1aXNpbmUsIGFuZCBkZXN0aW5hdGlvbnMgb2YgYXV0aGVudGljIFRoYWlsYW5kLlwiIH0sXHJcbiAgeyBpZDogOCwgdGl0bGU6IFwiQm9va3MgdG8gQ2hhbmdlIE1pbmRzZXRcIiwgaW1hZ2U6IFwiL2lkZWE4LmpwZ1wiLCBkZXNjcmlwdGlvbjogXCJJbnRyb2R1Y2UgYm9va3MgdGhhdCBjYW4gdHJhbnNmb3JtIHBlcnNwZWN0aXZlcyBhbmQgdW5sb2NrIHBlcnNvbmFsIGdyb3d0aC5cIiB9LFxyXG4gIHsgaWQ6IDksIHRpdGxlOiBcIlRyYXZlbCB3aXRoIG1lIHRvIEtvbGthdGFcIiwgaW1hZ2U6IFwiL2lkZWE5LmpwZ1wiLCBkZXNjcmlwdGlvbjogXCJUYWtlIHlvdXIgYXVkaWVuY2Ugb24gYSBqb3VybmV5IHRvIGRpc2NvdmVyIHRoZSBiZWF1dHkgYW5kIGN1bHR1cmUgb2YgS29sa2F0YS5cIiB9LFxyXG4gIHsgaWQ6IDEwLCB0aXRsZTogXCJJbmRpYSBvbiBUcmFpbnNcIiwgaW1hZ2U6IFwiL2lkZWExMC5qcGdcIiwgZGVzY3JpcHRpb246IFwiRXhwZXJpZW5jZSB0aGUgY2hhcm0gb2YgSW5kaWEncyByYWlsd2F5cyBhbmQgdGhlIHN0b3JpZXMgdGhleSBob2xkLlwiIH0sXHJcbiAgeyBpZDogMTEsIHRpdGxlOiBcIkhvdyB0byBiZWNvbWUgYSBGcmVlTGFuY2VyXCIsIGltYWdlOiBcIi9pZGVhMTEuanBnXCIsIGRlc2NyaXB0aW9uOiBcIlByb3ZpZGUgaW5zaWdodHMgYW5kIHRpcHMgb24gaG93IHRvIGtpY2tzdGFydCBhIHN1Y2Nlc3NmdWwgZnJlZWxhbmNpbmcgY2FyZWVyLlwiIH0sXHJcbiAgeyBpZDogMTIsIHRpdGxlOiBcIk15c3RlcnkgQm94IFVuYm94aW5nXCIsIGltYWdlOiBcIi9pZGVhMTIuanBnXCIsIGRlc2NyaXB0aW9uOiBcIkJ1aWxkIHN1c3BlbnNlIGFuZCBleGNpdGVtZW50IHdpdGggYW4gaW50cmlndWluZyBteXN0ZXJ5IGJveCB1bmJveGluZy5cIiB9LFxyXG5dO1xyXG5cclxuXHJcbmNvbnN0IElkZWFzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzZWxlY3RlZElkZWEsIHNldFNlbGVjdGVkSWRlYV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSW1hZ2VDbGljayA9IChpZGVhKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZElkZWEoaWRlYSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZElkZWEobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgbWF4Vz1cImNvbnRhaW5lci54bFwiIHB5PXs4fT5cclxuICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIHNpemU9XCJ4bFwiIHRleHRBbGlnbj1cImNlbnRlclwiIG1iPXs4fT5cclxuICAgICAgICBPdXIgSWRlYXNcclxuICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICA8U2ltcGxlR3JpZCBjb2x1bW5zPXt7IGJhc2U6IDEsIHNtOiAyLCBtZDogMyB9fSBzcGFjaW5nPXs4fT5cclxuICAgICAgICB7aWRlYXMubWFwKChpZGVhKSA9PiAoXHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIGtleT17aWRlYS5pZH1cclxuICAgICAgICAgICAgYmc9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cImxnXCJcclxuICAgICAgICAgICAgc2hhZG93PVwibGdcIlxyXG4gICAgICAgICAgICBvdmVyZmxvdz1cImhpZGRlblwiXHJcbiAgICAgICAgICAgIGN1cnNvcj1cInBvaW50ZXJcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVJbWFnZUNsaWNrKGlkZWEpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpZGVhLmltYWdlfSBhbHQ9e2lkZWEudGl0bGV9IGJveFNpemU9XCIxMDAlXCIgb2JqZWN0Rml0PVwiY292ZXJcIiAvPlxyXG4gICAgICAgICAgICA8Qm94IHA9ezR9IHRleHRBbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDRcIiBzaXplPVwibWRcIj5cclxuICAgICAgICAgICAgICAgIHtpZGVhLnRpdGxlfVxyXG4gICAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICApKX1cclxuICAgICAgPC9TaW1wbGVHcmlkPlxyXG5cclxuICAgICAgey8qIEV4cGFuZGVkIFZpZXcgKi99XHJcbiAgICAgIHtzZWxlY3RlZElkZWEgJiYgKFxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIHBvcz1cImZpeGVkXCJcclxuICAgICAgICAgIHRvcD17MH1cclxuICAgICAgICAgIGxlZnQ9ezB9XHJcbiAgICAgICAgICB3PVwiMTAwdndcIlxyXG4gICAgICAgICAgaD1cIjEwMHZoXCJcclxuICAgICAgICAgIGJnPVwicmdiYSgwLCAwLCAwLCAwLjgpXCJcclxuICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcclxuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgekluZGV4PXsxMH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIGJnPVwid2hpdGVcIlxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM9XCJsZ1wiXHJcbiAgICAgICAgICAgIHNoYWRvdz1cImxnXCJcclxuICAgICAgICAgICAgbWF4Vz1cIjYwMHB4XCJcclxuICAgICAgICAgICAgdz1cIjkwJVwiXHJcbiAgICAgICAgICAgIHA9ezZ9XHJcbiAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17c2VsZWN0ZWRJZGVhLmltYWdlfVxyXG4gICAgICAgICAgICAgIGFsdD17c2VsZWN0ZWRJZGVhLnRpdGxlfVxyXG4gICAgICAgICAgICAgIG1iPXs0fVxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cImxnXCJcclxuICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIiBzaXplPVwibGdcIiBtYj17NH0+XHJcbiAgICAgICAgICAgICAge3NlbGVjdGVkSWRlYS50aXRsZX1cclxuICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICA8VGV4dCBtYj17Nn0+e3NlbGVjdGVkSWRlYS5kZXNjcmlwdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9XCJwdXJwbGVcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgKX1cclxuICAgICAgPEZvb3Rlci8+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICAgIFxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJZGVhcztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDb250YWluZXIiLCJTaW1wbGVHcmlkIiwiQm94IiwiSW1hZ2UiLCJIZWFkaW5nIiwiVGV4dCIsIkJ1dHRvbiIsIkZvb3RlciIsImlkZWFzIiwiaWQiLCJ0aXRsZSIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJJZGVhcyIsInNlbGVjdGVkSWRlYSIsInNldFNlbGVjdGVkSWRlYSIsImhhbmRsZUltYWdlQ2xpY2siLCJpZGVhIiwiaGFuZGxlQ2xvc2UiLCJtYXhXIiwicHkiLCJhcyIsInNpemUiLCJ0ZXh0QWxpZ24iLCJtYiIsImNvbHVtbnMiLCJiYXNlIiwic20iLCJtZCIsInNwYWNpbmciLCJtYXAiLCJiZyIsImJvcmRlclJhZGl1cyIsInNoYWRvdyIsIm92ZXJmbG93IiwiY3Vyc29yIiwib25DbGljayIsInNyYyIsImFsdCIsImJveFNpemUiLCJvYmplY3RGaXQiLCJwIiwicG9zIiwidG9wIiwibGVmdCIsInciLCJoIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInpJbmRleCIsImNvbG9yU2NoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/ideas.js\n"));

/***/ })

});