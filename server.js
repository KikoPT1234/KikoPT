const express = require("express")
const app = express()

app.use((request, response, next) => {
    console.log(request.headers.host, request.url)
    if (!request.secure) {
        response.redirect("https://" + request.headers.host + request.url);
    }
    next()
});

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/views/home.html`)
})
app.get("/home", (req, res) => {
    res.sendFile(`${__dirname}/views/home.html`)
})

app.listen(process.env.PORT || 80)

module.exports = app