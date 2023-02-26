const express = require("express")
const router = express.Router()
const path = require("path")
const data = require("../data")

router.post("/", (req, res) => {
  //   res.status(200).sendFile(path.resolve(__dirname, "../public/register.html"))
  const { userName } = req.body
  console.log(req.body)
  if (userName) {
    data.push({ id: data.length + 1, userName: userName })
    console.log(data)
    return res.status(200).send(`
    <h3>hello ${userName}</h3>
    <form action="/chat" method="get">
      <button>got to chat</button>
    </form>
    `)
  }
  res.status(401).send("provide name")
})
module.exports = router
