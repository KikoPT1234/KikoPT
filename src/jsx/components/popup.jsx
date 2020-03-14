class Popup extends React.Component {
    render() {
        const classes = "popup " + this.props.class
        const style = {background: this.props.color || "#555"}
        return (
            <div className={classes}>
                <div className="text">
                    <div className="popupTitle" style={style}>
                        <h1>{this.props.title}</h1>
                    </div>
                    <div className="popupSubtitle">
                        <h2>{this.props.subtitle}</h2>
                    </div>
                </div>
                <div className="black"></div>
            </div>
        )
    }
}