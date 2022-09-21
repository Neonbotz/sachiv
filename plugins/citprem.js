let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        conn.reply(m.chat, `Done!\nSukses Telah Ngechit`, m)
        global.db.data.users[m.sender].money = 99999999999999999999999999999999999999999
        global.db.data.users[m.sender].limit = 99999999999999999999999999999999999999999
        global.db.data.users[m.sender].level = 10000
        
}
handler.help = ['ngechit']
handler.tags = ['premium']
handler.command = /^(ngechit)$/i

handler.premium = true

module.exports = handler
