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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=FaHeart,FaRegHeart,FaRegStar,FaStar!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.mjs\");\n/* harmony import */ var _lib_FavoritesContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/FavoritesContext */ \"(app-pages-browser)/./lib/FavoritesContext.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst ProductCard = (param)=>{\n    let { img, title, desc, rating, price } = param;\n    _s();\n    let { favorites, setFavorites } = (0,_lib_FavoritesContext__WEBPACK_IMPORTED_MODULE_3__.useFavorites)();\n    const [isLiked, setIsLiked] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const toggleLike = ()=>{\n        setIsLiked(!isLiked);\n        if (isLiked) setFavorites(favorites + 1);\n        else setFavorites(favorites - 1);\n    };\n    const generateRating = (rating)=>{\n        switch(rating){\n            case 1:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-1 text-[20px] text-[#ff9529]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaRegStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaRegStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaRegStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaRegStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 11\n                }, undefined);\n            case 2:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-1 text-[20px] text-[#ff9529]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaRegStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaRegStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaRegStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 11\n                }, undefined);\n            case 3:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-1 text-[20px] text-[#ff9529]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaRegStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaRegStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 11\n                }, undefined);\n            case 4:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-1 text-[20px] text-[#ff9529]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaRegStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 11\n                }, undefined);\n            case 5:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-1 text-[20px] text-[#ff9529]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaStar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 11\n                }, undefined);\n            default:\n                return null;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"px-4 py-4 border border-gray-800 rounded-xl max-w-[400px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: \"w-full h-auto\",\n                    src: img,\n                    width: 200,\n                    height: 300,\n                    alt: title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space-y-2 py-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-accent font-medium uppercase\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-500 h-[50px] max-w-[150px] line-clamp-2\",\n                        title: desc,\n                        children: desc\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: generateRating(rating)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"font-bold flex gap-4\",\n                        children: [\n                            \"BDT \",\n                            price,\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"del\", {\n                                className: \"text-gray-500 font-normal\",\n                                children: Number(price) * 2\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 11\n                            }, undefined),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"heart-icon \".concat(isLiked ? \"liked\" : \"\", \" w-fit\"),\n                        onClick: toggleLike,\n                        children: isLiked ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaHeart, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 119,\n                            columnNumber: 22\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeart_FaRegHeart_FaRegStar_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaRegHeart, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                            lineNumber: 119,\n                            columnNumber: 36\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\e7480\\\\Desktop\\\\Ariyan\\\\NextJS\\\\ecommerce\\\\Antivaly-\\\\components\\\\ProductCard.tsx\",\n        lineNumber: 90,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProductCard, \"BfKwVvMCrdxxbxXqrihH+MhuNZ4=\", false, function() {\n    return [\n        _lib_FavoritesContext__WEBPACK_IMPORTED_MODULE_3__.useFavorites\n    ];\n});\n_c = ProductCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCard);\nvar _c;\n$RefreshReg$(_c, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUHJvZHVjdENhcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUUrQjtBQUNTO0FBQ2dDO0FBQ2xCO0FBVXRELE1BQU1RLGNBQW1DO1FBQUMsRUFDeENDLEdBQUcsRUFDSEMsS0FBSyxFQUNMQyxJQUFJLEVBQ0pDLE1BQU0sRUFDTkMsS0FBSyxFQUNOOztJQUNDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxZQUFZLEVBQUUsR0FBR1IsbUVBQVlBO0lBQzlDLE1BQU0sQ0FBQ1MsU0FBU0MsV0FBVyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNZ0IsYUFBYTtRQUNqQkQsV0FBVyxDQUFDRDtRQUNaLElBQUlBLFNBQVNELGFBQWFELFlBQVk7YUFDakNDLGFBQWFELFlBQVk7SUFDaEM7SUFFQSxNQUFNSyxpQkFBaUIsQ0FBQ1A7UUFDdEIsT0FBUUE7WUFDTixLQUFLO2dCQUNILHFCQUNFLDhEQUFDUTtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNmLDZHQUFNQTs7Ozs7c0NBQ1AsOERBQUNELGdIQUFTQTs7Ozs7c0NBQ1YsOERBQUNBLGdIQUFTQTs7Ozs7c0NBQ1YsOERBQUNBLGdIQUFTQTs7Ozs7c0NBQ1YsOERBQUNBLGdIQUFTQTs7Ozs7Ozs7Ozs7WUFHaEIsS0FBSztnQkFDSCxxQkFDRSw4REFBQ2U7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDZiw2R0FBTUE7Ozs7O3NDQUNQLDhEQUFDQSw2R0FBTUE7Ozs7O3NDQUNQLDhEQUFDRCxnSEFBU0E7Ozs7O3NDQUNWLDhEQUFDQSxnSEFBU0E7Ozs7O3NDQUNWLDhEQUFDQSxnSEFBU0E7Ozs7Ozs7Ozs7O1lBSWhCLEtBQUs7Z0JBQ0gscUJBQ0UsOERBQUNlO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ2YsNkdBQU1BOzs7OztzQ0FDUCw4REFBQ0EsNkdBQU1BOzs7OztzQ0FDUCw4REFBQ0EsNkdBQU1BOzs7OztzQ0FDUCw4REFBQ0QsZ0hBQVNBOzs7OztzQ0FDViw4REFBQ0EsZ0hBQVNBOzs7Ozs7Ozs7OztZQUdoQixLQUFLO2dCQUNILHFCQUNFLDhEQUFDZTtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNmLDZHQUFNQTs7Ozs7c0NBQ1AsOERBQUNBLDZHQUFNQTs7Ozs7c0NBQ1AsOERBQUNBLDZHQUFNQTs7Ozs7c0NBQ1AsOERBQUNBLDZHQUFNQTs7Ozs7c0NBQ1AsOERBQUNELGdIQUFTQTs7Ozs7Ozs7Ozs7WUFHaEIsS0FBSztnQkFDSCxxQkFDRSw4REFBQ2U7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDZiw2R0FBTUE7Ozs7O3NDQUNQLDhEQUFDQSw2R0FBTUE7Ozs7O3NDQUNQLDhEQUFDQSw2R0FBTUE7Ozs7O3NDQUNQLDhEQUFDQSw2R0FBTUE7Ozs7O3NDQUNQLDhEQUFDQSw2R0FBTUE7Ozs7Ozs7Ozs7O1lBR2I7Z0JBQ0UsT0FBTztRQUNYO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ2M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEOzBCQUNDLDRFQUFDcEIsa0RBQUtBO29CQUNKcUIsV0FBVTtvQkFDVkMsS0FBS2I7b0JBQ0xjLE9BQU87b0JBQ1BDLFFBQVE7b0JBQ1JDLEtBQUtmOzs7Ozs7Ozs7OzswQkFJVCw4REFBQ1U7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDSzt3QkFBR0wsV0FBVTtrQ0FBcUNYOzs7Ozs7a0NBQ25ELDhEQUFDaUI7d0JBQ0NOLFdBQVU7d0JBQ1ZYLE9BQU9DO2tDQUVOQTs7Ozs7O2tDQUVILDhEQUFDUztrQ0FBS0QsZUFBZVA7Ozs7OztrQ0FDckIsOERBQUNRO3dCQUFJQyxXQUFVOzs0QkFBdUI7NEJBQy9CUjs0QkFBTzswQ0FDWiw4REFBQ2U7Z0NBQUlQLFdBQVU7MENBQTZCUSxPQUFPaEIsU0FBUzs7Ozs7OzRCQUFTOzs7Ozs7O2tDQUd2RSw4REFBQ087d0JBQ0NDLFdBQVcsY0FBcUMsT0FBdkJMLFVBQVUsVUFBVSxJQUFHO3dCQUNoRGMsU0FBU1o7a0NBRVJGLHdCQUFVLDhEQUFDYiw4R0FBT0E7Ozs7c0RBQU0sOERBQUNDLGlIQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs5QztHQTVHTUk7O1FBTzhCRCwrREFBWUE7OztLQVAxQ0M7QUE4R04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0Q2FyZC50c3g/NTdkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZhSGVhcnQsIEZhUmVnSGVhcnQsIEZhUmVnU3RhciwgRmFTdGFyIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgeyB1c2VGYXZvcml0ZXMgfSBmcm9tIFwiQC9saWIvRmF2b3JpdGVzQ29udGV4dFwiO1xuXG5pbnRlcmZhY2UgcHJvcHNUeXBlIHtcbiAgaW1nOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2M6IHN0cmluZztcbiAgcmF0aW5nOiBudW1iZXI7XG4gIHByaWNlOiBzdHJpbmc7XG59XG5cbmNvbnN0IFByb2R1Y3RDYXJkOiBSZWFjdC5GQzxwcm9wc1R5cGU+ID0gKHtcbiAgaW1nLFxuICB0aXRsZSxcbiAgZGVzYyxcbiAgcmF0aW5nLFxuICBwcmljZSxcbn0pID0+IHtcbiAgbGV0IHsgZmF2b3JpdGVzLCBzZXRGYXZvcml0ZXMgfSA9IHVzZUZhdm9yaXRlcygpO1xuICBjb25zdCBbaXNMaWtlZCwgc2V0SXNMaWtlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgdG9nZ2xlTGlrZSA9ICgpID0+IHtcbiAgICBzZXRJc0xpa2VkKCFpc0xpa2VkKTtcbiAgICBpZiAoaXNMaWtlZCkgc2V0RmF2b3JpdGVzKGZhdm9yaXRlcyArIDEpO1xuICAgIGVsc2Ugc2V0RmF2b3JpdGVzKGZhdm9yaXRlcyAtIDEpO1xuICB9O1xuXG4gIGNvbnN0IGdlbmVyYXRlUmF0aW5nID0gKHJhdGluZzogbnVtYmVyKSA9PiB7XG4gICAgc3dpdGNoIChyYXRpbmcpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTEgdGV4dC1bMjBweF0gdGV4dC1bI2ZmOTUyOV1cIj5cbiAgICAgICAgICAgIDxGYVN0YXIgLz5cbiAgICAgICAgICAgIDxGYVJlZ1N0YXIgLz5cbiAgICAgICAgICAgIDxGYVJlZ1N0YXIgLz5cbiAgICAgICAgICAgIDxGYVJlZ1N0YXIgLz5cbiAgICAgICAgICAgIDxGYVJlZ1N0YXIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTEgdGV4dC1bMjBweF0gdGV4dC1bI2ZmOTUyOV1cIj5cbiAgICAgICAgICAgIDxGYVN0YXIgLz5cbiAgICAgICAgICAgIDxGYVN0YXIgLz5cbiAgICAgICAgICAgIDxGYVJlZ1N0YXIgLz5cbiAgICAgICAgICAgIDxGYVJlZ1N0YXIgLz5cbiAgICAgICAgICAgIDxGYVJlZ1N0YXIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcblxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMSB0ZXh0LVsyMHB4XSB0ZXh0LVsjZmY5NTI5XVwiPlxuICAgICAgICAgICAgPEZhU3RhciAvPlxuICAgICAgICAgICAgPEZhU3RhciAvPlxuICAgICAgICAgICAgPEZhU3RhciAvPlxuICAgICAgICAgICAgPEZhUmVnU3RhciAvPlxuICAgICAgICAgICAgPEZhUmVnU3RhciAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgY2FzZSA0OlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMSB0ZXh0LVsyMHB4XSB0ZXh0LVsjZmY5NTI5XVwiPlxuICAgICAgICAgICAgPEZhU3RhciAvPlxuICAgICAgICAgICAgPEZhU3RhciAvPlxuICAgICAgICAgICAgPEZhU3RhciAvPlxuICAgICAgICAgICAgPEZhU3RhciAvPlxuICAgICAgICAgICAgPEZhUmVnU3RhciAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgY2FzZSA1OlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMSB0ZXh0LVsyMHB4XSB0ZXh0LVsjZmY5NTI5XVwiPlxuICAgICAgICAgICAgPEZhU3RhciAvPlxuICAgICAgICAgICAgPEZhU3RhciAvPlxuICAgICAgICAgICAgPEZhU3RhciAvPlxuICAgICAgICAgICAgPEZhU3RhciAvPlxuICAgICAgICAgICAgPEZhU3RhciAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBweS00IGJvcmRlciBib3JkZXItZ3JheS04MDAgcm91bmRlZC14bCBtYXgtdy1bNDAwcHhdXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvXCJcbiAgICAgICAgICBzcmM9e2ltZ31cbiAgICAgICAgICB3aWR0aD17MjAwfVxuICAgICAgICAgIGhlaWdodD17MzAwfVxuICAgICAgICAgIGFsdD17dGl0bGV9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTIgcHktMlwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1hY2NlbnQgZm9udC1tZWRpdW0gdXBwZXJjYXNlXCI+e3RpdGxlfTwvaDI+XG4gICAgICAgIDxwXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBoLVs1MHB4XSBtYXgtdy1bMTUwcHhdIGxpbmUtY2xhbXAtMlwiXG4gICAgICAgICAgdGl0bGU9e2Rlc2N9XG4gICAgICAgID5cbiAgICAgICAgICB7ZGVzY31cbiAgICAgICAgPC9wPlxuICAgICAgICA8ZGl2PntnZW5lcmF0ZVJhdGluZyhyYXRpbmcpfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCBmbGV4IGdhcC00XCI+XG4gICAgICAgICAgQkRUIHtwcmljZX17XCIgXCJ9XG4gICAgICAgICAgPGRlbCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIGZvbnQtbm9ybWFsXCI+e051bWJlcihwcmljZSkgKiAyfTwvZGVsPntcIiBcIn1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YGhlYXJ0LWljb24gJHtpc0xpa2VkID8gXCJsaWtlZFwiIDogXCJcIn0gdy1maXRgfVxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUxpa2V9XG4gICAgICAgID5cbiAgICAgICAgICB7aXNMaWtlZCA/IDxGYUhlYXJ0IC8+IDogPEZhUmVnSGVhcnQgLz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Q2FyZDtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJGYUhlYXJ0IiwiRmFSZWdIZWFydCIsIkZhUmVnU3RhciIsIkZhU3RhciIsInVzZUZhdm9yaXRlcyIsIlByb2R1Y3RDYXJkIiwiaW1nIiwidGl0bGUiLCJkZXNjIiwicmF0aW5nIiwicHJpY2UiLCJmYXZvcml0ZXMiLCJzZXRGYXZvcml0ZXMiLCJpc0xpa2VkIiwic2V0SXNMaWtlZCIsInRvZ2dsZUxpa2UiLCJnZW5lcmF0ZVJhdGluZyIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiaDIiLCJwIiwiZGVsIiwiTnVtYmVyIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ProductCard.tsx\n"));

/***/ })

});