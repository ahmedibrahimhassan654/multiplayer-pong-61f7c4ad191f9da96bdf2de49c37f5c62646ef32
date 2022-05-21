const server = require("http").createServer();
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const port = process.env.PORT || 3000;

server.listen(port);
console.log("server is running on port " + port);

io.on("connection", (socket) => {
  console.log("user connected from backend with socket id: " + socket.id);
});
