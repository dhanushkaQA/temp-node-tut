const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to our home page");
    } else if (req.url === "/about") {
        res.end("Welcome to our about page");
    } else {
        res.end(`
            <h1>404</h1>
            <p>Page Not found!</p>
            <a href="/">Back</a>
        `);
    }
});

server.listen(5000);
