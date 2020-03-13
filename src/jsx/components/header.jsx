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

class Banner extends React.Component {
    render() {
        return (
            <div className="banner">
                <div className="blocks">
                    <div className="block-1">
                        <h1>Kiko</h1>
                    </div>
                </div>
                <h2>Hey, I'm Kiko, and I do Web Development and Node.JS.</h2>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <Topnav />
                <Banner />
            </div>
        )
    }
}
