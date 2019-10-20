(this["webpackJsonpresume"] = this["webpackJsonpresume"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #09d3ac;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);



/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _resume_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resume.json */ "./src/resume.json");
var _resume_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./resume.json */ "./src/resume.json", 1);
/* harmony import */ var _Experience__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Experience */ "./src/Experience.js");
/* harmony import */ var _Education__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Education */ "./src/Education.js");
/* harmony import */ var _Languages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Languages */ "./src/Languages.js");
/* harmony import */ var _Interests__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Interests */ "./src/Interests.js");
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Projects */ "./src/Projects.js");
/* harmony import */ var _Skills__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Skills */ "./src/Skills.js");
var _jsxFileName = "/Users/neelalex/Documents/Github/Resume-Neel-Alex/end/resume/src/App.js";










class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  renderExperiences() {
    let resultsArray = [];
    _resume_json__WEBPACK_IMPORTED_MODULE_2__.experiences.map((item, i) => resultsArray.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Experience__WEBPACK_IMPORTED_MODULE_3__["default"], {
      item: item,
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    })));
    return resultsArray;
  }

  renderEducation() {
    let resultsArray = [];
    _resume_json__WEBPACK_IMPORTED_MODULE_2__.education.map((item, i) => resultsArray.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Education__WEBPACK_IMPORTED_MODULE_4__["default"], {
      item: item,
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    })));
    return resultsArray;
  }

  renderLanguages() {
    let resultsArray = [];
    _resume_json__WEBPACK_IMPORTED_MODULE_2__.languages.map((item, i) => resultsArray.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Languages__WEBPACK_IMPORTED_MODULE_5__["default"], {
      item: item,
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    })));
    return resultsArray;
  }

  renderInterest() {
    let resultsArray = [];
    _resume_json__WEBPACK_IMPORTED_MODULE_2__.interests.map((item, i) => resultsArray.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Interests__WEBPACK_IMPORTED_MODULE_6__["default"], {
      item: item,
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    })));
    return resultsArray;
  }

  renderProject() {
    let resultsArray = [];
    _resume_json__WEBPACK_IMPORTED_MODULE_2__.projects.map((item, i) => resultsArray.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Projects__WEBPACK_IMPORTED_MODULE_7__["default"], {
      item: item,
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    })));
    return resultsArray;
  }

  renderSkills() {
    let resultsArray = [];
    _resume_json__WEBPACK_IMPORTED_MODULE_2__.skills.mao((item, i) => resultsArray.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Skills__WEBPACK_IMPORTED_MODULE_8__["default"], {
      item: item,
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    })));
    return resultsArray;
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sidebar-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "profile-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "profile",
      src: _resume_json__WEBPACK_IMPORTED_MODULE_2__.image,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, _resume_json__WEBPACK_IMPORTED_MODULE_2__.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "tagline",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, "Software Engineer")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "contact-container container-block",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "list-unstyled contact-list",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "email",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-envelope",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "mailto: neelalex007@gmail.com",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, _resume_json__WEBPACK_IMPORTED_MODULE_2__.email)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "phone",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-phone",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "tel: +919567953022",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, _resume_json__WEBPACK_IMPORTED_MODULE_2__.phone)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "website",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-globe",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://www.hackerrank.com/neelalex",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, _resume_json__WEBPACK_IMPORTED_MODULE_2__.hackerrank)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "linkedin",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fab fa-linkedin-in",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://www.linkedin.com/in/neel-alex-286920106",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, _resume_json__WEBPACK_IMPORTED_MODULE_2__.linkedin)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "github",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fab fa-github",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://github.com/NeelAlex",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, _resume_json__WEBPACK_IMPORTED_MODULE_2__.github)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "education-container container-block",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "container-block-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "Education"), this.renderEducation()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "languages-container container-block",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "container-block-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, "Languages"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "list-unstyled interests-list",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, this.renderLanguages())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "interests-container container-block",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "container-block-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, "Interests"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "list-unstyled interests-list",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, this.renderInterest()))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "main-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: "section summary-section",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "section-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "icon-holder",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-user",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    })), "Career Profile"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "summary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, " A passionate Software Engineer with 2.5 years of development experience. Looking to advance my career through innovations that will foster the life of millions, if not, billions.   "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: "section experiences-section",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "section-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "icon-holder",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-briefcase",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    })), "Experiences"), this.renderExperiences()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: "section projects-section",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "section-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "icon-holder",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-archive",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    })), "Projects"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "project-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, "eBuff")), " - ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "project-tagline",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, "Co-founded eBuff (April 2015- March 2016). This Startup was aimed at providing online repair portal for electronic gadgets in and around Kerala, India. Focus was on the implementation of Idea followed by the development and design of website (Full Stack Development).")), this.renderProject()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: "skills-section section",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "section-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "icon-holder",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-rocket",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    })), "Skills & Proficiency"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "skillset",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "level-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, "Javascript & jQuery"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "progress level-bar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "progress-bar theme-progress-bar",
      role: "progressbar",
      style: {
        width: '98%'
      },
      "aria-valuenow": "98",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "level-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, "Angular"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "progress level-bar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "progress-bar theme-progress-bar",
      role: "progressbar",
      style: {
        width: '98%'
      },
      "aria-valuenow": "98",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "level-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, "HTML5 & CSS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "progress level-bar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "progress-bar theme-progress-bar",
      role: "progressbar",
      style: {
        width: '95%'
      },
      "aria-valuenow": "95",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "level-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, "Ruby on Rails"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "progress level-bar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "progress-bar theme-progress-bar",
      role: "progressbar",
      style: {
        width: '85%'
      },
      "aria-valuenow": "85",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    })))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Education.js":
/*!**************************!*\
  !*** ./src/Education.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/neelalex/Documents/Github/Resume-Neel-Alex/end/resume/src/Education.js";


class Education extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "degree",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, this.props.item.degree), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      className: "meta",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, this.props.item.university), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "time",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, this.props.item.period));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Education);

/***/ }),

/***/ "./src/Experience.js":
/*!***************************!*\
  !*** ./src/Experience.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/neelalex/Documents/Github/Resume-Neel-Alex/end/resume/src/Experience.js";


class Experience extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "meta",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "upper-row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "job-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, this.props.item.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "time",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, this.props.item.period)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "company",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, this.props.item.company)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, this.props.item.details, " ")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Experience);

/***/ }),

/***/ "./src/Interests.js":
/*!**************************!*\
  !*** ./src/Interests.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/neelalex/Documents/Github/Resume-Neel-Alex/end/resume/src/Interests.js";


class Interests extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, this.props.item);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Interests);

/***/ }),

/***/ "./src/Languages.js":
/*!**************************!*\
  !*** ./src/Languages.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/neelalex/Documents/Github/Resume-Neel-Alex/end/resume/src/Languages.js";


class Languages extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, this.props.item.name, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "lang-desc",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, "(", this.props.item.details, ")"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Languages);

/***/ }),

/***/ "./src/Projects.js":
/*!*************************!*\
  !*** ./src/Projects.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/neelalex/Documents/Github/Resume-Neel-Alex/end/resume/src/Projects.js";


class Project extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "project-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: this.props.item.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, this.props.item.name)), " - ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "project-tagline",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, this.props.item.detail));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ }),

/***/ "./src/Skills.js":
/*!***********************!*\
  !*** ./src/Skills.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/neelalex/Documents/Github/Resume-Neel-Alex/end/resume/src/Skills.js";


class Skills extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "level-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, "Sketch & Photoshop"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "progress level-bar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "progress-bar theme-progress-bar",
      role: "progressbar",
      style: {
        width: '60%'
      },
      "aria-valuenow": "60",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Skills);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/neelalex/Documents/Github/Resume-Neel-Alex/end/resume/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/resume.json":
/*!*************************!*\
  !*** ./src/resume.json ***!
  \*************************/
/*! exports provided: name, email, phone, image, hackerrank, linkedin, github, experiences, projects, skills, education, languages, interests, default */
/***/ (function(module) {

!(function webpackMissingModule() { var e = new Error("Cannot find module './resume.json'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/neelalex/Documents/Github/Resume-Neel-Alex/end/resume/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/neelalex/Documents/Github/Resume-Neel-Alex/end/resume/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map