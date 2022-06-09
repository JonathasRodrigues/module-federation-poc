"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _reactDom = _interopRequireDefault(require("react-dom"));

var App = function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, "Name: sales"), /*#__PURE__*/React.createElement("div", null, "Framework: react"), /*#__PURE__*/React.createElement("div", null, "Language: TypeScript"));
};

_reactDom["default"].render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));