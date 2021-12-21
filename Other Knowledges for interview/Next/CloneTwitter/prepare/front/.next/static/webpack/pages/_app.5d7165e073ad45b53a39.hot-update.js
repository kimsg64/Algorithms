webpackHotUpdate_N_E("pages/_app",{

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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  followLoading: false,
  // 팔로우 시도 중
  followDone: false,
  followError: null,
  unfollowLoading: false,
  // 언팔로우 시도 중
  unfollowDone: false,
  unfollowError: null,
  logInLoading: false,
  // 로그인 시도 중
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  // 로그인 시도 중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  // 회원가입 시도 중
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  // 닉변 시도 중
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
  return Object(immer__WEBPACK_IMPORTED_MODULE_1__["default"])(state, function (draft) {
    switch (action.type) {
      case FOLLOW_REQUEST:
        {
          // console.log("reducer logged in");
          draft.followLoading = true;
          draft.followError = null;
          draft.followDone = false;
          draft.me = action.data;
          break;
        }

      case FOLLOW_SUCCESS:
        {
          // console.log("더미유저 체크", dummyUser(action.data));
          draft.followLoading = false;
          draft.followDone = true;
          draft.me = dummyUser(action.data);
          break;
        }

      case FOLLOW_FAILURE:
        {
          // console.log("logged in");
          draft.followLoading = false;
          draft.followError = action.error;
          draft.me = action.data;
          break;
        }

      case UNFOLLOW_REQUEST:
        {
          // console.log("reducer logged in");
          draft.unfollowLoading = true;
          draft.unfollowError = null;
          draft.unfollowDone = false;
          draft.me = action.data;
          break;
        }

      case UNFOLLOW_SUCCESS:
        {
          // console.log("더미유저 체크", dummyUser(action.data));
          draft.unfollowLoading = false;
          draft.unfollowDone = true;
          draft.me = dummyUser(action.data);
          break;
        }

      case UNFOLLOW_FAILURE:
        {
          // console.log("logged in");
          draft.unfollowLoading = false;
          draft.unfollowError = action.error;
          draft.me = action.data;
          break;
        }

      case LOG_IN_REQUEST:
        {
          // console.log("reducer logged in");
          draft.logInLoading = true;
          draft.logInError = null;
          draft.logInDone = false;
          draft.me = action.data;
          break;
        }

      case LOG_IN_SUCCESS:
        {
          // console.log("더미유저 체크", dummyUser(action.data));
          draft.logInLoading = false;
          draft.logInDone = true;
          draft.me = dummyUser(action.data);
          break;
        }

      case LOG_IN_FAILURE:
        {
          // console.log("logged in");
          draft.logInLoading = false;
          draft.logInError = action.error;
          draft.me = action.data;
          break;
        }

      case LOG_OUT_REQUEST:
        {
          draft.logOutLoading = true;
          draft.logOutError = null;
          draft.logOutDone = false;
          break;
        }

      case LOG_OUT_SUCCESS:
        {
          draft.logOutLoading = false;
          draft.logOutDone = true;
          draft.me = null;
          break;
        }

      case LOG_OUT_FAILURE:
        {
          draft.logOutLoading = false;
          draft.logOutError = action.error;
          break;
        }

      case SIGN_UP_REQUEST:
        {
          draft.signUpLoading = true;
          draft.signUpError = null;
          draft.signUpDone = false;
          break;
        }

      case SIGN_UP_SUCCESS:
        {
          draft.signUpLoading = false;
          draft.signUpDone = true;
          break;
        }

      case SIGN_UP_FAILURE:
        {
          draft.signUpLoading = false;
          draft.signUpError = action.error;
          break;
        }

      case CHANGE_NICKNAME_REQUEST:
        {
          draft.changeNicknameLoading = true;
          draft.changeNicknameError = null;
          draft.changeNicknameDone = false;
          break;
        }

      case CHANGE_NICKNAME_SUCCESS:
        {
          draft.changeNicknameLoading = false;
          draft.changeNicknameDone = true;
          break;
        }

      case CHANGE_NICKNAME_FAILURE:
        {
          draft.changeNicknameLoading = false;
          draft.changeNicknameError = action.error;
          break;
        }

      case ADD_POST_TO_ME:
        {
          draft.me.Posts.unshift({
            id: action.data
          });
          break;
        }

      case REMOVE_POST_OF_ME:
        {
          draft.me.Post.filter(function (v) {
            return v.id !== action.data;
          });
          break;
        }

      default:
        break;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJmb2xsb3dMb2FkaW5nIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vycm9yIiwidW5mb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dEb25lIiwidW5mb2xsb3dFcnJvciIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwiZHVtbXlVc2VyIiwiZGF0YSIsIm5pY2tuYW1lIiwiaWQiLCJQb3N0cyIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJ0eXBlIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsImVycm9yIiwidW5zaGlmdCIsIlBvc3QiLCJmaWx0ZXIiLCJ2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFlBQVksR0FBRztBQUMxQkMsZUFBYSxFQUFFLEtBRFc7QUFDSjtBQUN0QkMsWUFBVSxFQUFFLEtBRmM7QUFHMUJDLGFBQVcsRUFBRSxJQUhhO0FBSTFCQyxpQkFBZSxFQUFFLEtBSlM7QUFJRjtBQUN4QkMsY0FBWSxFQUFFLEtBTFk7QUFNMUJDLGVBQWEsRUFBRSxJQU5XO0FBTzFCQyxjQUFZLEVBQUUsS0FQWTtBQU9MO0FBQ3JCQyxXQUFTLEVBQUUsS0FSZTtBQVMxQkMsWUFBVSxFQUFFLElBVGM7QUFVMUJDLGVBQWEsRUFBRSxLQVZXO0FBVUo7QUFDdEJDLFlBQVUsRUFBRSxLQVhjO0FBWTFCQyxhQUFXLEVBQUUsSUFaYTtBQWExQkMsZUFBYSxFQUFFLEtBYlc7QUFhSjtBQUN0QkMsWUFBVSxFQUFFLEtBZGM7QUFlMUJDLGFBQVcsRUFBRSxJQWZhO0FBZ0IxQkMsdUJBQXFCLEVBQUUsS0FoQkc7QUFnQkk7QUFDOUJDLG9CQUFrQixFQUFFLEtBakJNO0FBa0IxQkMscUJBQW1CLEVBQUUsSUFsQks7QUFtQjFCQyxJQUFFLEVBQUUsSUFuQnNCO0FBb0IxQkMsWUFBVSxFQUFFLEVBcEJjO0FBcUIxQkMsV0FBUyxFQUFFO0FBckJlLENBQXJCO0FBd0JBLElBQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUVBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUVBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxJQUFNQyxlQUFlLEdBQUcs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RyxLQUEzQjtBQUNBO0FBQ0Q7O0FBQ0QsV0FBSzFCLHVCQUFMO0FBQThCO0FBQzVCeUIsZUFBSyxDQUFDeEMscUJBQU4sR0FBOEIsSUFBOUI7QUFDQXdDLGVBQUssQ0FBQ3RDLG1CQUFOLEdBQTRCLElBQTVCO0FBQ0FzQyxlQUFLLENBQUN2QyxrQkFBTixHQUEyQixLQUEzQjtBQUNBO0FBQ0Q7O0FBQ0QsV0FBS2UsdUJBQUw7QUFBOEI7QUFDNUJ3QixlQUFLLENBQUN4QyxxQkFBTixHQUE4QixLQUE5QjtBQUNBd0MsZUFBSyxDQUFDdkMsa0JBQU4sR0FBMkIsSUFBM0I7QUFDQTtBQUNEOztBQUNELFdBQUtnQix1QkFBTDtBQUE4QjtBQUM1QnVCLGVBQUssQ0FBQ3hDLHFCQUFOLEdBQThCLEtBQTlCO0FBQ0F3QyxlQUFLLENBQUN0QyxtQkFBTixHQUE0Qm9DLE1BQU0sQ0FBQ0csS0FBbkM7QUFDQTtBQUNEOztBQUNELFdBQUtqQixjQUFMO0FBQXFCO0FBQ25CZ0IsZUFBSyxDQUFDckMsRUFBTixDQUFTMkIsS0FBVCxDQUFlWSxPQUFmLENBQXVCO0FBQUViLGNBQUUsRUFBRVMsTUFBTSxDQUFDWDtBQUFiLFdBQXZCO0FBQ0E7QUFDRDs7QUFDRCxXQUFLRixpQkFBTDtBQUF3QjtBQUN0QmUsZUFBSyxDQUFDckMsRUFBTixDQUFTd0MsSUFBVCxDQUFjQyxNQUFkLENBQXFCLFVBQUNDLENBQUQ7QUFBQSxtQkFBT0EsQ0FBQyxDQUFDaEIsRUFBRixLQUFTUyxNQUFNLENBQUNYLElBQXZCO0FBQUEsV0FBckI7QUFDQTtBQUNEOztBQUNEO0FBQ0U7QUE3SEo7QUErSEQsR0FoSU0sQ0FETztBQUFBLENBQWhCOztBQW1JZVMsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC41ZDcxNjVlMDczYWQ0NWI1M2EzOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsmrAg7Iuc64+EIOykkVxyXG4gIGZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gIGZvbGxvd0Vycm9yOiBudWxsLFxyXG4gIHVuZm9sbG93TG9hZGluZzogZmFsc2UsIC8vIOyWuO2MlOuhnOyasCDsi5zrj4Qg7KSRXHJcbiAgdW5mb2xsb3dEb25lOiBmYWxzZSxcclxuICB1bmZvbGxvd0Vycm9yOiBudWxsLFxyXG4gIGxvZ0luTG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4Qg7KSRXHJcbiAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICBsb2dJbkVycm9yOiBudWxsLFxyXG4gIGxvZ091dExvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+EIOykkVxyXG4gIGxvZ091dERvbmU6IGZhbHNlLFxyXG4gIGxvZ091dEVycm9yOiBudWxsLFxyXG4gIHNpZ25VcExvYWRpbmc6IGZhbHNlLCAvLyDtmozsm5DqsIDsnoUg7Iuc64+EIOykkVxyXG4gIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gIHNpZ25VcEVycm9yOiBudWxsLFxyXG4gIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsIC8vIOuLieuzgCDsi5zrj4Qg7KSRXHJcbiAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG4gIG1lOiBudWxsLFxyXG4gIHNpZ25VcERhdGE6IHt9LFxyXG4gIGxvZ2luRGF0YToge30sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSBcIkxPR19JTl9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9IFwiTE9HX0lOX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gXCJMT0dfSU5fRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9IFwiTE9HX09VVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSBcIkxPR19PVVRfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gXCJMT0dfT1VUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSBcIlNJR05fVVBfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gXCJTSUdOX1VQX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9IFwiU0lHTl9VUF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSBcIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9IFwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFID0gXCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gXCJGT0xMT1dfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSBcIkZPTExPV19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9IFwiRk9MTE9XX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gXCJVTkZPTExPV19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gXCJVTkZPTExPV19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gXCJVTkZPTExPV19GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSBcIkFERF9QT1NUX1RPX01FXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9IFwiUkVNT1ZFX1BPU1RfT0ZfTUVcIjtcclxuXHJcbmNvbnN0IGR1bW15VXNlciA9IChkYXRhKSA9PiAoe1xyXG4gIC4uLmRhdGEsXHJcbiAgbmlja25hbWU6IFwi7JyI7Lm07JqwXCIsXHJcbiAgaWQ6IDEsXHJcbiAgUG9zdHM6IFt7IGlkOiAxIH1dLFxyXG4gIEZvbGxvd2luZ3M6IFtcclxuICAgIHsgbmlja25hbWU6IFwi67aA6riw7LSIXCIgfSxcclxuICAgIHsgbmlja25hbWU6IFwi67aA6riw7LSIXCIgfSxcclxuICAgIHsgbmlja25hbWU6IFwi67aA6riw7LSIXCIgfSxcclxuICBdLFxyXG4gIEZvbGxvd2VyczogW1xyXG4gICAgeyBuaWNrbmFtZTogXCLrtoDquLDstIhcIiB9LFxyXG4gICAgeyBuaWNrbmFtZTogXCLrtoDquLDstIhcIiB9LFxyXG4gICAgeyBuaWNrbmFtZTogXCLrtoDquLDstIhcIiB9LFxyXG4gIF0sXHJcbn0pO1xyXG5cclxuLy8gYWN0aW9uIGNyZWF0ZXI6IOybkOuemCDslaHshZjsnYAg6rCd7LK07J24642wIOqwneyytOuhnCDrp4zrk6TrqbQg64+Z7KCB7Jy866GcIOqwkuydhCDrsJTqvrjquLAg7Z6Y65Ok7Ja07IScIOqwneyytOulvCDrsYnripQg7ZWo7IiY66W8IOunjOuToCDqsoNcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gdGh1bmvqsIAg7ZW0IOyjvOuKlCDsnbzsnbQg7J206rKD7J2064ukLijruYTrj5nquLAg7JWh7IWY7J2EIOqwgOuKpe2VmOqyjCDtlbQg7KSMLCDtlZwg67KI7JeQIOuUlOyKpO2MqOy5mOulvCDsl6zrn6wg67KIIO2VoCDsiJgg7J6I6rKMIO2VtCDspIDri6QuKVxyXG4vLyBzYWdh66W8IOyTsOuptCDsobDquIgg642UIOunjuydgCDqsoPsnYQg7ZW0IOykgOuLpC4g65Sc66CI7J20KOuqhyDstIgg65Kk7JeQIOuUlOyKpO2MqOy5mOqwgCDqsIDriqXtlZjqsowg7ZWc64uk65Og7KeALi4uKVxyXG4vLyDqt7jrnpjshJwg6rCE64uo7ZWcIOyWtO2UjOydhCDrp4zrk6Qg65WM64qUIHRodW5r66W8IOyNqOyEnCDruYTrj5nquLAg7JWh7IWY66eMIOyCrOyaqSDqsIDriqXtlZjqsowg7ZW064+EIOuQmOuKlOuNsCwg6re466CH7KeAIOyViuycvOuptCBzYWdh66GcIOuLpOyWke2VnCDquLDriqXsnYQg7KeA7JuQ67Cb7Jy866m0IOyii+ydjFxyXG4vLyBleHBvcnQgY29uc3QgbG9naW5BY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4vLyAgIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbi8vICAgICBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7XHJcbi8vICAgICBkaXNwYXRjaChsb2dpblJlcXVlc3RBY3Rpb24oKSk7XHJcbi8vICAgICBheGlvc1xyXG4vLyAgICAgICAucG9zdChcIi9hcGkvbG9naW5cIilcclxuLy8gICAgICAgLnRoZW4oKHJlcykgPT4gZGlzcGF0Y2gobG9naW5TdWNjZXNzQWN0aW9uKHJlcy5kYXRhKSkpXHJcbi8vICAgICAgIC5jYXRjaCgoZXJyKSA9PiBkaXNwYXRjaChsb2dpbkZhaWx1cmVBY3Rpb24oZXJyKSkpO1xyXG4vLyAgIH07XHJcbi8vIH07XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogTE9HX0lOX1JFUVVFU1QsIGRhdGEgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiB7IHR5cGU6IExPR19PVVRfUkVRVUVTVCB9O1xyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PlxyXG4gIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIEZPTExPV19SRVFVRVNUOiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJyZWR1Y2VyIGxvZ2dlZCBpblwiKTtcclxuICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzoge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi642U66+47Jyg7KCAIOyytO2BrFwiLCBkdW1teVVzZXIoYWN0aW9uLmRhdGEpKTtcclxuICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWUgPSBkdW1teVVzZXIoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImxvZ2dlZCBpblwiKTtcclxuICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJlZHVjZXIgbG9nZ2VkIGluXCIpO1xyXG4gICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFVORk9MTE9XX1NVQ0NFU1M6IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuuNlOuvuOycoOyggCDssrTtgaxcIiwgZHVtbXlVc2VyKGFjdGlvbi5kYXRhKSk7XHJcbiAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tZSA9IGR1bW15VXNlcihhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBVTkZPTExPV19GQUlMVVJFOiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJsb2dnZWQgaW5cIik7XHJcbiAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJlZHVjZXIgbG9nZ2VkIGluXCIpO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IG51bGw7XHJcbiAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIExPR19JTl9TVUNDRVNTOiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLrjZTrr7jsnKDsoIAg7LK07YGsXCIsIGR1bW15VXNlcihhY3Rpb24uZGF0YSkpO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWUgPSBkdW1teVVzZXIoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImxvZ2dlZCBpblwiKTtcclxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6IHtcclxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1lID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIExPR19PVVRfRkFJTFVSRToge1xyXG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDoge1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gbnVsbDtcclxuICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6IHtcclxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6IHtcclxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDoge1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IG51bGw7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzoge1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRToge1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBBRERfUE9TVF9UT19NRToge1xyXG4gICAgICAgIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoeyBpZDogYWN0aW9uLmRhdGEgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRToge1xyXG4gICAgICAgIGRyYWZ0Lm1lLlBvc3QuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=