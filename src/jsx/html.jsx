class Topnav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <ul>
                    <li>Minehut</li>
                    <li>Other Stuff</li>
                </ul>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="topnav">
                    <Topnav />
                </div>
                <div className="banner">
                    <div className="img"></div>
                    <div className="title"></div>
                </div>
            </div>
        )
    }
}

class Container extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Hello, my name is Kiko, I'm a Node.JS and Web Developer.</h1>
            </div>
        )
    }
}

class Page extends React.Component {
    render() {
        return (
            <div className=".root">
                <Header />
                <Container />
            </div>
        )
    }
}

// =========================================
ReactDOM.render(<Page />, document.querySelector("body"))