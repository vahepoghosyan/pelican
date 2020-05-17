(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors/use-global-hook"],{

/***/ "./node_modules/use-global-hook/index.js":
/*!***********************************************!*\
  !*** ./node_modules/use-global-hook/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function setState(store, newState, afterUpdateCallback) {
  store.state = { ...store.state,
    ...newState
  };
  store.listeners.forEach(listener => {
    listener.run(store.state);
  });
  afterUpdateCallback && afterUpdateCallback();
}

function useCustom(store, React, mapState, mapActions) {
  const [, originalHook] = React.useState(Object.create(null));
  const state = mapState ? mapState(store.state) : store.state;
  const actions = React.useMemo(() => mapActions ? mapActions(store.actions) : store.actions, [mapActions, store.actions]);
  React.useEffect(() => {
    const newListener = {
      oldState: {}
    };
    newListener.run = mapState ? newState => {
      const mappedState = mapState(newState);

      if (mappedState !== newListener.oldState) {
        newListener.oldState = mappedState;
        originalHook(mappedState);
      }
    } : originalHook;
    store.listeners.push(newListener);
    newListener.run(store.state);
    return () => {
      store.listeners = store.listeners.filter(listener => listener !== newListener);
    };
  }, []); // eslint-disable-line

  return [state, actions];
}

function associateActions(store, actions) {
  const associatedActions = {};
  Object.keys(actions).forEach(key => {
    if (typeof actions[key] === "function") {
      associatedActions[key] = actions[key].bind(null, store);
    }

    if (typeof actions[key] === "object") {
      associatedActions[key] = associateActions(store, actions[key]);
    }
  });
  return associatedActions;
}

const useStore = (React, initialState, actions, initializer) => {
  const store = {
    state: initialState,
    listeners: []
  };
  store.setState = setState.bind(null, store);
  store.actions = associateActions(store, actions);
  if (initializer) initializer(store);
  return useCustom.bind(null, store, React);
};

/* harmony default export */ __webpack_exports__["default"] = (useStore);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdmVuZG9ycy91c2UtZ2xvYmFsLWhvb2suanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXNlLWdsb2JhbC1ob29rL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHNldFN0YXRlKHN0b3JlLCBuZXdTdGF0ZSwgYWZ0ZXJVcGRhdGVDYWxsYmFjaykge1xuICBzdG9yZS5zdGF0ZSA9IHsgLi4uc3RvcmUuc3RhdGUsIC4uLm5ld1N0YXRlIH07XG4gIHN0b3JlLmxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgIGxpc3RlbmVyLnJ1bihzdG9yZS5zdGF0ZSk7XG4gIH0pO1xuICBhZnRlclVwZGF0ZUNhbGxiYWNrICYmIGFmdGVyVXBkYXRlQ2FsbGJhY2soKTtcbn1cblxuZnVuY3Rpb24gdXNlQ3VzdG9tKHN0b3JlLCBSZWFjdCwgbWFwU3RhdGUsIG1hcEFjdGlvbnMpIHtcbiAgY29uc3QgWywgb3JpZ2luYWxIb29rXSA9IFJlYWN0LnVzZVN0YXRlKE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICBjb25zdCBzdGF0ZSA9IG1hcFN0YXRlID8gbWFwU3RhdGUoc3RvcmUuc3RhdGUpIDogc3RvcmUuc3RhdGU7XG4gIGNvbnN0IGFjdGlvbnMgPSBSZWFjdC51c2VNZW1vKFxuICAgICgpID0+IChtYXBBY3Rpb25zID8gbWFwQWN0aW9ucyhzdG9yZS5hY3Rpb25zKSA6IHN0b3JlLmFjdGlvbnMpLFxuICAgIFttYXBBY3Rpb25zLCBzdG9yZS5hY3Rpb25zXVxuICApO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbmV3TGlzdGVuZXIgPSB7IG9sZFN0YXRlOiB7fSB9O1xuICAgIG5ld0xpc3RlbmVyLnJ1biA9IG1hcFN0YXRlXG4gICAgICA/IG5ld1N0YXRlID0+IHtcbiAgICAgICAgICBjb25zdCBtYXBwZWRTdGF0ZSA9IG1hcFN0YXRlKG5ld1N0YXRlKTtcbiAgICAgICAgICBpZiAobWFwcGVkU3RhdGUgIT09IG5ld0xpc3RlbmVyLm9sZFN0YXRlKSB7XG4gICAgICAgICAgICBuZXdMaXN0ZW5lci5vbGRTdGF0ZSA9IG1hcHBlZFN0YXRlO1xuICAgICAgICAgICAgb3JpZ2luYWxIb29rKG1hcHBlZFN0YXRlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIDogb3JpZ2luYWxIb29rO1xuICAgIHN0b3JlLmxpc3RlbmVycy5wdXNoKG5ld0xpc3RlbmVyKTtcbiAgICBuZXdMaXN0ZW5lci5ydW4oc3RvcmUuc3RhdGUpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzdG9yZS5saXN0ZW5lcnMgPSBzdG9yZS5saXN0ZW5lcnMuZmlsdGVyKFxuICAgICAgICBsaXN0ZW5lciA9PiBsaXN0ZW5lciAhPT0gbmV3TGlzdGVuZXJcbiAgICAgICk7XG4gICAgfTtcbiAgfSwgW10pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIHJldHVybiBbc3RhdGUsIGFjdGlvbnNdO1xufVxuXG5mdW5jdGlvbiBhc3NvY2lhdGVBY3Rpb25zKHN0b3JlLCBhY3Rpb25zKSB7XG4gIGNvbnN0IGFzc29jaWF0ZWRBY3Rpb25zID0ge307XG4gIE9iamVjdC5rZXlzKGFjdGlvbnMpLmZvckVhY2goa2V5ID0+IHtcbiAgICBpZiAodHlwZW9mIGFjdGlvbnNba2V5XSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBhc3NvY2lhdGVkQWN0aW9uc1trZXldID0gYWN0aW9uc1trZXldLmJpbmQobnVsbCwgc3RvcmUpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGFjdGlvbnNba2V5XSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgYXNzb2NpYXRlZEFjdGlvbnNba2V5XSA9IGFzc29jaWF0ZUFjdGlvbnMoc3RvcmUsIGFjdGlvbnNba2V5XSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGFzc29jaWF0ZWRBY3Rpb25zO1xufVxuXG5jb25zdCB1c2VTdG9yZSA9IChSZWFjdCwgaW5pdGlhbFN0YXRlLCBhY3Rpb25zLCBpbml0aWFsaXplcikgPT4ge1xuICBjb25zdCBzdG9yZSA9IHsgc3RhdGU6IGluaXRpYWxTdGF0ZSwgbGlzdGVuZXJzOiBbXSB9O1xuICBzdG9yZS5zZXRTdGF0ZSA9IHNldFN0YXRlLmJpbmQobnVsbCwgc3RvcmUpO1xuICBzdG9yZS5hY3Rpb25zID0gYXNzb2NpYXRlQWN0aW9ucyhzdG9yZSwgYWN0aW9ucyk7XG4gIGlmIChpbml0aWFsaXplcikgaW5pdGlhbGl6ZXIoc3RvcmUpO1xuICByZXR1cm4gdXNlQ3VzdG9tLmJpbmQobnVsbCwgc3RvcmUsIFJlYWN0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVN0b3JlO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=