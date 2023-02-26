const express = require("express")
const app = express()
const path = require("path")
const register = require("./routes/register")
const chat = require("./routes/chat")

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use("/register", register)
app.use("/chat", chat)

app.get("/", (req, res) => {
  const homeFile = path.resolve(__dirname, "../client/homePage.html")
  res.status(200).sendFile(homeFile)
})

app.listen(8080, () => {
  console.log(`listening on port 8080`)
})
