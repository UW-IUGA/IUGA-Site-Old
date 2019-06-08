module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ContentBox/ContentBox.css":
/*!**********************************************!*\
  !*** ./components/ContentBox/ContentBox.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/ContentBox/ContentBox.tsx":
/*!**********************************************!*\
  !*** ./components/ContentBox/ContentBox.tsx ***!
  \**********************************************/
/*! exports provided: ContentBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentBox", function() { return ContentBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ContentBox_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentBox.css */ "./components/ContentBox/ContentBox.css");
/* harmony import */ var _ContentBox_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ContentBox_css__WEBPACK_IMPORTED_MODULE_1__);


var ContentBox = function ContentBox(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content-box"
  }, children);
};

/***/ }),

/***/ "./components/_assets/electionsImages/2019/alejandro.jpg":
/*!***************************************************************!*\
  !*** ./components/_assets/electionsImages/2019/alejandro.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/alejandro-689ad8ef612615ceaf4a22479762b5c7.jpg";

/***/ }),

/***/ "./components/_assets/electionsImages/2019/caseytran.jpg":
/*!***************************************************************!*\
  !*** ./components/_assets/electionsImages/2019/caseytran.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/caseytran-d39fddfdb55440c1e04e30e9941a652f.jpg";

/***/ }),

/***/ "./components/_assets/electionsImages/2019/godgiven.jpg":
/*!**************************************************************!*\
  !*** ./components/_assets/electionsImages/2019/godgiven.jpg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/godgiven-2c375a5eb1378b525597e01a5eca4183.jpg";

/***/ }),

/***/ "./components/_assets/electionsImages/2019/shrutir.jpg":
/*!*************************************************************!*\
  !*** ./components/_assets/electionsImages/2019/shrutir.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/shrutir-a12c40d3c3b26f5b472bad93da073a89.jpg";

/***/ }),

/***/ "./components/_assets/electionsImages/2019/williamkwok.jpg":
/*!*****************************************************************!*\
  !*** ./components/_assets/electionsImages/2019/williamkwok.jpg ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/williamkwok-ac86c14d0377cc8393f088f2acd01964.jpg";

/***/ }),

/***/ "./components/_data/homePageData.ts":
/*!******************************************!*\
  !*** ./components/_data/homePageData.ts ***!
  \******************************************/
/*! exports provided: homePageData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homePageData", function() { return homePageData; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_electionsImages_2019_alejandro_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_assets/electionsImages/2019/alejandro.jpg */ "./components/_assets/electionsImages/2019/alejandro.jpg");
/* harmony import */ var _assets_electionsImages_2019_alejandro_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_electionsImages_2019_alejandro_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_electionsImages_2019_williamkwok_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_assets/electionsImages/2019/williamkwok.jpg */ "./components/_assets/electionsImages/2019/williamkwok.jpg");
/* harmony import */ var _assets_electionsImages_2019_williamkwok_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_electionsImages_2019_williamkwok_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_electionsImages_2019_caseytran_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_assets/electionsImages/2019/caseytran.jpg */ "./components/_assets/electionsImages/2019/caseytran.jpg");
/* harmony import */ var _assets_electionsImages_2019_caseytran_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_electionsImages_2019_caseytran_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_electionsImages_2019_godgiven_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_assets/electionsImages/2019/godgiven.jpg */ "./components/_assets/electionsImages/2019/godgiven.jpg");
/* harmony import */ var _assets_electionsImages_2019_godgiven_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_electionsImages_2019_godgiven_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_electionsImages_2019_shrutir_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_assets/electionsImages/2019/shrutir.jpg */ "./components/_assets/electionsImages/2019/shrutir.jpg");
/* harmony import */ var _assets_electionsImages_2019_shrutir_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_electionsImages_2019_shrutir_jpg__WEBPACK_IMPORTED_MODULE_6__);


var _positionInformation;







/**
 * Use these officers enumerates below when you define them and the associated role.
 * 
 * Last Modified
 *      William Kwok
 *      June 7, 2019
 */

var Officers;

(function (Officers) {
  Officers["PRESIDENT"] = "President";
  Officers["VICE_PRESIDENT"] = "Vice President";
  Officers["FINANCE"] = "Director of Finance";
  Officers["CREATIVE"] = "Creative Director";
  Officers["PUBLIC_RELATIONS"] = "Director of Public Relations";
  Officers["OUTREACH"] = "Director of Outreach";
  Officers["DIVERSITY"] = "Director of Diversity Efforts";
  Officers["IT"] = "Director of Information Technology";
  Officers["ACADEMIC"] = "Director of Academic Support";
})(Officers || (Officers = {}));

/**
 * homePageData is all the data that is on the home page.
 * 
 * Includes: 
 *      Main Blurb
 *      Social Media Links and Associated FontAwesome Icon
 *      Officers
 *      Officer position descriptions
 *      Membership blurb
 * 
 * Last Modified
 *      William Kwok
 *      June 7, 2019
 */
var homePageData = {
  blurbTitle: "What is IUGA?",
  blurb: "We are the Informatics Undergraduate Association. We are an RSO that acts as the student government for Informatics students. We communicate between the Informatics student body, faculty, and administration of the University of Washington Information School. We host fun, community building events as well as events for professional development.",
  socialMediaTitle: "Follow us to keep up with all things Informatics!",
  socialMedia: [{
    title: "IUGA Facebook Group",
    link: "http://bit.ly/iugafb",
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFacebook"]
  }, {
    title: "Instagram",
    link: "http://bit.ly/iugainsta",
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faInstagram"]
  }],
  membershipBlurb: "Membership eligibility in IUGA is held by matriculated declared Informatics majors as defined by the Information School and the University of Washington. Members must also be in good disciplinary standing as outlined in the Student Code at the University of Washington.",
  officers: [{
    position: Officers.PRESIDENT,
    name: "Alejandro Huante",
    picture: _assets_electionsImages_2019_alejandro_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    github: "https://github.com/ahuante-1741170",
    linkedin: "https://www.linkedin.com/in/alejandro-huante-28533a141/"
  }, {
    position: Officers.VICE_PRESIDENT,
    name: "James Kim",
    github: "https://github.com/thejameskim",
    linkedin: "https://www.linkedin.com/in/thejameskim/"
  }, {
    position: Officers.FINANCE,
    name: "Kiran Pradhan",
    github: "https://github.com/kiranpradhan01",
    linkedin: "https://www.linkedin.com/in/kiran-pradhan-aa8861162/"
  }, {
    position: Officers.CREATIVE,
    name: "Casey Tran",
    picture: _assets_electionsImages_2019_caseytran_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    linkedin: "https://www.linkedin.com/in/caseytran/"
  }, {
    position: Officers.PUBLIC_RELATIONS,
    name: "Allison Lee",
    github: "https://github.com/alliL",
    linkedin: "https://www.linkedin.com/in/allison20/"
  }, {
    position: Officers.OUTREACH,
    name: "Dayoung Cheong",
    github: "https://github.com/dayoungcheong",
    linkedin: "https://www.linkedin.com/in/dayoungcheong/"
  }, {
    position: Officers.DIVERSITY,
    name: "Godgiven Reamico",
    picture: _assets_electionsImages_2019_godgiven_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    linkedin: "https://www.linkedin.com/in/godgiven1/"
  }, {
    position: Officers.IT,
    name: "William Kwok",
    picture: _assets_electionsImages_2019_williamkwok_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    github: "https://github.com/kwokwilliam",
    linkedin: "https://www.linkedin.com/in/william-w-kwok/"
  }, {
    position: Officers.ACADEMIC,
    name: "Shruti Rajagopalan",
    picture: _assets_electionsImages_2019_shrutir_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    github: "https://github.com/ShrutiR5",
    linkedin: "https://www.linkedin.com/in/shrutira/"
  }],
  positionInformation: (_positionInformation = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_positionInformation, Officers.PRESIDENT, {
    description: "The President is the head of IUGA and their responsibilities include:",
    responsibilities: ["Lead IUGA Meetings", "Represent Informatics to faculty and staff with the Vice President", "Shepherd and guide newly elected IUGA Officers during the annual transition", "Act as backup for the Director of Finance for financial matters", "Act as, or designate, the Informatics Representative On the iSchool Program Committee", "Act as liaison to other iSchool student organizations"]
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_positionInformation, Officers.VICE_PRESIDENT, {
    description: "The Vice President fills roles as needed and has core repsonsibilities with which they are entrusted. These core responsibilities include the following:",
    responsibilities: ["Backup for the President", "Collaborates with the Director of Outreach when communicating with External Groups", "Responsible for scheduling bi-weekly meetings", "Responsible for booking venues for all IUGA events", "Responsible for handling the yearly Registration of IUGA with the SAO", "Responsible for the meeting minutes of every IUGA meeting", "Act as the Primary Point of Contact for Student Services when dealing with the Informatics Recruitment Process", "Fulfill or Designate a student to fill a seat on the iSchool Student Leadership Committee and the Informatics Program Committee"]
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_positionInformation, Officers.FINANCE, {
    description: "The director of finance maintains the Association’s financial records. This includes the following items:",
    responsibilities: ["Maintain the Financial Records", "Provide Reports On Finances to IUGA", "Fulfill or Designate a Student Representative for Informatics on the iSchool Student Leadership Committee", "Organize the Financial Vectors of IUGA fundraising efforts", "Prepare and Submit the Yearly IUGA Budget to iSchool Administration", "Act as the Primary Account Holder for All IUGA Financial Accounts", "Handle merchandise ordering and distribution", "Help the incoming Director of Finance with the Yearly Budget during Spring Quarter"]
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_positionInformation, Officers.CREATIVE, {
    description: "The Creative Director will work on creating the visual style of the IUGA brand and take initiative in creating and delivering branded items. These responsibilities will include:",
    responsibilities: ["Creating merchandise for IUGA, including clothing", "Creating informational posters/flyers for IUGA events", "Maintain the IUGA logo and design styling", "Create a team to help in the creation of Informatics branded items", "Assist Finance with ordering and distribution of merchandise"]
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_positionInformation, Officers.PUBLIC_RELATIONS, {
    description: "The Director of Public Relations serves a vital communication role within the Executive Council. These responsibilities Include:",
    responsibilities: ["Communicate Announcement and Events to Informatics Students", "Lead the Planning and Organization of Social Events", "Ensure the Smooth Operation and Execution of All IUGA events", "Oversee Elections"]
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_positionInformation, Officers.OUTREACH, {
    description: "The Director of Outreach is responsible for representing both the Informatics Program and the IUGA to the professional community. They do this by:",
    responsibilities: ["Working with Students Services and the Career Center to promote employment and professional development events.", "Work with Student Services to facilitate alumni relations", "Promote Informatics to the University of Washington at Large and the Professional Community Along with the Vice President", "Responsible for organizing and executing professional development events for Informatics"]
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_positionInformation, Officers.DIVERSITY, {
    description: "The Director of Diversity Efforts works to promote diversity both within the major and the iSchool. This includes, but is not limited to, the following:",
    responsibilities: ["Support and promote activist-oriented RSOs", "Organize and promote diversity and inclusion events for the iSchool", "Work closely with the Diversity Programs Advisor to ideate and execute diversity initiatives", "Support and engage in an active Diversity Committee composed of students, faculty and staff", "Fulfill, or appoint a student, to sit on the Informatics Admissions Committee during the summer", "Ensure that the events, ideas, and products of IUGA are made with the thought of diversity and inclusion", "Collaborate with Student Services and other Registered Student Organizations (RSOs) on campus for diversity and inclusion events"]
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_positionInformation, Officers.IT, {
    description: "The Director of Information Technology helps run the Association’s technology projects and online presence. While providing support when needed. This is done by doing the following:",
    responsibilities: ["Maintain and update the IUGA Website and associated websites using the latest web technologies", "Monitor and maintain the IUGA gaming servers and associated assets", "Maintain all IUGA online account credentials in a secure and scalable system", "Manage permissions and security settings for IUGA assets across social networks and collaborative systems", "Oversee and run technology aspects of IUGA events, including the quarterly Game Night", "Work closely with iSchool IT and the Administration to connect the student body with all available technology and services", "Support, Service, and Create Technology solutions for needs within the Association and the iSchool"]
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_positionInformation, Officers.ACADEMIC, {
    description: "The Director of Academic Support is responsible for supporting the academic needs within the Informatics Program. These responsibilities include:",
    responsibilities: ["Understand the needs of current students", "Organize and promote academic related events", "Work closely with other organizations to conduct joint events"]
  }), _positionInformation)
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pageStyles/index.css":
/*!******************************!*\
  !*** ./pageStyles/index.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ContentBox_ContentBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ContentBox/ContentBox */ "./components/ContentBox/ContentBox.tsx");
/* harmony import */ var _components_data_homePageData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/_data/homePageData */ "./components/_data/homePageData.ts");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pageStyles_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pageStyles/index.css */ "./pageStyles/index.css");
/* harmony import */ var _pageStyles_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pageStyles_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__);








var IndexPage = function IndexPage() {
  var blurbTitle = _components_data_homePageData__WEBPACK_IMPORTED_MODULE_2__["homePageData"].blurbTitle,
      blurb = _components_data_homePageData__WEBPACK_IMPORTED_MODULE_2__["homePageData"].blurb,
      socialMediaTitle = _components_data_homePageData__WEBPACK_IMPORTED_MODULE_2__["homePageData"].socialMediaTitle,
      socialMedia = _components_data_homePageData__WEBPACK_IMPORTED_MODULE_2__["homePageData"].socialMedia,
      membershipBlurb = _components_data_homePageData__WEBPACK_IMPORTED_MODULE_2__["homePageData"].membershipBlurb,
      officers = _components_data_homePageData__WEBPACK_IMPORTED_MODULE_2__["homePageData"].officers,
      positionInformation = _components_data_homePageData__WEBPACK_IMPORTED_MODULE_2__["homePageData"].positionInformation;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, blurbTitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ContentBox_ContentBox__WEBPACK_IMPORTED_MODULE_1__["ContentBox"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, blurb)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, socialMediaTitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ContentBox_ContentBox__WEBPACK_IMPORTED_MODULE_1__["ContentBox"], null, socialMedia.map(function (socialMediaIcon) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: socialMediaIcon.link
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container d-flex align-items-center social-container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: socialMediaIcon.icon,
      size: "2x",
      fixedWidth: true,
      className: "social-icon"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "social-title"
    }, socialMediaIcon.title))));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Who are your officers? What do they do?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, officers.map(function (officer) {
    var position = officer.position;
    var officerPositionInfo = positionInformation[position];
    var description = officerPositionInfo.description,
        responsibilities = officerPositionInfo.responsibilities;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ContentBox_ContentBox__WEBPACK_IMPORTED_MODULE_1__["ContentBox"], null, officer.picture && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: officer.picture,
      alt: officer.name
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex align-items-center officer-heading"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "officer-name"
    }, officer.name), officer.github && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: officer.github
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faGithub"],
      size: "2x",
      fixedWidth: true
    })), officer.linkedin && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: officer.linkedin
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faLinkedin"],
      size: "2x",
      fixedWidth: true
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, officer.position), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, responsibilities.map(function (responsibility) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, responsibility);
    }))));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Membership"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ContentBox_ContentBox__WEBPACK_IMPORTED_MODULE_1__["ContentBox"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, membershipBlurb)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Contact us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ContentBox_ContentBox__WEBPACK_IMPORTED_MODULE_1__["ContentBox"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Have a comment, question, or suggestion?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Email us at ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "mailto:IUGA@uw.edu"
  }, "IUGA@uw.edu"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    onClick: function onClick() {
      window.scrollTo(0, 0);
    }
  }, "\u2191 back to top"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "spacer"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/williamk/Desktop/Work/IUGA/iuga-site/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/free-brands-svg-icons" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map