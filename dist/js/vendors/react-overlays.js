(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors/react-overlays"],{

/***/ "./node_modules/react-overlays/esm/Dropdown.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-overlays/esm/Dropdown.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dom_helpers_matches__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-helpers/matches */ "./node_modules/dom-helpers/esm/matches.js");
/* harmony import */ var dom_helpers_querySelectorAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dom-helpers/querySelectorAll */ "./node_modules/dom-helpers/esm/querySelectorAll.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var uncontrollable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uncontrollable */ "./node_modules/uncontrollable/esm/index.js");
/* harmony import */ var _restart_hooks_usePrevious__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @restart/hooks/usePrevious */ "./node_modules/@restart/hooks/esm/usePrevious.js");
/* harmony import */ var _restart_hooks_useCallbackRef__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @restart/hooks/useCallbackRef */ "./node_modules/@restart/hooks/esm/useCallbackRef.js");
/* harmony import */ var _restart_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @restart/hooks/useForceUpdate */ "./node_modules/@restart/hooks/esm/useForceUpdate.js");
/* harmony import */ var _restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @restart/hooks/useEventCallback */ "./node_modules/@restart/hooks/esm/useEventCallback.js");
/* harmony import */ var _DropdownContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DropdownContext */ "./node_modules/react-overlays/esm/DropdownContext.js");
/* harmony import */ var _DropdownMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DropdownMenu */ "./node_modules/react-overlays/esm/DropdownMenu.js");
/* harmony import */ var _DropdownToggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DropdownToggle */ "./node_modules/react-overlays/esm/DropdownToggle.js");












var propTypes = {
  /**
   * A render prop that returns the root dropdown element. The `props`
   * argument should spread through to an element containing _both_ the
   * menu and toggle in order to handle keyboard events for focus management.
   *
   * @type {Function ({
   *   props: {
   *     onKeyDown: (SyntheticEvent) => void,
   *   },
   * }) => React.Element}
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,

  /**
   * Determines the direction and location of the Menu in relation to it's Toggle.
   */
  drop: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['up', 'left', 'right', 'down']),

  /**
   * Controls the focus behavior for when the Dropdown is opened. Set to
   * `true` to always focus the first menu item, `keyboard` to focus only when
   * navigating via the keyboard, or `false` to disable completely
   *
   * The Default behavior is `false` **unless** the Menu has a `role="menu"`
   * where it will default to `keyboard` to match the recommended [ARIA Authoring practices](https://www.w3.org/TR/wai-aria-practices-1.1/#menubutton).
   */
  focusFirstItemOnShow: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf([false, true, 'keyboard']),

  /**
   * A css slector string that will return __focusable__ menu items.
   * Selectors should be relative to the menu component:
   * e.g. ` > li:not('.disabled')`
   */
  itemSelector: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Align the menu to the 'end' side of the placement side of the Dropdown toggle. The default placement is `top-start` or `bottom-start`.
   */
  alignEnd: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Whether or not the Dropdown is visible.
   *
   * @controllable onToggle
   */
  show: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Sets the initial show position of the Dropdown.
   */
  defaultShow: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * A callback fired when the Dropdown wishes to change visibility. Called with the requested
   * `show` value, the DOM event, and the source that fired it: `'click'`,`'keydown'`,`'rootClose'`, or `'select'`.
   *
   * ```ts static
   * function(
   *   isOpen: boolean,
   *   event: SyntheticEvent,
   * ): void
   * ```
   *
   * @controllable show
   */
  onToggle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
/**
 * @displayName Dropdown
 */

function Dropdown(_ref) {
  var drop = _ref.drop,
      alignEnd = _ref.alignEnd,
      defaultShow = _ref.defaultShow,
      rawShow = _ref.show,
      rawOnToggle = _ref.onToggle,
      _ref$itemSelector = _ref.itemSelector,
      itemSelector = _ref$itemSelector === void 0 ? '* > *' : _ref$itemSelector,
      focusFirstItemOnShow = _ref.focusFirstItemOnShow,
      children = _ref.children;
  var forceUpdate = Object(_restart_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_7__["default"])();

  var _useUncontrolledProp = Object(uncontrollable__WEBPACK_IMPORTED_MODULE_4__["useUncontrolledProp"])(rawShow, defaultShow, rawOnToggle),
      show = _useUncontrolledProp[0],
      onToggle = _useUncontrolledProp[1];

  var _useCallbackRef = Object(_restart_hooks_useCallbackRef__WEBPACK_IMPORTED_MODULE_6__["default"])(),
      toggleElement = _useCallbackRef[0],
      setToggle = _useCallbackRef[1]; // We use normal refs instead of useCallbackRef in order to populate the
  // the value as quickly as possible, otherwise the effect to focus the element
  // may run before the state value is set


  var menuRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var menuElement = menuRef.current;
  var setMenu = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (ref) {
    menuRef.current = ref; // ensure that a menu set triggers an update for consumers

    forceUpdate();
  }, [forceUpdate]);
  var lastShow = Object(_restart_hooks_usePrevious__WEBPACK_IMPORTED_MODULE_5__["default"])(show);
  var lastSourceEvent = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var focusInDropdown = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(false);
  var toggle = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (event) {
    onToggle(!show, event);
  }, [onToggle, show]);
  var context = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return {
      toggle: toggle,
      drop: drop,
      show: show,
      alignEnd: alignEnd,
      menuElement: menuElement,
      toggleElement: toggleElement,
      setMenu: setMenu,
      setToggle: setToggle
    };
  }, [toggle, drop, show, alignEnd, menuElement, toggleElement, setMenu, setToggle]);

  if (menuElement && lastShow && !show) {
    focusInDropdown.current = menuElement.contains(document.activeElement);
  }

  var focusToggle = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_8__["default"])(function () {
    if (toggleElement && toggleElement.focus) {
      toggleElement.focus();
    }
  });
  var maybeFocusFirst = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_8__["default"])(function () {
    var type = lastSourceEvent.current;
    var focusType = focusFirstItemOnShow;

    if (focusType == null) {
      focusType = menuRef.current && Object(dom_helpers_matches__WEBPACK_IMPORTED_MODULE_0__["default"])(menuRef.current, '[role=menu]') ? 'keyboard' : false;
    }

    if (focusType === false || focusType === 'keyboard' && !/^key.+$/.test(type)) {
      return;
    }

    var first = Object(dom_helpers_querySelectorAll__WEBPACK_IMPORTED_MODULE_1__["default"])(menuRef.current, itemSelector)[0];
    if (first && first.focus) first.focus();
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (show) maybeFocusFirst();else if (focusInDropdown.current) {
      focusInDropdown.current = false;
      focusToggle();
    } // only `show` should be changing
  }, [show, focusInDropdown, focusToggle, maybeFocusFirst]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    lastSourceEvent.current = null;
  });

  var getNextFocusedChild = function getNextFocusedChild(current, offset) {
    if (!menuRef.current) return null;
    var items = Object(dom_helpers_querySelectorAll__WEBPACK_IMPORTED_MODULE_1__["default"])(menuRef.current, itemSelector);
    var index = items.indexOf(current) + offset;
    index = Math.max(0, Math.min(index, items.length));
    return items[index];
  };

  var handleKeyDown = function handleKeyDown(event) {
    var key = event.key;
    var target = event.target; // Second only to https://github.com/twbs/bootstrap/blob/8cfbf6933b8a0146ac3fbc369f19e520bd1ebdac/js/src/dropdown.js#L400
    // in inscrutability

    var isInput = /input|textarea/i.test(target.tagName);

    if (isInput && (key === ' ' || key !== 'Escape' && menuRef.current && menuRef.current.contains(target))) {
      return;
    }

    lastSourceEvent.current = event.type;

    switch (key) {
      case 'ArrowUp':
        {
          var next = getNextFocusedChild(target, -1);
          if (next && next.focus) next.focus();
          event.preventDefault();
          return;
        }

      case 'ArrowDown':
        event.preventDefault();

        if (!show) {
          toggle(event);
        } else {
          var _next = getNextFocusedChild(target, 1);

          if (_next && _next.focus) _next.focus();
        }

        return;

      case 'Escape':
      case 'Tab':
        onToggle(false, event);
        break;

      default:
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_DropdownContext__WEBPACK_IMPORTED_MODULE_9__["default"].Provider, {
    value: context
  }, children({
    props: {
      onKeyDown: handleKeyDown
    }
  }));
}

Dropdown.displayName = 'ReactOverlaysDropdown';
Dropdown.propTypes = propTypes;
Dropdown.Menu = _DropdownMenu__WEBPACK_IMPORTED_MODULE_10__["default"];
Dropdown.Toggle = _DropdownToggle__WEBPACK_IMPORTED_MODULE_11__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

/***/ }),

/***/ "./node_modules/react-overlays/esm/DropdownContext.js":
/*!************************************************************!*\
  !*** ./node_modules/react-overlays/esm/DropdownContext.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var DropdownContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
/* harmony default export */ __webpack_exports__["default"] = (DropdownContext);

/***/ }),

/***/ "./node_modules/react-overlays/esm/DropdownMenu.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-overlays/esm/DropdownMenu.js ***!
  \*********************************************************/
/*! exports provided: useDropdownMenu, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDropdownMenu", function() { return useDropdownMenu; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _restart_hooks_useCallbackRef__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @restart/hooks/useCallbackRef */ "./node_modules/@restart/hooks/esm/useCallbackRef.js");
/* harmony import */ var _DropdownContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DropdownContext */ "./node_modules/react-overlays/esm/DropdownContext.js");
/* harmony import */ var _usePopper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usePopper */ "./node_modules/react-overlays/esm/usePopper.js");
/* harmony import */ var _useRootClose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useRootClose */ "./node_modules/react-overlays/esm/useRootClose.js");









var noop = function noop() {};
/**
 * @memberOf Dropdown
 * @param {object}  options
 * @param {boolean} options.flip Automatically adjust the menu `drop` position based on viewport edge detection
 * @param {boolean} options.show Display the menu manually, ignored in the context of a `Dropdown`
 * @param {boolean} options.usePopper opt in/out of using PopperJS to position menus. When disabled you must position it yourself.
 * @param {string}  options.rootCloseEvent The pointer event to listen for when determining "clicks outside" the menu for triggering a close.
 * @param {object}  options.popperConfig Options passed to the [`usePopper`](/api/usePopper) hook.
 */


function useDropdownMenu(options) {
  var _modifiers$arrow;

  if (options === void 0) {
    options = {};
  }

  var context = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_DropdownContext__WEBPACK_IMPORTED_MODULE_5__["default"]);

  var _useCallbackRef = Object(_restart_hooks_useCallbackRef__WEBPACK_IMPORTED_MODULE_4__["default"])(),
      arrowElement = _useCallbackRef[0],
      attachArrowRef = _useCallbackRef[1];

  var hasShownRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(false);
  var _options = options,
      flip = _options.flip,
      rootCloseEvent = _options.rootCloseEvent,
      _options$popperConfig = _options.popperConfig,
      popperConfig = _options$popperConfig === void 0 ? {} : _options$popperConfig,
      _options$usePopper = _options.usePopper,
      shouldUsePopper = _options$usePopper === void 0 ? !!context : _options$usePopper;
  var show = (context == null ? void 0 : context.show) == null ? options.show : context.show;
  var alignEnd = (context == null ? void 0 : context.alignEnd) == null ? options.alignEnd : context.alignEnd;

  if (show && !hasShownRef.current) {
    hasShownRef.current = true;
  }

  var handleClose = function handleClose(e) {
    context == null ? void 0 : context.toggle(false, e);
  };

  var _ref = context || {},
      drop = _ref.drop,
      setMenu = _ref.setMenu,
      menuElement = _ref.menuElement,
      toggleElement = _ref.toggleElement;

  var placement = alignEnd ? 'bottom-end' : 'bottom-start';
  if (drop === 'up') placement = alignEnd ? 'top-end' : 'top-start';else if (drop === 'right') placement = alignEnd ? 'right-end' : 'right-start';else if (drop === 'left') placement = alignEnd ? 'left-end' : 'left-start';
  var modifiers = Object(_usePopper__WEBPACK_IMPORTED_MODULE_6__["toModifierMap"])(popperConfig.modifiers);
  var popper = Object(_usePopper__WEBPACK_IMPORTED_MODULE_6__["default"])(toggleElement, menuElement, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, popperConfig, {
    placement: placement,
    enabled: !!(shouldUsePopper && show),
    modifiers: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, modifiers, {
      eventListeners: {
        enabled: !!show
      },
      arrow: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, modifiers.arrow, {
        enabled: !!arrowElement,
        options: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, (_modifiers$arrow = modifiers.arrow) == null ? void 0 : _modifiers$arrow.options, {
          element: arrowElement
        })
      }),
      flip: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        enabled: !!flip
      }, modifiers.flip)
    })
  }));
  var menu;
  var menuProps = {
    ref: setMenu || noop,
    'aria-labelledby': toggleElement == null ? void 0 : toggleElement.id
  };
  var childArgs = {
    show: show,
    alignEnd: alignEnd,
    hasShown: hasShownRef.current,
    close: handleClose
  };

  if (!shouldUsePopper) {
    menu = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, childArgs, {
      props: menuProps
    });
  } else {
    menu = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, popper, {}, childArgs, {
      props: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, menuProps, {
        style: popper.styles
      }),
      arrowProps: {
        ref: attachArrowRef,
        style: popper.arrowStyles
      }
    });
  }

  Object(_useRootClose__WEBPACK_IMPORTED_MODULE_7__["default"])(menuElement, handleClose, {
    clickTrigger: rootCloseEvent,
    disabled: !(menu && show)
  });
  return menu;
}
var propTypes = {
  /**
   * A render prop that returns a Menu element. The `props`
   * argument should spread through to **a component that can accept a ref**.
   *
   * @type {Function ({
   *   show: boolean,
   *   alignEnd: boolean,
   *   close: (?SyntheticEvent) => void,
   *   placement: Placement,
   *   outOfBoundaries: ?boolean,
   *   scheduleUpdate: () => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     aria-labelledby: ?string
   *   },
   *   arrowProps: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *   },
   * }) => React.Element}
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,

  /**
   * Controls the visible state of the menu, generally this is
   * provided by the parent `Dropdown` component,
   * but may also be specified as a prop directly.
   */
  show: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Aligns the dropdown menu to the 'end' of it's placement position.
   * Generally this is provided by the parent `Dropdown` component,
   * but may also be specified as a prop directly.
   */
  alignEnd: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Enables the Popper.js `flip` modifier, allowing the Dropdown to
   * automatically adjust it's placement in case of overlap with the viewport or toggle.
   * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
   */
  flip: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  usePopper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf([true, false]),

  /**
   * A set of popper options and props passed directly to react-popper's Popper component.
   */
  popperConfig: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Override the default event used by RootCloseWrapper.
   */
  rootCloseEvent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
var defaultProps = {
  usePopper: true
};
/**
 * Also exported as `<Dropdown.Menu>` from `Dropdown`.
 *
 * @displayName DropdownMenu
 * @memberOf Dropdown
 */

function DropdownMenu(_ref2) {
  var children = _ref2.children,
      options = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, ["children"]);

  var args = useDropdownMenu(options);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, args.hasShown ? children(args) : null);
}

DropdownMenu.displayName = 'ReactOverlaysDropdownMenu';
DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;
/** @component */

/* harmony default export */ __webpack_exports__["default"] = (DropdownMenu);

/***/ }),

/***/ "./node_modules/react-overlays/esm/DropdownToggle.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-overlays/esm/DropdownToggle.js ***!
  \***********************************************************/
/*! exports provided: useDropdownToggle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDropdownToggle", function() { return useDropdownToggle; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DropdownContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DropdownContext */ "./node_modules/react-overlays/esm/DropdownContext.js");




var noop = function noop() {};
/**
 * Wires up Dropdown toggle functionality, returning a set a props to attach
 * to the element that functions as the dropdown toggle (generally a button).
 *
 * @memberOf Dropdown
 */


function useDropdownToggle() {
  var _ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_DropdownContext__WEBPACK_IMPORTED_MODULE_2__["default"]) || {},
      _ref$show = _ref.show,
      show = _ref$show === void 0 ? false : _ref$show,
      _ref$toggle = _ref.toggle,
      toggle = _ref$toggle === void 0 ? noop : _ref$toggle,
      setToggle = _ref.setToggle;

  return [{
    ref: setToggle || noop,
    'aria-haspopup': true,
    'aria-expanded': !!show
  }, {
    show: show,
    toggle: toggle
  }];
}
var propTypes = {
  /**
   * A render prop that returns a Toggle element. The `props`
   * argument should spread through to **a component that can accept a ref**. Use
   * the `onToggle` argument to toggle the menu open or closed
   *
   * @type {Function ({
   *   show: boolean,
   *   toggle: (show: boolean) => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     aria-haspopup: true
   *     aria-expanded: boolean
   *   },
   * }) => React.Element}
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
};
/**
 * Also exported as `<Dropdown.Toggle>` from `Dropdown`.
 *
 * @displayName DropdownToggle
 * @memberOf Dropdown
 */

function DropdownToggle(_ref2) {
  var children = _ref2.children;

  var _useDropdownToggle = useDropdownToggle(),
      props = _useDropdownToggle[0],
      _useDropdownToggle$ = _useDropdownToggle[1],
      show = _useDropdownToggle$.show,
      toggle = _useDropdownToggle$.toggle;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, children({
    show: show,
    toggle: toggle,
    props: props
  }));
}

DropdownToggle.displayName = 'ReactOverlaysDropdownToggle';
DropdownToggle.propTypes = propTypes;
/** @component */

/* harmony default export */ __webpack_exports__["default"] = (DropdownToggle);

/***/ }),

/***/ "./node_modules/react-overlays/esm/Modal.js":
/*!**************************************************!*\
  !*** ./node_modules/react-overlays/esm/Modal.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var dom_helpers_activeElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dom-helpers/activeElement */ "./node_modules/dom-helpers/esm/activeElement.js");
/* harmony import */ var dom_helpers_contains__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dom-helpers/contains */ "./node_modules/dom-helpers/esm/contains.js");
/* harmony import */ var dom_helpers_canUseDOM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-helpers/canUseDOM */ "./node_modules/dom-helpers/esm/canUseDOM.js");
/* harmony import */ var dom_helpers_listen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dom-helpers/listen */ "./node_modules/dom-helpers/esm/listen.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _restart_hooks_useMounted__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @restart/hooks/useMounted */ "./node_modules/@restart/hooks/esm/useMounted.js");
/* harmony import */ var _restart_hooks_useWillUnmount__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @restart/hooks/useWillUnmount */ "./node_modules/@restart/hooks/esm/useWillUnmount.js");
/* harmony import */ var _restart_hooks_usePrevious__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @restart/hooks/usePrevious */ "./node_modules/@restart/hooks/esm/usePrevious.js");
/* harmony import */ var _restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @restart/hooks/useEventCallback */ "./node_modules/@restart/hooks/esm/useEventCallback.js");
/* harmony import */ var _ModalManager__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ModalManager */ "./node_modules/react-overlays/esm/ModalManager.js");
/* harmony import */ var _useWaitForDOMRef__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./useWaitForDOMRef */ "./node_modules/react-overlays/esm/useWaitForDOMRef.js");


/* eslint-disable @typescript-eslint/no-use-before-define */

/* eslint-disable react/prop-types */














var manager;

function getManager() {
  if (!manager) manager = new _ModalManager__WEBPACK_IMPORTED_MODULE_13__["default"]();
  return manager;
}

function useModalManager(provided) {
  var modalManager = provided || getManager();
  var modal = Object(react__WEBPACK_IMPORTED_MODULE_7__["useRef"])({
    dialog: null,
    backdrop: null
  });
  return Object.assign(modal.current, {
    add: function add(container, className) {
      return modalManager.add(modal.current, container, className);
    },
    remove: function remove() {
      return modalManager.remove(modal.current);
    },
    isTopModal: function isTopModal() {
      return modalManager.isTopModal(modal.current);
    },
    setDialogRef: Object(react__WEBPACK_IMPORTED_MODULE_7__["useCallback"])(function (ref) {
      modal.current.dialog = ref;
    }, []),
    setBackdropRef: Object(react__WEBPACK_IMPORTED_MODULE_7__["useCallback"])(function (ref) {
      modal.current.backdrop = ref;
    }, [])
  });
}

var Modal = Object(react__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function (_ref, ref) {
  var _ref$show = _ref.show,
      show = _ref$show === void 0 ? false : _ref$show,
      _ref$role = _ref.role,
      role = _ref$role === void 0 ? 'dialog' : _ref$role,
      className = _ref.className,
      style = _ref.style,
      children = _ref.children,
      _ref$backdrop = _ref.backdrop,
      backdrop = _ref$backdrop === void 0 ? true : _ref$backdrop,
      _ref$keyboard = _ref.keyboard,
      keyboard = _ref$keyboard === void 0 ? true : _ref$keyboard,
      onBackdropClick = _ref.onBackdropClick,
      onEscapeKeyDown = _ref.onEscapeKeyDown,
      transition = _ref.transition,
      backdropTransition = _ref.backdropTransition,
      _ref$autoFocus = _ref.autoFocus,
      autoFocus = _ref$autoFocus === void 0 ? true : _ref$autoFocus,
      _ref$enforceFocus = _ref.enforceFocus,
      enforceFocus = _ref$enforceFocus === void 0 ? true : _ref$enforceFocus,
      _ref$restoreFocus = _ref.restoreFocus,
      restoreFocus = _ref$restoreFocus === void 0 ? true : _ref$restoreFocus,
      restoreFocusOptions = _ref.restoreFocusOptions,
      renderDialog = _ref.renderDialog,
      _ref$renderBackdrop = _ref.renderBackdrop,
      renderBackdrop = _ref$renderBackdrop === void 0 ? function (props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", props);
  } : _ref$renderBackdrop,
      providedManager = _ref.manager,
      containerRef = _ref.container,
      containerClassName = _ref.containerClassName,
      onShow = _ref.onShow,
      _ref$onHide = _ref.onHide,
      onHide = _ref$onHide === void 0 ? function () {} : _ref$onHide,
      onExit = _ref.onExit,
      onExited = _ref.onExited,
      onExiting = _ref.onExiting,
      onEnter = _ref.onEnter,
      onEntering = _ref.onEntering,
      onEntered = _ref.onEntered,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "backdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "containerClassName", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"]);

  var container = Object(_useWaitForDOMRef__WEBPACK_IMPORTED_MODULE_14__["default"])(containerRef);
  var modal = useModalManager(providedManager);
  var isMounted = Object(_restart_hooks_useMounted__WEBPACK_IMPORTED_MODULE_9__["default"])();
  var prevShow = Object(_restart_hooks_usePrevious__WEBPACK_IMPORTED_MODULE_11__["default"])(show);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(!show),
      exited = _useState[0],
      setExited = _useState[1];

  var lastFocusRef = Object(react__WEBPACK_IMPORTED_MODULE_7__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useImperativeHandle"])(ref, function () {
    return modal;
  }, [modal]);

  if (dom_helpers_canUseDOM__WEBPACK_IMPORTED_MODULE_4__["default"] && !prevShow && show) {
    lastFocusRef.current = Object(dom_helpers_activeElement__WEBPACK_IMPORTED_MODULE_2__["default"])();
  }

  if (!transition && !show && !exited) {
    setExited(true);
  } else if (show && exited) {
    setExited(false);
  }

  var handleShow = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(function () {
    modal.add(container, containerClassName);
    removeKeydownListenerRef.current = Object(dom_helpers_listen__WEBPACK_IMPORTED_MODULE_5__["default"])(document, 'keydown', handleDocumentKeyDown);
    removeFocusListenerRef.current = Object(dom_helpers_listen__WEBPACK_IMPORTED_MODULE_5__["default"])(document, 'focus', // the timeout is necessary b/c this will run before the new modal is mounted
    // and so steals focus from it
    function () {
      return setTimeout(handleEnforceFocus);
    }, true);

    if (onShow) {
      onShow();
    } // autofocus after onShow to not trigger a focus event for previous
    // modals before this one is shown.


    if (autoFocus) {
      var currentActiveElement = Object(dom_helpers_activeElement__WEBPACK_IMPORTED_MODULE_2__["default"])(document);

      if (modal.dialog && currentActiveElement && !Object(dom_helpers_contains__WEBPACK_IMPORTED_MODULE_3__["default"])(modal.dialog, currentActiveElement)) {
        lastFocusRef.current = currentActiveElement;
        modal.dialog.focus();
      }
    }
  });
  var handleHide = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(function () {
    modal.remove();
    removeKeydownListenerRef.current == null ? void 0 : removeKeydownListenerRef.current();
    removeFocusListenerRef.current == null ? void 0 : removeFocusListenerRef.current();

    if (restoreFocus) {
      var _lastFocusRef$current; // Support: <=IE11 doesn't support `focus()` on svg elements (RB: #917)


      (_lastFocusRef$current = lastFocusRef.current) == null ? void 0 : _lastFocusRef$current.focus == null ? void 0 : _lastFocusRef$current.focus(restoreFocusOptions);
      lastFocusRef.current = null;
    }
  }); // TODO: try and combine these effects: https://github.com/react-bootstrap/react-overlays/pull/794#discussion_r409954120
  // Show logic when:
  //  - show is `true` _and_ `container` has resolved

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    if (!show || !container) return;
    handleShow();
  }, [show, container,
  /* should never change: */
  handleShow]); // Hide cleanup logic when:
  //  - `exited` switches to true
  //  - component unmounts;

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    if (!exited) return;
    handleHide();
  }, [exited, handleHide]);
  Object(_restart_hooks_useWillUnmount__WEBPACK_IMPORTED_MODULE_10__["default"])(function () {
    handleHide();
  }); // --------------------------------

  var handleEnforceFocus = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(function () {
    if (!enforceFocus || !isMounted() || !modal.isTopModal()) {
      return;
    }

    var currentActiveElement = Object(dom_helpers_activeElement__WEBPACK_IMPORTED_MODULE_2__["default"])();

    if (modal.dialog && currentActiveElement && !Object(dom_helpers_contains__WEBPACK_IMPORTED_MODULE_3__["default"])(modal.dialog, currentActiveElement)) {
      modal.dialog.focus();
    }
  });
  var handleBackdropClick = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_12__["default"])(function (e) {
    if (e.target !== e.currentTarget) {
      return;
    }

    onBackdropClick == null ? void 0 : onBackdropClick(e);

    if (backdrop === true) {
      onHide();
    }
  });

  var handleDocumentKeyDown = function handleDocumentKeyDown(e) {
    if (keyboard && e.keyCode === 27 && modal.isTopModal()) {
      onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(e);
      onHide();
    }
  };

  var removeFocusListenerRef = Object(react__WEBPACK_IMPORTED_MODULE_7__["useRef"])();
  var removeKeydownListenerRef = Object(react__WEBPACK_IMPORTED_MODULE_7__["useRef"])();

  var handleHidden = function handleHidden() {
    setExited(true);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    onExited == null ? void 0 : onExited.apply(void 0, args);
  };

  var Transition = transition;

  if (!container || !(show || Transition && !exited)) {
    return null;
  }

  var dialogProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    role: role,
    ref: modal.setDialogRef,
    // apparently only works on the dialog role element
    'aria-modal': role === 'dialog' ? true : undefined
  }, rest, {
    style: style,
    className: className,
    tabIndex: -1
  });

  var dialog = renderDialog ? renderDialog(dialogProps) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", dialogProps, react__WEBPACK_IMPORTED_MODULE_7___default.a.cloneElement(children, {
    role: 'document'
  }));

  if (Transition) {
    dialog = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Transition, {
      appear: true,
      unmountOnExit: true,
      "in": !!show,
      onExit: onExit,
      onExiting: onExiting,
      onExited: handleHidden,
      onEnter: onEnter,
      onEntering: onEntering,
      onEntered: onEntered
    }, dialog);
  }

  var backdropElement = null;

  if (backdrop) {
    var BackdropTransition = backdropTransition;
    backdropElement = renderBackdrop({
      ref: modal.setBackdropRef,
      onClick: handleBackdropClick
    });

    if (BackdropTransition) {
      backdropElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(BackdropTransition, {
        appear: true,
        "in": !!show
      }, backdropElement);
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react_dom__WEBPACK_IMPORTED_MODULE_8___default.a.createPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, backdropElement, dialog), container));
});
var propTypes = {
  /**
   * Set the visibility of the Modal
   */
  show: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,

  /**
   * A DOM element, a `ref` to an element, or function that returns either. The Modal is appended to it's `container` element.
   *
   * For the sake of assistive technologies, the container should usually be the document body, so that the rest of the
   * page content can be placed behind a virtual backdrop as well as a visual one.
   */
  container: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any,

  /**
   * A callback fired when the Modal is opening.
   */
  onShow: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,

  /**
   * A callback fired when either the backdrop is clicked, or the escape key is pressed.
   *
   * The `onHide` callback only signals intent from the Modal,
   * you must actually set the `show` prop to `false` for the Modal to close.
   */
  onHide: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,

  /**
   * Include a backdrop component.
   */
  backdrop: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOf(['static'])]),

  /**
   * A function that returns the dialog component. Useful for custom
   * rendering. **Note:** the component should make sure to apply the provided ref.
   *
   * ```js static
   * renderDialog={props => <MyDialog {...props} />}
   * ```
   */
  renderDialog: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,

  /**
   * A function that returns a backdrop component. Useful for custom
   * backdrop rendering.
   *
   * ```js
   *  renderBackdrop={props => <MyBackdrop {...props} />}
   * ```
   */
  renderBackdrop: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,

  /**
   * A callback fired when the escape key, if specified in `keyboard`, is pressed.
   */
  onEscapeKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,

  /**
   * A callback fired when the backdrop, if specified, is clicked.
   */
  onBackdropClick: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,

  /**
   * A css class or set of classes applied to the modal container when the modal is open,
   * and removed when it is closed.
   */
  containerClassName: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,

  /**
   * Close the modal when escape key is pressed
   */
  keyboard: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,

  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component used
   * to control animations for the dialog component.
   */
  transition: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.elementType,

  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component used
   * to control animations for the backdrop components.
   */
  backdropTransition: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.elementType,

  /**
   * When `true` The modal will automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes. This also
   * works correctly with any Modal children that have the `autoFocus` prop.
   *
   * Generally this should never be set to `false` as it makes the Modal less
   * accessible to assistive technologies, like screen readers.
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,

  /**
   * When `true` The modal will prevent focus from leaving the Modal while open.
   *
   * Generally this should never be set to `false` as it makes the Modal less
   * accessible to assistive technologies, like screen readers.
   */
  enforceFocus: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,

  /**
   * When `true` The modal will restore focus to previously focused element once
   * modal is hidden
   */
  restoreFocus: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,

  /**
   * Options passed to focus function when `restoreFocus` is set to `true`
   *
   * @link  https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#Parameters
   */
  restoreFocusOptions: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape({
    preventScroll: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool
  }),

  /**
   * Callback fired before the Modal transitions in
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,

  /**
   * Callback fired as the Modal begins to transition in
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,

  /**
   * Callback fired after the Modal finishes transitioning in
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,

  /**
   * Callback fired right before the Modal transitions out
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,

  /**
   * Callback fired as the Modal begins to transition out
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,

  /**
   * Callback fired after the Modal finishes transitioning out
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,

  /**
   * A ModalManager instance used to track and manage the state of open
   * Modals. Useful when customizing how modals interact within a container
   */
  manager: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.instanceOf(_ModalManager__WEBPACK_IMPORTED_MODULE_13__["default"])
};
Modal.displayName = 'Modal';
Modal.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (Object.assign(Modal, {
  Manager: _ModalManager__WEBPACK_IMPORTED_MODULE_13__["default"]
}));

/***/ }),

/***/ "./node_modules/react-overlays/esm/ModalManager.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-overlays/esm/ModalManager.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-helpers/addClass */ "./node_modules/dom-helpers/esm/addClass.js");
/* harmony import */ var dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dom-helpers/removeClass */ "./node_modules/dom-helpers/esm/removeClass.js");
/* harmony import */ var dom_helpers_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dom-helpers/css */ "./node_modules/dom-helpers/esm/css.js");
/* harmony import */ var dom_helpers_scrollbarSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dom-helpers/scrollbarSize */ "./node_modules/dom-helpers/esm/scrollbarSize.js");
/* harmony import */ var _isOverflowing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isOverflowing */ "./node_modules/react-overlays/esm/isOverflowing.js");
/* harmony import */ var _manageAriaHidden__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manageAriaHidden */ "./node_modules/react-overlays/esm/manageAriaHidden.js");







function findIndexOf(arr, cb) {
  var idx = -1;
  arr.some(function (d, i) {
    if (cb(d, i)) {
      idx = i;
      return true;
    }

    return false;
  });
  return idx;
}
/**
 * Proper state management for containers and the modals in those containers.
 *
 * @internal Used by the Modal to ensure proper styling of containers.
 */


var ModalManager = /*#__PURE__*/function () {
  function ModalManager(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$hideSiblingNodes = _ref.hideSiblingNodes,
        hideSiblingNodes = _ref$hideSiblingNodes === void 0 ? true : _ref$hideSiblingNodes,
        _ref$handleContainerO = _ref.handleContainerOverflow,
        handleContainerOverflow = _ref$handleContainerO === void 0 ? true : _ref$handleContainerO;

    this.hideSiblingNodes = void 0;
    this.handleContainerOverflow = void 0;
    this.modals = void 0;
    this.containers = void 0;
    this.data = void 0;
    this.scrollbarSize = void 0;
    this.hideSiblingNodes = hideSiblingNodes;
    this.handleContainerOverflow = handleContainerOverflow;
    this.modals = [];
    this.containers = [];
    this.data = [];
    this.scrollbarSize = Object(dom_helpers_scrollbarSize__WEBPACK_IMPORTED_MODULE_3__["default"])();
  }

  var _proto = ModalManager.prototype;

  _proto.isContainerOverflowing = function isContainerOverflowing(modal) {
    var data = this.data[this.containerIndexFromModal(modal)];
    return data && data.overflowing;
  };

  _proto.containerIndexFromModal = function containerIndexFromModal(modal) {
    return findIndexOf(this.data, function (d) {
      return d.modals.indexOf(modal) !== -1;
    });
  };

  _proto.setContainerStyle = function setContainerStyle(containerState, container) {
    var style = {
      overflow: 'hidden'
    }; // we are only interested in the actual `style` here
    // because we will override it

    containerState.style = {
      overflow: container.style.overflow,
      paddingRight: container.style.paddingRight
    };

    if (containerState.overflowing) {
      // use computed style, here to get the real padding
      // to add our scrollbar width
      style.paddingRight = parseInt(Object(dom_helpers_css__WEBPACK_IMPORTED_MODULE_2__["default"])(container, 'paddingRight') || '0', 10) + this.scrollbarSize + "px";
    }

    Object(dom_helpers_css__WEBPACK_IMPORTED_MODULE_2__["default"])(container, style);
  };

  _proto.removeContainerStyle = function removeContainerStyle(containerState, container) {
    var style = containerState.style;
    Object.keys(style).forEach(function (key) {
      container.style[key] = style[key];
    });
  };

  _proto.add = function add(modal, container, className) {
    var modalIdx = this.modals.indexOf(modal);
    var containerIdx = this.containers.indexOf(container);

    if (modalIdx !== -1) {
      return modalIdx;
    }

    modalIdx = this.modals.length;
    this.modals.push(modal);

    if (this.hideSiblingNodes) {
      Object(_manageAriaHidden__WEBPACK_IMPORTED_MODULE_5__["hideSiblings"])(container, modal);
    }

    if (containerIdx !== -1) {
      this.data[containerIdx].modals.push(modal);
      return modalIdx;
    }

    var data = {
      modals: [modal],
      // right now only the first modal of a container will have its classes applied
      classes: className ? className.split(/\s+/) : [],
      overflowing: Object(_isOverflowing__WEBPACK_IMPORTED_MODULE_4__["default"])(container)
    };

    if (this.handleContainerOverflow) {
      this.setContainerStyle(data, container);
    }

    data.classes.forEach(dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_0__["default"].bind(null, container));
    this.containers.push(container);
    this.data.push(data);
    return modalIdx;
  };

  _proto.remove = function remove(modal) {
    var modalIdx = this.modals.indexOf(modal);

    if (modalIdx === -1) {
      return;
    }

    var containerIdx = this.containerIndexFromModal(modal);
    var data = this.data[containerIdx];
    var container = this.containers[containerIdx];
    data.modals.splice(data.modals.indexOf(modal), 1);
    this.modals.splice(modalIdx, 1); // if that was the last modal in a container,
    // clean up the container

    if (data.modals.length === 0) {
      data.classes.forEach(dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_1__["default"].bind(null, container));

      if (this.handleContainerOverflow) {
        this.removeContainerStyle(data, container);
      }

      if (this.hideSiblingNodes) {
        Object(_manageAriaHidden__WEBPACK_IMPORTED_MODULE_5__["showSiblings"])(container, modal);
      }

      this.containers.splice(containerIdx, 1);
      this.data.splice(containerIdx, 1);
    } else if (this.hideSiblingNodes) {
      // otherwise make sure the next top modal is visible to a SR
      var _data$modals = data.modals[data.modals.length - 1],
          backdrop = _data$modals.backdrop,
          dialog = _data$modals.dialog;
      Object(_manageAriaHidden__WEBPACK_IMPORTED_MODULE_5__["ariaHidden"])(false, dialog);
      Object(_manageAriaHidden__WEBPACK_IMPORTED_MODULE_5__["ariaHidden"])(false, backdrop);
    }
  };

  _proto.isTopModal = function isTopModal(modal) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
  };

  return ModalManager;
}();

/* harmony default export */ __webpack_exports__["default"] = (ModalManager);

/***/ }),

/***/ "./node_modules/react-overlays/esm/Overlay.js":
/*!****************************************************!*\
  !*** ./node_modules/react-overlays/esm/Overlay.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _restart_hooks_useCallbackRef__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @restart/hooks/useCallbackRef */ "./node_modules/@restart/hooks/esm/useCallbackRef.js");
/* harmony import */ var _restart_hooks_useMergedRefs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @restart/hooks/useMergedRefs */ "./node_modules/@restart/hooks/esm/useMergedRefs.js");
/* harmony import */ var _popper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popper */ "./node_modules/react-overlays/esm/popper.js");
/* harmony import */ var _usePopper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./usePopper */ "./node_modules/react-overlays/esm/usePopper.js");
/* harmony import */ var _useRootClose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useRootClose */ "./node_modules/react-overlays/esm/useRootClose.js");
/* harmony import */ var _useWaitForDOMRef__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./useWaitForDOMRef */ "./node_modules/react-overlays/esm/useWaitForDOMRef.js");











/**
 * Built on top of `Popper.js`, the overlay component is
 * great for custom tooltip overlays.
 */

var Overlay = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (props, outerRef) {
  var _modifiers$preventOve, _modifiers$arrow;

  var flip = props.flip,
      placement = props.placement,
      _props$containerPaddi = props.containerPadding,
      containerPadding = _props$containerPaddi === void 0 ? 5 : _props$containerPaddi,
      _props$popperConfig = props.popperConfig,
      popperConfig = _props$popperConfig === void 0 ? {} : _props$popperConfig,
      Transition = props.transition;

  var _useCallbackRef = Object(_restart_hooks_useCallbackRef__WEBPACK_IMPORTED_MODULE_5__["default"])(),
      rootElement = _useCallbackRef[0],
      attachRef = _useCallbackRef[1];

  var _useCallbackRef2 = Object(_restart_hooks_useCallbackRef__WEBPACK_IMPORTED_MODULE_5__["default"])(),
      arrowElement = _useCallbackRef2[0],
      attachArrowRef = _useCallbackRef2[1];

  var mergedRef = Object(_restart_hooks_useMergedRefs__WEBPACK_IMPORTED_MODULE_6__["default"])(attachRef, outerRef);
  var container = Object(_useWaitForDOMRef__WEBPACK_IMPORTED_MODULE_10__["default"])(props.container);
  var target = Object(_useWaitForDOMRef__WEBPACK_IMPORTED_MODULE_10__["default"])(props.target);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(!props.show),
      exited = _useState[0],
      setExited = _useState[1];

  var modifiers = Object(_usePopper__WEBPACK_IMPORTED_MODULE_8__["toModifierMap"])(popperConfig.modifiers);

  var _usePopper = Object(_usePopper__WEBPACK_IMPORTED_MODULE_8__["default"])(target, rootElement, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, popperConfig, {
    placement: placement || 'bottom',
    modifiers: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, modifiers, {
      eventListeners: {
        enabled: !!props.show
      },
      preventOverflow: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, modifiers.preventOverflow, {
        options: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          padding: containerPadding || 5
        }, (_modifiers$preventOve = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve.options)
      }),
      arrow: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, modifiers.arrow, {
        enabled: !!arrowElement,
        options: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, (_modifiers$arrow = modifiers.arrow) == null ? void 0 : _modifiers$arrow.options, {
          element: arrowElement
        })
      }),
      flip: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        enabled: !!flip
      }, modifiers.flip)
    })
  })),
      styles = _usePopper.styles,
      arrowStyles = _usePopper.arrowStyles,
      popper = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_usePopper, ["styles", "arrowStyles"]);

  if (props.show) {
    if (exited) setExited(false);
  } else if (!props.transition && !exited) {
    setExited(true);
  }

  var handleHidden = function handleHidden() {
    setExited(true);

    if (props.onExited) {
      props.onExited.apply(props, arguments);
    }
  }; // Don't un-render the overlay while it's transitioning out.


  var mountOverlay = props.show || Transition && !exited;
  Object(_useRootClose__WEBPACK_IMPORTED_MODULE_9__["default"])(rootElement, props.onHide, {
    disabled: !props.rootClose || props.rootCloseDisabled,
    clickTrigger: props.rootCloseEvent
  });

  if (!mountOverlay) {
    // Don't bother showing anything if we don't have to.
    return null;
  }

  var child = props.children(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, popper, {
    show: !!props.show,
    props: {
      style: styles,
      ref: mergedRef
    },
    arrowProps: {
      style: arrowStyles,
      ref: attachArrowRef
    }
  }));

  if (Transition) {
    var onExit = props.onExit,
        onExiting = props.onExiting,
        onEnter = props.onEnter,
        onEntering = props.onEntering,
        onEntered = props.onEntered;
    child = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Transition, {
      "in": props.show,
      appear: true,
      onExit: onExit,
      onExiting: onExiting,
      onExited: handleHidden,
      onEnter: onEnter,
      onEntering: onEntering,
      onEntered: onEntered
    }, child);
  }

  return container ? react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.createPortal(child, container) : null;
});
Overlay.displayName = 'Overlay';
Overlay.propTypes = {
  /**
   * Set the visibility of the Overlay
   */
  show: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /** Specify where the overlay element is positioned in relation to the target element */
  placement: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(_popper__WEBPACK_IMPORTED_MODULE_7__["placements"]),

  /**
   * A DOM Element, Ref to an element, or function that returns either. The `target` element is where
   * the overlay is positioned relative to.
   */
  target: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,

  /**
   * A DOM Element, Ref to an element, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,

  /**
   * Enables the Popper.js `flip` modifier, allowing the Overlay to
   * automatically adjust it's placement in case of overlap with the viewport or toggle.
   * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
   */
  flip: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * A render prop that returns an element to overlay and position. See
   * the [react-popper documentation](https://github.com/FezVrasta/react-popper#children) for more info.
   *
   * @type {Function ({
   *   show: boolean,
   *   placement: Placement,
   *   outOfBoundaries: ?boolean,
   *   scheduleUpdate: () => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     aria-labelledby: ?string
   *   },
   *   arrowProps: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *   },
   * }) => React.Element}
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,

  /**
   * Control how much space there is between the edge of the boundary element and overlay.
   * A convenience shortcut to setting `popperConfig.modfiers.preventOverflow.padding`
   */
  containerPadding: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,

  /**
   * A set of popper options and props passed directly to react-popper's Popper component.
   */
  popperConfig: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay
   */
  rootClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Specify event for toggling overlay
   */
  rootCloseEvent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['click', 'mousedown']),

  /**
   * Specify disabled for disable RootCloseWrapper
   */
  rootCloseDisabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * A Callback fired by the Overlay when it wishes to be hidden.
   *
   * __required__ when `rootClose` is `true`.
   *
   * @type func
   */
  onHide: function onHide(props) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (props.rootClose) {
      var _PropTypes$func;

      return (_PropTypes$func = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func).isRequired.apply(_PropTypes$func, [props].concat(args));
    }

    return prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.apply(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a, [props].concat(args));
  },

  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component
   * used to animate the overlay as it changes visibility.
   */
  // @ts-ignore
  transition: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType,

  /**
   * Callback fired before the Overlay transitions in
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired as the Overlay begins to transition in
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the Overlay finishes transitioning in
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired right before the Overlay transitions out
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired as the Overlay begins to transition out
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the Overlay finishes transitioning out
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Overlay);

/***/ }),

/***/ "./node_modules/react-overlays/esm/isOverflowing.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-overlays/esm/isOverflowing.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isOverflowing; });
/* harmony import */ var dom_helpers_isWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-helpers/isWindow */ "./node_modules/dom-helpers/esm/isWindow.js");
/* harmony import */ var dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dom-helpers/ownerDocument */ "./node_modules/dom-helpers/esm/ownerDocument.js");



function isBody(node) {
  return node && node.tagName.toLowerCase() === 'body';
}

function bodyIsOverflowing(node) {
  var doc = Object(dom_helpers_isWindow__WEBPACK_IMPORTED_MODULE_0__["default"])(node) ? Object(dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_1__["default"])() : Object(dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_1__["default"])(node);
  var win = Object(dom_helpers_isWindow__WEBPACK_IMPORTED_MODULE_0__["default"])(node) || doc.defaultView;
  return doc.body.clientWidth < win.innerWidth;
}

function isOverflowing(container) {
  var win = Object(dom_helpers_isWindow__WEBPACK_IMPORTED_MODULE_0__["default"])(container);
  return win || isBody(container) ? bodyIsOverflowing(container) : container.scrollHeight > container.clientHeight;
}

/***/ }),

/***/ "./node_modules/react-overlays/esm/manageAriaHidden.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-overlays/esm/manageAriaHidden.js ***!
  \*************************************************************/
/*! exports provided: ariaHidden, hideSiblings, showSiblings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ariaHidden", function() { return ariaHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideSiblings", function() { return hideSiblings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSiblings", function() { return showSiblings; });
var BLACKLIST = ['template', 'script', 'style'];

var isHidable = function isHidable(_ref) {
  var nodeType = _ref.nodeType,
      tagName = _ref.tagName;
  return nodeType === 1 && BLACKLIST.indexOf(tagName.toLowerCase()) === -1;
};

var siblings = function siblings(container, exclude, cb) {
  [].forEach.call(container.children, function (node) {
    if (exclude.indexOf(node) === -1 && isHidable(node)) {
      cb(node);
    }
  });
};

function ariaHidden(show, node) {
  if (!node) return;

  if (show) {
    node.setAttribute('aria-hidden', 'true');
  } else {
    node.removeAttribute('aria-hidden');
  }
}
function hideSiblings(container, _ref2) {
  var dialog = _ref2.dialog,
      backdrop = _ref2.backdrop;
  siblings(container, [dialog, backdrop], function (node) {
    return ariaHidden(true, node);
  });
}
function showSiblings(container, _ref3) {
  var dialog = _ref3.dialog,
      backdrop = _ref3.backdrop;
  siblings(container, [dialog, backdrop], function (node) {
    return ariaHidden(false, node);
  });
}

/***/ }),

/***/ "./node_modules/react-overlays/esm/ownerDocument.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-overlays/esm/ownerDocument.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-helpers/ownerDocument */ "./node_modules/dom-helpers/esm/ownerDocument.js");
/* harmony import */ var _safeFindDOMNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./safeFindDOMNode */ "./node_modules/react-overlays/esm/safeFindDOMNode.js");


/* harmony default export */ __webpack_exports__["default"] = (function (componentOrElement) {
  return Object(dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_safeFindDOMNode__WEBPACK_IMPORTED_MODULE_1__["default"])(componentOrElement));
});

/***/ }),

/***/ "./node_modules/react-overlays/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/react-overlays/esm/popper.js ***!
  \***************************************************/
/*! exports provided: createPopper, placements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopper", function() { return createPopper; });
/* harmony import */ var _popperjs_core_lib_modifiers_arrow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @popperjs/core/lib/modifiers/arrow */ "./node_modules/@popperjs/core/lib/modifiers/arrow.js");
/* harmony import */ var _popperjs_core_lib_modifiers_computeStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @popperjs/core/lib/modifiers/computeStyles */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _popperjs_core_lib_modifiers_eventListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @popperjs/core/lib/modifiers/eventListeners */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _popperjs_core_lib_modifiers_flip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @popperjs/core/lib/modifiers/flip */ "./node_modules/@popperjs/core/lib/modifiers/flip.js");
/* harmony import */ var _popperjs_core_lib_modifiers_hide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @popperjs/core/lib/modifiers/hide */ "./node_modules/@popperjs/core/lib/modifiers/hide.js");
/* harmony import */ var _popperjs_core_lib_modifiers_offset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @popperjs/core/lib/modifiers/offset */ "./node_modules/@popperjs/core/lib/modifiers/offset.js");
/* harmony import */ var _popperjs_core_lib_modifiers_popperOffsets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @popperjs/core/lib/modifiers/popperOffsets */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _popperjs_core_lib_modifiers_preventOverflow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @popperjs/core/lib/modifiers/preventOverflow */ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js");
/* harmony import */ var _popperjs_core_lib_enums__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @popperjs/core/lib/enums */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return _popperjs_core_lib_enums__WEBPACK_IMPORTED_MODULE_8__["placements"]; });

/* harmony import */ var _popperjs_core_lib_popper_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @popperjs/core/lib/popper-base */ "./node_modules/@popperjs/core/lib/popper-base.js");









 // For the common JS build we will turn this file into a bundle with no imports.
// This is b/c the Popper lib is all esm files, and would break in a common js only environment

var createPopper = Object(_popperjs_core_lib_popper_base__WEBPACK_IMPORTED_MODULE_9__["popperGenerator"])({
  defaultModifiers: [_popperjs_core_lib_modifiers_hide__WEBPACK_IMPORTED_MODULE_4__["default"], _popperjs_core_lib_modifiers_popperOffsets__WEBPACK_IMPORTED_MODULE_6__["default"], _popperjs_core_lib_modifiers_computeStyles__WEBPACK_IMPORTED_MODULE_1__["default"], _popperjs_core_lib_modifiers_eventListeners__WEBPACK_IMPORTED_MODULE_2__["default"], _popperjs_core_lib_modifiers_offset__WEBPACK_IMPORTED_MODULE_5__["default"], _popperjs_core_lib_modifiers_flip__WEBPACK_IMPORTED_MODULE_3__["default"], _popperjs_core_lib_modifiers_preventOverflow__WEBPACK_IMPORTED_MODULE_7__["default"], _popperjs_core_lib_modifiers_arrow__WEBPACK_IMPORTED_MODULE_0__["default"]]
});


/***/ }),

/***/ "./node_modules/react-overlays/esm/safeFindDOMNode.js":
/*!************************************************************!*\
  !*** ./node_modules/react-overlays/esm/safeFindDOMNode.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return safeFindDOMNode; });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);

function safeFindDOMNode(componentOrElement) {
  if (componentOrElement && 'setState' in componentOrElement) {
    return react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.findDOMNode(componentOrElement);
  }

  return componentOrElement != null ? componentOrElement : null;
}

/***/ }),

/***/ "./node_modules/react-overlays/esm/usePopper.js":
/*!******************************************************!*\
  !*** ./node_modules/react-overlays/esm/usePopper.js ***!
  \******************************************************/
/*! exports provided: toModifierMap, toModifierArray, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toModifierMap", function() { return toModifierMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toModifierArray", function() { return toModifierArray; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _restart_hooks_useSafeState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @restart/hooks/useSafeState */ "./node_modules/@restart/hooks/esm/useSafeState.js");
/* harmony import */ var _popper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popper */ "./node_modules/react-overlays/esm/popper.js");





var initialPopperStyles = {
  position: 'absolute',
  top: '0',
  left: '0',
  opacity: '0',
  pointerEvents: 'none'
};
var initialArrowStyles = {}; // until docjs supports type exports...

function toModifierMap(modifiers) {
  var result = {};

  if (!Array.isArray(modifiers)) {
    return modifiers || result;
  } // eslint-disable-next-line no-unused-expressions


  modifiers == null ? void 0 : modifiers.forEach(function (m) {
    result[m.name] = m;
  });
  return result;
}
function toModifierArray(map) {
  if (map === void 0) {
    map = {};
  }

  if (Array.isArray(map)) return map;
  return Object.keys(map).map(function (k) {
    map[k].name = k;
    return map[k];
  });
}
/**
 * Position an element relative some reference element using Popper.js
 *
 * @param referenceElement
 * @param popperElement
 * @param {object}      options
 * @param {object=}     options.modifiers Popper.js modifiers
 * @param {boolean=}    options.enabled toggle the popper functionality on/off
 * @param {string=}     options.placement The popper element placement relative to the reference element
 * @param {string=}     options.strategy the positioning strategy
 * @param {boolean=}    options.eventsEnabled have Popper listen on window resize events to reposition the element
 * @param {function=}   options.onCreate called when the popper is created
 * @param {function=}   options.onUpdate called when the popper is updated
 *
 * @returns {UsePopperState} The popper state
 */

function usePopper(referenceElement, popperElement, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$enabled = _ref.enabled,
      enabled = _ref$enabled === void 0 ? true : _ref$enabled,
      _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? 'bottom' : _ref$placement,
      _ref$strategy = _ref.strategy,
      strategy = _ref$strategy === void 0 ? 'absolute' : _ref$strategy,
      _ref$eventsEnabled = _ref.eventsEnabled,
      eventsEnabled = _ref$eventsEnabled === void 0 ? true : _ref$eventsEnabled,
      userModifiers = _ref.modifiers,
      popperOptions = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["enabled", "placement", "strategy", "eventsEnabled", "modifiers"]);

  var popperInstanceRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var scheduleUpdate = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    if (popperInstanceRef.current) {
      popperInstanceRef.current.update();
    }
  }, []);

  var _useSafeState = Object(_restart_hooks_useSafeState__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    placement: placement,
    scheduleUpdate: scheduleUpdate,
    outOfBoundaries: false,
    styles: initialPopperStyles,
    arrowStyles: initialArrowStyles
  })),
      state = _useSafeState[0],
      setState = _useSafeState[1];

  var updateModifier = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return {
      name: 'updateStateModifier',
      enabled: true,
      phase: 'afterWrite',
      requires: ['computeStyles'],
      fn: function fn(data) {
        var _data$state$modifiers, _data$state$styles, _data$state$styles2;

        setState({
          scheduleUpdate: scheduleUpdate,
          outOfBoundaries: !!((_data$state$modifiers = data.state.modifiersData.hide) == null ? void 0 : _data$state$modifiers.isReferenceHidden),
          placement: data.state.placement,
          styles: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, (_data$state$styles = data.state.styles) == null ? void 0 : _data$state$styles.popper),
          arrowStyles: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, (_data$state$styles2 = data.state.styles) == null ? void 0 : _data$state$styles2.arrow),
          state: data.state
        });
      }
    };
  }, [scheduleUpdate, setState]);
  var modifiers = toModifierArray(userModifiers);
  var eventsModifier = modifiers.find(function (m) {
    return m.name === 'eventListeners';
  });

  if (!eventsModifier && eventsEnabled) {
    eventsModifier = {
      name: 'eventListeners',
      enabled: true
    };
    modifiers = [].concat(modifiers, [eventsModifier]);
  } // A placement difference in state means popper determined a new placement
  // apart from the props value. By the time the popper element is rendered with
  // the new position Popper has already measured it, if the place change triggers
  // a size change it will result in a misaligned popper. So we schedule an update to be sure.


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    scheduleUpdate();
  }, [state.placement, scheduleUpdate]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!popperInstanceRef.current || !enabled) return;
    popperInstanceRef.current.setOptions({
      placement: placement,
      strategy: strategy,
      modifiers: [].concat(modifiers, [updateModifier])
    }); // intentionally NOT re-running on new modifiers
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [strategy, placement, eventsModifier.enabled, updateModifier, enabled]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!enabled || referenceElement == null || popperElement == null) {
      return undefined;
    }

    popperInstanceRef.current = Object(_popper__WEBPACK_IMPORTED_MODULE_4__["createPopper"])(referenceElement, popperElement, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, popperOptions, {
      placement: placement,
      strategy: strategy,
      modifiers: [].concat(modifiers, [updateModifier])
    }));
    return function () {
      if (popperInstanceRef.current != null) {
        popperInstanceRef.current.destroy();
        popperInstanceRef.current = undefined;
        setState(function (s) {
          return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, s, {
            styles: initialPopperStyles,
            arrowStyles: initialArrowStyles
          });
        });
      }
    }; // This is only run once to _create_ the popper
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, referenceElement, popperElement]);
  return state;
}

/* harmony default export */ __webpack_exports__["default"] = (usePopper);

/***/ }),

/***/ "./node_modules/react-overlays/esm/useRootClose.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-overlays/esm/useRootClose.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dom_helpers_contains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-helpers/contains */ "./node_modules/dom-helpers/esm/contains.js");
/* harmony import */ var dom_helpers_listen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dom-helpers/listen */ "./node_modules/dom-helpers/esm/listen.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @restart/hooks/useEventCallback */ "./node_modules/@restart/hooks/esm/useEventCallback.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ownerDocument__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ownerDocument */ "./node_modules/react-overlays/esm/ownerDocument.js");






var escapeKeyCode = 27;

var noop = function noop() {};

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var getRefTarget = function getRefTarget(ref) {
  return ref && ('current' in ref ? ref.current : ref);
};
/**
 * The `useRootClose` hook registers your callback on the document
 * when rendered. Powers the `<Overlay/>` component. This is used achieve modal
 * style behavior where your callback is triggered when the user tries to
 * interact with the rest of the document or hits the `esc` key.
 *
 * @param {Ref<HTMLElement>| HTMLElement} ref  The element boundary
 * @param {function} onRootClose
 * @param {object=}  options
 * @param {boolean=} options.disabled
 * @param {string=}  options.clickTrigger The DOM event name (click, mousedown, etc) to attach listeners on
 */


function useRootClose(ref, onRootClose, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      disabled = _ref.disabled,
      _ref$clickTrigger = _ref.clickTrigger,
      clickTrigger = _ref$clickTrigger === void 0 ? 'click' : _ref$clickTrigger;

  var preventMouseRootCloseRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(false);
  var onClose = onRootClose || noop;
  var handleMouseCapture = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    var currentTarget = getRefTarget(ref);
    warning__WEBPACK_IMPORTED_MODULE_4___default()(!!currentTarget, 'RootClose captured a close event but does not have a ref to compare it to. ' + 'useRootClose(), should be passed a ref that resolves to a DOM node');
    preventMouseRootCloseRef.current = !currentTarget || isModifiedEvent(e) || !isLeftClickEvent(e) || !!Object(dom_helpers_contains__WEBPACK_IMPORTED_MODULE_0__["default"])(currentTarget, e.target);
  }, [ref]);
  var handleMouse = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_3__["default"])(function (e) {
    if (!preventMouseRootCloseRef.current) {
      onClose(e);
    }
  });
  var handleKeyUp = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_3__["default"])(function (e) {
    if (e.keyCode === escapeKeyCode) {
      onClose(e);
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (disabled || ref == null) return undefined;
    var doc = Object(_ownerDocument__WEBPACK_IMPORTED_MODULE_5__["default"])(getRefTarget(ref)); // Use capture for this listener so it fires before React's listener, to
    // avoid false positives in the contains() check below if the target DOM
    // element is removed in the React mouse callback.

    var removeMouseCaptureListener = Object(dom_helpers_listen__WEBPACK_IMPORTED_MODULE_1__["default"])(doc, clickTrigger, handleMouseCapture, true);
    var removeMouseListener = Object(dom_helpers_listen__WEBPACK_IMPORTED_MODULE_1__["default"])(doc, clickTrigger, handleMouse);
    var removeKeyupListener = Object(dom_helpers_listen__WEBPACK_IMPORTED_MODULE_1__["default"])(doc, 'keyup', handleKeyUp);
    var mobileSafariHackListeners = [];

    if ('ontouchstart' in doc.documentElement) {
      mobileSafariHackListeners = [].slice.call(doc.body.children).map(function (el) {
        return Object(dom_helpers_listen__WEBPACK_IMPORTED_MODULE_1__["default"])(el, 'mousemove', noop);
      });
    }

    return function () {
      removeMouseCaptureListener();
      removeMouseListener();
      removeKeyupListener();
      mobileSafariHackListeners.forEach(function (remove) {
        return remove();
      });
    };
  }, [ref, disabled, clickTrigger, handleMouseCapture, handleMouse, handleKeyUp]);
}

/* harmony default export */ __webpack_exports__["default"] = (useRootClose);

/***/ }),

/***/ "./node_modules/react-overlays/esm/useWaitForDOMRef.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-overlays/esm/useWaitForDOMRef.js ***!
  \*************************************************************/
/*! exports provided: resolveContainerRef, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveContainerRef", function() { return resolveContainerRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useWaitForDOMRef; });
/* harmony import */ var dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-helpers/ownerDocument */ "./node_modules/dom-helpers/esm/ownerDocument.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var resolveContainerRef = function resolveContainerRef(ref) {
  var _ref;

  if (typeof document === 'undefined') return null;
  if (ref == null) return Object(dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_0__["default"])().body;
  if (typeof ref === 'function') ref = ref();
  if (ref && 'current' in ref) ref = ref.current;
  if ((_ref = ref) == null ? void 0 : _ref.nodeType) return ref || null;
  return null;
};
function useWaitForDOMRef(ref, onResolved) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(function () {
    return resolveContainerRef(ref);
  }),
      resolvedRef = _useState[0],
      setRef = _useState[1];

  if (!resolvedRef) {
    var earlyRef = resolveContainerRef(ref);
    if (earlyRef) setRef(earlyRef);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (onResolved && resolvedRef) {
      onResolved(resolvedRef);
    }
  }, [onResolved, resolvedRef]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var nextRef = resolveContainerRef(ref);

    if (nextRef !== resolvedRef) {
      setRef(nextRef);
    }
  }, [ref, resolvedRef]);
  return resolvedRef;
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdmVuZG9ycy9yZWFjdC1vdmVybGF5cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1vdmVybGF5cy9lc20vRHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW92ZXJsYXlzL2VzbS9Ecm9wZG93bkNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW92ZXJsYXlzL2VzbS9Ecm9wZG93bk1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW92ZXJsYXlzL2VzbS9Ecm9wZG93blRvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtb3ZlcmxheXMvZXNtL01vZGFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1vdmVybGF5cy9lc20vTW9kYWxNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1vdmVybGF5cy9lc20vT3ZlcmxheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtb3ZlcmxheXMvZXNtL2lzT3ZlcmZsb3dpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW92ZXJsYXlzL2VzbS9tYW5hZ2VBcmlhSGlkZGVuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1vdmVybGF5cy9lc20vb3duZXJEb2N1bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtb3ZlcmxheXMvZXNtL3BvcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtb3ZlcmxheXMvZXNtL3NhZmVGaW5kRE9NTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtb3ZlcmxheXMvZXNtL3VzZVBvcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtb3ZlcmxheXMvZXNtL3VzZVJvb3RDbG9zZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtb3ZlcmxheXMvZXNtL3VzZVdhaXRGb3JET01SZWYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1hdGNoZXMgZnJvbSAnZG9tLWhlbHBlcnMvbWF0Y2hlcyc7XG5pbXBvcnQgcXNhIGZyb20gJ2RvbS1oZWxwZXJzL3F1ZXJ5U2VsZWN0b3JBbGwnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB1c2VVbmNvbnRyb2xsZWRQcm9wIH0gZnJvbSAndW5jb250cm9sbGFibGUnO1xuaW1wb3J0IHVzZVByZXZpb3VzIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZVByZXZpb3VzJztcbmltcG9ydCB1c2VDYWxsYmFja1JlZiBmcm9tICdAcmVzdGFydC9ob29rcy91c2VDYWxsYmFja1JlZic7XG5pbXBvcnQgdXNlRm9yY2VVcGRhdGUgZnJvbSAnQHJlc3RhcnQvaG9va3MvdXNlRm9yY2VVcGRhdGUnO1xuaW1wb3J0IHVzZUV2ZW50Q2FsbGJhY2sgZnJvbSAnQHJlc3RhcnQvaG9va3MvdXNlRXZlbnRDYWxsYmFjayc7XG5pbXBvcnQgRHJvcGRvd25Db250ZXh0IGZyb20gJy4vRHJvcGRvd25Db250ZXh0JztcbmltcG9ydCBEcm9wZG93bk1lbnUgZnJvbSAnLi9Ecm9wZG93bk1lbnUnO1xuaW1wb3J0IERyb3Bkb3duVG9nZ2xlIGZyb20gJy4vRHJvcGRvd25Ub2dnbGUnO1xudmFyIHByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEEgcmVuZGVyIHByb3AgdGhhdCByZXR1cm5zIHRoZSByb290IGRyb3Bkb3duIGVsZW1lbnQuIFRoZSBgcHJvcHNgXG4gICAqIGFyZ3VtZW50IHNob3VsZCBzcHJlYWQgdGhyb3VnaCB0byBhbiBlbGVtZW50IGNvbnRhaW5pbmcgX2JvdGhfIHRoZVxuICAgKiBtZW51IGFuZCB0b2dnbGUgaW4gb3JkZXIgdG8gaGFuZGxlIGtleWJvYXJkIGV2ZW50cyBmb3IgZm9jdXMgbWFuYWdlbWVudC5cbiAgICpcbiAgICogQHR5cGUge0Z1bmN0aW9uICh7XG4gICAqICAgcHJvcHM6IHtcbiAgICogICAgIG9uS2V5RG93bjogKFN5bnRoZXRpY0V2ZW50KSA9PiB2b2lkLFxuICAgKiAgIH0sXG4gICAqIH0pID0+IFJlYWN0LkVsZW1lbnR9XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB0aGUgZGlyZWN0aW9uIGFuZCBsb2NhdGlvbiBvZiB0aGUgTWVudSBpbiByZWxhdGlvbiB0byBpdCdzIFRvZ2dsZS5cbiAgICovXG4gIGRyb3A6IFByb3BUeXBlcy5vbmVPZihbJ3VwJywgJ2xlZnQnLCAncmlnaHQnLCAnZG93biddKSxcblxuICAvKipcbiAgICogQ29udHJvbHMgdGhlIGZvY3VzIGJlaGF2aW9yIGZvciB3aGVuIHRoZSBEcm9wZG93biBpcyBvcGVuZWQuIFNldCB0b1xuICAgKiBgdHJ1ZWAgdG8gYWx3YXlzIGZvY3VzIHRoZSBmaXJzdCBtZW51IGl0ZW0sIGBrZXlib2FyZGAgdG8gZm9jdXMgb25seSB3aGVuXG4gICAqIG5hdmlnYXRpbmcgdmlhIHRoZSBrZXlib2FyZCwgb3IgYGZhbHNlYCB0byBkaXNhYmxlIGNvbXBsZXRlbHlcbiAgICpcbiAgICogVGhlIERlZmF1bHQgYmVoYXZpb3IgaXMgYGZhbHNlYCAqKnVubGVzcyoqIHRoZSBNZW51IGhhcyBhIGByb2xlPVwibWVudVwiYFxuICAgKiB3aGVyZSBpdCB3aWxsIGRlZmF1bHQgdG8gYGtleWJvYXJkYCB0byBtYXRjaCB0aGUgcmVjb21tZW5kZWQgW0FSSUEgQXV0aG9yaW5nIHByYWN0aWNlc10oaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLXByYWN0aWNlcy0xLjEvI21lbnVidXR0b24pLlxuICAgKi9cbiAgZm9jdXNGaXJzdEl0ZW1PblNob3c6IFByb3BUeXBlcy5vbmVPZihbZmFsc2UsIHRydWUsICdrZXlib2FyZCddKSxcblxuICAvKipcbiAgICogQSBjc3Mgc2xlY3RvciBzdHJpbmcgdGhhdCB3aWxsIHJldHVybiBfX2ZvY3VzYWJsZV9fIG1lbnUgaXRlbXMuXG4gICAqIFNlbGVjdG9ycyBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIG1lbnUgY29tcG9uZW50OlxuICAgKiBlLmcuIGAgPiBsaTpub3QoJy5kaXNhYmxlZCcpYFxuICAgKi9cbiAgaXRlbVNlbGVjdG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBBbGlnbiB0aGUgbWVudSB0byB0aGUgJ2VuZCcgc2lkZSBvZiB0aGUgcGxhY2VtZW50IHNpZGUgb2YgdGhlIERyb3Bkb3duIHRvZ2dsZS4gVGhlIGRlZmF1bHQgcGxhY2VtZW50IGlzIGB0b3Atc3RhcnRgIG9yIGBib3R0b20tc3RhcnRgLlxuICAgKi9cbiAgYWxpZ25FbmQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgRHJvcGRvd24gaXMgdmlzaWJsZS5cbiAgICpcbiAgICogQGNvbnRyb2xsYWJsZSBvblRvZ2dsZVxuICAgKi9cbiAgc2hvdzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluaXRpYWwgc2hvdyBwb3NpdGlvbiBvZiB0aGUgRHJvcGRvd24uXG4gICAqL1xuICBkZWZhdWx0U2hvdzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEEgY2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgRHJvcGRvd24gd2lzaGVzIHRvIGNoYW5nZSB2aXNpYmlsaXR5LiBDYWxsZWQgd2l0aCB0aGUgcmVxdWVzdGVkXG4gICAqIGBzaG93YCB2YWx1ZSwgdGhlIERPTSBldmVudCwgYW5kIHRoZSBzb3VyY2UgdGhhdCBmaXJlZCBpdDogYCdjbGljaydgLGAna2V5ZG93bidgLGAncm9vdENsb3NlJ2AsIG9yIGAnc2VsZWN0J2AuXG4gICAqXG4gICAqIGBgYHRzIHN0YXRpY1xuICAgKiBmdW5jdGlvbihcbiAgICogICBpc09wZW46IGJvb2xlYW4sXG4gICAqICAgZXZlbnQ6IFN5bnRoZXRpY0V2ZW50LFxuICAgKiApOiB2b2lkXG4gICAqIGBgYFxuICAgKlxuICAgKiBAY29udHJvbGxhYmxlIHNob3dcbiAgICovXG4gIG9uVG9nZ2xlOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuLyoqXG4gKiBAZGlzcGxheU5hbWUgRHJvcGRvd25cbiAqL1xuZnVuY3Rpb24gRHJvcGRvd24oX3JlZikge1xuICB2YXIgZHJvcCA9IF9yZWYuZHJvcCxcbiAgICAgIGFsaWduRW5kID0gX3JlZi5hbGlnbkVuZCxcbiAgICAgIGRlZmF1bHRTaG93ID0gX3JlZi5kZWZhdWx0U2hvdyxcbiAgICAgIHJhd1Nob3cgPSBfcmVmLnNob3csXG4gICAgICByYXdPblRvZ2dsZSA9IF9yZWYub25Ub2dnbGUsXG4gICAgICBfcmVmJGl0ZW1TZWxlY3RvciA9IF9yZWYuaXRlbVNlbGVjdG9yLFxuICAgICAgaXRlbVNlbGVjdG9yID0gX3JlZiRpdGVtU2VsZWN0b3IgPT09IHZvaWQgMCA/ICcqID4gKicgOiBfcmVmJGl0ZW1TZWxlY3RvcixcbiAgICAgIGZvY3VzRmlyc3RJdGVtT25TaG93ID0gX3JlZi5mb2N1c0ZpcnN0SXRlbU9uU2hvdyxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbjtcbiAgdmFyIGZvcmNlVXBkYXRlID0gdXNlRm9yY2VVcGRhdGUoKTtcblxuICB2YXIgX3VzZVVuY29udHJvbGxlZFByb3AgPSB1c2VVbmNvbnRyb2xsZWRQcm9wKHJhd1Nob3csIGRlZmF1bHRTaG93LCByYXdPblRvZ2dsZSksXG4gICAgICBzaG93ID0gX3VzZVVuY29udHJvbGxlZFByb3BbMF0sXG4gICAgICBvblRvZ2dsZSA9IF91c2VVbmNvbnRyb2xsZWRQcm9wWzFdO1xuXG4gIHZhciBfdXNlQ2FsbGJhY2tSZWYgPSB1c2VDYWxsYmFja1JlZigpLFxuICAgICAgdG9nZ2xlRWxlbWVudCA9IF91c2VDYWxsYmFja1JlZlswXSxcbiAgICAgIHNldFRvZ2dsZSA9IF91c2VDYWxsYmFja1JlZlsxXTsgLy8gV2UgdXNlIG5vcm1hbCByZWZzIGluc3RlYWQgb2YgdXNlQ2FsbGJhY2tSZWYgaW4gb3JkZXIgdG8gcG9wdWxhdGUgdGhlXG4gIC8vIHRoZSB2YWx1ZSBhcyBxdWlja2x5IGFzIHBvc3NpYmxlLCBvdGhlcndpc2UgdGhlIGVmZmVjdCB0byBmb2N1cyB0aGUgZWxlbWVudFxuICAvLyBtYXkgcnVuIGJlZm9yZSB0aGUgc3RhdGUgdmFsdWUgaXMgc2V0XG5cblxuICB2YXIgbWVudVJlZiA9IHVzZVJlZihudWxsKTtcbiAgdmFyIG1lbnVFbGVtZW50ID0gbWVudVJlZi5jdXJyZW50O1xuICB2YXIgc2V0TWVudSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChyZWYpIHtcbiAgICBtZW51UmVmLmN1cnJlbnQgPSByZWY7IC8vIGVuc3VyZSB0aGF0IGEgbWVudSBzZXQgdHJpZ2dlcnMgYW4gdXBkYXRlIGZvciBjb25zdW1lcnNcblxuICAgIGZvcmNlVXBkYXRlKCk7XG4gIH0sIFtmb3JjZVVwZGF0ZV0pO1xuICB2YXIgbGFzdFNob3cgPSB1c2VQcmV2aW91cyhzaG93KTtcbiAgdmFyIGxhc3RTb3VyY2VFdmVudCA9IHVzZVJlZihudWxsKTtcbiAgdmFyIGZvY3VzSW5Ecm9wZG93biA9IHVzZVJlZihmYWxzZSk7XG4gIHZhciB0b2dnbGUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBvblRvZ2dsZSghc2hvdywgZXZlbnQpO1xuICB9LCBbb25Ub2dnbGUsIHNob3ddKTtcbiAgdmFyIGNvbnRleHQgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG9nZ2xlOiB0b2dnbGUsXG4gICAgICBkcm9wOiBkcm9wLFxuICAgICAgc2hvdzogc2hvdyxcbiAgICAgIGFsaWduRW5kOiBhbGlnbkVuZCxcbiAgICAgIG1lbnVFbGVtZW50OiBtZW51RWxlbWVudCxcbiAgICAgIHRvZ2dsZUVsZW1lbnQ6IHRvZ2dsZUVsZW1lbnQsXG4gICAgICBzZXRNZW51OiBzZXRNZW51LFxuICAgICAgc2V0VG9nZ2xlOiBzZXRUb2dnbGVcbiAgICB9O1xuICB9LCBbdG9nZ2xlLCBkcm9wLCBzaG93LCBhbGlnbkVuZCwgbWVudUVsZW1lbnQsIHRvZ2dsZUVsZW1lbnQsIHNldE1lbnUsIHNldFRvZ2dsZV0pO1xuXG4gIGlmIChtZW51RWxlbWVudCAmJiBsYXN0U2hvdyAmJiAhc2hvdykge1xuICAgIGZvY3VzSW5Ecm9wZG93bi5jdXJyZW50ID0gbWVudUVsZW1lbnQuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gIH1cblxuICB2YXIgZm9jdXNUb2dnbGUgPSB1c2VFdmVudENhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodG9nZ2xlRWxlbWVudCAmJiB0b2dnbGVFbGVtZW50LmZvY3VzKSB7XG4gICAgICB0b2dnbGVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9KTtcbiAgdmFyIG1heWJlRm9jdXNGaXJzdCA9IHVzZUV2ZW50Q2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHZhciB0eXBlID0gbGFzdFNvdXJjZUV2ZW50LmN1cnJlbnQ7XG4gICAgdmFyIGZvY3VzVHlwZSA9IGZvY3VzRmlyc3RJdGVtT25TaG93O1xuXG4gICAgaWYgKGZvY3VzVHlwZSA9PSBudWxsKSB7XG4gICAgICBmb2N1c1R5cGUgPSBtZW51UmVmLmN1cnJlbnQgJiYgbWF0Y2hlcyhtZW51UmVmLmN1cnJlbnQsICdbcm9sZT1tZW51XScpID8gJ2tleWJvYXJkJyA6IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChmb2N1c1R5cGUgPT09IGZhbHNlIHx8IGZvY3VzVHlwZSA9PT0gJ2tleWJvYXJkJyAmJiAhL15rZXkuKyQvLnRlc3QodHlwZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgZmlyc3QgPSBxc2EobWVudVJlZi5jdXJyZW50LCBpdGVtU2VsZWN0b3IpWzBdO1xuICAgIGlmIChmaXJzdCAmJiBmaXJzdC5mb2N1cykgZmlyc3QuZm9jdXMoKTtcbiAgfSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNob3cpIG1heWJlRm9jdXNGaXJzdCgpO2Vsc2UgaWYgKGZvY3VzSW5Ecm9wZG93bi5jdXJyZW50KSB7XG4gICAgICBmb2N1c0luRHJvcGRvd24uY3VycmVudCA9IGZhbHNlO1xuICAgICAgZm9jdXNUb2dnbGUoKTtcbiAgICB9IC8vIG9ubHkgYHNob3dgIHNob3VsZCBiZSBjaGFuZ2luZ1xuICB9LCBbc2hvdywgZm9jdXNJbkRyb3Bkb3duLCBmb2N1c1RvZ2dsZSwgbWF5YmVGb2N1c0ZpcnN0XSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgbGFzdFNvdXJjZUV2ZW50LmN1cnJlbnQgPSBudWxsO1xuICB9KTtcblxuICB2YXIgZ2V0TmV4dEZvY3VzZWRDaGlsZCA9IGZ1bmN0aW9uIGdldE5leHRGb2N1c2VkQ2hpbGQoY3VycmVudCwgb2Zmc2V0KSB7XG4gICAgaWYgKCFtZW51UmVmLmN1cnJlbnQpIHJldHVybiBudWxsO1xuICAgIHZhciBpdGVtcyA9IHFzYShtZW51UmVmLmN1cnJlbnQsIGl0ZW1TZWxlY3Rvcik7XG4gICAgdmFyIGluZGV4ID0gaXRlbXMuaW5kZXhPZihjdXJyZW50KSArIG9mZnNldDtcbiAgICBpbmRleCA9IE1hdGgubWF4KDAsIE1hdGgubWluKGluZGV4LCBpdGVtcy5sZW5ndGgpKTtcbiAgICByZXR1cm4gaXRlbXNbaW5kZXhdO1xuICB9O1xuXG4gIHZhciBoYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gaGFuZGxlS2V5RG93bihldmVudCkge1xuICAgIHZhciBrZXkgPSBldmVudC5rZXk7XG4gICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDsgLy8gU2Vjb25kIG9ubHkgdG8gaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvOGNmYmY2OTMzYjhhMDE0NmFjM2ZiYzM2OWYxOWU1MjBiZDFlYmRhYy9qcy9zcmMvZHJvcGRvd24uanMjTDQwMFxuICAgIC8vIGluIGluc2NydXRhYmlsaXR5XG5cbiAgICB2YXIgaXNJbnB1dCA9IC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QodGFyZ2V0LnRhZ05hbWUpO1xuXG4gICAgaWYgKGlzSW5wdXQgJiYgKGtleSA9PT0gJyAnIHx8IGtleSAhPT0gJ0VzY2FwZScgJiYgbWVudVJlZi5jdXJyZW50ICYmIG1lbnVSZWYuY3VycmVudC5jb250YWlucyh0YXJnZXQpKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxhc3RTb3VyY2VFdmVudC5jdXJyZW50ID0gZXZlbnQudHlwZTtcblxuICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBuZXh0ID0gZ2V0TmV4dEZvY3VzZWRDaGlsZCh0YXJnZXQsIC0xKTtcbiAgICAgICAgICBpZiAobmV4dCAmJiBuZXh0LmZvY3VzKSBuZXh0LmZvY3VzKCk7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAoIXNob3cpIHtcbiAgICAgICAgICB0b2dnbGUoZXZlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBfbmV4dCA9IGdldE5leHRGb2N1c2VkQ2hpbGQodGFyZ2V0LCAxKTtcblxuICAgICAgICAgIGlmIChfbmV4dCAmJiBfbmV4dC5mb2N1cykgX25leHQuZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcblxuICAgICAgY2FzZSAnRXNjYXBlJzpcbiAgICAgIGNhc2UgJ1RhYic6XG4gICAgICAgIG9uVG9nZ2xlKGZhbHNlLCBldmVudCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRHJvcGRvd25Db250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGNvbnRleHRcbiAgfSwgY2hpbGRyZW4oe1xuICAgIHByb3BzOiB7XG4gICAgICBvbktleURvd246IGhhbmRsZUtleURvd25cbiAgICB9XG4gIH0pKTtcbn1cblxuRHJvcGRvd24uZGlzcGxheU5hbWUgPSAnUmVhY3RPdmVybGF5c0Ryb3Bkb3duJztcbkRyb3Bkb3duLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbkRyb3Bkb3duLk1lbnUgPSBEcm9wZG93bk1lbnU7XG5Ecm9wZG93bi5Ub2dnbGUgPSBEcm9wZG93blRvZ2dsZTtcbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG52YXIgRHJvcGRvd25Db250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duQ29udGV4dDsiLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlQ2FsbGJhY2tSZWYgZnJvbSAnQHJlc3RhcnQvaG9va3MvdXNlQ2FsbGJhY2tSZWYnO1xuaW1wb3J0IERyb3Bkb3duQ29udGV4dCBmcm9tICcuL0Ryb3Bkb3duQ29udGV4dCc7XG5pbXBvcnQgdXNlUG9wcGVyLCB7IHRvTW9kaWZpZXJNYXAgfSBmcm9tICcuL3VzZVBvcHBlcic7XG5pbXBvcnQgdXNlUm9vdENsb3NlIGZyb20gJy4vdXNlUm9vdENsb3NlJztcblxudmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKCkge307XG4vKipcbiAqIEBtZW1iZXJPZiBEcm9wZG93blxuICogQHBhcmFtIHtvYmplY3R9ICBvcHRpb25zXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMuZmxpcCBBdXRvbWF0aWNhbGx5IGFkanVzdCB0aGUgbWVudSBgZHJvcGAgcG9zaXRpb24gYmFzZWQgb24gdmlld3BvcnQgZWRnZSBkZXRlY3Rpb25cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5zaG93IERpc3BsYXkgdGhlIG1lbnUgbWFudWFsbHksIGlnbm9yZWQgaW4gdGhlIGNvbnRleHQgb2YgYSBgRHJvcGRvd25gXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMudXNlUG9wcGVyIG9wdCBpbi9vdXQgb2YgdXNpbmcgUG9wcGVySlMgdG8gcG9zaXRpb24gbWVudXMuIFdoZW4gZGlzYWJsZWQgeW91IG11c3QgcG9zaXRpb24gaXQgeW91cnNlbGYuXG4gKiBAcGFyYW0ge3N0cmluZ30gIG9wdGlvbnMucm9vdENsb3NlRXZlbnQgVGhlIHBvaW50ZXIgZXZlbnQgdG8gbGlzdGVuIGZvciB3aGVuIGRldGVybWluaW5nIFwiY2xpY2tzIG91dHNpZGVcIiB0aGUgbWVudSBmb3IgdHJpZ2dlcmluZyBhIGNsb3NlLlxuICogQHBhcmFtIHtvYmplY3R9ICBvcHRpb25zLnBvcHBlckNvbmZpZyBPcHRpb25zIHBhc3NlZCB0byB0aGUgW2B1c2VQb3BwZXJgXSgvYXBpL3VzZVBvcHBlcikgaG9vay5cbiAqL1xuXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VEcm9wZG93bk1lbnUob3B0aW9ucykge1xuICB2YXIgX21vZGlmaWVycyRhcnJvdztcblxuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIGNvbnRleHQgPSB1c2VDb250ZXh0KERyb3Bkb3duQ29udGV4dCk7XG5cbiAgdmFyIF91c2VDYWxsYmFja1JlZiA9IHVzZUNhbGxiYWNrUmVmKCksXG4gICAgICBhcnJvd0VsZW1lbnQgPSBfdXNlQ2FsbGJhY2tSZWZbMF0sXG4gICAgICBhdHRhY2hBcnJvd1JlZiA9IF91c2VDYWxsYmFja1JlZlsxXTtcblxuICB2YXIgaGFzU2hvd25SZWYgPSB1c2VSZWYoZmFsc2UpO1xuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgZmxpcCA9IF9vcHRpb25zLmZsaXAsXG4gICAgICByb290Q2xvc2VFdmVudCA9IF9vcHRpb25zLnJvb3RDbG9zZUV2ZW50LFxuICAgICAgX29wdGlvbnMkcG9wcGVyQ29uZmlnID0gX29wdGlvbnMucG9wcGVyQ29uZmlnLFxuICAgICAgcG9wcGVyQ29uZmlnID0gX29wdGlvbnMkcG9wcGVyQ29uZmlnID09PSB2b2lkIDAgPyB7fSA6IF9vcHRpb25zJHBvcHBlckNvbmZpZyxcbiAgICAgIF9vcHRpb25zJHVzZVBvcHBlciA9IF9vcHRpb25zLnVzZVBvcHBlcixcbiAgICAgIHNob3VsZFVzZVBvcHBlciA9IF9vcHRpb25zJHVzZVBvcHBlciA9PT0gdm9pZCAwID8gISFjb250ZXh0IDogX29wdGlvbnMkdXNlUG9wcGVyO1xuICB2YXIgc2hvdyA9IChjb250ZXh0ID09IG51bGwgPyB2b2lkIDAgOiBjb250ZXh0LnNob3cpID09IG51bGwgPyBvcHRpb25zLnNob3cgOiBjb250ZXh0LnNob3c7XG4gIHZhciBhbGlnbkVuZCA9IChjb250ZXh0ID09IG51bGwgPyB2b2lkIDAgOiBjb250ZXh0LmFsaWduRW5kKSA9PSBudWxsID8gb3B0aW9ucy5hbGlnbkVuZCA6IGNvbnRleHQuYWxpZ25FbmQ7XG5cbiAgaWYgKHNob3cgJiYgIWhhc1Nob3duUmVmLmN1cnJlbnQpIHtcbiAgICBoYXNTaG93blJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgfVxuXG4gIHZhciBoYW5kbGVDbG9zZSA9IGZ1bmN0aW9uIGhhbmRsZUNsb3NlKGUpIHtcbiAgICBjb250ZXh0ID09IG51bGwgPyB2b2lkIDAgOiBjb250ZXh0LnRvZ2dsZShmYWxzZSwgZSk7XG4gIH07XG5cbiAgdmFyIF9yZWYgPSBjb250ZXh0IHx8IHt9LFxuICAgICAgZHJvcCA9IF9yZWYuZHJvcCxcbiAgICAgIHNldE1lbnUgPSBfcmVmLnNldE1lbnUsXG4gICAgICBtZW51RWxlbWVudCA9IF9yZWYubWVudUVsZW1lbnQsXG4gICAgICB0b2dnbGVFbGVtZW50ID0gX3JlZi50b2dnbGVFbGVtZW50O1xuXG4gIHZhciBwbGFjZW1lbnQgPSBhbGlnbkVuZCA/ICdib3R0b20tZW5kJyA6ICdib3R0b20tc3RhcnQnO1xuICBpZiAoZHJvcCA9PT0gJ3VwJykgcGxhY2VtZW50ID0gYWxpZ25FbmQgPyAndG9wLWVuZCcgOiAndG9wLXN0YXJ0JztlbHNlIGlmIChkcm9wID09PSAncmlnaHQnKSBwbGFjZW1lbnQgPSBhbGlnbkVuZCA/ICdyaWdodC1lbmQnIDogJ3JpZ2h0LXN0YXJ0JztlbHNlIGlmIChkcm9wID09PSAnbGVmdCcpIHBsYWNlbWVudCA9IGFsaWduRW5kID8gJ2xlZnQtZW5kJyA6ICdsZWZ0LXN0YXJ0JztcbiAgdmFyIG1vZGlmaWVycyA9IHRvTW9kaWZpZXJNYXAocG9wcGVyQ29uZmlnLm1vZGlmaWVycyk7XG4gIHZhciBwb3BwZXIgPSB1c2VQb3BwZXIodG9nZ2xlRWxlbWVudCwgbWVudUVsZW1lbnQsIF9leHRlbmRzKHt9LCBwb3BwZXJDb25maWcsIHtcbiAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICBlbmFibGVkOiAhIShzaG91bGRVc2VQb3BwZXIgJiYgc2hvdyksXG4gICAgbW9kaWZpZXJzOiBfZXh0ZW5kcyh7fSwgbW9kaWZpZXJzLCB7XG4gICAgICBldmVudExpc3RlbmVyczoge1xuICAgICAgICBlbmFibGVkOiAhIXNob3dcbiAgICAgIH0sXG4gICAgICBhcnJvdzogX2V4dGVuZHMoe30sIG1vZGlmaWVycy5hcnJvdywge1xuICAgICAgICBlbmFibGVkOiAhIWFycm93RWxlbWVudCxcbiAgICAgICAgb3B0aW9uczogX2V4dGVuZHMoe30sIChfbW9kaWZpZXJzJGFycm93ID0gbW9kaWZpZXJzLmFycm93KSA9PSBudWxsID8gdm9pZCAwIDogX21vZGlmaWVycyRhcnJvdy5vcHRpb25zLCB7XG4gICAgICAgICAgZWxlbWVudDogYXJyb3dFbGVtZW50XG4gICAgICAgIH0pXG4gICAgICB9KSxcbiAgICAgIGZsaXA6IF9leHRlbmRzKHtcbiAgICAgICAgZW5hYmxlZDogISFmbGlwXG4gICAgICB9LCBtb2RpZmllcnMuZmxpcClcbiAgICB9KVxuICB9KSk7XG4gIHZhciBtZW51O1xuICB2YXIgbWVudVByb3BzID0ge1xuICAgIHJlZjogc2V0TWVudSB8fCBub29wLFxuICAgICdhcmlhLWxhYmVsbGVkYnknOiB0b2dnbGVFbGVtZW50ID09IG51bGwgPyB2b2lkIDAgOiB0b2dnbGVFbGVtZW50LmlkXG4gIH07XG4gIHZhciBjaGlsZEFyZ3MgPSB7XG4gICAgc2hvdzogc2hvdyxcbiAgICBhbGlnbkVuZDogYWxpZ25FbmQsXG4gICAgaGFzU2hvd246IGhhc1Nob3duUmVmLmN1cnJlbnQsXG4gICAgY2xvc2U6IGhhbmRsZUNsb3NlXG4gIH07XG5cbiAgaWYgKCFzaG91bGRVc2VQb3BwZXIpIHtcbiAgICBtZW51ID0gX2V4dGVuZHMoe30sIGNoaWxkQXJncywge1xuICAgICAgcHJvcHM6IG1lbnVQcm9wc1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG1lbnUgPSBfZXh0ZW5kcyh7fSwgcG9wcGVyLCB7fSwgY2hpbGRBcmdzLCB7XG4gICAgICBwcm9wczogX2V4dGVuZHMoe30sIG1lbnVQcm9wcywge1xuICAgICAgICBzdHlsZTogcG9wcGVyLnN0eWxlc1xuICAgICAgfSksXG4gICAgICBhcnJvd1Byb3BzOiB7XG4gICAgICAgIHJlZjogYXR0YWNoQXJyb3dSZWYsXG4gICAgICAgIHN0eWxlOiBwb3BwZXIuYXJyb3dTdHlsZXNcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVzZVJvb3RDbG9zZShtZW51RWxlbWVudCwgaGFuZGxlQ2xvc2UsIHtcbiAgICBjbGlja1RyaWdnZXI6IHJvb3RDbG9zZUV2ZW50LFxuICAgIGRpc2FibGVkOiAhKG1lbnUgJiYgc2hvdylcbiAgfSk7XG4gIHJldHVybiBtZW51O1xufVxudmFyIHByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEEgcmVuZGVyIHByb3AgdGhhdCByZXR1cm5zIGEgTWVudSBlbGVtZW50LiBUaGUgYHByb3BzYFxuICAgKiBhcmd1bWVudCBzaG91bGQgc3ByZWFkIHRocm91Z2ggdG8gKiphIGNvbXBvbmVudCB0aGF0IGNhbiBhY2NlcHQgYSByZWYqKi5cbiAgICpcbiAgICogQHR5cGUge0Z1bmN0aW9uICh7XG4gICAqICAgc2hvdzogYm9vbGVhbixcbiAgICogICBhbGlnbkVuZDogYm9vbGVhbixcbiAgICogICBjbG9zZTogKD9TeW50aGV0aWNFdmVudCkgPT4gdm9pZCxcbiAgICogICBwbGFjZW1lbnQ6IFBsYWNlbWVudCxcbiAgICogICBvdXRPZkJvdW5kYXJpZXM6ID9ib29sZWFuLFxuICAgKiAgIHNjaGVkdWxlVXBkYXRlOiAoKSA9PiB2b2lkLFxuICAgKiAgIHByb3BzOiB7XG4gICAqICAgICByZWY6ICg/SFRNTEVsZW1lbnQpID0+IHZvaWQsXG4gICAqICAgICBzdHlsZTogeyBbc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyIH0sXG4gICAqICAgICBhcmlhLWxhYmVsbGVkYnk6ID9zdHJpbmdcbiAgICogICB9LFxuICAgKiAgIGFycm93UHJvcHM6IHtcbiAgICogICAgIHJlZjogKD9IVE1MRWxlbWVudCkgPT4gdm9pZCxcbiAgICogICAgIHN0eWxlOiB7IFtzdHJpbmddOiBzdHJpbmcgfCBudW1iZXIgfSxcbiAgICogICB9LFxuICAgKiB9KSA9PiBSZWFjdC5FbGVtZW50fVxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIENvbnRyb2xzIHRoZSB2aXNpYmxlIHN0YXRlIG9mIHRoZSBtZW51LCBnZW5lcmFsbHkgdGhpcyBpc1xuICAgKiBwcm92aWRlZCBieSB0aGUgcGFyZW50IGBEcm9wZG93bmAgY29tcG9uZW50LFxuICAgKiBidXQgbWF5IGFsc28gYmUgc3BlY2lmaWVkIGFzIGEgcHJvcCBkaXJlY3RseS5cbiAgICovXG4gIHNob3c6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBBbGlnbnMgdGhlIGRyb3Bkb3duIG1lbnUgdG8gdGhlICdlbmQnIG9mIGl0J3MgcGxhY2VtZW50IHBvc2l0aW9uLlxuICAgKiBHZW5lcmFsbHkgdGhpcyBpcyBwcm92aWRlZCBieSB0aGUgcGFyZW50IGBEcm9wZG93bmAgY29tcG9uZW50LFxuICAgKiBidXQgbWF5IGFsc28gYmUgc3BlY2lmaWVkIGFzIGEgcHJvcCBkaXJlY3RseS5cbiAgICovXG4gIGFsaWduRW5kOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgUG9wcGVyLmpzIGBmbGlwYCBtb2RpZmllciwgYWxsb3dpbmcgdGhlIERyb3Bkb3duIHRvXG4gICAqIGF1dG9tYXRpY2FsbHkgYWRqdXN0IGl0J3MgcGxhY2VtZW50IGluIGNhc2Ugb2Ygb3ZlcmxhcCB3aXRoIHRoZSB2aWV3cG9ydCBvciB0b2dnbGUuXG4gICAqIFJlZmVyIHRvIHRoZSBbZmxpcCBkb2NzXShodHRwczovL3BvcHBlci5qcy5vcmcvcG9wcGVyLWRvY3VtZW50YXRpb24uaHRtbCNtb2RpZmllcnMuLmZsaXAuZW5hYmxlZCkgZm9yIG1vcmUgaW5mb1xuICAgKi9cbiAgZmxpcDogUHJvcFR5cGVzLmJvb2wsXG4gIHVzZVBvcHBlcjogUHJvcFR5cGVzLm9uZU9mKFt0cnVlLCBmYWxzZV0pLFxuXG4gIC8qKlxuICAgKiBBIHNldCBvZiBwb3BwZXIgb3B0aW9ucyBhbmQgcHJvcHMgcGFzc2VkIGRpcmVjdGx5IHRvIHJlYWN0LXBvcHBlcidzIFBvcHBlciBjb21wb25lbnQuXG4gICAqL1xuICBwb3BwZXJDb25maWc6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBkZWZhdWx0IGV2ZW50IHVzZWQgYnkgUm9vdENsb3NlV3JhcHBlci5cbiAgICovXG4gIHJvb3RDbG9zZUV2ZW50OiBQcm9wVHlwZXMuc3RyaW5nXG59O1xudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgdXNlUG9wcGVyOiB0cnVlXG59O1xuXG4vKipcbiAqIEFsc28gZXhwb3J0ZWQgYXMgYDxEcm9wZG93bi5NZW51PmAgZnJvbSBgRHJvcGRvd25gLlxuICpcbiAqIEBkaXNwbGF5TmFtZSBEcm9wZG93bk1lbnVcbiAqIEBtZW1iZXJPZiBEcm9wZG93blxuICovXG5mdW5jdGlvbiBEcm9wZG93bk1lbnUoX3JlZjIpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZjIuY2hpbGRyZW4sXG4gICAgICBvcHRpb25zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjIsIFtcImNoaWxkcmVuXCJdKTtcblxuICB2YXIgYXJncyA9IHVzZURyb3Bkb3duTWVudShvcHRpb25zKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBhcmdzLmhhc1Nob3duID8gY2hpbGRyZW4oYXJncykgOiBudWxsKTtcbn1cblxuRHJvcGRvd25NZW51LmRpc3BsYXlOYW1lID0gJ1JlYWN0T3ZlcmxheXNEcm9wZG93bk1lbnUnO1xuRHJvcGRvd25NZW51LnByb3BUeXBlcyA9IHByb3BUeXBlcztcbkRyb3Bkb3duTWVudS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG4vKiogQGNvbXBvbmVudCAqL1xuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bk1lbnU7IiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IERyb3Bkb3duQ29udGV4dCBmcm9tICcuL0Ryb3Bkb3duQ29udGV4dCc7XG5cbnZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuLyoqXG4gKiBXaXJlcyB1cCBEcm9wZG93biB0b2dnbGUgZnVuY3Rpb25hbGl0eSwgcmV0dXJuaW5nIGEgc2V0IGEgcHJvcHMgdG8gYXR0YWNoXG4gKiB0byB0aGUgZWxlbWVudCB0aGF0IGZ1bmN0aW9ucyBhcyB0aGUgZHJvcGRvd24gdG9nZ2xlIChnZW5lcmFsbHkgYSBidXR0b24pLlxuICpcbiAqIEBtZW1iZXJPZiBEcm9wZG93blxuICovXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZURyb3Bkb3duVG9nZ2xlKCkge1xuICB2YXIgX3JlZiA9IHVzZUNvbnRleHQoRHJvcGRvd25Db250ZXh0KSB8fCB7fSxcbiAgICAgIF9yZWYkc2hvdyA9IF9yZWYuc2hvdyxcbiAgICAgIHNob3cgPSBfcmVmJHNob3cgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRzaG93LFxuICAgICAgX3JlZiR0b2dnbGUgPSBfcmVmLnRvZ2dsZSxcbiAgICAgIHRvZ2dsZSA9IF9yZWYkdG9nZ2xlID09PSB2b2lkIDAgPyBub29wIDogX3JlZiR0b2dnbGUsXG4gICAgICBzZXRUb2dnbGUgPSBfcmVmLnNldFRvZ2dsZTtcblxuICByZXR1cm4gW3tcbiAgICByZWY6IHNldFRvZ2dsZSB8fCBub29wLFxuICAgICdhcmlhLWhhc3BvcHVwJzogdHJ1ZSxcbiAgICAnYXJpYS1leHBhbmRlZCc6ICEhc2hvd1xuICB9LCB7XG4gICAgc2hvdzogc2hvdyxcbiAgICB0b2dnbGU6IHRvZ2dsZVxuICB9XTtcbn1cbnZhciBwcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBBIHJlbmRlciBwcm9wIHRoYXQgcmV0dXJucyBhIFRvZ2dsZSBlbGVtZW50LiBUaGUgYHByb3BzYFxuICAgKiBhcmd1bWVudCBzaG91bGQgc3ByZWFkIHRocm91Z2ggdG8gKiphIGNvbXBvbmVudCB0aGF0IGNhbiBhY2NlcHQgYSByZWYqKi4gVXNlXG4gICAqIHRoZSBgb25Ub2dnbGVgIGFyZ3VtZW50IHRvIHRvZ2dsZSB0aGUgbWVudSBvcGVuIG9yIGNsb3NlZFxuICAgKlxuICAgKiBAdHlwZSB7RnVuY3Rpb24gKHtcbiAgICogICBzaG93OiBib29sZWFuLFxuICAgKiAgIHRvZ2dsZTogKHNob3c6IGJvb2xlYW4pID0+IHZvaWQsXG4gICAqICAgcHJvcHM6IHtcbiAgICogICAgIHJlZjogKD9IVE1MRWxlbWVudCkgPT4gdm9pZCxcbiAgICogICAgIGFyaWEtaGFzcG9wdXA6IHRydWVcbiAgICogICAgIGFyaWEtZXhwYW5kZWQ6IGJvb2xlYW5cbiAgICogICB9LFxuICAgKiB9KSA9PiBSZWFjdC5FbGVtZW50fVxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbi8qKlxuICogQWxzbyBleHBvcnRlZCBhcyBgPERyb3Bkb3duLlRvZ2dsZT5gIGZyb20gYERyb3Bkb3duYC5cbiAqXG4gKiBAZGlzcGxheU5hbWUgRHJvcGRvd25Ub2dnbGVcbiAqIEBtZW1iZXJPZiBEcm9wZG93blxuICovXG5mdW5jdGlvbiBEcm9wZG93blRvZ2dsZShfcmVmMikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmMi5jaGlsZHJlbjtcblxuICB2YXIgX3VzZURyb3Bkb3duVG9nZ2xlID0gdXNlRHJvcGRvd25Ub2dnbGUoKSxcbiAgICAgIHByb3BzID0gX3VzZURyb3Bkb3duVG9nZ2xlWzBdLFxuICAgICAgX3VzZURyb3Bkb3duVG9nZ2xlJCA9IF91c2VEcm9wZG93blRvZ2dsZVsxXSxcbiAgICAgIHNob3cgPSBfdXNlRHJvcGRvd25Ub2dnbGUkLnNob3csXG4gICAgICB0b2dnbGUgPSBfdXNlRHJvcGRvd25Ub2dnbGUkLnRvZ2dsZTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIGNoaWxkcmVuKHtcbiAgICBzaG93OiBzaG93LFxuICAgIHRvZ2dsZTogdG9nZ2xlLFxuICAgIHByb3BzOiBwcm9wc1xuICB9KSk7XG59XG5cbkRyb3Bkb3duVG9nZ2xlLmRpc3BsYXlOYW1lID0gJ1JlYWN0T3ZlcmxheXNEcm9wZG93blRvZ2dsZSc7XG5Ecm9wZG93blRvZ2dsZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG4vKiogQGNvbXBvbmVudCAqL1xuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93blRvZ2dsZTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cblxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xuaW1wb3J0IGFjdGl2ZUVsZW1lbnQgZnJvbSAnZG9tLWhlbHBlcnMvYWN0aXZlRWxlbWVudCc7XG5pbXBvcnQgY29udGFpbnMgZnJvbSAnZG9tLWhlbHBlcnMvY29udGFpbnMnO1xuaW1wb3J0IGNhblVzZURPTSBmcm9tICdkb20taGVscGVycy9jYW5Vc2VET00nO1xuaW1wb3J0IGxpc3RlbiBmcm9tICdkb20taGVscGVycy9saXN0ZW4nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VDYWxsYmFjaywgdXNlSW1wZXJhdGl2ZUhhbmRsZSwgZm9yd2FyZFJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgdXNlTW91bnRlZCBmcm9tICdAcmVzdGFydC9ob29rcy91c2VNb3VudGVkJztcbmltcG9ydCB1c2VXaWxsVW5tb3VudCBmcm9tICdAcmVzdGFydC9ob29rcy91c2VXaWxsVW5tb3VudCc7XG5pbXBvcnQgdXNlUHJldmlvdXMgZnJvbSAnQHJlc3RhcnQvaG9va3MvdXNlUHJldmlvdXMnO1xuaW1wb3J0IHVzZUV2ZW50Q2FsbGJhY2sgZnJvbSAnQHJlc3RhcnQvaG9va3MvdXNlRXZlbnRDYWxsYmFjayc7XG5pbXBvcnQgTW9kYWxNYW5hZ2VyIGZyb20gJy4vTW9kYWxNYW5hZ2VyJztcbmltcG9ydCB1c2VXYWl0Rm9yRE9NUmVmIGZyb20gJy4vdXNlV2FpdEZvckRPTVJlZic7XG52YXIgbWFuYWdlcjtcblxuZnVuY3Rpb24gZ2V0TWFuYWdlcigpIHtcbiAgaWYgKCFtYW5hZ2VyKSBtYW5hZ2VyID0gbmV3IE1vZGFsTWFuYWdlcigpO1xuICByZXR1cm4gbWFuYWdlcjtcbn1cblxuZnVuY3Rpb24gdXNlTW9kYWxNYW5hZ2VyKHByb3ZpZGVkKSB7XG4gIHZhciBtb2RhbE1hbmFnZXIgPSBwcm92aWRlZCB8fCBnZXRNYW5hZ2VyKCk7XG4gIHZhciBtb2RhbCA9IHVzZVJlZih7XG4gICAgZGlhbG9nOiBudWxsLFxuICAgIGJhY2tkcm9wOiBudWxsXG4gIH0pO1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihtb2RhbC5jdXJyZW50LCB7XG4gICAgYWRkOiBmdW5jdGlvbiBhZGQoY29udGFpbmVyLCBjbGFzc05hbWUpIHtcbiAgICAgIHJldHVybiBtb2RhbE1hbmFnZXIuYWRkKG1vZGFsLmN1cnJlbnQsIGNvbnRhaW5lciwgY2xhc3NOYW1lKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmV0dXJuIG1vZGFsTWFuYWdlci5yZW1vdmUobW9kYWwuY3VycmVudCk7XG4gICAgfSxcbiAgICBpc1RvcE1vZGFsOiBmdW5jdGlvbiBpc1RvcE1vZGFsKCkge1xuICAgICAgcmV0dXJuIG1vZGFsTWFuYWdlci5pc1RvcE1vZGFsKG1vZGFsLmN1cnJlbnQpO1xuICAgIH0sXG4gICAgc2V0RGlhbG9nUmVmOiB1c2VDYWxsYmFjayhmdW5jdGlvbiAocmVmKSB7XG4gICAgICBtb2RhbC5jdXJyZW50LmRpYWxvZyA9IHJlZjtcbiAgICB9LCBbXSksXG4gICAgc2V0QmFja2Ryb3BSZWY6IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIG1vZGFsLmN1cnJlbnQuYmFja2Ryb3AgPSByZWY7XG4gICAgfSwgW10pXG4gIH0pO1xufVxuXG52YXIgTW9kYWwgPSBmb3J3YXJkUmVmKGZ1bmN0aW9uIChfcmVmLCByZWYpIHtcbiAgdmFyIF9yZWYkc2hvdyA9IF9yZWYuc2hvdyxcbiAgICAgIHNob3cgPSBfcmVmJHNob3cgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRzaG93LFxuICAgICAgX3JlZiRyb2xlID0gX3JlZi5yb2xlLFxuICAgICAgcm9sZSA9IF9yZWYkcm9sZSA9PT0gdm9pZCAwID8gJ2RpYWxvZycgOiBfcmVmJHJvbGUsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIHN0eWxlID0gX3JlZi5zdHlsZSxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIF9yZWYkYmFja2Ryb3AgPSBfcmVmLmJhY2tkcm9wLFxuICAgICAgYmFja2Ryb3AgPSBfcmVmJGJhY2tkcm9wID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZiRiYWNrZHJvcCxcbiAgICAgIF9yZWYka2V5Ym9hcmQgPSBfcmVmLmtleWJvYXJkLFxuICAgICAga2V5Ym9hcmQgPSBfcmVmJGtleWJvYXJkID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZiRrZXlib2FyZCxcbiAgICAgIG9uQmFja2Ryb3BDbGljayA9IF9yZWYub25CYWNrZHJvcENsaWNrLFxuICAgICAgb25Fc2NhcGVLZXlEb3duID0gX3JlZi5vbkVzY2FwZUtleURvd24sXG4gICAgICB0cmFuc2l0aW9uID0gX3JlZi50cmFuc2l0aW9uLFxuICAgICAgYmFja2Ryb3BUcmFuc2l0aW9uID0gX3JlZi5iYWNrZHJvcFRyYW5zaXRpb24sXG4gICAgICBfcmVmJGF1dG9Gb2N1cyA9IF9yZWYuYXV0b0ZvY3VzLFxuICAgICAgYXV0b0ZvY3VzID0gX3JlZiRhdXRvRm9jdXMgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmJGF1dG9Gb2N1cyxcbiAgICAgIF9yZWYkZW5mb3JjZUZvY3VzID0gX3JlZi5lbmZvcmNlRm9jdXMsXG4gICAgICBlbmZvcmNlRm9jdXMgPSBfcmVmJGVuZm9yY2VGb2N1cyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWYkZW5mb3JjZUZvY3VzLFxuICAgICAgX3JlZiRyZXN0b3JlRm9jdXMgPSBfcmVmLnJlc3RvcmVGb2N1cyxcbiAgICAgIHJlc3RvcmVGb2N1cyA9IF9yZWYkcmVzdG9yZUZvY3VzID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZiRyZXN0b3JlRm9jdXMsXG4gICAgICByZXN0b3JlRm9jdXNPcHRpb25zID0gX3JlZi5yZXN0b3JlRm9jdXNPcHRpb25zLFxuICAgICAgcmVuZGVyRGlhbG9nID0gX3JlZi5yZW5kZXJEaWFsb2csXG4gICAgICBfcmVmJHJlbmRlckJhY2tkcm9wID0gX3JlZi5yZW5kZXJCYWNrZHJvcCxcbiAgICAgIHJlbmRlckJhY2tkcm9wID0gX3JlZiRyZW5kZXJCYWNrZHJvcCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHByb3BzKTtcbiAgfSA6IF9yZWYkcmVuZGVyQmFja2Ryb3AsXG4gICAgICBwcm92aWRlZE1hbmFnZXIgPSBfcmVmLm1hbmFnZXIsXG4gICAgICBjb250YWluZXJSZWYgPSBfcmVmLmNvbnRhaW5lcixcbiAgICAgIGNvbnRhaW5lckNsYXNzTmFtZSA9IF9yZWYuY29udGFpbmVyQ2xhc3NOYW1lLFxuICAgICAgb25TaG93ID0gX3JlZi5vblNob3csXG4gICAgICBfcmVmJG9uSGlkZSA9IF9yZWYub25IaWRlLFxuICAgICAgb25IaWRlID0gX3JlZiRvbkhpZGUgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICgpIHt9IDogX3JlZiRvbkhpZGUsXG4gICAgICBvbkV4aXQgPSBfcmVmLm9uRXhpdCxcbiAgICAgIG9uRXhpdGVkID0gX3JlZi5vbkV4aXRlZCxcbiAgICAgIG9uRXhpdGluZyA9IF9yZWYub25FeGl0aW5nLFxuICAgICAgb25FbnRlciA9IF9yZWYub25FbnRlcixcbiAgICAgIG9uRW50ZXJpbmcgPSBfcmVmLm9uRW50ZXJpbmcsXG4gICAgICBvbkVudGVyZWQgPSBfcmVmLm9uRW50ZXJlZCxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBbXCJzaG93XCIsIFwicm9sZVwiLCBcImNsYXNzTmFtZVwiLCBcInN0eWxlXCIsIFwiY2hpbGRyZW5cIiwgXCJiYWNrZHJvcFwiLCBcImtleWJvYXJkXCIsIFwib25CYWNrZHJvcENsaWNrXCIsIFwib25Fc2NhcGVLZXlEb3duXCIsIFwidHJhbnNpdGlvblwiLCBcImJhY2tkcm9wVHJhbnNpdGlvblwiLCBcImF1dG9Gb2N1c1wiLCBcImVuZm9yY2VGb2N1c1wiLCBcInJlc3RvcmVGb2N1c1wiLCBcInJlc3RvcmVGb2N1c09wdGlvbnNcIiwgXCJyZW5kZXJEaWFsb2dcIiwgXCJyZW5kZXJCYWNrZHJvcFwiLCBcIm1hbmFnZXJcIiwgXCJjb250YWluZXJcIiwgXCJjb250YWluZXJDbGFzc05hbWVcIiwgXCJvblNob3dcIiwgXCJvbkhpZGVcIiwgXCJvbkV4aXRcIiwgXCJvbkV4aXRlZFwiLCBcIm9uRXhpdGluZ1wiLCBcIm9uRW50ZXJcIiwgXCJvbkVudGVyaW5nXCIsIFwib25FbnRlcmVkXCJdKTtcblxuICB2YXIgY29udGFpbmVyID0gdXNlV2FpdEZvckRPTVJlZihjb250YWluZXJSZWYpO1xuICB2YXIgbW9kYWwgPSB1c2VNb2RhbE1hbmFnZXIocHJvdmlkZWRNYW5hZ2VyKTtcbiAgdmFyIGlzTW91bnRlZCA9IHVzZU1vdW50ZWQoKTtcbiAgdmFyIHByZXZTaG93ID0gdXNlUHJldmlvdXMoc2hvdyk7XG5cbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKCFzaG93KSxcbiAgICAgIGV4aXRlZCA9IF91c2VTdGF0ZVswXSxcbiAgICAgIHNldEV4aXRlZCA9IF91c2VTdGF0ZVsxXTtcblxuICB2YXIgbGFzdEZvY3VzUmVmID0gdXNlUmVmKG51bGwpO1xuICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBtb2RhbDtcbiAgfSwgW21vZGFsXSk7XG5cbiAgaWYgKGNhblVzZURPTSAmJiAhcHJldlNob3cgJiYgc2hvdykge1xuICAgIGxhc3RGb2N1c1JlZi5jdXJyZW50ID0gYWN0aXZlRWxlbWVudCgpO1xuICB9XG5cbiAgaWYgKCF0cmFuc2l0aW9uICYmICFzaG93ICYmICFleGl0ZWQpIHtcbiAgICBzZXRFeGl0ZWQodHJ1ZSk7XG4gIH0gZWxzZSBpZiAoc2hvdyAmJiBleGl0ZWQpIHtcbiAgICBzZXRFeGl0ZWQoZmFsc2UpO1xuICB9XG5cbiAgdmFyIGhhbmRsZVNob3cgPSB1c2VFdmVudENhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICBtb2RhbC5hZGQoY29udGFpbmVyLCBjb250YWluZXJDbGFzc05hbWUpO1xuICAgIHJlbW92ZUtleWRvd25MaXN0ZW5lclJlZi5jdXJyZW50ID0gbGlzdGVuKGRvY3VtZW50LCAna2V5ZG93bicsIGhhbmRsZURvY3VtZW50S2V5RG93bik7XG4gICAgcmVtb3ZlRm9jdXNMaXN0ZW5lclJlZi5jdXJyZW50ID0gbGlzdGVuKGRvY3VtZW50LCAnZm9jdXMnLCAvLyB0aGUgdGltZW91dCBpcyBuZWNlc3NhcnkgYi9jIHRoaXMgd2lsbCBydW4gYmVmb3JlIHRoZSBuZXcgbW9kYWwgaXMgbW91bnRlZFxuICAgIC8vIGFuZCBzbyBzdGVhbHMgZm9jdXMgZnJvbSBpdFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBzZXRUaW1lb3V0KGhhbmRsZUVuZm9yY2VGb2N1cyk7XG4gICAgfSwgdHJ1ZSk7XG5cbiAgICBpZiAob25TaG93KSB7XG4gICAgICBvblNob3coKTtcbiAgICB9IC8vIGF1dG9mb2N1cyBhZnRlciBvblNob3cgdG8gbm90IHRyaWdnZXIgYSBmb2N1cyBldmVudCBmb3IgcHJldmlvdXNcbiAgICAvLyBtb2RhbHMgYmVmb3JlIHRoaXMgb25lIGlzIHNob3duLlxuXG5cbiAgICBpZiAoYXV0b0ZvY3VzKSB7XG4gICAgICB2YXIgY3VycmVudEFjdGl2ZUVsZW1lbnQgPSBhY3RpdmVFbGVtZW50KGRvY3VtZW50KTtcblxuICAgICAgaWYgKG1vZGFsLmRpYWxvZyAmJiBjdXJyZW50QWN0aXZlRWxlbWVudCAmJiAhY29udGFpbnMobW9kYWwuZGlhbG9nLCBjdXJyZW50QWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgbGFzdEZvY3VzUmVmLmN1cnJlbnQgPSBjdXJyZW50QWN0aXZlRWxlbWVudDtcbiAgICAgICAgbW9kYWwuZGlhbG9nLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgdmFyIGhhbmRsZUhpZGUgPSB1c2VFdmVudENhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICByZW1vdmVLZXlkb3duTGlzdGVuZXJSZWYuY3VycmVudCA9PSBudWxsID8gdm9pZCAwIDogcmVtb3ZlS2V5ZG93bkxpc3RlbmVyUmVmLmN1cnJlbnQoKTtcbiAgICByZW1vdmVGb2N1c0xpc3RlbmVyUmVmLmN1cnJlbnQgPT0gbnVsbCA/IHZvaWQgMCA6IHJlbW92ZUZvY3VzTGlzdGVuZXJSZWYuY3VycmVudCgpO1xuXG4gICAgaWYgKHJlc3RvcmVGb2N1cykge1xuICAgICAgdmFyIF9sYXN0Rm9jdXNSZWYkY3VycmVudDtcblxuICAgICAgLy8gU3VwcG9ydDogPD1JRTExIGRvZXNuJ3Qgc3VwcG9ydCBgZm9jdXMoKWAgb24gc3ZnIGVsZW1lbnRzIChSQjogIzkxNylcbiAgICAgIChfbGFzdEZvY3VzUmVmJGN1cnJlbnQgPSBsYXN0Rm9jdXNSZWYuY3VycmVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9sYXN0Rm9jdXNSZWYkY3VycmVudC5mb2N1cyA9PSBudWxsID8gdm9pZCAwIDogX2xhc3RGb2N1c1JlZiRjdXJyZW50LmZvY3VzKHJlc3RvcmVGb2N1c09wdGlvbnMpO1xuICAgICAgbGFzdEZvY3VzUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgIH1cbiAgfSk7IC8vIFRPRE86IHRyeSBhbmQgY29tYmluZSB0aGVzZSBlZmZlY3RzOiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtYm9vdHN0cmFwL3JlYWN0LW92ZXJsYXlzL3B1bGwvNzk0I2Rpc2N1c3Npb25fcjQwOTk1NDEyMFxuICAvLyBTaG93IGxvZ2ljIHdoZW46XG4gIC8vICAtIHNob3cgaXMgYHRydWVgIF9hbmRfIGBjb250YWluZXJgIGhhcyByZXNvbHZlZFxuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFzaG93IHx8ICFjb250YWluZXIpIHJldHVybjtcbiAgICBoYW5kbGVTaG93KCk7XG4gIH0sIFtzaG93LCBjb250YWluZXIsXG4gIC8qIHNob3VsZCBuZXZlciBjaGFuZ2U6ICovXG4gIGhhbmRsZVNob3ddKTsgLy8gSGlkZSBjbGVhbnVwIGxvZ2ljIHdoZW46XG4gIC8vICAtIGBleGl0ZWRgIHN3aXRjaGVzIHRvIHRydWVcbiAgLy8gIC0gY29tcG9uZW50IHVubW91bnRzO1xuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFleGl0ZWQpIHJldHVybjtcbiAgICBoYW5kbGVIaWRlKCk7XG4gIH0sIFtleGl0ZWQsIGhhbmRsZUhpZGVdKTtcbiAgdXNlV2lsbFVubW91bnQoZnVuY3Rpb24gKCkge1xuICAgIGhhbmRsZUhpZGUoKTtcbiAgfSk7IC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgdmFyIGhhbmRsZUVuZm9yY2VGb2N1cyA9IHVzZUV2ZW50Q2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIGlmICghZW5mb3JjZUZvY3VzIHx8ICFpc01vdW50ZWQoKSB8fCAhbW9kYWwuaXNUb3BNb2RhbCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGN1cnJlbnRBY3RpdmVFbGVtZW50ID0gYWN0aXZlRWxlbWVudCgpO1xuXG4gICAgaWYgKG1vZGFsLmRpYWxvZyAmJiBjdXJyZW50QWN0aXZlRWxlbWVudCAmJiAhY29udGFpbnMobW9kYWwuZGlhbG9nLCBjdXJyZW50QWN0aXZlRWxlbWVudCkpIHtcbiAgICAgIG1vZGFsLmRpYWxvZy5mb2N1cygpO1xuICAgIH1cbiAgfSk7XG4gIHZhciBoYW5kbGVCYWNrZHJvcENsaWNrID0gdXNlRXZlbnRDYWxsYmFjayhmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLnRhcmdldCAhPT0gZS5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb25CYWNrZHJvcENsaWNrID09IG51bGwgPyB2b2lkIDAgOiBvbkJhY2tkcm9wQ2xpY2soZSk7XG5cbiAgICBpZiAoYmFja2Ryb3AgPT09IHRydWUpIHtcbiAgICAgIG9uSGlkZSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIGhhbmRsZURvY3VtZW50S2V5RG93biA9IGZ1bmN0aW9uIGhhbmRsZURvY3VtZW50S2V5RG93bihlKSB7XG4gICAgaWYgKGtleWJvYXJkICYmIGUua2V5Q29kZSA9PT0gMjcgJiYgbW9kYWwuaXNUb3BNb2RhbCgpKSB7XG4gICAgICBvbkVzY2FwZUtleURvd24gPT0gbnVsbCA/IHZvaWQgMCA6IG9uRXNjYXBlS2V5RG93bihlKTtcbiAgICAgIG9uSGlkZSgpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgcmVtb3ZlRm9jdXNMaXN0ZW5lclJlZiA9IHVzZVJlZigpO1xuICB2YXIgcmVtb3ZlS2V5ZG93bkxpc3RlbmVyUmVmID0gdXNlUmVmKCk7XG5cbiAgdmFyIGhhbmRsZUhpZGRlbiA9IGZ1bmN0aW9uIGhhbmRsZUhpZGRlbigpIHtcbiAgICBzZXRFeGl0ZWQodHJ1ZSk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgb25FeGl0ZWQgPT0gbnVsbCA/IHZvaWQgMCA6IG9uRXhpdGVkLmFwcGx5KHZvaWQgMCwgYXJncyk7XG4gIH07XG5cbiAgdmFyIFRyYW5zaXRpb24gPSB0cmFuc2l0aW9uO1xuXG4gIGlmICghY29udGFpbmVyIHx8ICEoc2hvdyB8fCBUcmFuc2l0aW9uICYmICFleGl0ZWQpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgZGlhbG9nUHJvcHMgPSBfZXh0ZW5kcyh7XG4gICAgcm9sZTogcm9sZSxcbiAgICByZWY6IG1vZGFsLnNldERpYWxvZ1JlZixcbiAgICAvLyBhcHBhcmVudGx5IG9ubHkgd29ya3Mgb24gdGhlIGRpYWxvZyByb2xlIGVsZW1lbnRcbiAgICAnYXJpYS1tb2RhbCc6IHJvbGUgPT09ICdkaWFsb2cnID8gdHJ1ZSA6IHVuZGVmaW5lZFxuICB9LCByZXN0LCB7XG4gICAgc3R5bGU6IHN0eWxlLFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgIHRhYkluZGV4OiAtMVxuICB9KTtcblxuICB2YXIgZGlhbG9nID0gcmVuZGVyRGlhbG9nID8gcmVuZGVyRGlhbG9nKGRpYWxvZ1Byb3BzKSA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIGRpYWxvZ1Byb3BzLCBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcbiAgICByb2xlOiAnZG9jdW1lbnQnXG4gIH0pKTtcblxuICBpZiAoVHJhbnNpdGlvbikge1xuICAgIGRpYWxvZyA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRyYW5zaXRpb24sIHtcbiAgICAgIGFwcGVhcjogdHJ1ZSxcbiAgICAgIHVubW91bnRPbkV4aXQ6IHRydWUsXG4gICAgICBcImluXCI6ICEhc2hvdyxcbiAgICAgIG9uRXhpdDogb25FeGl0LFxuICAgICAgb25FeGl0aW5nOiBvbkV4aXRpbmcsXG4gICAgICBvbkV4aXRlZDogaGFuZGxlSGlkZGVuLFxuICAgICAgb25FbnRlcjogb25FbnRlcixcbiAgICAgIG9uRW50ZXJpbmc6IG9uRW50ZXJpbmcsXG4gICAgICBvbkVudGVyZWQ6IG9uRW50ZXJlZFxuICAgIH0sIGRpYWxvZyk7XG4gIH1cblxuICB2YXIgYmFja2Ryb3BFbGVtZW50ID0gbnVsbDtcblxuICBpZiAoYmFja2Ryb3ApIHtcbiAgICB2YXIgQmFja2Ryb3BUcmFuc2l0aW9uID0gYmFja2Ryb3BUcmFuc2l0aW9uO1xuICAgIGJhY2tkcm9wRWxlbWVudCA9IHJlbmRlckJhY2tkcm9wKHtcbiAgICAgIHJlZjogbW9kYWwuc2V0QmFja2Ryb3BSZWYsXG4gICAgICBvbkNsaWNrOiBoYW5kbGVCYWNrZHJvcENsaWNrXG4gICAgfSk7XG5cbiAgICBpZiAoQmFja2Ryb3BUcmFuc2l0aW9uKSB7XG4gICAgICBiYWNrZHJvcEVsZW1lbnQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCYWNrZHJvcFRyYW5zaXRpb24sIHtcbiAgICAgICAgYXBwZWFyOiB0cnVlLFxuICAgICAgICBcImluXCI6ICEhc2hvd1xuICAgICAgfSwgYmFja2Ryb3BFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFJlYWN0RE9NLmNyZWF0ZVBvcnRhbCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIGJhY2tkcm9wRWxlbWVudCwgZGlhbG9nKSwgY29udGFpbmVyKSk7XG59KTtcbnZhciBwcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBTZXQgdGhlIHZpc2liaWxpdHkgb2YgdGhlIE1vZGFsXG4gICAqL1xuICBzaG93OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQSBET00gZWxlbWVudCwgYSBgcmVmYCB0byBhbiBlbGVtZW50LCBvciBmdW5jdGlvbiB0aGF0IHJldHVybnMgZWl0aGVyLiBUaGUgTW9kYWwgaXMgYXBwZW5kZWQgdG8gaXQncyBgY29udGFpbmVyYCBlbGVtZW50LlxuICAgKlxuICAgKiBGb3IgdGhlIHNha2Ugb2YgYXNzaXN0aXZlIHRlY2hub2xvZ2llcywgdGhlIGNvbnRhaW5lciBzaG91bGQgdXN1YWxseSBiZSB0aGUgZG9jdW1lbnQgYm9keSwgc28gdGhhdCB0aGUgcmVzdCBvZiB0aGVcbiAgICogcGFnZSBjb250ZW50IGNhbiBiZSBwbGFjZWQgYmVoaW5kIGEgdmlydHVhbCBiYWNrZHJvcCBhcyB3ZWxsIGFzIGEgdmlzdWFsIG9uZS5cbiAgICovXG4gIGNvbnRhaW5lcjogUHJvcFR5cGVzLmFueSxcblxuICAvKipcbiAgICogQSBjYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBNb2RhbCBpcyBvcGVuaW5nLlxuICAgKi9cbiAgb25TaG93OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQSBjYWxsYmFjayBmaXJlZCB3aGVuIGVpdGhlciB0aGUgYmFja2Ryb3AgaXMgY2xpY2tlZCwgb3IgdGhlIGVzY2FwZSBrZXkgaXMgcHJlc3NlZC5cbiAgICpcbiAgICogVGhlIGBvbkhpZGVgIGNhbGxiYWNrIG9ubHkgc2lnbmFscyBpbnRlbnQgZnJvbSB0aGUgTW9kYWwsXG4gICAqIHlvdSBtdXN0IGFjdHVhbGx5IHNldCB0aGUgYHNob3dgIHByb3AgdG8gYGZhbHNlYCBmb3IgdGhlIE1vZGFsIHRvIGNsb3NlLlxuICAgKi9cbiAgb25IaWRlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogSW5jbHVkZSBhIGJhY2tkcm9wIGNvbXBvbmVudC5cbiAgICovXG4gIGJhY2tkcm9wOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLm9uZU9mKFsnc3RhdGljJ10pXSksXG5cbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBkaWFsb2cgY29tcG9uZW50LiBVc2VmdWwgZm9yIGN1c3RvbVxuICAgKiByZW5kZXJpbmcuICoqTm90ZToqKiB0aGUgY29tcG9uZW50IHNob3VsZCBtYWtlIHN1cmUgdG8gYXBwbHkgdGhlIHByb3ZpZGVkIHJlZi5cbiAgICpcbiAgICogYGBganMgc3RhdGljXG4gICAqIHJlbmRlckRpYWxvZz17cHJvcHMgPT4gPE15RGlhbG9nIHsuLi5wcm9wc30gLz59XG4gICAqIGBgYFxuICAgKi9cbiAgcmVuZGVyRGlhbG9nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBiYWNrZHJvcCBjb21wb25lbnQuIFVzZWZ1bCBmb3IgY3VzdG9tXG4gICAqIGJhY2tkcm9wIHJlbmRlcmluZy5cbiAgICpcbiAgICogYGBganNcbiAgICogIHJlbmRlckJhY2tkcm9wPXtwcm9wcyA9PiA8TXlCYWNrZHJvcCB7Li4ucHJvcHN9IC8+fVxuICAgKiBgYGBcbiAgICovXG4gIHJlbmRlckJhY2tkcm9wOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQSBjYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBlc2NhcGUga2V5LCBpZiBzcGVjaWZpZWQgaW4gYGtleWJvYXJkYCwgaXMgcHJlc3NlZC5cbiAgICovXG4gIG9uRXNjYXBlS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEEgY2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgYmFja2Ryb3AsIGlmIHNwZWNpZmllZCwgaXMgY2xpY2tlZC5cbiAgICovXG4gIG9uQmFja2Ryb3BDbGljazogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEEgY3NzIGNsYXNzIG9yIHNldCBvZiBjbGFzc2VzIGFwcGxpZWQgdG8gdGhlIG1vZGFsIGNvbnRhaW5lciB3aGVuIHRoZSBtb2RhbCBpcyBvcGVuLFxuICAgKiBhbmQgcmVtb3ZlZCB3aGVuIGl0IGlzIGNsb3NlZC5cbiAgICovXG4gIGNvbnRhaW5lckNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQ2xvc2UgdGhlIG1vZGFsIHdoZW4gZXNjYXBlIGtleSBpcyBwcmVzc2VkXG4gICAqL1xuICBrZXlib2FyZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEEgYHJlYWN0LXRyYW5zaXRpb24tZ3JvdXBAMi4wLjBgIGA8VHJhbnNpdGlvbi8+YCBjb21wb25lbnQgdXNlZFxuICAgKiB0byBjb250cm9sIGFuaW1hdGlvbnMgZm9yIHRoZSBkaWFsb2cgY29tcG9uZW50LlxuICAgKi9cbiAgdHJhbnNpdGlvbjogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBBIGByZWFjdC10cmFuc2l0aW9uLWdyb3VwQDIuMC4wYCBgPFRyYW5zaXRpb24vPmAgY29tcG9uZW50IHVzZWRcbiAgICogdG8gY29udHJvbCBhbmltYXRpb25zIGZvciB0aGUgYmFja2Ryb3AgY29tcG9uZW50cy5cbiAgICovXG4gIGJhY2tkcm9wVHJhbnNpdGlvbjogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBXaGVuIGB0cnVlYCBUaGUgbW9kYWwgd2lsbCBhdXRvbWF0aWNhbGx5IHNoaWZ0IGZvY3VzIHRvIGl0c2VsZiB3aGVuIGl0IG9wZW5zLCBhbmRcbiAgICogcmVwbGFjZSBpdCB0byB0aGUgbGFzdCBmb2N1c2VkIGVsZW1lbnQgd2hlbiBpdCBjbG9zZXMuIFRoaXMgYWxzb1xuICAgKiB3b3JrcyBjb3JyZWN0bHkgd2l0aCBhbnkgTW9kYWwgY2hpbGRyZW4gdGhhdCBoYXZlIHRoZSBgYXV0b0ZvY3VzYCBwcm9wLlxuICAgKlxuICAgKiBHZW5lcmFsbHkgdGhpcyBzaG91bGQgbmV2ZXIgYmUgc2V0IHRvIGBmYWxzZWAgYXMgaXQgbWFrZXMgdGhlIE1vZGFsIGxlc3NcbiAgICogYWNjZXNzaWJsZSB0byBhc3Npc3RpdmUgdGVjaG5vbG9naWVzLCBsaWtlIHNjcmVlbiByZWFkZXJzLlxuICAgKi9cbiAgYXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogV2hlbiBgdHJ1ZWAgVGhlIG1vZGFsIHdpbGwgcHJldmVudCBmb2N1cyBmcm9tIGxlYXZpbmcgdGhlIE1vZGFsIHdoaWxlIG9wZW4uXG4gICAqXG4gICAqIEdlbmVyYWxseSB0aGlzIHNob3VsZCBuZXZlciBiZSBzZXQgdG8gYGZhbHNlYCBhcyBpdCBtYWtlcyB0aGUgTW9kYWwgbGVzc1xuICAgKiBhY2Nlc3NpYmxlIHRvIGFzc2lzdGl2ZSB0ZWNobm9sb2dpZXMsIGxpa2Ugc2NyZWVuIHJlYWRlcnMuXG4gICAqL1xuICBlbmZvcmNlRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBXaGVuIGB0cnVlYCBUaGUgbW9kYWwgd2lsbCByZXN0b3JlIGZvY3VzIHRvIHByZXZpb3VzbHkgZm9jdXNlZCBlbGVtZW50IG9uY2VcbiAgICogbW9kYWwgaXMgaGlkZGVuXG4gICAqL1xuICByZXN0b3JlRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBPcHRpb25zIHBhc3NlZCB0byBmb2N1cyBmdW5jdGlvbiB3aGVuIGByZXN0b3JlRm9jdXNgIGlzIHNldCB0byBgdHJ1ZWBcbiAgICpcbiAgICogQGxpbmsgIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IVE1MRWxlbWVudC9mb2N1cyNQYXJhbWV0ZXJzXG4gICAqL1xuICByZXN0b3JlRm9jdXNPcHRpb25zOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHByZXZlbnRTY3JvbGw6IFByb3BUeXBlcy5ib29sXG4gIH0pLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIE1vZGFsIHRyYW5zaXRpb25zIGluXG4gICAqL1xuICBvbkVudGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYXMgdGhlIE1vZGFsIGJlZ2lucyB0byB0cmFuc2l0aW9uIGluXG4gICAqL1xuICBvbkVudGVyaW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIE1vZGFsIGZpbmlzaGVzIHRyYW5zaXRpb25pbmcgaW5cbiAgICovXG4gIG9uRW50ZXJlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHJpZ2h0IGJlZm9yZSB0aGUgTW9kYWwgdHJhbnNpdGlvbnMgb3V0XG4gICAqL1xuICBvbkV4aXQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhcyB0aGUgTW9kYWwgYmVnaW5zIHRvIHRyYW5zaXRpb24gb3V0XG4gICAqL1xuICBvbkV4aXRpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgTW9kYWwgZmluaXNoZXMgdHJhbnNpdGlvbmluZyBvdXRcbiAgICovXG4gIG9uRXhpdGVkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQSBNb2RhbE1hbmFnZXIgaW5zdGFuY2UgdXNlZCB0byB0cmFjayBhbmQgbWFuYWdlIHRoZSBzdGF0ZSBvZiBvcGVuXG4gICAqIE1vZGFscy4gVXNlZnVsIHdoZW4gY3VzdG9taXppbmcgaG93IG1vZGFscyBpbnRlcmFjdCB3aXRoaW4gYSBjb250YWluZXJcbiAgICovXG4gIG1hbmFnZXI6IFByb3BUeXBlcy5pbnN0YW5jZU9mKE1vZGFsTWFuYWdlcilcbn07XG5Nb2RhbC5kaXNwbGF5TmFtZSA9ICdNb2RhbCc7XG5Nb2RhbC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5leHBvcnQgZGVmYXVsdCBPYmplY3QuYXNzaWduKE1vZGFsLCB7XG4gIE1hbmFnZXI6IE1vZGFsTWFuYWdlclxufSk7IiwiaW1wb3J0IGFkZENsYXNzIGZyb20gJ2RvbS1oZWxwZXJzL2FkZENsYXNzJztcbmltcG9ydCByZW1vdmVDbGFzcyBmcm9tICdkb20taGVscGVycy9yZW1vdmVDbGFzcyc7XG5pbXBvcnQgY3NzIGZyb20gJ2RvbS1oZWxwZXJzL2Nzcyc7XG5pbXBvcnQgZ2V0U2Nyb2xsYmFyU2l6ZSBmcm9tICdkb20taGVscGVycy9zY3JvbGxiYXJTaXplJztcbmltcG9ydCBpc092ZXJmbG93aW5nIGZyb20gJy4vaXNPdmVyZmxvd2luZyc7XG5pbXBvcnQgeyBhcmlhSGlkZGVuLCBoaWRlU2libGluZ3MsIHNob3dTaWJsaW5ncyB9IGZyb20gJy4vbWFuYWdlQXJpYUhpZGRlbic7XG5cbmZ1bmN0aW9uIGZpbmRJbmRleE9mKGFyciwgY2IpIHtcbiAgdmFyIGlkeCA9IC0xO1xuICBhcnIuc29tZShmdW5jdGlvbiAoZCwgaSkge1xuICAgIGlmIChjYihkLCBpKSkge1xuICAgICAgaWR4ID0gaTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG4gIHJldHVybiBpZHg7XG59XG5cbi8qKlxuICogUHJvcGVyIHN0YXRlIG1hbmFnZW1lbnQgZm9yIGNvbnRhaW5lcnMgYW5kIHRoZSBtb2RhbHMgaW4gdGhvc2UgY29udGFpbmVycy5cbiAqXG4gKiBAaW50ZXJuYWwgVXNlZCBieSB0aGUgTW9kYWwgdG8gZW5zdXJlIHByb3BlciBzdHlsaW5nIG9mIGNvbnRhaW5lcnMuXG4gKi9cbnZhciBNb2RhbE1hbmFnZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBNb2RhbE1hbmFnZXIoX3RlbXApIHtcbiAgICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgICBfcmVmJGhpZGVTaWJsaW5nTm9kZXMgPSBfcmVmLmhpZGVTaWJsaW5nTm9kZXMsXG4gICAgICAgIGhpZGVTaWJsaW5nTm9kZXMgPSBfcmVmJGhpZGVTaWJsaW5nTm9kZXMgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmJGhpZGVTaWJsaW5nTm9kZXMsXG4gICAgICAgIF9yZWYkaGFuZGxlQ29udGFpbmVyTyA9IF9yZWYuaGFuZGxlQ29udGFpbmVyT3ZlcmZsb3csXG4gICAgICAgIGhhbmRsZUNvbnRhaW5lck92ZXJmbG93ID0gX3JlZiRoYW5kbGVDb250YWluZXJPID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZiRoYW5kbGVDb250YWluZXJPO1xuXG4gICAgdGhpcy5oaWRlU2libGluZ05vZGVzID0gdm9pZCAwO1xuICAgIHRoaXMuaGFuZGxlQ29udGFpbmVyT3ZlcmZsb3cgPSB2b2lkIDA7XG4gICAgdGhpcy5tb2RhbHMgPSB2b2lkIDA7XG4gICAgdGhpcy5jb250YWluZXJzID0gdm9pZCAwO1xuICAgIHRoaXMuZGF0YSA9IHZvaWQgMDtcbiAgICB0aGlzLnNjcm9sbGJhclNpemUgPSB2b2lkIDA7XG4gICAgdGhpcy5oaWRlU2libGluZ05vZGVzID0gaGlkZVNpYmxpbmdOb2RlcztcbiAgICB0aGlzLmhhbmRsZUNvbnRhaW5lck92ZXJmbG93ID0gaGFuZGxlQ29udGFpbmVyT3ZlcmZsb3c7XG4gICAgdGhpcy5tb2RhbHMgPSBbXTtcbiAgICB0aGlzLmNvbnRhaW5lcnMgPSBbXTtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICB0aGlzLnNjcm9sbGJhclNpemUgPSBnZXRTY3JvbGxiYXJTaXplKCk7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gTW9kYWxNYW5hZ2VyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uaXNDb250YWluZXJPdmVyZmxvd2luZyA9IGZ1bmN0aW9uIGlzQ29udGFpbmVyT3ZlcmZsb3dpbmcobW9kYWwpIHtcbiAgICB2YXIgZGF0YSA9IHRoaXMuZGF0YVt0aGlzLmNvbnRhaW5lckluZGV4RnJvbU1vZGFsKG1vZGFsKV07XG4gICAgcmV0dXJuIGRhdGEgJiYgZGF0YS5vdmVyZmxvd2luZztcbiAgfTtcblxuICBfcHJvdG8uY29udGFpbmVySW5kZXhGcm9tTW9kYWwgPSBmdW5jdGlvbiBjb250YWluZXJJbmRleEZyb21Nb2RhbChtb2RhbCkge1xuICAgIHJldHVybiBmaW5kSW5kZXhPZih0aGlzLmRhdGEsIGZ1bmN0aW9uIChkKSB7XG4gICAgICByZXR1cm4gZC5tb2RhbHMuaW5kZXhPZihtb2RhbCkgIT09IC0xO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5zZXRDb250YWluZXJTdHlsZSA9IGZ1bmN0aW9uIHNldENvbnRhaW5lclN0eWxlKGNvbnRhaW5lclN0YXRlLCBjb250YWluZXIpIHtcbiAgICB2YXIgc3R5bGUgPSB7XG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICB9OyAvLyB3ZSBhcmUgb25seSBpbnRlcmVzdGVkIGluIHRoZSBhY3R1YWwgYHN0eWxlYCBoZXJlXG4gICAgLy8gYmVjYXVzZSB3ZSB3aWxsIG92ZXJyaWRlIGl0XG5cbiAgICBjb250YWluZXJTdGF0ZS5zdHlsZSA9IHtcbiAgICAgIG92ZXJmbG93OiBjb250YWluZXIuc3R5bGUub3ZlcmZsb3csXG4gICAgICBwYWRkaW5nUmlnaHQ6IGNvbnRhaW5lci5zdHlsZS5wYWRkaW5nUmlnaHRcbiAgICB9O1xuXG4gICAgaWYgKGNvbnRhaW5lclN0YXRlLm92ZXJmbG93aW5nKSB7XG4gICAgICAvLyB1c2UgY29tcHV0ZWQgc3R5bGUsIGhlcmUgdG8gZ2V0IHRoZSByZWFsIHBhZGRpbmdcbiAgICAgIC8vIHRvIGFkZCBvdXIgc2Nyb2xsYmFyIHdpZHRoXG4gICAgICBzdHlsZS5wYWRkaW5nUmlnaHQgPSBwYXJzZUludChjc3MoY29udGFpbmVyLCAncGFkZGluZ1JpZ2h0JykgfHwgJzAnLCAxMCkgKyB0aGlzLnNjcm9sbGJhclNpemUgKyBcInB4XCI7XG4gICAgfVxuXG4gICAgY3NzKGNvbnRhaW5lciwgc3R5bGUpO1xuICB9O1xuXG4gIF9wcm90by5yZW1vdmVDb250YWluZXJTdHlsZSA9IGZ1bmN0aW9uIHJlbW92ZUNvbnRhaW5lclN0eWxlKGNvbnRhaW5lclN0YXRlLCBjb250YWluZXIpIHtcbiAgICB2YXIgc3R5bGUgPSBjb250YWluZXJTdGF0ZS5zdHlsZTtcbiAgICBPYmplY3Qua2V5cyhzdHlsZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBjb250YWluZXIuc3R5bGVba2V5XSA9IHN0eWxlW2tleV07XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmFkZCA9IGZ1bmN0aW9uIGFkZChtb2RhbCwgY29udGFpbmVyLCBjbGFzc05hbWUpIHtcbiAgICB2YXIgbW9kYWxJZHggPSB0aGlzLm1vZGFscy5pbmRleE9mKG1vZGFsKTtcbiAgICB2YXIgY29udGFpbmVySWR4ID0gdGhpcy5jb250YWluZXJzLmluZGV4T2YoY29udGFpbmVyKTtcblxuICAgIGlmIChtb2RhbElkeCAhPT0gLTEpIHtcbiAgICAgIHJldHVybiBtb2RhbElkeDtcbiAgICB9XG5cbiAgICBtb2RhbElkeCA9IHRoaXMubW9kYWxzLmxlbmd0aDtcbiAgICB0aGlzLm1vZGFscy5wdXNoKG1vZGFsKTtcblxuICAgIGlmICh0aGlzLmhpZGVTaWJsaW5nTm9kZXMpIHtcbiAgICAgIGhpZGVTaWJsaW5ncyhjb250YWluZXIsIG1vZGFsKTtcbiAgICB9XG5cbiAgICBpZiAoY29udGFpbmVySWR4ICE9PSAtMSkge1xuICAgICAgdGhpcy5kYXRhW2NvbnRhaW5lcklkeF0ubW9kYWxzLnB1c2gobW9kYWwpO1xuICAgICAgcmV0dXJuIG1vZGFsSWR4O1xuICAgIH1cblxuICAgIHZhciBkYXRhID0ge1xuICAgICAgbW9kYWxzOiBbbW9kYWxdLFxuICAgICAgLy8gcmlnaHQgbm93IG9ubHkgdGhlIGZpcnN0IG1vZGFsIG9mIGEgY29udGFpbmVyIHdpbGwgaGF2ZSBpdHMgY2xhc3NlcyBhcHBsaWVkXG4gICAgICBjbGFzc2VzOiBjbGFzc05hbWUgPyBjbGFzc05hbWUuc3BsaXQoL1xccysvKSA6IFtdLFxuICAgICAgb3ZlcmZsb3dpbmc6IGlzT3ZlcmZsb3dpbmcoY29udGFpbmVyKVxuICAgIH07XG5cbiAgICBpZiAodGhpcy5oYW5kbGVDb250YWluZXJPdmVyZmxvdykge1xuICAgICAgdGhpcy5zZXRDb250YWluZXJTdHlsZShkYXRhLCBjb250YWluZXIpO1xuICAgIH1cblxuICAgIGRhdGEuY2xhc3Nlcy5mb3JFYWNoKGFkZENsYXNzLmJpbmQobnVsbCwgY29udGFpbmVyKSk7XG4gICAgdGhpcy5jb250YWluZXJzLnB1c2goY29udGFpbmVyKTtcbiAgICB0aGlzLmRhdGEucHVzaChkYXRhKTtcbiAgICByZXR1cm4gbW9kYWxJZHg7XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShtb2RhbCkge1xuICAgIHZhciBtb2RhbElkeCA9IHRoaXMubW9kYWxzLmluZGV4T2YobW9kYWwpO1xuXG4gICAgaWYgKG1vZGFsSWR4ID09PSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjb250YWluZXJJZHggPSB0aGlzLmNvbnRhaW5lckluZGV4RnJvbU1vZGFsKG1vZGFsKTtcbiAgICB2YXIgZGF0YSA9IHRoaXMuZGF0YVtjb250YWluZXJJZHhdO1xuICAgIHZhciBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcnNbY29udGFpbmVySWR4XTtcbiAgICBkYXRhLm1vZGFscy5zcGxpY2UoZGF0YS5tb2RhbHMuaW5kZXhPZihtb2RhbCksIDEpO1xuICAgIHRoaXMubW9kYWxzLnNwbGljZShtb2RhbElkeCwgMSk7IC8vIGlmIHRoYXQgd2FzIHRoZSBsYXN0IG1vZGFsIGluIGEgY29udGFpbmVyLFxuICAgIC8vIGNsZWFuIHVwIHRoZSBjb250YWluZXJcblxuICAgIGlmIChkYXRhLm1vZGFscy5sZW5ndGggPT09IDApIHtcbiAgICAgIGRhdGEuY2xhc3Nlcy5mb3JFYWNoKHJlbW92ZUNsYXNzLmJpbmQobnVsbCwgY29udGFpbmVyKSk7XG5cbiAgICAgIGlmICh0aGlzLmhhbmRsZUNvbnRhaW5lck92ZXJmbG93KSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQ29udGFpbmVyU3R5bGUoZGF0YSwgY29udGFpbmVyKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaGlkZVNpYmxpbmdOb2Rlcykge1xuICAgICAgICBzaG93U2libGluZ3MoY29udGFpbmVyLCBtb2RhbCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29udGFpbmVycy5zcGxpY2UoY29udGFpbmVySWR4LCAxKTtcbiAgICAgIHRoaXMuZGF0YS5zcGxpY2UoY29udGFpbmVySWR4LCAxKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaGlkZVNpYmxpbmdOb2Rlcykge1xuICAgICAgLy8gb3RoZXJ3aXNlIG1ha2Ugc3VyZSB0aGUgbmV4dCB0b3AgbW9kYWwgaXMgdmlzaWJsZSB0byBhIFNSXG4gICAgICB2YXIgX2RhdGEkbW9kYWxzID0gZGF0YS5tb2RhbHNbZGF0YS5tb2RhbHMubGVuZ3RoIC0gMV0sXG4gICAgICAgICAgYmFja2Ryb3AgPSBfZGF0YSRtb2RhbHMuYmFja2Ryb3AsXG4gICAgICAgICAgZGlhbG9nID0gX2RhdGEkbW9kYWxzLmRpYWxvZztcbiAgICAgIGFyaWFIaWRkZW4oZmFsc2UsIGRpYWxvZyk7XG4gICAgICBhcmlhSGlkZGVuKGZhbHNlLCBiYWNrZHJvcCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5pc1RvcE1vZGFsID0gZnVuY3Rpb24gaXNUb3BNb2RhbChtb2RhbCkge1xuICAgIHJldHVybiAhIXRoaXMubW9kYWxzLmxlbmd0aCAmJiB0aGlzLm1vZGFsc1t0aGlzLm1vZGFscy5sZW5ndGggLSAxXSA9PT0gbW9kYWw7XG4gIH07XG5cbiAgcmV0dXJuIE1vZGFsTWFuYWdlcjtcbn0oKTtcblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxNYW5hZ2VyOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgdXNlQ2FsbGJhY2tSZWYgZnJvbSAnQHJlc3RhcnQvaG9va3MvdXNlQ2FsbGJhY2tSZWYnO1xuaW1wb3J0IHVzZU1lcmdlZFJlZnMgZnJvbSAnQHJlc3RhcnQvaG9va3MvdXNlTWVyZ2VkUmVmcyc7XG5pbXBvcnQgeyBwbGFjZW1lbnRzIH0gZnJvbSAnLi9wb3BwZXInO1xuaW1wb3J0IHVzZVBvcHBlciwgeyB0b01vZGlmaWVyTWFwIH0gZnJvbSAnLi91c2VQb3BwZXInO1xuaW1wb3J0IHVzZVJvb3RDbG9zZSBmcm9tICcuL3VzZVJvb3RDbG9zZSc7XG5pbXBvcnQgdXNlV2FpdEZvckRPTVJlZiBmcm9tICcuL3VzZVdhaXRGb3JET01SZWYnO1xuXG4vKipcbiAqIEJ1aWx0IG9uIHRvcCBvZiBgUG9wcGVyLmpzYCwgdGhlIG92ZXJsYXkgY29tcG9uZW50IGlzXG4gKiBncmVhdCBmb3IgY3VzdG9tIHRvb2x0aXAgb3ZlcmxheXMuXG4gKi9cbnZhciBPdmVybGF5ID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIG91dGVyUmVmKSB7XG4gIHZhciBfbW9kaWZpZXJzJHByZXZlbnRPdmUsIF9tb2RpZmllcnMkYXJyb3c7XG5cbiAgdmFyIGZsaXAgPSBwcm9wcy5mbGlwLFxuICAgICAgcGxhY2VtZW50ID0gcHJvcHMucGxhY2VtZW50LFxuICAgICAgX3Byb3BzJGNvbnRhaW5lclBhZGRpID0gcHJvcHMuY29udGFpbmVyUGFkZGluZyxcbiAgICAgIGNvbnRhaW5lclBhZGRpbmcgPSBfcHJvcHMkY29udGFpbmVyUGFkZGkgPT09IHZvaWQgMCA/IDUgOiBfcHJvcHMkY29udGFpbmVyUGFkZGksXG4gICAgICBfcHJvcHMkcG9wcGVyQ29uZmlnID0gcHJvcHMucG9wcGVyQ29uZmlnLFxuICAgICAgcG9wcGVyQ29uZmlnID0gX3Byb3BzJHBvcHBlckNvbmZpZyA9PT0gdm9pZCAwID8ge30gOiBfcHJvcHMkcG9wcGVyQ29uZmlnLFxuICAgICAgVHJhbnNpdGlvbiA9IHByb3BzLnRyYW5zaXRpb247XG5cbiAgdmFyIF91c2VDYWxsYmFja1JlZiA9IHVzZUNhbGxiYWNrUmVmKCksXG4gICAgICByb290RWxlbWVudCA9IF91c2VDYWxsYmFja1JlZlswXSxcbiAgICAgIGF0dGFjaFJlZiA9IF91c2VDYWxsYmFja1JlZlsxXTtcblxuICB2YXIgX3VzZUNhbGxiYWNrUmVmMiA9IHVzZUNhbGxiYWNrUmVmKCksXG4gICAgICBhcnJvd0VsZW1lbnQgPSBfdXNlQ2FsbGJhY2tSZWYyWzBdLFxuICAgICAgYXR0YWNoQXJyb3dSZWYgPSBfdXNlQ2FsbGJhY2tSZWYyWzFdO1xuXG4gIHZhciBtZXJnZWRSZWYgPSB1c2VNZXJnZWRSZWZzKGF0dGFjaFJlZiwgb3V0ZXJSZWYpO1xuICB2YXIgY29udGFpbmVyID0gdXNlV2FpdEZvckRPTVJlZihwcm9wcy5jb250YWluZXIpO1xuICB2YXIgdGFyZ2V0ID0gdXNlV2FpdEZvckRPTVJlZihwcm9wcy50YXJnZXQpO1xuXG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZSghcHJvcHMuc2hvdyksXG4gICAgICBleGl0ZWQgPSBfdXNlU3RhdGVbMF0sXG4gICAgICBzZXRFeGl0ZWQgPSBfdXNlU3RhdGVbMV07XG5cbiAgdmFyIG1vZGlmaWVycyA9IHRvTW9kaWZpZXJNYXAocG9wcGVyQ29uZmlnLm1vZGlmaWVycyk7XG5cbiAgdmFyIF91c2VQb3BwZXIgPSB1c2VQb3BwZXIodGFyZ2V0LCByb290RWxlbWVudCwgX2V4dGVuZHMoe30sIHBvcHBlckNvbmZpZywge1xuICAgIHBsYWNlbWVudDogcGxhY2VtZW50IHx8ICdib3R0b20nLFxuICAgIG1vZGlmaWVyczogX2V4dGVuZHMoe30sIG1vZGlmaWVycywge1xuICAgICAgZXZlbnRMaXN0ZW5lcnM6IHtcbiAgICAgICAgZW5hYmxlZDogISFwcm9wcy5zaG93XG4gICAgICB9LFxuICAgICAgcHJldmVudE92ZXJmbG93OiBfZXh0ZW5kcyh7fSwgbW9kaWZpZXJzLnByZXZlbnRPdmVyZmxvdywge1xuICAgICAgICBvcHRpb25zOiBfZXh0ZW5kcyh7XG4gICAgICAgICAgcGFkZGluZzogY29udGFpbmVyUGFkZGluZyB8fCA1XG4gICAgICAgIH0sIChfbW9kaWZpZXJzJHByZXZlbnRPdmUgPSBtb2RpZmllcnMucHJldmVudE92ZXJmbG93KSA9PSBudWxsID8gdm9pZCAwIDogX21vZGlmaWVycyRwcmV2ZW50T3ZlLm9wdGlvbnMpXG4gICAgICB9KSxcbiAgICAgIGFycm93OiBfZXh0ZW5kcyh7fSwgbW9kaWZpZXJzLmFycm93LCB7XG4gICAgICAgIGVuYWJsZWQ6ICEhYXJyb3dFbGVtZW50LFxuICAgICAgICBvcHRpb25zOiBfZXh0ZW5kcyh7fSwgKF9tb2RpZmllcnMkYXJyb3cgPSBtb2RpZmllcnMuYXJyb3cpID09IG51bGwgPyB2b2lkIDAgOiBfbW9kaWZpZXJzJGFycm93Lm9wdGlvbnMsIHtcbiAgICAgICAgICBlbGVtZW50OiBhcnJvd0VsZW1lbnRcbiAgICAgICAgfSlcbiAgICAgIH0pLFxuICAgICAgZmxpcDogX2V4dGVuZHMoe1xuICAgICAgICBlbmFibGVkOiAhIWZsaXBcbiAgICAgIH0sIG1vZGlmaWVycy5mbGlwKVxuICAgIH0pXG4gIH0pKSxcbiAgICAgIHN0eWxlcyA9IF91c2VQb3BwZXIuc3R5bGVzLFxuICAgICAgYXJyb3dTdHlsZXMgPSBfdXNlUG9wcGVyLmFycm93U3R5bGVzLFxuICAgICAgcG9wcGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3VzZVBvcHBlciwgW1wic3R5bGVzXCIsIFwiYXJyb3dTdHlsZXNcIl0pO1xuXG4gIGlmIChwcm9wcy5zaG93KSB7XG4gICAgaWYgKGV4aXRlZCkgc2V0RXhpdGVkKGZhbHNlKTtcbiAgfSBlbHNlIGlmICghcHJvcHMudHJhbnNpdGlvbiAmJiAhZXhpdGVkKSB7XG4gICAgc2V0RXhpdGVkKHRydWUpO1xuICB9XG5cbiAgdmFyIGhhbmRsZUhpZGRlbiA9IGZ1bmN0aW9uIGhhbmRsZUhpZGRlbigpIHtcbiAgICBzZXRFeGl0ZWQodHJ1ZSk7XG5cbiAgICBpZiAocHJvcHMub25FeGl0ZWQpIHtcbiAgICAgIHByb3BzLm9uRXhpdGVkLmFwcGx5KHByb3BzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfTsgLy8gRG9uJ3QgdW4tcmVuZGVyIHRoZSBvdmVybGF5IHdoaWxlIGl0J3MgdHJhbnNpdGlvbmluZyBvdXQuXG5cblxuICB2YXIgbW91bnRPdmVybGF5ID0gcHJvcHMuc2hvdyB8fCBUcmFuc2l0aW9uICYmICFleGl0ZWQ7XG4gIHVzZVJvb3RDbG9zZShyb290RWxlbWVudCwgcHJvcHMub25IaWRlLCB7XG4gICAgZGlzYWJsZWQ6ICFwcm9wcy5yb290Q2xvc2UgfHwgcHJvcHMucm9vdENsb3NlRGlzYWJsZWQsXG4gICAgY2xpY2tUcmlnZ2VyOiBwcm9wcy5yb290Q2xvc2VFdmVudFxuICB9KTtcblxuICBpZiAoIW1vdW50T3ZlcmxheSkge1xuICAgIC8vIERvbid0IGJvdGhlciBzaG93aW5nIGFueXRoaW5nIGlmIHdlIGRvbid0IGhhdmUgdG8uXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgY2hpbGQgPSBwcm9wcy5jaGlsZHJlbihfZXh0ZW5kcyh7fSwgcG9wcGVyLCB7XG4gICAgc2hvdzogISFwcm9wcy5zaG93LFxuICAgIHByb3BzOiB7XG4gICAgICBzdHlsZTogc3R5bGVzLFxuICAgICAgcmVmOiBtZXJnZWRSZWZcbiAgICB9LFxuICAgIGFycm93UHJvcHM6IHtcbiAgICAgIHN0eWxlOiBhcnJvd1N0eWxlcyxcbiAgICAgIHJlZjogYXR0YWNoQXJyb3dSZWZcbiAgICB9XG4gIH0pKTtcblxuICBpZiAoVHJhbnNpdGlvbikge1xuICAgIHZhciBvbkV4aXQgPSBwcm9wcy5vbkV4aXQsXG4gICAgICAgIG9uRXhpdGluZyA9IHByb3BzLm9uRXhpdGluZyxcbiAgICAgICAgb25FbnRlciA9IHByb3BzLm9uRW50ZXIsXG4gICAgICAgIG9uRW50ZXJpbmcgPSBwcm9wcy5vbkVudGVyaW5nLFxuICAgICAgICBvbkVudGVyZWQgPSBwcm9wcy5vbkVudGVyZWQ7XG4gICAgY2hpbGQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUcmFuc2l0aW9uLCB7XG4gICAgICBcImluXCI6IHByb3BzLnNob3csXG4gICAgICBhcHBlYXI6IHRydWUsXG4gICAgICBvbkV4aXQ6IG9uRXhpdCxcbiAgICAgIG9uRXhpdGluZzogb25FeGl0aW5nLFxuICAgICAgb25FeGl0ZWQ6IGhhbmRsZUhpZGRlbixcbiAgICAgIG9uRW50ZXI6IG9uRW50ZXIsXG4gICAgICBvbkVudGVyaW5nOiBvbkVudGVyaW5nLFxuICAgICAgb25FbnRlcmVkOiBvbkVudGVyZWRcbiAgICB9LCBjaGlsZCk7XG4gIH1cblxuICByZXR1cm4gY29udGFpbmVyID8gUmVhY3RET00uY3JlYXRlUG9ydGFsKGNoaWxkLCBjb250YWluZXIpIDogbnVsbDtcbn0pO1xuT3ZlcmxheS5kaXNwbGF5TmFtZSA9ICdPdmVybGF5Jztcbk92ZXJsYXkucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogU2V0IHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBPdmVybGF5XG4gICAqL1xuICBzaG93OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogU3BlY2lmeSB3aGVyZSB0aGUgb3ZlcmxheSBlbGVtZW50IGlzIHBvc2l0aW9uZWQgaW4gcmVsYXRpb24gdG8gdGhlIHRhcmdldCBlbGVtZW50ICovXG4gIHBsYWNlbWVudDogUHJvcFR5cGVzLm9uZU9mKHBsYWNlbWVudHMpLFxuXG4gIC8qKlxuICAgKiBBIERPTSBFbGVtZW50LCBSZWYgdG8gYW4gZWxlbWVudCwgb3IgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGVpdGhlci4gVGhlIGB0YXJnZXRgIGVsZW1lbnQgaXMgd2hlcmVcbiAgICogdGhlIG92ZXJsYXkgaXMgcG9zaXRpb25lZCByZWxhdGl2ZSB0by5cbiAgICovXG4gIHRhcmdldDogUHJvcFR5cGVzLmFueSxcblxuICAvKipcbiAgICogQSBET00gRWxlbWVudCwgUmVmIHRvIGFuIGVsZW1lbnQsIG9yIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBlaXRoZXIuIFRoZSBgY29udGFpbmVyYCB3aWxsIGhhdmUgdGhlIFBvcnRhbCBjaGlsZHJlblxuICAgKiBhcHBlbmRlZCB0byBpdC5cbiAgICovXG4gIGNvbnRhaW5lcjogUHJvcFR5cGVzLmFueSxcblxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgUG9wcGVyLmpzIGBmbGlwYCBtb2RpZmllciwgYWxsb3dpbmcgdGhlIE92ZXJsYXkgdG9cbiAgICogYXV0b21hdGljYWxseSBhZGp1c3QgaXQncyBwbGFjZW1lbnQgaW4gY2FzZSBvZiBvdmVybGFwIHdpdGggdGhlIHZpZXdwb3J0IG9yIHRvZ2dsZS5cbiAgICogUmVmZXIgdG8gdGhlIFtmbGlwIGRvY3NdKGh0dHBzOi8vcG9wcGVyLmpzLm9yZy9wb3BwZXItZG9jdW1lbnRhdGlvbi5odG1sI21vZGlmaWVycy4uZmxpcC5lbmFibGVkKSBmb3IgbW9yZSBpbmZvXG4gICAqL1xuICBmbGlwOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQSByZW5kZXIgcHJvcCB0aGF0IHJldHVybnMgYW4gZWxlbWVudCB0byBvdmVybGF5IGFuZCBwb3NpdGlvbi4gU2VlXG4gICAqIHRoZSBbcmVhY3QtcG9wcGVyIGRvY3VtZW50YXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9GZXpWcmFzdGEvcmVhY3QtcG9wcGVyI2NoaWxkcmVuKSBmb3IgbW9yZSBpbmZvLlxuICAgKlxuICAgKiBAdHlwZSB7RnVuY3Rpb24gKHtcbiAgICogICBzaG93OiBib29sZWFuLFxuICAgKiAgIHBsYWNlbWVudDogUGxhY2VtZW50LFxuICAgKiAgIG91dE9mQm91bmRhcmllczogP2Jvb2xlYW4sXG4gICAqICAgc2NoZWR1bGVVcGRhdGU6ICgpID0+IHZvaWQsXG4gICAqICAgcHJvcHM6IHtcbiAgICogICAgIHJlZjogKD9IVE1MRWxlbWVudCkgPT4gdm9pZCxcbiAgICogICAgIHN0eWxlOiB7IFtzdHJpbmddOiBzdHJpbmcgfCBudW1iZXIgfSxcbiAgICogICAgIGFyaWEtbGFiZWxsZWRieTogP3N0cmluZ1xuICAgKiAgIH0sXG4gICAqICAgYXJyb3dQcm9wczoge1xuICAgKiAgICAgcmVmOiAoP0hUTUxFbGVtZW50KSA9PiB2b2lkLFxuICAgKiAgICAgc3R5bGU6IHsgW3N0cmluZ106IHN0cmluZyB8IG51bWJlciB9LFxuICAgKiAgIH0sXG4gICAqIH0pID0+IFJlYWN0LkVsZW1lbnR9XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQ29udHJvbCBob3cgbXVjaCBzcGFjZSB0aGVyZSBpcyBiZXR3ZWVuIHRoZSBlZGdlIG9mIHRoZSBib3VuZGFyeSBlbGVtZW50IGFuZCBvdmVybGF5LlxuICAgKiBBIGNvbnZlbmllbmNlIHNob3J0Y3V0IHRvIHNldHRpbmcgYHBvcHBlckNvbmZpZy5tb2RmaWVycy5wcmV2ZW50T3ZlcmZsb3cucGFkZGluZ2BcbiAgICovXG4gIGNvbnRhaW5lclBhZGRpbmc6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIEEgc2V0IG9mIHBvcHBlciBvcHRpb25zIGFuZCBwcm9wcyBwYXNzZWQgZGlyZWN0bHkgdG8gcmVhY3QtcG9wcGVyJ3MgUG9wcGVyIGNvbXBvbmVudC5cbiAgICovXG4gIHBvcHBlckNvbmZpZzogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogU3BlY2lmeSB3aGV0aGVyIHRoZSBvdmVybGF5IHNob3VsZCB0cmlnZ2VyIGBvbkhpZGVgIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG91dHNpZGUgdGhlIG92ZXJsYXlcbiAgICovXG4gIHJvb3RDbG9zZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFNwZWNpZnkgZXZlbnQgZm9yIHRvZ2dsaW5nIG92ZXJsYXlcbiAgICovXG4gIHJvb3RDbG9zZUV2ZW50OiBQcm9wVHlwZXMub25lT2YoWydjbGljaycsICdtb3VzZWRvd24nXSksXG5cbiAgLyoqXG4gICAqIFNwZWNpZnkgZGlzYWJsZWQgZm9yIGRpc2FibGUgUm9vdENsb3NlV3JhcHBlclxuICAgKi9cbiAgcm9vdENsb3NlRGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBBIENhbGxiYWNrIGZpcmVkIGJ5IHRoZSBPdmVybGF5IHdoZW4gaXQgd2lzaGVzIHRvIGJlIGhpZGRlbi5cbiAgICpcbiAgICogX19yZXF1aXJlZF9fIHdoZW4gYHJvb3RDbG9zZWAgaXMgYHRydWVgLlxuICAgKlxuICAgKiBAdHlwZSBmdW5jXG4gICAqL1xuICBvbkhpZGU6IGZ1bmN0aW9uIG9uSGlkZShwcm9wcykge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmIChwcm9wcy5yb290Q2xvc2UpIHtcbiAgICAgIHZhciBfUHJvcFR5cGVzJGZ1bmM7XG5cbiAgICAgIHJldHVybiAoX1Byb3BUeXBlcyRmdW5jID0gUHJvcFR5cGVzLmZ1bmMpLmlzUmVxdWlyZWQuYXBwbHkoX1Byb3BUeXBlcyRmdW5jLCBbcHJvcHNdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb3BUeXBlcy5mdW5jLmFwcGx5KFByb3BUeXBlcywgW3Byb3BzXS5jb25jYXQoYXJncykpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBIGByZWFjdC10cmFuc2l0aW9uLWdyb3VwQDIuMC4wYCBgPFRyYW5zaXRpb24vPmAgY29tcG9uZW50XG4gICAqIHVzZWQgdG8gYW5pbWF0ZSB0aGUgb3ZlcmxheSBhcyBpdCBjaGFuZ2VzIHZpc2liaWxpdHkuXG4gICAqL1xuICAvLyBAdHMtaWdub3JlXG4gIHRyYW5zaXRpb246IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBPdmVybGF5IHRyYW5zaXRpb25zIGluXG4gICAqL1xuICBvbkVudGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYXMgdGhlIE92ZXJsYXkgYmVnaW5zIHRvIHRyYW5zaXRpb24gaW5cbiAgICovXG4gIG9uRW50ZXJpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgT3ZlcmxheSBmaW5pc2hlcyB0cmFuc2l0aW9uaW5nIGluXG4gICAqL1xuICBvbkVudGVyZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCByaWdodCBiZWZvcmUgdGhlIE92ZXJsYXkgdHJhbnNpdGlvbnMgb3V0XG4gICAqL1xuICBvbkV4aXQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhcyB0aGUgT3ZlcmxheSBiZWdpbnMgdG8gdHJhbnNpdGlvbiBvdXRcbiAgICovXG4gIG9uRXhpdGluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBPdmVybGF5IGZpbmlzaGVzIHRyYW5zaXRpb25pbmcgb3V0XG4gICAqL1xuICBvbkV4aXRlZDogUHJvcFR5cGVzLmZ1bmNcbn07XG5leHBvcnQgZGVmYXVsdCBPdmVybGF5OyIsImltcG9ydCBpc1dpbmRvdyBmcm9tICdkb20taGVscGVycy9pc1dpbmRvdyc7XG5pbXBvcnQgb3duZXJEb2N1bWVudCBmcm9tICdkb20taGVscGVycy9vd25lckRvY3VtZW50JztcblxuZnVuY3Rpb24gaXNCb2R5KG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUgJiYgbm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdib2R5Jztcbn1cblxuZnVuY3Rpb24gYm9keUlzT3ZlcmZsb3dpbmcobm9kZSkge1xuICB2YXIgZG9jID0gaXNXaW5kb3cobm9kZSkgPyBvd25lckRvY3VtZW50KCkgOiBvd25lckRvY3VtZW50KG5vZGUpO1xuICB2YXIgd2luID0gaXNXaW5kb3cobm9kZSkgfHwgZG9jLmRlZmF1bHRWaWV3O1xuICByZXR1cm4gZG9jLmJvZHkuY2xpZW50V2lkdGggPCB3aW4uaW5uZXJXaWR0aDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNPdmVyZmxvd2luZyhjb250YWluZXIpIHtcbiAgdmFyIHdpbiA9IGlzV2luZG93KGNvbnRhaW5lcik7XG4gIHJldHVybiB3aW4gfHwgaXNCb2R5KGNvbnRhaW5lcikgPyBib2R5SXNPdmVyZmxvd2luZyhjb250YWluZXIpIDogY29udGFpbmVyLnNjcm9sbEhlaWdodCA+IGNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG59IiwidmFyIEJMQUNLTElTVCA9IFsndGVtcGxhdGUnLCAnc2NyaXB0JywgJ3N0eWxlJ107XG5cbnZhciBpc0hpZGFibGUgPSBmdW5jdGlvbiBpc0hpZGFibGUoX3JlZikge1xuICB2YXIgbm9kZVR5cGUgPSBfcmVmLm5vZGVUeXBlLFxuICAgICAgdGFnTmFtZSA9IF9yZWYudGFnTmFtZTtcbiAgcmV0dXJuIG5vZGVUeXBlID09PSAxICYmIEJMQUNLTElTVC5pbmRleE9mKHRhZ05hbWUudG9Mb3dlckNhc2UoKSkgPT09IC0xO1xufTtcblxudmFyIHNpYmxpbmdzID0gZnVuY3Rpb24gc2libGluZ3MoY29udGFpbmVyLCBleGNsdWRlLCBjYikge1xuICBbXS5mb3JFYWNoLmNhbGwoY29udGFpbmVyLmNoaWxkcmVuLCBmdW5jdGlvbiAobm9kZSkge1xuICAgIGlmIChleGNsdWRlLmluZGV4T2Yobm9kZSkgPT09IC0xICYmIGlzSGlkYWJsZShub2RlKSkge1xuICAgICAgY2Iobm9kZSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBhcmlhSGlkZGVuKHNob3csIG5vZGUpIHtcbiAgaWYgKCFub2RlKSByZXR1cm47XG5cbiAgaWYgKHNob3cpIHtcbiAgICBub2RlLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICB9IGVsc2Uge1xuICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gaGlkZVNpYmxpbmdzKGNvbnRhaW5lciwgX3JlZjIpIHtcbiAgdmFyIGRpYWxvZyA9IF9yZWYyLmRpYWxvZyxcbiAgICAgIGJhY2tkcm9wID0gX3JlZjIuYmFja2Ryb3A7XG4gIHNpYmxpbmdzKGNvbnRhaW5lciwgW2RpYWxvZywgYmFja2Ryb3BdLCBmdW5jdGlvbiAobm9kZSkge1xuICAgIHJldHVybiBhcmlhSGlkZGVuKHRydWUsIG5vZGUpO1xuICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzaG93U2libGluZ3MoY29udGFpbmVyLCBfcmVmMykge1xuICB2YXIgZGlhbG9nID0gX3JlZjMuZGlhbG9nLFxuICAgICAgYmFja2Ryb3AgPSBfcmVmMy5iYWNrZHJvcDtcbiAgc2libGluZ3MoY29udGFpbmVyLCBbZGlhbG9nLCBiYWNrZHJvcF0sIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgcmV0dXJuIGFyaWFIaWRkZW4oZmFsc2UsIG5vZGUpO1xuICB9KTtcbn0iLCJpbXBvcnQgb3duZXJEb2N1bWVudCBmcm9tICdkb20taGVscGVycy9vd25lckRvY3VtZW50JztcbmltcG9ydCBzYWZlRmluZERPTU5vZGUgZnJvbSAnLi9zYWZlRmluZERPTU5vZGUnO1xuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChjb21wb25lbnRPckVsZW1lbnQpIHtcbiAgcmV0dXJuIG93bmVyRG9jdW1lbnQoc2FmZUZpbmRET01Ob2RlKGNvbXBvbmVudE9yRWxlbWVudCkpO1xufSk7IiwiaW1wb3J0IGFycm93IGZyb20gJ0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvYXJyb3cnO1xuaW1wb3J0IGNvbXB1dGVTdHlsZXMgZnJvbSAnQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9jb21wdXRlU3R5bGVzJztcbmltcG9ydCBldmVudExpc3RlbmVycyBmcm9tICdAcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2V2ZW50TGlzdGVuZXJzJztcbmltcG9ydCBmbGlwIGZyb20gJ0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvZmxpcCc7XG5pbXBvcnQgaGlkZSBmcm9tICdAcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2hpZGUnO1xuaW1wb3J0IG9mZnNldCBmcm9tICdAcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL29mZnNldCc7XG5pbXBvcnQgcG9wcGVyT2Zmc2V0cyBmcm9tICdAcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL3BvcHBlck9mZnNldHMnO1xuaW1wb3J0IHByZXZlbnRPdmVyZmxvdyBmcm9tICdAcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL3ByZXZlbnRPdmVyZmxvdyc7XG5pbXBvcnQgeyBwbGFjZW1lbnRzIH0gZnJvbSAnQHBvcHBlcmpzL2NvcmUvbGliL2VudW1zJztcbmltcG9ydCB7IHBvcHBlckdlbmVyYXRvciB9IGZyb20gJ0Bwb3BwZXJqcy9jb3JlL2xpYi9wb3BwZXItYmFzZSc7IC8vIEZvciB0aGUgY29tbW9uIEpTIGJ1aWxkIHdlIHdpbGwgdHVybiB0aGlzIGZpbGUgaW50byBhIGJ1bmRsZSB3aXRoIG5vIGltcG9ydHMuXG4vLyBUaGlzIGlzIGIvYyB0aGUgUG9wcGVyIGxpYiBpcyBhbGwgZXNtIGZpbGVzLCBhbmQgd291bGQgYnJlYWsgaW4gYSBjb21tb24ganMgb25seSBlbnZpcm9ubWVudFxuXG5leHBvcnQgdmFyIGNyZWF0ZVBvcHBlciA9IHBvcHBlckdlbmVyYXRvcih7XG4gIGRlZmF1bHRNb2RpZmllcnM6IFtoaWRlLCBwb3BwZXJPZmZzZXRzLCBjb21wdXRlU3R5bGVzLCBldmVudExpc3RlbmVycywgb2Zmc2V0LCBmbGlwLCBwcmV2ZW50T3ZlcmZsb3csIGFycm93XVxufSk7XG5leHBvcnQgeyBwbGFjZW1lbnRzIH07IiwiaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzYWZlRmluZERPTU5vZGUoY29tcG9uZW50T3JFbGVtZW50KSB7XG4gIGlmIChjb21wb25lbnRPckVsZW1lbnQgJiYgJ3NldFN0YXRlJyBpbiBjb21wb25lbnRPckVsZW1lbnQpIHtcbiAgICByZXR1cm4gUmVhY3RET00uZmluZERPTU5vZGUoY29tcG9uZW50T3JFbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBjb21wb25lbnRPckVsZW1lbnQgIT0gbnVsbCA/IGNvbXBvbmVudE9yRWxlbWVudCA6IG51bGw7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU2FmZVN0YXRlIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZVNhZmVTdGF0ZSc7XG5pbXBvcnQgeyBjcmVhdGVQb3BwZXIgfSBmcm9tICcuL3BvcHBlcic7XG52YXIgaW5pdGlhbFBvcHBlclN0eWxlcyA9IHtcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHRvcDogJzAnLFxuICBsZWZ0OiAnMCcsXG4gIG9wYWNpdHk6ICcwJyxcbiAgcG9pbnRlckV2ZW50czogJ25vbmUnXG59O1xudmFyIGluaXRpYWxBcnJvd1N0eWxlcyA9IHt9OyAvLyB1bnRpbCBkb2NqcyBzdXBwb3J0cyB0eXBlIGV4cG9ydHMuLi5cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTW9kaWZpZXJNYXAobW9kaWZpZXJzKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcblxuICBpZiAoIUFycmF5LmlzQXJyYXkobW9kaWZpZXJzKSkge1xuICAgIHJldHVybiBtb2RpZmllcnMgfHwgcmVzdWx0O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcblxuXG4gIG1vZGlmaWVycyA9PSBudWxsID8gdm9pZCAwIDogbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG0pIHtcbiAgICByZXN1bHRbbS5uYW1lXSA9IG07XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRvTW9kaWZpZXJBcnJheShtYXApIHtcbiAgaWYgKG1hcCA9PT0gdm9pZCAwKSB7XG4gICAgbWFwID0ge307XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShtYXApKSByZXR1cm4gbWFwO1xuICByZXR1cm4gT2JqZWN0LmtleXMobWFwKS5tYXAoZnVuY3Rpb24gKGspIHtcbiAgICBtYXBba10ubmFtZSA9IGs7XG4gICAgcmV0dXJuIG1hcFtrXTtcbiAgfSk7XG59XG5cbi8qKlxuICogUG9zaXRpb24gYW4gZWxlbWVudCByZWxhdGl2ZSBzb21lIHJlZmVyZW5jZSBlbGVtZW50IHVzaW5nIFBvcHBlci5qc1xuICpcbiAqIEBwYXJhbSByZWZlcmVuY2VFbGVtZW50XG4gKiBAcGFyYW0gcG9wcGVyRWxlbWVudFxuICogQHBhcmFtIHtvYmplY3R9ICAgICAgb3B0aW9uc1xuICogQHBhcmFtIHtvYmplY3Q9fSAgICAgb3B0aW9ucy5tb2RpZmllcnMgUG9wcGVyLmpzIG1vZGlmaWVyc1xuICogQHBhcmFtIHtib29sZWFuPX0gICAgb3B0aW9ucy5lbmFibGVkIHRvZ2dsZSB0aGUgcG9wcGVyIGZ1bmN0aW9uYWxpdHkgb24vb2ZmXG4gKiBAcGFyYW0ge3N0cmluZz19ICAgICBvcHRpb25zLnBsYWNlbWVudCBUaGUgcG9wcGVyIGVsZW1lbnQgcGxhY2VtZW50IHJlbGF0aXZlIHRvIHRoZSByZWZlcmVuY2UgZWxlbWVudFxuICogQHBhcmFtIHtzdHJpbmc9fSAgICAgb3B0aW9ucy5zdHJhdGVneSB0aGUgcG9zaXRpb25pbmcgc3RyYXRlZ3lcbiAqIEBwYXJhbSB7Ym9vbGVhbj19ICAgIG9wdGlvbnMuZXZlbnRzRW5hYmxlZCBoYXZlIFBvcHBlciBsaXN0ZW4gb24gd2luZG93IHJlc2l6ZSBldmVudHMgdG8gcmVwb3NpdGlvbiB0aGUgZWxlbWVudFxuICogQHBhcmFtIHtmdW5jdGlvbj19ICAgb3B0aW9ucy5vbkNyZWF0ZSBjYWxsZWQgd2hlbiB0aGUgcG9wcGVyIGlzIGNyZWF0ZWRcbiAqIEBwYXJhbSB7ZnVuY3Rpb249fSAgIG9wdGlvbnMub25VcGRhdGUgY2FsbGVkIHdoZW4gdGhlIHBvcHBlciBpcyB1cGRhdGVkXG4gKlxuICogQHJldHVybnMge1VzZVBvcHBlclN0YXRlfSBUaGUgcG9wcGVyIHN0YXRlXG4gKi9cbmZ1bmN0aW9uIHVzZVBvcHBlcihyZWZlcmVuY2VFbGVtZW50LCBwb3BwZXJFbGVtZW50LCBfdGVtcCkge1xuICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgX3JlZiRlbmFibGVkID0gX3JlZi5lbmFibGVkLFxuICAgICAgZW5hYmxlZCA9IF9yZWYkZW5hYmxlZCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWYkZW5hYmxlZCxcbiAgICAgIF9yZWYkcGxhY2VtZW50ID0gX3JlZi5wbGFjZW1lbnQsXG4gICAgICBwbGFjZW1lbnQgPSBfcmVmJHBsYWNlbWVudCA9PT0gdm9pZCAwID8gJ2JvdHRvbScgOiBfcmVmJHBsYWNlbWVudCxcbiAgICAgIF9yZWYkc3RyYXRlZ3kgPSBfcmVmLnN0cmF0ZWd5LFxuICAgICAgc3RyYXRlZ3kgPSBfcmVmJHN0cmF0ZWd5ID09PSB2b2lkIDAgPyAnYWJzb2x1dGUnIDogX3JlZiRzdHJhdGVneSxcbiAgICAgIF9yZWYkZXZlbnRzRW5hYmxlZCA9IF9yZWYuZXZlbnRzRW5hYmxlZCxcbiAgICAgIGV2ZW50c0VuYWJsZWQgPSBfcmVmJGV2ZW50c0VuYWJsZWQgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmJGV2ZW50c0VuYWJsZWQsXG4gICAgICB1c2VyTW9kaWZpZXJzID0gX3JlZi5tb2RpZmllcnMsXG4gICAgICBwb3BwZXJPcHRpb25zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgW1wiZW5hYmxlZFwiLCBcInBsYWNlbWVudFwiLCBcInN0cmF0ZWd5XCIsIFwiZXZlbnRzRW5hYmxlZFwiLCBcIm1vZGlmaWVyc1wiXSk7XG5cbiAgdmFyIHBvcHBlckluc3RhbmNlUmVmID0gdXNlUmVmKCk7XG4gIHZhciBzY2hlZHVsZVVwZGF0ZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocG9wcGVySW5zdGFuY2VSZWYuY3VycmVudCkge1xuICAgICAgcG9wcGVySW5zdGFuY2VSZWYuY3VycmVudC51cGRhdGUoKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICB2YXIgX3VzZVNhZmVTdGF0ZSA9IHVzZVNhZmVTdGF0ZSh1c2VTdGF0ZSh7XG4gICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgc2NoZWR1bGVVcGRhdGU6IHNjaGVkdWxlVXBkYXRlLFxuICAgIG91dE9mQm91bmRhcmllczogZmFsc2UsXG4gICAgc3R5bGVzOiBpbml0aWFsUG9wcGVyU3R5bGVzLFxuICAgIGFycm93U3R5bGVzOiBpbml0aWFsQXJyb3dTdHlsZXNcbiAgfSkpLFxuICAgICAgc3RhdGUgPSBfdXNlU2FmZVN0YXRlWzBdLFxuICAgICAgc2V0U3RhdGUgPSBfdXNlU2FmZVN0YXRlWzFdO1xuXG4gIHZhciB1cGRhdGVNb2RpZmllciA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiAndXBkYXRlU3RhdGVNb2RpZmllcicsXG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgcGhhc2U6ICdhZnRlcldyaXRlJyxcbiAgICAgIHJlcXVpcmVzOiBbJ2NvbXB1dGVTdHlsZXMnXSxcbiAgICAgIGZuOiBmdW5jdGlvbiBmbihkYXRhKSB7XG4gICAgICAgIHZhciBfZGF0YSRzdGF0ZSRtb2RpZmllcnMsIF9kYXRhJHN0YXRlJHN0eWxlcywgX2RhdGEkc3RhdGUkc3R5bGVzMjtcblxuICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgc2NoZWR1bGVVcGRhdGU6IHNjaGVkdWxlVXBkYXRlLFxuICAgICAgICAgIG91dE9mQm91bmRhcmllczogISEoKF9kYXRhJHN0YXRlJG1vZGlmaWVycyA9IGRhdGEuc3RhdGUubW9kaWZpZXJzRGF0YS5oaWRlKSA9PSBudWxsID8gdm9pZCAwIDogX2RhdGEkc3RhdGUkbW9kaWZpZXJzLmlzUmVmZXJlbmNlSGlkZGVuKSxcbiAgICAgICAgICBwbGFjZW1lbnQ6IGRhdGEuc3RhdGUucGxhY2VtZW50LFxuICAgICAgICAgIHN0eWxlczogX2V4dGVuZHMoe30sIChfZGF0YSRzdGF0ZSRzdHlsZXMgPSBkYXRhLnN0YXRlLnN0eWxlcykgPT0gbnVsbCA/IHZvaWQgMCA6IF9kYXRhJHN0YXRlJHN0eWxlcy5wb3BwZXIpLFxuICAgICAgICAgIGFycm93U3R5bGVzOiBfZXh0ZW5kcyh7fSwgKF9kYXRhJHN0YXRlJHN0eWxlczIgPSBkYXRhLnN0YXRlLnN0eWxlcykgPT0gbnVsbCA/IHZvaWQgMCA6IF9kYXRhJHN0YXRlJHN0eWxlczIuYXJyb3cpLFxuICAgICAgICAgIHN0YXRlOiBkYXRhLnN0YXRlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtzY2hlZHVsZVVwZGF0ZSwgc2V0U3RhdGVdKTtcbiAgdmFyIG1vZGlmaWVycyA9IHRvTW9kaWZpZXJBcnJheSh1c2VyTW9kaWZpZXJzKTtcbiAgdmFyIGV2ZW50c01vZGlmaWVyID0gbW9kaWZpZXJzLmZpbmQoZnVuY3Rpb24gKG0pIHtcbiAgICByZXR1cm4gbS5uYW1lID09PSAnZXZlbnRMaXN0ZW5lcnMnO1xuICB9KTtcblxuICBpZiAoIWV2ZW50c01vZGlmaWVyICYmIGV2ZW50c0VuYWJsZWQpIHtcbiAgICBldmVudHNNb2RpZmllciA9IHtcbiAgICAgIG5hbWU6ICdldmVudExpc3RlbmVycycsXG4gICAgICBlbmFibGVkOiB0cnVlXG4gICAgfTtcbiAgICBtb2RpZmllcnMgPSBbXS5jb25jYXQobW9kaWZpZXJzLCBbZXZlbnRzTW9kaWZpZXJdKTtcbiAgfSAvLyBBIHBsYWNlbWVudCBkaWZmZXJlbmNlIGluIHN0YXRlIG1lYW5zIHBvcHBlciBkZXRlcm1pbmVkIGEgbmV3IHBsYWNlbWVudFxuICAvLyBhcGFydCBmcm9tIHRoZSBwcm9wcyB2YWx1ZS4gQnkgdGhlIHRpbWUgdGhlIHBvcHBlciBlbGVtZW50IGlzIHJlbmRlcmVkIHdpdGhcbiAgLy8gdGhlIG5ldyBwb3NpdGlvbiBQb3BwZXIgaGFzIGFscmVhZHkgbWVhc3VyZWQgaXQsIGlmIHRoZSBwbGFjZSBjaGFuZ2UgdHJpZ2dlcnNcbiAgLy8gYSBzaXplIGNoYW5nZSBpdCB3aWxsIHJlc3VsdCBpbiBhIG1pc2FsaWduZWQgcG9wcGVyLiBTbyB3ZSBzY2hlZHVsZSBhbiB1cGRhdGUgdG8gYmUgc3VyZS5cblxuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgc2NoZWR1bGVVcGRhdGUoKTtcbiAgfSwgW3N0YXRlLnBsYWNlbWVudCwgc2NoZWR1bGVVcGRhdGVdKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXBvcHBlckluc3RhbmNlUmVmLmN1cnJlbnQgfHwgIWVuYWJsZWQpIHJldHVybjtcbiAgICBwb3BwZXJJbnN0YW5jZVJlZi5jdXJyZW50LnNldE9wdGlvbnMoe1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBzdHJhdGVneTogc3RyYXRlZ3ksXG4gICAgICBtb2RpZmllcnM6IFtdLmNvbmNhdChtb2RpZmllcnMsIFt1cGRhdGVNb2RpZmllcl0pXG4gICAgfSk7IC8vIGludGVudGlvbmFsbHkgTk9UIHJlLXJ1bm5pbmcgb24gbmV3IG1vZGlmaWVyc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW3N0cmF0ZWd5LCBwbGFjZW1lbnQsIGV2ZW50c01vZGlmaWVyLmVuYWJsZWQsIHVwZGF0ZU1vZGlmaWVyLCBlbmFibGVkXSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFlbmFibGVkIHx8IHJlZmVyZW5jZUVsZW1lbnQgPT0gbnVsbCB8fCBwb3BwZXJFbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcG9wcGVySW5zdGFuY2VSZWYuY3VycmVudCA9IGNyZWF0ZVBvcHBlcihyZWZlcmVuY2VFbGVtZW50LCBwb3BwZXJFbGVtZW50LCBfZXh0ZW5kcyh7fSwgcG9wcGVyT3B0aW9ucywge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBzdHJhdGVneTogc3RyYXRlZ3ksXG4gICAgICBtb2RpZmllcnM6IFtdLmNvbmNhdChtb2RpZmllcnMsIFt1cGRhdGVNb2RpZmllcl0pXG4gICAgfSkpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAocG9wcGVySW5zdGFuY2VSZWYuY3VycmVudCAhPSBudWxsKSB7XG4gICAgICAgIHBvcHBlckluc3RhbmNlUmVmLmN1cnJlbnQuZGVzdHJveSgpO1xuICAgICAgICBwb3BwZXJJbnN0YW5jZVJlZi5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICBzZXRTdGF0ZShmdW5jdGlvbiAocykge1xuICAgICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgcywge1xuICAgICAgICAgICAgc3R5bGVzOiBpbml0aWFsUG9wcGVyU3R5bGVzLFxuICAgICAgICAgICAgYXJyb3dTdHlsZXM6IGluaXRpYWxBcnJvd1N0eWxlc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9OyAvLyBUaGlzIGlzIG9ubHkgcnVuIG9uY2UgdG8gX2NyZWF0ZV8gdGhlIHBvcHBlclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW2VuYWJsZWQsIHJlZmVyZW5jZUVsZW1lbnQsIHBvcHBlckVsZW1lbnRdKTtcbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VQb3BwZXI7IiwiaW1wb3J0IGNvbnRhaW5zIGZyb20gJ2RvbS1oZWxwZXJzL2NvbnRhaW5zJztcbmltcG9ydCBsaXN0ZW4gZnJvbSAnZG9tLWhlbHBlcnMvbGlzdGVuJztcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VFdmVudENhbGxiYWNrIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZUV2ZW50Q2FsbGJhY2snO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAnd2FybmluZyc7XG5pbXBvcnQgb3duZXJEb2N1bWVudCBmcm9tICcuL293bmVyRG9jdW1lbnQnO1xudmFyIGVzY2FwZUtleUNvZGUgPSAyNztcblxudmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKCkge307XG5cbmZ1bmN0aW9uIGlzTGVmdENsaWNrRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuIGV2ZW50LmJ1dHRvbiA9PT0gMDtcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gIHJldHVybiAhIShldmVudC5tZXRhS2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5KTtcbn1cblxudmFyIGdldFJlZlRhcmdldCA9IGZ1bmN0aW9uIGdldFJlZlRhcmdldChyZWYpIHtcbiAgcmV0dXJuIHJlZiAmJiAoJ2N1cnJlbnQnIGluIHJlZiA/IHJlZi5jdXJyZW50IDogcmVmKTtcbn07XG5cbi8qKlxuICogVGhlIGB1c2VSb290Q2xvc2VgIGhvb2sgcmVnaXN0ZXJzIHlvdXIgY2FsbGJhY2sgb24gdGhlIGRvY3VtZW50XG4gKiB3aGVuIHJlbmRlcmVkLiBQb3dlcnMgdGhlIGA8T3ZlcmxheS8+YCBjb21wb25lbnQuIFRoaXMgaXMgdXNlZCBhY2hpZXZlIG1vZGFsXG4gKiBzdHlsZSBiZWhhdmlvciB3aGVyZSB5b3VyIGNhbGxiYWNrIGlzIHRyaWdnZXJlZCB3aGVuIHRoZSB1c2VyIHRyaWVzIHRvXG4gKiBpbnRlcmFjdCB3aXRoIHRoZSByZXN0IG9mIHRoZSBkb2N1bWVudCBvciBoaXRzIHRoZSBgZXNjYCBrZXkuXG4gKlxuICogQHBhcmFtIHtSZWY8SFRNTEVsZW1lbnQ+fCBIVE1MRWxlbWVudH0gcmVmICBUaGUgZWxlbWVudCBib3VuZGFyeVxuICogQHBhcmFtIHtmdW5jdGlvbn0gb25Sb290Q2xvc2VcbiAqIEBwYXJhbSB7b2JqZWN0PX0gIG9wdGlvbnNcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG9wdGlvbnMuZGlzYWJsZWRcbiAqIEBwYXJhbSB7c3RyaW5nPX0gIG9wdGlvbnMuY2xpY2tUcmlnZ2VyIFRoZSBET00gZXZlbnQgbmFtZSAoY2xpY2ssIG1vdXNlZG93biwgZXRjKSB0byBhdHRhY2ggbGlzdGVuZXJzIG9uXG4gKi9cbmZ1bmN0aW9uIHVzZVJvb3RDbG9zZShyZWYsIG9uUm9vdENsb3NlLCBfdGVtcCkge1xuICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgZGlzYWJsZWQgPSBfcmVmLmRpc2FibGVkLFxuICAgICAgX3JlZiRjbGlja1RyaWdnZXIgPSBfcmVmLmNsaWNrVHJpZ2dlcixcbiAgICAgIGNsaWNrVHJpZ2dlciA9IF9yZWYkY2xpY2tUcmlnZ2VyID09PSB2b2lkIDAgPyAnY2xpY2snIDogX3JlZiRjbGlja1RyaWdnZXI7XG5cbiAgdmFyIHByZXZlbnRNb3VzZVJvb3RDbG9zZVJlZiA9IHVzZVJlZihmYWxzZSk7XG4gIHZhciBvbkNsb3NlID0gb25Sb290Q2xvc2UgfHwgbm9vcDtcbiAgdmFyIGhhbmRsZU1vdXNlQ2FwdHVyZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIGN1cnJlbnRUYXJnZXQgPSBnZXRSZWZUYXJnZXQocmVmKTtcbiAgICB3YXJuaW5nKCEhY3VycmVudFRhcmdldCwgJ1Jvb3RDbG9zZSBjYXB0dXJlZCBhIGNsb3NlIGV2ZW50IGJ1dCBkb2VzIG5vdCBoYXZlIGEgcmVmIHRvIGNvbXBhcmUgaXQgdG8uICcgKyAndXNlUm9vdENsb3NlKCksIHNob3VsZCBiZSBwYXNzZWQgYSByZWYgdGhhdCByZXNvbHZlcyB0byBhIERPTSBub2RlJyk7XG4gICAgcHJldmVudE1vdXNlUm9vdENsb3NlUmVmLmN1cnJlbnQgPSAhY3VycmVudFRhcmdldCB8fCBpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTGVmdENsaWNrRXZlbnQoZSkgfHwgISFjb250YWlucyhjdXJyZW50VGFyZ2V0LCBlLnRhcmdldCk7XG4gIH0sIFtyZWZdKTtcbiAgdmFyIGhhbmRsZU1vdXNlID0gdXNlRXZlbnRDYWxsYmFjayhmdW5jdGlvbiAoZSkge1xuICAgIGlmICghcHJldmVudE1vdXNlUm9vdENsb3NlUmVmLmN1cnJlbnQpIHtcbiAgICAgIG9uQ2xvc2UoZSk7XG4gICAgfVxuICB9KTtcbiAgdmFyIGhhbmRsZUtleVVwID0gdXNlRXZlbnRDYWxsYmFjayhmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IGVzY2FwZUtleUNvZGUpIHtcbiAgICAgIG9uQ2xvc2UoZSk7XG4gICAgfVxuICB9KTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZGlzYWJsZWQgfHwgcmVmID09IG51bGwpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgdmFyIGRvYyA9IG93bmVyRG9jdW1lbnQoZ2V0UmVmVGFyZ2V0KHJlZikpOyAvLyBVc2UgY2FwdHVyZSBmb3IgdGhpcyBsaXN0ZW5lciBzbyBpdCBmaXJlcyBiZWZvcmUgUmVhY3QncyBsaXN0ZW5lciwgdG9cbiAgICAvLyBhdm9pZCBmYWxzZSBwb3NpdGl2ZXMgaW4gdGhlIGNvbnRhaW5zKCkgY2hlY2sgYmVsb3cgaWYgdGhlIHRhcmdldCBET01cbiAgICAvLyBlbGVtZW50IGlzIHJlbW92ZWQgaW4gdGhlIFJlYWN0IG1vdXNlIGNhbGxiYWNrLlxuXG4gICAgdmFyIHJlbW92ZU1vdXNlQ2FwdHVyZUxpc3RlbmVyID0gbGlzdGVuKGRvYywgY2xpY2tUcmlnZ2VyLCBoYW5kbGVNb3VzZUNhcHR1cmUsIHRydWUpO1xuICAgIHZhciByZW1vdmVNb3VzZUxpc3RlbmVyID0gbGlzdGVuKGRvYywgY2xpY2tUcmlnZ2VyLCBoYW5kbGVNb3VzZSk7XG4gICAgdmFyIHJlbW92ZUtleXVwTGlzdGVuZXIgPSBsaXN0ZW4oZG9jLCAna2V5dXAnLCBoYW5kbGVLZXlVcCk7XG4gICAgdmFyIG1vYmlsZVNhZmFyaUhhY2tMaXN0ZW5lcnMgPSBbXTtcblxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2MuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBtb2JpbGVTYWZhcmlIYWNrTGlzdGVuZXJzID0gW10uc2xpY2UuY2FsbChkb2MuYm9keS5jaGlsZHJlbikubWFwKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuKGVsLCAnbW91c2Vtb3ZlJywgbm9vcCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmVtb3ZlTW91c2VDYXB0dXJlTGlzdGVuZXIoKTtcbiAgICAgIHJlbW92ZU1vdXNlTGlzdGVuZXIoKTtcbiAgICAgIHJlbW92ZUtleXVwTGlzdGVuZXIoKTtcbiAgICAgIG1vYmlsZVNhZmFyaUhhY2tMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAocmVtb3ZlKSB7XG4gICAgICAgIHJldHVybiByZW1vdmUoKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0sIFtyZWYsIGRpc2FibGVkLCBjbGlja1RyaWdnZXIsIGhhbmRsZU1vdXNlQ2FwdHVyZSwgaGFuZGxlTW91c2UsIGhhbmRsZUtleVVwXSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJvb3RDbG9zZTsiLCJpbXBvcnQgb3duZXJEb2N1bWVudCBmcm9tICdkb20taGVscGVycy9vd25lckRvY3VtZW50JztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgdmFyIHJlc29sdmVDb250YWluZXJSZWYgPSBmdW5jdGlvbiByZXNvbHZlQ29udGFpbmVyUmVmKHJlZikge1xuICB2YXIgX3JlZjtcblxuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIG51bGw7XG4gIGlmIChyZWYgPT0gbnVsbCkgcmV0dXJuIG93bmVyRG9jdW1lbnQoKS5ib2R5O1xuICBpZiAodHlwZW9mIHJlZiA9PT0gJ2Z1bmN0aW9uJykgcmVmID0gcmVmKCk7XG4gIGlmIChyZWYgJiYgJ2N1cnJlbnQnIGluIHJlZikgcmVmID0gcmVmLmN1cnJlbnQ7XG4gIGlmICgoX3JlZiA9IHJlZikgPT0gbnVsbCA/IHZvaWQgMCA6IF9yZWYubm9kZVR5cGUpIHJldHVybiByZWYgfHwgbnVsbDtcbiAgcmV0dXJuIG51bGw7XG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlV2FpdEZvckRPTVJlZihyZWYsIG9uUmVzb2x2ZWQpIHtcbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcmVzb2x2ZUNvbnRhaW5lclJlZihyZWYpO1xuICB9KSxcbiAgICAgIHJlc29sdmVkUmVmID0gX3VzZVN0YXRlWzBdLFxuICAgICAgc2V0UmVmID0gX3VzZVN0YXRlWzFdO1xuXG4gIGlmICghcmVzb2x2ZWRSZWYpIHtcbiAgICB2YXIgZWFybHlSZWYgPSByZXNvbHZlQ29udGFpbmVyUmVmKHJlZik7XG4gICAgaWYgKGVhcmx5UmVmKSBzZXRSZWYoZWFybHlSZWYpO1xuICB9XG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAob25SZXNvbHZlZCAmJiByZXNvbHZlZFJlZikge1xuICAgICAgb25SZXNvbHZlZChyZXNvbHZlZFJlZik7XG4gICAgfVxuICB9LCBbb25SZXNvbHZlZCwgcmVzb2x2ZWRSZWZdKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbmV4dFJlZiA9IHJlc29sdmVDb250YWluZXJSZWYocmVmKTtcblxuICAgIGlmIChuZXh0UmVmICE9PSByZXNvbHZlZFJlZikge1xuICAgICAgc2V0UmVmKG5leHRSZWYpO1xuICAgIH1cbiAgfSwgW3JlZiwgcmVzb2x2ZWRSZWZdKTtcbiAgcmV0dXJuIHJlc29sdmVkUmVmO1xufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBYUE7QUFsRUE7QUFxRUE7Ozs7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzQkE7QUE2QkE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3hPQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQURBO0FBVkE7QUFIQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUpBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUF2REE7QUF5REE7QUFDQTtBQURBO0FBSUE7Ozs7Ozs7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBaEJBO0FBbUJBOzs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMzRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXlCQTtBQUNBO0FBMUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUF3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQXhKQTtBQTBKQTtBQUNBO0FBQ0E7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7QUMzYUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN4S0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQURBO0FBZkE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQU5BO0FBQ0E7QUFXQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFwSUE7QUFzSUE7Ozs7Ozs7Ozs7OztBQ3hRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdENBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBaEJBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNqS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3JGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=