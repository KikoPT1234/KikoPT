const Container = require("../components/container")
const Header = require("../components/header")

class Page extends React.Component {
    render() {
        return (
            <div className="root">
                <Header />
                <Container />
            </div>
        )
    }
}

// =========================================
ReactDOM.render(<Page />, document.querySelector("body"))