const forceSecure = require("force-secure-express")
const express = require("express")
const app = express()

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