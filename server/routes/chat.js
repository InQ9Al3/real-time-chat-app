const express = require("express")
const router = express.Router()
const path = require("path")

router.post("/chat", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../../client/chat.html"))
})
module.exports = router
