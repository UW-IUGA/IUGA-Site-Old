webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Page/Page.tsx":
/*!**********************************!*\
  !*** ./components/Page/Page.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavigationBar_NavigationBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../NavigationBar/NavigationBar */ "./components/NavigationBar/NavigationBar.tsx");
/* harmony import */ var _Fonts_Fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Fonts/Fonts */ "./components/Fonts/Fonts.ts");
/* harmony import */ var _Page_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Page.css */ "./components/Page/Page.css");
/* harmony import */ var _Page_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Page_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);







/**
 * Page is the base page used for all the pages on the IUGA website. It will provide the Navigation
 * bar with the appropriately selected menu option.
 */
var Page = function Page(_ref) {
  var children = _ref.children,
      router = _ref.router;

  /**
   * On component mount, load the fonts. 
   */
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(_Fonts_Fonts__WEBPACK_IMPORTED_MODULE_2__["Fonts"])();
  }, []);
  /**
   * This line of code grabs the page from the query.
   */

  var page = router && router.query && router.query.page || "";
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavigationBar_NavigationBar__WEBPACK_IMPORTED_MODULE_1__["NavigationBar"], {
    page: page
  }), "Hi from page ", page, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(Page));

/***/ })

})
//# sourceMappingURL=index.js.7733ebafcc7f51eba3d6.hot-update.js.map