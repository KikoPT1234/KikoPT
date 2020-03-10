class Home extends React.Component {
    render() {
        return (
            <h2>Hello, my name is Kiko. I'm a student who does Node.JS and Web Developing.</h2>
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