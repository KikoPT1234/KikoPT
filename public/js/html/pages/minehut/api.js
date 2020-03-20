var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var API = function (_React$Component) {
    _inherits(API, _React$Component);

    function API() {
        _classCallCheck(this, API);

        return _possibleConstructorReturn(this, (API.__proto__ || Object.getPrototypeOf(API)).apply(this, arguments));
    }

    _createClass(API, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "main",
                null,
                React.createElement(
                    "h2",
                    null,
                    "Welcome to the Minehut API Documentation. The Minehut API is what connects Minehut's front-end and back-end together, making it possible for a website or application to do things like start up a server, send commands, and change a file through HTTP requests. ",
                    React.createElement("br", null),
                    React.createElement(
                        "em",
                        null,
                        "Special thanks to DeltaRays#0054. Documentation inspired by Vrganj and, you guessed it, Delta.",
                        React.createElement("br", null),
                        React.createElement(
                            "span",
                            { style: { "opacity": ".2", "font-size": ".5rem" } },
                            "Seriously, Delta is a god. What he isn't is helpful, though."
                        )
                    )
                ),
                React.createElement("input", { type: "text", placeholder: "Search endpoints", id: "api-search" })
            );
        }
    }]);

    return API;
}(React.Component);

// =============================

var title = "Kiko";
var subtitle = "Minehut - API Documentation";

// =============================

ReactDOM.render(React.createElement(Page, {
    value: React.createElement(API, null),
    title: title,
    subtitle: subtitle,
    selected: "Minehut",
    buttons: "false"
}), document.querySelector("body"));