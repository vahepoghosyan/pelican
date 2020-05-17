(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors/react-router-dom"],{

/***/ "./node_modules/react-router-dom/esm/react-router-dom.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-router-dom/esm/react-router-dom.js ***!
  \***************************************************************/
/*! exports provided: MemoryRouter, Prompt, Redirect, Route, Router, StaticRouter, Switch, __RouterContext, generatePath, matchPath, useHistory, useLocation, useParams, useRouteMatch, withRouter, BrowserRouter, HashRouter, Link, NavLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserRouter", function() { return BrowserRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashRouter", function() { return HashRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["MemoryRouter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["Prompt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["Redirect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["Route"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["Router"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["StaticRouter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["Switch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__RouterContext", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["__RouterContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generatePath", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["generatePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["matchPath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useHistory", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["useHistory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLocation", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["useLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useParams", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["useParams"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRouteMatch", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["useRouteMatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["withRouter"]; });

/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");










/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = Object(history__WEBPACK_IMPORTED_MODULE_3__["createBrowserHistory"])(_this.props);
    return _this;
  }

  var _proto = BrowserRouter.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__["Router"], {
      history: this.history,
      children: this.props.children
    });
  };

  return BrowserRouter;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

if (true) {
  BrowserRouter.propTypes = {
    basename: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,
    forceRefresh: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    getUserConfirmation: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
    keyLength: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
  };

  BrowserRouter.prototype.componentDidMount = function () {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_5__["default"])(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.") : undefined;
  };
}
/**
 * The public API for a <Router> that uses window.location.hash.
 */


var HashRouter = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(HashRouter, _React$Component);

  function HashRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = Object(history__WEBPACK_IMPORTED_MODULE_3__["createHashHistory"])(_this.props);
    return _this;
  }

  var _proto = HashRouter.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__["Router"], {
      history: this.history,
      children: this.props.children
    });
  };

  return HashRouter;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

if (true) {
  HashRouter.propTypes = {
    basename: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,
    getUserConfirmation: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
    hashType: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(["hashbang", "noslash", "slash"])
  };

  HashRouter.prototype.componentDidMount = function () {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_5__["default"])(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.") : undefined;
  };
}

var resolveToLocation = function resolveToLocation(to, currentLocation) {
  return typeof to === "function" ? to(currentLocation) : to;
};

var normalizeToLocation = function normalizeToLocation(to, currentLocation) {
  return typeof to === "string" ? Object(history__WEBPACK_IMPORTED_MODULE_3__["createLocation"])(to, null, null, currentLocation) : to;
};

var forwardRefShim = function forwardRefShim(C) {
  return C;
};

var forwardRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = forwardRefShim;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var LinkAnchor = forwardRef(function (_ref, forwardedRef) {
  var innerRef = _ref.innerRef,
      navigate = _ref.navigate,
      _onClick = _ref.onClick,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, ["innerRef", "navigate", "onClick"]);

  var target = rest.target;

  var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, rest, {
    onClick: function onClick(event) {
      try {
        if (_onClick) _onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && ( // ignore everything but left clicks
      !target || target === "_self") && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();
          navigate();
        }
    }
  }); // React 15 compat


  if (forwardRefShim !== forwardRef) {
    props.ref = forwardedRef || innerRef;
  } else {
    props.ref = innerRef;
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", props);
});

if (true) {
  LinkAnchor.displayName = "LinkAnchor";
}
/**
 * The public API for rendering a history-aware <a>.
 */


var Link = forwardRef(function (_ref2, forwardedRef) {
  var _ref2$component = _ref2.component,
      component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
      replace = _ref2.replace,
      to = _ref2.to,
      innerRef = _ref2.innerRef,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref2, ["component", "replace", "to", "innerRef"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__["__RouterContext"].Consumer, null, function (context) {
    !context ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_8__["default"])(false, "You should not use <Link> outside a <Router>") : undefined : void 0;
    var history = context.history;
    var location = normalizeToLocation(resolveToLocation(to, context.location), context.location);
    var href = location ? history.createHref(location) : "";

    var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, rest, {
      href: href,
      navigate: function navigate() {
        var location = resolveToLocation(to, context.location);
        var method = replace ? history.replace : history.push;
        method(location);
      }
    }); // React 15 compat


    if (forwardRefShim !== forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(component, props);
  });
});

if (true) {
  var toType = prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func]);
  var refType = prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    current: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
  })]);
  Link.displayName = "Link";
  Link.propTypes = {
    innerRef: refType,
    onClick: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
    replace: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    target: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    to: toType.isRequired
  };
}

var forwardRefShim$1 = function forwardRefShim(C) {
  return C;
};

var forwardRef$1 = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef;

if (typeof forwardRef$1 === "undefined") {
  forwardRef$1 = forwardRefShim$1;
}

function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }

  return classnames.filter(function (i) {
    return i;
  }).join(" ");
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


var NavLink = forwardRef$1(function (_ref, forwardedRef) {
  var _ref$ariaCurrent = _ref["aria-current"],
      ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
      _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
      activeStyle = _ref.activeStyle,
      classNameProp = _ref.className,
      exact = _ref.exact,
      isActiveProp = _ref.isActive,
      locationProp = _ref.location,
      strict = _ref.strict,
      styleProp = _ref.style,
      to = _ref.to,
      innerRef = _ref.innerRef,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "strict", "style", "to", "innerRef"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__["__RouterContext"].Consumer, null, function (context) {
    !context ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_8__["default"])(false, "You should not use <NavLink> outside a <Router>") : undefined : void 0;
    var currentLocation = locationProp || context.location;
    var toLocation = normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
    var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    var match = escapedPath ? Object(react_router__WEBPACK_IMPORTED_MODULE_0__["matchPath"])(currentLocation.pathname, {
      path: escapedPath,
      exact: exact,
      strict: strict
    }) : null;
    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
    var className = isActive ? joinClassnames(classNameProp, activeClassName) : classNameProp;
    var style = isActive ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, styleProp, {}, activeStyle) : styleProp;

    var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({
      "aria-current": isActive && ariaCurrent || null,
      className: className,
      style: style,
      to: toLocation
    }, rest); // React 15 compat


    if (forwardRefShim$1 !== forwardRef$1) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Link, props);
  });
});

if (true) {
  NavLink.displayName = "NavLink";
  var ariaCurrentType = prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(["page", "step", "location", "date", "time", "true"]);
  NavLink.propTypes = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, Link.propTypes, {
    "aria-current": ariaCurrentType,
    activeClassName: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    activeStyle: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
    className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    exact: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    isActive: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
    location: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
    strict: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    style: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
  });
}



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdmVuZG9ycy9yZWFjdC1yb3V0ZXItZG9tLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL21vZHVsZXMvQnJvd3NlclJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi4vbW9kdWxlcy9IYXNoUm91dGVyLmpzIiwid2VicGFjazovLy8uLi9tb2R1bGVzL3V0aWxzL2xvY2F0aW9uVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL21vZHVsZXMvTGluay5qcyIsIndlYnBhY2s6Ly8vLi4vbW9kdWxlcy9OYXZMaW5rLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5IGFzIGNyZWF0ZUhpc3RvcnkgfSBmcm9tIFwiaGlzdG9yeVwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSBcInRpbnktd2FybmluZ1wiO1xuXG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciBhIDxSb3V0ZXI+IHRoYXQgdXNlcyBIVE1MNSBoaXN0b3J5LlxuICovXG5jbGFzcyBCcm93c2VyUm91dGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgaGlzdG9yeSA9IGNyZWF0ZUhpc3RvcnkodGhpcy5wcm9wcyk7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Um91dGVyIGhpc3Rvcnk9e3RoaXMuaGlzdG9yeX0gY2hpbGRyZW49e3RoaXMucHJvcHMuY2hpbGRyZW59IC8+O1xuICB9XG59XG5cbmlmIChfX0RFVl9fKSB7XG4gIEJyb3dzZXJSb3V0ZXIucHJvcFR5cGVzID0ge1xuICAgIGJhc2VuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBmb3JjZVJlZnJlc2g6IFByb3BUeXBlcy5ib29sLFxuICAgIGdldFVzZXJDb25maXJtYXRpb246IFByb3BUeXBlcy5mdW5jLFxuICAgIGtleUxlbmd0aDogUHJvcFR5cGVzLm51bWJlclxuICB9O1xuXG4gIEJyb3dzZXJSb3V0ZXIucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24oKSB7XG4gICAgd2FybmluZyhcbiAgICAgICF0aGlzLnByb3BzLmhpc3RvcnksXG4gICAgICBcIjxCcm93c2VyUm91dGVyPiBpZ25vcmVzIHRoZSBoaXN0b3J5IHByb3AuIFRvIHVzZSBhIGN1c3RvbSBoaXN0b3J5LCBcIiArXG4gICAgICAgIFwidXNlIGBpbXBvcnQgeyBSb3V0ZXIgfWAgaW5zdGVhZCBvZiBgaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfWAuXCJcbiAgICApO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBCcm93c2VyUm91dGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xuaW1wb3J0IHsgY3JlYXRlSGFzaEhpc3RvcnkgYXMgY3JlYXRlSGlzdG9yeSB9IGZyb20gXCJoaXN0b3J5XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgd2FybmluZyBmcm9tIFwidGlueS13YXJuaW5nXCI7XG5cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIGEgPFJvdXRlcj4gdGhhdCB1c2VzIHdpbmRvdy5sb2NhdGlvbi5oYXNoLlxuICovXG5jbGFzcyBIYXNoUm91dGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgaGlzdG9yeSA9IGNyZWF0ZUhpc3RvcnkodGhpcy5wcm9wcyk7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Um91dGVyIGhpc3Rvcnk9e3RoaXMuaGlzdG9yeX0gY2hpbGRyZW49e3RoaXMucHJvcHMuY2hpbGRyZW59IC8+O1xuICB9XG59XG5cbmlmIChfX0RFVl9fKSB7XG4gIEhhc2hSb3V0ZXIucHJvcFR5cGVzID0ge1xuICAgIGJhc2VuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBnZXRVc2VyQ29uZmlybWF0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBoYXNoVHlwZTogUHJvcFR5cGVzLm9uZU9mKFtcImhhc2hiYW5nXCIsIFwibm9zbGFzaFwiLCBcInNsYXNoXCJdKVxuICB9O1xuXG4gIEhhc2hSb3V0ZXIucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24oKSB7XG4gICAgd2FybmluZyhcbiAgICAgICF0aGlzLnByb3BzLmhpc3RvcnksXG4gICAgICBcIjxIYXNoUm91dGVyPiBpZ25vcmVzIHRoZSBoaXN0b3J5IHByb3AuIFRvIHVzZSBhIGN1c3RvbSBoaXN0b3J5LCBcIiArXG4gICAgICAgIFwidXNlIGBpbXBvcnQgeyBSb3V0ZXIgfWAgaW5zdGVhZCBvZiBgaW1wb3J0IHsgSGFzaFJvdXRlciBhcyBSb3V0ZXIgfWAuXCJcbiAgICApO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBIYXNoUm91dGVyO1xuIiwiaW1wb3J0IHsgY3JlYXRlTG9jYXRpb24gfSBmcm9tIFwiaGlzdG9yeVwiO1xuXG5leHBvcnQgY29uc3QgcmVzb2x2ZVRvTG9jYXRpb24gPSAodG8sIGN1cnJlbnRMb2NhdGlvbikgPT5cbiAgdHlwZW9mIHRvID09PSBcImZ1bmN0aW9uXCIgPyB0byhjdXJyZW50TG9jYXRpb24pIDogdG87XG5cbmV4cG9ydCBjb25zdCBub3JtYWxpemVUb0xvY2F0aW9uID0gKHRvLCBjdXJyZW50TG9jYXRpb24pID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIlxuICAgID8gY3JlYXRlTG9jYXRpb24odG8sIG51bGwsIG51bGwsIGN1cnJlbnRMb2NhdGlvbilcbiAgICA6IHRvO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IF9fUm91dGVyQ29udGV4dCBhcyBSb3V0ZXJDb250ZXh0IH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIjtcbmltcG9ydCB7IHJlc29sdmVUb0xvY2F0aW9uLCBub3JtYWxpemVUb0xvY2F0aW9uIH0gZnJvbSBcIi4vdXRpbHMvbG9jYXRpb25VdGlsc1wiO1xuXG4vLyBSZWFjdCAxNSBjb21wYXRcbmNvbnN0IGZvcndhcmRSZWZTaGltID0gQyA9PiBDO1xubGV0IHsgZm9yd2FyZFJlZiB9ID0gUmVhY3Q7XG5pZiAodHlwZW9mIGZvcndhcmRSZWYgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgZm9yd2FyZFJlZiA9IGZvcndhcmRSZWZTaGltO1xufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuICEhKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkpO1xufVxuXG5jb25zdCBMaW5rQW5jaG9yID0gZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIGlubmVyUmVmLCAvLyBUT0RPOiBkZXByZWNhdGVcbiAgICAgIG5hdmlnYXRlLFxuICAgICAgb25DbGljayxcbiAgICAgIC4uLnJlc3RcbiAgICB9LFxuICAgIGZvcndhcmRlZFJlZlxuICApID0+IHtcbiAgICBjb25zdCB7IHRhcmdldCB9ID0gcmVzdDtcblxuICAgIGxldCBwcm9wcyA9IHtcbiAgICAgIC4uLnJlc3QsXG4gICAgICBvbkNsaWNrOiBldmVudCA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKG9uQ2xpY2spIG9uQ2xpY2soZXZlbnQpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhyb3cgZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgJiYgLy8gb25DbGljayBwcmV2ZW50ZWQgZGVmYXVsdFxuICAgICAgICAgIGV2ZW50LmJ1dHRvbiA9PT0gMCAmJiAvLyBpZ25vcmUgZXZlcnl0aGluZyBidXQgbGVmdCBjbGlja3NcbiAgICAgICAgICAoIXRhcmdldCB8fCB0YXJnZXQgPT09IFwiX3NlbGZcIikgJiYgLy8gbGV0IGJyb3dzZXIgaGFuZGxlIFwidGFyZ2V0PV9ibGFua1wiIGV0Yy5cbiAgICAgICAgICAhaXNNb2RpZmllZEV2ZW50KGV2ZW50KSAvLyBpZ25vcmUgY2xpY2tzIHdpdGggbW9kaWZpZXIga2V5c1xuICAgICAgICApIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIG5hdmlnYXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gUmVhY3QgMTUgY29tcGF0XG4gICAgaWYgKGZvcndhcmRSZWZTaGltICE9PSBmb3J3YXJkUmVmKSB7XG4gICAgICBwcm9wcy5yZWYgPSBmb3J3YXJkZWRSZWYgfHwgaW5uZXJSZWY7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3BzLnJlZiA9IGlubmVyUmVmO1xuICAgIH1cblxuICAgIHJldHVybiA8YSB7Li4ucHJvcHN9IC8+O1xuICB9XG4pO1xuXG5pZiAoX19ERVZfXykge1xuICBMaW5rQW5jaG9yLmRpc3BsYXlOYW1lID0gXCJMaW5rQW5jaG9yXCI7XG59XG5cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIHJlbmRlcmluZyBhIGhpc3RvcnktYXdhcmUgPGE+LlxuICovXG5jb25zdCBMaW5rID0gZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIGNvbXBvbmVudCA9IExpbmtBbmNob3IsXG4gICAgICByZXBsYWNlLFxuICAgICAgdG8sXG4gICAgICBpbm5lclJlZiwgLy8gVE9ETzogZGVwcmVjYXRlXG4gICAgICAuLi5yZXN0XG4gICAgfSxcbiAgICBmb3J3YXJkZWRSZWZcbiAgKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3V0ZXJDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICB7Y29udGV4dCA9PiB7XG4gICAgICAgICAgaW52YXJpYW50KGNvbnRleHQsIFwiWW91IHNob3VsZCBub3QgdXNlIDxMaW5rPiBvdXRzaWRlIGEgPFJvdXRlcj5cIik7XG5cbiAgICAgICAgICBjb25zdCB7IGhpc3RvcnkgfSA9IGNvbnRleHQ7XG5cbiAgICAgICAgICBjb25zdCBsb2NhdGlvbiA9IG5vcm1hbGl6ZVRvTG9jYXRpb24oXG4gICAgICAgICAgICByZXNvbHZlVG9Mb2NhdGlvbih0bywgY29udGV4dC5sb2NhdGlvbiksXG4gICAgICAgICAgICBjb250ZXh0LmxvY2F0aW9uXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGNvbnN0IGhyZWYgPSBsb2NhdGlvbiA/IGhpc3RvcnkuY3JlYXRlSHJlZihsb2NhdGlvbikgOiBcIlwiO1xuICAgICAgICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgICAgICAgLi4ucmVzdCxcbiAgICAgICAgICAgIGhyZWYsXG4gICAgICAgICAgICBuYXZpZ2F0ZSgpIHtcbiAgICAgICAgICAgICAgY29uc3QgbG9jYXRpb24gPSByZXNvbHZlVG9Mb2NhdGlvbih0bywgY29udGV4dC5sb2NhdGlvbik7XG4gICAgICAgICAgICAgIGNvbnN0IG1ldGhvZCA9IHJlcGxhY2UgPyBoaXN0b3J5LnJlcGxhY2UgOiBoaXN0b3J5LnB1c2g7XG5cbiAgICAgICAgICAgICAgbWV0aG9kKGxvY2F0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLy8gUmVhY3QgMTUgY29tcGF0XG4gICAgICAgICAgaWYgKGZvcndhcmRSZWZTaGltICE9PSBmb3J3YXJkUmVmKSB7XG4gICAgICAgICAgICBwcm9wcy5yZWYgPSBmb3J3YXJkZWRSZWYgfHwgaW5uZXJSZWY7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb3BzLmlubmVyUmVmID0gaW5uZXJSZWY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCBwcm9wcyk7XG4gICAgICAgIH19XG4gICAgICA8L1JvdXRlckNvbnRleHQuQ29uc3VtZXI+XG4gICAgKTtcbiAgfVxuKTtcblxuaWYgKF9fREVWX18pIHtcbiAgY29uc3QgdG9UeXBlID0gUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMub2JqZWN0LFxuICAgIFByb3BUeXBlcy5mdW5jXG4gIF0pO1xuICBjb25zdCByZWZUeXBlID0gUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMuZnVuYyxcbiAgICBQcm9wVHlwZXMuc2hhcGUoeyBjdXJyZW50OiBQcm9wVHlwZXMuYW55IH0pXG4gIF0pO1xuXG4gIExpbmsuZGlzcGxheU5hbWUgPSBcIkxpbmtcIjtcblxuICBMaW5rLnByb3BUeXBlcyA9IHtcbiAgICBpbm5lclJlZjogcmVmVHlwZSxcbiAgICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICByZXBsYWNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB0YXJnZXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdG86IHRvVHlwZS5pc1JlcXVpcmVkXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbms7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBfX1JvdXRlckNvbnRleHQgYXMgUm91dGVyQ29udGV4dCwgbWF0Y2hQYXRoIH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL0xpbmtcIjtcbmltcG9ydCB7IHJlc29sdmVUb0xvY2F0aW9uLCBub3JtYWxpemVUb0xvY2F0aW9uIH0gZnJvbSBcIi4vdXRpbHMvbG9jYXRpb25VdGlsc1wiO1xuXG4vLyBSZWFjdCAxNSBjb21wYXRcbmNvbnN0IGZvcndhcmRSZWZTaGltID0gQyA9PiBDO1xubGV0IHsgZm9yd2FyZFJlZiB9ID0gUmVhY3Q7XG5pZiAodHlwZW9mIGZvcndhcmRSZWYgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgZm9yd2FyZFJlZiA9IGZvcndhcmRSZWZTaGltO1xufVxuXG5mdW5jdGlvbiBqb2luQ2xhc3NuYW1lcyguLi5jbGFzc25hbWVzKSB7XG4gIHJldHVybiBjbGFzc25hbWVzLmZpbHRlcihpID0+IGkpLmpvaW4oXCIgXCIpO1xufVxuXG4vKipcbiAqIEEgPExpbms+IHdyYXBwZXIgdGhhdCBrbm93cyBpZiBpdCdzIFwiYWN0aXZlXCIgb3Igbm90LlxuICovXG5jb25zdCBOYXZMaW5rID0gZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIFwiYXJpYS1jdXJyZW50XCI6IGFyaWFDdXJyZW50ID0gXCJwYWdlXCIsXG4gICAgICBhY3RpdmVDbGFzc05hbWUgPSBcImFjdGl2ZVwiLFxuICAgICAgYWN0aXZlU3R5bGUsXG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVByb3AsXG4gICAgICBleGFjdCxcbiAgICAgIGlzQWN0aXZlOiBpc0FjdGl2ZVByb3AsXG4gICAgICBsb2NhdGlvbjogbG9jYXRpb25Qcm9wLFxuICAgICAgc3RyaWN0LFxuICAgICAgc3R5bGU6IHN0eWxlUHJvcCxcbiAgICAgIHRvLFxuICAgICAgaW5uZXJSZWYsIC8vIFRPRE86IGRlcHJlY2F0ZVxuICAgICAgLi4ucmVzdFxuICAgIH0sXG4gICAgZm9yd2FyZGVkUmVmXG4gICkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8Um91dGVyQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAge2NvbnRleHQgPT4ge1xuICAgICAgICAgIGludmFyaWFudChjb250ZXh0LCBcIllvdSBzaG91bGQgbm90IHVzZSA8TmF2TGluaz4gb3V0c2lkZSBhIDxSb3V0ZXI+XCIpO1xuXG4gICAgICAgICAgY29uc3QgY3VycmVudExvY2F0aW9uID0gbG9jYXRpb25Qcm9wIHx8IGNvbnRleHQubG9jYXRpb247XG4gICAgICAgICAgY29uc3QgdG9Mb2NhdGlvbiA9IG5vcm1hbGl6ZVRvTG9jYXRpb24oXG4gICAgICAgICAgICByZXNvbHZlVG9Mb2NhdGlvbih0bywgY3VycmVudExvY2F0aW9uKSxcbiAgICAgICAgICAgIGN1cnJlbnRMb2NhdGlvblxuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aCB9ID0gdG9Mb2NhdGlvbjtcbiAgICAgICAgICAvLyBSZWdleCB0YWtlbiBmcm9tOiBodHRwczovL2dpdGh1Yi5jb20vcGlsbGFyanMvcGF0aC10by1yZWdleHAvYmxvYi9tYXN0ZXIvaW5kZXguanMjTDIwMlxuICAgICAgICAgIGNvbnN0IGVzY2FwZWRQYXRoID1cbiAgICAgICAgICAgIHBhdGggJiYgcGF0aC5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG5cbiAgICAgICAgICBjb25zdCBtYXRjaCA9IGVzY2FwZWRQYXRoXG4gICAgICAgICAgICA/IG1hdGNoUGF0aChjdXJyZW50TG9jYXRpb24ucGF0aG5hbWUsIHtcbiAgICAgICAgICAgICAgICBwYXRoOiBlc2NhcGVkUGF0aCxcbiAgICAgICAgICAgICAgICBleGFjdCxcbiAgICAgICAgICAgICAgICBzdHJpY3RcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9ICEhKGlzQWN0aXZlUHJvcFxuICAgICAgICAgICAgPyBpc0FjdGl2ZVByb3AobWF0Y2gsIGN1cnJlbnRMb2NhdGlvbilcbiAgICAgICAgICAgIDogbWF0Y2gpO1xuXG4gICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gaXNBY3RpdmVcbiAgICAgICAgICAgID8gam9pbkNsYXNzbmFtZXMoY2xhc3NOYW1lUHJvcCwgYWN0aXZlQ2xhc3NOYW1lKVxuICAgICAgICAgICAgOiBjbGFzc05hbWVQcm9wO1xuICAgICAgICAgIGNvbnN0IHN0eWxlID0gaXNBY3RpdmUgPyB7IC4uLnN0eWxlUHJvcCwgLi4uYWN0aXZlU3R5bGUgfSA6IHN0eWxlUHJvcDtcblxuICAgICAgICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgICAgICAgXCJhcmlhLWN1cnJlbnRcIjogKGlzQWN0aXZlICYmIGFyaWFDdXJyZW50KSB8fCBudWxsLFxuICAgICAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICAgICAgc3R5bGUsXG4gICAgICAgICAgICB0bzogdG9Mb2NhdGlvbixcbiAgICAgICAgICAgIC4uLnJlc3RcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLy8gUmVhY3QgMTUgY29tcGF0XG4gICAgICAgICAgaWYgKGZvcndhcmRSZWZTaGltICE9PSBmb3J3YXJkUmVmKSB7XG4gICAgICAgICAgICBwcm9wcy5yZWYgPSBmb3J3YXJkZWRSZWYgfHwgaW5uZXJSZWY7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb3BzLmlubmVyUmVmID0gaW5uZXJSZWY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIDxMaW5rIHsuLi5wcm9wc30gLz47XG4gICAgICAgIH19XG4gICAgICA8L1JvdXRlckNvbnRleHQuQ29uc3VtZXI+XG4gICAgKTtcbiAgfVxuKTtcblxuaWYgKF9fREVWX18pIHtcbiAgTmF2TGluay5kaXNwbGF5TmFtZSA9IFwiTmF2TGlua1wiO1xuXG4gIGNvbnN0IGFyaWFDdXJyZW50VHlwZSA9IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJwYWdlXCIsXG4gICAgXCJzdGVwXCIsXG4gICAgXCJsb2NhdGlvblwiLFxuICAgIFwiZGF0ZVwiLFxuICAgIFwidGltZVwiLFxuICAgIFwidHJ1ZVwiXG4gIF0pO1xuXG4gIE5hdkxpbmsucHJvcFR5cGVzID0ge1xuICAgIC4uLkxpbmsucHJvcFR5cGVzLFxuICAgIFwiYXJpYS1jdXJyZW50XCI6IGFyaWFDdXJyZW50VHlwZSxcbiAgICBhY3RpdmVDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYWN0aXZlU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGV4YWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc0FjdGl2ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgbG9jYXRpb246IFByb3BUeXBlcy5vYmplY3QsXG4gICAgc3RyaWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZMaW5rO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQTs7OztBQUdBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBOzs7O0FBSkE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU9BO0FBQ0E7QUFEQTs7QUNwQkE7Ozs7O0FBR0E7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7Ozs7QUFKQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFEQTs7O0FDdkJBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUNDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFqQkE7QUFDQTtBQUNBO0FBcUJBO0FBQ0E7QUFEQTtBQUdBOzs7QUFHQTtBQXpDQTtBQUNBO0FBNENBO0FBQ0E7Ozs7Ozs7QUFNQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUVBO0FBRUE7QUFLQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQVBBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFEQTtBQUdBOzs7QUFHQTtBQS9CQTtBQVhBO0FBQ0E7QUFnREE7QUFDQTtBQUtBO0FBR0E7QUFBQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7OztBQzVIQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7OztBQUNBO0FBQUE7QUFBQTs7Ozs7OztBQU1BO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQURBO0FBR0E7OztBQUdBO0FBOUNBO0FBbEJBO0FBQ0E7QUFzRUE7QUFDQTtBQUVBO0FBU0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9