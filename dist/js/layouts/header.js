(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts/header"],{

/***/ "./src/Layouts/Header/Header.jsx":
/*!***************************************!*\
  !*** ./src/Layouts/Header/Header.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ButtonAppBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./src/store/index.js");
// VENDORS


 // COMPONENTS


function ButtonAppBar() {
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  const [{
    isUserLoggedIn,
    wallet
  }, {
    simple: {
      signOut
    }
  }] = Object(_store__WEBPACK_IMPORTED_MODULE_3__["useGlobal"])();

  const handleLogout = event => {
    signOut(history);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "justify-content-space-between align-items-center pt-3 pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/frontend"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/assets/img/pelican.png",
    className: "mw-100",
    alt: "logo"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    className: "text-right"
  }, wallet && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex justify-content-end align-items-center"
  }, isUserLoggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    activeKey: "/home"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
    to: "/frontend"
  }, "\u0534\u0580\u0561\u0574\u0561\u057A\u0561\u0576\u0561\u056F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
    to: "/frontend/withdrawal-history"
  }, "\u0533\u0578\u0580\u056E\u0561\u0580\u0584\u0576\u0565\u0580"))) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "m-0 ml-5"
  }, "\u0544\u0576\u0561\u0581\u0578\u0580\u0564:", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "font-weight-bold text-primary"
  }, wallet.userData.balance, "\u058F")), !isUserLoggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/frontend/sign-in",
    className: "ml-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "outline-primary"
  }, "\u0544\u0578\u0582\u057F\u0584")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/frontend/sign-up",
    className: "ml-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], null, "\u0533\u0580\u0561\u0576\u0581\u057E\u0565\u056C"))) : ''))));
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvbGF5b3V0cy9oZWFkZXIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvTGF5b3V0cy9IZWFkZXIvSGVhZGVyLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBWRU5ET1JTXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IExpbmssIHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHsgQnV0dG9uLCBDb250YWluZXIsIFJvdywgQ29sLCBOYXYgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG4vLyBDT01QT05FTlRTXG5cbmltcG9ydCB7IHVzZUdsb2JhbCB9IGZyb20gJy4uLy4uL3N0b3JlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uQXBwQmFyKCkge1xuXHRjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuXG5cdGNvbnN0IFtcblx0XHR7IGlzVXNlckxvZ2dlZEluLCB3YWxsZXQgfSxcblx0XHR7XG5cdFx0XHRzaW1wbGU6IHsgc2lnbk91dCB9XG5cdFx0fVxuXHRdID0gdXNlR2xvYmFsKCk7XG5cblx0Y29uc3QgaGFuZGxlTG9nb3V0ID0gZXZlbnQgPT4ge1xuXHRcdHNpZ25PdXQoaGlzdG9yeSk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8Q29udGFpbmVyPlxuXHRcdFx0PFJvdyBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtc3BhY2UtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgcHQtMyBwYi0zXCI+XG5cdFx0XHRcdDxDb2wgeHM9ezJ9PlxuXHRcdFx0XHRcdDxMaW5rIHRvPVwiL2Zyb250ZW5kXCI+XG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9hc3NldHMvaW1nL3BlbGljYW4ucG5nXCIgY2xhc3NOYW1lPVwibXctMTAwXCIgYWx0PVwibG9nb1wiIC8+XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0PENvbCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG5cdFx0XHRcdFx0e3dhbGxldCAmJiAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHR7aXNVc2VyTG9nZ2VkSW4gPyAoXG5cdFx0XHRcdFx0XHRcdFx0PE5hdiBhY3RpdmVLZXk9XCIvaG9tZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PE5hdi5JdGVtPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TmF2LkxpbmsgYXM9e0xpbmt9IHRvPVwiL2Zyb250ZW5kXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx01LTWgNWh1bTVodW61aHVttWh1a9cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9OYXYuTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvTmF2Lkl0ZW0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8TmF2Lkl0ZW0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxOYXYuTGluayBhcz17TGlua30gdG89XCIvZnJvbnRlbmQvd2l0aGRyYXdhbC1oaXN0b3J5XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx01LPVuNaA1a7VodaA1oTVttWl1oBcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9OYXYuTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvTmF2Lkl0ZW0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7Lyo8TmF2Lkl0ZW0+Ki99XG5cdFx0XHRcdFx0XHRcdFx0XHR7LypcdDxOYXYuTGluayBhcz17TGlua30gdG89XCIvc2V0dGluZ3NcIj4qL31cblx0XHRcdFx0XHRcdFx0XHRcdHsvKlx0XHTUv9Wh1oDVo9Wh1b7VuNaA1bjWgtW01bbVpdaAKi99XG5cdFx0XHRcdFx0XHRcdFx0XHR7LypcdDwvTmF2Lkxpbms+Ki99XG5cdFx0XHRcdFx0XHRcdFx0XHR7Lyo8L05hdi5JdGVtPiovfVxuXHRcdFx0XHRcdFx0XHRcdDwvTmF2PlxuXHRcdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHRcdCcnXG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdDxoNiBjbGFzc05hbWU9XCJtLTAgbWwtNVwiPlxuXHRcdFx0XHRcdFx0XHRcdNWE1bbVodaB1bjWgNWkOnsnICd9XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCB0ZXh0LXByaW1hcnlcIj57d2FsbGV0LnVzZXJEYXRhLmJhbGFuY2V91o88L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvaDY+XG5cdFx0XHRcdFx0XHRcdHshaXNVc2VyTG9nZ2VkSW4gPyAoXG5cdFx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIHRvPVwiL2Zyb250ZW5kL3NpZ24taW5cIiBjbGFzc05hbWU9XCJtbC0zXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiPtWE1bjWgtW/1oQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIHRvPVwiL2Zyb250ZW5kL3NpZ24tdXBcIiBjbGFzc05hbWU9XCJtbC0zXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24+1LPWgNWh1bbWgdW+1aXVrDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHRcdCcnXG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L0NvbD5cblx0XHRcdDwvUm93PlxuXHRcdDwvQ29udGFpbmVyPlxuXHQpO1xufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBYUE7QUFBQTtBQUVBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBYUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==