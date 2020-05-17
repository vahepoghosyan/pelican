(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages/home"],{

/***/ "./src/Pages/Home/Home.jsx":
/*!*********************************!*\
  !*** ./src/Pages/Home/Home.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./src/store/index.js");
// VENDORS


 // COMPONENTS



function Home() {
  const [{
    loader,
    errorMessage,
    wallet
  }] = Object(_store__WEBPACK_IMPORTED_MODULE_3__["useGlobal"])();
  return loader ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex justify-content-center align-items-center pt-5 pb-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Spinner"], {
    animation: "border",
    variant: "primary"
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "text-center mb-3"
  }, "\u053B\u0574 \u0564\u0580\u0561\u0574\u0561\u057A\u0561\u0576\u0561\u056F\u0568"), errorMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
    variant: "danger"
  }, errorMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "font-weight-bold text-center mb-3"
  }, "\u0531\u0575\u057D \u057A\u0561\u0570\u056B\u0576 \u0540\u0561\u0577\u056B\u057E\u0568 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-primary"
  }, wallet && wallet.userData.balance, "\u058F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-center"
  }, "\u0544\u0565\u0580 \u0585\u0563\u057F\u0561\u057F\u0565\u0580\u0565\u0580\u056B \u0561\u0574\u057D\u0565\u056F\u0561\u0576 \u056E\u0561\u056D\u057D\u0565\u0580\u056B \u0574\u056B\u057B\u056B\u0576 \u057F\u057E\u0575\u0561\u056C\u0576\u0565\u0580\u056B \u0570\u056B\u0574\u0561\u0576 \u057E\u0580\u0561 \u057D\u0561 \u0569\u0578\u0582\u0575\u056C \u056F\u057F\u0561 \u057E\u0573\u0561\u0580\u0565\u056C \u0541\u0565\u0580"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroup"], {
    variant: "flush",
    className: "mb-5"
  }, wallet && wallet.walletData.map((item, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroup"].Item, {
      className: "d-flex justify-content-between align-items-end pt-4 pb-4",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      xs: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      className: "m-0 font-weight-bold text-primary"
    }, item.percent_covered, "%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      xs: 8,
      className: "text-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, item.monthly_credits, " \u0564\u0580\u0561\u0574\u056B \u0570\u0561\u0577\u057E\u0578\u057E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ProgressBar"], {
      variant: "success",
      now: item.percent_covered
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      xs: 2,
      className: "text-right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      variant: "primary"
    }, "\u054E\u0573\u0561\u0580\u0565\u056C")));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-center"
  }, "\u0535\u0569\u0565 \u0561\u0575\u057D \u057F\u0565\u0574\u057A\u0578\u057E \u0585\u0563\u057F\u057E\u0565\u0584 \u0561\u057A\u0561 \u0585\u0563\u057F\u057E\u0565\u056C\u0578\u0582 \u057D\u056F\u0566\u0562\u056B\u0581 \u0574\u0565\u056F \u0561\u0574\u056B\u057D\u056C\u0580\u0561\u0576\u0561\u056C\u0578\u0582 \u057A\u0561\u0570\u056B\u0576 \u056F\u0578\u0582\u0576\u0565\u0576\u0584"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 7
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    placeholder: "Recipient's username",
    value: wallet ? wallet.userData.monthly_goal : '',
    onChange: () => {}
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"].Append, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "\u054D\u0561\u0570\u0574\u0561\u0576\u0565\u056C \u0561\u0574\u057D\u057E\u0561 \u0576\u057A\u0561\u057F\u0561\u056F"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroup"], {
    variant: "flush",
    className: "mb-5"
  }, wallet && wallet.walletData.map((item, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ListGroup"].Item, {
      className: "d-flex justify-content-between align-items-end pt-4 pb-4",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      xs: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      className: "m-0 font-weight-bold text-primary"
    }, item.percent_covered_projection, "%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      xs: 8,
      className: "text-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, item.monthly_credits, " \u0564\u0580\u0561\u0574\u056B \u0570\u0561\u0577\u057E\u0578\u057E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ProgressBar"], {
      variant: "success",
      now: item.percent_covered_projection
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      xs: 2,
      className: "text-right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      variant: "primary"
    }, "\u054E\u0573\u0561\u0580\u0565\u056C")));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/helpers/utils.js":
/*!******************************!*\
  !*** ./src/helpers/utils.js ***!
  \******************************/
/*! exports provided: isObjectEmpty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObjectEmpty", function() { return isObjectEmpty; });
const isObjectEmpty = object => {
  return Object.keys(object).length === 0 && object.constructor === Object;
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvcGFnZXMvaG9tZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9QYWdlcy9Ib21lL0hvbWUuanN4Iiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL3V0aWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFZFTkRPUlNcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQWxlcnQsIEJ1dHRvbiwgTGlzdEdyb3VwLCBQcm9ncmVzc0JhciwgQ29sLCBJbnB1dEdyb3VwLCBGb3JtQ29udHJvbCwgUm93LCBTcGlubmVyIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IGlzT2JqZWN0RW1wdHkgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJztcblxuLy8gQ09NUE9ORU5UU1xuaW1wb3J0IHsgdXNlR2xvYmFsIH0gZnJvbSAnLi4vLi4vc3RvcmUnO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuXHRjb25zdCBbXG5cdFx0e1xuXHRcdFx0bG9hZGVyLFxuXHRcdFx0ZXJyb3JNZXNzYWdlLFxuXHRcdFx0d2FsbGV0XG5cdFx0fVxuXHRdID0gdXNlR2xvYmFsKCk7XG5cblx0cmV0dXJuIGxvYWRlciA/IChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBwdC01IHBiLTVcIj5cblx0XHRcdDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIHZhcmlhbnQ9XCJwcmltYXJ5XCIgLz5cblx0XHQ8L2Rpdj5cblx0KSA6IChcblx0XHQ8PlxuXHRcdFx0PGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTNcIj7Uu9W0INWk1oDVodW01aHVutWh1bbVodWv1ag8L2gzPlxuXG5cdFx0XHR7ZXJyb3JNZXNzYWdlICYmIDxBbGVydCB2YXJpYW50PVwiZGFuZ2VyXCI+e2Vycm9yTWVzc2FnZX08L0FsZXJ0Pn1cblxuXHRcdFx0PGg2IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1jZW50ZXIgbWItM1wiPlxuXHRcdFx0XHTUsdW11b0g1brVodWw1avVtiDVgNWh1bfVq9W+1aggPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5XCI+e3dhbGxldCAmJiB3YWxsZXQudXNlckRhdGEuYmFsYW5jZX3Wjzwvc3Bhbj5cblx0XHRcdDwvaDY+XG5cblx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG5cdFx0XHRcdNWE1aXWgCDWhdWj1b/VodW/1aXWgNWl1oDVqyDVodW01b3VpdWv1aHVtiDVrtWh1a3VvdWl1oDVqyDVtNWr1bvVq9W2INW/1b7VtdWh1azVttWl1oDVqyDVsNWr1bTVodW2INW+1oDVoSDVvdWhINWp1bjWgtW11awg1a/Vv9WhINW+1bPVodaA1aXVrCDVgdWl1oBcblx0XHRcdDwvcD5cblx0XHRcdDxMaXN0R3JvdXAgdmFyaWFudD1cImZsdXNoXCIgY2xhc3NOYW1lPVwibWItNVwiPlxuXHRcdFx0XHR7d2FsbGV0ICYmXG5cdFx0XHRcdFx0d2FsbGV0LndhbGxldERhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0PExpc3RHcm91cC5JdGVtXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWVuZCBwdC00IHBiLTRcIlxuXHRcdFx0XHRcdFx0XHRcdGtleT17aW5kZXh9PlxuXHRcdFx0XHRcdFx0XHRcdDxDb2wgeHM9ezJ9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNtYWxsPntpdGVtLm5hbWV9PC9zbWFsbD5cblx0XHRcdFx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJtLTAgZm9udC13ZWlnaHQtYm9sZCB0ZXh0LXByaW1hcnlcIj57aXRlbS5wZXJjZW50X2NvdmVyZWR9JTwvaDU+XG5cdFx0XHRcdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0XHRcdFx0PENvbCB4cz17OH0gY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c21hbGw+e2l0ZW0ubW9udGhseV9jcmVkaXRzfSDVpNaA1aHVtNWrINWw1aHVt9W+1bjVvjwvc21hbGw+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8UHJvZ3Jlc3NCYXJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD1cInN1Y2Nlc3NcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRub3c9e2l0ZW0ucGVyY2VudF9jb3ZlcmVkfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHRcdFx0XHQ8Q29sIHhzPXsyfSBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCI+1Y7Vs9Wh1oDVpdWsPC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0XHRcdDwvTGlzdEdyb3VwLkl0ZW0+XG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pfVxuXHRcdFx0PC9MaXN0R3JvdXA+XG5cblx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+1LXVqdWlINWh1bXVvSDVv9Wl1bTVutW41b4g1oXVo9W/1b7VpdaEINWh1brVoSDWhdWj1b/VvtWl1azVuNaCINW91a/VptWi1avWgSDVtNWl1a8g1aHVtNWr1b3VrNaA1aHVttWh1azVuNaCINW61aHVsNWr1bYg1a/VuNaC1bbVpdW21oQ8L3A+XG5cdFx0XHQ8Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cblx0XHRcdFx0PENvbCB4cz17N30+XG5cdFx0XHRcdFx0PElucHV0R3JvdXAgY2xhc3NOYW1lPVwibWItM1wiPlxuXHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiUmVjaXBpZW50J3MgdXNlcm5hbWVcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17d2FsbGV0ID8gd2FsbGV0LnVzZXJEYXRhLm1vbnRobHlfZ29hbCA6ICcnfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KCkgPT4ge319XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PElucHV0R3JvdXAuQXBwZW5kPlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uPtWN1aHVsNW01aHVttWl1awg1aHVtNW91b7VoSDVttW61aHVv9Wh1a88L0J1dHRvbj5cblx0XHRcdFx0XHRcdDwvSW5wdXRHcm91cC5BcHBlbmQ+XG5cdFx0XHRcdFx0PC9JbnB1dEdyb3VwPlxuXHRcdFx0XHQ8L0NvbD5cblx0XHRcdDwvUm93PlxuXHRcdFx0PExpc3RHcm91cCB2YXJpYW50PVwiZmx1c2hcIiBjbGFzc05hbWU9XCJtYi01XCI+XG4gICAgICAgICAgICAgICAge3dhbGxldCAmJlxuICAgICAgICAgICAgICAgIHdhbGxldC53YWxsZXREYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXAuSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1lbmQgcHQtNCBwYi00XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPntpdGVtLm5hbWV9PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm0tMCBmb250LXdlaWdodC1ib2xkIHRleHQtcHJpbWFyeVwiPntpdGVtLnBlcmNlbnRfY292ZXJlZF9wcm9qZWN0aW9ufSU8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezh9IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+e2l0ZW0ubW9udGhseV9jcmVkaXRzfSDVpNaA1aHVtNWrINWw1aHVt9W+1bjVvjwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzc0JhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm93PXtpdGVtLnBlcmNlbnRfY292ZXJlZF9wcm9qZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezJ9IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiPtWO1bPVodaA1aXVrDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0R3JvdXAuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cblx0XHRcdHsvKlx0PExpc3RHcm91cC5JdGVtIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgcHQtNCBwYi00XCI+Ki99XG5cdFx0XHR7LypcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+Ki99XG5cdFx0XHR7LypcdFx0XHQ8c21hbGw+1YvVuNaC1oA8L3NtYWxsPiovfVxuXHRcdFx0ey8qXHRcdFx0PGg2IGNsYXNzTmFtZT1cIm0tMCBmb250LXdlaWdodC1ib2xkXCI+MTAwJTwvaDY+Ki99XG5cdFx0XHR7LypcdFx0PC9kaXY+Ki99XG5cdFx0XHR7LypcdFx0PFByb2dyZXNzQmFyKi99XG5cdFx0XHR7LypcdFx0XHR2YXJpYW50PVwic3VjY2Vzc1wiKi99XG5cdFx0XHR7LypcdFx0XHRub3c9ezUwfSovfVxuXHRcdFx0ey8qXHRcdFx0bGFiZWw9e2AkezEwMDB9INWk1oDVodW01asg1bDVodW31b7VuNW+YH0qL31cblx0XHRcdHsvKlx0XHRcdGNsYXNzTmFtZT1cImZsZXgtZ3Jvdy0xIG1yLTMgbWwtM1wiKi99XG5cdFx0XHR7LypcdFx0Lz4qL31cblx0XHRcdHsvKlx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgZGlzYWJsZWQ+Ki99XG5cdFx0XHR7LypcdFx0XHTVjtWz1aHWgNWl1awqL31cblx0XHRcdHsvKlx0XHQ8L0J1dHRvbj4qL31cblx0XHRcdHsvKlx0PC9MaXN0R3JvdXAuSXRlbT4qL31cblx0XHRcdHsvKlx0PExpc3RHcm91cC5JdGVtIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgcHQtNCBwYi00XCI+Ki99XG5cdFx0XHR7LypcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+Ki99XG5cdFx0XHR7LypcdFx0XHQ8c21hbGw+1YvVuNaC1oA8L3NtYWxsPiovfVxuXHRcdFx0ey8qXHRcdFx0PGg2IGNsYXNzTmFtZT1cIm0tMCBmb250LXdlaWdodC1ib2xkXCI+MTAwJTwvaDY+Ki99XG5cdFx0XHR7LypcdFx0PC9kaXY+Ki99XG5cdFx0XHR7LypcdFx0PFByb2dyZXNzQmFyKi99XG5cdFx0XHR7LypcdFx0XHR2YXJpYW50PVwic3VjY2Vzc1wiKi99XG5cdFx0XHR7LypcdFx0XHRub3c9ezYzfSovfVxuXHRcdFx0ey8qXHRcdFx0bGFiZWw9e2AkezEwMDB9INWk1oDVodW01asg1bDVodW31b7VuNW+YH0qL31cblx0XHRcdHsvKlx0XHRcdGNsYXNzTmFtZT1cImZsZXgtZ3Jvdy0xIG1yLTMgbWwtM1wiKi99XG5cdFx0XHR7LypcdFx0Lz4qL31cblx0XHRcdHsvKlx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgZGlzYWJsZWQ+Ki99XG5cdFx0XHR7LypcdFx0XHTVjtWz1aHWgNWl1awqL31cblx0XHRcdHsvKlx0XHQ8L0J1dHRvbj4qL31cblx0XHRcdHsvKlx0PC9MaXN0R3JvdXAuSXRlbT4qL31cblx0XHRcdHsvKlx0PExpc3RHcm91cC5JdGVtIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgcHQtNCBwYi00XCI+Ki99XG5cdFx0XHR7LypcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+Ki99XG5cdFx0XHR7LypcdFx0XHQ8c21hbGw+1YvVuNaC1oA8L3NtYWxsPiovfVxuXHRcdFx0ey8qXHRcdFx0PGg2IGNsYXNzTmFtZT1cIm0tMCBmb250LXdlaWdodC1ib2xkXCI+MTAwJTwvaDY+Ki99XG5cdFx0XHR7LypcdFx0PC9kaXY+Ki99XG5cdFx0XHR7LypcdFx0PFByb2dyZXNzQmFyKi99XG5cdFx0XHR7LypcdFx0XHR2YXJpYW50PVwic3VjY2Vzc1wiKi99XG5cdFx0XHR7LypcdFx0XHRub3c9ezUwfSovfVxuXHRcdFx0ey8qXHRcdFx0bGFiZWw9e2AkezEwMDB9INWk1oDVodW01asg1bDVodW31b7VuNW+YH0qL31cblx0XHRcdHsvKlx0XHRcdGNsYXNzTmFtZT1cImZsZXgtZ3Jvdy0xIG1yLTMgbWwtM1wiKi99XG5cdFx0XHR7LypcdFx0Lz4qL31cblx0XHRcdHsvKlx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgZGlzYWJsZWQ+Ki99XG5cdFx0XHR7LypcdFx0XHTVjtWz1aHWgNWl1awqL31cblx0XHRcdHsvKlx0XHQ8L0J1dHRvbj4qL31cblx0XHRcdHsvKlx0PC9MaXN0R3JvdXAuSXRlbT4qL31cblx0XHRcdDwvTGlzdEdyb3VwPlxuXHRcdDwvPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIiwiZXhwb3J0IGNvbnN0IGlzT2JqZWN0RW1wdHkgPSAob2JqZWN0KSA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iamVjdCkubGVuZ3RoID09PSAwICYmIG9iamVjdC5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0XG59OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFHQTtBQUVBO0FBQ0E7QUFGQTtBQUdBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBV0E7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBRkE7QUFHQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQWlEQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3JKQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=