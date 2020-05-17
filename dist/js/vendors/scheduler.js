(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors/scheduler"],{

/***/ "./node_modules/scheduler/cjs/scheduler-tracing.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/scheduler/cjs/scheduler-tracing.development.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v0.19.1
 * scheduler-tracing.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


if (true) {
  (function () {
    'use strict';

    var DEFAULT_THREAD_ID = 0; // Counters used to generate unique IDs.

    var interactionIDCounter = 0;
    var threadIDCounter = 0; // Set of currently traced interactions.
    // Interactions "stack"–
    // Meaning that newly traced interactions are appended to the previously active set.
    // When an interaction goes out of scope, the previous set (if any) is restored.

    exports.__interactionsRef = null; // Listener(s) to notify when interactions begin and end.

    exports.__subscriberRef = null;
    {
      exports.__interactionsRef = {
        current: new Set()
      };
      exports.__subscriberRef = {
        current: null
      };
    }

    function unstable_clear(callback) {
      var prevInteractions = exports.__interactionsRef.current;
      exports.__interactionsRef.current = new Set();

      try {
        return callback();
      } finally {
        exports.__interactionsRef.current = prevInteractions;
      }
    }

    function unstable_getCurrent() {
      {
        return exports.__interactionsRef.current;
      }
    }

    function unstable_getThreadID() {
      return ++threadIDCounter;
    }

    function unstable_trace(name, timestamp, callback) {
      var threadID = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_THREAD_ID;
      var interaction = {
        __count: 1,
        id: interactionIDCounter++,
        name: name,
        timestamp: timestamp
      };
      var prevInteractions = exports.__interactionsRef.current; // Traced interactions should stack/accumulate.
      // To do that, clone the current interactions.
      // The previous set will be restored upon completion.

      var interactions = new Set(prevInteractions);
      interactions.add(interaction);
      exports.__interactionsRef.current = interactions;
      var subscriber = exports.__subscriberRef.current;
      var returnValue;

      try {
        if (subscriber !== null) {
          subscriber.onInteractionTraced(interaction);
        }
      } finally {
        try {
          if (subscriber !== null) {
            subscriber.onWorkStarted(interactions, threadID);
          }
        } finally {
          try {
            returnValue = callback();
          } finally {
            exports.__interactionsRef.current = prevInteractions;

            try {
              if (subscriber !== null) {
                subscriber.onWorkStopped(interactions, threadID);
              }
            } finally {
              interaction.__count--; // If no async work was scheduled for this interaction,
              // Notify subscribers that it's completed.

              if (subscriber !== null && interaction.__count === 0) {
                subscriber.onInteractionScheduledWorkCompleted(interaction);
              }
            }
          }
        }
      }

      return returnValue;
    }

    function unstable_wrap(callback) {
      var threadID = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_THREAD_ID;
      var wrappedInteractions = exports.__interactionsRef.current;
      var subscriber = exports.__subscriberRef.current;

      if (subscriber !== null) {
        subscriber.onWorkScheduled(wrappedInteractions, threadID);
      } // Update the pending async work count for the current interactions.
      // Update after calling subscribers in case of error.


      wrappedInteractions.forEach(function (interaction) {
        interaction.__count++;
      });
      var hasRun = false;

      function wrapped() {
        var prevInteractions = exports.__interactionsRef.current;
        exports.__interactionsRef.current = wrappedInteractions;
        subscriber = exports.__subscriberRef.current;

        try {
          var returnValue;

          try {
            if (subscriber !== null) {
              subscriber.onWorkStarted(wrappedInteractions, threadID);
            }
          } finally {
            try {
              returnValue = callback.apply(undefined, arguments);
            } finally {
              exports.__interactionsRef.current = prevInteractions;

              if (subscriber !== null) {
                subscriber.onWorkStopped(wrappedInteractions, threadID);
              }
            }
          }

          return returnValue;
        } finally {
          if (!hasRun) {
            // We only expect a wrapped function to be executed once,
            // But in the event that it's executed more than once–
            // Only decrement the outstanding interaction counts once.
            hasRun = true; // Update pending async counts for all wrapped interactions.
            // If this was the last scheduled async work for any of them,
            // Mark them as completed.

            wrappedInteractions.forEach(function (interaction) {
              interaction.__count--;

              if (subscriber !== null && interaction.__count === 0) {
                subscriber.onInteractionScheduledWorkCompleted(interaction);
              }
            });
          }
        }
      }

      wrapped.cancel = function cancel() {
        subscriber = exports.__subscriberRef.current;

        try {
          if (subscriber !== null) {
            subscriber.onWorkCanceled(wrappedInteractions, threadID);
          }
        } finally {
          // Update pending async counts for all wrapped interactions.
          // If this was the last scheduled async work for any of them,
          // Mark them as completed.
          wrappedInteractions.forEach(function (interaction) {
            interaction.__count--;

            if (subscriber && interaction.__count === 0) {
              subscriber.onInteractionScheduledWorkCompleted(interaction);
            }
          });
        }
      };

      return wrapped;
    }

    var subscribers = null;
    {
      subscribers = new Set();
    }

    function unstable_subscribe(subscriber) {
      {
        subscribers.add(subscriber);

        if (subscribers.size === 1) {
          exports.__subscriberRef.current = {
            onInteractionScheduledWorkCompleted: onInteractionScheduledWorkCompleted,
            onInteractionTraced: onInteractionTraced,
            onWorkCanceled: onWorkCanceled,
            onWorkScheduled: onWorkScheduled,
            onWorkStarted: onWorkStarted,
            onWorkStopped: onWorkStopped
          };
        }
      }
    }

    function unstable_unsubscribe(subscriber) {
      {
        subscribers.delete(subscriber);

        if (subscribers.size === 0) {
          exports.__subscriberRef.current = null;
        }
      }
    }

    function onInteractionTraced(interaction) {
      var didCatchError = false;
      var caughtError = null;
      subscribers.forEach(function (subscriber) {
        try {
          subscriber.onInteractionTraced(interaction);
        } catch (error) {
          if (!didCatchError) {
            didCatchError = true;
            caughtError = error;
          }
        }
      });

      if (didCatchError) {
        throw caughtError;
      }
    }

    function onInteractionScheduledWorkCompleted(interaction) {
      var didCatchError = false;
      var caughtError = null;
      subscribers.forEach(function (subscriber) {
        try {
          subscriber.onInteractionScheduledWorkCompleted(interaction);
        } catch (error) {
          if (!didCatchError) {
            didCatchError = true;
            caughtError = error;
          }
        }
      });

      if (didCatchError) {
        throw caughtError;
      }
    }

    function onWorkScheduled(interactions, threadID) {
      var didCatchError = false;
      var caughtError = null;
      subscribers.forEach(function (subscriber) {
        try {
          subscriber.onWorkScheduled(interactions, threadID);
        } catch (error) {
          if (!didCatchError) {
            didCatchError = true;
            caughtError = error;
          }
        }
      });

      if (didCatchError) {
        throw caughtError;
      }
    }

    function onWorkStarted(interactions, threadID) {
      var didCatchError = false;
      var caughtError = null;
      subscribers.forEach(function (subscriber) {
        try {
          subscriber.onWorkStarted(interactions, threadID);
        } catch (error) {
          if (!didCatchError) {
            didCatchError = true;
            caughtError = error;
          }
        }
      });

      if (didCatchError) {
        throw caughtError;
      }
    }

    function onWorkStopped(interactions, threadID) {
      var didCatchError = false;
      var caughtError = null;
      subscribers.forEach(function (subscriber) {
        try {
          subscriber.onWorkStopped(interactions, threadID);
        } catch (error) {
          if (!didCatchError) {
            didCatchError = true;
            caughtError = error;
          }
        }
      });

      if (didCatchError) {
        throw caughtError;
      }
    }

    function onWorkCanceled(interactions, threadID) {
      var didCatchError = false;
      var caughtError = null;
      subscribers.forEach(function (subscriber) {
        try {
          subscriber.onWorkCanceled(interactions, threadID);
        } catch (error) {
          if (!didCatchError) {
            didCatchError = true;
            caughtError = error;
          }
        }
      });

      if (didCatchError) {
        throw caughtError;
      }
    }

    exports.unstable_clear = unstable_clear;
    exports.unstable_getCurrent = unstable_getCurrent;
    exports.unstable_getThreadID = unstable_getThreadID;
    exports.unstable_subscribe = unstable_subscribe;
    exports.unstable_trace = unstable_trace;
    exports.unstable_unsubscribe = unstable_unsubscribe;
    exports.unstable_wrap = unstable_wrap;
  })();
}

/***/ }),

/***/ "./node_modules/scheduler/cjs/scheduler.development.js":
/*!*************************************************************!*\
  !*** ./node_modules/scheduler/cjs/scheduler.development.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v0.19.1
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


if (true) {
  (function () {
    'use strict';

    var enableSchedulerDebugging = false;
    var enableProfiling = true;
    var requestHostCallback;
    var requestHostTimeout;
    var cancelHostTimeout;
    var shouldYieldToHost;
    var requestPaint;

    if ( // If Scheduler runs in a non-DOM environment, it falls back to a naive
    // implementation using setTimeout.
    typeof window === 'undefined' || // Check if MessageChannel is supported, too.
    typeof MessageChannel !== 'function') {
      // If this accidentally gets imported in a non-browser environment, e.g. JavaScriptCore,
      // fallback to a naive implementation.
      var _callback = null;
      var _timeoutID = null;

      var _flushCallback = function () {
        if (_callback !== null) {
          try {
            var currentTime = exports.unstable_now();
            var hasRemainingTime = true;

            _callback(hasRemainingTime, currentTime);

            _callback = null;
          } catch (e) {
            setTimeout(_flushCallback, 0);
            throw e;
          }
        }
      };

      var initialTime = Date.now();

      exports.unstable_now = function () {
        return Date.now() - initialTime;
      };

      requestHostCallback = function (cb) {
        if (_callback !== null) {
          // Protect against re-entrancy.
          setTimeout(requestHostCallback, 0, cb);
        } else {
          _callback = cb;
          setTimeout(_flushCallback, 0);
        }
      };

      requestHostTimeout = function (cb, ms) {
        _timeoutID = setTimeout(cb, ms);
      };

      cancelHostTimeout = function () {
        clearTimeout(_timeoutID);
      };

      shouldYieldToHost = function () {
        return false;
      };

      requestPaint = exports.unstable_forceFrameRate = function () {};
    } else {
      // Capture local references to native APIs, in case a polyfill overrides them.
      var performance = window.performance;
      var _Date = window.Date;
      var _setTimeout = window.setTimeout;
      var _clearTimeout = window.clearTimeout;

      if (typeof console !== 'undefined') {
        // TODO: Scheduler no longer requires these methods to be polyfilled. But
        // maybe we want to continue warning if they don't exist, to preserve the
        // option to rely on it in the future?
        var requestAnimationFrame = window.requestAnimationFrame;
        var cancelAnimationFrame = window.cancelAnimationFrame; // TODO: Remove fb.me link

        if (typeof requestAnimationFrame !== 'function') {
          // Using console['error'] to evade Babel and ESLint
          console['error']("This browser doesn't support requestAnimationFrame. " + 'Make sure that you load a ' + 'polyfill in older browsers. https://fb.me/react-polyfills');
        }

        if (typeof cancelAnimationFrame !== 'function') {
          // Using console['error'] to evade Babel and ESLint
          console['error']("This browser doesn't support cancelAnimationFrame. " + 'Make sure that you load a ' + 'polyfill in older browsers. https://fb.me/react-polyfills');
        }
      }

      if (typeof performance === 'object' && typeof performance.now === 'function') {
        exports.unstable_now = function () {
          return performance.now();
        };
      } else {
        var _initialTime = _Date.now();

        exports.unstable_now = function () {
          return _Date.now() - _initialTime;
        };
      }

      var isMessageLoopRunning = false;
      var scheduledHostCallback = null;
      var taskTimeoutID = -1; // Scheduler periodically yields in case there is other work on the main
      // thread, like user events. By default, it yields multiple times per frame.
      // It does not attempt to align with frame boundaries, since most tasks don't
      // need to be frame aligned; for those that do, use requestAnimationFrame.

      var yieldInterval = 5;
      var deadline = 0; // TODO: Make this configurable

      {
        // `isInputPending` is not available. Since we have no way of knowing if
        // there's pending input, always yield at the end of the frame.
        shouldYieldToHost = function () {
          return exports.unstable_now() >= deadline;
        }; // Since we yield every frame regardless, `requestPaint` has no effect.


        requestPaint = function () {};
      }

      exports.unstable_forceFrameRate = function (fps) {
        if (fps < 0 || fps > 125) {
          // Using console['error'] to evade Babel and ESLint
          console['error']('forceFrameRate takes a positive int between 0 and 125, ' + 'forcing framerates higher than 125 fps is not unsupported');
          return;
        }

        if (fps > 0) {
          yieldInterval = Math.floor(1000 / fps);
        } else {
          // reset the framerate
          yieldInterval = 5;
        }
      };

      var performWorkUntilDeadline = function () {
        if (scheduledHostCallback !== null) {
          var currentTime = exports.unstable_now(); // Yield after `yieldInterval` ms, regardless of where we are in the vsync
          // cycle. This means there's always time remaining at the beginning of
          // the message event.

          deadline = currentTime + yieldInterval;
          var hasTimeRemaining = true;

          try {
            var hasMoreWork = scheduledHostCallback(hasTimeRemaining, currentTime);

            if (!hasMoreWork) {
              isMessageLoopRunning = false;
              scheduledHostCallback = null;
            } else {
              // If there's more work, schedule the next message event at the end
              // of the preceding one.
              port.postMessage(null);
            }
          } catch (error) {
            // If a scheduler task throws, exit the current browser task so the
            // error can be observed.
            port.postMessage(null);
            throw error;
          }
        } else {
          isMessageLoopRunning = false;
        } // Yielding to the browser will give it a chance to paint, so we can

      };

      var channel = new MessageChannel();
      var port = channel.port2;
      channel.port1.onmessage = performWorkUntilDeadline;

      requestHostCallback = function (callback) {
        scheduledHostCallback = callback;

        if (!isMessageLoopRunning) {
          isMessageLoopRunning = true;
          port.postMessage(null);
        }
      };

      requestHostTimeout = function (callback, ms) {
        taskTimeoutID = _setTimeout(function () {
          callback(exports.unstable_now());
        }, ms);
      };

      cancelHostTimeout = function () {
        _clearTimeout(taskTimeoutID);

        taskTimeoutID = -1;
      };
    }

    function push(heap, node) {
      var index = heap.length;
      heap.push(node);
      siftUp(heap, node, index);
    }

    function peek(heap) {
      var first = heap[0];
      return first === undefined ? null : first;
    }

    function pop(heap) {
      var first = heap[0];

      if (first !== undefined) {
        var last = heap.pop();

        if (last !== first) {
          heap[0] = last;
          siftDown(heap, last, 0);
        }

        return first;
      } else {
        return null;
      }
    }

    function siftUp(heap, node, i) {
      var index = i;

      while (true) {
        var parentIndex = index - 1 >>> 1;
        var parent = heap[parentIndex];

        if (parent !== undefined && compare(parent, node) > 0) {
          // The parent is larger. Swap positions.
          heap[parentIndex] = node;
          heap[index] = parent;
          index = parentIndex;
        } else {
          // The parent is smaller. Exit.
          return;
        }
      }
    }

    function siftDown(heap, node, i) {
      var index = i;
      var length = heap.length;

      while (index < length) {
        var leftIndex = (index + 1) * 2 - 1;
        var left = heap[leftIndex];
        var rightIndex = leftIndex + 1;
        var right = heap[rightIndex]; // If the left or right node is smaller, swap with the smaller of those.

        if (left !== undefined && compare(left, node) < 0) {
          if (right !== undefined && compare(right, left) < 0) {
            heap[index] = right;
            heap[rightIndex] = node;
            index = rightIndex;
          } else {
            heap[index] = left;
            heap[leftIndex] = node;
            index = leftIndex;
          }
        } else if (right !== undefined && compare(right, node) < 0) {
          heap[index] = right;
          heap[rightIndex] = node;
          index = rightIndex;
        } else {
          // Neither child is smaller. Exit.
          return;
        }
      }
    }

    function compare(a, b) {
      // Compare sort index first, then task id.
      var diff = a.sortIndex - b.sortIndex;
      return diff !== 0 ? diff : a.id - b.id;
    } // TODO: Use symbols?


    var NoPriority = 0;
    var ImmediatePriority = 1;
    var UserBlockingPriority = 2;
    var NormalPriority = 3;
    var LowPriority = 4;
    var IdlePriority = 5;
    var runIdCounter = 0;
    var mainThreadIdCounter = 0;
    var profilingStateSize = 4;
    var sharedProfilingBuffer = // $FlowFixMe Flow doesn't know about SharedArrayBuffer
    typeof SharedArrayBuffer === 'function' ? new SharedArrayBuffer(profilingStateSize * Int32Array.BYTES_PER_ELEMENT) : // $FlowFixMe Flow doesn't know about ArrayBuffer
    typeof ArrayBuffer === 'function' ? new ArrayBuffer(profilingStateSize * Int32Array.BYTES_PER_ELEMENT) : null // Don't crash the init path on IE9
    ;
    var profilingState = sharedProfilingBuffer !== null ? new Int32Array(sharedProfilingBuffer) : []; // We can't read this but it helps save bytes for null checks

    var PRIORITY = 0;
    var CURRENT_TASK_ID = 1;
    var CURRENT_RUN_ID = 2;
    var QUEUE_SIZE = 3;
    {
      profilingState[PRIORITY] = NoPriority; // This is maintained with a counter, because the size of the priority queue
      // array might include canceled tasks.

      profilingState[QUEUE_SIZE] = 0;
      profilingState[CURRENT_TASK_ID] = 0;
    } // Bytes per element is 4

    var INITIAL_EVENT_LOG_SIZE = 131072;
    var MAX_EVENT_LOG_SIZE = 524288; // Equivalent to 2 megabytes

    var eventLogSize = 0;
    var eventLogBuffer = null;
    var eventLog = null;
    var eventLogIndex = 0;
    var TaskStartEvent = 1;
    var TaskCompleteEvent = 2;
    var TaskErrorEvent = 3;
    var TaskCancelEvent = 4;
    var TaskRunEvent = 5;
    var TaskYieldEvent = 6;
    var SchedulerSuspendEvent = 7;
    var SchedulerResumeEvent = 8;

    function logEvent(entries) {
      if (eventLog !== null) {
        var offset = eventLogIndex;
        eventLogIndex += entries.length;

        if (eventLogIndex + 1 > eventLogSize) {
          eventLogSize *= 2;

          if (eventLogSize > MAX_EVENT_LOG_SIZE) {
            // Using console['error'] to evade Babel and ESLint
            console['error']("Scheduler Profiling: Event log exceeded maximum size. Don't " + 'forget to call `stopLoggingProfilingEvents()`.');
            stopLoggingProfilingEvents();
            return;
          }

          var newEventLog = new Int32Array(eventLogSize * 4);
          newEventLog.set(eventLog);
          eventLogBuffer = newEventLog.buffer;
          eventLog = newEventLog;
        }

        eventLog.set(entries, offset);
      }
    }

    function startLoggingProfilingEvents() {
      eventLogSize = INITIAL_EVENT_LOG_SIZE;
      eventLogBuffer = new ArrayBuffer(eventLogSize * 4);
      eventLog = new Int32Array(eventLogBuffer);
      eventLogIndex = 0;
    }

    function stopLoggingProfilingEvents() {
      var buffer = eventLogBuffer;
      eventLogSize = 0;
      eventLogBuffer = null;
      eventLog = null;
      eventLogIndex = 0;
      return buffer;
    }

    function markTaskStart(task, ms) {
      {
        profilingState[QUEUE_SIZE]++;

        if (eventLog !== null) {
          // performance.now returns a float, representing milliseconds. When the
          // event is logged, it's coerced to an int. Convert to microseconds to
          // maintain extra degrees of precision.
          logEvent([TaskStartEvent, ms * 1000, task.id, task.priorityLevel]);
        }
      }
    }

    function markTaskCompleted(task, ms) {
      {
        profilingState[PRIORITY] = NoPriority;
        profilingState[CURRENT_TASK_ID] = 0;
        profilingState[QUEUE_SIZE]--;

        if (eventLog !== null) {
          logEvent([TaskCompleteEvent, ms * 1000, task.id]);
        }
      }
    }

    function markTaskCanceled(task, ms) {
      {
        profilingState[QUEUE_SIZE]--;

        if (eventLog !== null) {
          logEvent([TaskCancelEvent, ms * 1000, task.id]);
        }
      }
    }

    function markTaskErrored(task, ms) {
      {
        profilingState[PRIORITY] = NoPriority;
        profilingState[CURRENT_TASK_ID] = 0;
        profilingState[QUEUE_SIZE]--;

        if (eventLog !== null) {
          logEvent([TaskErrorEvent, ms * 1000, task.id]);
        }
      }
    }

    function markTaskRun(task, ms) {
      {
        runIdCounter++;
        profilingState[PRIORITY] = task.priorityLevel;
        profilingState[CURRENT_TASK_ID] = task.id;
        profilingState[CURRENT_RUN_ID] = runIdCounter;

        if (eventLog !== null) {
          logEvent([TaskRunEvent, ms * 1000, task.id, runIdCounter]);
        }
      }
    }

    function markTaskYield(task, ms) {
      {
        profilingState[PRIORITY] = NoPriority;
        profilingState[CURRENT_TASK_ID] = 0;
        profilingState[CURRENT_RUN_ID] = 0;

        if (eventLog !== null) {
          logEvent([TaskYieldEvent, ms * 1000, task.id, runIdCounter]);
        }
      }
    }

    function markSchedulerSuspended(ms) {
      {
        mainThreadIdCounter++;

        if (eventLog !== null) {
          logEvent([SchedulerSuspendEvent, ms * 1000, mainThreadIdCounter]);
        }
      }
    }

    function markSchedulerUnsuspended(ms) {
      {
        if (eventLog !== null) {
          logEvent([SchedulerResumeEvent, ms * 1000, mainThreadIdCounter]);
        }
      }
    }
    /* eslint-disable no-var */
    // Math.pow(2, 30) - 1
    // 0b111111111111111111111111111111


    var maxSigned31BitInt = 1073741823; // Times out immediately

    var IMMEDIATE_PRIORITY_TIMEOUT = -1; // Eventually times out

    var USER_BLOCKING_PRIORITY = 250;
    var NORMAL_PRIORITY_TIMEOUT = 5000;
    var LOW_PRIORITY_TIMEOUT = 10000; // Never times out

    var IDLE_PRIORITY = maxSigned31BitInt; // Tasks are stored on a min heap

    var taskQueue = [];
    var timerQueue = []; // Incrementing id counter. Used to maintain insertion order.

    var taskIdCounter = 1; // Pausing the scheduler is useful for debugging.

    var currentTask = null;
    var currentPriorityLevel = NormalPriority; // This is set while performing work, to prevent re-entrancy.

    var isPerformingWork = false;
    var isHostCallbackScheduled = false;
    var isHostTimeoutScheduled = false;

    function advanceTimers(currentTime) {
      // Check for tasks that are no longer delayed and add them to the queue.
      var timer = peek(timerQueue);

      while (timer !== null) {
        if (timer.callback === null) {
          // Timer was cancelled.
          pop(timerQueue);
        } else if (timer.startTime <= currentTime) {
          // Timer fired. Transfer to the task queue.
          pop(timerQueue);
          timer.sortIndex = timer.expirationTime;
          push(taskQueue, timer);
          {
            markTaskStart(timer, currentTime);
            timer.isQueued = true;
          }
        } else {
          // Remaining timers are pending.
          return;
        }

        timer = peek(timerQueue);
      }
    }

    function handleTimeout(currentTime) {
      isHostTimeoutScheduled = false;
      advanceTimers(currentTime);

      if (!isHostCallbackScheduled) {
        if (peek(taskQueue) !== null) {
          isHostCallbackScheduled = true;
          requestHostCallback(flushWork);
        } else {
          var firstTimer = peek(timerQueue);

          if (firstTimer !== null) {
            requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
          }
        }
      }
    }

    function flushWork(hasTimeRemaining, initialTime) {
      {
        markSchedulerUnsuspended(initialTime);
      } // We'll need a host callback the next time work is scheduled.

      isHostCallbackScheduled = false;

      if (isHostTimeoutScheduled) {
        // We scheduled a timeout but it's no longer needed. Cancel it.
        isHostTimeoutScheduled = false;
        cancelHostTimeout();
      }

      isPerformingWork = true;
      var previousPriorityLevel = currentPriorityLevel;

      try {
        if (enableProfiling) {
          try {
            return workLoop(hasTimeRemaining, initialTime);
          } catch (error) {
            if (currentTask !== null) {
              var currentTime = exports.unstable_now();
              markTaskErrored(currentTask, currentTime);
              currentTask.isQueued = false;
            }

            throw error;
          }
        } else {
          // No catch in prod codepath.
          return workLoop(hasTimeRemaining, initialTime);
        }
      } finally {
        currentTask = null;
        currentPriorityLevel = previousPriorityLevel;
        isPerformingWork = false;
        {
          var _currentTime = exports.unstable_now();

          markSchedulerSuspended(_currentTime);
        }
      }
    }

    function workLoop(hasTimeRemaining, initialTime) {
      var currentTime = initialTime;
      advanceTimers(currentTime);
      currentTask = peek(taskQueue);

      while (currentTask !== null && !enableSchedulerDebugging) {
        if (currentTask.expirationTime > currentTime && (!hasTimeRemaining || shouldYieldToHost())) {
          // This currentTask hasn't expired, and we've reached the deadline.
          break;
        }

        var callback = currentTask.callback;

        if (callback !== null) {
          currentTask.callback = null;
          currentPriorityLevel = currentTask.priorityLevel;
          var didUserCallbackTimeout = currentTask.expirationTime <= currentTime;
          markTaskRun(currentTask, currentTime);
          var continuationCallback = callback(didUserCallbackTimeout);
          currentTime = exports.unstable_now();

          if (typeof continuationCallback === 'function') {
            currentTask.callback = continuationCallback;
            markTaskYield(currentTask, currentTime);
          } else {
            {
              markTaskCompleted(currentTask, currentTime);
              currentTask.isQueued = false;
            }

            if (currentTask === peek(taskQueue)) {
              pop(taskQueue);
            }
          }

          advanceTimers(currentTime);
        } else {
          pop(taskQueue);
        }

        currentTask = peek(taskQueue);
      } // Return whether there's additional work


      if (currentTask !== null) {
        return true;
      } else {
        var firstTimer = peek(timerQueue);

        if (firstTimer !== null) {
          requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
        }

        return false;
      }
    }

    function unstable_runWithPriority(priorityLevel, eventHandler) {
      switch (priorityLevel) {
        case ImmediatePriority:
        case UserBlockingPriority:
        case NormalPriority:
        case LowPriority:
        case IdlePriority:
          break;

        default:
          priorityLevel = NormalPriority;
      }

      var previousPriorityLevel = currentPriorityLevel;
      currentPriorityLevel = priorityLevel;

      try {
        return eventHandler();
      } finally {
        currentPriorityLevel = previousPriorityLevel;
      }
    }

    function unstable_next(eventHandler) {
      var priorityLevel;

      switch (currentPriorityLevel) {
        case ImmediatePriority:
        case UserBlockingPriority:
        case NormalPriority:
          // Shift down to normal priority
          priorityLevel = NormalPriority;
          break;

        default:
          // Anything lower than normal priority should remain at the current level.
          priorityLevel = currentPriorityLevel;
          break;
      }

      var previousPriorityLevel = currentPriorityLevel;
      currentPriorityLevel = priorityLevel;

      try {
        return eventHandler();
      } finally {
        currentPriorityLevel = previousPriorityLevel;
      }
    }

    function unstable_wrapCallback(callback) {
      var parentPriorityLevel = currentPriorityLevel;
      return function () {
        // This is a fork of runWithPriority, inlined for performance.
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = parentPriorityLevel;

        try {
          return callback.apply(this, arguments);
        } finally {
          currentPriorityLevel = previousPriorityLevel;
        }
      };
    }

    function timeoutForPriorityLevel(priorityLevel) {
      switch (priorityLevel) {
        case ImmediatePriority:
          return IMMEDIATE_PRIORITY_TIMEOUT;

        case UserBlockingPriority:
          return USER_BLOCKING_PRIORITY;

        case IdlePriority:
          return IDLE_PRIORITY;

        case LowPriority:
          return LOW_PRIORITY_TIMEOUT;

        case NormalPriority:
        default:
          return NORMAL_PRIORITY_TIMEOUT;
      }
    }

    function unstable_scheduleCallback(priorityLevel, callback, options) {
      var currentTime = exports.unstable_now();
      var startTime;
      var timeout;

      if (typeof options === 'object' && options !== null) {
        var delay = options.delay;

        if (typeof delay === 'number' && delay > 0) {
          startTime = currentTime + delay;
        } else {
          startTime = currentTime;
        }

        timeout = typeof options.timeout === 'number' ? options.timeout : timeoutForPriorityLevel(priorityLevel);
      } else {
        timeout = timeoutForPriorityLevel(priorityLevel);
        startTime = currentTime;
      }

      var expirationTime = startTime + timeout;
      var newTask = {
        id: taskIdCounter++,
        callback: callback,
        priorityLevel: priorityLevel,
        startTime: startTime,
        expirationTime: expirationTime,
        sortIndex: -1
      };
      {
        newTask.isQueued = false;
      }

      if (startTime > currentTime) {
        // This is a delayed task.
        newTask.sortIndex = startTime;
        push(timerQueue, newTask);

        if (peek(taskQueue) === null && newTask === peek(timerQueue)) {
          // All tasks are delayed, and this is the task with the earliest delay.
          if (isHostTimeoutScheduled) {
            // Cancel an existing timeout.
            cancelHostTimeout();
          } else {
            isHostTimeoutScheduled = true;
          } // Schedule a timeout.


          requestHostTimeout(handleTimeout, startTime - currentTime);
        }
      } else {
        newTask.sortIndex = expirationTime;
        push(taskQueue, newTask);
        {
          markTaskStart(newTask, currentTime);
          newTask.isQueued = true;
        } // Schedule a host callback, if needed. If we're already performing work,
        // wait until the next time we yield.

        if (!isHostCallbackScheduled && !isPerformingWork) {
          isHostCallbackScheduled = true;
          requestHostCallback(flushWork);
        }
      }

      return newTask;
    }

    function unstable_pauseExecution() {}

    function unstable_continueExecution() {
      if (!isHostCallbackScheduled && !isPerformingWork) {
        isHostCallbackScheduled = true;
        requestHostCallback(flushWork);
      }
    }

    function unstable_getFirstCallbackNode() {
      return peek(taskQueue);
    }

    function unstable_cancelCallback(task) {
      {
        if (task.isQueued) {
          var currentTime = exports.unstable_now();
          markTaskCanceled(task, currentTime);
          task.isQueued = false;
        }
      } // Null out the callback to indicate the task has been canceled. (Can't
      // remove from the queue because you can't remove arbitrary nodes from an
      // array based heap, only the first one.)

      task.callback = null;
    }

    function unstable_getCurrentPriorityLevel() {
      return currentPriorityLevel;
    }

    function unstable_shouldYield() {
      var currentTime = exports.unstable_now();
      advanceTimers(currentTime);
      var firstTask = peek(taskQueue);
      return firstTask !== currentTask && currentTask !== null && firstTask !== null && firstTask.callback !== null && firstTask.startTime <= currentTime && firstTask.expirationTime < currentTask.expirationTime || shouldYieldToHost();
    }

    var unstable_requestPaint = requestPaint;
    var unstable_Profiling = {
      startLoggingProfilingEvents: startLoggingProfilingEvents,
      stopLoggingProfilingEvents: stopLoggingProfilingEvents,
      sharedProfilingBuffer: sharedProfilingBuffer
    };
    exports.unstable_IdlePriority = IdlePriority;
    exports.unstable_ImmediatePriority = ImmediatePriority;
    exports.unstable_LowPriority = LowPriority;
    exports.unstable_NormalPriority = NormalPriority;
    exports.unstable_Profiling = unstable_Profiling;
    exports.unstable_UserBlockingPriority = UserBlockingPriority;
    exports.unstable_cancelCallback = unstable_cancelCallback;
    exports.unstable_continueExecution = unstable_continueExecution;
    exports.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel;
    exports.unstable_getFirstCallbackNode = unstable_getFirstCallbackNode;
    exports.unstable_next = unstable_next;
    exports.unstable_pauseExecution = unstable_pauseExecution;
    exports.unstable_requestPaint = unstable_requestPaint;
    exports.unstable_runWithPriority = unstable_runWithPriority;
    exports.unstable_scheduleCallback = unstable_scheduleCallback;
    exports.unstable_shouldYield = unstable_shouldYield;
    exports.unstable_wrapCallback = unstable_wrapCallback;
  })();
}

/***/ }),

/***/ "./node_modules/scheduler/index.js":
/*!*****************************************!*\
  !*** ./node_modules/scheduler/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/scheduler.development.js */ "./node_modules/scheduler/cjs/scheduler.development.js");
}

/***/ }),

/***/ "./node_modules/scheduler/tracing.js":
/*!*******************************************!*\
  !*** ./node_modules/scheduler/tracing.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/scheduler-tracing.development.js */ "./node_modules/scheduler/cjs/scheduler-tracing.development.js");
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdmVuZG9ycy9zY2hlZHVsZXIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2NoZWR1bGVyL2Nqcy9zY2hlZHVsZXItdHJhY2luZy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2NoZWR1bGVyL2Nqcy9zY2hlZHVsZXIuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NjaGVkdWxlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2NoZWR1bGVyL3RyYWNpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBsaWNlbnNlIFJlYWN0IHYwLjE5LjFcbiAqIHNjaGVkdWxlci10cmFjaW5nLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBERUZBVUxUX1RIUkVBRF9JRCA9IDA7IC8vIENvdW50ZXJzIHVzZWQgdG8gZ2VuZXJhdGUgdW5pcXVlIElEcy5cblxudmFyIGludGVyYWN0aW9uSURDb3VudGVyID0gMDtcbnZhciB0aHJlYWRJRENvdW50ZXIgPSAwOyAvLyBTZXQgb2YgY3VycmVudGx5IHRyYWNlZCBpbnRlcmFjdGlvbnMuXG4vLyBJbnRlcmFjdGlvbnMgXCJzdGFja1wi4oCTXG4vLyBNZWFuaW5nIHRoYXQgbmV3bHkgdHJhY2VkIGludGVyYWN0aW9ucyBhcmUgYXBwZW5kZWQgdG8gdGhlIHByZXZpb3VzbHkgYWN0aXZlIHNldC5cbi8vIFdoZW4gYW4gaW50ZXJhY3Rpb24gZ29lcyBvdXQgb2Ygc2NvcGUsIHRoZSBwcmV2aW91cyBzZXQgKGlmIGFueSkgaXMgcmVzdG9yZWQuXG5cbmV4cG9ydHMuX19pbnRlcmFjdGlvbnNSZWYgPSBudWxsOyAvLyBMaXN0ZW5lcihzKSB0byBub3RpZnkgd2hlbiBpbnRlcmFjdGlvbnMgYmVnaW4gYW5kIGVuZC5cblxuZXhwb3J0cy5fX3N1YnNjcmliZXJSZWYgPSBudWxsO1xuXG57XG4gIGV4cG9ydHMuX19pbnRlcmFjdGlvbnNSZWYgPSB7XG4gICAgY3VycmVudDogbmV3IFNldCgpXG4gIH07XG4gIGV4cG9ydHMuX19zdWJzY3JpYmVyUmVmID0ge1xuICAgIGN1cnJlbnQ6IG51bGxcbiAgfTtcbn1cbmZ1bmN0aW9uIHVuc3RhYmxlX2NsZWFyKGNhbGxiYWNrKSB7XG5cbiAgdmFyIHByZXZJbnRlcmFjdGlvbnMgPSBleHBvcnRzLl9faW50ZXJhY3Rpb25zUmVmLmN1cnJlbnQ7XG4gIGV4cG9ydHMuX19pbnRlcmFjdGlvbnNSZWYuY3VycmVudCA9IG5ldyBTZXQoKTtcblxuICB0cnkge1xuICAgIHJldHVybiBjYWxsYmFjaygpO1xuICB9IGZpbmFsbHkge1xuICAgIGV4cG9ydHMuX19pbnRlcmFjdGlvbnNSZWYuY3VycmVudCA9IHByZXZJbnRlcmFjdGlvbnM7XG4gIH1cbn1cbmZ1bmN0aW9uIHVuc3RhYmxlX2dldEN1cnJlbnQoKSB7XG4gIHtcbiAgICByZXR1cm4gZXhwb3J0cy5fX2ludGVyYWN0aW9uc1JlZi5jdXJyZW50O1xuICB9XG59XG5mdW5jdGlvbiB1bnN0YWJsZV9nZXRUaHJlYWRJRCgpIHtcbiAgcmV0dXJuICsrdGhyZWFkSURDb3VudGVyO1xufVxuZnVuY3Rpb24gdW5zdGFibGVfdHJhY2UobmFtZSwgdGltZXN0YW1wLCBjYWxsYmFjaykge1xuICB2YXIgdGhyZWFkSUQgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IERFRkFVTFRfVEhSRUFEX0lEO1xuXG4gIHZhciBpbnRlcmFjdGlvbiA9IHtcbiAgICBfX2NvdW50OiAxLFxuICAgIGlkOiBpbnRlcmFjdGlvbklEQ291bnRlcisrLFxuICAgIG5hbWU6IG5hbWUsXG4gICAgdGltZXN0YW1wOiB0aW1lc3RhbXBcbiAgfTtcbiAgdmFyIHByZXZJbnRlcmFjdGlvbnMgPSBleHBvcnRzLl9faW50ZXJhY3Rpb25zUmVmLmN1cnJlbnQ7IC8vIFRyYWNlZCBpbnRlcmFjdGlvbnMgc2hvdWxkIHN0YWNrL2FjY3VtdWxhdGUuXG4gIC8vIFRvIGRvIHRoYXQsIGNsb25lIHRoZSBjdXJyZW50IGludGVyYWN0aW9ucy5cbiAgLy8gVGhlIHByZXZpb3VzIHNldCB3aWxsIGJlIHJlc3RvcmVkIHVwb24gY29tcGxldGlvbi5cblxuICB2YXIgaW50ZXJhY3Rpb25zID0gbmV3IFNldChwcmV2SW50ZXJhY3Rpb25zKTtcbiAgaW50ZXJhY3Rpb25zLmFkZChpbnRlcmFjdGlvbik7XG4gIGV4cG9ydHMuX19pbnRlcmFjdGlvbnNSZWYuY3VycmVudCA9IGludGVyYWN0aW9ucztcbiAgdmFyIHN1YnNjcmliZXIgPSBleHBvcnRzLl9fc3Vic2NyaWJlclJlZi5jdXJyZW50O1xuICB2YXIgcmV0dXJuVmFsdWU7XG5cbiAgdHJ5IHtcbiAgICBpZiAoc3Vic2NyaWJlciAhPT0gbnVsbCkge1xuICAgICAgc3Vic2NyaWJlci5vbkludGVyYWN0aW9uVHJhY2VkKGludGVyYWN0aW9uKTtcbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChzdWJzY3JpYmVyICE9PSBudWxsKSB7XG4gICAgICAgIHN1YnNjcmliZXIub25Xb3JrU3RhcnRlZChpbnRlcmFjdGlvbnMsIHRocmVhZElEKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuVmFsdWUgPSBjYWxsYmFjaygpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgZXhwb3J0cy5fX2ludGVyYWN0aW9uc1JlZi5jdXJyZW50ID0gcHJldkludGVyYWN0aW9ucztcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChzdWJzY3JpYmVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLm9uV29ya1N0b3BwZWQoaW50ZXJhY3Rpb25zLCB0aHJlYWRJRCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGludGVyYWN0aW9uLl9fY291bnQtLTsgLy8gSWYgbm8gYXN5bmMgd29yayB3YXMgc2NoZWR1bGVkIGZvciB0aGlzIGludGVyYWN0aW9uLFxuICAgICAgICAgIC8vIE5vdGlmeSBzdWJzY3JpYmVycyB0aGF0IGl0J3MgY29tcGxldGVkLlxuXG4gICAgICAgICAgaWYgKHN1YnNjcmliZXIgIT09IG51bGwgJiYgaW50ZXJhY3Rpb24uX19jb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5vbkludGVyYWN0aW9uU2NoZWR1bGVkV29ya0NvbXBsZXRlZChpbnRlcmFjdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJldHVyblZhbHVlO1xufVxuZnVuY3Rpb24gdW5zdGFibGVfd3JhcChjYWxsYmFjaykge1xuICB2YXIgdGhyZWFkSUQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IERFRkFVTFRfVEhSRUFEX0lEO1xuXG4gIHZhciB3cmFwcGVkSW50ZXJhY3Rpb25zID0gZXhwb3J0cy5fX2ludGVyYWN0aW9uc1JlZi5jdXJyZW50O1xuICB2YXIgc3Vic2NyaWJlciA9IGV4cG9ydHMuX19zdWJzY3JpYmVyUmVmLmN1cnJlbnQ7XG5cbiAgaWYgKHN1YnNjcmliZXIgIT09IG51bGwpIHtcbiAgICBzdWJzY3JpYmVyLm9uV29ya1NjaGVkdWxlZCh3cmFwcGVkSW50ZXJhY3Rpb25zLCB0aHJlYWRJRCk7XG4gIH0gLy8gVXBkYXRlIHRoZSBwZW5kaW5nIGFzeW5jIHdvcmsgY291bnQgZm9yIHRoZSBjdXJyZW50IGludGVyYWN0aW9ucy5cbiAgLy8gVXBkYXRlIGFmdGVyIGNhbGxpbmcgc3Vic2NyaWJlcnMgaW4gY2FzZSBvZiBlcnJvci5cblxuXG4gIHdyYXBwZWRJbnRlcmFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoaW50ZXJhY3Rpb24pIHtcbiAgICBpbnRlcmFjdGlvbi5fX2NvdW50Kys7XG4gIH0pO1xuICB2YXIgaGFzUnVuID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gd3JhcHBlZCgpIHtcbiAgICB2YXIgcHJldkludGVyYWN0aW9ucyA9IGV4cG9ydHMuX19pbnRlcmFjdGlvbnNSZWYuY3VycmVudDtcbiAgICBleHBvcnRzLl9faW50ZXJhY3Rpb25zUmVmLmN1cnJlbnQgPSB3cmFwcGVkSW50ZXJhY3Rpb25zO1xuICAgIHN1YnNjcmliZXIgPSBleHBvcnRzLl9fc3Vic2NyaWJlclJlZi5jdXJyZW50O1xuXG4gICAgdHJ5IHtcbiAgICAgIHZhciByZXR1cm5WYWx1ZTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHN1YnNjcmliZXIgIT09IG51bGwpIHtcbiAgICAgICAgICBzdWJzY3JpYmVyLm9uV29ya1N0YXJ0ZWQod3JhcHBlZEludGVyYWN0aW9ucywgdGhyZWFkSUQpO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVyblZhbHVlID0gY2FsbGJhY2suYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGV4cG9ydHMuX19pbnRlcmFjdGlvbnNSZWYuY3VycmVudCA9IHByZXZJbnRlcmFjdGlvbnM7XG5cbiAgICAgICAgICBpZiAoc3Vic2NyaWJlciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5vbldvcmtTdG9wcGVkKHdyYXBwZWRJbnRlcmFjdGlvbnMsIHRocmVhZElEKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoIWhhc1J1bikge1xuICAgICAgICAvLyBXZSBvbmx5IGV4cGVjdCBhIHdyYXBwZWQgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgb25jZSxcbiAgICAgICAgLy8gQnV0IGluIHRoZSBldmVudCB0aGF0IGl0J3MgZXhlY3V0ZWQgbW9yZSB0aGFuIG9uY2XigJNcbiAgICAgICAgLy8gT25seSBkZWNyZW1lbnQgdGhlIG91dHN0YW5kaW5nIGludGVyYWN0aW9uIGNvdW50cyBvbmNlLlxuICAgICAgICBoYXNSdW4gPSB0cnVlOyAvLyBVcGRhdGUgcGVuZGluZyBhc3luYyBjb3VudHMgZm9yIGFsbCB3cmFwcGVkIGludGVyYWN0aW9ucy5cbiAgICAgICAgLy8gSWYgdGhpcyB3YXMgdGhlIGxhc3Qgc2NoZWR1bGVkIGFzeW5jIHdvcmsgZm9yIGFueSBvZiB0aGVtLFxuICAgICAgICAvLyBNYXJrIHRoZW0gYXMgY29tcGxldGVkLlxuXG4gICAgICAgIHdyYXBwZWRJbnRlcmFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoaW50ZXJhY3Rpb24pIHtcbiAgICAgICAgICBpbnRlcmFjdGlvbi5fX2NvdW50LS07XG5cbiAgICAgICAgICBpZiAoc3Vic2NyaWJlciAhPT0gbnVsbCAmJiBpbnRlcmFjdGlvbi5fX2NvdW50ID09PSAwKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLm9uSW50ZXJhY3Rpb25TY2hlZHVsZWRXb3JrQ29tcGxldGVkKGludGVyYWN0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHdyYXBwZWQuY2FuY2VsID0gZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIHN1YnNjcmliZXIgPSBleHBvcnRzLl9fc3Vic2NyaWJlclJlZi5jdXJyZW50O1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmIChzdWJzY3JpYmVyICE9PSBudWxsKSB7XG4gICAgICAgIHN1YnNjcmliZXIub25Xb3JrQ2FuY2VsZWQod3JhcHBlZEludGVyYWN0aW9ucywgdGhyZWFkSUQpO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICAvLyBVcGRhdGUgcGVuZGluZyBhc3luYyBjb3VudHMgZm9yIGFsbCB3cmFwcGVkIGludGVyYWN0aW9ucy5cbiAgICAgIC8vIElmIHRoaXMgd2FzIHRoZSBsYXN0IHNjaGVkdWxlZCBhc3luYyB3b3JrIGZvciBhbnkgb2YgdGhlbSxcbiAgICAgIC8vIE1hcmsgdGhlbSBhcyBjb21wbGV0ZWQuXG4gICAgICB3cmFwcGVkSW50ZXJhY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKGludGVyYWN0aW9uKSB7XG4gICAgICAgIGludGVyYWN0aW9uLl9fY291bnQtLTtcblxuICAgICAgICBpZiAoc3Vic2NyaWJlciAmJiBpbnRlcmFjdGlvbi5fX2NvdW50ID09PSAwKSB7XG4gICAgICAgICAgc3Vic2NyaWJlci5vbkludGVyYWN0aW9uU2NoZWR1bGVkV29ya0NvbXBsZXRlZChpbnRlcmFjdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gd3JhcHBlZDtcbn1cblxudmFyIHN1YnNjcmliZXJzID0gbnVsbDtcblxue1xuICBzdWJzY3JpYmVycyA9IG5ldyBTZXQoKTtcbn1cblxuZnVuY3Rpb24gdW5zdGFibGVfc3Vic2NyaWJlKHN1YnNjcmliZXIpIHtcbiAge1xuICAgIHN1YnNjcmliZXJzLmFkZChzdWJzY3JpYmVyKTtcblxuICAgIGlmIChzdWJzY3JpYmVycy5zaXplID09PSAxKSB7XG4gICAgICBleHBvcnRzLl9fc3Vic2NyaWJlclJlZi5jdXJyZW50ID0ge1xuICAgICAgICBvbkludGVyYWN0aW9uU2NoZWR1bGVkV29ya0NvbXBsZXRlZDogb25JbnRlcmFjdGlvblNjaGVkdWxlZFdvcmtDb21wbGV0ZWQsXG4gICAgICAgIG9uSW50ZXJhY3Rpb25UcmFjZWQ6IG9uSW50ZXJhY3Rpb25UcmFjZWQsXG4gICAgICAgIG9uV29ya0NhbmNlbGVkOiBvbldvcmtDYW5jZWxlZCxcbiAgICAgICAgb25Xb3JrU2NoZWR1bGVkOiBvbldvcmtTY2hlZHVsZWQsXG4gICAgICAgIG9uV29ya1N0YXJ0ZWQ6IG9uV29ya1N0YXJ0ZWQsXG4gICAgICAgIG9uV29ya1N0b3BwZWQ6IG9uV29ya1N0b3BwZWRcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiB1bnN0YWJsZV91bnN1YnNjcmliZShzdWJzY3JpYmVyKSB7XG4gIHtcbiAgICBzdWJzY3JpYmVycy5kZWxldGUoc3Vic2NyaWJlcik7XG5cbiAgICBpZiAoc3Vic2NyaWJlcnMuc2l6ZSA9PT0gMCkge1xuICAgICAgZXhwb3J0cy5fX3N1YnNjcmliZXJSZWYuY3VycmVudCA9IG51bGw7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG9uSW50ZXJhY3Rpb25UcmFjZWQoaW50ZXJhY3Rpb24pIHtcbiAgdmFyIGRpZENhdGNoRXJyb3IgPSBmYWxzZTtcbiAgdmFyIGNhdWdodEVycm9yID0gbnVsbDtcbiAgc3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgIHRyeSB7XG4gICAgICBzdWJzY3JpYmVyLm9uSW50ZXJhY3Rpb25UcmFjZWQoaW50ZXJhY3Rpb24pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAoIWRpZENhdGNoRXJyb3IpIHtcbiAgICAgICAgZGlkQ2F0Y2hFcnJvciA9IHRydWU7XG4gICAgICAgIGNhdWdodEVycm9yID0gZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBpZiAoZGlkQ2F0Y2hFcnJvcikge1xuICAgIHRocm93IGNhdWdodEVycm9yO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9uSW50ZXJhY3Rpb25TY2hlZHVsZWRXb3JrQ29tcGxldGVkKGludGVyYWN0aW9uKSB7XG4gIHZhciBkaWRDYXRjaEVycm9yID0gZmFsc2U7XG4gIHZhciBjYXVnaHRFcnJvciA9IG51bGw7XG4gIHN1YnNjcmliZXJzLmZvckVhY2goZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICB0cnkge1xuICAgICAgc3Vic2NyaWJlci5vbkludGVyYWN0aW9uU2NoZWR1bGVkV29ya0NvbXBsZXRlZChpbnRlcmFjdGlvbik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmICghZGlkQ2F0Y2hFcnJvcikge1xuICAgICAgICBkaWRDYXRjaEVycm9yID0gdHJ1ZTtcbiAgICAgICAgY2F1Z2h0RXJyb3IgPSBlcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGlmIChkaWRDYXRjaEVycm9yKSB7XG4gICAgdGhyb3cgY2F1Z2h0RXJyb3I7XG4gIH1cbn1cblxuZnVuY3Rpb24gb25Xb3JrU2NoZWR1bGVkKGludGVyYWN0aW9ucywgdGhyZWFkSUQpIHtcbiAgdmFyIGRpZENhdGNoRXJyb3IgPSBmYWxzZTtcbiAgdmFyIGNhdWdodEVycm9yID0gbnVsbDtcbiAgc3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgIHRyeSB7XG4gICAgICBzdWJzY3JpYmVyLm9uV29ya1NjaGVkdWxlZChpbnRlcmFjdGlvbnMsIHRocmVhZElEKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKCFkaWRDYXRjaEVycm9yKSB7XG4gICAgICAgIGRpZENhdGNoRXJyb3IgPSB0cnVlO1xuICAgICAgICBjYXVnaHRFcnJvciA9IGVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGRpZENhdGNoRXJyb3IpIHtcbiAgICB0aHJvdyBjYXVnaHRFcnJvcjtcbiAgfVxufVxuXG5mdW5jdGlvbiBvbldvcmtTdGFydGVkKGludGVyYWN0aW9ucywgdGhyZWFkSUQpIHtcbiAgdmFyIGRpZENhdGNoRXJyb3IgPSBmYWxzZTtcbiAgdmFyIGNhdWdodEVycm9yID0gbnVsbDtcbiAgc3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgIHRyeSB7XG4gICAgICBzdWJzY3JpYmVyLm9uV29ya1N0YXJ0ZWQoaW50ZXJhY3Rpb25zLCB0aHJlYWRJRCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmICghZGlkQ2F0Y2hFcnJvcikge1xuICAgICAgICBkaWRDYXRjaEVycm9yID0gdHJ1ZTtcbiAgICAgICAgY2F1Z2h0RXJyb3IgPSBlcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGlmIChkaWRDYXRjaEVycm9yKSB7XG4gICAgdGhyb3cgY2F1Z2h0RXJyb3I7XG4gIH1cbn1cblxuZnVuY3Rpb24gb25Xb3JrU3RvcHBlZChpbnRlcmFjdGlvbnMsIHRocmVhZElEKSB7XG4gIHZhciBkaWRDYXRjaEVycm9yID0gZmFsc2U7XG4gIHZhciBjYXVnaHRFcnJvciA9IG51bGw7XG4gIHN1YnNjcmliZXJzLmZvckVhY2goZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICB0cnkge1xuICAgICAgc3Vic2NyaWJlci5vbldvcmtTdG9wcGVkKGludGVyYWN0aW9ucywgdGhyZWFkSUQpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAoIWRpZENhdGNoRXJyb3IpIHtcbiAgICAgICAgZGlkQ2F0Y2hFcnJvciA9IHRydWU7XG4gICAgICAgIGNhdWdodEVycm9yID0gZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBpZiAoZGlkQ2F0Y2hFcnJvcikge1xuICAgIHRocm93IGNhdWdodEVycm9yO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9uV29ya0NhbmNlbGVkKGludGVyYWN0aW9ucywgdGhyZWFkSUQpIHtcbiAgdmFyIGRpZENhdGNoRXJyb3IgPSBmYWxzZTtcbiAgdmFyIGNhdWdodEVycm9yID0gbnVsbDtcbiAgc3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgIHRyeSB7XG4gICAgICBzdWJzY3JpYmVyLm9uV29ya0NhbmNlbGVkKGludGVyYWN0aW9ucywgdGhyZWFkSUQpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAoIWRpZENhdGNoRXJyb3IpIHtcbiAgICAgICAgZGlkQ2F0Y2hFcnJvciA9IHRydWU7XG4gICAgICAgIGNhdWdodEVycm9yID0gZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBpZiAoZGlkQ2F0Y2hFcnJvcikge1xuICAgIHRocm93IGNhdWdodEVycm9yO1xuICB9XG59XG5cbmV4cG9ydHMudW5zdGFibGVfY2xlYXIgPSB1bnN0YWJsZV9jbGVhcjtcbmV4cG9ydHMudW5zdGFibGVfZ2V0Q3VycmVudCA9IHVuc3RhYmxlX2dldEN1cnJlbnQ7XG5leHBvcnRzLnVuc3RhYmxlX2dldFRocmVhZElEID0gdW5zdGFibGVfZ2V0VGhyZWFkSUQ7XG5leHBvcnRzLnVuc3RhYmxlX3N1YnNjcmliZSA9IHVuc3RhYmxlX3N1YnNjcmliZTtcbmV4cG9ydHMudW5zdGFibGVfdHJhY2UgPSB1bnN0YWJsZV90cmFjZTtcbmV4cG9ydHMudW5zdGFibGVfdW5zdWJzY3JpYmUgPSB1bnN0YWJsZV91bnN1YnNjcmliZTtcbmV4cG9ydHMudW5zdGFibGVfd3JhcCA9IHVuc3RhYmxlX3dyYXA7XG4gIH0pKCk7XG59XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjAuMTkuMVxuICogc2NoZWR1bGVyLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbmFibGVTY2hlZHVsZXJEZWJ1Z2dpbmcgPSBmYWxzZTtcbnZhciBlbmFibGVQcm9maWxpbmcgPSB0cnVlO1xuXG52YXIgcmVxdWVzdEhvc3RDYWxsYmFjaztcbnZhciByZXF1ZXN0SG9zdFRpbWVvdXQ7XG52YXIgY2FuY2VsSG9zdFRpbWVvdXQ7XG52YXIgc2hvdWxkWWllbGRUb0hvc3Q7XG52YXIgcmVxdWVzdFBhaW50O1xuXG5pZiAoIC8vIElmIFNjaGVkdWxlciBydW5zIGluIGEgbm9uLURPTSBlbnZpcm9ubWVudCwgaXQgZmFsbHMgYmFjayB0byBhIG5haXZlXG4vLyBpbXBsZW1lbnRhdGlvbiB1c2luZyBzZXRUaW1lb3V0LlxudHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgLy8gQ2hlY2sgaWYgTWVzc2FnZUNoYW5uZWwgaXMgc3VwcG9ydGVkLCB0b28uXG50eXBlb2YgTWVzc2FnZUNoYW5uZWwgIT09ICdmdW5jdGlvbicpIHtcbiAgLy8gSWYgdGhpcyBhY2NpZGVudGFsbHkgZ2V0cyBpbXBvcnRlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50LCBlLmcuIEphdmFTY3JpcHRDb3JlLFxuICAvLyBmYWxsYmFjayB0byBhIG5haXZlIGltcGxlbWVudGF0aW9uLlxuICB2YXIgX2NhbGxiYWNrID0gbnVsbDtcbiAgdmFyIF90aW1lb3V0SUQgPSBudWxsO1xuXG4gIHZhciBfZmx1c2hDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoX2NhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgY3VycmVudFRpbWUgPSBleHBvcnRzLnVuc3RhYmxlX25vdygpO1xuICAgICAgICB2YXIgaGFzUmVtYWluaW5nVGltZSA9IHRydWU7XG5cbiAgICAgICAgX2NhbGxiYWNrKGhhc1JlbWFpbmluZ1RpbWUsIGN1cnJlbnRUaW1lKTtcblxuICAgICAgICBfY2FsbGJhY2sgPSBudWxsO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBzZXRUaW1lb3V0KF9mbHVzaENhbGxiYWNrLCAwKTtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdmFyIGluaXRpYWxUaW1lID0gRGF0ZS5ub3coKTtcblxuICBleHBvcnRzLnVuc3RhYmxlX25vdyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gRGF0ZS5ub3coKSAtIGluaXRpYWxUaW1lO1xuICB9O1xuXG4gIHJlcXVlc3RIb3N0Q2FsbGJhY2sgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICBpZiAoX2NhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgICAvLyBQcm90ZWN0IGFnYWluc3QgcmUtZW50cmFuY3kuXG4gICAgICBzZXRUaW1lb3V0KHJlcXVlc3RIb3N0Q2FsbGJhY2ssIDAsIGNiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgX2NhbGxiYWNrID0gY2I7XG4gICAgICBzZXRUaW1lb3V0KF9mbHVzaENhbGxiYWNrLCAwKTtcbiAgICB9XG4gIH07XG5cbiAgcmVxdWVzdEhvc3RUaW1lb3V0ID0gZnVuY3Rpb24gKGNiLCBtcykge1xuICAgIF90aW1lb3V0SUQgPSBzZXRUaW1lb3V0KGNiLCBtcyk7XG4gIH07XG5cbiAgY2FuY2VsSG9zdFRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgY2xlYXJUaW1lb3V0KF90aW1lb3V0SUQpO1xuICB9O1xuXG4gIHNob3VsZFlpZWxkVG9Ib3N0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICByZXF1ZXN0UGFpbnQgPSBleHBvcnRzLnVuc3RhYmxlX2ZvcmNlRnJhbWVSYXRlID0gZnVuY3Rpb24gKCkge307XG59IGVsc2Uge1xuICAvLyBDYXB0dXJlIGxvY2FsIHJlZmVyZW5jZXMgdG8gbmF0aXZlIEFQSXMsIGluIGNhc2UgYSBwb2x5ZmlsbCBvdmVycmlkZXMgdGhlbS5cbiAgdmFyIHBlcmZvcm1hbmNlID0gd2luZG93LnBlcmZvcm1hbmNlO1xuICB2YXIgX0RhdGUgPSB3aW5kb3cuRGF0ZTtcbiAgdmFyIF9zZXRUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQ7XG4gIHZhciBfY2xlYXJUaW1lb3V0ID0gd2luZG93LmNsZWFyVGltZW91dDtcblxuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gVE9ETzogU2NoZWR1bGVyIG5vIGxvbmdlciByZXF1aXJlcyB0aGVzZSBtZXRob2RzIHRvIGJlIHBvbHlmaWxsZWQuIEJ1dFxuICAgIC8vIG1heWJlIHdlIHdhbnQgdG8gY29udGludWUgd2FybmluZyBpZiB0aGV5IGRvbid0IGV4aXN0LCB0byBwcmVzZXJ2ZSB0aGVcbiAgICAvLyBvcHRpb24gdG8gcmVseSBvbiBpdCBpbiB0aGUgZnV0dXJlP1xuICAgIHZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuICAgIHZhciBjYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZTsgLy8gVE9ETzogUmVtb3ZlIGZiLm1lIGxpbmtcblxuICAgIGlmICh0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBVc2luZyBjb25zb2xlWydlcnJvciddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcbiAgICAgIGNvbnNvbGVbJ2Vycm9yJ10oXCJUaGlzIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IHJlcXVlc3RBbmltYXRpb25GcmFtZS4gXCIgKyAnTWFrZSBzdXJlIHRoYXQgeW91IGxvYWQgYSAnICsgJ3BvbHlmaWxsIGluIG9sZGVyIGJyb3dzZXJzLiBodHRwczovL2ZiLm1lL3JlYWN0LXBvbHlmaWxscycpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2FuY2VsQW5pbWF0aW9uRnJhbWUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIFVzaW5nIGNvbnNvbGVbJ2Vycm9yJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuICAgICAgY29uc29sZVsnZXJyb3InXShcIlRoaXMgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgY2FuY2VsQW5pbWF0aW9uRnJhbWUuIFwiICsgJ01ha2Ugc3VyZSB0aGF0IHlvdSBsb2FkIGEgJyArICdwb2x5ZmlsbCBpbiBvbGRlciBicm93c2Vycy4gaHR0cHM6Ly9mYi5tZS9yZWFjdC1wb2x5ZmlsbHMnKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHBlcmZvcm1hbmNlID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgcGVyZm9ybWFuY2Uubm93ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXhwb3J0cy51bnN0YWJsZV9ub3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgX2luaXRpYWxUaW1lID0gX0RhdGUubm93KCk7XG5cbiAgICBleHBvcnRzLnVuc3RhYmxlX25vdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfRGF0ZS5ub3coKSAtIF9pbml0aWFsVGltZTtcbiAgICB9O1xuICB9XG5cbiAgdmFyIGlzTWVzc2FnZUxvb3BSdW5uaW5nID0gZmFsc2U7XG4gIHZhciBzY2hlZHVsZWRIb3N0Q2FsbGJhY2sgPSBudWxsO1xuICB2YXIgdGFza1RpbWVvdXRJRCA9IC0xOyAvLyBTY2hlZHVsZXIgcGVyaW9kaWNhbGx5IHlpZWxkcyBpbiBjYXNlIHRoZXJlIGlzIG90aGVyIHdvcmsgb24gdGhlIG1haW5cbiAgLy8gdGhyZWFkLCBsaWtlIHVzZXIgZXZlbnRzLiBCeSBkZWZhdWx0LCBpdCB5aWVsZHMgbXVsdGlwbGUgdGltZXMgcGVyIGZyYW1lLlxuICAvLyBJdCBkb2VzIG5vdCBhdHRlbXB0IHRvIGFsaWduIHdpdGggZnJhbWUgYm91bmRhcmllcywgc2luY2UgbW9zdCB0YXNrcyBkb24ndFxuICAvLyBuZWVkIHRvIGJlIGZyYW1lIGFsaWduZWQ7IGZvciB0aG9zZSB0aGF0IGRvLCB1c2UgcmVxdWVzdEFuaW1hdGlvbkZyYW1lLlxuXG4gIHZhciB5aWVsZEludGVydmFsID0gNTtcbiAgdmFyIGRlYWRsaW5lID0gMDsgLy8gVE9ETzogTWFrZSB0aGlzIGNvbmZpZ3VyYWJsZVxuXG4gIHtcbiAgICAvLyBgaXNJbnB1dFBlbmRpbmdgIGlzIG5vdCBhdmFpbGFibGUuIFNpbmNlIHdlIGhhdmUgbm8gd2F5IG9mIGtub3dpbmcgaWZcbiAgICAvLyB0aGVyZSdzIHBlbmRpbmcgaW5wdXQsIGFsd2F5cyB5aWVsZCBhdCB0aGUgZW5kIG9mIHRoZSBmcmFtZS5cbiAgICBzaG91bGRZaWVsZFRvSG9zdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBleHBvcnRzLnVuc3RhYmxlX25vdygpID49IGRlYWRsaW5lO1xuICAgIH07IC8vIFNpbmNlIHdlIHlpZWxkIGV2ZXJ5IGZyYW1lIHJlZ2FyZGxlc3MsIGByZXF1ZXN0UGFpbnRgIGhhcyBubyBlZmZlY3QuXG5cblxuICAgIHJlcXVlc3RQYWludCA9IGZ1bmN0aW9uICgpIHt9O1xuICB9XG5cbiAgZXhwb3J0cy51bnN0YWJsZV9mb3JjZUZyYW1lUmF0ZSA9IGZ1bmN0aW9uIChmcHMpIHtcbiAgICBpZiAoZnBzIDwgMCB8fCBmcHMgPiAxMjUpIHtcbiAgICAgIC8vIFVzaW5nIGNvbnNvbGVbJ2Vycm9yJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuICAgICAgY29uc29sZVsnZXJyb3InXSgnZm9yY2VGcmFtZVJhdGUgdGFrZXMgYSBwb3NpdGl2ZSBpbnQgYmV0d2VlbiAwIGFuZCAxMjUsICcgKyAnZm9yY2luZyBmcmFtZXJhdGVzIGhpZ2hlciB0aGFuIDEyNSBmcHMgaXMgbm90IHVuc3VwcG9ydGVkJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGZwcyA+IDApIHtcbiAgICAgIHlpZWxkSW50ZXJ2YWwgPSBNYXRoLmZsb29yKDEwMDAgLyBmcHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyByZXNldCB0aGUgZnJhbWVyYXRlXG4gICAgICB5aWVsZEludGVydmFsID0gNTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHBlcmZvcm1Xb3JrVW50aWxEZWFkbGluZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc2NoZWR1bGVkSG9zdENhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgICB2YXIgY3VycmVudFRpbWUgPSBleHBvcnRzLnVuc3RhYmxlX25vdygpOyAvLyBZaWVsZCBhZnRlciBgeWllbGRJbnRlcnZhbGAgbXMsIHJlZ2FyZGxlc3Mgb2Ygd2hlcmUgd2UgYXJlIGluIHRoZSB2c3luY1xuICAgICAgLy8gY3ljbGUuIFRoaXMgbWVhbnMgdGhlcmUncyBhbHdheXMgdGltZSByZW1haW5pbmcgYXQgdGhlIGJlZ2lubmluZyBvZlxuICAgICAgLy8gdGhlIG1lc3NhZ2UgZXZlbnQuXG5cbiAgICAgIGRlYWRsaW5lID0gY3VycmVudFRpbWUgKyB5aWVsZEludGVydmFsO1xuICAgICAgdmFyIGhhc1RpbWVSZW1haW5pbmcgPSB0cnVlO1xuXG4gICAgICB0cnkge1xuICAgICAgICB2YXIgaGFzTW9yZVdvcmsgPSBzY2hlZHVsZWRIb3N0Q2FsbGJhY2soaGFzVGltZVJlbWFpbmluZywgY3VycmVudFRpbWUpO1xuXG4gICAgICAgIGlmICghaGFzTW9yZVdvcmspIHtcbiAgICAgICAgICBpc01lc3NhZ2VMb29wUnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgIHNjaGVkdWxlZEhvc3RDYWxsYmFjayA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gSWYgdGhlcmUncyBtb3JlIHdvcmssIHNjaGVkdWxlIHRoZSBuZXh0IG1lc3NhZ2UgZXZlbnQgYXQgdGhlIGVuZFxuICAgICAgICAgIC8vIG9mIHRoZSBwcmVjZWRpbmcgb25lLlxuICAgICAgICAgIHBvcnQucG9zdE1lc3NhZ2UobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIElmIGEgc2NoZWR1bGVyIHRhc2sgdGhyb3dzLCBleGl0IHRoZSBjdXJyZW50IGJyb3dzZXIgdGFzayBzbyB0aGVcbiAgICAgICAgLy8gZXJyb3IgY2FuIGJlIG9ic2VydmVkLlxuICAgICAgICBwb3J0LnBvc3RNZXNzYWdlKG51bGwpO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaXNNZXNzYWdlTG9vcFJ1bm5pbmcgPSBmYWxzZTtcbiAgICB9IC8vIFlpZWxkaW5nIHRvIHRoZSBicm93c2VyIHdpbGwgZ2l2ZSBpdCBhIGNoYW5jZSB0byBwYWludCwgc28gd2UgY2FuXG4gIH07XG5cbiAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgdmFyIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IHBlcmZvcm1Xb3JrVW50aWxEZWFkbGluZTtcblxuICByZXF1ZXN0SG9zdENhbGxiYWNrID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgc2NoZWR1bGVkSG9zdENhbGxiYWNrID0gY2FsbGJhY2s7XG5cbiAgICBpZiAoIWlzTWVzc2FnZUxvb3BSdW5uaW5nKSB7XG4gICAgICBpc01lc3NhZ2VMb29wUnVubmluZyA9IHRydWU7XG4gICAgICBwb3J0LnBvc3RNZXNzYWdlKG51bGwpO1xuICAgIH1cbiAgfTtcblxuICByZXF1ZXN0SG9zdFRpbWVvdXQgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIG1zKSB7XG4gICAgdGFza1RpbWVvdXRJRCA9IF9zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNhbGxiYWNrKGV4cG9ydHMudW5zdGFibGVfbm93KCkpO1xuICAgIH0sIG1zKTtcbiAgfTtcblxuICBjYW5jZWxIb3N0VGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICBfY2xlYXJUaW1lb3V0KHRhc2tUaW1lb3V0SUQpO1xuXG4gICAgdGFza1RpbWVvdXRJRCA9IC0xO1xuICB9O1xufVxuXG5mdW5jdGlvbiBwdXNoKGhlYXAsIG5vZGUpIHtcbiAgdmFyIGluZGV4ID0gaGVhcC5sZW5ndGg7XG4gIGhlYXAucHVzaChub2RlKTtcbiAgc2lmdFVwKGhlYXAsIG5vZGUsIGluZGV4KTtcbn1cbmZ1bmN0aW9uIHBlZWsoaGVhcCkge1xuICB2YXIgZmlyc3QgPSBoZWFwWzBdO1xuICByZXR1cm4gZmlyc3QgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBmaXJzdDtcbn1cbmZ1bmN0aW9uIHBvcChoZWFwKSB7XG4gIHZhciBmaXJzdCA9IGhlYXBbMF07XG5cbiAgaWYgKGZpcnN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgbGFzdCA9IGhlYXAucG9wKCk7XG5cbiAgICBpZiAobGFzdCAhPT0gZmlyc3QpIHtcbiAgICAgIGhlYXBbMF0gPSBsYXN0O1xuICAgICAgc2lmdERvd24oaGVhcCwgbGFzdCwgMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpcnN0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNpZnRVcChoZWFwLCBub2RlLCBpKSB7XG4gIHZhciBpbmRleCA9IGk7XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICB2YXIgcGFyZW50SW5kZXggPSBpbmRleCAtIDEgPj4+IDE7XG4gICAgdmFyIHBhcmVudCA9IGhlYXBbcGFyZW50SW5kZXhdO1xuXG4gICAgaWYgKHBhcmVudCAhPT0gdW5kZWZpbmVkICYmIGNvbXBhcmUocGFyZW50LCBub2RlKSA+IDApIHtcbiAgICAgIC8vIFRoZSBwYXJlbnQgaXMgbGFyZ2VyLiBTd2FwIHBvc2l0aW9ucy5cbiAgICAgIGhlYXBbcGFyZW50SW5kZXhdID0gbm9kZTtcbiAgICAgIGhlYXBbaW5kZXhdID0gcGFyZW50O1xuICAgICAgaW5kZXggPSBwYXJlbnRJbmRleDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhlIHBhcmVudCBpcyBzbWFsbGVyLiBFeGl0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzaWZ0RG93bihoZWFwLCBub2RlLCBpKSB7XG4gIHZhciBpbmRleCA9IGk7XG4gIHZhciBsZW5ndGggPSBoZWFwLmxlbmd0aDtcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgbGVmdEluZGV4ID0gKGluZGV4ICsgMSkgKiAyIC0gMTtcbiAgICB2YXIgbGVmdCA9IGhlYXBbbGVmdEluZGV4XTtcbiAgICB2YXIgcmlnaHRJbmRleCA9IGxlZnRJbmRleCArIDE7XG4gICAgdmFyIHJpZ2h0ID0gaGVhcFtyaWdodEluZGV4XTsgLy8gSWYgdGhlIGxlZnQgb3IgcmlnaHQgbm9kZSBpcyBzbWFsbGVyLCBzd2FwIHdpdGggdGhlIHNtYWxsZXIgb2YgdGhvc2UuXG5cbiAgICBpZiAobGVmdCAhPT0gdW5kZWZpbmVkICYmIGNvbXBhcmUobGVmdCwgbm9kZSkgPCAwKSB7XG4gICAgICBpZiAocmlnaHQgIT09IHVuZGVmaW5lZCAmJiBjb21wYXJlKHJpZ2h0LCBsZWZ0KSA8IDApIHtcbiAgICAgICAgaGVhcFtpbmRleF0gPSByaWdodDtcbiAgICAgICAgaGVhcFtyaWdodEluZGV4XSA9IG5vZGU7XG4gICAgICAgIGluZGV4ID0gcmlnaHRJbmRleDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhlYXBbaW5kZXhdID0gbGVmdDtcbiAgICAgICAgaGVhcFtsZWZ0SW5kZXhdID0gbm9kZTtcbiAgICAgICAgaW5kZXggPSBsZWZ0SW5kZXg7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyaWdodCAhPT0gdW5kZWZpbmVkICYmIGNvbXBhcmUocmlnaHQsIG5vZGUpIDwgMCkge1xuICAgICAgaGVhcFtpbmRleF0gPSByaWdodDtcbiAgICAgIGhlYXBbcmlnaHRJbmRleF0gPSBub2RlO1xuICAgICAgaW5kZXggPSByaWdodEluZGV4O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBOZWl0aGVyIGNoaWxkIGlzIHNtYWxsZXIuIEV4aXQuXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNvbXBhcmUoYSwgYikge1xuICAvLyBDb21wYXJlIHNvcnQgaW5kZXggZmlyc3QsIHRoZW4gdGFzayBpZC5cbiAgdmFyIGRpZmYgPSBhLnNvcnRJbmRleCAtIGIuc29ydEluZGV4O1xuICByZXR1cm4gZGlmZiAhPT0gMCA/IGRpZmYgOiBhLmlkIC0gYi5pZDtcbn1cblxuLy8gVE9ETzogVXNlIHN5bWJvbHM/XG52YXIgTm9Qcmlvcml0eSA9IDA7XG52YXIgSW1tZWRpYXRlUHJpb3JpdHkgPSAxO1xudmFyIFVzZXJCbG9ja2luZ1ByaW9yaXR5ID0gMjtcbnZhciBOb3JtYWxQcmlvcml0eSA9IDM7XG52YXIgTG93UHJpb3JpdHkgPSA0O1xudmFyIElkbGVQcmlvcml0eSA9IDU7XG5cbnZhciBydW5JZENvdW50ZXIgPSAwO1xudmFyIG1haW5UaHJlYWRJZENvdW50ZXIgPSAwO1xudmFyIHByb2ZpbGluZ1N0YXRlU2l6ZSA9IDQ7XG52YXIgc2hhcmVkUHJvZmlsaW5nQnVmZmVyID0gIC8vICRGbG93Rml4TWUgRmxvdyBkb2Vzbid0IGtub3cgYWJvdXQgU2hhcmVkQXJyYXlCdWZmZXJcbnR5cGVvZiBTaGFyZWRBcnJheUJ1ZmZlciA9PT0gJ2Z1bmN0aW9uJyA/IG5ldyBTaGFyZWRBcnJheUJ1ZmZlcihwcm9maWxpbmdTdGF0ZVNpemUgKiBJbnQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UKSA6IC8vICRGbG93Rml4TWUgRmxvdyBkb2Vzbid0IGtub3cgYWJvdXQgQXJyYXlCdWZmZXJcbnR5cGVvZiBBcnJheUJ1ZmZlciA9PT0gJ2Z1bmN0aW9uJyA/IG5ldyBBcnJheUJ1ZmZlcihwcm9maWxpbmdTdGF0ZVNpemUgKiBJbnQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UKSA6IG51bGwgLy8gRG9uJ3QgY3Jhc2ggdGhlIGluaXQgcGF0aCBvbiBJRTlcbjtcbnZhciBwcm9maWxpbmdTdGF0ZSA9ICBzaGFyZWRQcm9maWxpbmdCdWZmZXIgIT09IG51bGwgPyBuZXcgSW50MzJBcnJheShzaGFyZWRQcm9maWxpbmdCdWZmZXIpIDogW107IC8vIFdlIGNhbid0IHJlYWQgdGhpcyBidXQgaXQgaGVscHMgc2F2ZSBieXRlcyBmb3IgbnVsbCBjaGVja3NcblxudmFyIFBSSU9SSVRZID0gMDtcbnZhciBDVVJSRU5UX1RBU0tfSUQgPSAxO1xudmFyIENVUlJFTlRfUlVOX0lEID0gMjtcbnZhciBRVUVVRV9TSVpFID0gMztcblxue1xuICBwcm9maWxpbmdTdGF0ZVtQUklPUklUWV0gPSBOb1ByaW9yaXR5OyAvLyBUaGlzIGlzIG1haW50YWluZWQgd2l0aCBhIGNvdW50ZXIsIGJlY2F1c2UgdGhlIHNpemUgb2YgdGhlIHByaW9yaXR5IHF1ZXVlXG4gIC8vIGFycmF5IG1pZ2h0IGluY2x1ZGUgY2FuY2VsZWQgdGFza3MuXG5cbiAgcHJvZmlsaW5nU3RhdGVbUVVFVUVfU0laRV0gPSAwO1xuICBwcm9maWxpbmdTdGF0ZVtDVVJSRU5UX1RBU0tfSURdID0gMDtcbn0gLy8gQnl0ZXMgcGVyIGVsZW1lbnQgaXMgNFxuXG5cbnZhciBJTklUSUFMX0VWRU5UX0xPR19TSVpFID0gMTMxMDcyO1xudmFyIE1BWF9FVkVOVF9MT0dfU0laRSA9IDUyNDI4ODsgLy8gRXF1aXZhbGVudCB0byAyIG1lZ2FieXRlc1xuXG52YXIgZXZlbnRMb2dTaXplID0gMDtcbnZhciBldmVudExvZ0J1ZmZlciA9IG51bGw7XG52YXIgZXZlbnRMb2cgPSBudWxsO1xudmFyIGV2ZW50TG9nSW5kZXggPSAwO1xudmFyIFRhc2tTdGFydEV2ZW50ID0gMTtcbnZhciBUYXNrQ29tcGxldGVFdmVudCA9IDI7XG52YXIgVGFza0Vycm9yRXZlbnQgPSAzO1xudmFyIFRhc2tDYW5jZWxFdmVudCA9IDQ7XG52YXIgVGFza1J1bkV2ZW50ID0gNTtcbnZhciBUYXNrWWllbGRFdmVudCA9IDY7XG52YXIgU2NoZWR1bGVyU3VzcGVuZEV2ZW50ID0gNztcbnZhciBTY2hlZHVsZXJSZXN1bWVFdmVudCA9IDg7XG5cbmZ1bmN0aW9uIGxvZ0V2ZW50KGVudHJpZXMpIHtcbiAgaWYgKGV2ZW50TG9nICE9PSBudWxsKSB7XG4gICAgdmFyIG9mZnNldCA9IGV2ZW50TG9nSW5kZXg7XG4gICAgZXZlbnRMb2dJbmRleCArPSBlbnRyaWVzLmxlbmd0aDtcblxuICAgIGlmIChldmVudExvZ0luZGV4ICsgMSA+IGV2ZW50TG9nU2l6ZSkge1xuICAgICAgZXZlbnRMb2dTaXplICo9IDI7XG5cbiAgICAgIGlmIChldmVudExvZ1NpemUgPiBNQVhfRVZFTlRfTE9HX1NJWkUpIHtcbiAgICAgICAgLy8gVXNpbmcgY29uc29sZVsnZXJyb3InXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG4gICAgICAgIGNvbnNvbGVbJ2Vycm9yJ10oXCJTY2hlZHVsZXIgUHJvZmlsaW5nOiBFdmVudCBsb2cgZXhjZWVkZWQgbWF4aW11bSBzaXplLiBEb24ndCBcIiArICdmb3JnZXQgdG8gY2FsbCBgc3RvcExvZ2dpbmdQcm9maWxpbmdFdmVudHMoKWAuJyk7XG4gICAgICAgIHN0b3BMb2dnaW5nUHJvZmlsaW5nRXZlbnRzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG5ld0V2ZW50TG9nID0gbmV3IEludDMyQXJyYXkoZXZlbnRMb2dTaXplICogNCk7XG4gICAgICBuZXdFdmVudExvZy5zZXQoZXZlbnRMb2cpO1xuICAgICAgZXZlbnRMb2dCdWZmZXIgPSBuZXdFdmVudExvZy5idWZmZXI7XG4gICAgICBldmVudExvZyA9IG5ld0V2ZW50TG9nO1xuICAgIH1cblxuICAgIGV2ZW50TG9nLnNldChlbnRyaWVzLCBvZmZzZXQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0YXJ0TG9nZ2luZ1Byb2ZpbGluZ0V2ZW50cygpIHtcbiAgZXZlbnRMb2dTaXplID0gSU5JVElBTF9FVkVOVF9MT0dfU0laRTtcbiAgZXZlbnRMb2dCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoZXZlbnRMb2dTaXplICogNCk7XG4gIGV2ZW50TG9nID0gbmV3IEludDMyQXJyYXkoZXZlbnRMb2dCdWZmZXIpO1xuICBldmVudExvZ0luZGV4ID0gMDtcbn1cbmZ1bmN0aW9uIHN0b3BMb2dnaW5nUHJvZmlsaW5nRXZlbnRzKCkge1xuICB2YXIgYnVmZmVyID0gZXZlbnRMb2dCdWZmZXI7XG4gIGV2ZW50TG9nU2l6ZSA9IDA7XG4gIGV2ZW50TG9nQnVmZmVyID0gbnVsbDtcbiAgZXZlbnRMb2cgPSBudWxsO1xuICBldmVudExvZ0luZGV4ID0gMDtcbiAgcmV0dXJuIGJ1ZmZlcjtcbn1cbmZ1bmN0aW9uIG1hcmtUYXNrU3RhcnQodGFzaywgbXMpIHtcbiAge1xuICAgIHByb2ZpbGluZ1N0YXRlW1FVRVVFX1NJWkVdKys7XG5cbiAgICBpZiAoZXZlbnRMb2cgIT09IG51bGwpIHtcbiAgICAgIC8vIHBlcmZvcm1hbmNlLm5vdyByZXR1cm5zIGEgZmxvYXQsIHJlcHJlc2VudGluZyBtaWxsaXNlY29uZHMuIFdoZW4gdGhlXG4gICAgICAvLyBldmVudCBpcyBsb2dnZWQsIGl0J3MgY29lcmNlZCB0byBhbiBpbnQuIENvbnZlcnQgdG8gbWljcm9zZWNvbmRzIHRvXG4gICAgICAvLyBtYWludGFpbiBleHRyYSBkZWdyZWVzIG9mIHByZWNpc2lvbi5cbiAgICAgIGxvZ0V2ZW50KFtUYXNrU3RhcnRFdmVudCwgbXMgKiAxMDAwLCB0YXNrLmlkLCB0YXNrLnByaW9yaXR5TGV2ZWxdKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIG1hcmtUYXNrQ29tcGxldGVkKHRhc2ssIG1zKSB7XG4gIHtcbiAgICBwcm9maWxpbmdTdGF0ZVtQUklPUklUWV0gPSBOb1ByaW9yaXR5O1xuICAgIHByb2ZpbGluZ1N0YXRlW0NVUlJFTlRfVEFTS19JRF0gPSAwO1xuICAgIHByb2ZpbGluZ1N0YXRlW1FVRVVFX1NJWkVdLS07XG5cbiAgICBpZiAoZXZlbnRMb2cgIT09IG51bGwpIHtcbiAgICAgIGxvZ0V2ZW50KFtUYXNrQ29tcGxldGVFdmVudCwgbXMgKiAxMDAwLCB0YXNrLmlkXSk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBtYXJrVGFza0NhbmNlbGVkKHRhc2ssIG1zKSB7XG4gIHtcbiAgICBwcm9maWxpbmdTdGF0ZVtRVUVVRV9TSVpFXS0tO1xuXG4gICAgaWYgKGV2ZW50TG9nICE9PSBudWxsKSB7XG4gICAgICBsb2dFdmVudChbVGFza0NhbmNlbEV2ZW50LCBtcyAqIDEwMDAsIHRhc2suaWRdKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIG1hcmtUYXNrRXJyb3JlZCh0YXNrLCBtcykge1xuICB7XG4gICAgcHJvZmlsaW5nU3RhdGVbUFJJT1JJVFldID0gTm9Qcmlvcml0eTtcbiAgICBwcm9maWxpbmdTdGF0ZVtDVVJSRU5UX1RBU0tfSURdID0gMDtcbiAgICBwcm9maWxpbmdTdGF0ZVtRVUVVRV9TSVpFXS0tO1xuXG4gICAgaWYgKGV2ZW50TG9nICE9PSBudWxsKSB7XG4gICAgICBsb2dFdmVudChbVGFza0Vycm9yRXZlbnQsIG1zICogMTAwMCwgdGFzay5pZF0pO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gbWFya1Rhc2tSdW4odGFzaywgbXMpIHtcbiAge1xuICAgIHJ1bklkQ291bnRlcisrO1xuICAgIHByb2ZpbGluZ1N0YXRlW1BSSU9SSVRZXSA9IHRhc2sucHJpb3JpdHlMZXZlbDtcbiAgICBwcm9maWxpbmdTdGF0ZVtDVVJSRU5UX1RBU0tfSURdID0gdGFzay5pZDtcbiAgICBwcm9maWxpbmdTdGF0ZVtDVVJSRU5UX1JVTl9JRF0gPSBydW5JZENvdW50ZXI7XG5cbiAgICBpZiAoZXZlbnRMb2cgIT09IG51bGwpIHtcbiAgICAgIGxvZ0V2ZW50KFtUYXNrUnVuRXZlbnQsIG1zICogMTAwMCwgdGFzay5pZCwgcnVuSWRDb3VudGVyXSk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBtYXJrVGFza1lpZWxkKHRhc2ssIG1zKSB7XG4gIHtcbiAgICBwcm9maWxpbmdTdGF0ZVtQUklPUklUWV0gPSBOb1ByaW9yaXR5O1xuICAgIHByb2ZpbGluZ1N0YXRlW0NVUlJFTlRfVEFTS19JRF0gPSAwO1xuICAgIHByb2ZpbGluZ1N0YXRlW0NVUlJFTlRfUlVOX0lEXSA9IDA7XG5cbiAgICBpZiAoZXZlbnRMb2cgIT09IG51bGwpIHtcbiAgICAgIGxvZ0V2ZW50KFtUYXNrWWllbGRFdmVudCwgbXMgKiAxMDAwLCB0YXNrLmlkLCBydW5JZENvdW50ZXJdKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIG1hcmtTY2hlZHVsZXJTdXNwZW5kZWQobXMpIHtcbiAge1xuICAgIG1haW5UaHJlYWRJZENvdW50ZXIrKztcblxuICAgIGlmIChldmVudExvZyAhPT0gbnVsbCkge1xuICAgICAgbG9nRXZlbnQoW1NjaGVkdWxlclN1c3BlbmRFdmVudCwgbXMgKiAxMDAwLCBtYWluVGhyZWFkSWRDb3VudGVyXSk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBtYXJrU2NoZWR1bGVyVW5zdXNwZW5kZWQobXMpIHtcbiAge1xuICAgIGlmIChldmVudExvZyAhPT0gbnVsbCkge1xuICAgICAgbG9nRXZlbnQoW1NjaGVkdWxlclJlc3VtZUV2ZW50LCBtcyAqIDEwMDAsIG1haW5UaHJlYWRJZENvdW50ZXJdKTtcbiAgICB9XG4gIH1cbn1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tdmFyICovXG4vLyBNYXRoLnBvdygyLCAzMCkgLSAxXG4vLyAwYjExMTExMTExMTExMTExMTExMTExMTExMTExMTExMVxuXG52YXIgbWF4U2lnbmVkMzFCaXRJbnQgPSAxMDczNzQxODIzOyAvLyBUaW1lcyBvdXQgaW1tZWRpYXRlbHlcblxudmFyIElNTUVESUFURV9QUklPUklUWV9USU1FT1VUID0gLTE7IC8vIEV2ZW50dWFsbHkgdGltZXMgb3V0XG5cbnZhciBVU0VSX0JMT0NLSU5HX1BSSU9SSVRZID0gMjUwO1xudmFyIE5PUk1BTF9QUklPUklUWV9USU1FT1VUID0gNTAwMDtcbnZhciBMT1dfUFJJT1JJVFlfVElNRU9VVCA9IDEwMDAwOyAvLyBOZXZlciB0aW1lcyBvdXRcblxudmFyIElETEVfUFJJT1JJVFkgPSBtYXhTaWduZWQzMUJpdEludDsgLy8gVGFza3MgYXJlIHN0b3JlZCBvbiBhIG1pbiBoZWFwXG5cbnZhciB0YXNrUXVldWUgPSBbXTtcbnZhciB0aW1lclF1ZXVlID0gW107IC8vIEluY3JlbWVudGluZyBpZCBjb3VudGVyLiBVc2VkIHRvIG1haW50YWluIGluc2VydGlvbiBvcmRlci5cblxudmFyIHRhc2tJZENvdW50ZXIgPSAxOyAvLyBQYXVzaW5nIHRoZSBzY2hlZHVsZXIgaXMgdXNlZnVsIGZvciBkZWJ1Z2dpbmcuXG52YXIgY3VycmVudFRhc2sgPSBudWxsO1xudmFyIGN1cnJlbnRQcmlvcml0eUxldmVsID0gTm9ybWFsUHJpb3JpdHk7IC8vIFRoaXMgaXMgc2V0IHdoaWxlIHBlcmZvcm1pbmcgd29yaywgdG8gcHJldmVudCByZS1lbnRyYW5jeS5cblxudmFyIGlzUGVyZm9ybWluZ1dvcmsgPSBmYWxzZTtcbnZhciBpc0hvc3RDYWxsYmFja1NjaGVkdWxlZCA9IGZhbHNlO1xudmFyIGlzSG9zdFRpbWVvdXRTY2hlZHVsZWQgPSBmYWxzZTtcblxuZnVuY3Rpb24gYWR2YW5jZVRpbWVycyhjdXJyZW50VGltZSkge1xuICAvLyBDaGVjayBmb3IgdGFza3MgdGhhdCBhcmUgbm8gbG9uZ2VyIGRlbGF5ZWQgYW5kIGFkZCB0aGVtIHRvIHRoZSBxdWV1ZS5cbiAgdmFyIHRpbWVyID0gcGVlayh0aW1lclF1ZXVlKTtcblxuICB3aGlsZSAodGltZXIgIT09IG51bGwpIHtcbiAgICBpZiAodGltZXIuY2FsbGJhY2sgPT09IG51bGwpIHtcbiAgICAgIC8vIFRpbWVyIHdhcyBjYW5jZWxsZWQuXG4gICAgICBwb3AodGltZXJRdWV1ZSk7XG4gICAgfSBlbHNlIGlmICh0aW1lci5zdGFydFRpbWUgPD0gY3VycmVudFRpbWUpIHtcbiAgICAgIC8vIFRpbWVyIGZpcmVkLiBUcmFuc2ZlciB0byB0aGUgdGFzayBxdWV1ZS5cbiAgICAgIHBvcCh0aW1lclF1ZXVlKTtcbiAgICAgIHRpbWVyLnNvcnRJbmRleCA9IHRpbWVyLmV4cGlyYXRpb25UaW1lO1xuICAgICAgcHVzaCh0YXNrUXVldWUsIHRpbWVyKTtcblxuICAgICAge1xuICAgICAgICBtYXJrVGFza1N0YXJ0KHRpbWVyLCBjdXJyZW50VGltZSk7XG4gICAgICAgIHRpbWVyLmlzUXVldWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmVtYWluaW5nIHRpbWVycyBhcmUgcGVuZGluZy5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aW1lciA9IHBlZWsodGltZXJRdWV1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlVGltZW91dChjdXJyZW50VGltZSkge1xuICBpc0hvc3RUaW1lb3V0U2NoZWR1bGVkID0gZmFsc2U7XG4gIGFkdmFuY2VUaW1lcnMoY3VycmVudFRpbWUpO1xuXG4gIGlmICghaXNIb3N0Q2FsbGJhY2tTY2hlZHVsZWQpIHtcbiAgICBpZiAocGVlayh0YXNrUXVldWUpICE9PSBudWxsKSB7XG4gICAgICBpc0hvc3RDYWxsYmFja1NjaGVkdWxlZCA9IHRydWU7XG4gICAgICByZXF1ZXN0SG9zdENhbGxiYWNrKGZsdXNoV29yayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBmaXJzdFRpbWVyID0gcGVlayh0aW1lclF1ZXVlKTtcblxuICAgICAgaWYgKGZpcnN0VGltZXIgIT09IG51bGwpIHtcbiAgICAgICAgcmVxdWVzdEhvc3RUaW1lb3V0KGhhbmRsZVRpbWVvdXQsIGZpcnN0VGltZXIuc3RhcnRUaW1lIC0gY3VycmVudFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBmbHVzaFdvcmsoaGFzVGltZVJlbWFpbmluZywgaW5pdGlhbFRpbWUpIHtcbiAge1xuICAgIG1hcmtTY2hlZHVsZXJVbnN1c3BlbmRlZChpbml0aWFsVGltZSk7XG4gIH0gLy8gV2UnbGwgbmVlZCBhIGhvc3QgY2FsbGJhY2sgdGhlIG5leHQgdGltZSB3b3JrIGlzIHNjaGVkdWxlZC5cblxuXG4gIGlzSG9zdENhbGxiYWNrU2NoZWR1bGVkID0gZmFsc2U7XG5cbiAgaWYgKGlzSG9zdFRpbWVvdXRTY2hlZHVsZWQpIHtcbiAgICAvLyBXZSBzY2hlZHVsZWQgYSB0aW1lb3V0IGJ1dCBpdCdzIG5vIGxvbmdlciBuZWVkZWQuIENhbmNlbCBpdC5cbiAgICBpc0hvc3RUaW1lb3V0U2NoZWR1bGVkID0gZmFsc2U7XG4gICAgY2FuY2VsSG9zdFRpbWVvdXQoKTtcbiAgfVxuXG4gIGlzUGVyZm9ybWluZ1dvcmsgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmlvcml0eUxldmVsID0gY3VycmVudFByaW9yaXR5TGV2ZWw7XG5cbiAgdHJ5IHtcbiAgICBpZiAoZW5hYmxlUHJvZmlsaW5nKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gd29ya0xvb3AoaGFzVGltZVJlbWFpbmluZywgaW5pdGlhbFRpbWUpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRUYXNrICE9PSBudWxsKSB7XG4gICAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gZXhwb3J0cy51bnN0YWJsZV9ub3coKTtcbiAgICAgICAgICBtYXJrVGFza0Vycm9yZWQoY3VycmVudFRhc2ssIGN1cnJlbnRUaW1lKTtcbiAgICAgICAgICBjdXJyZW50VGFzay5pc1F1ZXVlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5vIGNhdGNoIGluIHByb2QgY29kZXBhdGguXG4gICAgICByZXR1cm4gd29ya0xvb3AoaGFzVGltZVJlbWFpbmluZywgaW5pdGlhbFRpbWUpO1xuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICBjdXJyZW50VGFzayA9IG51bGw7XG4gICAgY3VycmVudFByaW9yaXR5TGV2ZWwgPSBwcmV2aW91c1ByaW9yaXR5TGV2ZWw7XG4gICAgaXNQZXJmb3JtaW5nV29yayA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgdmFyIF9jdXJyZW50VGltZSA9IGV4cG9ydHMudW5zdGFibGVfbm93KCk7XG5cbiAgICAgIG1hcmtTY2hlZHVsZXJTdXNwZW5kZWQoX2N1cnJlbnRUaW1lKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gd29ya0xvb3AoaGFzVGltZVJlbWFpbmluZywgaW5pdGlhbFRpbWUpIHtcbiAgdmFyIGN1cnJlbnRUaW1lID0gaW5pdGlhbFRpbWU7XG4gIGFkdmFuY2VUaW1lcnMoY3VycmVudFRpbWUpO1xuICBjdXJyZW50VGFzayA9IHBlZWsodGFza1F1ZXVlKTtcblxuICB3aGlsZSAoY3VycmVudFRhc2sgIT09IG51bGwgJiYgIShlbmFibGVTY2hlZHVsZXJEZWJ1Z2dpbmcgKSkge1xuICAgIGlmIChjdXJyZW50VGFzay5leHBpcmF0aW9uVGltZSA+IGN1cnJlbnRUaW1lICYmICghaGFzVGltZVJlbWFpbmluZyB8fCBzaG91bGRZaWVsZFRvSG9zdCgpKSkge1xuICAgICAgLy8gVGhpcyBjdXJyZW50VGFzayBoYXNuJ3QgZXhwaXJlZCwgYW5kIHdlJ3ZlIHJlYWNoZWQgdGhlIGRlYWRsaW5lLlxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdmFyIGNhbGxiYWNrID0gY3VycmVudFRhc2suY2FsbGJhY2s7XG5cbiAgICBpZiAoY2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICAgIGN1cnJlbnRUYXNrLmNhbGxiYWNrID0gbnVsbDtcbiAgICAgIGN1cnJlbnRQcmlvcml0eUxldmVsID0gY3VycmVudFRhc2sucHJpb3JpdHlMZXZlbDtcbiAgICAgIHZhciBkaWRVc2VyQ2FsbGJhY2tUaW1lb3V0ID0gY3VycmVudFRhc2suZXhwaXJhdGlvblRpbWUgPD0gY3VycmVudFRpbWU7XG4gICAgICBtYXJrVGFza1J1bihjdXJyZW50VGFzaywgY3VycmVudFRpbWUpO1xuICAgICAgdmFyIGNvbnRpbnVhdGlvbkNhbGxiYWNrID0gY2FsbGJhY2soZGlkVXNlckNhbGxiYWNrVGltZW91dCk7XG4gICAgICBjdXJyZW50VGltZSA9IGV4cG9ydHMudW5zdGFibGVfbm93KCk7XG5cbiAgICAgIGlmICh0eXBlb2YgY29udGludWF0aW9uQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY3VycmVudFRhc2suY2FsbGJhY2sgPSBjb250aW51YXRpb25DYWxsYmFjaztcbiAgICAgICAgbWFya1Rhc2tZaWVsZChjdXJyZW50VGFzaywgY3VycmVudFRpbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAge1xuICAgICAgICAgIG1hcmtUYXNrQ29tcGxldGVkKGN1cnJlbnRUYXNrLCBjdXJyZW50VGltZSk7XG4gICAgICAgICAgY3VycmVudFRhc2suaXNRdWV1ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50VGFzayA9PT0gcGVlayh0YXNrUXVldWUpKSB7XG4gICAgICAgICAgcG9wKHRhc2tRdWV1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYWR2YW5jZVRpbWVycyhjdXJyZW50VGltZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBvcCh0YXNrUXVldWUpO1xuICAgIH1cblxuICAgIGN1cnJlbnRUYXNrID0gcGVlayh0YXNrUXVldWUpO1xuICB9IC8vIFJldHVybiB3aGV0aGVyIHRoZXJlJ3MgYWRkaXRpb25hbCB3b3JrXG5cblxuICBpZiAoY3VycmVudFRhc2sgIT09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZmlyc3RUaW1lciA9IHBlZWsodGltZXJRdWV1ZSk7XG5cbiAgICBpZiAoZmlyc3RUaW1lciAhPT0gbnVsbCkge1xuICAgICAgcmVxdWVzdEhvc3RUaW1lb3V0KGhhbmRsZVRpbWVvdXQsIGZpcnN0VGltZXIuc3RhcnRUaW1lIC0gY3VycmVudFRpbWUpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bnN0YWJsZV9ydW5XaXRoUHJpb3JpdHkocHJpb3JpdHlMZXZlbCwgZXZlbnRIYW5kbGVyKSB7XG4gIHN3aXRjaCAocHJpb3JpdHlMZXZlbCkge1xuICAgIGNhc2UgSW1tZWRpYXRlUHJpb3JpdHk6XG4gICAgY2FzZSBVc2VyQmxvY2tpbmdQcmlvcml0eTpcbiAgICBjYXNlIE5vcm1hbFByaW9yaXR5OlxuICAgIGNhc2UgTG93UHJpb3JpdHk6XG4gICAgY2FzZSBJZGxlUHJpb3JpdHk6XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBwcmlvcml0eUxldmVsID0gTm9ybWFsUHJpb3JpdHk7XG4gIH1cblxuICB2YXIgcHJldmlvdXNQcmlvcml0eUxldmVsID0gY3VycmVudFByaW9yaXR5TGV2ZWw7XG4gIGN1cnJlbnRQcmlvcml0eUxldmVsID0gcHJpb3JpdHlMZXZlbDtcblxuICB0cnkge1xuICAgIHJldHVybiBldmVudEhhbmRsZXIoKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBjdXJyZW50UHJpb3JpdHlMZXZlbCA9IHByZXZpb3VzUHJpb3JpdHlMZXZlbDtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bnN0YWJsZV9uZXh0KGV2ZW50SGFuZGxlcikge1xuICB2YXIgcHJpb3JpdHlMZXZlbDtcblxuICBzd2l0Y2ggKGN1cnJlbnRQcmlvcml0eUxldmVsKSB7XG4gICAgY2FzZSBJbW1lZGlhdGVQcmlvcml0eTpcbiAgICBjYXNlIFVzZXJCbG9ja2luZ1ByaW9yaXR5OlxuICAgIGNhc2UgTm9ybWFsUHJpb3JpdHk6XG4gICAgICAvLyBTaGlmdCBkb3duIHRvIG5vcm1hbCBwcmlvcml0eVxuICAgICAgcHJpb3JpdHlMZXZlbCA9IE5vcm1hbFByaW9yaXR5O1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgLy8gQW55dGhpbmcgbG93ZXIgdGhhbiBub3JtYWwgcHJpb3JpdHkgc2hvdWxkIHJlbWFpbiBhdCB0aGUgY3VycmVudCBsZXZlbC5cbiAgICAgIHByaW9yaXR5TGV2ZWwgPSBjdXJyZW50UHJpb3JpdHlMZXZlbDtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgdmFyIHByZXZpb3VzUHJpb3JpdHlMZXZlbCA9IGN1cnJlbnRQcmlvcml0eUxldmVsO1xuICBjdXJyZW50UHJpb3JpdHlMZXZlbCA9IHByaW9yaXR5TGV2ZWw7XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gZXZlbnRIYW5kbGVyKCk7XG4gIH0gZmluYWxseSB7XG4gICAgY3VycmVudFByaW9yaXR5TGV2ZWwgPSBwcmV2aW91c1ByaW9yaXR5TGV2ZWw7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5zdGFibGVfd3JhcENhbGxiYWNrKGNhbGxiYWNrKSB7XG4gIHZhciBwYXJlbnRQcmlvcml0eUxldmVsID0gY3VycmVudFByaW9yaXR5TGV2ZWw7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gVGhpcyBpcyBhIGZvcmsgb2YgcnVuV2l0aFByaW9yaXR5LCBpbmxpbmVkIGZvciBwZXJmb3JtYW5jZS5cbiAgICB2YXIgcHJldmlvdXNQcmlvcml0eUxldmVsID0gY3VycmVudFByaW9yaXR5TGV2ZWw7XG4gICAgY3VycmVudFByaW9yaXR5TGV2ZWwgPSBwYXJlbnRQcmlvcml0eUxldmVsO1xuXG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBjdXJyZW50UHJpb3JpdHlMZXZlbCA9IHByZXZpb3VzUHJpb3JpdHlMZXZlbDtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRpbWVvdXRGb3JQcmlvcml0eUxldmVsKHByaW9yaXR5TGV2ZWwpIHtcbiAgc3dpdGNoIChwcmlvcml0eUxldmVsKSB7XG4gICAgY2FzZSBJbW1lZGlhdGVQcmlvcml0eTpcbiAgICAgIHJldHVybiBJTU1FRElBVEVfUFJJT1JJVFlfVElNRU9VVDtcblxuICAgIGNhc2UgVXNlckJsb2NraW5nUHJpb3JpdHk6XG4gICAgICByZXR1cm4gVVNFUl9CTE9DS0lOR19QUklPUklUWTtcblxuICAgIGNhc2UgSWRsZVByaW9yaXR5OlxuICAgICAgcmV0dXJuIElETEVfUFJJT1JJVFk7XG5cbiAgICBjYXNlIExvd1ByaW9yaXR5OlxuICAgICAgcmV0dXJuIExPV19QUklPUklUWV9USU1FT1VUO1xuXG4gICAgY2FzZSBOb3JtYWxQcmlvcml0eTpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIE5PUk1BTF9QUklPUklUWV9USU1FT1VUO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVuc3RhYmxlX3NjaGVkdWxlQ2FsbGJhY2socHJpb3JpdHlMZXZlbCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgdmFyIGN1cnJlbnRUaW1lID0gZXhwb3J0cy51bnN0YWJsZV9ub3coKTtcbiAgdmFyIHN0YXJ0VGltZTtcbiAgdmFyIHRpbWVvdXQ7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0JyAmJiBvcHRpb25zICE9PSBudWxsKSB7XG4gICAgdmFyIGRlbGF5ID0gb3B0aW9ucy5kZWxheTtcblxuICAgIGlmICh0eXBlb2YgZGVsYXkgPT09ICdudW1iZXInICYmIGRlbGF5ID4gMCkge1xuICAgICAgc3RhcnRUaW1lID0gY3VycmVudFRpbWUgKyBkZWxheTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhcnRUaW1lID0gY3VycmVudFRpbWU7XG4gICAgfVxuXG4gICAgdGltZW91dCA9IHR5cGVvZiBvcHRpb25zLnRpbWVvdXQgPT09ICdudW1iZXInID8gb3B0aW9ucy50aW1lb3V0IDogdGltZW91dEZvclByaW9yaXR5TGV2ZWwocHJpb3JpdHlMZXZlbCk7XG4gIH0gZWxzZSB7XG4gICAgdGltZW91dCA9IHRpbWVvdXRGb3JQcmlvcml0eUxldmVsKHByaW9yaXR5TGV2ZWwpO1xuICAgIHN0YXJ0VGltZSA9IGN1cnJlbnRUaW1lO1xuICB9XG5cbiAgdmFyIGV4cGlyYXRpb25UaW1lID0gc3RhcnRUaW1lICsgdGltZW91dDtcbiAgdmFyIG5ld1Rhc2sgPSB7XG4gICAgaWQ6IHRhc2tJZENvdW50ZXIrKyxcbiAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgcHJpb3JpdHlMZXZlbDogcHJpb3JpdHlMZXZlbCxcbiAgICBzdGFydFRpbWU6IHN0YXJ0VGltZSxcbiAgICBleHBpcmF0aW9uVGltZTogZXhwaXJhdGlvblRpbWUsXG4gICAgc29ydEluZGV4OiAtMVxuICB9O1xuXG4gIHtcbiAgICBuZXdUYXNrLmlzUXVldWVkID0gZmFsc2U7XG4gIH1cblxuICBpZiAoc3RhcnRUaW1lID4gY3VycmVudFRpbWUpIHtcbiAgICAvLyBUaGlzIGlzIGEgZGVsYXllZCB0YXNrLlxuICAgIG5ld1Rhc2suc29ydEluZGV4ID0gc3RhcnRUaW1lO1xuICAgIHB1c2godGltZXJRdWV1ZSwgbmV3VGFzayk7XG5cbiAgICBpZiAocGVlayh0YXNrUXVldWUpID09PSBudWxsICYmIG5ld1Rhc2sgPT09IHBlZWsodGltZXJRdWV1ZSkpIHtcbiAgICAgIC8vIEFsbCB0YXNrcyBhcmUgZGVsYXllZCwgYW5kIHRoaXMgaXMgdGhlIHRhc2sgd2l0aCB0aGUgZWFybGllc3QgZGVsYXkuXG4gICAgICBpZiAoaXNIb3N0VGltZW91dFNjaGVkdWxlZCkge1xuICAgICAgICAvLyBDYW5jZWwgYW4gZXhpc3RpbmcgdGltZW91dC5cbiAgICAgICAgY2FuY2VsSG9zdFRpbWVvdXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlzSG9zdFRpbWVvdXRTY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgfSAvLyBTY2hlZHVsZSBhIHRpbWVvdXQuXG5cblxuICAgICAgcmVxdWVzdEhvc3RUaW1lb3V0KGhhbmRsZVRpbWVvdXQsIHN0YXJ0VGltZSAtIGN1cnJlbnRUaW1lKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbmV3VGFzay5zb3J0SW5kZXggPSBleHBpcmF0aW9uVGltZTtcbiAgICBwdXNoKHRhc2tRdWV1ZSwgbmV3VGFzayk7XG5cbiAgICB7XG4gICAgICBtYXJrVGFza1N0YXJ0KG5ld1Rhc2ssIGN1cnJlbnRUaW1lKTtcbiAgICAgIG5ld1Rhc2suaXNRdWV1ZWQgPSB0cnVlO1xuICAgIH0gLy8gU2NoZWR1bGUgYSBob3N0IGNhbGxiYWNrLCBpZiBuZWVkZWQuIElmIHdlJ3JlIGFscmVhZHkgcGVyZm9ybWluZyB3b3JrLFxuICAgIC8vIHdhaXQgdW50aWwgdGhlIG5leHQgdGltZSB3ZSB5aWVsZC5cblxuXG4gICAgaWYgKCFpc0hvc3RDYWxsYmFja1NjaGVkdWxlZCAmJiAhaXNQZXJmb3JtaW5nV29yaykge1xuICAgICAgaXNIb3N0Q2FsbGJhY2tTY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgcmVxdWVzdEhvc3RDYWxsYmFjayhmbHVzaFdvcmspO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdUYXNrO1xufVxuXG5mdW5jdGlvbiB1bnN0YWJsZV9wYXVzZUV4ZWN1dGlvbigpIHtcbn1cblxuZnVuY3Rpb24gdW5zdGFibGVfY29udGludWVFeGVjdXRpb24oKSB7XG5cbiAgaWYgKCFpc0hvc3RDYWxsYmFja1NjaGVkdWxlZCAmJiAhaXNQZXJmb3JtaW5nV29yaykge1xuICAgIGlzSG9zdENhbGxiYWNrU2NoZWR1bGVkID0gdHJ1ZTtcbiAgICByZXF1ZXN0SG9zdENhbGxiYWNrKGZsdXNoV29yayk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5zdGFibGVfZ2V0Rmlyc3RDYWxsYmFja05vZGUoKSB7XG4gIHJldHVybiBwZWVrKHRhc2tRdWV1ZSk7XG59XG5cbmZ1bmN0aW9uIHVuc3RhYmxlX2NhbmNlbENhbGxiYWNrKHRhc2spIHtcbiAge1xuICAgIGlmICh0YXNrLmlzUXVldWVkKSB7XG4gICAgICB2YXIgY3VycmVudFRpbWUgPSBleHBvcnRzLnVuc3RhYmxlX25vdygpO1xuICAgICAgbWFya1Rhc2tDYW5jZWxlZCh0YXNrLCBjdXJyZW50VGltZSk7XG4gICAgICB0YXNrLmlzUXVldWVkID0gZmFsc2U7XG4gICAgfVxuICB9IC8vIE51bGwgb3V0IHRoZSBjYWxsYmFjayB0byBpbmRpY2F0ZSB0aGUgdGFzayBoYXMgYmVlbiBjYW5jZWxlZC4gKENhbid0XG4gIC8vIHJlbW92ZSBmcm9tIHRoZSBxdWV1ZSBiZWNhdXNlIHlvdSBjYW4ndCByZW1vdmUgYXJiaXRyYXJ5IG5vZGVzIGZyb20gYW5cbiAgLy8gYXJyYXkgYmFzZWQgaGVhcCwgb25seSB0aGUgZmlyc3Qgb25lLilcblxuXG4gIHRhc2suY2FsbGJhY2sgPSBudWxsO1xufVxuXG5mdW5jdGlvbiB1bnN0YWJsZV9nZXRDdXJyZW50UHJpb3JpdHlMZXZlbCgpIHtcbiAgcmV0dXJuIGN1cnJlbnRQcmlvcml0eUxldmVsO1xufVxuXG5mdW5jdGlvbiB1bnN0YWJsZV9zaG91bGRZaWVsZCgpIHtcbiAgdmFyIGN1cnJlbnRUaW1lID0gZXhwb3J0cy51bnN0YWJsZV9ub3coKTtcbiAgYWR2YW5jZVRpbWVycyhjdXJyZW50VGltZSk7XG4gIHZhciBmaXJzdFRhc2sgPSBwZWVrKHRhc2tRdWV1ZSk7XG4gIHJldHVybiBmaXJzdFRhc2sgIT09IGN1cnJlbnRUYXNrICYmIGN1cnJlbnRUYXNrICE9PSBudWxsICYmIGZpcnN0VGFzayAhPT0gbnVsbCAmJiBmaXJzdFRhc2suY2FsbGJhY2sgIT09IG51bGwgJiYgZmlyc3RUYXNrLnN0YXJ0VGltZSA8PSBjdXJyZW50VGltZSAmJiBmaXJzdFRhc2suZXhwaXJhdGlvblRpbWUgPCBjdXJyZW50VGFzay5leHBpcmF0aW9uVGltZSB8fCBzaG91bGRZaWVsZFRvSG9zdCgpO1xufVxuXG52YXIgdW5zdGFibGVfcmVxdWVzdFBhaW50ID0gcmVxdWVzdFBhaW50O1xudmFyIHVuc3RhYmxlX1Byb2ZpbGluZyA9ICB7XG4gIHN0YXJ0TG9nZ2luZ1Byb2ZpbGluZ0V2ZW50czogc3RhcnRMb2dnaW5nUHJvZmlsaW5nRXZlbnRzLFxuICBzdG9wTG9nZ2luZ1Byb2ZpbGluZ0V2ZW50czogc3RvcExvZ2dpbmdQcm9maWxpbmdFdmVudHMsXG4gIHNoYXJlZFByb2ZpbGluZ0J1ZmZlcjogc2hhcmVkUHJvZmlsaW5nQnVmZmVyXG59IDtcblxuZXhwb3J0cy51bnN0YWJsZV9JZGxlUHJpb3JpdHkgPSBJZGxlUHJpb3JpdHk7XG5leHBvcnRzLnVuc3RhYmxlX0ltbWVkaWF0ZVByaW9yaXR5ID0gSW1tZWRpYXRlUHJpb3JpdHk7XG5leHBvcnRzLnVuc3RhYmxlX0xvd1ByaW9yaXR5ID0gTG93UHJpb3JpdHk7XG5leHBvcnRzLnVuc3RhYmxlX05vcm1hbFByaW9yaXR5ID0gTm9ybWFsUHJpb3JpdHk7XG5leHBvcnRzLnVuc3RhYmxlX1Byb2ZpbGluZyA9IHVuc3RhYmxlX1Byb2ZpbGluZztcbmV4cG9ydHMudW5zdGFibGVfVXNlckJsb2NraW5nUHJpb3JpdHkgPSBVc2VyQmxvY2tpbmdQcmlvcml0eTtcbmV4cG9ydHMudW5zdGFibGVfY2FuY2VsQ2FsbGJhY2sgPSB1bnN0YWJsZV9jYW5jZWxDYWxsYmFjaztcbmV4cG9ydHMudW5zdGFibGVfY29udGludWVFeGVjdXRpb24gPSB1bnN0YWJsZV9jb250aW51ZUV4ZWN1dGlvbjtcbmV4cG9ydHMudW5zdGFibGVfZ2V0Q3VycmVudFByaW9yaXR5TGV2ZWwgPSB1bnN0YWJsZV9nZXRDdXJyZW50UHJpb3JpdHlMZXZlbDtcbmV4cG9ydHMudW5zdGFibGVfZ2V0Rmlyc3RDYWxsYmFja05vZGUgPSB1bnN0YWJsZV9nZXRGaXJzdENhbGxiYWNrTm9kZTtcbmV4cG9ydHMudW5zdGFibGVfbmV4dCA9IHVuc3RhYmxlX25leHQ7XG5leHBvcnRzLnVuc3RhYmxlX3BhdXNlRXhlY3V0aW9uID0gdW5zdGFibGVfcGF1c2VFeGVjdXRpb247XG5leHBvcnRzLnVuc3RhYmxlX3JlcXVlc3RQYWludCA9IHVuc3RhYmxlX3JlcXVlc3RQYWludDtcbmV4cG9ydHMudW5zdGFibGVfcnVuV2l0aFByaW9yaXR5ID0gdW5zdGFibGVfcnVuV2l0aFByaW9yaXR5O1xuZXhwb3J0cy51bnN0YWJsZV9zY2hlZHVsZUNhbGxiYWNrID0gdW5zdGFibGVfc2NoZWR1bGVDYWxsYmFjaztcbmV4cG9ydHMudW5zdGFibGVfc2hvdWxkWWllbGQgPSB1bnN0YWJsZV9zaG91bGRZaWVsZDtcbmV4cG9ydHMudW5zdGFibGVfd3JhcENhbGxiYWNrID0gdW5zdGFibGVfd3JhcENhbGxiYWNrO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3NjaGVkdWxlci5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9zY2hlZHVsZXIuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9zY2hlZHVsZXItdHJhY2luZy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9zY2hlZHVsZXItdHJhY2luZy5kZXZlbG9wbWVudC5qcycpO1xufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O0FBU0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM1VkE7Ozs7Ozs7O0FBU0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDejFCQTtBQUNBO0FBQ0EsYUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQSxhQUVBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9