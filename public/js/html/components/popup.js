var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Popup = function (_React$Component) {
    _inherits(Popup, _React$Component);

    function Popup() {
        _classCallCheck(this, Popup);

        return _possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).apply(this, arguments));
    }

    _createClass(Popup, [{
        key: "render",
        value: function render() {
            var classes = "popup " + this.props.class;
            return React.createElement(
                "div",
                { className: classes },
                React.createElement(
                    "div",
                    { className: "text" },
                    React.createElement(
                        "div",
                        { className: "popupTitle" },
                        React.createElement(
                            "h1",
                            null,
                            this.props.title
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "popupSubtitle" },
                        React.createElement(
                            "h2",
                            null,
                            this.props.subtitle
                        )
                    )
                ),
                React.createElement("div", { className: "black" })
            );
        }
    }]);

    return Popup;
}(React.Component);