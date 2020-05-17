(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages/index"],{

/***/ "./src/Layouts/index.js":
/*!******************************!*\
  !*** ./src/Layouts/index.js ***!
  \******************************/
/*! exports provided: Footer, Header, Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Footer = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => __webpack_require__.e(/*! import() | layouts/footer */ "layouts/footer").then(__webpack_require__.bind(null, /*! ./Footer/Footer */ "./src/Layouts/Footer/Footer.jsx")));
const Header = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() | layouts/header */[__webpack_require__.e("vendors/react-bootstrap"), __webpack_require__.e("vendors/popperjs"), __webpack_require__.e("vendors/dom-helpers"), __webpack_require__.e("vendors/react-overlays"), __webpack_require__.e("vendors/restart"), __webpack_require__.e("vendors/uncontrollable"), __webpack_require__.e("vendors/prop-types-extra"), __webpack_require__.e("vendors/react-transition-group"), __webpack_require__.e("vendors/classnames"), __webpack_require__.e("vendors/invariant"), __webpack_require__.e("vendors/react-lifecycles-compat"), __webpack_require__.e("vendors/warning"), __webpack_require__.e("layouts/header")]).then(__webpack_require__.bind(null, /*! ./Header/Header */ "./src/Layouts/Header/Header.jsx")));
const Layout = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() | layouts/layout */[__webpack_require__.e("vendors/react-bootstrap"), __webpack_require__.e("vendors/popperjs"), __webpack_require__.e("vendors/dom-helpers"), __webpack_require__.e("vendors/react-overlays"), __webpack_require__.e("vendors/restart"), __webpack_require__.e("vendors/uncontrollable"), __webpack_require__.e("vendors/prop-types-extra"), __webpack_require__.e("vendors/react-transition-group"), __webpack_require__.e("vendors/classnames"), __webpack_require__.e("vendors/invariant"), __webpack_require__.e("vendors/react-lifecycles-compat"), __webpack_require__.e("vendors/warning"), __webpack_require__.e("layouts/layout")]).then(__webpack_require__.bind(null, /*! ./Layout/Layout */ "./src/Layouts/Layout/Layout.jsx")));


/***/ }),

/***/ "./src/Pages/Index.jsx":
/*!*****************************!*\
  !*** ./src/Pages/Index.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var Pages_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Pages/routes */ "./src/Pages/routes.jsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./src/store/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.scss */ "./src/Pages/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var Layouts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Layouts */ "./src/Layouts/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// VENDORS








function Index() {
  const [{
    isUserLoggedIn
  }] = Object(_store__WEBPACK_IMPORTED_MODULE_4__["useGlobal"])();
  const ROUTES = isUserLoggedIn ? Pages_routes__WEBPACK_IMPORTED_MODULE_3__["privateRoutes"] : Pages_routes__WEBPACK_IMPORTED_MODULE_3__["publicRoutes"];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Router"], {
    history: Pages_routes__WEBPACK_IMPORTED_MODULE_3__["history"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Layouts__WEBPACK_IMPORTED_MODULE_6__["Layout"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, Object.entries(ROUTES).map(([routeKey, routeSettings]) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], _extends({
    key: routeKey,
    exact: routeKey !== 'notFound'
  }, routeSettings))))));
}

/* harmony default export */ __webpack_exports__["default"] = (() => {
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Index, null)), document.getElementById('root'));
});

/***/ }),

/***/ "./src/Pages/index.scss":
/*!******************************!*\
  !*** ./src/Pages/index.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/Pages/routes.jsx":
/*!******************************!*\
  !*** ./src/Pages/routes.jsx ***!
  \******************************/
/*! exports provided: publicRoutes, privateRoutes, history */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publicRoutes", function() { return publicRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "privateRoutes", function() { return privateRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "history", function() { return history; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
// VENDORS
 // COMPONENTS

const Home = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() | pages/home */[__webpack_require__.e("vendors/react-bootstrap"), __webpack_require__.e("vendors/popperjs"), __webpack_require__.e("vendors/dom-helpers"), __webpack_require__.e("vendors/react-overlays"), __webpack_require__.e("vendors/restart"), __webpack_require__.e("vendors/uncontrollable"), __webpack_require__.e("vendors/prop-types-extra"), __webpack_require__.e("vendors/react-transition-group"), __webpack_require__.e("vendors/classnames"), __webpack_require__.e("vendors/invariant"), __webpack_require__.e("vendors/react-lifecycles-compat"), __webpack_require__.e("vendors/warning"), __webpack_require__.e("pages/home")]).then(__webpack_require__.bind(null, /*! Pages/Home/Home */ "./src/Pages/Home/Home.jsx")));
const SignIn = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() | pages/signIn */[__webpack_require__.e("vendors/react-bootstrap"), __webpack_require__.e("vendors/popperjs"), __webpack_require__.e("vendors/dom-helpers"), __webpack_require__.e("vendors/react-overlays"), __webpack_require__.e("vendors/restart"), __webpack_require__.e("vendors/uncontrollable"), __webpack_require__.e("vendors/prop-types-extra"), __webpack_require__.e("vendors/react-transition-group"), __webpack_require__.e("vendors/classnames"), __webpack_require__.e("vendors/invariant"), __webpack_require__.e("vendors/react-lifecycles-compat"), __webpack_require__.e("vendors/warning"), __webpack_require__.e("pages/signIn")]).then(__webpack_require__.bind(null, /*! Pages/SignIn/SignIn */ "./src/Pages/SignIn/SignIn.jsx")));
const SignUp = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() | pages/signUp */[__webpack_require__.e("vendors/react-bootstrap"), __webpack_require__.e("vendors/popperjs"), __webpack_require__.e("vendors/dom-helpers"), __webpack_require__.e("vendors/react-overlays"), __webpack_require__.e("vendors/restart"), __webpack_require__.e("vendors/uncontrollable"), __webpack_require__.e("vendors/prop-types-extra"), __webpack_require__.e("vendors/react-transition-group"), __webpack_require__.e("vendors/classnames"), __webpack_require__.e("vendors/invariant"), __webpack_require__.e("vendors/react-lifecycles-compat"), __webpack_require__.e("vendors/warning"), __webpack_require__.e("pages/signUp")]).then(__webpack_require__.bind(null, /*! Pages/SignUp/SignUp */ "./src/Pages/SignUp/SignUp.jsx")));
const ActivationCode = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() | pages/signUp */[__webpack_require__.e("vendors/react-bootstrap"), __webpack_require__.e("vendors/popperjs"), __webpack_require__.e("vendors/dom-helpers"), __webpack_require__.e("vendors/react-overlays"), __webpack_require__.e("vendors/restart"), __webpack_require__.e("vendors/uncontrollable"), __webpack_require__.e("vendors/prop-types-extra"), __webpack_require__.e("vendors/react-transition-group"), __webpack_require__.e("vendors/classnames"), __webpack_require__.e("vendors/invariant"), __webpack_require__.e("vendors/react-lifecycles-compat"), __webpack_require__.e("vendors/warning"), __webpack_require__.e("pages/signUp")]).then(__webpack_require__.bind(null, /*! Pages/SignUp/Components/ActivationCode/ActivationCode */ "./src/Pages/SignUp/Components/ActivationCode/ActivationCode.jsx")));
const Settings = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() | pages/signUp */[__webpack_require__.e("vendors/react-bootstrap"), __webpack_require__.e("vendors/popperjs"), __webpack_require__.e("vendors/dom-helpers"), __webpack_require__.e("vendors/react-overlays"), __webpack_require__.e("vendors/restart"), __webpack_require__.e("vendors/uncontrollable"), __webpack_require__.e("vendors/prop-types-extra"), __webpack_require__.e("vendors/react-transition-group"), __webpack_require__.e("vendors/classnames"), __webpack_require__.e("vendors/invariant"), __webpack_require__.e("vendors/react-lifecycles-compat"), __webpack_require__.e("vendors/warning"), __webpack_require__.e("pages/signUp")]).then(__webpack_require__.bind(null, /*! Pages/Settings/Settings */ "./src/Pages/Settings/Settings.jsx")));
const WithdrawalHistory = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() | pages/signUp */[__webpack_require__.e("vendors/react-bootstrap"), __webpack_require__.e("vendors/popperjs"), __webpack_require__.e("vendors/dom-helpers"), __webpack_require__.e("vendors/react-overlays"), __webpack_require__.e("vendors/restart"), __webpack_require__.e("vendors/uncontrollable"), __webpack_require__.e("vendors/prop-types-extra"), __webpack_require__.e("vendors/react-transition-group"), __webpack_require__.e("vendors/classnames"), __webpack_require__.e("vendors/invariant"), __webpack_require__.e("vendors/react-lifecycles-compat"), __webpack_require__.e("vendors/warning"), __webpack_require__.e("pages/signUp")]).then(__webpack_require__.bind(null, /*! Pages/WithdrawalHistory/WithdrawalHistory */ "./src/Pages/WithdrawalHistory/WithdrawalHistory.jsx")));
const ForgetPassword = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() | pages/signUp */[__webpack_require__.e("vendors/react-bootstrap"), __webpack_require__.e("vendors/popperjs"), __webpack_require__.e("vendors/dom-helpers"), __webpack_require__.e("vendors/react-overlays"), __webpack_require__.e("vendors/restart"), __webpack_require__.e("vendors/uncontrollable"), __webpack_require__.e("vendors/prop-types-extra"), __webpack_require__.e("vendors/react-transition-group"), __webpack_require__.e("vendors/classnames"), __webpack_require__.e("vendors/invariant"), __webpack_require__.e("vendors/react-lifecycles-compat"), __webpack_require__.e("vendors/warning"), __webpack_require__.e("pages/signUp")]).then(__webpack_require__.bind(null, /*! Pages/ForgetPassword/ForgetPassword */ "./src/Pages/ForgetPassword/ForgetPassword.jsx")));
const NotFound = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => __webpack_require__.e(/*! import() | pages/NotFound */ "pages/NotFound").then(__webpack_require__.bind(null, /*! Pages/NotFound/NotFound */ "./src/Pages/NotFound/NotFound.jsx")));

const history = Object(history__WEBPACK_IMPORTED_MODULE_1__["createBrowserHistory"])();
const publicRoutes = {
  home: {
    path: '/frontend',
    children: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Home, props)
  },
  signIn: {
    path: '/frontend/sign-in',
    children: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SignIn, props)
  },
  signUp: {
    path: '/frontend/sign-up',
    children: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SignUp, props)
  },
  withdrawalHistory: {
    path: '/frontend/withdrawal-history',
    children: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WithdrawalHistory, props)
  },
  forgetPassword: {
    path: '/frontend/forget-password',
    children: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ForgetPassword, props)
  },
  notFound: {
    path: '/frontend/',
    render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NotFound, props)
  }
};
const privateRoutes = {
  home: {
    path: '/frontend',
    children: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Home, props)
  },
  signIn: {
    path: '/frontend/sign-in',
    children: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SignIn, props)
  },
  signUp: {
    path: '/frontend/sign-up',
    children: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SignUp, props)
  },
  activationCode: {
    path: '/frontend/activation-code',
    children: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ActivationCode, props)
  },
  // settings: {
  // 	path: '/settings',
  // 	children: props => <Settings {...props} />
  // },
  withdrawalHistory: {
    path: '/frontend/withdrawal-history',
    children: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WithdrawalHistory, props)
  },
  forgetPassword: {
    path: '/frontend/forget-password',
    children: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ForgetPassword, props)
  },
  notFound: {
    path: '/frontend/',
    render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NotFound, props)
  }
};


/***/ }),

/***/ "./src/store/actions/get.actions.js":
/*!******************************************!*\
  !*** ./src/store/actions/get.actions.js ***!
  \******************************************/
/*! exports provided: settings, withdrawalHistory, services */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withdrawalHistory", function() { return withdrawalHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const settings = (store, body, userId) => {
  try {
    const response = axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`https://pelicanbrowser.com/webapi/users/${userId}`, body);
  } catch (error) {
    const isError404 = error.response && error.response.status === 404;
    const status = isError404 ? 'NOT_FOUND' : 'ERROR'; // store.setState({ status });
    // store.actions.counter.addFail();
  }
};
const withdrawalHistory = (store, body) => {
  store.setState({
    loader: true
  });
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`https://pelicanbrowser.com/webapi/withdrawalhistory`, body).then(res => {
    store.setState({
      loader: false,
      withdrawalsHistory: res.data
    });
  }).catch(err => {
    alert(err);
  });
};
const services = (store, body) => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`https://pelicanbrowser.com/webapi/services`, {
    headers: {
      'Content-Type': 'application/json'
    },
    params: body
  }).then(res => {
    console.log(res);
  }).catch(err => {
    alert(err);
  });
};

/***/ }),

/***/ "./src/store/actions/index.js":
/*!************************************!*\
  !*** ./src/store/actions/index.js ***!
  \************************************/
/*! exports provided: get, post, simple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get.actions */ "./src/store/actions/get.actions.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "get", function() { return _get_actions__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _post_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post.actions */ "./src/store/actions/post.actions.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "post", function() { return _post_actions__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _simple_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simple.actions */ "./src/store/actions/simple.actions.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "simple", function() { return _simple_actions__WEBPACK_IMPORTED_MODULE_2__; });





/***/ }),

/***/ "./src/store/actions/post.actions.js":
/*!*******************************************!*\
  !*** ./src/store/actions/post.actions.js ***!
  \*******************************************/
/*! exports provided: signIn, signUp, activate, resend, changePassword, forgotPassword, withdrawal, getWallet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signIn", function() { return signIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUp", function() { return signUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activate", function() { return activate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resend", function() { return resend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePassword", function() { return changePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forgotPassword", function() { return forgotPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withdrawal", function() { return withdrawal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWallet", function() { return getWallet; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const signIn = (store, body, history) => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`https://pelicanbrowser.com/webapi/login`, body).then(res => {
    localStorage.setItem('api_key', res.data.api_key);
    localStorage.setItem('user_id', res.data.user_id);
    history.push('/frontend');
    store.setState({
      isUserLoggedIn: true,
      errorMessage: ''
    });
  }).catch(err => {
    if (err.response.status === 401) {
      store.setState({
        errorMessage: err.response.data.message
      }); // console.log(err.response.data.message);
      // store.setState({ error: true });
    }

    return err;
  });
};
const signUp = (store, body, history) => {
  store.setState({
    loader: true
  });
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`https://pelicanbrowser.com/webapi/register`, body).then(res => {
    // console.log(res.data);
    store.setState({
      user: {
        id: res.data.user_id,
        phone: body.phone,
        email: body.email
      },
      tempToken: res.data.temp_token,
      errorMessage: '',
      loader: false
    });
    history.push('/frontend/activation-code');
  }).catch(err => {
    store.setState({
      errorMessage: err.response.data.message,
      loader: false
    });
  });
};
const activate = (store, body, history) => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`https://pelicanbrowser.com/webapi/activate`, body).then(res => {
    if (res.status === 200) {
      history.push('/frontend');
    }

    store.setState({
      errorMessage: ''
    }); // localStorage.setItem('token', res.data.response);
  }).catch(err => {
    store.setState({
      errorMessage: err.response.data.message
    });
  });
};
const resend = (store, body) => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`https://pelicanbrowser.com/webapi/resend`, body).then(res => {
    console.log(res); // localStorage.setItem('token', res.data.response);
  }).catch(err => {
    store.setState({
      errorMessage: err.response.data.message
    });
  });
};
const changePassword = (store, body) => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`https://pelicanbrowser.com/webapi/changepass`, body).then(res => {
    console.log(res); // localStorage.setItem('token', res.data.response);
  }).catch(err => {
    alert(err);
  });
};
const forgotPassword = (store, body) => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`https://pelicanbrowser.com/webapi/forgot`, body).then(res => {
    console.log(res); // localStorage.setItem('token', res.data.response);
  }).catch(err => {
    alert(err);
  });
};
const withdrawal = (store, body) => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`https://pelicanbrowser.com/webapi/withdrawals`, body).then(res => {
    console.log(res); // localStorage.setItem('token', res.data.response);
  }).catch(err => {
    alert(err);
  });
};
const getWallet = (store, body) => {
  store.setState({
    loader: true
  });
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`https://pelicanbrowser.com/webapi/wallet`, body).then(res => {
    store.setState({
      wallet: res.data,
      loader: false,
      isUserLoggedIn: !!!res.data.guestMode
    });
  }).catch(err => {
    store.setState({
      errorMessage: err.response.message,
      loader: false,
      isUserLoggedIn: false
    });
  });
};

/***/ }),

/***/ "./src/store/actions/simple.actions.js":
/*!*********************************************!*\
  !*** ./src/store/actions/simple.actions.js ***!
  \*********************************************/
/*! exports provided: signOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signOut", function() { return signOut; });
const signOut = (store, history) => {
  localStorage.setItem('api_key', '');
  history.push('/frontend/sign-in');
  store.setState({
    isUserLoggedIn: false
  });
};

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: useGlobal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGlobal", function() { return useGlobal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var use_global_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-global-hook */ "./node_modules/use-global-hook/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/store/actions/index.js");
// VENDORS



const initialState = {
  isUserLoggedIn: false,
  user: {
    id: 0,
    goal: 5000,
    email: 'updated@email.com',
    phone: '055123123'
  },
  forgetPasswordEmailVerified: false,
  errorMessage: '',
  smsActivationCode: 0,
  tempToken: '',
  loader: false,
  wallet: null,
  withdrawalsHistory: null
};
const useGlobal = Object(use_global_hook__WEBPACK_IMPORTED_MODULE_1__["default"])(react__WEBPACK_IMPORTED_MODULE_0___default.a, initialState, _actions__WEBPACK_IMPORTED_MODULE_2__);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvTGF5b3V0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZXMvSW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9QYWdlcy9pbmRleC5zY3NzP2EwYmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2VzL3JvdXRlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2FjdGlvbnMvZ2V0LmFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2FjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2FjdGlvbnMvcG9zdC5hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9hY3Rpb25zL3NpbXBsZS5hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsYXp5IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBGb290ZXIgPSBsYXp5KCgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImxheW91dHMvZm9vdGVyXCIgKi8nLi9Gb290ZXIvRm9vdGVyJykpO1xuY29uc3QgSGVhZGVyID0gbGF6eSgoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJsYXlvdXRzL2hlYWRlclwiICovJy4vSGVhZGVyL0hlYWRlcicpKTtcbmNvbnN0IExheW91dCA9IGxhenkoKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwibGF5b3V0cy9sYXlvdXRcIiAqLycuL0xheW91dC9MYXlvdXQnKSk7XG5cbmV4cG9ydCB7XG4gICAgRm9vdGVyLFxuICAgIEhlYWRlcixcbiAgICBMYXlvdXQsXG59O1xuIiwiLy8gVkVORE9SU1xuaW1wb3J0IFJlYWN0LCB7IFN1c3BlbnNlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIFN3aXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgeyBoaXN0b3J5LCBwdWJsaWNSb3V0ZXMsIHByaXZhdGVSb3V0ZXMgfSBmcm9tICdQYWdlcy9yb3V0ZXMnO1xuXG5pbXBvcnQgeyB1c2VHbG9iYWwgfSBmcm9tICcuLi9zdG9yZSc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnTGF5b3V0cyc7XG5cbmZ1bmN0aW9uIEluZGV4KCkge1xuXHRjb25zdCBbeyBpc1VzZXJMb2dnZWRJbiB9XSA9IHVzZUdsb2JhbCgpO1xuXG5cdGNvbnN0IFJPVVRFUyA9IGlzVXNlckxvZ2dlZEluID8gcHJpdmF0ZVJvdXRlcyA6IHB1YmxpY1JvdXRlcztcblxuXHRyZXR1cm4gKFxuXHRcdDxSb3V0ZXIgaGlzdG9yeT17aGlzdG9yeX0+XG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHQ8U3dpdGNoPlxuXHRcdFx0XHRcdHtPYmplY3QuZW50cmllcyhST1VURVMpLm1hcCgoW3JvdXRlS2V5LCByb3V0ZVNldHRpbmdzXSkgPT4gKFxuXHRcdFx0XHRcdFx0PFJvdXRlIGtleT17cm91dGVLZXl9IGV4YWN0PXtyb3V0ZUtleSAhPT0gJ25vdEZvdW5kJ30gey4uLnJvdXRlU2V0dGluZ3N9IC8+XG5cdFx0XHRcdFx0KSl9XG5cdFx0XHRcdDwvU3dpdGNoPlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0PC9Sb3V0ZXI+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0UmVhY3RET00ucmVuZGVyKFxuXHRcdDxTdXNwZW5zZSBmYWxsYmFjaz17bnVsbH0+XG5cdFx0XHQ8SW5kZXggLz5cblx0XHQ8L1N1c3BlbnNlPixcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG5cdCk7XG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gVkVORE9SU1xuaW1wb3J0IFJlYWN0LCB7IGxhenkgfSBmcm9tICdyZWFjdCc7XG5cbi8vIENPTVBPTkVOVFNcbmNvbnN0IEhvbWUgPSBsYXp5KCgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhZ2VzL2hvbWVcIiAqLyAnUGFnZXMvSG9tZS9Ib21lJykpO1xuY29uc3QgU2lnbkluID0gbGF6eSgoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJwYWdlcy9zaWduSW5cIiAqLyAnUGFnZXMvU2lnbkluL1NpZ25JbicpKTtcbmNvbnN0IFNpZ25VcCA9IGxhenkoKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGFnZXMvc2lnblVwXCIgKi8gJ1BhZ2VzL1NpZ25VcC9TaWduVXAnKSk7XG5jb25zdCBBY3RpdmF0aW9uQ29kZSA9IGxhenkoKCkgPT5cblx0aW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGFnZXMvc2lnblVwXCIgKi8gJ1BhZ2VzL1NpZ25VcC9Db21wb25lbnRzL0FjdGl2YXRpb25Db2RlL0FjdGl2YXRpb25Db2RlJylcbik7XG5jb25zdCBTZXR0aW5ncyA9IGxhenkoKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGFnZXMvc2lnblVwXCIgKi8gJ1BhZ2VzL1NldHRpbmdzL1NldHRpbmdzJykpO1xuY29uc3QgV2l0aGRyYXdhbEhpc3RvcnkgPSBsYXp5KCgpID0+XG5cdGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhZ2VzL3NpZ25VcFwiICovICdQYWdlcy9XaXRoZHJhd2FsSGlzdG9yeS9XaXRoZHJhd2FsSGlzdG9yeScpXG4pO1xuY29uc3QgRm9yZ2V0UGFzc3dvcmQgPSBsYXp5KCgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhZ2VzL3NpZ25VcFwiICovICdQYWdlcy9Gb3JnZXRQYXNzd29yZC9Gb3JnZXRQYXNzd29yZCcpKTtcbmNvbnN0IE5vdEZvdW5kID0gbGF6eSgoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJwYWdlcy9Ob3RGb3VuZFwiICovICdQYWdlcy9Ob3RGb3VuZC9Ob3RGb3VuZCcpKTtcblxuaW1wb3J0IHsgY3JlYXRlQnJvd3Nlckhpc3RvcnkgfSBmcm9tICdoaXN0b3J5JztcblxuY29uc3QgaGlzdG9yeSA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCk7XG5cbmV4cG9ydCBjb25zdCBwdWJsaWNSb3V0ZXMgPSB7XG5cdGhvbWU6IHtcblx0XHRwYXRoOiAnL2Zyb250ZW5kJyxcblx0XHRjaGlsZHJlbjogcHJvcHMgPT4gPEhvbWUgey4uLnByb3BzfSAvPlxuXHR9LFxuXHRzaWduSW46IHtcblx0XHRwYXRoOiAnL2Zyb250ZW5kL3NpZ24taW4nLFxuXHRcdGNoaWxkcmVuOiBwcm9wcyA9PiA8U2lnbkluIHsuLi5wcm9wc30gLz5cblx0fSxcblx0c2lnblVwOiB7XG5cdFx0cGF0aDogJy9mcm9udGVuZC9zaWduLXVwJyxcblx0XHRjaGlsZHJlbjogcHJvcHMgPT4gPFNpZ25VcCB7Li4ucHJvcHN9IC8+XG5cdH0sXG5cdHdpdGhkcmF3YWxIaXN0b3J5OiB7XG5cdFx0cGF0aDogJy9mcm9udGVuZC93aXRoZHJhd2FsLWhpc3RvcnknLFxuXHRcdGNoaWxkcmVuOiBwcm9wcyA9PiA8V2l0aGRyYXdhbEhpc3Rvcnkgey4uLnByb3BzfSAvPlxuXHR9LFxuXHRmb3JnZXRQYXNzd29yZDoge1xuXHRcdHBhdGg6ICcvZnJvbnRlbmQvZm9yZ2V0LXBhc3N3b3JkJyxcblx0XHRjaGlsZHJlbjogcHJvcHMgPT4gPEZvcmdldFBhc3N3b3JkIHsuLi5wcm9wc30gLz5cblx0fSxcblx0bm90Rm91bmQ6IHtcblx0XHRwYXRoOiAnL2Zyb250ZW5kLycsXG5cdFx0cmVuZGVyOiBwcm9wcyA9PiA8Tm90Rm91bmQgey4uLnByb3BzfSAvPlxuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgcHJpdmF0ZVJvdXRlcyA9IHtcblx0aG9tZToge1xuXHRcdHBhdGg6ICcvZnJvbnRlbmQnLFxuXHRcdGNoaWxkcmVuOiBwcm9wcyA9PiA8SG9tZSB7Li4ucHJvcHN9IC8+XG5cdH0sXG5cdHNpZ25Jbjoge1xuXHRcdHBhdGg6ICcvZnJvbnRlbmQvc2lnbi1pbicsXG5cdFx0Y2hpbGRyZW46IHByb3BzID0+IDxTaWduSW4gey4uLnByb3BzfSAvPlxuXHR9LFxuXHRzaWduVXA6IHtcblx0XHRwYXRoOiAnL2Zyb250ZW5kL3NpZ24tdXAnLFxuXHRcdGNoaWxkcmVuOiBwcm9wcyA9PiA8U2lnblVwIHsuLi5wcm9wc30gLz5cblx0fSxcblx0YWN0aXZhdGlvbkNvZGU6IHtcblx0XHRwYXRoOiAnL2Zyb250ZW5kL2FjdGl2YXRpb24tY29kZScsXG5cdFx0Y2hpbGRyZW46IHByb3BzID0+IDxBY3RpdmF0aW9uQ29kZSB7Li4ucHJvcHN9IC8+XG5cdH0sXG5cdC8vIHNldHRpbmdzOiB7XG5cdC8vIFx0cGF0aDogJy9zZXR0aW5ncycsXG5cdC8vIFx0Y2hpbGRyZW46IHByb3BzID0+IDxTZXR0aW5ncyB7Li4ucHJvcHN9IC8+XG5cdC8vIH0sXG5cdHdpdGhkcmF3YWxIaXN0b3J5OiB7XG5cdFx0cGF0aDogJy9mcm9udGVuZC93aXRoZHJhd2FsLWhpc3RvcnknLFxuXHRcdGNoaWxkcmVuOiBwcm9wcyA9PiA8V2l0aGRyYXdhbEhpc3Rvcnkgey4uLnByb3BzfSAvPlxuXHR9LFxuXHRmb3JnZXRQYXNzd29yZDoge1xuXHRcdHBhdGg6ICcvZnJvbnRlbmQvZm9yZ2V0LXBhc3N3b3JkJyxcblx0XHRjaGlsZHJlbjogcHJvcHMgPT4gPEZvcmdldFBhc3N3b3JkIHsuLi5wcm9wc30gLz5cblx0fSxcblx0bm90Rm91bmQ6IHtcblx0XHRwYXRoOiAnL2Zyb250ZW5kLycsXG5cdFx0cmVuZGVyOiBwcm9wcyA9PiA8Tm90Rm91bmQgey4uLnByb3BzfSAvPlxuXHR9XG59O1xuXG5leHBvcnQgeyBoaXN0b3J5IH07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgY29uc3Qgc2V0dGluZ3MgPSAoc3RvcmUsIGJvZHksIHVzZXJJZCkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXhpb3MuZ2V0KGBodHRwczovL3BlbGljYW5icm93c2VyLmNvbS93ZWJhcGkvdXNlcnMvJHt1c2VySWR9YCwgYm9keSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc3QgaXNFcnJvcjQwNCA9IGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0O1xuXHRcdGNvbnN0IHN0YXR1cyA9IGlzRXJyb3I0MDQgPyAnTk9UX0ZPVU5EJyA6ICdFUlJPUic7XG5cdFx0Ly8gc3RvcmUuc2V0U3RhdGUoeyBzdGF0dXMgfSk7XG5cdFx0Ly8gc3RvcmUuYWN0aW9ucy5jb3VudGVyLmFkZEZhaWwoKTtcblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IHdpdGhkcmF3YWxIaXN0b3J5ID0gKHN0b3JlLCBib2R5KSA9PiB7XG5cdHN0b3JlLnNldFN0YXRlKHsgbG9hZGVyOiB0cnVlIH0pO1xuXHRheGlvc1xuXHRcdC5wb3N0KGBodHRwczovL3BlbGljYW5icm93c2VyLmNvbS93ZWJhcGkvd2l0aGRyYXdhbGhpc3RvcnlgLCBib2R5KVxuXHRcdC50aGVuKHJlcyA9PiB7XG5cdFx0XHRzdG9yZS5zZXRTdGF0ZSh7IGxvYWRlcjogZmFsc2UsIHdpdGhkcmF3YWxzSGlzdG9yeTogcmVzLmRhdGEgfSk7XG5cdFx0fSlcblx0XHQuY2F0Y2goZXJyID0+IHtcblx0XHRcdGFsZXJ0KGVycik7XG5cdFx0fSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2VydmljZXMgPSAoc3RvcmUsIGJvZHkpID0+IHtcblx0YXhpb3Ncblx0XHQuZ2V0KGBodHRwczovL3BlbGljYW5icm93c2VyLmNvbS93ZWJhcGkvc2VydmljZXNgLCB7XG5cdFx0XHRoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcblx0XHRcdHBhcmFtczogYm9keVxuXHRcdH0pXG5cdFx0LnRoZW4ocmVzID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cdFx0fSlcblx0XHQuY2F0Y2goZXJyID0+IHtcblx0XHRcdGFsZXJ0KGVycik7XG5cdFx0fSk7XG59O1xuIiwiaW1wb3J0ICogIGFzIGdldCBmcm9tICcuL2dldC5hY3Rpb25zJztcbmltcG9ydCAqICBhcyBwb3N0IGZyb20gJy4vcG9zdC5hY3Rpb25zJztcbmltcG9ydCAqICBhcyBzaW1wbGUgZnJvbSAnLi9zaW1wbGUuYWN0aW9ucyc7XG5cbmV4cG9ydCB7IGdldCwgcG9zdCwgc2ltcGxlIH0iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgY29uc3Qgc2lnbkluID0gKHN0b3JlLCBib2R5LCBoaXN0b3J5KSA9PiB7XG5cdGF4aW9zXG5cdFx0LnBvc3QoYGh0dHBzOi8vcGVsaWNhbmJyb3dzZXIuY29tL3dlYmFwaS9sb2dpbmAsIGJvZHkpXG5cdFx0LnRoZW4ocmVzID0+IHtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcGlfa2V5JywgcmVzLmRhdGEuYXBpX2tleSk7XG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcl9pZCcsIHJlcy5kYXRhLnVzZXJfaWQpO1xuXHRcdFx0aGlzdG9yeS5wdXNoKCcvZnJvbnRlbmQnKTtcblx0XHRcdHN0b3JlLnNldFN0YXRlKHsgaXNVc2VyTG9nZ2VkSW46IHRydWUsIGVycm9yTWVzc2FnZTogJycgfSk7XG5cdFx0fSlcblx0XHQuY2F0Y2goZXJyID0+IHtcblx0XHRcdGlmIChlcnIucmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcblx0XHRcdFx0c3RvcmUuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IGVyci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UgfSk7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xuXHRcdFx0XHQvLyBzdG9yZS5zZXRTdGF0ZSh7IGVycm9yOiB0cnVlIH0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGVycjtcblx0XHR9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBzaWduVXAgPSAoc3RvcmUsIGJvZHksIGhpc3RvcnkpID0+IHtcblx0c3RvcmUuc2V0U3RhdGUoeyBsb2FkZXI6IHRydWUgfSk7XG5cdGF4aW9zXG5cdFx0LnBvc3QoYGh0dHBzOi8vcGVsaWNhbmJyb3dzZXIuY29tL3dlYmFwaS9yZWdpc3RlcmAsIGJvZHkpXG5cdFx0LnRoZW4ocmVzID0+IHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcblx0XHRcdHN0b3JlLnNldFN0YXRlKHtcblx0XHRcdFx0dXNlcjoge1xuXHRcdFx0XHRcdGlkOiByZXMuZGF0YS51c2VyX2lkLFxuXHRcdFx0XHRcdHBob25lOiBib2R5LnBob25lLFxuXHRcdFx0XHRcdGVtYWlsOiBib2R5LmVtYWlsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHRlbXBUb2tlbjogcmVzLmRhdGEudGVtcF90b2tlbixcblx0XHRcdFx0ZXJyb3JNZXNzYWdlOiAnJyxcblx0XHRcdFx0bG9hZGVyOiBmYWxzZVxuXHRcdFx0fSk7XG5cblx0XHRcdGhpc3RvcnkucHVzaCgnL2Zyb250ZW5kL2FjdGl2YXRpb24tY29kZScpO1xuXHRcdH0pXG5cdFx0LmNhdGNoKGVyciA9PiB7XG5cdFx0XHRzdG9yZS5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogZXJyLnJlc3BvbnNlLmRhdGEubWVzc2FnZSwgbG9hZGVyOiBmYWxzZSB9KTtcblx0XHR9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBhY3RpdmF0ZSA9IChzdG9yZSwgYm9keSwgaGlzdG9yeSkgPT4ge1xuXHRheGlvc1xuXHRcdC5wb3N0KGBodHRwczovL3BlbGljYW5icm93c2VyLmNvbS93ZWJhcGkvYWN0aXZhdGVgLCBib2R5KVxuXHRcdC50aGVuKHJlcyA9PiB7XG5cdFx0XHRpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG5cdFx0XHRcdGhpc3RvcnkucHVzaCgnL2Zyb250ZW5kJyk7XG5cdFx0XHR9XG5cdFx0XHRzdG9yZS5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogJycgfSk7XG5cdFx0XHQvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCByZXMuZGF0YS5yZXNwb25zZSk7XG5cdFx0fSlcblx0XHQuY2F0Y2goZXJyID0+IHtcblx0XHRcdHN0b3JlLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnIucmVzcG9uc2UuZGF0YS5tZXNzYWdlIH0pO1xuXHRcdH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlc2VuZCA9IChzdG9yZSwgYm9keSkgPT4ge1xuXHRheGlvc1xuXHRcdC5wb3N0KGBodHRwczovL3BlbGljYW5icm93c2VyLmNvbS93ZWJhcGkvcmVzZW5kYCwgYm9keSlcblx0XHQudGhlbihyZXMgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRcdC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHJlcy5kYXRhLnJlc3BvbnNlKTtcblx0XHR9KVxuXHRcdC5jYXRjaChlcnIgPT4ge1xuXHRcdFx0c3RvcmUuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IGVyci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UgfSk7XG5cdFx0fSk7XG59O1xuXG5leHBvcnQgY29uc3QgY2hhbmdlUGFzc3dvcmQgPSAoc3RvcmUsIGJvZHkpID0+IHtcblx0YXhpb3Ncblx0XHQucG9zdChgaHR0cHM6Ly9wZWxpY2FuYnJvd3Nlci5jb20vd2ViYXBpL2NoYW5nZXBhc3NgLCBib2R5KVxuXHRcdC50aGVuKHJlcyA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdFx0Ly8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgcmVzLmRhdGEucmVzcG9uc2UpO1xuXHRcdH0pXG5cdFx0LmNhdGNoKGVyciA9PiB7XG5cdFx0XHRhbGVydChlcnIpO1xuXHRcdH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGZvcmdvdFBhc3N3b3JkID0gKHN0b3JlLCBib2R5KSA9PiB7XG5cdGF4aW9zXG5cdFx0LnBvc3QoYGh0dHBzOi8vcGVsaWNhbmJyb3dzZXIuY29tL3dlYmFwaS9mb3Jnb3RgLCBib2R5KVxuXHRcdC50aGVuKHJlcyA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdFx0Ly8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgcmVzLmRhdGEucmVzcG9uc2UpO1xuXHRcdH0pXG5cdFx0LmNhdGNoKGVyciA9PiB7XG5cdFx0XHRhbGVydChlcnIpO1xuXHRcdH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHdpdGhkcmF3YWwgPSAoc3RvcmUsIGJvZHkpID0+IHtcblx0YXhpb3Ncblx0XHQucG9zdChgaHR0cHM6Ly9wZWxpY2FuYnJvd3Nlci5jb20vd2ViYXBpL3dpdGhkcmF3YWxzYCwgYm9keSlcblx0XHQudGhlbihyZXMgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRcdC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHJlcy5kYXRhLnJlc3BvbnNlKTtcblx0XHR9KVxuXHRcdC5jYXRjaChlcnIgPT4ge1xuXHRcdFx0YWxlcnQoZXJyKTtcblx0XHR9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRXYWxsZXQgPSAoc3RvcmUsIGJvZHkpID0+IHtcblx0c3RvcmUuc2V0U3RhdGUoeyBsb2FkZXI6IHRydWUgfSk7XG5cdGF4aW9zXG5cdFx0LnBvc3QoYGh0dHBzOi8vcGVsaWNhbmJyb3dzZXIuY29tL3dlYmFwaS93YWxsZXRgLCBib2R5KVxuXHRcdC50aGVuKHJlcyA9PiB7XG5cdFx0XHRzdG9yZS5zZXRTdGF0ZSh7IHdhbGxldDogcmVzLmRhdGEsIGxvYWRlcjogZmFsc2UsIGlzVXNlckxvZ2dlZEluOiAhISFyZXMuZGF0YS5ndWVzdE1vZGV9KTtcblx0XHR9KVxuXHRcdC5jYXRjaChlcnIgPT4ge1xuXHRcdFx0c3RvcmUuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IGVyci5yZXNwb25zZS5tZXNzYWdlLCBsb2FkZXI6IGZhbHNlLCBpc1VzZXJMb2dnZWRJbjogZmFsc2UgfSk7XG5cdFx0fSk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IHNpZ25PdXQgPSAoc3RvcmUsIGhpc3RvcnkpID0+IHtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FwaV9rZXknLCAnJyk7XG5cdGhpc3RvcnkucHVzaCgnL2Zyb250ZW5kL3NpZ24taW4nKTtcblx0c3RvcmUuc2V0U3RhdGUoeyBpc1VzZXJMb2dnZWRJbjogZmFsc2UgfSk7XG59O1xuIiwiLy8gVkVORE9SU1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHVzZUdsb2JhbEhvb2sgZnJvbSAndXNlLWdsb2JhbC1ob29rJztcblxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG5cdGlzVXNlckxvZ2dlZEluOiBmYWxzZSxcblx0dXNlcjoge1xuXHRcdGlkOiAwLFxuXHRcdGdvYWw6IDUwMDAsXG5cdFx0ZW1haWw6ICd1cGRhdGVkQGVtYWlsLmNvbScsXG5cdFx0cGhvbmU6ICcwNTUxMjMxMjMnXG5cdH0sXG5cdGZvcmdldFBhc3N3b3JkRW1haWxWZXJpZmllZDogZmFsc2UsXG5cdGVycm9yTWVzc2FnZTogJycsXG5cdHNtc0FjdGl2YXRpb25Db2RlOiAwLFxuXHR0ZW1wVG9rZW46ICcnLFxuXHRsb2FkZXI6IGZhbHNlLFxuXHR3YWxsZXQ6IG51bGwsXG5cdHdpdGhkcmF3YWxzSGlzdG9yeTogbnVsbFxufTtcblxuZXhwb3J0IGNvbnN0IHVzZUdsb2JhbCA9IHVzZUdsb2JhbEhvb2soUmVhY3QsIGluaXRpYWxTdGF0ZSwgYWN0aW9ucyk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0EsNnpCQUFBO0FBQ0EsNnpCQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFLQTs7Ozs7Ozs7Ozs7QUN2Q0E7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQSwyekJBQUE7QUFDQSwyekJBQUE7QUFDQSx1NEJBQ0E7QUFFQTtBQUNBLGszQkFDQTtBQUVBO0FBQ0EsMlBBQUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFyQkE7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBN0JBOzs7Ozs7Ozs7Ozs7O0FDaERBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3RIQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFpQkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==