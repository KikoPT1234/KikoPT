class API extends React.Component {
    render() {
        return (<main>
            <h2>Welcome to the Minehut API Documentation. The Minehut API is what connects Minehut's front-end and back-end together, making it possible for a website or application to do things like start up a server, send commands, and change a file through HTTP requests. <br/><em>Special thanks to DeltaRays#0054. Documentation inspired by Vrganj.</em></h2>
            <input type="text" placeholder="Search endpoints" id="api-search"/>
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