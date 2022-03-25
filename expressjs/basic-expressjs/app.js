const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    // res.send("Hello Johar");
    res.sendFile("./index.html", { root: __dirname});
});

app.get("/about", (req, res) => {
    // res.send("ini adalah halaman about");
    res.sendFile("./about.html", { root: __dirname});
});

app.get("/contact", (req, res) => {
    res.sendFile("./contact.html", { root: __dirname});
});

app.get("/product/:id", (req, res) => {
    res.send(`Product ID: ${req.params.id} <br> Category: ${req.query.category}`);
});

app.use("/", (req, res) => {
    res.status(404);
    // res.send("<h1>404</h1>");
    res.sendFile("./erorPage.html", { root: __dirname});
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});