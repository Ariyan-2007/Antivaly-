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

/***/ "(app-pages-browser)/./components/ProductCard.tsx":
/*!************************************!*\
  !*** ./components/ProductCard.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=FaHeart,FaRegHeart,FaRegStar,FaStar!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ProductCard = (param)=>{\n    let { img, title, desc, rating, price } = param;\n    _s();\n    const [isLiked, setIsLiked] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    let heart = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaRegHeart, {\n        className: \"cursor-pointer\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n        lineNumber: 23,\n        columnNumber: 15\n    }, undefined);\n    const toggleLike = ()=>{\n        setIsLiked(!isLiked);\n        if (isLiked === false) {\n            heart = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaHeart, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                lineNumber: 27,\n                columnNumber: 15\n            }, undefined);\n        } else heart = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaRegHeart, {\n            className: \"cursor-pointer\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n            lineNumber: 28,\n            columnNumber: 20\n        }, undefined);\n    };\n    const generateRating = (rating)=>{\n        switch(rating){\n            case 1:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-1 text-[20px] text-[#ff9529]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaRegStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaRegStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaRegStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaRegStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 11\n                }, undefined);\n            case 2:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-1 text-[20px] text-[#ff9529]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaRegStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaRegStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaRegStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 11\n                }, undefined);\n            case 3:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-1 text-[20px] text-[#ff9529]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaRegStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaRegStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 11\n                }, undefined);\n            case 4:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-1 text-[20px] text-[#ff9529]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaRegStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 11\n                }, undefined);\n            case 5:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-1 text-[20px] text-[#ff9529]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 11\n                }, undefined);\n            default:\n                return null;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"px-4 py-4 border border-gray-800 rounded-xl max-w-[400px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: \"w-full h-auto\",\n                    src: img,\n                    width: 200,\n                    height: 300,\n                    alt: title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space-y-2 py-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-accent font-medium uppercase\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-500 h-[50px] max-w-[150px] line-clamp-2\",\n                        title: desc,\n                        children: desc\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: generateRating(rating)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"font-bold flex gap-4\",\n                        children: [\n                            \"BDT \",\n                            price,\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"del\", {\n                                className: \"text-gray-500 font-normal\",\n                                children: Number(price) * 2\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 11\n                            }, undefined),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"heart-icon \".concat(isLiked ? \"liked\" : \"\"),\n                        onClick: toggleLike,\n                        children: heart\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProductCard, \"eHCM9bKEgGkXltnJZ+5NUCvkPlo=\");\n_c = ProductCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCard);\nvar _c;\n$RefreshReg$(_c, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUHJvZHVjdENhcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRStCO0FBQ1M7QUFDZ0M7QUFVeEUsTUFBTU8sY0FBbUM7UUFBQyxFQUN4Q0MsR0FBRyxFQUNIQyxLQUFLLEVBQ0xDLElBQUksRUFDSkMsTUFBTSxFQUNOQyxLQUFLLEVBQ047O0lBQ0MsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ3ZDLElBQUlhLHNCQUFRLDhEQUFDWCxpSEFBVUE7UUFBQ1ksV0FBVTs7Ozs7O0lBQ2xDLE1BQU1DLGFBQWE7UUFDakJILFdBQVcsQ0FBQ0Q7UUFDWixJQUFJQSxZQUFZLE9BQU87WUFDckJFLHNCQUFRLDhEQUFDWiw4R0FBT0E7Ozs7O1FBQ2xCLE9BQU9ZLHNCQUFRLDhEQUFDWCxpSEFBVUE7WUFBQ1ksV0FBVTs7Ozs7O0lBQ3ZDO0lBRUEsTUFBTUUsaUJBQWlCLENBQUNQO1FBQ3RCLE9BQVFBO1lBQ04sS0FBSztnQkFDSCxxQkFDRSw4REFBQ1E7b0JBQUlILFdBQVU7O3NDQUNiLDhEQUFDViw2R0FBTUE7Ozs7O3NDQUNQLDhEQUFDRCxnSEFBU0E7Ozs7O3NDQUNWLDhEQUFDQSxnSEFBU0E7Ozs7O3NDQUNWLDhEQUFDQSxnSEFBU0E7Ozs7O3NDQUNWLDhEQUFDQSxnSEFBU0E7Ozs7Ozs7Ozs7O1lBR2hCLEtBQUs7Z0JBQ0gscUJBQ0UsOERBQUNjO29CQUFJSCxXQUFVOztzQ0FDYiw4REFBQ1YsNkdBQU1BOzs7OztzQ0FDUCw4REFBQ0EsNkdBQU1BOzs7OztzQ0FDUCw4REFBQ0QsZ0hBQVNBOzs7OztzQ0FDViw4REFBQ0EsZ0hBQVNBOzs7OztzQ0FDViw4REFBQ0EsZ0hBQVNBOzs7Ozs7Ozs7OztZQUloQixLQUFLO2dCQUNILHFCQUNFLDhEQUFDYztvQkFBSUgsV0FBVTs7c0NBQ2IsOERBQUNWLDZHQUFNQTs7Ozs7c0NBQ1AsOERBQUNBLDZHQUFNQTs7Ozs7c0NBQ1AsOERBQUNBLDZHQUFNQTs7Ozs7c0NBQ1AsOERBQUNELGdIQUFTQTs7Ozs7c0NBQ1YsOERBQUNBLGdIQUFTQTs7Ozs7Ozs7Ozs7WUFHaEIsS0FBSztnQkFDSCxxQkFDRSw4REFBQ2M7b0JBQUlILFdBQVU7O3NDQUNiLDhEQUFDViw2R0FBTUE7Ozs7O3NDQUNQLDhEQUFDQSw2R0FBTUE7Ozs7O3NDQUNQLDhEQUFDQSw2R0FBTUE7Ozs7O3NDQUNQLDhEQUFDQSw2R0FBTUE7Ozs7O3NDQUNQLDhEQUFDRCxnSEFBU0E7Ozs7Ozs7Ozs7O1lBR2hCLEtBQUs7Z0JBQ0gscUJBQ0UsOERBQUNjO29CQUFJSCxXQUFVOztzQ0FDYiw4REFBQ1YsNkdBQU1BOzs7OztzQ0FDUCw4REFBQ0EsNkdBQU1BOzs7OztzQ0FDUCw4REFBQ0EsNkdBQU1BOzs7OztzQ0FDUCw4REFBQ0EsNkdBQU1BOzs7OztzQ0FDUCw4REFBQ0EsNkdBQU1BOzs7Ozs7Ozs7OztZQUdiO2dCQUNFLE9BQU87UUFDWDtJQUNGO0lBQ0EscUJBQ0UsOERBQUNhO1FBQUlILFdBQVU7OzBCQUNiLDhEQUFDRzswQkFDQyw0RUFBQ25CLGtEQUFLQTtvQkFDSmdCLFdBQVU7b0JBQ1ZJLEtBQUtaO29CQUNMYSxPQUFPO29CQUNQQyxRQUFRO29CQUNSQyxLQUFLZDs7Ozs7Ozs7Ozs7MEJBSVQsOERBQUNVO2dCQUFJSCxXQUFVOztrQ0FDYiw4REFBQ1E7d0JBQUdSLFdBQVU7a0NBQXFDUDs7Ozs7O2tDQUNuRCw4REFBQ2dCO3dCQUNDVCxXQUFVO3dCQUNWUCxPQUFPQztrQ0FFTkE7Ozs7OztrQ0FFSCw4REFBQ1M7a0NBQUtELGVBQWVQOzs7Ozs7a0NBQ3JCLDhEQUFDUTt3QkFBSUgsV0FBVTs7NEJBQXVCOzRCQUMvQko7NEJBQU87MENBQ1osOERBQUNjO2dDQUFJVixXQUFVOzBDQUE2QlcsT0FBT2YsU0FBUzs7Ozs7OzRCQUFTOzs7Ozs7O2tDQUd2RSw4REFBQ087d0JBQ0NILFdBQVcsY0FBcUMsT0FBdkJILFVBQVUsVUFBVTt3QkFDN0NlLFNBQVNYO2tDQUVSRjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1g7R0E1R01SO0tBQUFBO0FBOEdOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvZHVjdENhcmQudHN4PzU3ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGYUhlYXJ0LCBGYVJlZ0hlYXJ0LCBGYVJlZ1N0YXIsIEZhU3RhciB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuXG5pbnRlcmZhY2UgcHJvcHNUeXBlIHtcbiAgaW1nOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2M6IHN0cmluZztcbiAgcmF0aW5nOiBudW1iZXI7XG4gIHByaWNlOiBzdHJpbmc7XG59XG5cbmNvbnN0IFByb2R1Y3RDYXJkOiBSZWFjdC5GQzxwcm9wc1R5cGU+ID0gKHtcbiAgaW1nLFxuICB0aXRsZSxcbiAgZGVzYyxcbiAgcmF0aW5nLFxuICBwcmljZSxcbn0pID0+IHtcbiAgY29uc3QgW2lzTGlrZWQsIHNldElzTGlrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBsZXQgaGVhcnQgPSA8RmFSZWdIZWFydCBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiIC8+O1xuICBjb25zdCB0b2dnbGVMaWtlID0gKCkgPT4ge1xuICAgIHNldElzTGlrZWQoIWlzTGlrZWQpO1xuICAgIGlmIChpc0xpa2VkID09PSBmYWxzZSkge1xuICAgICAgaGVhcnQgPSA8RmFIZWFydCAvPjtcbiAgICB9IGVsc2UgaGVhcnQgPSA8RmFSZWdIZWFydCBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiIC8+O1xuICB9O1xuXG4gIGNvbnN0IGdlbmVyYXRlUmF0aW5nID0gKHJhdGluZzogbnVtYmVyKSA9PiB7XG4gICAgc3dpdGNoIChyYXRpbmcpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTEgdGV4dC1bMjBweF0gdGV4dC1bI2ZmOTUyOV1cIj5cbiAgICAgICAgICAgIDxGYVN0YXIgLz5cbiAgICAgICAgICAgIDxGYVJlZ1N0YXIgLz5cbiAgICAgICAgICAgIDxGYVJlZ1N0YXIgLz5cbiAgICAgICAgICAgIDxGYVJlZ1N0YXIgLz5cbiAgICAgICAgICAgIDxGYVJlZ1N0YXIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTEgdGV4dC1bMjBweF0gdGV4dC1bI2ZmOTUyOV1cIj5cbiAgICAgICAgICAgIDxGYVN0YXIgLz5cbiAgICAgICAgICAgIDxGYVN0YXIgLz5cbiAgICAgICAgICAgIDxGYVJlZ1N0YXIgLz5cbiAgICAgICAgICAgIDxGYVJlZ1N0YXIgLz5cbiAgICAgICAgICAgIDxGYVJlZ1N0YXIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcblxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMSB0ZXh0LVsyMHB4XSB0ZXh0LVsjZmY5NTI5XVwiPlxuICAgICAgICAgICAgPEZhU3RhciAvPlxuICAgICAgICAgICAgPEZhU3RhciAvPlxuICAgICAgICAgICAgPEZhU3RhciAvPlxuICAgICAgICAgICAgPEZhUmVnU3RhciAvPlxuICAgICAgICAgICAgPEZhUmVnU3RhciAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgY2FzZSA0OlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMSB0ZXh0LVsyMHB4XSB0ZXh0LVsjZmY5NTI5XVwiPlxuICAgICAgICAgICAgPEZhU3RhciAvPlxuICAgICAgICAgICAgPEZhU3RhciAvPlxuICAgICAgICAgICAgPEZhU3RhciAvPlxuICAgICAgICAgICAgPEZhU3RhciAvPlxuICAgICAgICAgICAgPEZhUmVnU3RhciAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgY2FzZSA1OlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMSB0ZXh0LVsyMHB4XSB0ZXh0LVsjZmY5NTI5XVwiPlxuICAgICAgICAgICAgPEZhU3RhciAvPlxuICAgICAgICAgICAgPEZhU3RhciAvPlxuICAgICAgICAgICAgPEZhU3RhciAvPlxuICAgICAgICAgICAgPEZhU3RhciAvPlxuICAgICAgICAgICAgPEZhU3RhciAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBweS00IGJvcmRlciBib3JkZXItZ3JheS04MDAgcm91bmRlZC14bCBtYXgtdy1bNDAwcHhdXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvXCJcbiAgICAgICAgICBzcmM9e2ltZ31cbiAgICAgICAgICB3aWR0aD17MjAwfVxuICAgICAgICAgIGhlaWdodD17MzAwfVxuICAgICAgICAgIGFsdD17dGl0bGV9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTIgcHktMlwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1hY2NlbnQgZm9udC1tZWRpdW0gdXBwZXJjYXNlXCI+e3RpdGxlfTwvaDI+XG4gICAgICAgIDxwXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBoLVs1MHB4XSBtYXgtdy1bMTUwcHhdIGxpbmUtY2xhbXAtMlwiXG4gICAgICAgICAgdGl0bGU9e2Rlc2N9XG4gICAgICAgID5cbiAgICAgICAgICB7ZGVzY31cbiAgICAgICAgPC9wPlxuICAgICAgICA8ZGl2PntnZW5lcmF0ZVJhdGluZyhyYXRpbmcpfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCBmbGV4IGdhcC00XCI+XG4gICAgICAgICAgQkRUIHtwcmljZX17XCIgXCJ9XG4gICAgICAgICAgPGRlbCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIGZvbnQtbm9ybWFsXCI+e051bWJlcihwcmljZSkgKiAyfTwvZGVsPntcIiBcIn1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YGhlYXJ0LWljb24gJHtpc0xpa2VkID8gXCJsaWtlZFwiIDogXCJcIn1gfVxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUxpa2V9XG4gICAgICAgID5cbiAgICAgICAgICB7aGVhcnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Q2FyZDtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJGYUhlYXJ0IiwiRmFSZWdIZWFydCIsIkZhUmVnU3RhciIsIkZhU3RhciIsIlByb2R1Y3RDYXJkIiwiaW1nIiwidGl0bGUiLCJkZXNjIiwicmF0aW5nIiwicHJpY2UiLCJpc0xpa2VkIiwic2V0SXNMaWtlZCIsImhlYXJ0IiwiY2xhc3NOYW1lIiwidG9nZ2xlTGlrZSIsImdlbmVyYXRlUmF0aW5nIiwiZGl2Iiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJoMiIsInAiLCJkZWwiLCJOdW1iZXIiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ProductCard.tsx\n"));

/***/ })

});