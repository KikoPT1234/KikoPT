var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Minehut = function (_React$Component) {
    _inherits(Minehut, _React$Component);

    function Minehut() {
        _classCallCheck(this, Minehut);

        return _possibleConstructorReturn(this, (Minehut.__proto__ || Object.getPrototypeOf(Minehut)).apply(this, arguments));
    }

    _createClass(Minehut, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "main",
                null,
                React.createElement(
                    "h2",
                    null,
                    "Welcome to the Minehut page. You can check out the API docs, server stats, and server lookup."
                ),
                React.createElement(
                    "div",
                    { className: "no-container" },
                    React.createElement(
                        "div",
                        { className: "cards" },
                        React.createElement(
                            "a",
                            { href: "minehut/api", className: "card" },
                            React.createElement(
                                "h1",
                                null,
                                "API Documentation"
                            )
                        ),
                        React.createElement(
                            "a",
                            { href: "#", className: "card" },
                            React.createElement(
                                "h1",
                                null,
                                "Server Statistics"
                            )
                        ),
                        React.createElement(
                            "a",
                            { href: "#", className: "card" },
                            React.createElement(
                                "h1",
                                null,
                                "Server Lookup"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Minehut;
}(React.Component);

// =========================================

var title = "Kiko";
var subtitle = "Minehut";

// =========================================
ReactDOM.render(React.createElement(Page, {
    value: React.createElement(Minehut, null),
    title: title,
    subtitle: subtitle,
    buttons: "false",
    selected: "Minehut"
}), document.querySelector("body"));