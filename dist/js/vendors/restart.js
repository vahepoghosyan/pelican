(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors/restart"],{

/***/ "./node_modules/@restart/context/forwardRef.js":
/*!*****************************************************!*\
  !*** ./node_modules/@restart/context/forwardRef.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = forwardRef;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function forwardRef(renderFn, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      propTypes = _ref.propTypes,
      defaultProps = _ref.defaultProps,
      _ref$allowFallback = _ref.allowFallback,
      allowFallback = _ref$allowFallback === void 0 ? false : _ref$allowFallback,
      _ref$displayName = _ref.displayName,
      displayName = _ref$displayName === void 0 ? renderFn.name || renderFn.displayName : _ref$displayName;

  var render = function render(props, ref) {
    return renderFn(props, ref);
  };

  return Object.assign(_react.default.forwardRef || !allowFallback ? _react.default.forwardRef(render) : function (props) {
    return render(props, null);
  }, {
    displayName: displayName,
    propTypes: propTypes,
    defaultProps: defaultProps
  });
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useCallbackRef.js":
/*!***********************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useCallbackRef.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useCallbackRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * A convenience hook around `useState` designed to be paired with
 * the component [callback ref](https://reactjs.org/docs/refs-and-the-dom.html#callback-refs) api.
 * Callback refs are useful over `useRef()` when you need to respond to the ref being set
 * instead of lazily accessing it in an effect.
 *
 * ```ts
 * const [element, attachRef] = useCallbackRef<HTMLDivElement>()
 *
 * useEffect(() => {
 *   if (!element) return
 *
 *   const calendar = new FullCalendar.Calendar(element)
 *
 *   return () => {
 *     calendar.destroy()
 *   }
 * }, [element])
 *
 * return <div ref={attachRef} />
 * ```
 *
 * @category refs
 */

function useCallbackRef() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useCommittedRef.js":
/*!************************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useCommittedRef.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Creates a `Ref` whose value is updated in an effect, ensuring the most recent
 * value is the one rendered with. Generally only required for Concurrent mode usage
 * where previous work in `render()` may be discarded befor being used.
 *
 * This is safe to access in an event handler.
 *
 * @param value The `Ref` value
 */

function useCommittedRef(value) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(value);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    ref.current = value;
  }, [value]);
  return ref;
}

/* harmony default export */ __webpack_exports__["default"] = (useCommittedRef);

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useEventCallback.js":
/*!*************************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useEventCallback.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useEventCallback; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useCommittedRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useCommittedRef */ "./node_modules/@restart/hooks/esm/useCommittedRef.js");


function useEventCallback(fn) {
  var ref = Object(_useCommittedRef__WEBPACK_IMPORTED_MODULE_1__["default"])(fn);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return ref.current && ref.current.apply(ref, arguments);
  }, [ref]);
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useForceUpdate.js":
/*!***********************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useForceUpdate.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useForceUpdate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Returns a function that triggers a component update. the hook equivalent to
 * `this.forceUpdate()` in a class component. In most cases using a state value directly
 * is preferable but may be required in some advanced usages of refs for interop or
 * when direct DOM manipulation is required.
 *
 * ```ts
 * const forceUpdate = useForceUpdate();
 *
 * const updateOnClick = useCallback(() => {
 *  forceUpdate()
 * }, [forceUpdate])
 *
 * return <button type="button" onClick={updateOnClick}>Hi there</button>
 * ```
 */

function useForceUpdate() {
  // The toggling state value is designed to defeat React optimizations for skipping
  // updates when they are stricting equal to the last state value
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(function (state) {
    return !state;
  }, false),
      dispatch = _useReducer[1];

  return dispatch;
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useMergedRefs.js":
/*!**********************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useMergedRefs.js ***!
  \**********************************************************/
/*! exports provided: mergeRefs, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeRefs", function() { return mergeRefs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var toFnRef = function toFnRef(ref) {
  return !ref || typeof ref === 'function' ? ref : function (value) {
    ref.current = value;
  };
};

function mergeRefs(refA, refB) {
  var a = toFnRef(refA);
  var b = toFnRef(refB);
  return function (value) {
    if (a) a(value);
    if (b) b(value);
  };
}
/**
 * Create and returns a single callback ref composed from two other Refs.
 *
 * ```tsx
 * const Button = React.forwardRef((props, ref) => {
 *   const [element, attachRef] = useCallbackRef<HTMLButtonElement>();
 *   const mergedRef = useMergedRefs(ref, attachRef);
 *
 *   return <button ref={mergedRef} {...props}/>
 * })
 * ```
 *
 * @param refA A Callback or mutable Ref
 * @param refB A Callback or mutable Ref
 * @category refs
 */

function useMergedRefs(refA, refB) {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return mergeRefs(refA, refB);
  }, [refA, refB]);
}

/* harmony default export */ __webpack_exports__["default"] = (useMergedRefs);

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useMounted.js":
/*!*******************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useMounted.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useMounted; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Track whether a component is current mounted. Generally less preferable than
 * properlly canceling effects so they don't run after a component is unmounted,
 * but helpful in cases where that isn't feasible, such as a `Promise` resolution.
 *
 * @returns a function that returns the current isMounted state of the component
 *
 * ```ts
 * const [data, setData] = useState(null)
 * const isMounted = useMounted()
 *
 * useEffect(() => {
 *   fetchdata().then((newData) => {
 *      if (isMounted()) {
 *        setData(newData);
 *      }
 *   })
 * })
 * ```
 */

function useMounted() {
  var mounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  var isMounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(function () {
    return mounted.current;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return function () {
      mounted.current = false;
    };
  }, []);
  return isMounted.current;
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/usePrevious.js":
/*!********************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/usePrevious.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return usePrevious; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Store the last of some value. Tracked via a `Ref` only updating it
 * after the component renders.
 *
 * Helpful if you need to compare a prop value to it's previous value during render.
 *
 * ```ts
 * function Component(props) {
 *   const lastProps = usePrevious(props)
 *
 *   if (lastProps.foo !== props.foo)
 *     resetValueFromProps(props.foo)
 * }
 * ```
 *
 * @param value the value to track
 */

function usePrevious(value) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    ref.current = value;
  });
  return ref.current;
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useSafeState.js":
/*!*********************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useSafeState.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useMounted__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMounted */ "./node_modules/@restart/hooks/esm/useMounted.js");



function useSafeState(state) {
  var isMounted = Object(_useMounted__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return [state[0], Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (nextState) {
    if (!isMounted()) return;
    return state[1](nextState);
  }, [isMounted, state[1]])];
}

/* harmony default export */ __webpack_exports__["default"] = (useSafeState);

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useTimeout.js":
/*!*******************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useTimeout.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useTimeout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useMounted__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMounted */ "./node_modules/@restart/hooks/esm/useMounted.js");
/* harmony import */ var _useWillUnmount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useWillUnmount */ "./node_modules/@restart/hooks/esm/useWillUnmount.js");



/*
 * Browsers including Internet Explorer, Chrome, Safari, and Firefox store the
 * delay as a 32-bit signed integer internally. This causes an integer overflow
 * when using delays larger than 2,147,483,647 ms (about 24.8 days),
 * resulting in the timeout being executed immediately.
 *
 * via: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
 */

var MAX_DELAY_MS = Math.pow(2, 31) - 1;

function setChainedTimeout(handleRef, fn, timeoutAtMs) {
  var delayMs = timeoutAtMs - Date.now();
  handleRef.current = delayMs <= MAX_DELAY_MS ? setTimeout(fn, delayMs) : setTimeout(function () {
    return setChainedTimeout(handleRef, fn, timeoutAtMs);
  }, MAX_DELAY_MS);
}
/**
 * Returns a controller object for setting a timeout that is properly cleaned up
 * once the component unmounts. New timeouts cancel and replace existing ones.
 */


function useTimeout() {
  var isMounted = Object(_useMounted__WEBPACK_IMPORTED_MODULE_1__["default"])(); // types are confused between node and web here IDK

  var handleRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(_useWillUnmount__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
    return clearTimeout(handleRef.current);
  });
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var clear = function clear() {
      return clearTimeout(handleRef.current);
    };

    function set(fn, delayMs) {
      if (delayMs === void 0) {
        delayMs = 0;
      }

      if (!isMounted()) return;
      clear();

      if (delayMs <= MAX_DELAY_MS) {
        // For simplicity, if the timeout is short, just set a normal timeout.
        handleRef.current = setTimeout(fn, delayMs);
      } else {
        setChainedTimeout(handleRef, fn, Date.now() + delayMs);
      }
    }

    return {
      set: set,
      clear: clear
    };
  }, []);
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useUpdateEffect.js":
/*!************************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useUpdateEffect.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Runs an effect only when the dependencies have changed, skipping the
 * initial "on mount" run. Caution, if the dependency list never changes,
 * the effect is **never run**
 *
 * ```ts
 *  const ref = useRef<HTMLInput>(null);
 *
 *  // focuses an element only if the focus changes, and not on mount
 *  useUpdateEffect(() => {
 *    const element = ref.current?.children[focusedIdx] as HTMLElement
 *
 *    element?.focus()
 *
 *  }, [focusedIndex])
 * ```
 * @param effect An effect to run on mount
 *
 * @category effects
 */

function useUpdateEffect(fn, deps) {
  var isFirst = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    return fn();
  }, deps);
}

/* harmony default export */ __webpack_exports__["default"] = (useUpdateEffect);

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useUpdatedRef.js":
/*!**********************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useUpdatedRef.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useUpdatedRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Returns a ref that is immediately updated with the new value
 *
 * @param value The Ref value
 * @category refs
 */

function useUpdatedRef(value) {
  var valueRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(value);
  valueRef.current = value;
  return valueRef;
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useWillUnmount.js":
/*!***********************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useWillUnmount.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useWillUnmount; });
/* harmony import */ var _useUpdatedRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useUpdatedRef */ "./node_modules/@restart/hooks/esm/useUpdatedRef.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Attach a callback that fires when a component unmounts
 *
 * @param fn Handler to run when the component unmounts
 * @category effects
 */

function useWillUnmount(fn) {
  var onUnmount = Object(_useUpdatedRef__WEBPACK_IMPORTED_MODULE_0__["default"])(fn);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return function () {
      return onUnmount.current();
    };
  }, []);
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdmVuZG9ycy9yZXN0YXJ0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0ByZXN0YXJ0L2NvbnRleHQvZm9yd2FyZFJlZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZUNhbGxiYWNrUmVmLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcmVzdGFydC9ob29rcy9lc20vdXNlQ29tbWl0dGVkUmVmLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcmVzdGFydC9ob29rcy9lc20vdXNlRXZlbnRDYWxsYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZUZvcmNlVXBkYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcmVzdGFydC9ob29rcy9lc20vdXNlTWVyZ2VkUmVmcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZU1vdW50ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0ByZXN0YXJ0L2hvb2tzL2VzbS91c2VQcmV2aW91cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZVNhZmVTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZVRpbWVvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0ByZXN0YXJ0L2hvb2tzL2VzbS91c2VVcGRhdGVFZmZlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0ByZXN0YXJ0L2hvb2tzL2VzbS91c2VVcGRhdGVkUmVmLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcmVzdGFydC9ob29rcy9lc20vdXNlV2lsbFVubW91bnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBmb3J3YXJkUmVmO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBmb3J3YXJkUmVmKHJlbmRlckZuLCBfdGVtcCkge1xuICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgcHJvcFR5cGVzID0gX3JlZi5wcm9wVHlwZXMsXG4gICAgICBkZWZhdWx0UHJvcHMgPSBfcmVmLmRlZmF1bHRQcm9wcyxcbiAgICAgIF9yZWYkYWxsb3dGYWxsYmFjayA9IF9yZWYuYWxsb3dGYWxsYmFjayxcbiAgICAgIGFsbG93RmFsbGJhY2sgPSBfcmVmJGFsbG93RmFsbGJhY2sgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRhbGxvd0ZhbGxiYWNrLFxuICAgICAgX3JlZiRkaXNwbGF5TmFtZSA9IF9yZWYuZGlzcGxheU5hbWUsXG4gICAgICBkaXNwbGF5TmFtZSA9IF9yZWYkZGlzcGxheU5hbWUgPT09IHZvaWQgMCA/IHJlbmRlckZuLm5hbWUgfHwgcmVuZGVyRm4uZGlzcGxheU5hbWUgOiBfcmVmJGRpc3BsYXlOYW1lO1xuXG4gIHZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIocHJvcHMsIHJlZikge1xuICAgIHJldHVybiByZW5kZXJGbihwcm9wcywgcmVmKTtcbiAgfTtcblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbihfcmVhY3QuZGVmYXVsdC5mb3J3YXJkUmVmIHx8ICFhbGxvd0ZhbGxiYWNrID8gX3JlYWN0LmRlZmF1bHQuZm9yd2FyZFJlZihyZW5kZXIpIDogZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgcmV0dXJuIHJlbmRlcihwcm9wcywgbnVsbCk7XG4gIH0sIHtcbiAgICBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWUsXG4gICAgcHJvcFR5cGVzOiBwcm9wVHlwZXMsXG4gICAgZGVmYXVsdFByb3BzOiBkZWZhdWx0UHJvcHNcbiAgfSk7XG59IiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG4vKipcbiAqIEEgY29udmVuaWVuY2UgaG9vayBhcm91bmQgYHVzZVN0YXRlYCBkZXNpZ25lZCB0byBiZSBwYWlyZWQgd2l0aFxuICogdGhlIGNvbXBvbmVudCBbY2FsbGJhY2sgcmVmXShodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVmcy1hbmQtdGhlLWRvbS5odG1sI2NhbGxiYWNrLXJlZnMpIGFwaS5cbiAqIENhbGxiYWNrIHJlZnMgYXJlIHVzZWZ1bCBvdmVyIGB1c2VSZWYoKWAgd2hlbiB5b3UgbmVlZCB0byByZXNwb25kIHRvIHRoZSByZWYgYmVpbmcgc2V0XG4gKiBpbnN0ZWFkIG9mIGxhemlseSBhY2Nlc3NpbmcgaXQgaW4gYW4gZWZmZWN0LlxuICpcbiAqIGBgYHRzXG4gKiBjb25zdCBbZWxlbWVudCwgYXR0YWNoUmVmXSA9IHVzZUNhbGxiYWNrUmVmPEhUTUxEaXZFbGVtZW50PigpXG4gKlxuICogdXNlRWZmZWN0KCgpID0+IHtcbiAqICAgaWYgKCFlbGVtZW50KSByZXR1cm5cbiAqXG4gKiAgIGNvbnN0IGNhbGVuZGFyID0gbmV3IEZ1bGxDYWxlbmRhci5DYWxlbmRhcihlbGVtZW50KVxuICpcbiAqICAgcmV0dXJuICgpID0+IHtcbiAqICAgICBjYWxlbmRhci5kZXN0cm95KClcbiAqICAgfVxuICogfSwgW2VsZW1lbnRdKVxuICpcbiAqIHJldHVybiA8ZGl2IHJlZj17YXR0YWNoUmVmfSAvPlxuICogYGBgXG4gKlxuICogQGNhdGVnb3J5IHJlZnNcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VDYWxsYmFja1JlZigpIHtcbiAgcmV0dXJuIHVzZVN0YXRlKG51bGwpO1xufSIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuLyoqXG4gKiBDcmVhdGVzIGEgYFJlZmAgd2hvc2UgdmFsdWUgaXMgdXBkYXRlZCBpbiBhbiBlZmZlY3QsIGVuc3VyaW5nIHRoZSBtb3N0IHJlY2VudFxuICogdmFsdWUgaXMgdGhlIG9uZSByZW5kZXJlZCB3aXRoLiBHZW5lcmFsbHkgb25seSByZXF1aXJlZCBmb3IgQ29uY3VycmVudCBtb2RlIHVzYWdlXG4gKiB3aGVyZSBwcmV2aW91cyB3b3JrIGluIGByZW5kZXIoKWAgbWF5IGJlIGRpc2NhcmRlZCBiZWZvciBiZWluZyB1c2VkLlxuICpcbiAqIFRoaXMgaXMgc2FmZSB0byBhY2Nlc3MgaW4gYW4gZXZlbnQgaGFuZGxlci5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgVGhlIGBSZWZgIHZhbHVlXG4gKi9cblxuZnVuY3Rpb24gdXNlQ29tbWl0dGVkUmVmKHZhbHVlKSB7XG4gIHZhciByZWYgPSB1c2VSZWYodmFsdWUpO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XG4gIH0sIFt2YWx1ZV0pO1xuICByZXR1cm4gcmVmO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VDb21taXR0ZWRSZWY7IiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlQ29tbWl0dGVkUmVmIGZyb20gJy4vdXNlQ29tbWl0dGVkUmVmJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUV2ZW50Q2FsbGJhY2soZm4pIHtcbiAgdmFyIHJlZiA9IHVzZUNvbW1pdHRlZFJlZihmbik7XG4gIHJldHVybiB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHJlZi5jdXJyZW50ICYmIHJlZi5jdXJyZW50LmFwcGx5KHJlZiwgYXJndW1lbnRzKTtcbiAgfSwgW3JlZl0pO1xufSIsImltcG9ydCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHRyaWdnZXJzIGEgY29tcG9uZW50IHVwZGF0ZS4gdGhlIGhvb2sgZXF1aXZhbGVudCB0b1xuICogYHRoaXMuZm9yY2VVcGRhdGUoKWAgaW4gYSBjbGFzcyBjb21wb25lbnQuIEluIG1vc3QgY2FzZXMgdXNpbmcgYSBzdGF0ZSB2YWx1ZSBkaXJlY3RseVxuICogaXMgcHJlZmVyYWJsZSBidXQgbWF5IGJlIHJlcXVpcmVkIGluIHNvbWUgYWR2YW5jZWQgdXNhZ2VzIG9mIHJlZnMgZm9yIGludGVyb3Agb3JcbiAqIHdoZW4gZGlyZWN0IERPTSBtYW5pcHVsYXRpb24gaXMgcmVxdWlyZWQuXG4gKlxuICogYGBgdHNcbiAqIGNvbnN0IGZvcmNlVXBkYXRlID0gdXNlRm9yY2VVcGRhdGUoKTtcbiAqXG4gKiBjb25zdCB1cGRhdGVPbkNsaWNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICogIGZvcmNlVXBkYXRlKClcbiAqIH0sIFtmb3JjZVVwZGF0ZV0pXG4gKlxuICogcmV0dXJuIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3VwZGF0ZU9uQ2xpY2t9PkhpIHRoZXJlPC9idXR0b24+XG4gKiBgYGBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VGb3JjZVVwZGF0ZSgpIHtcbiAgLy8gVGhlIHRvZ2dsaW5nIHN0YXRlIHZhbHVlIGlzIGRlc2lnbmVkIHRvIGRlZmVhdCBSZWFjdCBvcHRpbWl6YXRpb25zIGZvciBza2lwcGluZ1xuICAvLyB1cGRhdGVzIHdoZW4gdGhleSBhcmUgc3RyaWN0aW5nIGVxdWFsIHRvIHRoZSBsYXN0IHN0YXRlIHZhbHVlXG4gIHZhciBfdXNlUmVkdWNlciA9IHVzZVJlZHVjZXIoZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgcmV0dXJuICFzdGF0ZTtcbiAgfSwgZmFsc2UpLFxuICAgICAgZGlzcGF0Y2ggPSBfdXNlUmVkdWNlclsxXTtcblxuICByZXR1cm4gZGlzcGF0Y2g7XG59IiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxudmFyIHRvRm5SZWYgPSBmdW5jdGlvbiB0b0ZuUmVmKHJlZikge1xuICByZXR1cm4gIXJlZiB8fCB0eXBlb2YgcmVmID09PSAnZnVuY3Rpb24nID8gcmVmIDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVJlZnMocmVmQSwgcmVmQikge1xuICB2YXIgYSA9IHRvRm5SZWYocmVmQSk7XG4gIHZhciBiID0gdG9GblJlZihyZWZCKTtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmIChhKSBhKHZhbHVlKTtcbiAgICBpZiAoYikgYih2YWx1ZSk7XG4gIH07XG59XG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJucyBhIHNpbmdsZSBjYWxsYmFjayByZWYgY29tcG9zZWQgZnJvbSB0d28gb3RoZXIgUmVmcy5cbiAqXG4gKiBgYGB0c3hcbiAqIGNvbnN0IEJ1dHRvbiA9IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAqICAgY29uc3QgW2VsZW1lbnQsIGF0dGFjaFJlZl0gPSB1c2VDYWxsYmFja1JlZjxIVE1MQnV0dG9uRWxlbWVudD4oKTtcbiAqICAgY29uc3QgbWVyZ2VkUmVmID0gdXNlTWVyZ2VkUmVmcyhyZWYsIGF0dGFjaFJlZik7XG4gKlxuICogICByZXR1cm4gPGJ1dHRvbiByZWY9e21lcmdlZFJlZn0gey4uLnByb3BzfS8+XG4gKiB9KVxuICogYGBgXG4gKlxuICogQHBhcmFtIHJlZkEgQSBDYWxsYmFjayBvciBtdXRhYmxlIFJlZlxuICogQHBhcmFtIHJlZkIgQSBDYWxsYmFjayBvciBtdXRhYmxlIFJlZlxuICogQGNhdGVnb3J5IHJlZnNcbiAqL1xuXG5mdW5jdGlvbiB1c2VNZXJnZWRSZWZzKHJlZkEsIHJlZkIpIHtcbiAgcmV0dXJuIHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBtZXJnZVJlZnMocmVmQSwgcmVmQik7XG4gIH0sIFtyZWZBLCByZWZCXSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZU1lcmdlZFJlZnM7IiwiaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG4vKipcbiAqIFRyYWNrIHdoZXRoZXIgYSBjb21wb25lbnQgaXMgY3VycmVudCBtb3VudGVkLiBHZW5lcmFsbHkgbGVzcyBwcmVmZXJhYmxlIHRoYW5cbiAqIHByb3BlcmxseSBjYW5jZWxpbmcgZWZmZWN0cyBzbyB0aGV5IGRvbid0IHJ1biBhZnRlciBhIGNvbXBvbmVudCBpcyB1bm1vdW50ZWQsXG4gKiBidXQgaGVscGZ1bCBpbiBjYXNlcyB3aGVyZSB0aGF0IGlzbid0IGZlYXNpYmxlLCBzdWNoIGFzIGEgYFByb21pc2VgIHJlc29sdXRpb24uXG4gKlxuICogQHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGN1cnJlbnQgaXNNb3VudGVkIHN0YXRlIG9mIHRoZSBjb21wb25lbnRcbiAqXG4gKiBgYGB0c1xuICogY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbClcbiAqIGNvbnN0IGlzTW91bnRlZCA9IHVzZU1vdW50ZWQoKVxuICpcbiAqIHVzZUVmZmVjdCgoKSA9PiB7XG4gKiAgIGZldGNoZGF0YSgpLnRoZW4oKG5ld0RhdGEpID0+IHtcbiAqICAgICAgaWYgKGlzTW91bnRlZCgpKSB7XG4gKiAgICAgICAgc2V0RGF0YShuZXdEYXRhKTtcbiAqICAgICAgfVxuICogICB9KVxuICogfSlcbiAqIGBgYFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZU1vdW50ZWQoKSB7XG4gIHZhciBtb3VudGVkID0gdXNlUmVmKHRydWUpO1xuICB2YXIgaXNNb3VudGVkID0gdXNlUmVmKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbW91bnRlZC5jdXJyZW50O1xuICB9KTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgbW91bnRlZC5jdXJyZW50ID0gZmFsc2U7XG4gICAgfTtcbiAgfSwgW10pO1xuICByZXR1cm4gaXNNb3VudGVkLmN1cnJlbnQ7XG59IiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG4vKipcbiAqIFN0b3JlIHRoZSBsYXN0IG9mIHNvbWUgdmFsdWUuIFRyYWNrZWQgdmlhIGEgYFJlZmAgb25seSB1cGRhdGluZyBpdFxuICogYWZ0ZXIgdGhlIGNvbXBvbmVudCByZW5kZXJzLlxuICpcbiAqIEhlbHBmdWwgaWYgeW91IG5lZWQgdG8gY29tcGFyZSBhIHByb3AgdmFsdWUgdG8gaXQncyBwcmV2aW91cyB2YWx1ZSBkdXJpbmcgcmVuZGVyLlxuICpcbiAqIGBgYHRzXG4gKiBmdW5jdGlvbiBDb21wb25lbnQocHJvcHMpIHtcbiAqICAgY29uc3QgbGFzdFByb3BzID0gdXNlUHJldmlvdXMocHJvcHMpXG4gKlxuICogICBpZiAobGFzdFByb3BzLmZvbyAhPT0gcHJvcHMuZm9vKVxuICogICAgIHJlc2V0VmFsdWVGcm9tUHJvcHMocHJvcHMuZm9vKVxuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIHZhbHVlIHRoZSB2YWx1ZSB0byB0cmFja1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVByZXZpb3VzKHZhbHVlKSB7XG4gIHZhciByZWYgPSB1c2VSZWYobnVsbCk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiByZWYuY3VycmVudDtcbn0iLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VNb3VudGVkIGZyb20gJy4vdXNlTW91bnRlZCc7XG5cbmZ1bmN0aW9uIHVzZVNhZmVTdGF0ZShzdGF0ZSkge1xuICB2YXIgaXNNb3VudGVkID0gdXNlTW91bnRlZCgpO1xuICByZXR1cm4gW3N0YXRlWzBdLCB1c2VDYWxsYmFjayhmdW5jdGlvbiAobmV4dFN0YXRlKSB7XG4gICAgaWYgKCFpc01vdW50ZWQoKSkgcmV0dXJuO1xuICAgIHJldHVybiBzdGF0ZVsxXShuZXh0U3RhdGUpO1xuICB9LCBbaXNNb3VudGVkLCBzdGF0ZVsxXV0pXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlU2FmZVN0YXRlOyIsImltcG9ydCB7IHVzZU1lbW8sIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VNb3VudGVkIGZyb20gJy4vdXNlTW91bnRlZCc7XG5pbXBvcnQgdXNlV2lsbFVubW91bnQgZnJvbSAnLi91c2VXaWxsVW5tb3VudCc7XG4vKlxuICogQnJvd3NlcnMgaW5jbHVkaW5nIEludGVybmV0IEV4cGxvcmVyLCBDaHJvbWUsIFNhZmFyaSwgYW5kIEZpcmVmb3ggc3RvcmUgdGhlXG4gKiBkZWxheSBhcyBhIDMyLWJpdCBzaWduZWQgaW50ZWdlciBpbnRlcm5hbGx5LiBUaGlzIGNhdXNlcyBhbiBpbnRlZ2VyIG92ZXJmbG93XG4gKiB3aGVuIHVzaW5nIGRlbGF5cyBsYXJnZXIgdGhhbiAyLDE0Nyw0ODMsNjQ3IG1zIChhYm91dCAyNC44IGRheXMpLFxuICogcmVzdWx0aW5nIGluIHRoZSB0aW1lb3V0IGJlaW5nIGV4ZWN1dGVkIGltbWVkaWF0ZWx5LlxuICpcbiAqIHZpYTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd09yV29ya2VyR2xvYmFsU2NvcGUvc2V0VGltZW91dFxuICovXG5cbnZhciBNQVhfREVMQVlfTVMgPSBNYXRoLnBvdygyLCAzMSkgLSAxO1xuXG5mdW5jdGlvbiBzZXRDaGFpbmVkVGltZW91dChoYW5kbGVSZWYsIGZuLCB0aW1lb3V0QXRNcykge1xuICB2YXIgZGVsYXlNcyA9IHRpbWVvdXRBdE1zIC0gRGF0ZS5ub3coKTtcbiAgaGFuZGxlUmVmLmN1cnJlbnQgPSBkZWxheU1zIDw9IE1BWF9ERUxBWV9NUyA/IHNldFRpbWVvdXQoZm4sIGRlbGF5TXMpIDogc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHNldENoYWluZWRUaW1lb3V0KGhhbmRsZVJlZiwgZm4sIHRpbWVvdXRBdE1zKTtcbiAgfSwgTUFYX0RFTEFZX01TKTtcbn1cbi8qKlxuICogUmV0dXJucyBhIGNvbnRyb2xsZXIgb2JqZWN0IGZvciBzZXR0aW5nIGEgdGltZW91dCB0aGF0IGlzIHByb3Blcmx5IGNsZWFuZWQgdXBcbiAqIG9uY2UgdGhlIGNvbXBvbmVudCB1bm1vdW50cy4gTmV3IHRpbWVvdXRzIGNhbmNlbCBhbmQgcmVwbGFjZSBleGlzdGluZyBvbmVzLlxuICovXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlVGltZW91dCgpIHtcbiAgdmFyIGlzTW91bnRlZCA9IHVzZU1vdW50ZWQoKTsgLy8gdHlwZXMgYXJlIGNvbmZ1c2VkIGJldHdlZW4gbm9kZSBhbmQgd2ViIGhlcmUgSURLXG5cbiAgdmFyIGhhbmRsZVJlZiA9IHVzZVJlZigpO1xuICB1c2VXaWxsVW5tb3VudChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChoYW5kbGVSZWYuY3VycmVudCk7XG4gIH0pO1xuICByZXR1cm4gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNsZWFyID0gZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGhhbmRsZVJlZi5jdXJyZW50KTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gc2V0KGZuLCBkZWxheU1zKSB7XG4gICAgICBpZiAoZGVsYXlNcyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGRlbGF5TXMgPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTW91bnRlZCgpKSByZXR1cm47XG4gICAgICBjbGVhcigpO1xuXG4gICAgICBpZiAoZGVsYXlNcyA8PSBNQVhfREVMQVlfTVMpIHtcbiAgICAgICAgLy8gRm9yIHNpbXBsaWNpdHksIGlmIHRoZSB0aW1lb3V0IGlzIHNob3J0LCBqdXN0IHNldCBhIG5vcm1hbCB0aW1lb3V0LlxuICAgICAgICBoYW5kbGVSZWYuY3VycmVudCA9IHNldFRpbWVvdXQoZm4sIGRlbGF5TXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0Q2hhaW5lZFRpbWVvdXQoaGFuZGxlUmVmLCBmbiwgRGF0ZS5ub3coKSArIGRlbGF5TXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzZXQ6IHNldCxcbiAgICAgIGNsZWFyOiBjbGVhclxuICAgIH07XG4gIH0sIFtdKTtcbn0iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogUnVucyBhbiBlZmZlY3Qgb25seSB3aGVuIHRoZSBkZXBlbmRlbmNpZXMgaGF2ZSBjaGFuZ2VkLCBza2lwcGluZyB0aGVcbiAqIGluaXRpYWwgXCJvbiBtb3VudFwiIHJ1bi4gQ2F1dGlvbiwgaWYgdGhlIGRlcGVuZGVuY3kgbGlzdCBuZXZlciBjaGFuZ2VzLFxuICogdGhlIGVmZmVjdCBpcyAqKm5ldmVyIHJ1bioqXG4gKlxuICogYGBgdHNcbiAqICBjb25zdCByZWYgPSB1c2VSZWY8SFRNTElucHV0PihudWxsKTtcbiAqXG4gKiAgLy8gZm9jdXNlcyBhbiBlbGVtZW50IG9ubHkgaWYgdGhlIGZvY3VzIGNoYW5nZXMsIGFuZCBub3Qgb24gbW91bnRcbiAqICB1c2VVcGRhdGVFZmZlY3QoKCkgPT4ge1xuICogICAgY29uc3QgZWxlbWVudCA9IHJlZi5jdXJyZW50Py5jaGlsZHJlbltmb2N1c2VkSWR4XSBhcyBIVE1MRWxlbWVudFxuICpcbiAqICAgIGVsZW1lbnQ/LmZvY3VzKClcbiAqXG4gKiAgfSwgW2ZvY3VzZWRJbmRleF0pXG4gKiBgYGBcbiAqIEBwYXJhbSBlZmZlY3QgQW4gZWZmZWN0IHRvIHJ1biBvbiBtb3VudFxuICpcbiAqIEBjYXRlZ29yeSBlZmZlY3RzXG4gKi9cblxuZnVuY3Rpb24gdXNlVXBkYXRlRWZmZWN0KGZuLCBkZXBzKSB7XG4gIHZhciBpc0ZpcnN0ID0gdXNlUmVmKHRydWUpO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChpc0ZpcnN0LmN1cnJlbnQpIHtcbiAgICAgIGlzRmlyc3QuY3VycmVudCA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybiBmbigpO1xuICB9LCBkZXBzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlVXBkYXRlRWZmZWN0OyIsImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogUmV0dXJucyBhIHJlZiB0aGF0IGlzIGltbWVkaWF0ZWx5IHVwZGF0ZWQgd2l0aCB0aGUgbmV3IHZhbHVlXG4gKlxuICogQHBhcmFtIHZhbHVlIFRoZSBSZWYgdmFsdWVcbiAqIEBjYXRlZ29yeSByZWZzXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlVXBkYXRlZFJlZih2YWx1ZSkge1xuICB2YXIgdmFsdWVSZWYgPSB1c2VSZWYodmFsdWUpO1xuICB2YWx1ZVJlZi5jdXJyZW50ID0gdmFsdWU7XG4gIHJldHVybiB2YWx1ZVJlZjtcbn0iLCJpbXBvcnQgdXNlVXBkYXRlZFJlZiBmcm9tICcuL3VzZVVwZGF0ZWRSZWYnO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuLyoqXG4gKiBBdHRhY2ggYSBjYWxsYmFjayB0aGF0IGZpcmVzIHdoZW4gYSBjb21wb25lbnQgdW5tb3VudHNcbiAqXG4gKiBAcGFyYW0gZm4gSGFuZGxlciB0byBydW4gd2hlbiB0aGUgY29tcG9uZW50IHVubW91bnRzXG4gKiBAY2F0ZWdvcnkgZWZmZWN0c1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVdpbGxVbm1vdW50KGZuKSB7XG4gIHZhciBvblVubW91bnQgPSB1c2VVcGRhdGVkUmVmKGZuKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG9uVW5tb3VudC5jdXJyZW50KCk7XG4gICAgfTtcbiAgfSwgW10pO1xufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7Ozs7Ozs7Ozs7QUM3QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDekJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNYQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDM0RBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=