import { io } from "socket.io-client"

const msgInput = document.querySelector("#msg-text")
const msgSnedBtn = document.querySelector("#msg-send-btn")
const roomInput = document.querySelector("#room")
const joinRoomBtn = document.querySelector("#join-room-btn")
const form = document.querySelector("#form")
console.log(msg)

const socket = io("http://localhost:3000")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const msg = msgInput.value
  const room = roomInput.value

  if (msg === "") return
  snedMsg(msg)
  msgInput.value = ""
})

joinRoomBtn.addEventListener("click", () => {
  const room = roomInput.value
})
