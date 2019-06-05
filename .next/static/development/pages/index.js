(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./components/Page/Page.tsx":
/*!**********************************!*\
  !*** ./components/Page/Page.tsx ***!
  \**********************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Page = ({
  children
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Hi from page", children);
};

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fwilliamk%2FDesktop%2FWork%2FIUGA%2Fiuga-site%2Fpages%2Findex.tsx!./":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fwilliamk%2FDesktop%2FWork%2FIUGA%2Fiuga-site%2Fpages%2Findex.tsx ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var page = __webpack_require__(/*! ./pages/index.tsx */ "./pages/index.tsx")
      if(true) {
        module.hot.accept(/*! ./pages/index.tsx */ "./pages/index.tsx", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.tsx */ "./pages/index.tsx")
          next.router.update("/", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_829b10deddf10e1653a8 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_829b10deddf10e1653a8 */ "dll-reference dll_829b10deddf10e1653a8"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Page_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Page/Page */ "./components/Page/Page.tsx");
var _jsxFileName = "/Users/williamk/Desktop/Work/IUGA/iuga-site/pages/index.tsx";



const IndexPage = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Page_Page__WEBPACK_IMPORTED_MODULE_1__["Page"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "hi"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "hihi"));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ 0:
/*!********************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fwilliamk%2FDesktop%2FWork%2FIUGA%2Fiuga-site%2Fpages%2Findex.tsx ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fwilliamk%2FDesktop%2FWork%2FIUGA%2Fiuga-site%2Fpages%2Findex.tsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fwilliamk%2FDesktop%2FWork%2FIUGA%2Fiuga-site%2Fpages%2Findex.tsx!./");


/***/ }),

/***/ "dll-reference dll_829b10deddf10e1653a8":
/*!*******************************************!*\
  !*** external "dll_829b10deddf10e1653a8" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_829b10deddf10e1653a8;

/***/ })

},[[0,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map