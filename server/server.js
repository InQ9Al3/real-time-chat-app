const server = require("http").createServer()
const io = require("socket.io")(server, {
  cors: {
    origin: ["http://localhost:4000/"],
  },
})

io.on("connection", (socket) => {
  console.log(socket.id)
})
server.listen(3000, () => {
  console.log("Server started on port 3000")
})
