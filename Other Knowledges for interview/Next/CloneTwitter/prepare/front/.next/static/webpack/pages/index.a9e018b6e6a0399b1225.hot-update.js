webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  logInLoading: false,
  // 로그인 시도 중
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  // 로그인 시도 중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  // 로그인 시도 중
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  // 로그인 시도 중
  changeNicknameDone: false,
  changeNicknameError: null,
  me: null,
  signUpData: {},
  loginData: {}
};
var LOG_IN_REQUEST = "LOG_IN_REQUEST";
var LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
var LOG_IN_FAILURE = "LOG_IN_FAILURE";
var LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
var LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
var LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
var SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
var SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
var SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
var CHANGE_NICKNAME_REQUEST = "CHANGE_NICKNAME_REQUEST";
var CHANGE_NICKNAME_SUCCESS = "CHANGE_NICKNAME_SUCCESS";
var CHANGE_NICKNAME_FAILURE = "CHANGE_NICKNAME_FAILURE";
var FOLLOW_REQUEST = "FOLLOW_REQUEST";
var FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
var FOLLOW_FAILURE = "FOLLOW_FAILURE";
var UNFOLLOW_REQUEST = "UNFOLLOW_REQUEST";
var UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
var UNFOLLOW_FAILURE = "UNFOLLOW_FAILURE";
var ADD_POST_TO_ME = "ADD_POST_TO_ME";
var REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";

var dummyUser = function dummyUser(data) {
  return _objectSpread(_objectSpread({}, data), {}, {
    nickname: "윈카우",
    id: 1,
    Posts: [{
      id: 1
    }],
    Followings: [{
      nickname: "부기초"
    }, {
      nickname: "부기초"
    }, {
      nickname: "부기초"
    }],
    Followers: [{
      nickname: "부기초"
    }, {
      nickname: "부기초"
    }, {
      nickname: "부기초"
    }]
  });
}; // action creater: 원래 액션은 객체인데 객체로 만들면 동적으로 값을 바꾸기 힘들어서 객체를 뱉는 함수를 만든 것
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// thunk가 해 주는 일이 이것이다.(비동기 액션을 가능하게 해 줌, 한 번에 디스패치를 여러 번 할 수 있게 해 준다.)
// saga를 쓰면 조금 더 많은 것을 해 준다. 딜레이(몇 초 뒤에 디스패치가 가능하게 한다든지...)
// 그래서 간단한 어플을 만들 때는 thunk를 써서 비동기 액션만 사용 가능하게 해도 되는데, 그렇지 않으면 saga로 다양한 기능을 지원받으면 좋음
// export const loginAction = (data) => {
//   return (dispatch, getState) => {
//     const state = getState();
//     dispatch(loginRequestAction());
//     axios
//       .post("/api/login")
//       .then((res) => dispatch(loginSuccessAction(res.data)))
//       .catch((err) => dispatch(loginFailureAction(err)));
//   };
// };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var loginRequestAction = function loginRequestAction(data) {
  return {
    type: LOG_IN_REQUEST,
    data: data
  };
};
var logoutRequestAction = function logoutRequestAction() {
  return {
    type: LOG_OUT_REQUEST
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_2__["default"])(state, function (draft) {
    switch (action.type) {
      case LOG_IN_REQUEST:
        {
          // console.log("reducer logged in");
          draft.logInLoading = true;
          draft.logInError = null;
          draft.logInDone = false;
          draft.me = action.data;
        }

      case LOG_IN_SUCCESS:
        {
          console.log("더미유저 체크", dummyUser(action.data));
          return _objectSpread(_objectSpread({}, state), {}, {
            logInLoading: false,
            logInDone: true,
            me: dummyUser(action.data)
          });
        }

      case LOG_IN_FAILURE:
        {
          // console.log("logged in");
          return _objectSpread(_objectSpread({}, state), {}, {
            logInLoading: false,
            logInError: action.error,
            me: action.data
          });
        }

      case LOG_OUT_REQUEST:
        {
          return _objectSpread(_objectSpread({}, state), {}, {
            logOutLoading: true,
            logOutError: null,
            logOutDone: false
          });
        }

      case LOG_OUT_SUCCESS:
        {
          return _objectSpread(_objectSpread({}, state), {}, {
            logOutLoading: false,
            logOutDone: true,
            me: null
          });
        }

      case LOG_OUT_FAILURE:
        {
          return _objectSpread(_objectSpread({}, state), {}, {
            logOutLoading: false,
            logOutError: action.error
          });
        }

      case SIGN_UP_REQUEST:
        {
          return _objectSpread(_objectSpread({}, state), {}, {
            signUpLoading: true,
            signUpError: null,
            signUpDone: false
          });
        }

      case SIGN_UP_SUCCESS:
        {
          return _objectSpread(_objectSpread({}, state), {}, {
            signUpLoading: false,
            signUpDone: true
          });
        }

      case SIGN_UP_FAILURE:
        {
          return _objectSpread(_objectSpread({}, state), {}, {
            signUpLoading: false,
            signUpError: action.error
          });
        }

      case CHANGE_NICKNAME_REQUEST:
        {
          return _objectSpread(_objectSpread({}, state), {}, {
            changeNicknameLoading: true,
            changeNicknameError: null,
            changeNicknameDone: false
          });
        }

      case CHANGE_NICKNAME_SUCCESS:
        {
          return _objectSpread(_objectSpread({}, state), {}, {
            changeNicknameLoading: false,
            changeNicknameDone: true
          });
        }

      case CHANGE_NICKNAME_FAILURE:
        {
          return _objectSpread(_objectSpread({}, state), {}, {
            changeNicknameLoading: false,
            changeNicknameError: action.error
          });
        }

      case ADD_POST_TO_ME:
        {
          return _objectSpread(_objectSpread({}, state), {}, {
            me: _objectSpread(_objectSpread({}, state.me), {}, {
              Posts: [{
                id: action.data
              }].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.me.Posts))
            })
          });
        }

      case REMOVE_POST_OF_ME:
        {
          return _objectSpread(_objectSpread({}, state), {}, {
            me: _objectSpread(_objectSpread({}, state.me), {}, {
              Posts: state.me.Posts.filter(function (v) {
                return v.id !== action.data;
              })
            })
          });
        }

      default:
        {
          return _objectSpread({}, state);
        }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImR1bW15VXNlciIsImRhdGEiLCJuaWNrbmFtZSIsImlkIiwiUG9zdHMiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwidHlwZSIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJmaWx0ZXIiLCJ2Il0sIm1hcHBpbmdz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QUFGSjtBQU9EOztBQUNELFdBQUtMLGlCQUFMO0FBQXdCO0FBQ3RCLGlEQUNLWSxLQURMO0FBRUVsQyxjQUFFLGtDQUNHa0MsS0FBSyxDQUFDbEMsRUFEVDtBQUVBMkIsbUJBQUssRUFBRU8sS0FBSyxDQUFDbEMsRUFBTixDQUFTMkIsS0FBVCxDQUFlYyxNQUFmLENBQXNCLFVBQUNDLENBQUQ7QUFBQSx1QkFBT0EsQ0FBQyxDQUFDaEIsRUFBRixLQUFTUyxNQUFNLENBQUNYLElBQXZCO0FBQUEsZUFBdEI7QUFGUDtBQUZKO0FBT0Q7O0FBQ0Q7QUFBUztBQUNQLG1DQUFZVSxLQUFaO0FBQ0Q7QUFsSEg7QUFvSEQsR0FySGEsQ0FBZDtBQXNIRCxDQXZIRDs7QUF5SGVELHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE5ZTAxOGI2ZTZhMDM5OWIxMjI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbG9nSW5Mb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhCDspJFcclxuICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gIGxvZ0luRXJyb3I6IG51bGwsXHJcbiAgbG9nT3V0TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4Qg7KSRXHJcbiAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgbG9nT3V0RXJyb3I6IG51bGwsXHJcbiAgc2lnblVwTG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4Qg7KSRXHJcbiAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgc2lnblVwRXJyb3I6IG51bGwsXHJcbiAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhCDspJFcclxuICBjaGFuZ2VOaWNrbmFtZURvbmU6IGZhbHNlLFxyXG4gIGNoYW5nZU5pY2tuYW1lRXJyb3I6IG51bGwsXHJcbiAgbWU6IG51bGwsXHJcbiAgc2lnblVwRGF0YToge30sXHJcbiAgbG9naW5EYXRhOiB7fSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9IFwiTE9HX0lOX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gXCJMT0dfSU5fU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSBcIkxPR19JTl9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gXCJMT0dfT1VUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9IFwiTE9HX09VVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSBcIkxPR19PVVRfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9IFwiU0lHTl9VUF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSBcIlNJR05fVVBfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gXCJTSUdOX1VQX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9IFwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTID0gXCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSBcIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSBcIkZPTExPV19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUyA9IFwiRk9MTE9XX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gXCJGT0xMT1dfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSBcIlVORk9MTE9XX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSBcIlVORk9MTE9XX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSBcIlVORk9MTE9XX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9IFwiQUREX1BPU1RfVE9fTUVcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gXCJSRU1PVkVfUE9TVF9PRl9NRVwiO1xyXG5cclxuY29uc3QgZHVtbXlVc2VyID0gKGRhdGEpID0+ICh7XHJcbiAgLi4uZGF0YSxcclxuICBuaWNrbmFtZTogXCLsnIjsubTsmrBcIixcclxuICBpZDogMSxcclxuICBQb3N0czogW3sgaWQ6IDEgfV0sXHJcbiAgRm9sbG93aW5nczogW1xyXG4gICAgeyBuaWNrbmFtZTogXCLrtoDquLDstIhcIiB9LFxyXG4gICAgeyBuaWNrbmFtZTogXCLrtoDquLDstIhcIiB9LFxyXG4gICAgeyBuaWNrbmFtZTogXCLrtoDquLDstIhcIiB9LFxyXG4gIF0sXHJcbiAgRm9sbG93ZXJzOiBbXHJcbiAgICB7IG5pY2tuYW1lOiBcIuu2gOq4sOy0iFwiIH0sXHJcbiAgICB7IG5pY2tuYW1lOiBcIuu2gOq4sOy0iFwiIH0sXHJcbiAgICB7IG5pY2tuYW1lOiBcIuu2gOq4sOy0iFwiIH0sXHJcbiAgXSxcclxufSk7XHJcblxyXG4vLyBhY3Rpb24gY3JlYXRlcjog7JuQ656YIOyVoeyFmOydgCDqsJ3ssrTsnbjrjbAg6rCd7LK066GcIOunjOuTpOuptCDrj5nsoIHsnLzroZwg6rCS7J2EIOuwlOq+uOq4sCDtnpjrk6TslrTshJwg6rCd7LK066W8IOuxieuKlCDtlajsiJjrpbwg66eM65OgIOqyg1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyB0aHVua+qwgCDtlbQg7KO864qUIOydvOydtCDsnbTqsoPsnbTri6QuKOu5hOuPmeq4sCDslaHshZjsnYQg6rCA64ql7ZWY6rKMIO2VtCDspIwsIO2VnCDrsojsl5Ag65SU7Iqk7Yyo7LmY66W8IOyXrOufrCDrsogg7ZWgIOyImCDsnojqsowg7ZW0IOykgOuLpC4pXHJcbi8vIHNhZ2Hrpbwg7JOw66m0IOyhsOq4iCDrjZQg66eO7J2AIOqyg+ydhCDtlbQg7KSA64ukLiDrlJzroIjsnbQo66qHIOy0iCDrkqTsl5Ag65SU7Iqk7Yyo7LmY6rCAIOqwgOuKpe2VmOqyjCDtlZzri6Trk6Dsp4AuLi4pXHJcbi8vIOq3uOuemOyEnCDqsITri6jtlZwg7Ja07ZSM7J2EIOunjOuTpCDrlYzripQgdGh1bmvrpbwg7I2o7IScIOu5hOuPmeq4sCDslaHshZjrp4wg7IKs7JqpIOqwgOuKpe2VmOqyjCDtlbTrj4Qg65CY64qU642wLCDqt7jroIfsp4Ag7JWK7Jy866m0IHNhZ2HroZwg64uk7JaR7ZWcIOq4sOuKpeydhCDsp4Dsm5DrsJvsnLzrqbQg7KKL7J2MXHJcbi8vIGV4cG9ydCBjb25zdCBsb2dpbkFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbi8vICAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuLy8gICAgIGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoKTtcclxuLy8gICAgIGRpc3BhdGNoKGxvZ2luUmVxdWVzdEFjdGlvbigpKTtcclxuLy8gICAgIGF4aW9zXHJcbi8vICAgICAgIC5wb3N0KFwiL2FwaS9sb2dpblwiKVxyXG4vLyAgICAgICAudGhlbigocmVzKSA9PiBkaXNwYXRjaChsb2dpblN1Y2Nlc3NBY3Rpb24ocmVzLmRhdGEpKSlcclxuLy8gICAgICAgLmNhdGNoKChlcnIpID0+IGRpc3BhdGNoKGxvZ2luRmFpbHVyZUFjdGlvbihlcnIpKSk7XHJcbi8vICAgfTtcclxuLy8gfTtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4geyB0eXBlOiBMT0dfSU5fUkVRVUVTVCwgZGF0YSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogTE9HX09VVF9SRVFVRVNUIH07XHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJlZHVjZXIgbG9nZ2VkIGluXCIpO1xyXG5cclxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzoge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi642U66+47Jyg7KCAIOyytO2BrFwiLCBkdW1teVVzZXIoYWN0aW9uLmRhdGEpKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBsb2dJbkxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgbG9nSW5Eb25lOiB0cnVlLFxyXG4gICAgICAgICAgbWU6IGR1bW15VXNlcihhY3Rpb24uZGF0YSksXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIExPR19JTl9GQUlMVVJFOiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJsb2dnZWQgaW5cIik7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgbG9nSW5Mb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGxvZ0luRXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgIG1lOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgbG9nT3V0TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgIGxvZ091dEVycm9yOiBudWxsLFxyXG4gICAgICAgICAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzoge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGxvZ091dExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgbG9nT3V0RG9uZTogdHJ1ZSxcclxuICAgICAgICAgIG1lOiBudWxsLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBsb2dPdXRMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGxvZ091dEVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDoge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIHNpZ25VcExvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICBzaWduVXBFcnJvcjogbnVsbCxcclxuICAgICAgICAgIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBzaWduVXBMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIHNpZ25VcERvbmU6IHRydWUsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRToge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIHNpZ25VcExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgc2lnblVwRXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG4gICAgICAgICAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgY2hhbmdlTmlja25hbWVEb25lOiB0cnVlLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRToge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIEFERF9QT1NUX1RPX01FOiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgbWU6IHtcclxuICAgICAgICAgICAgLi4uc3RhdGUubWUsXHJcbiAgICAgICAgICAgIFBvc3RzOiBbeyBpZDogYWN0aW9uLmRhdGEgfSwgLi4uc3RhdGUubWUuUG9zdHNdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBtZToge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZS5tZSxcclxuICAgICAgICAgICAgUG9zdHM6IHN0YXRlLm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9