(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts/layout"],{

/***/ "./src/Layouts/Layout/Layout.jsx":
/*!***************************************!*\
  !*** ./src/Layouts/Layout/Layout.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var Layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Layouts */ "./src/Layouts/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./src/store/index.js");


 // import useStyles from './Layout.jss';



function Layout({
  children
}) {
  const [{}, {
    post: {
      getWallet
    }
  }] = Object(_store__WEBPACK_IMPORTED_MODULE_3__["useGlobal"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getWallet({
      temptoken: localStorage.getItem('temptoken'),
      api_key: localStorage.getItem('api_key'),
      userId: localStorage.getItem('user_id')
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Layouts__WEBPACK_IMPORTED_MODULE_2__["Header"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "justify-content-center pt-5 pb-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex justify-content-center align-items-center pt-5 pb-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Spinner"], {
      animation: "border",
      variant: "primary"
    }))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 10,
    md: 8
  }, children)))));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvbGF5b3V0cy9sYXlvdXQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvTGF5b3V0cy9MYXlvdXQvTGF5b3V0LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgU3VzcGVuc2UsIEZyYWdtZW50LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNwaW5uZXIsIENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5pbXBvcnQgeyBIZWFkZXIsIEZvb3RlciB9IGZyb20gJ0xheW91dHMnO1xuXG4vLyBpbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vTGF5b3V0Lmpzcyc7XG5cbmltcG9ydCB7IHVzZUdsb2JhbCB9IGZyb20gJy4uLy4uL3N0b3JlJztcblxuZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xuXHRjb25zdCBbXG5cdFx0e30sXG5cdFx0e1xuXHRcdFx0cG9zdDogeyBnZXRXYWxsZXQgfVxuXHRcdH1cblx0XSA9IHVzZUdsb2JhbCgpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Z2V0V2FsbGV0KHtcblx0XHRcdHRlbXB0b2tlbjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RlbXB0b2tlbicpLFxuXHRcdFx0YXBpX2tleTogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FwaV9rZXknKSxcblx0XHRcdHVzZXJJZDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJfaWQnKVxuXHRcdH0pO1xuXHR9LCBbXSk7XG5cblx0cmV0dXJuIChcblx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHQ8U3VzcGVuc2UgZmFsbGJhY2s9e251bGx9PlxuXHRcdFx0XHQ8SGVhZGVyIC8+XG5cdFx0XHQ8L1N1c3BlbnNlPlxuXG5cdFx0XHQ8Q29udGFpbmVyPlxuXHRcdFx0XHQ8Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1jZW50ZXIgcHQtNSBwYi01XCI+XG5cdFx0XHRcdFx0PFN1c3BlbnNlXG5cdFx0XHRcdFx0XHRmYWxsYmFjaz17XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIHB0LTUgcGItNVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIHZhcmlhbnQ9XCJwcmltYXJ5XCIgLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHR9PlxuXHRcdFx0XHRcdFx0PENvbCBzbT17MTB9IG1kPXs4fT5cblx0XHRcdFx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0PC9TdXNwZW5zZT5cblx0XHRcdFx0PC9Sb3c+XG5cdFx0XHQ8L0NvbnRhaW5lcj5cblxuXHRcdFx0ey8qPFN1c3BlbnNlIGZhbGxiYWNrPXtudWxsfT4qL31cblx0XHRcdHsvKiAgICA8Rm9vdGVyLz4qL31cblx0XHRcdHsvKjwvU3VzcGVuc2U+Ki99XG5cdFx0PC9GcmFnbWVudD5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBRUE7QUFFQTtBQUFBO0FBS0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBWUE7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=