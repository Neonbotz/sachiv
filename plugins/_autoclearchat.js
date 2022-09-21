let handler = m => m

handler.before = async function (m, { conn }) {
let chat = db.data.chats[m.chat]
let user = db.data.users[m.sender]

    if (chat.clearchat && !chat.isBanned && !user.banned && !m.isBaileys) {
       conn.chatModify( { delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.chat)
     }
    return !0
}
module.exports = handler