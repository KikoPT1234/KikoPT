class Page extends React.Component {
    render() {
        return (
            <div className="root">
                <Header selected={this.props.selected}/>
                <div className="separator"></div>
                <Container value={this.props.value}/>
            </div>
        )
    }
}