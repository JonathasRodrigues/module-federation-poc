"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var React = _interopRequireWildcard(require("react"));

var _Table = _interopRequireDefault(require("@eduzz/houston-ui/Table"));

var _ThemeProvider = _interopRequireDefault(require("@eduzz/houston-ui/ThemeProvider"));

var _Typography = _interopRequireDefault(require("@eduzz/houston-ui/Typography"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var List = function List() {
  var _React$useState = React.useState(1),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      page = _React$useState2[0],
      setPage = _React$useState2[1];

  var _React$useState3 = React.useState(10),
      _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
      perPage = _React$useState4[0],
      setPerPage = _React$useState4[1];

  var _React$useState5 = React.useState(function () {
    return new Array(5).fill('a').map(function (_, index) {
      return {
        id: index + 1,
        name: "Product ".concat(index),
        description: "Description ".concat(index),
        price: index
      };
    });
  }),
      _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 1),
      rows = _React$useState6[0];

  return /*#__PURE__*/React.createElement(_ThemeProvider["default"], null, /*#__PURE__*/React.createElement(_Typography["default"], {
    size: "xl"
  }, "Products"), /*#__PURE__*/React.createElement(_Table["default"], {
    stripedRows: true
  }, /*#__PURE__*/React.createElement(_Table["default"].Header, null, /*#__PURE__*/React.createElement(_Table["default"].Column, {
    width: 50
  }, "#"), /*#__PURE__*/React.createElement(_Table["default"].Column, null, "Nome"), /*#__PURE__*/React.createElement(_Table["default"].Column, null, "Email"), /*#__PURE__*/React.createElement(_Table["default"].Column, {
    align: "right"
  }, "Valor")), /*#__PURE__*/React.createElement(_Table["default"].Body, null, /*#__PURE__*/React.createElement(_Table["default"].Empty, {
    count: rows.length
  }), rows.map(function (row, index) {
    return /*#__PURE__*/React.createElement(_Table["default"].Row, {
      data: row,
      index: index,
      key: row.id
    }, /*#__PURE__*/React.createElement(_Table["default"].Cell, {
      mobileSize: 1
    }, row.id, "."), /*#__PURE__*/React.createElement(_Table["default"].Cell, {
      mobileSize: 11
    }, row.name), /*#__PURE__*/React.createElement(_Table["default"].Cell, {
      mobileSize: 6
    }, row.description), /*#__PURE__*/React.createElement(_Table["default"].Cell, {
      mobileSize: 6,
      align: "right"
    }, row.price));
  })), /*#__PURE__*/React.createElement(_Table["default"].Pagination, {
    page: page,
    perPage: perPage,
    total: 100,
    onChangePage: setPage,
    onChangePerPage: setPerPage
  })));
};

exports.List = List;