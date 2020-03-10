class Page extends React.Component {
    render() {
        return (
            <div className="root">
                <Header selected={this.props.selected}/>
                <Container value={this.props.value}/>
            </div>
        )
    }
}