const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/welcome/welcome.html");
});

app.get("/javascript", (req, res) => {
    res.sendFile(__dirname + "/public/javascript/javascript.html");
});

app.get("/node", (req, res) => {
    res.sendFile(__dirname + "/public/node/node.html");
});

app.get("/APIs", (req, res) => {
    res.sendFile(__dirname + "/public/APIs/APIs.html");
});

app.get("/tools", (req, res) => {
    res.sendFile(__dirname + "/public/tools/tools.html");
});

app.get("/tools/npm", (req, res) => {
    res.sendFile(__dirname + "/public/tools/npm/npm.html");
});

app.get("/tools/nodemon", (req, res) => {
    res.sendFile(__dirname + "/public/tools/nodemon/nodemon.html");
});

app.get("/tools/express", (req, res) => {
    res.sendFile(__dirname + "/public/tools/express/express.html");
});

// access environment variables
const port = process.env.PORT || 8080;

app.listen(port, error => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", Number(port));
});