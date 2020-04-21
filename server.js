const forceSecure = require("force-secure-express")
const express = require("express")
const app = express()
const fetch = require("node-fetch")

app.use(forceSecure([
    "kikopt.herokuapp.com"
]));

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.status(200).sendFile(`${__dirname}/views/home.html`)
})
app.get("/home", (req, res) => {
    res.status(200).sendFile(`${__dirname}/views/home.html`)
})



app.get("/minehut", (req, res) => {
    res.status(200).sendFile(`${__dirname}/views/minehut.html`)
})

app.get("/minehut/api", (req, res) => {
    res.status(200).sendFile(`${__dirname}/views/minehut/api.html`)
})

app.get("/minehut/api/json", (req, res) => {
    res.status(200).json(require(`./docs.json`))
})

app.get("/minehut/lookup", (req, res) => {
    res.status(200).sendFile(`${__dirname}/views/minehut/lookup.html`)
})


app.get("/other", (req, res) => {
    res.status(200).sendFile(`${__dirname}/views/other.html`)
})

app.get("/api/server/:name", (req, res) => {
    const s = fetch(`https://api.minehut.com/server/${req.params.name}${req.params.name.length === 24 ? "" : "?byName=true"}`)
    const p = fetch(`https://api.minehut.com/plugins_public`)
    Promise.all([s, p]).then(async responses => {
        if (responses.some.status === 502) return res.status(502).json({"error": "Bad Gateway"})
        const {server} = await responses[0].json()
        const {all: plugins} = await responses[1].json()
        server.plugins = plugins.filter(p => server.active_plugins.includes(p._id) || server.purchased_plugins.includes(p._id)).map(p => p.name)
        delete server.purchased_plugins
        delete server.active_plugins
        delete server.plugins_loaded
        res.status(200).json(server)
    })
})

app.use("/", (req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    if (error.status === 404) {
        res.sendFile(__dirname + "/views/notfound.html")
    }
    else {
        res.json({
            error: {
                message: error.message
            }
        })
    }
})

app.listen(process.env.PORT || 80)

module.exports = app