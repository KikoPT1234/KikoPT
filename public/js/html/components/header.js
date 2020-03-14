var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Topnav = function (_React$Component) {
    _inherits(Topnav, _React$Component);

    function Topnav() {
        _classCallCheck(this, Topnav);

        return _possibleConstructorReturn(this, (Topnav.__proto__ || Object.getPrototypeOf(Topnav)).apply(this, arguments));
    }

    _createClass(Topnav, [{
        key: "render",
        value: function render() {
            var topnav = this;
            var array = ["Home", "Minehut", "Other Stuff"];
            return React.createElement(
                "div",
                { id: this.props.selected, className: "topnav" },
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Home"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Minehut"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Other Stuff"
                    )
                )
            );
        }
    }]);

    return Topnav;
}(React.Component);

var Banner = function (_React$Component2) {
    _inherits(Banner, _React$Component2);

    function Banner() {
        _classCallCheck(this, Banner);

        return _possibleConstructorReturn(this, (Banner.__proto__ || Object.getPrototypeOf(Banner)).apply(this, arguments));
    }

    _createClass(Banner, [{
        key: "render",
        value: function render() {
            var buttons = this.props.buttons === "true" ? React.createElement(
                "div",
                { className: "buttons" },
                React.createElement(
                    "button",
                    { className: "minehut" },
                    React.createElement("img", { src: "images/minehut.png" }),
                    React.createElement(
                        "h3",
                        null,
                        "Minehut"
                    )
                ),
                React.createElement(
                    "button",
                    { className: "discord" },
                    React.createElement("img", { src: "images/discord.png" }),
                    React.createElement(
                        "h3",
                        null,
                        "Discord"
                    )
                ),
                React.createElement(Popup, { "class": "discord", title: "Discord", subtitle: "Contact me on Discord @KikoPT#1234" })
            ) : React.createElement("div", null);
            return React.createElement(
                "div",
                { className: "banner" },
                React.createElement(
                    "div",
                    { className: "title" },
                    React.createElement(
                        "h1",
                        null,
                        this.props.title
                    ),
                    React.createElement(
                        "h2",
                        null,
                        this.props.subtitle
                    ),
                    buttons
                ),
                React.createElement(
                    "div",
                    { className: "images" },
                    React.createElement("img", { src: "images/discord.png", className: "discord" }),
                    React.createElement("img", { src: "images/minehut.png", className: "minehut" }),
                    React.createElement("img", { src: "images/html5.png", className: "html5" }),
                    React.createElement("img", { src: "images/nodejs.png", className: "nodejs" })
                )
            );
        }
    }]);

    return Banner;
}(React.Component);

var Header = function (_React$Component3) {
    _inherits(Header, _React$Component3);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "header",
                null,
                React.createElement(Topnav, { selected: this.props.selected }),
                React.createElement(Banner, { title: this.props.title, subtitle: this.props.subtitle, buttons: this.props.buttons })
            );
        }
    }]);

    return Header;
}(React.Component);