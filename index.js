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

io.on("connection", (socket) => {
    socket.emit('me', socket.id);
    socket.on("disconnect", () => {
        socket.broadcast.emit("user-disconnected", socket.id);
    } );

    socket.on("calluser", ({userToCall, signalData, from, name}) => {
        io.to(userToCall).emit("calluser", {signalData, from, name});
    } );

    socket.on("accept-call", ({signalData, from, name}) => {    
        io.to(from).emit("accept-call", {signalData, from, name});
    } );
});

server.listen(port, () => console.log(`Server is running on port ${port}`));
