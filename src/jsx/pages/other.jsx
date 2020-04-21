function Other() {
    return (
        <main>
            <h2>Coming soon...</h2>
        </main>
    )
}

// ==================================

const title = "Kiko"
const subtitle = "Other Stuff"

//===================================

ReactDOM.render(<Page
    value={<Other/>}
    title={title}
    subtitle={subtitle}
    selected="Other Stuff"
    buttons="false"
/>, document.querySelector("body"))