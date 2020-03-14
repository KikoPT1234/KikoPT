class Minehut extends React.Component {
    render() {
        return (
            <h2>Minehut.</h2>
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