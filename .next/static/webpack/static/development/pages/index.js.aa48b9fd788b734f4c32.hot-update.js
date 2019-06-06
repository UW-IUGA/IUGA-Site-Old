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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_navbarImages_IUGA_header_image_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_assets/navbarImages/IUGA-header-image.jpg */ "./components/_assets/navbarImages/IUGA-header-image.jpg");
/* harmony import */ var _assets_navbarImages_IUGA_header_image_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_navbarImages_IUGA_header_image_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NavigationBar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavigationBar.css */ "./components/NavigationBar/NavigationBar.css");
/* harmony import */ var _NavigationBar_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_NavigationBar_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _data_navigationBarLinks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_data/navigationBarLinks */ "./components/_data/navigationBarLinks.ts");
var _jsxFileName = "/Users/williamk/Desktop/Work/IUGA/iuga-site/components/NavigationBar/NavigationBar.tsx";







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
const NavigationBar = () => {
  const [isOpen, setIsOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Navbar"], {
    className: "navigation-bar",
    light: true,
    expand: "md",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavbarBrand"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "IUGA Logo",
    id: "iuga-logo",
    src: _assets_navbarImages_IUGA_header_image_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavbarToggler"], {
    onClick: () => setIsOpen(!isOpen),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Collapse"], {
    isOpen: isOpen,
    navbar: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
    className: "ml-auto",
    navbar: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, _data_navigationBarLinks__WEBPACK_IMPORTED_MODULE_5__["navigationBarLinks"].map(navbarLink => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: navbarLink.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "navbar-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: undefined
    }, navbarLink.name)));
  })))));
};

/***/ })

})
//# sourceMappingURL=index.js.aa48b9fd788b734f4c32.hot-update.js.map