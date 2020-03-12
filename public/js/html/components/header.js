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
            return React.createElement(
                "div",
                { className: "topnav" },
                React.createElement(
                    "ul",
                    null,
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
            return React.createElement(
                "div",
                { className: "banner" },
                React.createElement(
                    "div",
                    { className: "blocks" },
                    React.createElement("div", { className: "block-1" }),
                    React.createElement("div", { className: "block-2" }),
                    React.createElement("div", { className: "img" })
                ),
                React.createElement(
                    "div",
                    { className: "text" },
                    React.createElement(
                        "h1",
                        null,
                        "Kiko"
                    ),
                    React.createElement(
                        "h2",
                        null,
                        "Hey, I'm Kiko, and I do Web Development and Node.JS."
                    )
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
                "div",
                { className: "header" },
                React.createElement(Topnav, null),
                React.createElement(Banner, null)
            );
        }
    }]);

    return Header;
}(React.Component);