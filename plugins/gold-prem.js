let handler = async m => {

let teks = `
ᴘᴀᴋᴇᴛ ᴘʀᴇᴍɪᴜᴍ ɢᴏʟᴅ ⍟

- 10k / 60 Hari

ᴍɪɴᴀᴛ ? ᴄʜᴀᴛ : @${global.owner[0]} untuk order:)
`
    conn.reply(m.chat, teks, m)
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
    conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.command = /^(gold)$/i

module.exports = handler