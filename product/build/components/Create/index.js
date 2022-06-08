"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Create = void 0;

var React = _interopRequireWildcard(require("react"));

var _Input = _interopRequireDefault(require("@eduzz/houston-ui/Forms/Input"));

var _Typography = _interopRequireDefault(require("@eduzz/houston-ui/Typography"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//import Select from '@eduzz/houston-ui/Forms/Select';
// const options = [
//   { value: 1, label: 'Education' },
//   { value: 2, label: 'Development' },
//   { value: 3, label: 'Digital Marketing' },
//   { value: 4, label: 'Games' }
// ];
var Create = function Create() {
  //const [multiple, setMultiple] = React.useState([]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Typography["default"], {
    size: "xl"
  }, "Create a new product"), /*#__PURE__*/React.createElement(_Input["default"], {
    label: "Name",
    value: ''
  }), /*#__PURE__*/React.createElement(_Input["default"], {
    label: "Description",
    multiline: true,
    value: ''
  }));
};

exports.Create = Create;