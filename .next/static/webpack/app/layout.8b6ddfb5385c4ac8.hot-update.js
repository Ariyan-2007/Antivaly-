"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./lib/FavoritesContext.tsx":
/*!**********************************!*\
  !*** ./lib/FavoritesContext.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FavoritesProvider: function() { return /* binding */ FavoritesProvider; },\n/* harmony export */   useFavorites: function() { return /* binding */ useFavorites; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ FavoritesProvider,useFavorites auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n// Create FavoritesContext.js\n\nconst FavoritesContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    favorites: 1\n});\nfunction FavoritesProvider(param) {\n    let { children } = param;\n    _s();\n    const [favorites, setFavorites] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    // Add/remove product logic here\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FavoritesContext.Provider, {\n        value: {\n            favorites\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\lib\\\\FavoritesContext.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(FavoritesProvider, \"3El1Cthm//7p7y/KuXs0Dadc62M=\");\n_c = FavoritesProvider;\nfunction useFavorites() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(FavoritesContext);\n}\n_s1(useFavorites, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"FavoritesProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2xpYi9GYXZvcml0ZXNDb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEsNkJBQTZCO0FBQytCO0FBTTVELE1BQU1HLGlDQUFtQkgsb0RBQWFBLENBQVU7SUFBRUksV0FBVztBQUFFO0FBRXhELFNBQVNDLGtCQUFrQixLQUEyQztRQUEzQyxFQUFFQyxRQUFRLEVBQWlDLEdBQTNDOztJQUNoQyxNQUFNLENBQUNGLFdBQVdHLGFBQWEsR0FBR0wsK0NBQVFBLENBQUM7SUFDM0MsZ0NBQWdDO0lBRWhDLHFCQUNFLDhEQUFDQyxpQkFBaUJLLFFBQVE7UUFBQ0MsT0FBTztZQUFFTDtRQUFVO2tCQUMzQ0U7Ozs7OztBQUdQO0dBVGdCRDtLQUFBQTtBQVdULFNBQVNLOztJQUNkLE9BQU9ULGlEQUFVQSxDQUFDRTtBQUNwQjtJQUZnQk8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL0Zhdm9yaXRlc0NvbnRleHQudHN4PzdjZGYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG4vLyBDcmVhdGUgRmF2b3JpdGVzQ29udGV4dC5qc1xyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxudHlwZSBDb250ZXh0ID0ge1xyXG4gIGZhdm9yaXRlczogbnVtYmVyO1xyXG59O1xyXG5cclxuY29uc3QgRmF2b3JpdGVzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8Q29udGV4dD4oeyBmYXZvcml0ZXM6IDEgfSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRmF2b3JpdGVzUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkge1xyXG4gIGNvbnN0IFtmYXZvcml0ZXMsIHNldEZhdm9yaXRlc10gPSB1c2VTdGF0ZSgxKTtcclxuICAvLyBBZGQvcmVtb3ZlIHByb2R1Y3QgbG9naWMgaGVyZVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZhdm9yaXRlc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgZmF2b3JpdGVzIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0Zhdm9yaXRlc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZhdm9yaXRlcygpIHtcclxuICByZXR1cm4gdXNlQ29udGV4dChGYXZvcml0ZXNDb250ZXh0KTtcclxufVxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkZhdm9yaXRlc0NvbnRleHQiLCJmYXZvcml0ZXMiLCJGYXZvcml0ZXNQcm92aWRlciIsImNoaWxkcmVuIiwic2V0RmF2b3JpdGVzIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUZhdm9yaXRlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./lib/FavoritesContext.tsx\n"));

/***/ })

});