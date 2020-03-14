class Page extends React.Component {
    render() {
        return (
            <div className="root">
                <Header class={this.props.class} title={this.props.title} subtitle={this.props.subtitle} buttons={this.props.buttons} selected={this.props.selected}/>
                <div className="separator"></div>
                <Container value={this.props.value}/>
            </div>
        )
    }
}