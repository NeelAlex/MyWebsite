webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.28461faf774d219716b8.hot-update.js.map