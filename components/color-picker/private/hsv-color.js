"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _keyCode = require("../../../utilities/key-code");

var _keyCode2 = _interopRequireDefault(_keyCode);

var _radioButtonGroup = require("../../../components/radio-button-group");

var _radioButtonGroup2 = _interopRequireDefault(_radioButtonGroup);

var _radio = require("../../../components/radio-button-group/radio");

var _radio2 = _interopRequireDefault(_radio);

var _color = require("../../../utilities/color");

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var handleClick = function handleClick(event, rangeIndicator, _ref) {
  var onSaturationValueChange = _ref.onSaturationValueChange;
  var rect = event.currentTarget.getBoundingClientRect();
  rangeIndicator.focus();
  onSaturationValueChange(event, {
    saturation: Math.round((event.clientX - rect.left) / rect.width * 100),
    value: Math.round((rect.bottom - event.clientY) / rect.height * 100)
  });
};

var handleKeyDown = function handleKeyDown(event, _ref2) {
  var _keyDownCallbacks;

  var onSaturationNavigate = _ref2.onSaturationNavigate,
      onValueNavigate = _ref2.onValueNavigate;
  var keyDownCallbacks = (_keyDownCallbacks = {}, _defineProperty(_keyDownCallbacks, _keyCode2.default.LEFT, function (multiplier) {
    onSaturationNavigate(event, {
      delta: multiplier * -1
    });
  }), _defineProperty(_keyDownCallbacks, _keyCode2.default.RIGHT, function (multiplier) {
    onSaturationNavigate(event, {
      delta: multiplier
    });
  }), _defineProperty(_keyDownCallbacks, _keyCode2.default.UP, function (multiplier) {
    onValueNavigate(event, {
      delta: multiplier
    });
  }), _defineProperty(_keyDownCallbacks, _keyCode2.default.DOWN, function (multiplier) {
    onValueNavigate(event, {
      delta: multiplier * -1
    });
  }), _keyDownCallbacks);

  if (keyDownCallbacks[event.keyCode]) {
    event.preventDefault();
    keyDownCallbacks[event.keyCode](event.shiftKey ? 10 : 1);
  }
};

var selectedStyle = {
  border: '1px solid #9e9e9e',
  boxShadow: 'rgb(117, 112, 112) 1px 1px 1px',
  marginRight: '2px'
};
var unselectedStyle = {
  border: '1px solid #9e9e9e',
  marginRight: '2px'
};

var HsvColor =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HsvColor, _React$Component);

  function HsvColor() {
    var _ref3;

    var _temp, _this;

    _classCallCheck(this, HsvColor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref3 = HsvColor.__proto__ || Object.getPrototypeOf(HsvColor)).call.apply(_ref3, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "handleSwatchChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        _this.setState({
          isTransparentSelected: event.target.value === ''
        });

        _this.props.onSwatchChange(event);
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "isTransparent", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this.props.color.hex === '';
      }
    }), _temp));
  }

  _createClass(HsvColor, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var style = {
        border: 'none',
        borderRadius: 'unset'
      };
      var swatchStyle = this.isTransparent() ? _objectSpread({}, unselectedStyle) : _objectSpread({}, selectedStyle);
      var transparentSwatchStyle = this.isTransparent() ? _objectSpread({}, selectedStyle) : _objectSpread({}, unselectedStyle); // when working color is transparent: either use the previous color or default to black

      var fallbackWorkingColor = this.props.previousColor.hex ? this.props.previousColor : _color2.default.getNewColor({
        hex: '#000000'
      });
      var workingColor = this.isTransparent() ? fallbackWorkingColor : this.props.color;
      return _react2.default.createElement("div", null, _react2.default.createElement("p", {
        className: "slds-assistive-text",
        id: "color-picker-instructions-".concat(this.props.id)
      }, this.props.assistiveText.saturationValueGrid), _react2.default.createElement("div", {
        className: "slds-color-picker__custom-range",
        style: {
          background: "hsl(".concat(workingColor.hsv.hue, ", 100%, 50%)")
        },
        onClick: function onClick(event) {
          handleClick(event, _this2.rangeIndicator, {
            onSaturationValueChange: _this2.props.onSaturationValueChange
          });
        },
        role: "presentation"
      }, _react2.default.createElement("a", {
        "aria-atomic": "true",
        "aria-describedby": "color-picker-instructions-".concat(this.props.id),
        "aria-live": "assertive",
        className: "slds-color-picker__range-indicator",
        onKeyDown: function onKeyDown(event) {
          handleKeyDown(event, _objectSpread({}, _this2.props));
        },
        ref: function ref(rangeIndicator) {
          _this2.rangeIndicator = rangeIndicator;
        },
        role: "button",
        style: {
          bottom: "".concat(workingColor.hsv.value, "%"),
          left: "".concat(workingColor.hsv.saturation, "%")
        },
        tabIndex: 0
      })), _react2.default.createElement("div", {
        className: "slds-color-picker__hue-and-preview"
      }, _react2.default.createElement("label", {
        className: "slds-assistive-text",
        htmlFor: "color-picker-input-range-".concat(this.props.id)
      }, this.props.assistiveText.hueSlider), _react2.default.createElement("input", {
        type: "range",
        min: "0",
        max: "360",
        className: "slds-color-picker__hue-slider",
        id: "color-picker-input-range-".concat(this.props.id),
        value: workingColor.hsv.hue,
        onChange: this.props.onHueChange
      }), _react2.default.createElement(_radioButtonGroup2.default, {
        name: "".concat(this.props.id, "-color-picker-swatch-toggle-button-group"),
        assistiveText: {
          label: 'Toggle Transparency'
        },
        style: style,
        onChange: this.handleSwatchChange
      }, _react2.default.createElement(_radio2.default, {
        checked: !this.isTransparent(),
        id: "color-picker-active-working-color-swatch-".concat(this.props.id),
        key: "working-color",
        label: this.props.labels.customTabActiveWorkingColorSwatch,
        style: swatchStyle,
        value: workingColor.hex,
        variant: "swatch"
      }), _react2.default.createElement(_radio2.default, {
        checked: this.isTransparent(),
        id: "color-picker-transparent-swatch-".concat(this.props.id),
        key: "transparent",
        label: this.props.labels.customTabTransparentSwatch,
        style: transparentSwatchStyle,
        value: "" // transparent
        ,
        variant: "swatch"
      }))));
    }
  }]);

  return HsvColor;
}(_react2.default.Component);

Object.defineProperty(HsvColor, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 'SLDSHsvColor'
});
exports.default = HsvColor;