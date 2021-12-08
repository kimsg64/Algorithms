webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);


var _templateObject,
    _templateObject2,
    _this = undefined,
    _jsxFileName = "D:\\__My_crafts\\Algorithms For Coding Test\\Other Knowledges for interview\\Next\\CloneTwitter\\prepare\\front\\components\\LoginForm.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var FormWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 10px;\n"])));
_c = FormWrapper;
var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-top: 10px;\n"])));
_c2 = ButtonWrapper;

var LoginForm = function LoginForm(_ref) {
  _s();

  var setIsLoggedIn = _ref.setIsLoggedIn;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      id = _useState[0],
      setId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      password = _useState2[0],
      setPassword = _useState2[1];

  var onChangeId = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setId(e.target.value);
  }, []);
  var onChangePassword = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setPassword(e.target.value);
  }, []);
  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    console.log(id, password);
    setIsLoggedIn(true);
  }, [id, password]);
  var style = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return {
      marginTop: 10
    };
  }, []);
  return __jsx(FormWrapper, {
    onFinish: onSubmitForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: "user-id",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, "\uC544\uC774\uB514"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "user-id",
    value: id,
    onChange: onChangeId,
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: "user-password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "user-password",
    type: "password",
    value: password,
    onChange: onChangePassword,
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  })), __jsx(ButtonWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, "\uB85C\uADF8\uC778"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/signup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, "\uD68C\uC6D0\uAC00\uC785")))));
};

_s(LoginForm, "sR57UiHM+xtf58M9iEQNL+Hn0Hk=");

_c3 = LoginForm;
LoginForm.propTypes = {
  setIsLoggedIn: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

var _c, _c2, _c3;

$RefreshReg$(_c, "FormWrapper");
$RefreshReg$(_c2, "ButtonWrapper");
$RefreshReg$(_c3, "LoginForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiRm9ybVdyYXBwZXIiLCJzdHlsZWQiLCJGb3JtIiwiQnV0dG9uV3JhcHBlciIsImRpdiIsIkxvZ2luRm9ybSIsInNldElzTG9nZ2VkSW4iLCJ1c2VTdGF0ZSIsImlkIiwic2V0SWQiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwib25DaGFuZ2VJZCIsInVzZUNhbGxiYWNrIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25DaGFuZ2VQYXNzd29yZCIsIm9uU3VibWl0Rm9ybSIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZSIsInVzZU1lbW8iLCJtYXJnaW5Ub3AiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBR0MsaUVBQU0sQ0FBQ0MseUNBQUQsQ0FBVCxtS0FBakI7S0FBTUYsVztBQUlOLElBQU1HLGFBQWEsR0FBR0YseURBQU0sQ0FBQ0csR0FBVix3S0FBbkI7TUFBTUQsYTs7QUFJTixJQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUF1QjtBQUFBOztBQUFBLE1BQXBCQyxhQUFvQixRQUFwQkEsYUFBb0I7O0FBQ3ZDLGtCQUFvQkMsc0RBQVEsQ0FBQyxFQUFELENBQTVCO0FBQUEsTUFBT0MsRUFBUDtBQUFBLE1BQVdDLEtBQVg7O0FBQ0EsbUJBQWdDRixzREFBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQSxNQUFPRyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUVBLE1BQU1DLFVBQVUsR0FBR0MseURBQVcsQ0FBQyxVQUFDQyxDQUFELEVBQU87QUFDcENMLFNBQUssQ0FBQ0ssQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBTDtBQUNELEdBRjZCLEVBRTNCLEVBRjJCLENBQTlCO0FBR0EsTUFBTUMsZ0JBQWdCLEdBQUdKLHlEQUFXLENBQUMsVUFBQ0MsQ0FBRCxFQUFPO0FBQzFDSCxlQUFXLENBQUNHLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVg7QUFDRCxHQUZtQyxFQUVqQyxFQUZpQyxDQUFwQztBQUlBLE1BQU1FLFlBQVksR0FBR0wseURBQVcsQ0FBQyxZQUFNO0FBQ3JDTSxXQUFPLENBQUNDLEdBQVIsQ0FBWVosRUFBWixFQUFnQkUsUUFBaEI7QUFDQUosaUJBQWEsQ0FBQyxJQUFELENBQWI7QUFDRCxHQUgrQixFQUc3QixDQUFDRSxFQUFELEVBQUtFLFFBQUwsQ0FINkIsQ0FBaEM7QUFLQSxNQUFNVyxLQUFLLEdBQUdDLHFEQUFPLENBQUM7QUFBQSxXQUFPO0FBQUVDLGVBQVMsRUFBRTtBQUFiLEtBQVA7QUFBQSxHQUFELEVBQTRCLEVBQTVCLENBQXJCO0FBRUEsU0FDRSxNQUFDLFdBQUQ7QUFBYSxZQUFRLEVBQUVMLFlBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxXQUFPLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQywwQ0FBRDtBQUFPLFFBQUksRUFBQyxTQUFaO0FBQXNCLFNBQUssRUFBRVYsRUFBN0I7QUFBaUMsWUFBUSxFQUFFSSxVQUEzQztBQUF1RCxZQUFRLE1BQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQUZGLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sV0FBTyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMsMENBQUQ7QUFDRSxRQUFJLEVBQUMsZUFEUDtBQUVFLFFBQUksRUFBQyxVQUZQO0FBR0UsU0FBSyxFQUFFRixRQUhUO0FBSUUsWUFBUSxFQUFFTyxnQkFKWjtBQUtFLFlBQVEsTUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FQRixFQTBCRSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkNBQUQ7QUFBUSxRQUFJLEVBQUMsU0FBYjtBQUF1QixZQUFRLEVBQUMsUUFBaEM7QUFBeUMsV0FBTyxFQUFFLEtBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREYsRUFJRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBREYsQ0FERixDQUpGLENBMUJGLENBREY7QUF1Q0QsQ0F6REQ7O0dBQU1aLFM7O01BQUFBLFM7QUEyRE5BLFNBQVMsQ0FBQ21CLFNBQVYsR0FBc0I7QUFDcEJsQixlQUFhLEVBQUVtQixpREFBUyxDQUFDQyxJQUFWLENBQWVDO0FBRFYsQ0FBdEI7QUFJZXRCLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuOTU4OWZlMzUzNzQ2NjFjMjkxYWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5jb25zdCBGb3JtV3JhcHBlciA9IHN0eWxlZChGb3JtKWBcclxuICBwYWRkaW5nOiAxMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuYDtcclxuXHJcbmNvbnN0IExvZ2luRm9ybSA9ICh7IHNldElzTG9nZ2VkSW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VJZCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBzZXRJZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IG9uQ2hhbmdlUGFzc3dvcmQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXRGb3JtID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coaWQsIHBhc3N3b3JkKTtcclxuICAgIHNldElzTG9nZ2VkSW4odHJ1ZSk7XHJcbiAgfSwgW2lkLCBwYXNzd29yZF0pO1xyXG5cclxuICBjb25zdCBzdHlsZSA9IHVzZU1lbW8oKCkgPT4gKHsgbWFyZ2luVG9wOiAxMCB9KSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1XcmFwcGVyIG9uRmluaXNoPXtvblN1Ym1pdEZvcm19PlxyXG4gICAgICB7LyogYW50ZOydmCBvbkZpbmlzaOyXkOuKlCBlLnByZXZlbnREZWZhdWx0KCnqsIAg7KCB7Jqp65CY7Ja0IOyeiOuLpC4gKi99XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLWlkXCI+7JWE7J2065SUPC9sYWJlbD5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8SW5wdXQgbmFtZT1cInVzZXItaWRcIiB2YWx1ZT17aWR9IG9uQ2hhbmdlPXtvbkNoYW5nZUlkfSByZXF1aXJlZCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItcGFzc3dvcmRcIj7ruYTrsIDrsojtmLg8L2xhYmVsPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgbmFtZT1cInVzZXItcGFzc3dvcmRcIlxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qXHJcbiAgICAgIOyCrOyLpCDsnbTroIfqsowg7J2465287J24IOyKpO2DgOydvOydhCDso7zrqbQg7JWI65Cc64ukLlxyXG4gICAgICDsmZzrg5DtlZjrqbQg66qo65OgIOqwneyytOuKlCDri6TrpbTquLAg65WM66y47JeQICh7fSAhPT0ge30pXHJcbiAgICAgIOyKpO2DgOydvOyXkCDsoITri6zrkJjripQgeyBtYXJnaW5Ub3A6IFwiMTBweFwiIH0g6rCd7LK0IOuVjOusuOyXkCDsi6TsoJzroZwg67OA7ZWcIOqyg+ydtCDsl4bsnYzsl5Drj4QgZGl27YOc6re4IOyghOyytOqwgCDrpqzroIzrjZTrp4HrkJjslrTrsoTrprxcclxuICAgICAgKi99XHJcbiAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIgfX0+ICovfVxyXG4gICAgICB7Lyog7JWE64uI66m0IOydtOugh+qyjCB1c2VNZW1v66W8IOyNqOyEnCBzdHlsZeyXkCDrk6TslrTqsIgg6rCd7LK066W8IOy6kOyLse2VtCDrkZDrqbQg66as66CM642U66eB7J20IOuwqeyngOuQnOuLpC4gKi99XHJcbiAgICAgIHsvKiA8ZGl2IHN0eWxlPXtzdHlsZX0+ICovfVxyXG4gICAgICA8QnV0dG9uV3JhcHBlcj5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIiBsb2FkaW5nPXtmYWxzZX0+XHJcbiAgICAgICAgICDroZzqt7jsnbhcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxCdXR0b24+7ZqM7JuQ6rCA7J6FPC9CdXR0b24+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L0J1dHRvbldyYXBwZXI+XHJcbiAgICA8L0Zvcm1XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5Mb2dpbkZvcm0ucHJvcFR5cGVzID0ge1xyXG4gIHNldElzTG9nZ2VkSW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=