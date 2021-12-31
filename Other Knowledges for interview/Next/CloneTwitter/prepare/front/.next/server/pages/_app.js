module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
var _jsxFileName = "D:\\__My_crafts\\Algorithms For Coding Test\\Other Knowledges for interview\\Next\\CloneTwitter\\prepare\\front\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // head 태그를 수정하고 싶을 때는 next의 Head를 사용
// 이것은 children과 같음... index.js, profile.js, signup.js 같은 페이지들이 컴포넌트로 들어와서 위에서 import한 친구들을 입힌 뒤 리턴된다고 보면 된다.

const NodeBird = ({
  Component
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("meta", {
    charSet: "utf-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, "NodeBird")), __jsx(Component, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }));
};

NodeBird.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_4__["default"].withRedux(NodeBird));

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducers/post.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// HYDRATE는 서버 사이드 렌더링을 위함이다.
// 서버 사이드 렌더링을 하기 위해 index reducer를 추가하는 것



 // async action creater
// 이전 상태와 액션을 통해 다음 상태를 만드는 함수인 거시다.
// 리듀서들을 나눌 때는 이렇게 combineReducers로 세 개의 reducer를 합쳐 준다.
// initialState도 컴바인리듀서가 알아서 해 준다.

const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  index: (state = {}, action) => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
  post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, generateDummyPost, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDummyPost", function() { return generateDummyPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "faker");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);



const initialState = {
  mainPosts: [],
  imagePaths: [],
  hasMorePosts: true,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null
};
const generateDummyPost = number => Array(number).fill().map((v, i) => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
  User: {
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
    nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
  },
  content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.paragraph(),
  Images: [{
    src: faker__WEBPACK_IMPORTED_MODULE_2___default.a.image.image()
  }],
  Comments: [{
    User: {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
    },
    content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.sentence()
  }]
}));
const LOAD_POSTS_REQUEST = "LOAD_POSTS_REQUEST";
const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
const LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE";
const ADD_POST_REQUEST = "ADD_POST_REQUEST";
const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
const ADD_POST_FAILURE = "ADD_POST_FAILURE";
const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";
const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
const ADD_COMMENT_FAILURE = "ADD_POST_FAILURE";
const addPost = data => ({
  type: ADD_POST_REQUEST,
  data
});
const addComment = data => ({
  type: ADD_COMMENT_REQUEST,
  data
});

const dummyPost = data => ({
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: "wincow"
  },
  Images: [],
  Comments: []
});

const dummyComment = data => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
  content: data,
  User: {
    id: 1,
    nickname: "wincow"
  }
});

const reducer = (state = initialState, action) => {
  // 이머가 draft를 불변성을 유지한 채 다음 state로 변환시켜준다. 그래서 ...state 이런거 안 할 수 있다.
  // 여기서 state는 조작하면 안 됨.
  return immer__WEBPACK_IMPORTED_MODULE_1___default()(state, draft => {
    switch (action.type) {
      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case LOAD_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = action.data.concat(draft.mainPosts);
        draft.hasMorePosts = draft.mainPosts.length < 50;
        break;

      case LOAD_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;

      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;

      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(dummyPost(action.data));
        break;

      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;

      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;

      case REMOVE_POST_SUCCESS:
        draft.removePostLoading = false;
        draft.removePostDone = true;
        draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data);
        break;

      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;

      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;

      case ADD_COMMENT_SUCCESS:
        const post = draft.mainPosts.find(v => v.id === action.data.postId);
        post.Comments.unshift(dummyComment(action.data.content));
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;

      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
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
const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";
const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
const CHANGE_NICKNAME_REQUEST = "CHANGE_NICKNAME_REQUEST";
const CHANGE_NICKNAME_SUCCESS = "CHANGE_NICKNAME_SUCCESS";
const CHANGE_NICKNAME_FAILURE = "CHANGE_NICKNAME_FAILURE";
const FOLLOW_REQUEST = "FOLLOW_REQUEST";
const FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
const FOLLOW_FAILURE = "FOLLOW_FAILURE";
const UNFOLLOW_REQUEST = "UNFOLLOW_REQUEST";
const UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
const UNFOLLOW_FAILURE = "UNFOLLOW_FAILURE";
const ADD_POST_TO_ME = "ADD_POST_TO_ME";
const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";

const dummyUser = data => _objectSpread(_objectSpread({}, data), {}, {
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
}); // action creater: 원래 액션은 객체인데 객체로 만들면 동적으로 값을 바꾸기 힘들어서 객체를 뱉는 함수를 만든 것
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


const loginRequestAction = data => {
  return {
    type: LOG_IN_REQUEST,
    data
  };
};
const logoutRequestAction = () => {
  return {
    type: LOG_OUT_REQUEST
  };
};

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
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
        draft.me = draft.me.Followings.filter(v => v.id !== action.data);
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
        draft.me.Post.filter(v => v.id !== action.data);
        break;
      }

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./sagas/user.js");
// 제너레이터: 함수 뒤에 *이 붙어 있는 것...
// 제너레이터 안의 것을 실행하려면 .next()로 호출해야 한다. 그냥 제너레이터만 호출하면 suspended가 나옴
// 제너레이터 안의 yield는 무엇이냐... yield 앞까지만 실행됨
// 예를 들어
// const gen = function* () {
//   console.log(1);
//   yield;
//   console.log(2);
//   yield;
//   console.log(3);
//   yield 4;
// }
// 이런 제너레이터가 있다면
// gen()의 결과는 {<suspended>}
// gen().next()를 하면 맨 처음에는 콘솔창에 1이 찍히고, 반환값은 {value: undefined, done: false}
// 한 번 더 gen().next()를 하면 콘솔창에 2가 찍히고, 반환값은 {value: undefined, done: false}
// 한 번 더 gen().next()를 하면 콘솔창에 3이 찍히고, 반환값은 {value: 4, done: true}
// 한 번 더 gen().next()를 하면 콘솔창에 아무것도 안찍히고, 반환값은 {value: undefined, done: false}
// 절대 멈추지 않는 제너레이터가 있는데, while(true) 문이다. 원래 무한 반복되어 프로그램이 중지되어 버리는 while(true)지만, yield가 중단점이 되어버리므로 프로그램이 중단되지 않는다.
// 또 이벤트 리스너와 비슷한 것을 만들 수도 있다. 어떤 코드가 실행되면 next가 실행되도록 하는 ...
// saga는 이것을 이용해 이벤트 리스너처럼 작동하게 한다. 로그인 액션이 들어오면 로그인을 실행하는 등...
// reducers/user.js의 주석(thunk)과 같은 일을 하는 것
 // 이것들을 saga effect라고 한다.
// 사가를 쪼갤 때는 리듀서랑 비슷한 기준으로 쪼개면 된다.
// 다행히 컴바인하는건 따로 없고 그냥 export import로 가능



function* rootSaga() {
  // all은 배열을 받아서 배열 안의 것들을 한 번에(동시에) 실행시켜 준다.
  // fork는 해당 함수를 실행시킨다.
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_1__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_2__["default"])]);
}

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return commentSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");






function loadPostsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/posts", data);
}

function* loadPosts(action) {
  try {
    // const result = yield call(loadPostsAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_SUCCESS"],
      data: Object(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["generateDummyPost"])(10)
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_FAILURE"],
      data: err.response.data
    });
  }
}

function* watchLoadPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_REQUEST"], loadPosts);
}

function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/post", data);
}

function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    const id = shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate();
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_SUCCESS"],
      data: {
        id,
        content: action.data
      }
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_TO_ME"],
      data: {
        id
      }
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function* watchAddPost() {
  // throttle은 takeEvery와 같이, 반복적인 요청을 막기 위해 사용한다.
  // takeEvery는 반복적인 요청이 갔을 때 응답을 한 번만 하도록 하는 것인 반면,
  // throttle은 정해진 시간 내에 딱 한 번만 해당 요청이 발생하도록 하는 것이다.
  // 아래 코드는 게시글 작성을 2초 안에는 딱 한 번만 보낼 수 있다.
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"], addPost);
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete("/api/post", data);
}

function* removePost(action) {
  try {
    // const result = yield call(removePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_SUCCESS"],
      data: action.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["REMOVE_POST_OF_ME"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_REQUEST"], removePost);
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/comment", data);
}

function* addComment(action) {
  // const result = yield call(addCommentAPI, action.data);
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_FAILURE"],
      data: err.response.data
    });
  }
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"], addComment);
}

function* commentSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddComment)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");




function followAPI(data) {
  // 실제로 서버에 요청(제너레이터 아님)
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/follow", data);
}

function* follow(action) {
  try {
    // const result = yield call(logInAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
      data: err.response.data
    });
  }
}

function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);
}

function unfollowAPI(data) {
  // 실제로 서버에 요청(제너레이터 아님)
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/unfollow", data);
}

function* unfollow(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
      data: err.response.data
    });
  }
}

function* watchUnfollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], follow);
}

function logInAPI(data) {
  // 실제로 서버에 요청(제너레이터 아님)
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/login", data);
}

function* logIn(action) {
  try {
    // call도 해당 함수를 실행시키는데, fork와 약간 다르다.
    // fork는 비동기 함수 호출, call은 동기 함수 호출이다.
    // 즉 여기서 yield call 대신 yield fork를 써버리면, loginAPI의 결과가 result에 담기기 전에 바로 다음 줄로 넘어가 버린다.
    // call을 하면 앞의 logInAPI가 완료될 때까지 실행되지 않는다.
    // 즉 call은 axios.post().then(res => res)처럼 작동하지만, fork를 여기서 쓰면 axios.post() 뒤에 res가 없는데 res를 찾는 꼴이 되어버린다.
    // 또, call과 fork는 첫 번째 인자로 콜백함수, 두 번째 인자부터는 다른 데이터들이 넘어가는데, 이는 callback(a, b, c, ...) 이런 식으로 사용하는 것과 같다.
    // 아래 예시로는 logInAPI(action.data)와 같은 것
    // const result = yield call(logInAPI, action.data);
    // 서버가 없는 상태이므로 임시로 delay를 사용할 예정이다. setTimeout과 비슷하다.
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000); // put은 dispatch같은 것이다.

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      data: err.response.data
    });
  }
}

function* watchLogIn() {
  // take는 해당 액션이 실행될 때까지 기다렸다가 두 번째 인자로 전달된 함수를 실행시킨다. (액션 데이터도 같이 넘어간다.)
  // 이 take는 일회용이라서 그냥 이렇게 쓰면 로그인을 한 번밖에 못한다...
  // 그래서 while문을 사용하거나, takeEvery로 바꿔서 사용해 주면 된다.
  // 단, take는 동기적이지만 takeEvery는 비동기적으로 동작한다는 차이가 있다.
  // takeLatest는 반복적인 요청에 대해 마지막 응답만을 취하는 것이다.
  // 예를 들면, 실수로 두 번 클릭했을 때, 로그인 요청이 두 번 가는데, 이 때 마지막 요청에 대한 응답만을 받아오게 해 준다. (요청 자체를 취소할 수는 없음)
  // 그래서 보통 takeLatest를 쓴다.
  // console.log("saga login requrest");
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);
}

function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/logout");
}

function* logOut() {
  try {
    // const result = yield call(logOutAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      data: err.response.data
    });
  }
}

function* watchLogOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
}

function SignUpAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/signup");
}

function* signUp() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      data: err.response.data
    });
  }
}

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])(Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnfollow), [Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSignUp)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redux-saga/core */ "@redux-saga/core");
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_redux_saga_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");
// for next-redux-wrapper


 // import thunkMiddelware from "redux-thunk";





const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  // 로그를 찍어주는 간단한 미들웨어를 만들어봤다.
  console.log(action);
  return next(action);
};

const configureStore = () => {
  // const middlewares = [thunkMiddelware];
  const sagaMiddleware = _redux_saga_core__WEBPACK_IMPORTED_MODULE_3___default()();
  const middlewares = [sagaMiddleware, loggerMiddleware]; // 미들웨어: 리덕스의 기능을 향상시켜주는 친구
  // -> thunk는 리덕스가 비동기 처리를 할 수 있도록 해 줌 (호출할 때 디스패치 => 하나의 액션에서 여러번 디스패치가 가능해진다.)
  // 즉, 하나의 비동기 요청 안에 여러 개의 동기 액션이 가능

  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@redux-saga/core":
/*!***********************************!*\
  !*** external "@redux-saga/core" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@redux-saga/core");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("faker");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByZWR1eC1zYWdhL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZha2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNob3J0aWRcIiJdLCJuYW1lcyI6WyJOb2RlQmlyZCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4Iiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsInBheWxvYWQiLCJ1c2VyIiwicG9zdCIsImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImltYWdlUGF0aHMiLCJoYXNNb3JlUG9zdHMiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwiZ2VuZXJhdGVEdW1teVBvc3QiLCJudW1iZXIiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJ2IiwiaSIsImlkIiwic2hvcnRJZCIsImdlbmVyYXRlIiwiVXNlciIsIm5pY2tuYW1lIiwiZmFrZXIiLCJuYW1lIiwiZmluZE5hbWUiLCJjb250ZW50IiwibG9yZW0iLCJwYXJhZ3JhcGgiLCJJbWFnZXMiLCJzcmMiLCJpbWFnZSIsIkNvbW1lbnRzIiwic2VudGVuY2UiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJhZGRQb3N0IiwiZGF0YSIsImFkZENvbW1lbnQiLCJkdW1teVBvc3QiLCJkdW1teUNvbW1lbnQiLCJyZWR1Y2VyIiwicHJvZHVjZSIsImRyYWZ0IiwiY29uY2F0IiwibGVuZ3RoIiwiZXJyb3IiLCJ1bnNoaWZ0IiwiZmlsdGVyIiwiZmluZCIsInBvc3RJZCIsImZvbGxvd0xvYWRpbmciLCJmb2xsb3dEb25lIiwiZm9sbG93RXJyb3IiLCJ1bmZvbGxvd0xvYWRpbmciLCJ1bmZvbGxvd0RvbmUiLCJ1bmZvbGxvd0Vycm9yIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJkdW1teVVzZXIiLCJQb3N0cyIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwiUG9zdCIsInJvb3RTYWdhIiwiYWxsIiwiZm9yayIsInBvc3RTYWdhIiwidXNlclNhZ2EiLCJsb2FkUG9zdHNBUEkiLCJheGlvcyIsImdldCIsImxvYWRQb3N0cyIsImRlbGF5IiwicHV0IiwiZXJyIiwicmVzcG9uc2UiLCJ3YXRjaExvYWRQb3N0cyIsInRocm90dGxlIiwiYWRkUG9zdEFQSSIsInNob3J0aWQiLCJ3YXRjaEFkZFBvc3QiLCJ0YWtlTGF0ZXN0IiwicmVtb3ZlUG9zdEFQSSIsImRlbGV0ZSIsInJlbW92ZVBvc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJhZGRDb21tZW50QVBJIiwid2F0Y2hBZGRDb21tZW50IiwiY29tbWVudFNhZ2EiLCJmb2xsb3dBUEkiLCJmb2xsb3ciLCJ3YXRjaEZvbGxvdyIsInVuZm9sbG93QVBJIiwidW5mb2xsb3ciLCJ3YXRjaFVuZm9sbG93IiwibG9nSW5BUEkiLCJsb2dJbiIsIndhdGNoTG9nSW4iLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJ3YXRjaExvZ091dCIsIlNpZ25VcEFQSSIsInNpZ25VcCIsIndhdGNoU2lnblVwIiwibG9nZ2VyTWlkZGxld2FyZSIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJuZXh0IiwiY29uc29sZSIsImxvZyIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJzYWdhVGFzayIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFD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RDs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxvQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFwiYW50ZC9kaXN0L2FudGQuY3NzXCI7XHJcblxyXG5pbXBvcnQgd3JhcHBlciBmcm9tIFwiLi4vc3RvcmUvY29uZmlndXJlU3RvcmVcIjtcclxuLy8gaGVhZCDtg5zqt7jrpbwg7IiY7KCV7ZWY6rOgIOyLtuydhCDrlYzripQgbmV4dOydmCBIZWFk66W8IOyCrOyaqVxyXG5cclxuLy8g7J206rKD7J2AIGNoaWxkcmVu6rO8IOqwmeydjC4uLiBpbmRleC5qcywgcHJvZmlsZS5qcywgc2lnbnVwLmpzIOqwmeydgCDtjpjsnbTsp4Drk6TsnbQg7Lu07Y+s64SM7Yq466GcIOuTpOyWtOyZgOyEnCDsnITsl5DshJwgaW1wb3J07ZWcIOy5nOq1rOuTpOydhCDsnoXtnowg65KkIOumrO2EtOuQnOuLpOqzoCDrs7TrqbQg65Cc64ukLlxyXG5jb25zdCBOb2RlQmlyZCA9ICh7IENvbXBvbmVudCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgPHRpdGxlPk5vZGVCaXJkPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8Q29tcG9uZW50IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuTm9kZUJpcmQucHJvcFR5cGVzID0ge1xyXG4gIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChOb2RlQmlyZCk7XHJcbiIsIi8vIEhZRFJBVEXripQg7ISc67KEIOyCrOydtOuTnCDroIzrjZTrp4HsnYQg7JyE7ZWo7J2064ukLlxyXG4vLyDshJzrsoQg7IKs7J2065OcIOugjOuNlOungeydhCDtlZjquLAg7JyE7ZW0IGluZGV4IHJlZHVjZXLrpbwg7LaU6rCA7ZWY64qUIOqyg1xyXG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuXHJcbmltcG9ydCB1c2VyIGZyb20gXCIuL3VzZXJcIjtcclxuaW1wb3J0IHBvc3QgZnJvbSBcIi4vcG9zdFwiO1xyXG5cclxuLy8gYXN5bmMgYWN0aW9uIGNyZWF0ZXJcclxuXHJcbi8vIOydtOyghCDsg4Htg5zsmYAg7JWh7IWY7J2EIO2Gte2VtCDri6TsnYwg7IOB7YOc66W8IOunjOuTnOuKlCDtlajsiJjsnbgg6rGw7Iuc64ukLlxyXG4vLyDrpqzrk4DshJzrk6TsnYQg64KY64iMIOuVjOuKlCDsnbTroIfqsowgY29tYmluZVJlZHVjZXJz66GcIOyEuCDqsJzsnZggcmVkdWNlcuulvCDtlanss5Ag7KSA64ukLlxyXG4vLyBpbml0aWFsU3RhdGXrj4Qg7Lu067CU7J2466as65OA7ISc6rCAIOyVjOyVhOyEnCDtlbQg7KSA64ukLlxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgaW5kZXg6IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICB9LFxyXG4gIHVzZXIsXHJcbiAgcG9zdCxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuIiwiaW1wb3J0IHNob3J0SWQgZnJvbSBcInNob3J0aWRcIjtcclxuaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XHJcbmltcG9ydCBmYWtlciBmcm9tIFwiZmFrZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbWFpblBvc3RzOiBbXSxcclxuICBpbWFnZVBhdGhzOiBbXSxcclxuICBoYXNNb3JlUG9zdHM6IHRydWUsXHJcbiAgbG9hZFBvc3RzTG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFBvc3RzRG9uZTogZmFsc2UsXHJcbiAgbG9hZFBvc3RzRXJyb3I6IG51bGwsXHJcbiAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcbiAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RXJyb3I6IG51bGwsXHJcbiAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVEdW1teVBvc3QgPSAobnVtYmVyKSA9PlxyXG4gIEFycmF5KG51bWJlcilcclxuICAgIC5maWxsKClcclxuICAgIC5tYXAoKHYsIGkpID0+ICh7XHJcbiAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgIFVzZXI6IHtcclxuICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnBhcmFncmFwaCgpLFxyXG4gICAgICBJbWFnZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzcmM6IGZha2VyLmltYWdlLmltYWdlKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgQ29tbWVudHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY29udGVudDogZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfUkVRVUVTVCA9IFwiTE9BRF9QT1NUU19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1NVQ0NFU1MgPSBcIkxPQURfUE9TVFNfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFID0gXCJMT0FEX1BPU1RTX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gXCJBRERfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gXCJBRERfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gXCJBRERfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9IFwiUkVNT1ZFX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9IFwiUkVNT1ZFX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9IFwiUkVNT1ZFX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSBcIkFERF9DT01NRU5UX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSBcIkFERF9DT01NRU5UX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSBcIkFERF9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gIGlkOiBkYXRhLmlkLFxyXG4gIGNvbnRlbnQ6IGRhdGEuY29udGVudCxcclxuICBVc2VyOiB7XHJcbiAgICBpZDogMSxcclxuICAgIG5pY2tuYW1lOiBcIndpbmNvd1wiLFxyXG4gIH0sXHJcbiAgSW1hZ2VzOiBbXSxcclxuICBDb21tZW50czogW10sXHJcbn0pO1xyXG5cclxuY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICBjb250ZW50OiBkYXRhLFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmlja25hbWU6IFwid2luY293XCIsXHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAvLyDsnbTrqLjqsIAgZHJhZnTrpbwg67aI67OA7ISx7J2EIOycoOyngO2VnCDssYQg64uk7J2MIHN0YXRl66GcIOuzgO2ZmOyLnOy8nOykgOuLpC4g6re4656Y7IScIC4uLnN0YXRlIOydtOufsOqxsCDslYgg7ZWgIOyImCDsnojri6QuXHJcbiAgLy8g7Jes6riw7IScIHN0YXRl64qUIOyhsOyeke2VmOuptCDslYgg65CoLlxyXG4gIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGFjdGlvbi5kYXRhLmNvbmNhdChkcmFmdC5tYWluUG9zdHMpO1xyXG4gICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5sZW5ndGggPCA1MDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGR1bW15UG9zdChhY3Rpb24uZGF0YSkpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOlxyXG4gICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpKTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBmb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g7YyU66Gc7JqwIOyLnOuPhCDspJFcclxuICBmb2xsb3dEb25lOiBmYWxzZSxcclxuICBmb2xsb3dFcnJvcjogbnVsbCxcclxuICB1bmZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDslrjtjJTroZzsmrAg7Iuc64+EIOykkVxyXG4gIHVuZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgdW5mb2xsb3dFcnJvcjogbnVsbCxcclxuICBsb2dJbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+EIOykkVxyXG4gIGxvZ0luRG9uZTogZmFsc2UsXHJcbiAgbG9nSW5FcnJvcjogbnVsbCxcclxuICBsb2dPdXRMb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhCDspJFcclxuICBsb2dPdXREb25lOiBmYWxzZSxcclxuICBsb2dPdXRFcnJvcjogbnVsbCxcclxuICBzaWduVXBMb2FkaW5nOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyLnOuPhCDspJFcclxuICBzaWduVXBEb25lOiBmYWxzZSxcclxuICBzaWduVXBFcnJvcjogbnVsbCxcclxuICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLCAvLyDri4nrs4Ag7Iuc64+EIOykkVxyXG4gIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXHJcbiAgY2hhbmdlTmlja25hbWVFcnJvcjogbnVsbCxcclxuICBtZTogbnVsbCxcclxuICBzaWduVXBEYXRhOiB7fSxcclxuICBsb2dpbkRhdGE6IHt9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gXCJMT0dfSU5fUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSBcIkxPR19JTl9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9IFwiTE9HX0lOX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSBcIkxPR19PVVRfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gXCJMT0dfT1VUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9IFwiTE9HX09VVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gXCJTSUdOX1VQX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9IFwiU0lHTl9VUF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSBcIlNJR05fVVBfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUID0gXCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSBcIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9IFwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9IFwiRk9MTE9XX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gXCJGT0xMT1dfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSBcIkZPTExPV19GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9IFwiVU5GT0xMT1dfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9IFwiVU5GT0xMT1dfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9IFwiVU5GT0xMT1dfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gXCJBRERfUE9TVF9UT19NRVwiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSBcIlJFTU9WRV9QT1NUX09GX01FXCI7XHJcblxyXG5jb25zdCBkdW1teVVzZXIgPSAoZGF0YSkgPT4gKHtcclxuICAuLi5kYXRhLFxyXG4gIG5pY2tuYW1lOiBcIuyciOy5tOyasFwiLFxyXG4gIGlkOiAxLFxyXG4gIFBvc3RzOiBbeyBpZDogMSB9XSxcclxuICBGb2xsb3dpbmdzOiBbXHJcbiAgICB7IG5pY2tuYW1lOiBcIuu2gOq4sOy0iFwiIH0sXHJcbiAgICB7IG5pY2tuYW1lOiBcIuu2gOq4sOy0iFwiIH0sXHJcbiAgICB7IG5pY2tuYW1lOiBcIuu2gOq4sOy0iFwiIH0sXHJcbiAgXSxcclxuICBGb2xsb3dlcnM6IFtcclxuICAgIHsgbmlja25hbWU6IFwi67aA6riw7LSIXCIgfSxcclxuICAgIHsgbmlja25hbWU6IFwi67aA6riw7LSIXCIgfSxcclxuICAgIHsgbmlja25hbWU6IFwi67aA6riw7LSIXCIgfSxcclxuICBdLFxyXG59KTtcclxuXHJcbi8vIGFjdGlvbiBjcmVhdGVyOiDsm5Drnpgg7JWh7IWY7J2AIOqwneyytOyduOuNsCDqsJ3ssrTroZwg66eM65Ok66m0IOuPmeyggeycvOuhnCDqsJLsnYQg67CU6r646riwIO2emOuTpOyWtOyEnCDqsJ3ssrTrpbwg67GJ64qUIO2VqOyImOulvCDrp4zrk6Ag6rKDXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIHRodW5r6rCAIO2VtCDso7zripQg7J287J20IOydtOqyg+ydtOuLpC4o67mE64+Z6riwIOyVoeyFmOydhCDqsIDriqXtlZjqsowg7ZW0IOykjCwg7ZWcIOuyiOyXkCDrlJTsiqTtjKjsuZjrpbwg7Jes65+sIOuyiCDtlaAg7IiYIOyeiOqyjCDtlbQg7KSA64ukLilcclxuLy8gc2FnYeulvCDsk7DrqbQg7KGw6riIIOuNlCDrp47snYAg6rKD7J2EIO2VtCDspIDri6QuIOuUnOugiOydtCjrqocg7LSIIOuSpOyXkCDrlJTsiqTtjKjsuZjqsIAg6rCA64ql7ZWY6rKMIO2VnOuLpOuToOyngC4uLilcclxuLy8g6re4656Y7IScIOqwhOuLqO2VnCDslrTtlIzsnYQg66eM65OkIOuVjOuKlCB0aHVua+ulvCDsjajshJwg67mE64+Z6riwIOyVoeyFmOunjCDsgqzsmqkg6rCA64ql7ZWY6rKMIO2VtOuPhCDrkJjripTrjbAsIOq3uOugh+yngCDslYrsnLzrqbQgc2FnYeuhnCDri6TslpHtlZwg6riw64ql7J2EIOyngOybkOuwm+ycvOuptCDsoovsnYxcclxuLy8gZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gKGRhdGEpID0+IHtcclxuLy8gICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG4vLyAgICAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpO1xyXG4vLyAgICAgZGlzcGF0Y2gobG9naW5SZXF1ZXN0QWN0aW9uKCkpO1xyXG4vLyAgICAgYXhpb3NcclxuLy8gICAgICAgLnBvc3QoXCIvYXBpL2xvZ2luXCIpXHJcbi8vICAgICAgIC50aGVuKChyZXMpID0+IGRpc3BhdGNoKGxvZ2luU3VjY2Vzc0FjdGlvbihyZXMuZGF0YSkpKVxyXG4vLyAgICAgICAuY2F0Y2goKGVycikgPT4gZGlzcGF0Y2gobG9naW5GYWlsdXJlQWN0aW9uKGVycikpKTtcclxuLy8gICB9O1xyXG4vLyB9O1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7IHR5cGU6IExPR19JTl9SRVFVRVNULCBkYXRhIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4geyB0eXBlOiBMT0dfT1VUX1JFUVVFU1QgfTtcclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT5cclxuICBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBGT0xMT1dfUkVRVUVTVDoge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmVkdWNlciBsb2dnZWQgaW5cIik7XHJcbiAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuuNlOuvuOycoOyggCDssrTtgaxcIiwgZHVtbXlVc2VyKGFjdGlvbi5kYXRhKSk7XHJcbiAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1lID0gZHVtbXlVc2VyKGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIEZPTExPV19GQUlMVVJFOiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJsb2dnZWQgaW5cIik7XHJcbiAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBVTkZPTExPV19SRVFVRVNUOiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJyZWR1Y2VyIGxvZ2dlZCBpblwiKTtcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBVTkZPTExPV19TVUNDRVNTOiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLrjZTrr7jsnKDsoIAg7LK07YGsXCIsIGR1bW15VXNlcihhY3Rpb24uZGF0YSkpO1xyXG4gICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWUgPSBkcmFmdC5tZS5Gb2xsb3dpbmdzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRToge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibG9nZ2VkIGluXCIpO1xyXG4gICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIExPR19JTl9SRVFVRVNUOiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJyZWR1Y2VyIGxvZ2dlZCBpblwiKTtcclxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzoge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi642U66+47Jyg7KCAIOyytO2BrFwiLCBkdW1teVVzZXIoYWN0aW9uLmRhdGEpKTtcclxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1lID0gZHVtbXlVc2VyKGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIExPR19JTl9GQUlMVVJFOiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJsb2dnZWQgaW5cIik7XHJcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOiB7XHJcbiAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzoge1xyXG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tZSA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6IHtcclxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6IHtcclxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IG51bGw7XHJcbiAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOiB7XHJcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOiB7XHJcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6IHtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6IHtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6IHtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6IHtcclxuICAgICAgICBkcmFmdC5tZS5Qb3N0cy51bnNoaWZ0KHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6IHtcclxuICAgICAgICBkcmFmdC5tZS5Qb3N0LmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCIvLyDsoJzrhIjroIjsnbTthLA6IO2VqOyImCDrkqTsl5AgKuydtCDrtpnslrQg7J6I64qUIOqygy4uLlxyXG4vLyDsoJzrhIjroIjsnbTthLAg7JWI7J2YIOqyg+ydhCDsi6TtlontlZjroKTrqbQgLm5leHQoKeuhnCDtmLjstpztlbTslbwg7ZWc64ukLiDqt7jrg6Ug7KCc64SI66CI7J207YSw66eMIO2YuOy2nO2VmOuptCBzdXNwZW5kZWTqsIAg64KY7Ji0XHJcbi8vIOygnOuEiOugiOydtO2EsCDslYjsnZggeWllbGTripQg66y07JeH7J2064OQLi4uIHlpZWxkIOyVnuq5jOyngOunjCDsi6TtlonrkKhcclxuLy8g7JiI66W8IOuTpOyWtFxyXG4vLyBjb25zdCBnZW4gPSBmdW5jdGlvbiogKCkge1xyXG4vLyAgIGNvbnNvbGUubG9nKDEpO1xyXG4vLyAgIHlpZWxkO1xyXG4vLyAgIGNvbnNvbGUubG9nKDIpO1xyXG4vLyAgIHlpZWxkO1xyXG4vLyAgIGNvbnNvbGUubG9nKDMpO1xyXG4vLyAgIHlpZWxkIDQ7XHJcbi8vIH1cclxuLy8g7J2065+wIOygnOuEiOugiOydtO2EsOqwgCDsnojri6TrqbRcclxuLy8gZ2VuKCnsnZgg6rKw6rO864qUIHs8c3VzcGVuZGVkPn1cclxuLy8gZ2VuKCkubmV4dCgp66W8IO2VmOuptCDrp6gg7LKY7J2M7JeQ64qUIOy9mOyGlOywveyXkCAx7J20IOywje2eiOqzoCwg67CY7ZmY6rCS7J2AIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiBmYWxzZX1cclxuLy8g7ZWcIOuyiCDrjZQgZ2VuKCkubmV4dCgp66W8IO2VmOuptCDsvZjshpTssL3sl5AgMuqwgCDssI3tnojqs6AsIOuwmO2ZmOqwkuydgCB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogZmFsc2V9XHJcbi8vIO2VnCDrsogg642UIGdlbigpLm5leHQoKeulvCDtlZjrqbQg7L2Y7IaU7LC97JeQIDPsnbQg7LCN7Z6I6rOgLCDrsJjtmZjqsJLsnYAge3ZhbHVlOiA0LCBkb25lOiB0cnVlfVxyXG4vLyDtlZwg67KIIOuNlCBnZW4oKS5uZXh0KCnrpbwg7ZWY66m0IOy9mOyGlOywveyXkCDslYTrrLTqsoPrj4Qg7JWI7LCN7Z6I6rOgLCDrsJjtmZjqsJLsnYAge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IGZhbHNlfVxyXG5cclxuLy8g7KCI64yAIOupiOy2lOyngCDslYrripQg7KCc64SI66CI7J207YSw6rCAIOyeiOuKlOuNsCwgd2hpbGUodHJ1ZSkg66y47J2064ukLiDsm5Drnpgg66y07ZWcIOuwmOuzteuQmOyWtCDtlITroZzqt7jrnqjsnbQg7KSR7KeA65CY7Ja0IOuyhOumrOuKlCB3aGlsZSh0cnVlKeyngOunjCwgeWllbGTqsIAg7KSR64uo7KCQ7J20IOuQmOyWtOuyhOumrOuvgOuhnCDtlITroZzqt7jrnqjsnbQg7KSR64uo65CY7KeAIOyViuuKlOuLpC5cclxuLy8g65iQIOydtOuypO2KuCDrpqzsiqTrhIjsmYAg67mE7Iq37ZWcIOqyg+ydhCDrp4zrk6Qg7IiY64+EIOyeiOuLpC4g7Ja065akIOy9lOuTnOqwgCDsi6TtlonrkJjrqbQgbmV4dOqwgCDsi6TtlonrkJjrj4TroZ0g7ZWY64qUIC4uLlxyXG4vLyBzYWdh64qUIOydtOqyg+ydhCDsnbTsmqntlbQg7J2067Kk7Yq4IOumrOyKpOuEiOyymOufvCDsnpHrj5ntlZjqsowg7ZWc64ukLiDroZzqt7jsnbgg7JWh7IWY7J20IOuTpOyWtOyYpOuptCDroZzqt7jsnbjsnYQg7Iuk7ZaJ7ZWY64qUIOuTsS4uLlxyXG4vLyByZWR1Y2Vycy91c2VyLmpz7J2YIOyjvOyEnSh0aHVuaynqs7wg6rCZ7J2AIOydvOydhCDtlZjripQg6rKDXHJcblxyXG5pbXBvcnQge1xyXG4gIGFsbCxcclxuICBmb3JrLFxyXG4gIGNhbGwsXHJcbiAgcHV0LFxyXG4gIHRha2VMYXRlc3QsXHJcbiAgdGhyb3R0bGUsXHJcbiAgZGVsYXksXHJcbn0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG4vLyDsnbTqsoPrk6TsnYQgc2FnYSBlZmZlY3Trnbzqs6Ag7ZWc64ukLlxyXG4vLyDsgqzqsIDrpbwg7Kq86rCkIOuVjOuKlCDrpqzrk4DshJzrnpEg67mE7Iq37ZWcIOq4sOykgOycvOuhnCDsqrzqsJzrqbQg65Cc64ukLlxyXG4vLyDri6Ttlontnogg7Lu067CU7J247ZWY64qU6rG0IOuUsOuhnCDsl4bqs6Ag6re464OlIGV4cG9ydCBpbXBvcnTroZwg6rCA64qlXHJcbmltcG9ydCBwb3N0U2FnYSBmcm9tIFwiLi9wb3N0XCI7XHJcbmltcG9ydCB1c2VyU2FnYSBmcm9tIFwiLi91c2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgLy8gYWxs7J2AIOuwsOyXtOydhCDrsJvslYTshJwg67Cw7Je0IOyViOydmCDqsoPrk6TsnYQg7ZWcIOuyiOyXkCjrj5nsi5zsl5ApIOyLpO2WieyLnOy8nCDspIDri6QuXHJcbiAgLy8gZm9ya+uKlCDtlbTri7kg7ZWo7IiY66W8IOyLpO2WieyLnO2CqOuLpC5cclxuICB5aWVsZCBhbGwoW2ZvcmsocG9zdFNhZ2EpLCBmb3JrKHVzZXJTYWdhKV0pO1xyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtcclxuICBhbGwsXHJcbiAgZGVsYXksXHJcbiAgZm9yayxcclxuICBwdXQsXHJcbiAgdGFrZUxhdGVzdCxcclxuICB0aHJvdHRsZSxcclxufSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBzaG9ydGlkIGZyb20gXCJzaG9ydGlkXCI7XHJcbmltcG9ydCB7XHJcbiAgQUREX1BPU1RfUkVRVUVTVCxcclxuICBBRERfUE9TVF9TVUNDRVNTLFxyXG4gIEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gIEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gIFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gIExPQURfUE9TVFNfU1VDQ0VTUyxcclxuICBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgZ2VuZXJhdGVEdW1teVBvc3QsXHJcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuaW1wb3J0IHsgQUREX1BPU1RfVE9fTUUsIFJFTU9WRV9QT1NUX09GX01FIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0c0FQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChcIi9hcGkvcG9zdHNcIiwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkUG9zdHMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogZ2VuZXJhdGVEdW1teVBvc3QoMTApLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdHMoKSB7XHJcbiAgeWllbGQgdGhyb3R0bGUoNTAwMCwgTE9BRF9QT1NUU19SRVFVRVNULCBsb2FkUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvcG9zdFwiLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICBjb25zdCBpZCA9IHNob3J0aWQuZ2VuZXJhdGUoKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBpZCxcclxuICAgICAgICBjb250ZW50OiBhY3Rpb24uZGF0YSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfVE9fTUUsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBpZCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XHJcbiAgLy8gdGhyb3R0bGXsnYAgdGFrZUV2ZXJ57JmAIOqwmeydtCwg67CY67O17KCB7J24IOyalOyyreydhCDrp4nquLAg7JyE7ZW0IOyCrOyaqe2VnOuLpC5cclxuICAvLyB0YWtlRXZlcnnripQg67CY67O17KCB7J24IOyalOyyreydtCDqsJTsnYQg65WMIOydkeuLteydhCDtlZwg67KI66eMIO2VmOuPhOuhnSDtlZjripQg6rKD7J24IOuwmOuptCxcclxuICAvLyB0aHJvdHRsZeydgCDsoJXtlbTsp4Qg7Iuc6rCEIOuCtOyXkCDrlLEg7ZWcIOuyiOunjCDtlbTri7kg7JqU7LKt7J20IOuwnOyDne2VmOuPhOuhnSDtlZjripQg6rKD7J2064ukLlxyXG4gIC8vIOyVhOuemCDsvZTrk5zripQg6rKM7Iuc6riAIOyekeyEseydhCAy7LSIIOyViOyXkOuKlCDrlLEg7ZWcIOuyiOunjCDrs7Trgrwg7IiYIOyeiOuLpC5cclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKFwiL2FwaS9wb3N0XCIsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSxcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENvbW1lbnRBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS9jb21tZW50XCIsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pIHtcclxuICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZENvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICB0cnkge1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIGNvbW1lbnRTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBmb3JrKHdhdGNoTG9hZFBvc3RzKSxcclxuICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuICBdKTtcclxufVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGFsbCwgZGVsYXksIGZvcmssIHB1dCwgdGFrZUxhdGVzdCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IHtcclxuICBMT0dfSU5fUkVRVUVTVCxcclxuICBMT0dfSU5fU1VDQ0VTUyxcclxuICBMT0dfSU5fRkFJTFVSRSxcclxuICBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgTE9HX09VVF9TVUNDRVNTLFxyXG4gIExPR19PVVRfRkFJTFVSRSxcclxuICBTSUdOX1VQX1JFUVVFU1QsXHJcbiAgU0lHTl9VUF9TVUNDRVNTLFxyXG4gIFNJR05fVVBfRkFJTFVSRSxcclxuICBVTkZPTExPV19SRVFVRVNULFxyXG4gIFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgVU5GT0xMT1dfRkFJTFVSRSxcclxuICBGT0xMT1dfUkVRVUVTVCxcclxuICBGT0xMT1dfU1VDQ0VTUyxcclxuICBGT0xMT1dfRkFJTFVSRSxcclxufSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5cclxuZnVuY3Rpb24gZm9sbG93QVBJKGRhdGEpIHtcclxuICAvLyDsi6TsoJzroZwg7ISc67KE7JeQIOyalOyyrSjsoJzrhIjroIjsnbTthLAg7JWE64uYKVxyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS9mb2xsb3dcIiwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBmb2xsb3coYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG5cclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEZPTExPV19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChGT0xMT1dfUkVRVUVTVCwgZm9sbG93KTtcclxufVxyXG5mdW5jdGlvbiB1bmZvbGxvd0FQSShkYXRhKSB7XHJcbiAgLy8g7Iuk7KCc66GcIOyEnOuyhOyXkCDsmpTssq0o7KCc64SI66CI7J207YSwIOyVhOuLmClcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvdW5mb2xsb3dcIiwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bmZvbGxvdyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcblxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5GT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbmZvbGxvdygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIGZvbGxvdyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpIHtcclxuICAvLyDsi6TsoJzroZwg7ISc67KE7JeQIOyalOyyrSjsoJzrhIjroIjsnbTthLAg7JWE64uYKVxyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS9sb2dpblwiLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBjYWxs64+EIO2VtOuLuSDtlajsiJjrpbwg7Iuk7ZaJ7Iuc7YKk64qU642wLCBmb3Jr7JmAIOyVveqwhCDri6TrpbTri6QuXHJcbiAgICAvLyBmb3Jr64qUIOu5hOuPmeq4sCDtlajsiJgg7Zi47LacLCBjYWxs7J2AIOuPmeq4sCDtlajsiJgg7Zi47Lac7J2064ukLlxyXG4gICAgLy8g7KaJIOyXrOq4sOyEnCB5aWVsZCBjYWxsIOuMgOyLoCB5aWVsZCBmb3Jr66W8IOyNqOuyhOumrOuptCwgbG9naW5BUEnsnZgg6rKw6rO86rCAIHJlc3VsdOyXkCDri7TquLDquLAg7KCE7JeQIOuwlOuhnCDri6TsnYwg7KSE66GcIOuEmOyWtOqwgCDrsoTrprDri6QuXHJcbiAgICAvLyBjYWxs7J2EIO2VmOuptCDslZ7snZggbG9nSW5BUEnqsIAg7JmE66OM65CgIOuVjOq5jOyngCDsi6TtlonrkJjsp4Ag7JWK64qU64ukLlxyXG4gICAgLy8g7KaJIGNhbGzsnYAgYXhpb3MucG9zdCgpLnRoZW4ocmVzID0+IHJlcynsspjrn7wg7J6R64+Z7ZWY7KeA66eMLCBmb3Jr66W8IOyXrOq4sOyEnCDsk7DrqbQgYXhpb3MucG9zdCgpIOuSpOyXkCByZXPqsIAg7JeG64qU642wIHJlc+ulvCDssL7ripQg6ry07J20IOuQmOyWtOuyhOumsOuLpC5cclxuICAgIC8vIOuYkCwgY2FsbOqzvCBmb3Jr64qUIOyyqyDrsojsp7gg7J247J6Q66GcIOy9nOuwse2VqOyImCwg65GQIOuyiOynuCDsnbjsnpDrtoDthLDripQg64uk66W4IOuNsOydtO2EsOuTpOydtCDrhJjslrTqsIDripTrjbAsIOydtOuKlCBjYWxsYmFjayhhLCBiLCBjLCAuLi4pIOydtOufsCDsi53snLzroZwg7IKs7Jqp7ZWY64qUIOqyg+qzvCDqsJnri6QuXHJcbiAgICAvLyDslYTrnpgg7JiI7Iuc66Gc64qUIGxvZ0luQVBJKGFjdGlvbi5kYXRhKeyZgCDqsJnsnYAg6rKDXHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7XHJcblxyXG4gICAgLy8g7ISc67KE6rCAIOyXhuuKlCDsg4Htg5zsnbTrr4DroZwg7J6E7Iuc66GcIGRlbGF566W8IOyCrOyaqe2VoCDsmIjsoJXsnbTri6QuIHNldFRpbWVvdXTqs7wg67mE7Iq37ZWY64ukLlxyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcblxyXG4gICAgLy8gcHV07J2AIGRpc3BhdGNo6rCZ7J2AIOqyg+ydtOuLpC5cclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpIHtcclxuICAvLyB0YWtl64qUIO2VtOuLuSDslaHshZjsnbQg7Iuk7ZaJ65CgIOuVjOq5jOyngCDquLDri6TroLjri6TqsIAg65GQIOuyiOynuCDsnbjsnpDroZwg7KCE64us65CcIO2VqOyImOulvCDsi6Ttlonsi5ztgqjri6QuICjslaHshZgg642w7J207YSw64+EIOqwmeydtCDrhJjslrTqsITri6QuKVxyXG4gIC8vIOydtCB0YWtl64qUIOydvO2ajOyaqeydtOudvOyEnCDqt7jrg6Ug7J2066CH6rKMIOyTsOuptCDroZzqt7jsnbjsnYQg7ZWcIOuyiOuwluyXkCDrqrvtlZzri6QuLi5cclxuICAvLyDqt7jrnpjshJwgd2hpbGXrrLjsnYQg7IKs7Jqp7ZWY6rGw64KYLCB0YWtlRXZlcnnroZwg67CU6r+U7IScIOyCrOyaqe2VtCDso7zrqbQg65Cc64ukLlxyXG4gIC8vIOuLqCwgdGFrZeuKlCDrj5nquLDsoIHsnbTsp4Drp4wgdGFrZUV2ZXJ564qUIOu5hOuPmeq4sOyggeycvOuhnCDrj5nsnpHtlZzri6TripQg7LCo7J206rCAIOyeiOuLpC5cclxuICAvLyB0YWtlTGF0ZXN064qUIOuwmOuzteyggeyduCDsmpTssq3sl5Ag64yA7ZW0IOuniOyngOuniSDsnZHri7Xrp4zsnYQg7Leo7ZWY64qUIOqyg+ydtOuLpC5cclxuICAvLyDsmIjrpbwg65Ok66m0LCDsi6TsiJjroZwg65GQIOuyiCDtgbTrpq3tlojsnYQg65WMLCDroZzqt7jsnbgg7JqU7LKt7J20IOuRkCDrsogg6rCA64qU642wLCDsnbQg65WMIOuniOyngOuniSDsmpTssq3sl5Ag64yA7ZWcIOydkeuLteunjOydhCDrsJvslYTsmKTqsowg7ZW0IOykgOuLpC4gKOyalOyyrSDsnpDssrTrpbwg7Leo7IaM7ZWgIOyImOuKlCDsl4bsnYwpXHJcbiAgLy8g6re4656Y7IScIOuztO2GtSB0YWtlTGF0ZXN066W8IOyTtOuLpC5cclxuICAvLyBjb25zb2xlLmxvZyhcInNhZ2EgbG9naW4gcmVxdXJlc3RcIik7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9nSW4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dPdXRBUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL2xvZ291dFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ091dCgpIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dPdXRBUEkpO1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNpZ25VcEFQSSgpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvc2lnbnVwXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogc2lnblVwKCkge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChmb3JrKHdhdGNoRm9sbG93KSwgZm9yayh3YXRjaFVuZm9sbG93KSwgW1xyXG4gICAgZm9yayh3YXRjaExvZ0luKSxcclxuICAgIGZvcmsod2F0Y2hMb2dPdXQpLFxyXG4gICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgXSk7XHJcbn1cclxuIiwiLy8gZm9yIG5leHQtcmVkdXgtd3JhcHBlclxyXG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCI7XHJcbi8vIGltcG9ydCB0aHVua01pZGRlbHdhcmUgZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tIFwiQHJlZHV4LXNhZ2EvY29yZVwiO1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gXCIuLi9zYWdhc1wiO1xyXG5cclxuY29uc3QgbG9nZ2VyTWlkZGxld2FyZSA9XHJcbiAgKHsgZGlzcGF0Y2gsIGdldFN0YXRlIH0pID0+XHJcbiAgKG5leHQpID0+XHJcbiAgKGFjdGlvbikgPT4ge1xyXG4gICAgLy8g66Gc6re466W8IOywjeyWtOyjvOuKlCDqsITri6jtlZwg66+465Ok7Juo7Ja066W8IOunjOuTpOyWtOu0pOuLpC5cclxuICAgIGNvbnNvbGUubG9nKGFjdGlvbik7XHJcbiAgICByZXR1cm4gbmV4dChhY3Rpb24pO1xyXG4gIH07XHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcclxuICAvLyBjb25zdCBtaWRkbGV3YXJlcyA9IFt0aHVua01pZGRlbHdhcmVdO1xyXG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZSwgbG9nZ2VyTWlkZGxld2FyZV07XHJcbiAgLy8g66+465Ok7Juo7Ja0OiDrpqzrjZXsiqTsnZgg6riw64ql7J2EIO2WpeyDgeyLnOy8nOyjvOuKlCDsuZzqtaxcclxuICAvLyAtPiB0aHVua+uKlCDrpqzrjZXsiqTqsIAg67mE64+Z6riwIOyymOumrOulvCDtlaAg7IiYIOyeiOuPhOuhnSDtlbQg7KSMICjtmLjstpztlaAg65WMIOuUlOyKpO2MqOy5mCA9PiDtlZjrgpjsnZgg7JWh7IWY7JeQ7IScIOyXrOufrOuyiCDrlJTsiqTtjKjsuZjqsIAg6rCA64ql7ZW07KeE64ukLilcclxuICAvLyDspoksIO2VmOuCmOydmCDruYTrj5nquLAg7JqU7LKtIOyViOyXkCDsl6zrn6wg6rCc7J2YIOuPmeq4sCDslaHshZjsnbQg6rCA64qlXHJcbiAgY29uc3QgZW5oYW5jZXIgPVxyXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiXHJcbiAgICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSk7XHJcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7XHJcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4LXNhZ2EvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYWtlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaG9ydGlkXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=