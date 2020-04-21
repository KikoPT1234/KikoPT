var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Lookup = function (_React$Component) {
    _inherits(Lookup, _React$Component);

    function Lookup() {
        _classCallCheck(this, Lookup);

        return _possibleConstructorReturn(this, (Lookup.__proto__ || Object.getPrototypeOf(Lookup)).apply(this, arguments));
    }

    _createClass(Lookup, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "main",
                { style: { "min-height": "60vh" } },
                React.createElement(
                    "h2",
                    null,
                    "This tool's purpose is to search any server on Minehut, either by name or by id, returning its publicly available information."
                ),
                React.createElement(
                    "form",
                    null,
                    React.createElement("input", { type: "text", placeholder: "Server name or id" }),
                    React.createElement(
                        "button",
                        null,
                        "Search"
                    )
                ),
                React.createElement("span", { className: "error" }),
                React.createElement(
                    "div",
                    { className: "server", style: { "display": "none" } },
                    React.createElement(
                        "div",
                        { className: "header" },
                        React.createElement("div", { className: "name" }),
                        React.createElement("div", { className: "id" })
                    ),
                    React.createElement("div", { className: "main" })
                )
            );
        }
    }]);

    return Lookup;
}(React.Component);

// ===============================

var title = "Kiko";
var subtitle = "Minehut - Server Lookup";

// ===============================

ReactDOM.render(React.createElement(Page, {
    value: React.createElement(Lookup, null),
    title: title,
    subtitle: subtitle,
    selected: "Minehut",
    buttons: "false"
}), document.querySelector("body"));