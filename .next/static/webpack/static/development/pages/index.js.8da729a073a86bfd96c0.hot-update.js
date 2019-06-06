webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/NavigationBar/NavigationBar.tsx":
/*!****************************************************!*\
  !*** ./components/NavigationBar/NavigationBar.tsx ***!
  \****************************************************/
/*! exports provided: NavigationBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationBar", function() { return NavigationBar; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_navbarImages_IUGA_header_image_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_assets/navbarImages/IUGA-header-image.jpg */ "./components/_assets/navbarImages/IUGA-header-image.jpg");
/* harmony import */ var _assets_navbarImages_IUGA_header_image_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_navbarImages_IUGA_header_image_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _NavigationBar_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavigationBar.css */ "./components/NavigationBar/NavigationBar.css");
/* harmony import */ var _NavigationBar_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_NavigationBar_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _data_navigationBarLinks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_data/navigationBarLinks */ "./components/_data/navigationBarLinks.ts");
/* harmony import */ var _data_pageCodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_data/pageCodes */ "./components/_data/pageCodes.ts");









/**
 * NavigationBar is the main navigation bar of the IUGA website. A lot of it is boilerplate code
 * that can be found on the reactstrap documentation: 
 * 
 * https://reactstrap.github.io/components/navbar/
 * 
 * Note that at the moment the Reactstrap documentation has a dependency that's actually blocked by
 * adblockers.
 * 
 * Last Modified:
 *      William Kwok
 *      June 5, 2019
 */
var NavigationBar = function NavigationBar(_ref) {
  var page = _ref.page;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Navbar"], {
    className: "navigation-bar",
    light: true,
    expand: "md"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "IUGA Logo",
    id: "iuga-logo",
    src: _assets_navbarImages_IUGA_header_image_jpg__WEBPACK_IMPORTED_MODULE_3___default.a
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavbarToggler"], {
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Collapse"], {
    isOpen: isOpen,
    navbar: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"], {
    className: "ml-auto",
    navbar: true
  }, _data_navigationBarLinks__WEBPACK_IMPORTED_MODULE_6__["navigationBarLinks"].map(function (navbarLink) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavItem"], {
      className: "navbar-item",
      key: navbarLink.name
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: navbarLink.link
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "navbar-link ".concat(_data_pageCodes__WEBPACK_IMPORTED_MODULE_7__["PAGE_CODES"][page] === navbarLink.name ? "navbar-link-active" : "")
    }, navbarLink.name)));
  })))));
};

/***/ })

})
//# sourceMappingURL=index.js.8da729a073a86bfd96c0.hot-update.js.map