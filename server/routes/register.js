const express = require("express")
const router = express.Router()
const data = require("../data")

router.post("/", (req, res) => {
  const { userName } = req.body
  if (userName) {
    //data.push({ id: data.length + 1, userName: userName })
    return res.status(200).send(`
    <h3>hello ${userName}</h3>
    <form action="/chat" method="post">
      <button>go to chat</button>
    </form>
    `)
  }
  res.status(401).send("provide name")
})
module.exports = router
