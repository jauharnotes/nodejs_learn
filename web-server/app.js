const fs = require("fs");
const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    const renderHtml = (path, res) => {
      fs.readFile(path, (err, data) => {
        if (err) {
          res.writeHead(404);
          res.write("Error: file not found");
        } else {
          res.write(data);
        }
        res.end();
      });
    };

    const url = req.url;
    if (url === "/about") {
      renderHtml("./about.html", res);
    } else if (url === "/contact") {
      renderHtml("./contact.html", res);
    } else {
      renderHtml("./index.html", res);
    }
  })
  .listen(3000, () => {
    console.log("Server is listening on port 30000");
  });
