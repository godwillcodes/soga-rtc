const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");

const io = require ("socket.io")(server, {
    cors : {
        origin : "*",
        methods : ["GET", "POST"],
    }
});

app.use(cors());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World");
});

server.listen(port, () => console.log(`Server is running on port ${port}`));
