class Home extends React.Component {
    render() {
        return (
            <h2>Welcome to my website. Here you will find useful tools for the Minehut community such as docs, server info, and others.</h2>
        )
    }
}

// =========================================
ReactDOM.render(
    <Page 
        value={<Home/>} 
        selected="Home"
    />
, document.querySelector("body"))