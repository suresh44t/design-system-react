"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _dataTable = require("../../../../components/data-table");

var _dataTable2 = _interopRequireDefault(_dataTable);

var _column = require("../../../../components/data-table/column");

var _column2 = _interopRequireDefault(_column);

var _cell = require("../../../../components/data-table/cell");

var _cell2 = _interopRequireDefault(_cell);

var _iconSettings = require("../../../../components/icon-settings");

var _iconSettings2 = _interopRequireDefault(_iconSettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var columns = [_react2.default.createElement(_column2.default, {
  key: "opportunity",
  label: "Opportunity Name",
  property: "opportunityName",
  width: "6em"
}), _react2.default.createElement(_column2.default, {
  key: "account-name",
  label: "Account Name",
  property: "accountName",
  width: "5em"
}), _react2.default.createElement(_column2.default, {
  key: "close-date",
  label: "Close Date",
  property: "closeDate",
  width: "5em"
}), _react2.default.createElement(_column2.default, {
  key: "stage",
  label: "Stage",
  property: "stage",
  width: "5em"
}), _react2.default.createElement(_column2.default, {
  key: "confidence",
  label: "Confidence",
  property: "confidence",
  width: "5em"
}), _react2.default.createElement(_column2.default, {
  key: "amount",
  label: "Amount",
  property: "amount",
  width: "5em"
}), _react2.default.createElement(_column2.default, {
  key: "contact",
  label: "Contact",
  property: "contact",
  width: "6em"
})];

var Example =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Example);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Example.__proto__ || Object.getPrototypeOf(Example)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        items: [{
          id: '8IKZHZZV80',
          opportunityName: 'Cloudhub',
          accountName: 'Cloudhub',
          closeDate: '4/14/2015',
          stage: 'Prospecting',
          confidence: '20%',
          amount: '$25k',
          contact: 'jrogers@cloudhub.com'
        }, {
          id: '5GJOOOPWU7',
          opportunityName: 'Cloudhub + Anypoint Connectors',
          accountName: 'Cloudhub',
          closeDate: '4/14/2015',
          stage: 'Prospecting',
          confidence: '20%',
          amount: '$25k',
          contact: 'jrogers@cloudhub.com'
        }, {
          id: '8IKZHZZV81',
          opportunityName: 'Cloudhub',
          accountName: 'Cloudhub',
          closeDate: '4/14/2015',
          stage: 'Prospecting',
          confidence: '20%',
          amount: '$25k',
          contact: 'jrogers@cloudhub.com'
        }]
      }
    }), _temp));
  }

  _createClass(Example, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(_iconSettings2.default, {
        iconPath: "/assets/icons"
      }, _react2.default.createElement("div", {
        style: {
          overflow: 'auto'
        }
      }, _react2.default.createElement("h3", {
        className: "slds-text-heading_medium slds-m-vertical_medium"
      }, "Basic Fixed Layout"), _react2.default.createElement(_dataTable2.default, {
        items: this.state.items,
        id: "DataTableExample-1-default",
        fixedLayout: true
      }, columns)));
    }
  }]);

  return Example;
}(_react2.default.Component);

Object.defineProperty(Example, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 'DataTableExample'
});
exports.default = Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime