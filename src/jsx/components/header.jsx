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

module.exports = class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <Topnav />
                <div className="banner">
                    <div className="img"></div>
                    <div className="title"></div>
                </div>
            </div>
        )
    }
}
