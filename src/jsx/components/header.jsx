class Topnav extends React.Component {
    render() {
        return (
            <div id={this.props.selected} className="topnav">
                <ul>
                    <li><a href="./home">Home</a></li>
                    <li><a href="./minehut">Minehut</a></li>
                    <li><a href="./other">Other Stuff</a></li>
                </ul>
            </div>
        )
    }
}

class Banner extends React.Component {
    render() {
        const buttons = this.props.buttons === "true" ? <div className="buttons">
            <button className="minehut"><img src="images/minehut.png"></img><h3>Minehut</h3></button>
            <button className="discord"><img src="images/discord.png"></img><h3>Discord</h3></button>
            <Popup class="discord" title="Discord" subtitle="Contact me on Discord @KikoPT#1234" color="linear-gradient(-45deg, #5768a7, #738ADB)"/>
        </div> : <div></div>
        const className = this.props.class ? this.props.class + " title" : "title"
        return (
            <div className="banner">
                <div className={className}>
                    <h1>{this.props.title}</h1>
                    <h2>{this.props.subtitle}</h2>
                    {buttons}
                </div>
                <div className="images">
                    <img src="images/discord.png" className="discord"></img>
                    <img src="images/minehut.png" className="minehut"></img>
                    <img src="images/html5.png" className="html5"></img>
                    <img src="images/nodejs.png" className="nodejs"></img>
                </div>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <header>
                <Topnav selected={this.props.selected}/>
                <Banner class={this.props.class} title={this.props.title} subtitle={this.props.subtitle} buttons={this.props.buttons}/>
            </header>
        )
    }
}
