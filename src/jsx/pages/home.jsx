class Home extends React.Component {
    render() {
        return (
            <h2>Welcome to my website. Here you will find useful tools for the Minehut community such as docs, server info, and others.</h2>
        )
    }
}


// =========================================

const title = "I'm Kiko"
const subtitle = "Hey there, I'm a student and I've been coding for quite some time. I code in JavaScript and am part of the Minehut community. I love making websites and discord bots, so if you're in need of one, you might as well contact me!"

// =========================================
ReactDOM.render(
    <Page 
        value={<Home/>} 
        title={title}
        subtitle={subtitle} 
        buttons="true"
        selected="Home" 
    />
, document.querySelector("body"))