let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        conn.reply(m.chat, `Done!\nSukses Telah Cheat Infinity`, m)
        global.db.data.users[m.sender].money = Infinity
        global.db.data.users[m.sender].limit = Infinity
        global.db.data.users[m.sender].exp = Infinity
        
}
handler.help = ['cinfinity','cheatinfi']
handler.tags = ['premium']
handler.command = /^(cinfinity|cheatinfi)$/i

handler.premium = true

module.exports = handler
