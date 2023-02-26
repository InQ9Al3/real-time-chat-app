const express = require("express")
const router = express.Router()
const path = require("path")
const io = require("socket.io")(3000, {
  cors: {
    origin: ["http://localhost:8080/chat"],
  },
})
router.get("/chat", (req, res) => {
  // router.post("/", (req, res) => {
  //   res.status(200).sendFile(path.resolve(__dirname, "../../client/chat.html"))
  // })
  io.on("connection", (socket) => {
    console.log(socket.id)
  })
})
module.exports = router
