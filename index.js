const http = require("http");
const settings = require("./settings.json");
const express =  require("express");
const port = process.env.PORT || 8000
const app = express();
const server = http.createServer(app);
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render('index', { bot: settings.website })
})

app.get("/commands", (req, res) => {
    res.render("commands", {bot: settings.website, commands: settings.commands })
})

app.get("/about", (req, res) => {
    res.render("about", { bot: settings.website })
})

app.get("/contact", (req, res) => {
    res.render("contact", {bot: settings.website })
})

app.get("/success", (req, res) => {
    res.render("success", {bot: settings.website })
})

server.listen(port, () => {
    console.log({
        message: `Server listening on http://localhost:${port}`,
        badge: true
    })
})
