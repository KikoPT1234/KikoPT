class Lookup extends React.Component {
    render() {
        return (
            <main style={{"min-height": "60vh"}}>
                <h2>This tool's purpose is to search any server on Minehut, either by name or by id, returning its publicly available information.</h2>
                <form>
                    <input type="text" placeholder="Server name or id"/>
                    <button>Search</button>
                </form>
                <span className="error"></span>
                <div className="server" style={{"display": "none"}}>
                    <div className="header">
                        <div className="name"></div>
                        <div className="id"></div>
                    </div>
                    <div className="main">

                    </div>
                </div>
            </main>
        )
    }
}

// ===============================

const title = "Kiko"
const subtitle = "Minehut - Server Lookup"

// ===============================

ReactDOM.render(<Page
    value={<Lookup/>}
    title={title}
    subtitle={subtitle}
    selected="Minehut"
    buttons="false"
/>, document.querySelector("body"))