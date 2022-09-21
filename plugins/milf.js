// wahai para para weaboo🗿
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, global.API('https://rest-beni.herokuapp.com/api/randomimage/milf'), 'milf.jpg', '_*Nih Wibu*_', m)
}
handler.help = ['milf']
handler.tags = ['random']
handler.command = /^(milf)$/i
handler.limit = true
module.exports = handler