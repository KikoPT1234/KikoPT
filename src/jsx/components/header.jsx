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
                <div className="title">
                    <h1>I'm Kiko</h1>
                    <h2>Hey there, I'm a student and I've been coding for quite some time. I code in JavaScript and am part of the Minehut community. I love making websites and discord bots, so if you're in need of one, you might as well contact me!</h2>
                    <div className="buttons">
                        <button className="minehut"><img src="images/minehut.png"></img><h3>Minehut</h3></button>
                        <button className="discord"><img src="images/discord.png"></img><h3>Discord</h3></button>
                    </div>
                </div>
                <img src="images/discord.png" className="discord"></img>
                <img src="images/minehut.png" className="minehut"></img>
                <img src="images/html5.png" className="html5"></img>
                <img src="images/nodejs.png" className="nodejs"></img>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <header>
                <Topnav />
                <Banner />
            </header>
        )
    }
}
