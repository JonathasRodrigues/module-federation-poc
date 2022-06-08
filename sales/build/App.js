"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _reactDom = _interopRequireDefault(require("react-dom"));

require("./index.css");

var _List = _interopRequireDefault(require("./components/List"));

var App = function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", null, "Name: sales"), /*#__PURE__*/React.createElement("div", null, "Framework: react"), /*#__PURE__*/React.createElement("div", null, "Language: TypeScript"), /*#__PURE__*/React.createElement("div", null, "CSS: Empty CSS"), /*#__PURE__*/React.createElement(_List["default"], null));
};

_reactDom["default"].render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));