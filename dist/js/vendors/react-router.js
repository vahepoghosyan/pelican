(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors/react-router"],{

/***/ "./node_modules/react-router/esm/react-router.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-router/esm/react-router.js ***!
  \*******************************************************/
/*! exports provided: MemoryRouter, Prompt, Redirect, Route, Router, StaticRouter, Switch, __RouterContext, generatePath, matchPath, useHistory, useLocation, useParams, useRouteMatch, withRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return MemoryRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return Prompt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return Redirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return Route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return StaticRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return Switch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__RouterContext", function() { return context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generatePath", function() { return generatePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return matchPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useHistory", function() { return useHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLocation", function() { return useLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useParams", function() { return useParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRouteMatch", function() { return useRouteMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return withRouter; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var mini_create_react_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mini-create-react-context */ "./node_modules/mini-create-react-context/dist/esm/index.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! path-to-regexp */ "./node_modules/path-to-regexp/index.js");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(path_to_regexp__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_11__);











 // TODO: Replace with React.createContext once we can assume React 16+

var createNamedContext = function createNamedContext(name) {
  var context = Object(mini_create_react_context__WEBPACK_IMPORTED_MODULE_5__["default"])();
  context.displayName = name;
  return context;
};

var context = /*#__PURE__*/createNamedContext("Router");
/**
 * The public API for putting history on context.
 */

var Router = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Router, _React$Component);

  Router.computeRootMatch = function computeRootMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  function Router(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      location: props.history.location
    }; // This is a bit of a hack. We have to start listening for location
    // changes here in the constructor in case there are any <Redirect>s
    // on the initial render. If there are, they will replace/push when
    // they mount and since cDM fires in children before parents, we may
    // get a new location before the <Router> is mounted.

    _this._isMounted = false;
    _this._pendingLocation = null;

    if (!props.staticContext) {
      _this.unlisten = props.history.listen(function (location) {
        if (_this._isMounted) {
          _this.setState({
            location: location
          });
        } else {
          _this._pendingLocation = location;
        }
      });
    }

    return _this;
  }

  var _proto = Router.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;

    if (this._pendingLocation) {
      this.setState({
        location: this._pendingLocation
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unlisten) this.unlisten();
  };

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(context.Provider, {
      children: this.props.children || null,
      value: {
        history: this.props.history,
        location: this.state.location,
        match: Router.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext
      }
    });
  };

  return Router;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

if (true) {
  Router.propTypes = {
    children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
    history: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
    staticContext: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
  };

  Router.prototype.componentDidUpdate = function (prevProps) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(prevProps.history === this.props.history, "You cannot change <Router history>") : undefined;
  };
}
/**
 * The public API for a <Router> that stores location in memory.
 */


var MemoryRouter = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = Object(history__WEBPACK_IMPORTED_MODULE_3__["createMemoryHistory"])(_this.props);
    return _this;
  }

  var _proto = MemoryRouter.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return MemoryRouter;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

if (true) {
  MemoryRouter.propTypes = {
    initialEntries: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
    initialIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    getUserConfirmation: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
    keyLength: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
  };

  MemoryRouter.prototype.componentDidMount = function () {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!this.props.history, "<MemoryRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { MemoryRouter as Router }`.") : undefined;
  };
}

var Lifecycle = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Lifecycle, _React$Component);

  function Lifecycle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Lifecycle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onMount) this.props.onMount.call(this, this);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onUnmount) this.props.onUnmount.call(this, this);
  };

  _proto.render = function render() {
    return null;
  };

  return Lifecycle;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
/**
 * The public API for prompting the user before navigating away from a screen.
 */


function Prompt(_ref) {
  var message = _ref.message,
      _ref$when = _ref.when,
      when = _ref$when === void 0 ? true : _ref$when;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(context.Consumer, null, function (context) {
    !context ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You should not use <Prompt> outside a <Router>") : undefined : void 0;
    if (!when || context.staticContext) return null;
    var method = context.history.block;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Lifecycle, {
      onMount: function onMount(self) {
        self.release = method(message);
      },
      onUpdate: function onUpdate(self, prevProps) {
        if (prevProps.message !== message) {
          self.release();
          self.release = method(message);
        }
      },
      onUnmount: function onUnmount(self) {
        self.release();
      },
      message: message
    });
  });
}

if (true) {
  var messageType = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]);
  Prompt.propTypes = {
    when: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    message: messageType.isRequired
  };
}

var cache = {};
var cacheLimit = 10000;
var cacheCount = 0;

function compilePath(path) {
  if (cache[path]) return cache[path];
  var generator = path_to_regexp__WEBPACK_IMPORTED_MODULE_8___default.a.compile(path);

  if (cacheCount < cacheLimit) {
    cache[path] = generator;
    cacheCount++;
  }

  return generator;
}
/**
 * Public API for generating a URL pathname from a path and parameters.
 */


function generatePath(path, params) {
  if (path === void 0) {
    path = "/";
  }

  if (params === void 0) {
    params = {};
  }

  return path === "/" ? path : compilePath(path)(params, {
    pretty: true
  });
}
/**
 * The public API for navigating programmatically with a component.
 */


function Redirect(_ref) {
  var computedMatch = _ref.computedMatch,
      to = _ref.to,
      _ref$push = _ref.push,
      push = _ref$push === void 0 ? false : _ref$push;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(context.Consumer, null, function (context) {
    !context ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You should not use <Redirect> outside a <Router>") : undefined : void 0;
    var history = context.history,
        staticContext = context.staticContext;
    var method = push ? history.push : history.replace;
    var location = Object(history__WEBPACK_IMPORTED_MODULE_3__["createLocation"])(computedMatch ? typeof to === "string" ? generatePath(to, computedMatch.params) : Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, to, {
      pathname: generatePath(to.pathname, computedMatch.params)
    }) : to); // When rendering in a static context,
    // set the new location immediately.

    if (staticContext) {
      method(location);
      return null;
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Lifecycle, {
      onMount: function onMount() {
        method(location);
      },
      onUpdate: function onUpdate(self, prevProps) {
        var prevLocation = Object(history__WEBPACK_IMPORTED_MODULE_3__["createLocation"])(prevProps.to);

        if (!Object(history__WEBPACK_IMPORTED_MODULE_3__["locationsAreEqual"])(prevLocation, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, location, {
          key: prevLocation.key
        }))) {
          method(location);
        }
      },
      to: to
    });
  });
}

if (true) {
  Redirect.propTypes = {
    push: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    from: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    to: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object]).isRequired
  };
}

var cache$1 = {};
var cacheLimit$1 = 10000;
var cacheCount$1 = 0;

function compilePath$1(path, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
  if (pathCache[path]) return pathCache[path];
  var keys = [];
  var regexp = path_to_regexp__WEBPACK_IMPORTED_MODULE_8___default()(path, keys, options);
  var result = {
    regexp: regexp,
    keys: keys
  };

  if (cacheCount$1 < cacheLimit$1) {
    pathCache[path] = result;
    cacheCount$1++;
  }

  return result;
}
/**
 * Public API for matching a URL pathname to a path.
 */


function matchPath(pathname, options) {
  if (options === void 0) {
    options = {};
  }

  if (typeof options === "string" || Array.isArray(options)) {
    options = {
      path: options
    };
  }

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === void 0 ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === void 0 ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
  var paths = [].concat(path);
  return paths.reduce(function (matched, path) {
    if (!path && path !== "") return null;
    if (matched) return matched;

    var _compilePath = compilePath$1(path, {
      end: exact,
      strict: strict,
      sensitive: sensitive
    }),
        regexp = _compilePath.regexp,
        keys = _compilePath.keys;

    var match = regexp.exec(pathname);
    if (!match) return null;
    var url = match[0],
        values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact) return null;
    return {
      path: path,
      // the path used to match
      url: path === "/" && url === "" ? "/" : url,
      // the matched portion of the URL
      isExact: isExact,
      // whether or not we matched exactly
      params: keys.reduce(function (memo, key, index) {
        memo[key.name] = values[index];
        return memo;
      }, {})
    };
  }, null);
}

function isEmptyChildren(children) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.count(children) === 0;
}

function evalChildrenDev(children, props, path) {
  var value = children(props);
   true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(value !== undefined, "You returned `undefined` from the `children` function of " + ("<Route" + (path ? " path=\"" + path + "\"" : "") + ">, but you ") + "should have returned a React element or `null`") : undefined;
  return value || null;
}
/**
 * The public API for matching a single path and rendering.
 */


var Route = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Route, _React$Component);

  function Route() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Route.prototype;

  _proto.render = function render() {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(context.Consumer, null, function (context$1) {
      !context$1 ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You should not use <Route> outside a <Router>") : undefined : void 0;
      var location = _this.props.location || context$1.location;
      var match = _this.props.computedMatch ? _this.props.computedMatch // <Switch> already computed the match for us
      : _this.props.path ? matchPath(location.pathname, _this.props) : context$1.match;

      var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, context$1, {
        location: location,
        match: match
      });

      var _this$props = _this.props,
          children = _this$props.children,
          component = _this$props.component,
          render = _this$props.render; // Preact uses an empty array as children by
      // default, so use null if that's the case.

      if (Array.isArray(children) && children.length === 0) {
        children = null;
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(context.Provider, {
        value: props
      }, props.match ? children ? typeof children === "function" ?  true ? evalChildrenDev(children, props, _this.props.path) : undefined : children : component ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(component, props) : render ? render(props) : null : typeof children === "function" ?  true ? evalChildrenDev(children, props, _this.props.path) : undefined : null);
    });
  };

  return Route;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

if (true) {
  Route.propTypes = {
    children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node]),
    component: function component(props, propName) {
      if (props[propName] && !Object(react_is__WEBPACK_IMPORTED_MODULE_9__["isValidElementType"])(props[propName])) {
        return new Error("Invalid prop 'component' supplied to 'Route': the prop is not a valid React component");
      }
    },
    exact: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
    path: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string)]),
    render: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
    sensitive: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    strict: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
  };

  Route.prototype.componentDidMount = function () {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.component), "You should not use <Route component> and <Route children> in the same route; <Route component> will be ignored") : undefined;
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.render), "You should not use <Route render> and <Route children> in the same route; <Route render> will be ignored") : undefined;
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored") : undefined;
  };

  Route.prototype.componentDidUpdate = function (prevProps) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(this.props.location && !prevProps.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.') : undefined;
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(!this.props.location && prevProps.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.') : undefined;
  };
}

function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}

function addBasename(basename, location) {
  if (!basename) return location;
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, location, {
    pathname: addLeadingSlash(basename) + location.pathname
  });
}

function stripBasename(basename, location) {
  if (!basename) return location;
  var base = addLeadingSlash(basename);
  if (location.pathname.indexOf(base) !== 0) return location;
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, location, {
    pathname: location.pathname.substr(base.length)
  });
}

function createURL(location) {
  return typeof location === "string" ? location : Object(history__WEBPACK_IMPORTED_MODULE_3__["createPath"])(location);
}

function staticHandler(methodName) {
  return function () {
     true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You cannot %s with <StaticRouter>", methodName) : undefined;
  };
}

function noop() {}
/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */


var StaticRouter = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(StaticRouter, _React$Component);

  function StaticRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handlePush = function (location) {
      return _this.navigateTo(location, "PUSH");
    };

    _this.handleReplace = function (location) {
      return _this.navigateTo(location, "REPLACE");
    };

    _this.handleListen = function () {
      return noop;
    };

    _this.handleBlock = function () {
      return noop;
    };

    return _this;
  }

  var _proto = StaticRouter.prototype;

  _proto.navigateTo = function navigateTo(location, action) {
    var _this$props = this.props,
        _this$props$basename = _this$props.basename,
        basename = _this$props$basename === void 0 ? "" : _this$props$basename,
        _this$props$context = _this$props.context,
        context = _this$props$context === void 0 ? {} : _this$props$context;
    context.action = action;
    context.location = addBasename(basename, Object(history__WEBPACK_IMPORTED_MODULE_3__["createLocation"])(location));
    context.url = createURL(context.location);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        _this$props2$basename = _this$props2.basename,
        basename = _this$props2$basename === void 0 ? "" : _this$props2$basename,
        _this$props2$context = _this$props2.context,
        context = _this$props2$context === void 0 ? {} : _this$props2$context,
        _this$props2$location = _this$props2.location,
        location = _this$props2$location === void 0 ? "/" : _this$props2$location,
        rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_10__["default"])(_this$props2, ["basename", "context", "location"]);

    var history = {
      createHref: function createHref(path) {
        return addLeadingSlash(basename + createURL(path));
      },
      action: "POP",
      location: stripBasename(basename, Object(history__WEBPACK_IMPORTED_MODULE_3__["createLocation"])(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler("go"),
      goBack: staticHandler("goBack"),
      goForward: staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Router, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, rest, {
      history: history,
      staticContext: context
    }));
  };

  return StaticRouter;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

if (true) {
  StaticRouter.propTypes = {
    basename: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    context: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
    location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object])
  };

  StaticRouter.prototype.componentDidMount = function () {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!this.props.history, "<StaticRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { StaticRouter as Router }`.") : undefined;
  };
}
/**
 * The public API for rendering the first <Route> that matches.
 */


var Switch = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Switch, _React$Component);

  function Switch() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Switch.prototype;

  _proto.render = function render() {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(context.Consumer, null, function (context) {
      !context ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You should not use <Switch> outside a <Router>") : undefined : void 0;
      var location = _this.props.location || context.location;
      var element, match; // We use React.Children.forEach instead of React.Children.toArray().find()
      // here because toArray adds keys to all child elements and we do not want
      // to trigger an unmount/remount for two <Route>s that render the same
      // component at different URLs.

      react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.forEach(_this.props.children, function (child) {
        if (match == null && react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(child)) {
          element = child;
          var path = child.props.path || child.props.from;
          match = path ? matchPath(location.pathname, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, child.props, {
            path: path
          })) : context.match;
        }
      });
      return match ? react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(element, {
        location: location,
        computedMatch: match
      }) : null;
    });
  };

  return Switch;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

if (true) {
  Switch.propTypes = {
    children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
    location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
  };

  Switch.prototype.componentDidUpdate = function (prevProps) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(this.props.location && !prevProps.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.') : undefined;
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(!this.props.location && prevProps.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.') : undefined;
  };
}
/**
 * A public higher-order component to access the imperative API
 */


function withRouter(Component) {
  var displayName = "withRouter(" + (Component.displayName || Component.name) + ")";

  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_10__["default"])(props, ["wrappedComponentRef"]);

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(context.Consumer, null, function (context) {
      !context ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You should not use <" + displayName + " /> outside a <Router>") : undefined : void 0;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, remainingProps, context, {
        ref: wrappedComponentRef
      }));
    });
  };

  C.displayName = displayName;
  C.WrappedComponent = Component;

  if (true) {
    C.propTypes = {
      wrappedComponentRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object])
    };
  }

  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_11___default()(C, Component);
}

var useContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext;

function useHistory() {
  if (true) {
    !(typeof useContext === "function") ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You must use React >= 16.8 in order to use useHistory()") : undefined : void 0;
  }

  return useContext(context).history;
}

function useLocation() {
  if (true) {
    !(typeof useContext === "function") ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You must use React >= 16.8 in order to use useLocation()") : undefined : void 0;
  }

  return useContext(context).location;
}

function useParams() {
  if (true) {
    !(typeof useContext === "function") ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You must use React >= 16.8 in order to use useParams()") : undefined : void 0;
  }

  var match = useContext(context).match;
  return match ? match.params : {};
}

function useRouteMatch(path) {
  if (true) {
    !(typeof useContext === "function") ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You must use React >= 16.8 in order to use useRouteMatch()") : undefined : void 0;
  }

  return path ? matchPath(useLocation().pathname, path) : useContext(context).match;
}

if (true) {
  if (typeof window !== "undefined") {
    var global = window;
    var key = "__react_router_build__";
    var buildNames = {
      cjs: "CommonJS",
      esm: "ES modules",
      umd: "UMD"
    };

    if (global[key] && global[key] !== "esm") {
      var initialBuildName = buildNames[global[key]];
      var secondaryBuildName = buildNames["esm"]; // TODO: Add link to article that explains in detail how to avoid
      // loading 2 different builds.

      throw new Error("You are loading the " + secondaryBuildName + " build of React Router " + ("on a page that is already running the " + initialBuildName + " ") + "build, so things won't work right.");
    }

    global[key] = "esm";
  }
}



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdmVuZG9ycy9yZWFjdC1yb3V0ZXIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbW9kdWxlcy9Sb3V0ZXJDb250ZXh0LmpzIiwid2VicGFjazovLy8uLi9tb2R1bGVzL1JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi4vbW9kdWxlcy9NZW1vcnlSb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL21vZHVsZXMvTGlmZWN5Y2xlLmpzIiwid2VicGFjazovLy8uLi9tb2R1bGVzL1Byb21wdC5qcyIsIndlYnBhY2s6Ly8vLi4vbW9kdWxlcy9nZW5lcmF0ZVBhdGguanMiLCJ3ZWJwYWNrOi8vLy4uL21vZHVsZXMvUmVkaXJlY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL21vZHVsZXMvbWF0Y2hQYXRoLmpzIiwid2VicGFjazovLy8uLi9tb2R1bGVzL1JvdXRlLmpzIiwid2VicGFjazovLy8uLi9tb2R1bGVzL1N0YXRpY1JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi4vbW9kdWxlcy9Td2l0Y2guanMiLCJ3ZWJwYWNrOi8vLy4uL21vZHVsZXMvd2l0aFJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi4vbW9kdWxlcy9ob29rcy5qcyIsIndlYnBhY2s6Ly8vLi4vbW9kdWxlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUT0RPOiBSZXBsYWNlIHdpdGggUmVhY3QuY3JlYXRlQ29udGV4dCBvbmNlIHdlIGNhbiBhc3N1bWUgUmVhY3QgMTYrXG5pbXBvcnQgY3JlYXRlQ29udGV4dCBmcm9tIFwibWluaS1jcmVhdGUtcmVhY3QtY29udGV4dFwiO1xuXG5jb25zdCBjcmVhdGVOYW1lZENvbnRleHQgPSBuYW1lID0+IHtcbiAgY29uc3QgY29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcbiAgY29udGV4dC5kaXNwbGF5TmFtZSA9IG5hbWU7XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59O1xuXG5jb25zdCBjb250ZXh0ID0gLyojX19QVVJFX18qLyBjcmVhdGVOYW1lZENvbnRleHQoXCJSb3V0ZXJcIik7XG5leHBvcnQgZGVmYXVsdCBjb250ZXh0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSBcInRpbnktd2FybmluZ1wiO1xuXG5pbXBvcnQgUm91dGVyQ29udGV4dCBmcm9tIFwiLi9Sb3V0ZXJDb250ZXh0XCI7XG5cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIHB1dHRpbmcgaGlzdG9yeSBvbiBjb250ZXh0LlxuICovXG5jbGFzcyBSb3V0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgY29tcHV0ZVJvb3RNYXRjaChwYXRobmFtZSkge1xuICAgIHJldHVybiB7IHBhdGg6IFwiL1wiLCB1cmw6IFwiL1wiLCBwYXJhbXM6IHt9LCBpc0V4YWN0OiBwYXRobmFtZSA9PT0gXCIvXCIgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvY2F0aW9uOiBwcm9wcy5oaXN0b3J5LmxvY2F0aW9uXG4gICAgfTtcblxuICAgIC8vIFRoaXMgaXMgYSBiaXQgb2YgYSBoYWNrLiBXZSBoYXZlIHRvIHN0YXJ0IGxpc3RlbmluZyBmb3IgbG9jYXRpb25cbiAgICAvLyBjaGFuZ2VzIGhlcmUgaW4gdGhlIGNvbnN0cnVjdG9yIGluIGNhc2UgdGhlcmUgYXJlIGFueSA8UmVkaXJlY3Q+c1xuICAgIC8vIG9uIHRoZSBpbml0aWFsIHJlbmRlci4gSWYgdGhlcmUgYXJlLCB0aGV5IHdpbGwgcmVwbGFjZS9wdXNoIHdoZW5cbiAgICAvLyB0aGV5IG1vdW50IGFuZCBzaW5jZSBjRE0gZmlyZXMgaW4gY2hpbGRyZW4gYmVmb3JlIHBhcmVudHMsIHdlIG1heVxuICAgIC8vIGdldCBhIG5ldyBsb2NhdGlvbiBiZWZvcmUgdGhlIDxSb3V0ZXI+IGlzIG1vdW50ZWQuXG4gICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG4gICAgdGhpcy5fcGVuZGluZ0xvY2F0aW9uID0gbnVsbDtcblxuICAgIGlmICghcHJvcHMuc3RhdGljQ29udGV4dCkge1xuICAgICAgdGhpcy51bmxpc3RlbiA9IHByb3BzLmhpc3RvcnkubGlzdGVuKGxvY2F0aW9uID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2lzTW91bnRlZCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2NhdGlvbiB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9wZW5kaW5nTG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLl9wZW5kaW5nTG9jYXRpb24pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2NhdGlvbjogdGhpcy5fcGVuZGluZ0xvY2F0aW9uIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLnVubGlzdGVuKSB0aGlzLnVubGlzdGVuKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3V0ZXJDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgIGNoaWxkcmVuPXt0aGlzLnByb3BzLmNoaWxkcmVuIHx8IG51bGx9XG4gICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgaGlzdG9yeTogdGhpcy5wcm9wcy5oaXN0b3J5LFxuICAgICAgICAgIGxvY2F0aW9uOiB0aGlzLnN0YXRlLmxvY2F0aW9uLFxuICAgICAgICAgIG1hdGNoOiBSb3V0ZXIuY29tcHV0ZVJvb3RNYXRjaCh0aGlzLnN0YXRlLmxvY2F0aW9uLnBhdGhuYW1lKSxcbiAgICAgICAgICBzdGF0aWNDb250ZXh0OiB0aGlzLnByb3BzLnN0YXRpY0NvbnRleHRcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5pZiAoX19ERVZfXykge1xuICBSb3V0ZXIucHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBoaXN0b3J5OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgc3RhdGljQ29udGV4dDogUHJvcFR5cGVzLm9iamVjdFxuICB9O1xuXG4gIFJvdXRlci5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24ocHJldlByb3BzKSB7XG4gICAgd2FybmluZyhcbiAgICAgIHByZXZQcm9wcy5oaXN0b3J5ID09PSB0aGlzLnByb3BzLmhpc3RvcnksXG4gICAgICBcIllvdSBjYW5ub3QgY2hhbmdlIDxSb3V0ZXIgaGlzdG9yeT5cIlxuICAgICk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IGNyZWF0ZU1lbW9yeUhpc3RvcnkgYXMgY3JlYXRlSGlzdG9yeSB9IGZyb20gXCJoaXN0b3J5XCI7XG5pbXBvcnQgd2FybmluZyBmcm9tIFwidGlueS13YXJuaW5nXCI7XG5cbmltcG9ydCBSb3V0ZXIgZnJvbSBcIi4vUm91dGVyXCI7XG5cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIGEgPFJvdXRlcj4gdGhhdCBzdG9yZXMgbG9jYXRpb24gaW4gbWVtb3J5LlxuICovXG5jbGFzcyBNZW1vcnlSb3V0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBoaXN0b3J5ID0gY3JlYXRlSGlzdG9yeSh0aGlzLnByb3BzKTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxSb3V0ZXIgaGlzdG9yeT17dGhpcy5oaXN0b3J5fSBjaGlsZHJlbj17dGhpcy5wcm9wcy5jaGlsZHJlbn0gLz47XG4gIH1cbn1cblxuaWYgKF9fREVWX18pIHtcbiAgTWVtb3J5Um91dGVyLnByb3BUeXBlcyA9IHtcbiAgICBpbml0aWFsRW50cmllczogUHJvcFR5cGVzLmFycmF5LFxuICAgIGluaXRpYWxJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBnZXRVc2VyQ29uZmlybWF0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBrZXlMZW5ndGg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlXG4gIH07XG5cbiAgTWVtb3J5Um91dGVyLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uKCkge1xuICAgIHdhcm5pbmcoXG4gICAgICAhdGhpcy5wcm9wcy5oaXN0b3J5LFxuICAgICAgXCI8TWVtb3J5Um91dGVyPiBpZ25vcmVzIHRoZSBoaXN0b3J5IHByb3AuIFRvIHVzZSBhIGN1c3RvbSBoaXN0b3J5LCBcIiArXG4gICAgICAgIFwidXNlIGBpbXBvcnQgeyBSb3V0ZXIgfWAgaW5zdGVhZCBvZiBgaW1wb3J0IHsgTWVtb3J5Um91dGVyIGFzIFJvdXRlciB9YC5cIlxuICAgICk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbW9yeVJvdXRlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgTGlmZWN5Y2xlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25Nb3VudCkgdGhpcy5wcm9wcy5vbk1vdW50LmNhbGwodGhpcywgdGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25VcGRhdGUpIHRoaXMucHJvcHMub25VcGRhdGUuY2FsbCh0aGlzLCB0aGlzLCBwcmV2UHJvcHMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25Vbm1vdW50KSB0aGlzLnByb3BzLm9uVW5tb3VudC5jYWxsKHRoaXMsIHRoaXMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpZmVjeWNsZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSBcInRpbnktaW52YXJpYW50XCI7XG5cbmltcG9ydCBMaWZlY3ljbGUgZnJvbSBcIi4vTGlmZWN5Y2xlXCI7XG5pbXBvcnQgUm91dGVyQ29udGV4dCBmcm9tIFwiLi9Sb3V0ZXJDb250ZXh0XCI7XG5cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIHByb21wdGluZyB0aGUgdXNlciBiZWZvcmUgbmF2aWdhdGluZyBhd2F5IGZyb20gYSBzY3JlZW4uXG4gKi9cbmZ1bmN0aW9uIFByb21wdCh7IG1lc3NhZ2UsIHdoZW4gPSB0cnVlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8Um91dGVyQ29udGV4dC5Db25zdW1lcj5cbiAgICAgIHtjb250ZXh0ID0+IHtcbiAgICAgICAgaW52YXJpYW50KGNvbnRleHQsIFwiWW91IHNob3VsZCBub3QgdXNlIDxQcm9tcHQ+IG91dHNpZGUgYSA8Um91dGVyPlwiKTtcblxuICAgICAgICBpZiAoIXdoZW4gfHwgY29udGV4dC5zdGF0aWNDb250ZXh0KSByZXR1cm4gbnVsbDtcblxuICAgICAgICBjb25zdCBtZXRob2QgPSBjb250ZXh0Lmhpc3RvcnkuYmxvY2s7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TGlmZWN5Y2xlXG4gICAgICAgICAgICBvbk1vdW50PXtzZWxmID0+IHtcbiAgICAgICAgICAgICAgc2VsZi5yZWxlYXNlID0gbWV0aG9kKG1lc3NhZ2UpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uVXBkYXRlPXsoc2VsZiwgcHJldlByb3BzKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChwcmV2UHJvcHMubWVzc2FnZSAhPT0gbWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIHNlbGYucmVsZWFzZSgpO1xuICAgICAgICAgICAgICAgIHNlbGYucmVsZWFzZSA9IG1ldGhvZChtZXNzYWdlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uVW5tb3VudD17c2VsZiA9PiB7XG4gICAgICAgICAgICAgIHNlbGYucmVsZWFzZSgpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG1lc3NhZ2U9e21lc3NhZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH19XG4gICAgPC9Sb3V0ZXJDb250ZXh0LkNvbnN1bWVyPlxuICApO1xufVxuXG5pZiAoX19ERVZfXykge1xuICBjb25zdCBtZXNzYWdlVHlwZSA9IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuc3RyaW5nXSk7XG5cbiAgUHJvbXB0LnByb3BUeXBlcyA9IHtcbiAgICB3aGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBtZXNzYWdlOiBtZXNzYWdlVHlwZS5pc1JlcXVpcmVkXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb21wdDtcbiIsImltcG9ydCBwYXRoVG9SZWdleHAgZnJvbSBcInBhdGgtdG8tcmVnZXhwXCI7XG5cbmNvbnN0IGNhY2hlID0ge307XG5jb25zdCBjYWNoZUxpbWl0ID0gMTAwMDA7XG5sZXQgY2FjaGVDb3VudCA9IDA7XG5cbmZ1bmN0aW9uIGNvbXBpbGVQYXRoKHBhdGgpIHtcbiAgaWYgKGNhY2hlW3BhdGhdKSByZXR1cm4gY2FjaGVbcGF0aF07XG5cbiAgY29uc3QgZ2VuZXJhdG9yID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUocGF0aCk7XG5cbiAgaWYgKGNhY2hlQ291bnQgPCBjYWNoZUxpbWl0KSB7XG4gICAgY2FjaGVbcGF0aF0gPSBnZW5lcmF0b3I7XG4gICAgY2FjaGVDb3VudCsrO1xuICB9XG5cbiAgcmV0dXJuIGdlbmVyYXRvcjtcbn1cblxuLyoqXG4gKiBQdWJsaWMgQVBJIGZvciBnZW5lcmF0aW5nIGEgVVJMIHBhdGhuYW1lIGZyb20gYSBwYXRoIGFuZCBwYXJhbWV0ZXJzLlxuICovXG5mdW5jdGlvbiBnZW5lcmF0ZVBhdGgocGF0aCA9IFwiL1wiLCBwYXJhbXMgPSB7fSkge1xuICByZXR1cm4gcGF0aCA9PT0gXCIvXCIgPyBwYXRoIDogY29tcGlsZVBhdGgocGF0aCkocGFyYW1zLCB7IHByZXR0eTogdHJ1ZSB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVQYXRoO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgY3JlYXRlTG9jYXRpb24sIGxvY2F0aW9uc0FyZUVxdWFsIH0gZnJvbSBcImhpc3RvcnlcIjtcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSBcInRpbnktaW52YXJpYW50XCI7XG5cbmltcG9ydCBMaWZlY3ljbGUgZnJvbSBcIi4vTGlmZWN5Y2xlXCI7XG5pbXBvcnQgUm91dGVyQ29udGV4dCBmcm9tIFwiLi9Sb3V0ZXJDb250ZXh0XCI7XG5pbXBvcnQgZ2VuZXJhdGVQYXRoIGZyb20gXCIuL2dlbmVyYXRlUGF0aFwiO1xuXG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciBuYXZpZ2F0aW5nIHByb2dyYW1tYXRpY2FsbHkgd2l0aCBhIGNvbXBvbmVudC5cbiAqL1xuZnVuY3Rpb24gUmVkaXJlY3QoeyBjb21wdXRlZE1hdGNoLCB0bywgcHVzaCA9IGZhbHNlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8Um91dGVyQ29udGV4dC5Db25zdW1lcj5cbiAgICAgIHtjb250ZXh0ID0+IHtcbiAgICAgICAgaW52YXJpYW50KGNvbnRleHQsIFwiWW91IHNob3VsZCBub3QgdXNlIDxSZWRpcmVjdD4gb3V0c2lkZSBhIDxSb3V0ZXI+XCIpO1xuXG4gICAgICAgIGNvbnN0IHsgaGlzdG9yeSwgc3RhdGljQ29udGV4dCB9ID0gY29udGV4dDtcblxuICAgICAgICBjb25zdCBtZXRob2QgPSBwdXNoID8gaGlzdG9yeS5wdXNoIDogaGlzdG9yeS5yZXBsYWNlO1xuICAgICAgICBjb25zdCBsb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKFxuICAgICAgICAgIGNvbXB1dGVkTWF0Y2hcbiAgICAgICAgICAgID8gdHlwZW9mIHRvID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICAgID8gZ2VuZXJhdGVQYXRoKHRvLCBjb21wdXRlZE1hdGNoLnBhcmFtcylcbiAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAuLi50byxcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBnZW5lcmF0ZVBhdGgodG8ucGF0aG5hbWUsIGNvbXB1dGVkTWF0Y2gucGFyYW1zKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogdG9cbiAgICAgICAgKTtcblxuICAgICAgICAvLyBXaGVuIHJlbmRlcmluZyBpbiBhIHN0YXRpYyBjb250ZXh0LFxuICAgICAgICAvLyBzZXQgdGhlIG5ldyBsb2NhdGlvbiBpbW1lZGlhdGVseS5cbiAgICAgICAgaWYgKHN0YXRpY0NvbnRleHQpIHtcbiAgICAgICAgICBtZXRob2QobG9jYXRpb24pO1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TGlmZWN5Y2xlXG4gICAgICAgICAgICBvbk1vdW50PXsoKSA9PiB7XG4gICAgICAgICAgICAgIG1ldGhvZChsb2NhdGlvbik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25VcGRhdGU9eyhzZWxmLCBwcmV2UHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcHJldkxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24ocHJldlByb3BzLnRvKTtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICFsb2NhdGlvbnNBcmVFcXVhbChwcmV2TG9jYXRpb24sIHtcbiAgICAgICAgICAgICAgICAgIC4uLmxvY2F0aW9uLFxuICAgICAgICAgICAgICAgICAga2V5OiBwcmV2TG9jYXRpb24ua2V5XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kKGxvY2F0aW9uKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHRvPXt0b31cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgfX1cbiAgICA8L1JvdXRlckNvbnRleHQuQ29uc3VtZXI+XG4gICk7XG59XG5cbmlmIChfX0RFVl9fKSB7XG4gIFJlZGlyZWN0LnByb3BUeXBlcyA9IHtcbiAgICBwdXNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBmcm9tOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRvOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWRpcmVjdDtcbiIsImltcG9ydCBwYXRoVG9SZWdleHAgZnJvbSBcInBhdGgtdG8tcmVnZXhwXCI7XG5cbmNvbnN0IGNhY2hlID0ge307XG5jb25zdCBjYWNoZUxpbWl0ID0gMTAwMDA7XG5sZXQgY2FjaGVDb3VudCA9IDA7XG5cbmZ1bmN0aW9uIGNvbXBpbGVQYXRoKHBhdGgsIG9wdGlvbnMpIHtcbiAgY29uc3QgY2FjaGVLZXkgPSBgJHtvcHRpb25zLmVuZH0ke29wdGlvbnMuc3RyaWN0fSR7b3B0aW9ucy5zZW5zaXRpdmV9YDtcbiAgY29uc3QgcGF0aENhY2hlID0gY2FjaGVbY2FjaGVLZXldIHx8IChjYWNoZVtjYWNoZUtleV0gPSB7fSk7XG5cbiAgaWYgKHBhdGhDYWNoZVtwYXRoXSkgcmV0dXJuIHBhdGhDYWNoZVtwYXRoXTtcblxuICBjb25zdCBrZXlzID0gW107XG4gIGNvbnN0IHJlZ2V4cCA9IHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgY29uc3QgcmVzdWx0ID0geyByZWdleHAsIGtleXMgfTtcblxuICBpZiAoY2FjaGVDb3VudCA8IGNhY2hlTGltaXQpIHtcbiAgICBwYXRoQ2FjaGVbcGF0aF0gPSByZXN1bHQ7XG4gICAgY2FjaGVDb3VudCsrO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBQdWJsaWMgQVBJIGZvciBtYXRjaGluZyBhIFVSTCBwYXRobmFtZSB0byBhIHBhdGguXG4gKi9cbmZ1bmN0aW9uIG1hdGNoUGF0aChwYXRobmFtZSwgb3B0aW9ucyA9IHt9KSB7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIiB8fCBBcnJheS5pc0FycmF5KG9wdGlvbnMpKSB7XG4gICAgb3B0aW9ucyA9IHsgcGF0aDogb3B0aW9ucyB9O1xuICB9XG5cbiAgY29uc3QgeyBwYXRoLCBleGFjdCA9IGZhbHNlLCBzdHJpY3QgPSBmYWxzZSwgc2Vuc2l0aXZlID0gZmFsc2UgfSA9IG9wdGlvbnM7XG5cbiAgY29uc3QgcGF0aHMgPSBbXS5jb25jYXQocGF0aCk7XG5cbiAgcmV0dXJuIHBhdGhzLnJlZHVjZSgobWF0Y2hlZCwgcGF0aCkgPT4ge1xuICAgIGlmICghcGF0aCAmJiBwYXRoICE9PSBcIlwiKSByZXR1cm4gbnVsbDtcbiAgICBpZiAobWF0Y2hlZCkgcmV0dXJuIG1hdGNoZWQ7XG5cbiAgICBjb25zdCB7IHJlZ2V4cCwga2V5cyB9ID0gY29tcGlsZVBhdGgocGF0aCwge1xuICAgICAgZW5kOiBleGFjdCxcbiAgICAgIHN0cmljdCxcbiAgICAgIHNlbnNpdGl2ZVxuICAgIH0pO1xuICAgIGNvbnN0IG1hdGNoID0gcmVnZXhwLmV4ZWMocGF0aG5hbWUpO1xuXG4gICAgaWYgKCFtYXRjaCkgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCBbdXJsLCAuLi52YWx1ZXNdID0gbWF0Y2g7XG4gICAgY29uc3QgaXNFeGFjdCA9IHBhdGhuYW1lID09PSB1cmw7XG5cbiAgICBpZiAoZXhhY3QgJiYgIWlzRXhhY3QpIHJldHVybiBudWxsO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBhdGgsIC8vIHRoZSBwYXRoIHVzZWQgdG8gbWF0Y2hcbiAgICAgIHVybDogcGF0aCA9PT0gXCIvXCIgJiYgdXJsID09PSBcIlwiID8gXCIvXCIgOiB1cmwsIC8vIHRoZSBtYXRjaGVkIHBvcnRpb24gb2YgdGhlIFVSTFxuICAgICAgaXNFeGFjdCwgLy8gd2hldGhlciBvciBub3Qgd2UgbWF0Y2hlZCBleGFjdGx5XG4gICAgICBwYXJhbXM6IGtleXMucmVkdWNlKChtZW1vLCBrZXksIGluZGV4KSA9PiB7XG4gICAgICAgIG1lbW9ba2V5Lm5hbWVdID0gdmFsdWVzW2luZGV4XTtcbiAgICAgICAgcmV0dXJuIG1lbW87XG4gICAgICB9LCB7fSlcbiAgICB9O1xuICB9LCBudWxsKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWF0Y2hQYXRoO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gZnJvbSBcInJlYWN0LWlzXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gXCJ0aW55LWludmFyaWFudFwiO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSBcInRpbnktd2FybmluZ1wiO1xuXG5pbXBvcnQgUm91dGVyQ29udGV4dCBmcm9tIFwiLi9Sb3V0ZXJDb250ZXh0XCI7XG5pbXBvcnQgbWF0Y2hQYXRoIGZyb20gXCIuL21hdGNoUGF0aFwiO1xuXG5mdW5jdGlvbiBpc0VtcHR5Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLmNvdW50KGNoaWxkcmVuKSA9PT0gMDtcbn1cblxuZnVuY3Rpb24gZXZhbENoaWxkcmVuRGV2KGNoaWxkcmVuLCBwcm9wcywgcGF0aCkge1xuICBjb25zdCB2YWx1ZSA9IGNoaWxkcmVuKHByb3BzKTtcblxuICB3YXJuaW5nKFxuICAgIHZhbHVlICE9PSB1bmRlZmluZWQsXG4gICAgXCJZb3UgcmV0dXJuZWQgYHVuZGVmaW5lZGAgZnJvbSB0aGUgYGNoaWxkcmVuYCBmdW5jdGlvbiBvZiBcIiArXG4gICAgICBgPFJvdXRlJHtwYXRoID8gYCBwYXRoPVwiJHtwYXRofVwiYCA6IFwiXCJ9PiwgYnV0IHlvdSBgICtcbiAgICAgIFwic2hvdWxkIGhhdmUgcmV0dXJuZWQgYSBSZWFjdCBlbGVtZW50IG9yIGBudWxsYFwiXG4gICk7XG5cbiAgcmV0dXJuIHZhbHVlIHx8IG51bGw7XG59XG5cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIG1hdGNoaW5nIGEgc2luZ2xlIHBhdGggYW5kIHJlbmRlcmluZy5cbiAqL1xuY2xhc3MgUm91dGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3V0ZXJDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICB7Y29udGV4dCA9PiB7XG4gICAgICAgICAgaW52YXJpYW50KGNvbnRleHQsIFwiWW91IHNob3VsZCBub3QgdXNlIDxSb3V0ZT4gb3V0c2lkZSBhIDxSb3V0ZXI+XCIpO1xuXG4gICAgICAgICAgY29uc3QgbG9jYXRpb24gPSB0aGlzLnByb3BzLmxvY2F0aW9uIHx8IGNvbnRleHQubG9jYXRpb247XG4gICAgICAgICAgY29uc3QgbWF0Y2ggPSB0aGlzLnByb3BzLmNvbXB1dGVkTWF0Y2hcbiAgICAgICAgICAgID8gdGhpcy5wcm9wcy5jb21wdXRlZE1hdGNoIC8vIDxTd2l0Y2g+IGFscmVhZHkgY29tcHV0ZWQgdGhlIG1hdGNoIGZvciB1c1xuICAgICAgICAgICAgOiB0aGlzLnByb3BzLnBhdGhcbiAgICAgICAgICAgID8gbWF0Y2hQYXRoKGxvY2F0aW9uLnBhdGhuYW1lLCB0aGlzLnByb3BzKVxuICAgICAgICAgICAgOiBjb250ZXh0Lm1hdGNoO1xuXG4gICAgICAgICAgY29uc3QgcHJvcHMgPSB7IC4uLmNvbnRleHQsIGxvY2F0aW9uLCBtYXRjaCB9O1xuXG4gICAgICAgICAgbGV0IHsgY2hpbGRyZW4sIGNvbXBvbmVudCwgcmVuZGVyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgICAgLy8gUHJlYWN0IHVzZXMgYW4gZW1wdHkgYXJyYXkgYXMgY2hpbGRyZW4gYnlcbiAgICAgICAgICAvLyBkZWZhdWx0LCBzbyB1c2UgbnVsbCBpZiB0aGF0J3MgdGhlIGNhc2UuXG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pICYmIGNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY2hpbGRyZW4gPSBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Um91dGVyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17cHJvcHN9PlxuICAgICAgICAgICAgICB7cHJvcHMubWF0Y2hcbiAgICAgICAgICAgICAgICA/IGNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICA/IHR5cGVvZiBjaGlsZHJlbiA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICAgICAgICAgID8gX19ERVZfX1xuICAgICAgICAgICAgICAgICAgICAgID8gZXZhbENoaWxkcmVuRGV2KGNoaWxkcmVuLCBwcm9wcywgdGhpcy5wcm9wcy5wYXRoKVxuICAgICAgICAgICAgICAgICAgICAgIDogY2hpbGRyZW4ocHJvcHMpXG4gICAgICAgICAgICAgICAgICAgIDogY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgIDogY29tcG9uZW50XG4gICAgICAgICAgICAgICAgICA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCBwcm9wcylcbiAgICAgICAgICAgICAgICAgIDogcmVuZGVyXG4gICAgICAgICAgICAgICAgICA/IHJlbmRlcihwcm9wcylcbiAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgIDogdHlwZW9mIGNoaWxkcmVuID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgICAgICA/IF9fREVWX19cbiAgICAgICAgICAgICAgICAgID8gZXZhbENoaWxkcmVuRGV2KGNoaWxkcmVuLCBwcm9wcywgdGhpcy5wcm9wcy5wYXRoKVxuICAgICAgICAgICAgICAgICAgOiBjaGlsZHJlbihwcm9wcylcbiAgICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgICA8L1JvdXRlckNvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgICAgKTtcbiAgICAgICAgfX1cbiAgICAgIDwvUm91dGVyQ29udGV4dC5Db25zdW1lcj5cbiAgICApO1xuICB9XG59XG5cbmlmIChfX0RFVl9fKSB7XG4gIFJvdXRlLnByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5ub2RlXSksXG4gICAgY29tcG9uZW50OiAocHJvcHMsIHByb3BOYW1lKSA9PiB7XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdICYmICFpc1ZhbGlkRWxlbWVudFR5cGUocHJvcHNbcHJvcE5hbWVdKSkge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIHByb3AgJ2NvbXBvbmVudCcgc3VwcGxpZWQgdG8gJ1JvdXRlJzogdGhlIHByb3AgaXMgbm90IGEgdmFsaWQgUmVhY3QgY29tcG9uZW50YFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0sXG4gICAgZXhhY3Q6IFByb3BUeXBlcy5ib29sLFxuICAgIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHBhdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpXG4gICAgXSksXG4gICAgcmVuZGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBzZW5zaXRpdmU6IFByb3BUeXBlcy5ib29sLFxuICAgIHN0cmljdDogUHJvcFR5cGVzLmJvb2xcbiAgfTtcblxuICBSb3V0ZS5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbigpIHtcbiAgICB3YXJuaW5nKFxuICAgICAgIShcbiAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlbiAmJlxuICAgICAgICAhaXNFbXB0eUNoaWxkcmVuKHRoaXMucHJvcHMuY2hpbGRyZW4pICYmXG4gICAgICAgIHRoaXMucHJvcHMuY29tcG9uZW50XG4gICAgICApLFxuICAgICAgXCJZb3Ugc2hvdWxkIG5vdCB1c2UgPFJvdXRlIGNvbXBvbmVudD4gYW5kIDxSb3V0ZSBjaGlsZHJlbj4gaW4gdGhlIHNhbWUgcm91dGU7IDxSb3V0ZSBjb21wb25lbnQ+IHdpbGwgYmUgaWdub3JlZFwiXG4gICAgKTtcblxuICAgIHdhcm5pbmcoXG4gICAgICAhKFxuICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuICYmXG4gICAgICAgICFpc0VtcHR5Q2hpbGRyZW4odGhpcy5wcm9wcy5jaGlsZHJlbikgJiZcbiAgICAgICAgdGhpcy5wcm9wcy5yZW5kZXJcbiAgICAgICksXG4gICAgICBcIllvdSBzaG91bGQgbm90IHVzZSA8Um91dGUgcmVuZGVyPiBhbmQgPFJvdXRlIGNoaWxkcmVuPiBpbiB0aGUgc2FtZSByb3V0ZTsgPFJvdXRlIHJlbmRlcj4gd2lsbCBiZSBpZ25vcmVkXCJcbiAgICApO1xuXG4gICAgd2FybmluZyhcbiAgICAgICEodGhpcy5wcm9wcy5jb21wb25lbnQgJiYgdGhpcy5wcm9wcy5yZW5kZXIpLFxuICAgICAgXCJZb3Ugc2hvdWxkIG5vdCB1c2UgPFJvdXRlIGNvbXBvbmVudD4gYW5kIDxSb3V0ZSByZW5kZXI+IGluIHRoZSBzYW1lIHJvdXRlOyA8Um91dGUgcmVuZGVyPiB3aWxsIGJlIGlnbm9yZWRcIlxuICAgICk7XG4gIH07XG5cbiAgUm91dGUucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uKHByZXZQcm9wcykge1xuICAgIHdhcm5pbmcoXG4gICAgICAhKHRoaXMucHJvcHMubG9jYXRpb24gJiYgIXByZXZQcm9wcy5sb2NhdGlvbiksXG4gICAgICAnPFJvdXRlPiBlbGVtZW50cyBzaG91bGQgbm90IGNoYW5nZSBmcm9tIHVuY29udHJvbGxlZCB0byBjb250cm9sbGVkIChvciB2aWNlIHZlcnNhKS4gWW91IGluaXRpYWxseSB1c2VkIG5vIFwibG9jYXRpb25cIiBwcm9wIGFuZCB0aGVuIHByb3ZpZGVkIG9uZSBvbiBhIHN1YnNlcXVlbnQgcmVuZGVyLidcbiAgICApO1xuXG4gICAgd2FybmluZyhcbiAgICAgICEoIXRoaXMucHJvcHMubG9jYXRpb24gJiYgcHJldlByb3BzLmxvY2F0aW9uKSxcbiAgICAgICc8Um91dGU+IGVsZW1lbnRzIHNob3VsZCBub3QgY2hhbmdlIGZyb20gY29udHJvbGxlZCB0byB1bmNvbnRyb2xsZWQgKG9yIHZpY2UgdmVyc2EpLiBZb3UgcHJvdmlkZWQgYSBcImxvY2F0aW9uXCIgcHJvcCBpbml0aWFsbHkgYnV0IG9taXR0ZWQgaXQgb24gYSBzdWJzZXF1ZW50IHJlbmRlci4nXG4gICAgKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUm91dGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyBjcmVhdGVMb2NhdGlvbiwgY3JlYXRlUGF0aCB9IGZyb20gXCJoaXN0b3J5XCI7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gXCJ0aW55LWludmFyaWFudFwiO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSBcInRpbnktd2FybmluZ1wiO1xuXG5pbXBvcnQgUm91dGVyIGZyb20gXCIuL1JvdXRlclwiO1xuXG5mdW5jdGlvbiBhZGRMZWFkaW5nU2xhc2gocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09IFwiL1wiID8gcGF0aCA6IFwiL1wiICsgcGF0aDtcbn1cblxuZnVuY3Rpb24gYWRkQmFzZW5hbWUoYmFzZW5hbWUsIGxvY2F0aW9uKSB7XG4gIGlmICghYmFzZW5hbWUpIHJldHVybiBsb2NhdGlvbjtcblxuICByZXR1cm4ge1xuICAgIC4uLmxvY2F0aW9uLFxuICAgIHBhdGhuYW1lOiBhZGRMZWFkaW5nU2xhc2goYmFzZW5hbWUpICsgbG9jYXRpb24ucGF0aG5hbWVcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3RyaXBCYXNlbmFtZShiYXNlbmFtZSwgbG9jYXRpb24pIHtcbiAgaWYgKCFiYXNlbmFtZSkgcmV0dXJuIGxvY2F0aW9uO1xuXG4gIGNvbnN0IGJhc2UgPSBhZGRMZWFkaW5nU2xhc2goYmFzZW5hbWUpO1xuXG4gIGlmIChsb2NhdGlvbi5wYXRobmFtZS5pbmRleE9mKGJhc2UpICE9PSAwKSByZXR1cm4gbG9jYXRpb247XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5sb2NhdGlvbixcbiAgICBwYXRobmFtZTogbG9jYXRpb24ucGF0aG5hbWUuc3Vic3RyKGJhc2UubGVuZ3RoKVxuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVVUkwobG9jYXRpb24pIHtcbiAgcmV0dXJuIHR5cGVvZiBsb2NhdGlvbiA9PT0gXCJzdHJpbmdcIiA/IGxvY2F0aW9uIDogY3JlYXRlUGF0aChsb2NhdGlvbik7XG59XG5cbmZ1bmN0aW9uIHN0YXRpY0hhbmRsZXIobWV0aG9kTmFtZSkge1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGludmFyaWFudChmYWxzZSwgXCJZb3UgY2Fubm90ICVzIHdpdGggPFN0YXRpY1JvdXRlcj5cIiwgbWV0aG9kTmFtZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG4vKipcbiAqIFRoZSBwdWJsaWMgdG9wLWxldmVsIEFQSSBmb3IgYSBcInN0YXRpY1wiIDxSb3V0ZXI+LCBzby1jYWxsZWQgYmVjYXVzZSBpdFxuICogY2FuJ3QgYWN0dWFsbHkgY2hhbmdlIHRoZSBjdXJyZW50IGxvY2F0aW9uLiBJbnN0ZWFkLCBpdCBqdXN0IHJlY29yZHNcbiAqIGxvY2F0aW9uIGNoYW5nZXMgaW4gYSBjb250ZXh0IG9iamVjdC4gVXNlZnVsIG1haW5seSBpbiB0ZXN0aW5nIGFuZFxuICogc2VydmVyLXJlbmRlcmluZyBzY2VuYXJpb3MuXG4gKi9cbmNsYXNzIFN0YXRpY1JvdXRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIG5hdmlnYXRlVG8obG9jYXRpb24sIGFjdGlvbikge1xuICAgIGNvbnN0IHsgYmFzZW5hbWUgPSBcIlwiLCBjb250ZXh0ID0ge30gfSA9IHRoaXMucHJvcHM7XG4gICAgY29udGV4dC5hY3Rpb24gPSBhY3Rpb247XG4gICAgY29udGV4dC5sb2NhdGlvbiA9IGFkZEJhc2VuYW1lKGJhc2VuYW1lLCBjcmVhdGVMb2NhdGlvbihsb2NhdGlvbikpO1xuICAgIGNvbnRleHQudXJsID0gY3JlYXRlVVJMKGNvbnRleHQubG9jYXRpb24pO1xuICB9XG5cbiAgaGFuZGxlUHVzaCA9IGxvY2F0aW9uID0+IHRoaXMubmF2aWdhdGVUbyhsb2NhdGlvbiwgXCJQVVNIXCIpO1xuICBoYW5kbGVSZXBsYWNlID0gbG9jYXRpb24gPT4gdGhpcy5uYXZpZ2F0ZVRvKGxvY2F0aW9uLCBcIlJFUExBQ0VcIik7XG4gIGhhbmRsZUxpc3RlbiA9ICgpID0+IG5vb3A7XG4gIGhhbmRsZUJsb2NrID0gKCkgPT4gbm9vcDtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBiYXNlbmFtZSA9IFwiXCIsIGNvbnRleHQgPSB7fSwgbG9jYXRpb24gPSBcIi9cIiwgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGhpc3RvcnkgPSB7XG4gICAgICBjcmVhdGVIcmVmOiBwYXRoID0+IGFkZExlYWRpbmdTbGFzaChiYXNlbmFtZSArIGNyZWF0ZVVSTChwYXRoKSksXG4gICAgICBhY3Rpb246IFwiUE9QXCIsXG4gICAgICBsb2NhdGlvbjogc3RyaXBCYXNlbmFtZShiYXNlbmFtZSwgY3JlYXRlTG9jYXRpb24obG9jYXRpb24pKSxcbiAgICAgIHB1c2g6IHRoaXMuaGFuZGxlUHVzaCxcbiAgICAgIHJlcGxhY2U6IHRoaXMuaGFuZGxlUmVwbGFjZSxcbiAgICAgIGdvOiBzdGF0aWNIYW5kbGVyKFwiZ29cIiksXG4gICAgICBnb0JhY2s6IHN0YXRpY0hhbmRsZXIoXCJnb0JhY2tcIiksXG4gICAgICBnb0ZvcndhcmQ6IHN0YXRpY0hhbmRsZXIoXCJnb0ZvcndhcmRcIiksXG4gICAgICBsaXN0ZW46IHRoaXMuaGFuZGxlTGlzdGVuLFxuICAgICAgYmxvY2s6IHRoaXMuaGFuZGxlQmxvY2tcbiAgICB9O1xuXG4gICAgcmV0dXJuIDxSb3V0ZXIgey4uLnJlc3R9IGhpc3Rvcnk9e2hpc3Rvcnl9IHN0YXRpY0NvbnRleHQ9e2NvbnRleHR9IC8+O1xuICB9XG59XG5cbmlmIChfX0RFVl9fKSB7XG4gIFN0YXRpY1JvdXRlci5wcm9wVHlwZXMgPSB7XG4gICAgYmFzZW5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY29udGV4dDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBsb2NhdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pXG4gIH07XG5cbiAgU3RhdGljUm91dGVyLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uKCkge1xuICAgIHdhcm5pbmcoXG4gICAgICAhdGhpcy5wcm9wcy5oaXN0b3J5LFxuICAgICAgXCI8U3RhdGljUm91dGVyPiBpZ25vcmVzIHRoZSBoaXN0b3J5IHByb3AuIFRvIHVzZSBhIGN1c3RvbSBoaXN0b3J5LCBcIiArXG4gICAgICAgIFwidXNlIGBpbXBvcnQgeyBSb3V0ZXIgfWAgaW5zdGVhZCBvZiBgaW1wb3J0IHsgU3RhdGljUm91dGVyIGFzIFJvdXRlciB9YC5cIlxuICAgICk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRpY1JvdXRlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSBcInRpbnktaW52YXJpYW50XCI7XG5pbXBvcnQgd2FybmluZyBmcm9tIFwidGlueS13YXJuaW5nXCI7XG5cbmltcG9ydCBSb3V0ZXJDb250ZXh0IGZyb20gXCIuL1JvdXRlckNvbnRleHRcIjtcbmltcG9ydCBtYXRjaFBhdGggZnJvbSBcIi4vbWF0Y2hQYXRoXCI7XG5cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIHJlbmRlcmluZyB0aGUgZmlyc3QgPFJvdXRlPiB0aGF0IG1hdGNoZXMuXG4gKi9cbmNsYXNzIFN3aXRjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJvdXRlckNvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgIHtjb250ZXh0ID0+IHtcbiAgICAgICAgICBpbnZhcmlhbnQoY29udGV4dCwgXCJZb3Ugc2hvdWxkIG5vdCB1c2UgPFN3aXRjaD4gb3V0c2lkZSBhIDxSb3V0ZXI+XCIpO1xuXG4gICAgICAgICAgY29uc3QgbG9jYXRpb24gPSB0aGlzLnByb3BzLmxvY2F0aW9uIHx8IGNvbnRleHQubG9jYXRpb247XG5cbiAgICAgICAgICBsZXQgZWxlbWVudCwgbWF0Y2g7XG5cbiAgICAgICAgICAvLyBXZSB1c2UgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaCBpbnN0ZWFkIG9mIFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoKS5maW5kKClcbiAgICAgICAgICAvLyBoZXJlIGJlY2F1c2UgdG9BcnJheSBhZGRzIGtleXMgdG8gYWxsIGNoaWxkIGVsZW1lbnRzIGFuZCB3ZSBkbyBub3Qgd2FudFxuICAgICAgICAgIC8vIHRvIHRyaWdnZXIgYW4gdW5tb3VudC9yZW1vdW50IGZvciB0d28gPFJvdXRlPnMgdGhhdCByZW5kZXIgdGhlIHNhbWVcbiAgICAgICAgICAvLyBjb21wb25lbnQgYXQgZGlmZmVyZW50IFVSTHMuXG4gICAgICAgICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaCh0aGlzLnByb3BzLmNoaWxkcmVuLCBjaGlsZCA9PiB7XG4gICAgICAgICAgICBpZiAobWF0Y2ggPT0gbnVsbCAmJiBSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgICAgICAgZWxlbWVudCA9IGNoaWxkO1xuXG4gICAgICAgICAgICAgIGNvbnN0IHBhdGggPSBjaGlsZC5wcm9wcy5wYXRoIHx8IGNoaWxkLnByb3BzLmZyb207XG5cbiAgICAgICAgICAgICAgbWF0Y2ggPSBwYXRoXG4gICAgICAgICAgICAgICAgPyBtYXRjaFBhdGgobG9jYXRpb24ucGF0aG5hbWUsIHsgLi4uY2hpbGQucHJvcHMsIHBhdGggfSlcbiAgICAgICAgICAgICAgICA6IGNvbnRleHQubWF0Y2g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXR1cm4gbWF0Y2hcbiAgICAgICAgICAgID8gUmVhY3QuY2xvbmVFbGVtZW50KGVsZW1lbnQsIHsgbG9jYXRpb24sIGNvbXB1dGVkTWF0Y2g6IG1hdGNoIH0pXG4gICAgICAgICAgICA6IG51bGw7XG4gICAgICAgIH19XG4gICAgICA8L1JvdXRlckNvbnRleHQuQ29uc3VtZXI+XG4gICAgKTtcbiAgfVxufVxuXG5pZiAoX19ERVZfXykge1xuICBTd2l0Y2gucHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBsb2NhdGlvbjogUHJvcFR5cGVzLm9iamVjdFxuICB9O1xuXG4gIFN3aXRjaC5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24ocHJldlByb3BzKSB7XG4gICAgd2FybmluZyhcbiAgICAgICEodGhpcy5wcm9wcy5sb2NhdGlvbiAmJiAhcHJldlByb3BzLmxvY2F0aW9uKSxcbiAgICAgICc8U3dpdGNoPiBlbGVtZW50cyBzaG91bGQgbm90IGNoYW5nZSBmcm9tIHVuY29udHJvbGxlZCB0byBjb250cm9sbGVkIChvciB2aWNlIHZlcnNhKS4gWW91IGluaXRpYWxseSB1c2VkIG5vIFwibG9jYXRpb25cIiBwcm9wIGFuZCB0aGVuIHByb3ZpZGVkIG9uZSBvbiBhIHN1YnNlcXVlbnQgcmVuZGVyLidcbiAgICApO1xuXG4gICAgd2FybmluZyhcbiAgICAgICEoIXRoaXMucHJvcHMubG9jYXRpb24gJiYgcHJldlByb3BzLmxvY2F0aW9uKSxcbiAgICAgICc8U3dpdGNoPiBlbGVtZW50cyBzaG91bGQgbm90IGNoYW5nZSBmcm9tIGNvbnRyb2xsZWQgdG8gdW5jb250cm9sbGVkIChvciB2aWNlIHZlcnNhKS4gWW91IHByb3ZpZGVkIGEgXCJsb2NhdGlvblwiIHByb3AgaW5pdGlhbGx5IGJ1dCBvbWl0dGVkIGl0IG9uIGEgc3Vic2VxdWVudCByZW5kZXIuJ1xuICAgICk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN3aXRjaDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBSb3V0ZXJDb250ZXh0IGZyb20gXCIuL1JvdXRlckNvbnRleHRcIjtcbmltcG9ydCBob2lzdFN0YXRpY3MgZnJvbSBcImhvaXN0LW5vbi1yZWFjdC1zdGF0aWNzXCI7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gXCJ0aW55LWludmFyaWFudFwiO1xuXG4vKipcbiAqIEEgcHVibGljIGhpZ2hlci1vcmRlciBjb21wb25lbnQgdG8gYWNjZXNzIHRoZSBpbXBlcmF0aXZlIEFQSVxuICovXG5mdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvbmVudCkge1xuICBjb25zdCBkaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7Q29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lfSlgO1xuICBjb25zdCBDID0gcHJvcHMgPT4ge1xuICAgIGNvbnN0IHsgd3JhcHBlZENvbXBvbmVudFJlZiwgLi4ucmVtYWluaW5nUHJvcHMgfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3V0ZXJDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICB7Y29udGV4dCA9PiB7XG4gICAgICAgICAgaW52YXJpYW50KFxuICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgIGBZb3Ugc2hvdWxkIG5vdCB1c2UgPCR7ZGlzcGxheU5hbWV9IC8+IG91dHNpZGUgYSA8Um91dGVyPmBcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q29tcG9uZW50XG4gICAgICAgICAgICAgIHsuLi5yZW1haW5pbmdQcm9wc31cbiAgICAgICAgICAgICAgey4uLmNvbnRleHR9XG4gICAgICAgICAgICAgIHJlZj17d3JhcHBlZENvbXBvbmVudFJlZn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfX1cbiAgICAgIDwvUm91dGVyQ29udGV4dC5Db25zdW1lcj5cbiAgICApO1xuICB9O1xuXG4gIEMuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgQy5XcmFwcGVkQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuXG4gIGlmIChfX0RFVl9fKSB7XG4gICAgQy5wcm9wVHlwZXMgPSB7XG4gICAgICB3cmFwcGVkQ29tcG9uZW50UmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIFByb3BUeXBlcy5vYmplY3RcbiAgICAgIF0pXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBob2lzdFN0YXRpY3MoQywgQ29tcG9uZW50KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSBcInRpbnktaW52YXJpYW50XCI7XG5cbmltcG9ydCBDb250ZXh0IGZyb20gXCIuL1JvdXRlckNvbnRleHQuanNcIjtcbmltcG9ydCBtYXRjaFBhdGggZnJvbSBcIi4vbWF0Y2hQYXRoLmpzXCI7XG5cbmNvbnN0IHVzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0O1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSGlzdG9yeSgpIHtcbiAgaWYgKF9fREVWX18pIHtcbiAgICBpbnZhcmlhbnQoXG4gICAgICB0eXBlb2YgdXNlQ29udGV4dCA9PT0gXCJmdW5jdGlvblwiLFxuICAgICAgXCJZb3UgbXVzdCB1c2UgUmVhY3QgPj0gMTYuOCBpbiBvcmRlciB0byB1c2UgdXNlSGlzdG9yeSgpXCJcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIHVzZUNvbnRleHQoQ29udGV4dCkuaGlzdG9yeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvY2F0aW9uKCkge1xuICBpZiAoX19ERVZfXykge1xuICAgIGludmFyaWFudChcbiAgICAgIHR5cGVvZiB1c2VDb250ZXh0ID09PSBcImZ1bmN0aW9uXCIsXG4gICAgICBcIllvdSBtdXN0IHVzZSBSZWFjdCA+PSAxNi44IGluIG9yZGVyIHRvIHVzZSB1c2VMb2NhdGlvbigpXCJcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIHVzZUNvbnRleHQoQ29udGV4dCkubG9jYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VQYXJhbXMoKSB7XG4gIGlmIChfX0RFVl9fKSB7XG4gICAgaW52YXJpYW50KFxuICAgICAgdHlwZW9mIHVzZUNvbnRleHQgPT09IFwiZnVuY3Rpb25cIixcbiAgICAgIFwiWW91IG11c3QgdXNlIFJlYWN0ID49IDE2LjggaW4gb3JkZXIgdG8gdXNlIHVzZVBhcmFtcygpXCJcbiAgICApO1xuICB9XG5cbiAgY29uc3QgbWF0Y2ggPSB1c2VDb250ZXh0KENvbnRleHQpLm1hdGNoO1xuICByZXR1cm4gbWF0Y2ggPyBtYXRjaC5wYXJhbXMgOiB7fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlTWF0Y2gocGF0aCkge1xuICBpZiAoX19ERVZfXykge1xuICAgIGludmFyaWFudChcbiAgICAgIHR5cGVvZiB1c2VDb250ZXh0ID09PSBcImZ1bmN0aW9uXCIsXG4gICAgICBcIllvdSBtdXN0IHVzZSBSZWFjdCA+PSAxNi44IGluIG9yZGVyIHRvIHVzZSB1c2VSb3V0ZU1hdGNoKClcIlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gcGF0aFxuICAgID8gbWF0Y2hQYXRoKHVzZUxvY2F0aW9uKCkucGF0aG5hbWUsIHBhdGgpXG4gICAgOiB1c2VDb250ZXh0KENvbnRleHQpLm1hdGNoO1xufVxuIiwiaWYgKF9fREVWX18pIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjb25zdCBnbG9iYWwgPSB3aW5kb3c7XG4gICAgY29uc3Qga2V5ID0gXCJfX3JlYWN0X3JvdXRlcl9idWlsZF9fXCI7XG4gICAgY29uc3QgYnVpbGROYW1lcyA9IHsgY2pzOiBcIkNvbW1vbkpTXCIsIGVzbTogXCJFUyBtb2R1bGVzXCIsIHVtZDogXCJVTURcIiB9O1xuXG4gICAgaWYgKGdsb2JhbFtrZXldICYmIGdsb2JhbFtrZXldICE9PSBwcm9jZXNzLmVudi5CVUlMRF9GT1JNQVQpIHtcbiAgICAgIGNvbnN0IGluaXRpYWxCdWlsZE5hbWUgPSBidWlsZE5hbWVzW2dsb2JhbFtrZXldXTtcbiAgICAgIGNvbnN0IHNlY29uZGFyeUJ1aWxkTmFtZSA9IGJ1aWxkTmFtZXNbcHJvY2Vzcy5lbnYuQlVJTERfRk9STUFUXTtcblxuICAgICAgLy8gVE9ETzogQWRkIGxpbmsgdG8gYXJ0aWNsZSB0aGF0IGV4cGxhaW5zIGluIGRldGFpbCBob3cgdG8gYXZvaWRcbiAgICAgIC8vIGxvYWRpbmcgMiBkaWZmZXJlbnQgYnVpbGRzLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgWW91IGFyZSBsb2FkaW5nIHRoZSAke3NlY29uZGFyeUJ1aWxkTmFtZX0gYnVpbGQgb2YgUmVhY3QgUm91dGVyIGAgK1xuICAgICAgICAgIGBvbiBhIHBhZ2UgdGhhdCBpcyBhbHJlYWR5IHJ1bm5pbmcgdGhlICR7aW5pdGlhbEJ1aWxkTmFtZX0gYCArXG4gICAgICAgICAgYGJ1aWxkLCBzbyB0aGluZ3Mgd29uJ3Qgd29yayByaWdodC5gXG4gICAgICApO1xuICAgIH1cblxuICAgIGdsb2JhbFtrZXldID0gcHJvY2Vzcy5lbnYuQlVJTERfRk9STUFUO1xuICB9XG59XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWVtb3J5Um91dGVyIH0gZnJvbSBcIi4vTWVtb3J5Um91dGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFByb21wdCB9IGZyb20gXCIuL1Byb21wdFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWRpcmVjdCB9IGZyb20gXCIuL1JlZGlyZWN0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJvdXRlIH0gZnJvbSBcIi4vUm91dGVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUm91dGVyIH0gZnJvbSBcIi4vUm91dGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFN0YXRpY1JvdXRlciB9IGZyb20gXCIuL1N0YXRpY1JvdXRlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTd2l0Y2ggfSBmcm9tIFwiLi9Td2l0Y2hcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2VuZXJhdGVQYXRoIH0gZnJvbSBcIi4vZ2VuZXJhdGVQYXRoXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1hdGNoUGF0aCB9IGZyb20gXCIuL21hdGNoUGF0aFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSBcIi4vd2l0aFJvdXRlclwiO1xuXG5pbXBvcnQgeyB1c2VIaXN0b3J5LCB1c2VMb2NhdGlvbiwgdXNlUGFyYW1zLCB1c2VSb3V0ZU1hdGNoIH0gZnJvbSBcIi4vaG9va3MuanNcIjtcbmV4cG9ydCB7IHVzZUhpc3RvcnksIHVzZUxvY2F0aW9uLCB1c2VQYXJhbXMsIHVzZVJvdXRlTWF0Y2ggfTtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBfX1JvdXRlckNvbnRleHQgfSBmcm9tIFwiLi9Sb3V0ZXJDb250ZXh0XCI7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBQ0E7QUFNQTtBQ0pBOzs7O0FBR0E7OztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFHQTs7O0FBQ0E7QUFFQTtBQUNBO0FBREE7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7O0FBSkE7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7QUFJQTtBQUNBOzs7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFGQTs7OztBQTdDQTtBQUNBO0FBeURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQURBOztBQ25FQTs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7OztBQUpBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBREE7OztBQ3pCQTs7Ozs7Ozs7O0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTs7OztBQWRBO0FDS0E7Ozs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBUEE7QUFVQTtBQUNBO0FBWEE7QUFhQTtBQWJBO0FBVkE7OztBQStCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7OztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7Ozs7OztBQU1BO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTs7O0FBQ0E7QUFBQTtBQUFBOztBQ2RBOzs7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFNQTtBQUpBOzs7QUFXQTtBQUNBO0FBQ0E7OztBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBS0E7O0FBWkE7QUFlQTtBQWZBO0FBM0JBOzs7QUFrREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBOzs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7Ozs7OztBQU1BO0FBQUE7QUFBQTs7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7OztBQUZBO0FBS0E7QUFMQTtBQUtBO0FBTEE7QUFLQTtBQUxBO0FBS0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFKQTtBQWxCQTs7O0FDM0JBO0FBQ0E7OztBQUdBO0FBQ0E7QUFFQTtBQU9BOzs7Ozs7O0FBTUE7Ozs7Ozs7OztBQUNBOzs7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7OztBQUlBO0FBQ0E7OztBQUlBO0FBQUE7QUFBQTtBQXZCQTs7OztBQUZBO0FBQ0E7QUFrREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUpBO0FBU0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBakJBO0FBQ0E7QUFtQkE7QUFDQTtBQVNBO0FBU0E7QUFuQkE7QUFDQTtBQXdCQTtBQUNBO0FBS0E7QUFOQTs7O0FDdEhBO0FBQ0E7OztBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBRkE7OztBQU1BO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUZBOzs7QUFNQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFEQTs7O0FBS0E7Ozs7Ozs7OztBQVFBOzs7Ozs7Ozs7Ozs7QUFRQTtBQUFBOzs7QUFDQTtBQUFBOzs7QUFDQTtBQUFBOzs7QUFDQTtBQUFBOzs7Ozs7OztBQVZBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBUUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBYUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUE3QkE7QUFDQTtBQWdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFEQTs7QUNwRkE7Ozs7O0FBR0E7Ozs7Ozs7OztBQUNBOzs7QUFFQTtBQUVBO0FBRUE7QUFFQTs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTs7QUFQQTtBQVlBO0FBQ0E7QUFBQTtBQUFBO0FBMUJBOzs7O0FBRkE7QUFDQTtBQW1DQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBS0E7QUFOQTs7QUMvQ0E7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBS0E7QUFHQTtBQUhBO0FBUkE7QUFIQTtBQUNBO0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBOzs7QUFTQTs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUtBOzs7QUFHQTtBQUNBO0FBRUE7OztBQUtBOzs7QUFHQTtBQUNBO0FBRUE7OztBQUtBO0FBQ0E7OztBQUdBO0FBQ0E7QUFFQTs7O0FBS0E7OztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBSUE7OztBQU9BOzs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9