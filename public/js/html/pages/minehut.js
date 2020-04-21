function Minehut() {
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
                    { href: "minehut/lookup", className: "card" },
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