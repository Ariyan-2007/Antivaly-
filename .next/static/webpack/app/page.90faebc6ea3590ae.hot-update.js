"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Slide.tsx":
/*!******************************!*\
  !*** ./components/Slide.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Slide = (param)=>{\n    let { img, title, mainTitle, price } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"outline-none border-none relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%] -translate-y-[50%] space-y-100 lg:space-y-4 bg-[#ffffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-accent text-[24px] lg:text-[28px] font-extrabold\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"E:\\\\NextJS\\\\Tutorial\\\\Antivaly-\\\\components\\\\Slide.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-white text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]\",\n                        children: mainTitle\n                    }, void 0, false, {\n                        fileName: \"E:\\\\NextJS\\\\Tutorial\\\\Antivaly-\\\\components\\\\Slide.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-[24px] text-gray-500\",\n                        children: [\n                            \"Starting at\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                className: \"text-[20px] md:text-[24px] lg:text-[30px]\",\n                                children: price\n                            }, void 0, false, {\n                                fileName: \"E:\\\\NextJS\\\\Tutorial\\\\Antivaly-\\\\components\\\\Slide.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\NextJS\\\\Tutorial\\\\Antivaly-\\\\components\\\\Slide.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-accent text-white font-bold text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-blackish\",\n                        children: \"Shop Now!\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\NextJS\\\\Tutorial\\\\Antivaly-\\\\components\\\\Slide.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\NextJS\\\\Tutorial\\\\Antivaly-\\\\components\\\\Slide.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                className: \"w-[100%] h-[300px] md:h-auto rounded-xl object-cover object-right md:object-left-bottom\",\n                src: img,\n                alt: \"banner\",\n                width: 2000,\n                height: 2000\n            }, void 0, false, {\n                fileName: \"E:\\\\NextJS\\\\Tutorial\\\\Antivaly-\\\\components\\\\Slide.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\NextJS\\\\Tutorial\\\\Antivaly-\\\\components\\\\Slide.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Slide;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slide);\nvar _c;\n$RefreshReg$(_c, \"Slide\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU2xpZGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUNMO0FBUzFCLE1BQU1FLFFBQTZCO1FBQUMsRUFBRUMsR0FBRyxFQUFFQyxLQUFLLEVBQUVDLFNBQVMsRUFBRUMsS0FBSyxFQUFFO0lBQ2xFLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FDWEo7Ozs7OztrQ0FFSCw4REFBQ007d0JBQUdGLFdBQVU7a0NBQ1hIOzs7Ozs7a0NBR0gsOERBQUNJO3dCQUFHRCxXQUFVOzs0QkFBNEI7NEJBQzVCOzBDQUNaLDhEQUFDRztnQ0FBRUgsV0FBVTswQ0FBNkNGOzs7Ozs7Ozs7Ozs7a0NBRTVELDhEQUFDQzt3QkFBSUMsV0FBVTtrQ0FBOEg7Ozs7Ozs7Ozs7OzswQkFJL0ksOERBQUNSLGtEQUFLQTtnQkFDSlEsV0FBVTtnQkFDVkksS0FBS1Q7Z0JBQ0xVLEtBQUk7Z0JBQ0pDLE9BQU87Z0JBQ1BDLFFBQVE7Ozs7Ozs7Ozs7OztBQUloQjtLQTVCTWI7QUE4Qk4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TbGlkZS50c3g/NjZjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIHByb3BzVHlwZSB7XHJcbiAgaW1nOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBtYWluVGl0bGU6IHN0cmluZztcclxuICBwcmljZTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBTbGlkZTogUmVhY3QuRkM8cHJvcHNUeXBlPiA9ICh7IGltZywgdGl0bGUsIG1haW5UaXRsZSwgcHJpY2UgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dGxpbmUtbm9uZSBib3JkZXItbm9uZSByZWxhdGl2ZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtWzMwcHhdIG1kOmxlZnQtWzcwcHhdIG1heC13LVsyNTBweF0gc206bWF4LXctWzM1MHB4XSB0b3AtWzUwJV0gLXRyYW5zbGF0ZS15LVs1MCVdIHNwYWNlLXktMTAwIGxnOnNwYWNlLXktNCBiZy1bI2ZmZmZmZmEyXSBzbTpiZy10cmFuc3BhcmVudCBwLTQgc206cC0wIHJvdW5kZWQtbGcgc206cm91bmRlZC1ub25lXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtYWNjZW50IHRleHQtWzI0cHhdIGxnOnRleHQtWzI4cHhdIGZvbnQtZXh0cmFib2xkXCI+XHJcbiAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LVsyNnB4XSBtZDp0ZXh0LVszMHB4XSBsZzp0ZXh0LVs0NHB4XSBmb250LWJvbGQgbGVhZGluZy1bMS4yXVwiPlxyXG4gICAgICAgICAge21haW5UaXRsZX1cclxuICAgICAgICA8L2gyPlxyXG5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1bMjRweF0gdGV4dC1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAgU3RhcnRpbmcgYXR7XCIgXCJ9XHJcbiAgICAgICAgICA8YiBjbGFzc05hbWU9XCJ0ZXh0LVsyMHB4XSBtZDp0ZXh0LVsyNHB4XSBsZzp0ZXh0LVszMHB4XVwiPntwcmljZX08L2I+XHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWFjY2VudCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LVsxNHB4XSBtZDp0ZXh0LVsxNnB4XSBwLTIgcHgtNCByb3VuZGVkLWxnIGlubGluZS1ibG9jayBjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1ibGFja2lzaFwiPlxyXG4gICAgICAgICAgU2hvcCBOb3chXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8SW1hZ2VcclxuICAgICAgICBjbGFzc05hbWU9XCJ3LVsxMDAlXSBoLVszMDBweF0gbWQ6aC1hdXRvIHJvdW5kZWQteGwgb2JqZWN0LWNvdmVyIG9iamVjdC1yaWdodCBtZDpvYmplY3QtbGVmdC1ib3R0b21cIlxyXG4gICAgICAgIHNyYz17aW1nfVxyXG4gICAgICAgIGFsdD1cImJhbm5lclwiXHJcbiAgICAgICAgd2lkdGg9ezIwMDB9XHJcbiAgICAgICAgaGVpZ2h0PXsyMDAwfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlO1xyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsIlNsaWRlIiwiaW1nIiwidGl0bGUiLCJtYWluVGl0bGUiLCJwcmljZSIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwiaDIiLCJiIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Slide.tsx\n"));

/***/ })

});