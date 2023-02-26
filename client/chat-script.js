import { io } from "socket.io-client"

const msg = document.querySelector("#msg-text")
const msgSnedBtn = document.querySelector("#msg-send")
console.log(msg)

const socket = io("http://localhost:3000")
