class Minehut extends React.Component {
    render() {
        return (
            <main>
                <h2>Welcome to the Minehut page. You can check out the API docs, server stats, and server lookup.</h2>
                <div className="no-container">
                    <div className="cards">
                        <a href="minehut/api" className="card"><h1>API Documentation</h1></a>
                        <a href="#" className="card"><h1>Server Statistics</h1></a>
                        <a href="#" className="card"><h1>Server Lookup</h1></a>
                    </div>
                </div>
            </main>
        )
    }
}


// =========================================

const title = "Kiko"
const subtitle = "Minehut"

// =========================================
ReactDOM.render(
    <Page 
        value={<Minehut/>} 
        title={title}
        subtitle={subtitle} 
        buttons="false"
        selected="Minehut" 
    />
, document.querySelector("body"))