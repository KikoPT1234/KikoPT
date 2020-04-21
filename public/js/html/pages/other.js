function Other() {
    return React.createElement(
        "main",
        null,
        React.createElement(
            "h2",
            null,
            "Coming soon..."
        )
    );
}

// ==================================

var title = "Kiko";
var subtitle = "Other Stuff";

//===================================

ReactDOM.render(React.createElement(Page, {
    value: React.createElement(Other, null),
    title: title,
    subtitle: subtitle,
    selected: "Other Stuff",
    buttons: "false"
}), document.querySelector("body"));