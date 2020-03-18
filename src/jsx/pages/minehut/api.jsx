class API extends React.Component {
    render() {
        return (<main>
            <h2>API.</h2>
        </main>)
    }
}

// =============================

const title = "Kiko"
const subtitle = "Minehut - API Documentation"

// =============================

ReactDOM.render(
    <Page
    value={<API/>}
    title={title}
    subtitle={subtitle}
    selected="Minehut"
    buttons="false"
    />,
    document.querySelector("body"))